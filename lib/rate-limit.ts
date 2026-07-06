// Minimal in-memory IP rate limiter.
//
// Note: on Vercel serverless this is per-instance and resets on cold start,
// so it's a lightweight abuse speed-bump rather than a hard guarantee. For
// stronger limits, back this with Upstash Redis later. Turnstile + honeypot
// are the primary bot defenses; this just caps rapid repeat submits.

type Hit = { count: number; resetAt: number };

const WINDOW_MS = 60_000; // 1 minute
const MAX_HITS = 5; // per IP per window

const store = new Map<string, Hit>();

export function rateLimit(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const hit = store.get(ip);

  if (!hit || now > hit.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }

  hit.count += 1;
  if (hit.count > MAX_HITS) {
    return { ok: false, retryAfter: Math.ceil((hit.resetAt - now) / 1000) };
  }
  return { ok: true, retryAfter: 0 };
}

// Opportunistic cleanup so the Map doesn't grow unbounded on a warm instance.
export function sweepRateLimit() {
  const now = Date.now();
  for (const [ip, hit] of store) {
    if (now > hit.resetAt) store.delete(ip);
  }
}
