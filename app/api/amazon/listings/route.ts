import { NextResponse } from "next/server";
import { getCurrentStoreCredentials } from "@/lib/store";
import { getListings } from "@/lib/amazon-sp-api";

export async function GET() {
  try {
    const creds = await getCurrentStoreCredentials();
    const data = await getListings(creds, 50);
    return NextResponse.json(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const status = msg.includes("Not authenticated") || msg.includes("not linked") ? 401 : 502;
    return NextResponse.json({ error: msg }, { status });
  }
}
