/**
 * Step 1 of Amazon OAuth — redirect the seller to Amazon's authorization page.
 *
 * GET /api/amazon/oauth/authorize
 *
 * Amazon will redirect back to /api/amazon/oauth/callback with ?code=...&state=...
 */

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import crypto from "crypto";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const clientId = process.env.AMAZON_CLIENT_ID;
  const redirectUri = `${process.env.NEXTAUTH_URL}/api/amazon/oauth/callback`;

  if (!clientId) {
    return NextResponse.json(
      { error: "AMAZON_CLIENT_ID is not configured" },
      { status: 500 }
    );
  }

  // CSRF protection — we embed the user's session ID in state
  const state = crypto
    .createHmac("sha256", process.env.NEXTAUTH_SECRET ?? "secret")
    .update(session.user.id ?? "")
    .digest("hex");

  const params = new URLSearchParams({
    application_id: clientId,
    redirect_uri: redirectUri,
    state,
    version: "beta", // use "production" once your app is approved by Amazon
  });

  const amazonAuthUrl = `https://sellercentral.amazon.com/apps/authorize/consent?${params}`;

  return NextResponse.redirect(amazonAuthUrl);
}
