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
  // Update the handle when the founder confirms it.
  socials: {
    instagram: "https://instagram.com/fitviyo",
  },
  // Baseline added to the live count. 0 = show the real signup count only.
  // Set to a positive number if you want a pre-seeded "social proof" figure.
  waitlistBaseCount: 0,
} as const;

export const sameAs = Object.values(site.socials);
