// Regenerates only public/og-image.png (1200x630) for social/link previews
// (WhatsApp, X, iMessage, etc.). Uses the coral "F" logo tile + "Fitviyo"
// wordmark (no trailing dot). Does NOT touch any other image.
//
// Run: npm run gen:og

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const INK0 = "#0C0E11";
const CORAL = "#FF6044";
const BONE = "#EDE9E0";
const BONE60 = "#A6A199";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="80%" cy="22%" r="70%" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${CORAL}" stop-opacity="0.42"/>
      <stop offset="0.55" stop-color="${CORAL}" stop-opacity="0.06"/>
      <stop offset="1" stop-color="${INK0}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${INK0}"/>
  <rect width="1200" height="630" fill="url(#g)"/>

  <!-- logo tile + wordmark (no trailing dot) -->
  <rect x="80" y="70" width="96" height="96" rx="22" fill="${CORAL}"/>
  <text x="128" y="141" fill="${INK0}" font-family="Arial, sans-serif" font-size="68" font-weight="800" text-anchor="middle">F</text>
  <text x="196" y="140" fill="${BONE}" font-family="Arial, sans-serif" font-size="52" font-weight="700">Fitviyo</text>

  <!-- headline -->
  <text x="80" y="330" fill="${BONE}" font-family="Arial, sans-serif" font-size="94" font-weight="800">Train on</text>
  <text x="80" y="438" fill="${BONE}" font-family="Arial, sans-serif" font-size="94" font-weight="800">your terms.</text>

  <!-- subtitle -->
  <text x="80" y="512" fill="${BONE60}" font-family="Arial, sans-serif" font-size="31">The private workout &amp; nutrition tracker for people who lift.</text>
  <rect x="80" y="545" width="320" height="6" rx="3" fill="${CORAL}"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(PUBLIC, "og-image.png"));
console.log("✓ public/og-image.png (logo + Fitviyo, no dot)");
