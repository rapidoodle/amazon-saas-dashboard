/**
 * Step 2 of Amazon OAuth — Amazon redirects here after seller authorization.
 *
 * GET /api/amazon/oauth/callback?spapi_oauth_code=...&state=...&selling_partner_id=...
 *
 * We exchange the OAuth code for a refresh token, create/update the store's
 * AmazonCredentials record, and redirect to the dashboard.
 */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { encrypt } from "@/lib/encryption";
import crypto from "crypto";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { searchParams } = req.nextUrl;
  const code = searchParams.get("spapi_oauth_code");
  const state = searchParams.get("state");
  const sellingPartnerId = searchParams.get("selling_partner_id");

  // ── Validate state (CSRF check) ─────────────────────────────────────────────
  const expectedState = crypto
    .createHmac("sha256", process.env.NEXTAUTH_SECRET ?? "secret")
    .update(session.user.id)
    .digest("hex");

  if (state !== expectedState) {
    return NextResponse.redirect(
      new URL("/connect?error=invalid_state", req.url)
    );
  }

  if (!code || !sellingPartnerId) {
    return NextResponse.redirect(
      new URL("/connect?error=missing_params", req.url)
    );
  }

  // ── Exchange code for refresh token ─────────────────────────────────────────
  try {
    const tokenRes = await fetch("https://api.amazon.com/auth/o2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: `${process.env.NEXTAUTH_URL}/api/amazon/oauth/callback`,
        client_id: process.env.AMAZON_CLIENT_ID!,
        client_secret: process.env.AMAZON_CLIENT_SECRET!,
      }),
    });

    if (!tokenRes.ok) {
      const err = await tokenRes.text();
      console.error("[OAuth callback] Token exchange failed:", err);
      return NextResponse.redirect(
        new URL("/connect?error=token_exchange_failed", req.url)
      );
    }

    const tokens = await tokenRes.json() as {
      access_token: string;
      refresh_token: string;
      expires_in: number;
    };

    // ── Get or create the user's store ────────────────────────────────────────
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { store: true },
    });

    let storeId = user?.storeId;

    if (!storeId) {
      // Create a new store for this user
      const slug = sellingPartnerId.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const store = await prisma.store.create({
        data: {
          name: `Store ${sellingPartnerId}`,
          slug: `${slug}-${Date.now()}`,
          status: "TRIAL",
          users: { connect: { id: session.user.id } },
        },
      });
      storeId = store.id;

      // Update user role to ADMIN since they created the store
      await prisma.user.update({
        where: { id: session.user.id },
        data: { role: "ADMIN", storeId },
      });
    }

    // ── Save encrypted credentials ────────────────────────────────────────────
    const marketplaceId =
      searchParams.get("marketplace_id") ??
      process.env.AMAZON_MARKETPLACE_ID ??
      "ATVPDKIKX0DER";

    await prisma.amazonCredentials.upsert({
      where: { storeId },
      create: {
        storeId,
        sellerId: sellingPartnerId,
        marketplaceId,
        refreshTokenEnc: encrypt(tokens.refresh_token),
        status: "CONNECTED",
        connectedAt: new Date(),
        lastRefreshedAt: new Date(),
      },
      update: {
        sellerId: sellingPartnerId,
        marketplaceId,
        refreshTokenEnc: encrypt(tokens.refresh_token),
        status: "CONNECTED",
        lastRefreshedAt: new Date(),
      },
    });

    // Update store name using Seller ID if it was just created
    await prisma.store.update({
      where: { id: storeId },
      data: { name: `Amazon Store (${sellingPartnerId})` },
    });

    return NextResponse.redirect(new URL("/dashboard?connected=1", req.url));
  } catch (err) {
    console.error("[OAuth callback] Unexpected error:", err);
    return NextResponse.redirect(
      new URL("/connect?error=unexpected", req.url)
    );
  }
}
