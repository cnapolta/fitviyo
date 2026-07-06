"use client";

import { track } from "@vercel/analytics";

// Thin wrapper so event names stay consistent across the app.
// Page views are captured automatically by <Analytics />.
export function trackWaitlistSubmit() {
  track("waitlist_submit");
}

export function trackShareClick(channel: string) {
  track("share_click", { channel });
}
