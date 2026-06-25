/**
 * Store helpers — resolve the current user's store and decrypt their
 * Amazon credentials from the database.
 */

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { decrypt } from "@/lib/encryption";

export interface ResolvedCredentials {
  storeId: string;
  sellerId: string;
  marketplaceId: string;
  refreshToken: string;
  clientId: string;
  clientSecret: string;
}

/**
 * Returns the current user's store ID from their session.
 * Throws if not authenticated or not linked to a store.
 */
export async function getCurrentStoreId(): Promise<string> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Not authenticated");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { storeId: true },
  });

  if (!user?.storeId) {
    throw new Error("User is not linked to a store. Complete onboarding first.");
  }

  return user.storeId;
}

/**
 * Resolves and decrypts Amazon credentials for a given store.
 * Uses the SaaS-level client ID/secret from env as fallback
 * (sellers who authorized via our public app don't need per-store app keys).
 */
export async function getStoreCredentials(
  storeId: string
): Promise<ResolvedCredentials> {
  const creds = await prisma.amazonCredentials.findUnique({
    where: { storeId },
  });

  if (!creds) {
    throw new Error(`No Amazon credentials found for store ${storeId}. Connect an Amazon account first.`);
  }

  if (creds.status !== "CONNECTED") {
    throw new Error(`Amazon credentials for store ${storeId} are ${creds.status}. Please reconnect.`);
  }

  // Use per-store app keys if present, otherwise fall back to SaaS-level env vars
  const clientId =
    creds.clientIdEnc
      ? decrypt(creds.clientIdEnc)
      : process.env.AMAZON_CLIENT_ID!;

  const clientSecret =
    creds.clientSecretEnc
      ? decrypt(creds.clientSecretEnc)
      : process.env.AMAZON_CLIENT_SECRET!;

  return {
    storeId,
    sellerId: creds.sellerId,
    marketplaceId: creds.marketplaceId,
    refreshToken: decrypt(creds.refreshTokenEnc),
    clientId,
    clientSecret,
  };
}

/**
 * Convenience: get credentials for the currently logged-in user's store.
 */
export async function getCurrentStoreCredentials(): Promise<ResolvedCredentials> {
  const storeId = await getCurrentStoreId();
  return getStoreCredentials(storeId);
}
