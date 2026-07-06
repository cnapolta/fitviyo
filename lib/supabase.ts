import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client using the ANON key.
//
// The anon key is public-safe by design (TECH.md §13). Security comes from
// RLS: the `waitlist` table allows anon INSERT only — no SELECT — so even
// with this key nobody can read/harvest emails. We still only ever call this
// from the API route (never the browser) so we can add Turnstile + honeypot +
// rate-limiting in front of the insert.
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
