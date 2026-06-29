import { NextRequest, NextResponse } from "next/server";
import { getCurrentStoreCredentials } from "@/lib/store";
import { getSalesAndTraffic } from "@/lib/amazon-sp-api";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const creds = await getCurrentStoreCredentials();

    const { searchParams } = req.nextUrl;
    const days = Number(searchParams.get("days") ?? "30");
    const granularity = (searchParams.get("granularity") ?? "DAY") as "DAY" | "WEEK" | "MONTH";

    const endDate = new Date().toISOString().split("T")[0];
    const startDate = new Date(Date.now() - days * 86_400_000).toISOString().split("T")[0];

    const data = await getSalesAndTraffic(creds, startDate, endDate, granularity);
    return NextResponse.json(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    const status = msg.includes("Not authenticated") || msg.includes("not linked") ? 401 : 502;
    return NextResponse.json({ error: msg }, { status });
  }
}
