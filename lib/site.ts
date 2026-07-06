// Central site constants — single source of truth for URLs, copy, SEO.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fitviyo.com";

export const site = {
  name: "Fitviyo",
  domain: "fitviyo.com",
  url: SITE_URL,
  email: "hello@fitviyo.com",
  title: "Fitviyo — Train on your terms | Workout & nutrition tracker",
  description:
    "The private, beautiful workout & nutrition tracker built for people who actually lift. No clutter, no guilt, no ads. Join the waitlist for early access and founder pricing.",
  themeColor: "#0C0E11",
  ogImage: "/og-image.png",
  // Update these when the founder provides real handles.
  socials: {
    instagram: "https://instagram.com/fitviyo",
    x: "https://x.com/fitviyo",
    tiktok: "https://tiktok.com/@fitviyo",
  },
  // Displayed waitlist count baseline; live count is fetched from the
  // `waitlist_count` RPC and falls back to this when unavailable.
  waitlistBaseCount: 2300,
} as const;

export const sameAs = Object.values(site.socials);
