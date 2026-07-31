// Central site constants — single source of truth for URLs, copy, SEO.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fitviyo.com";

export const site = {
  name: "Fitviyo",
  domain: "fitviyo.com",
  url: SITE_URL,
  email: "hello@fitviyo.com",
  title: "Fitviyo: Train on your terms | Workout & nutrition tracker",
  description:
    "The private, beautiful workout & nutrition tracker built for people who actually lift. No clutter, no guilt, no ads. Download Fitviyo free on the App Store.",
  themeColor: "#0C0E11",
  ogImage: "/og-image.png",
  // Live on the App Store; Android is on the way.
  appStoreUrl:
    "https://apps.apple.com/us/app/fitviyo-ai-workout-food/id6788548658",
  // Update the handle when the founder confirms it.
  socials: {
    instagram: "https://instagram.com/fitviyo",
  },
} as const;

export const sameAs = Object.values(site.socials);
