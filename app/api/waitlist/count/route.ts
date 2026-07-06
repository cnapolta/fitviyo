import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Returns COUNT only via the waitlist_count() RPC (never rows/emails).
// CDN-cached for 5 min so it stays cheap and doesn't hurt performance.
export async function GET() {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.rpc("waitlist_count");
    if (error) throw error;
    return NextResponse.json(
      { count: Number(data) || 0 },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    );
  } catch {
    // Missing config / RPC not deployed → let the client fall back to baseline.
    return NextResponse.json({ count: null });
  }
}
