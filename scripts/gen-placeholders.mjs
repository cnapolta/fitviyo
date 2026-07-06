// Generates on-brand placeholder assets so the site builds and passes
// Lighthouse today. The founder drops finished Higgsfield/app assets over
// the SAME filenames in /public/images and they swap in with no code change.
//
// Run: npm run gen:placeholders   (needs `sharp`, a devDependency)

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const IMAGES = join(PUBLIC, "images");
const APP = join(__dirname, "..", "app");

const INK0 = "#0C0E11";
const INK1 = "#14171C";
const CORAL = "#FF6044";
const BONE = "#EDE9E0";
const BONE60 = "#A6A199";
const LINE = "#262B33";

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// A dark editorial placeholder: near-black bg, single coral glow, label.
function placeholderSvg(w, h, label, sub) {
  const cx = w * 0.72;
  const cy = h * 0.32;
  const r = Math.max(w, h) * 0.55;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <radialGradient id="g" cx="${cx}" cy="${cy}" r="${r}" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="${CORAL}" stop-opacity="0.34"/>
        <stop offset="0.55" stop-color="${CORAL}" stop-opacity="0.06"/>
        <stop offset="1" stop-color="${INK0}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${INK1}"/>
        <stop offset="1" stop-color="${INK0}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="${LINE}" stroke-width="2"/>
    <circle cx="${w * 0.5}" cy="${h * 0.42}" r="${Math.min(w, h) * 0.055}" fill="none" stroke="${CORAL}" stroke-width="3"/>
    <circle cx="${w * 0.5}" cy="${h * 0.42}" r="6" fill="${CORAL}"/>
    <text x="50%" y="${h * 0.6}" fill="${BONE}" font-family="Arial, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.06)}" font-weight="700" text-anchor="middle">${esc(label)}</text>
    <text x="50%" y="${h * 0.66}" fill="${BONE60}" font-family="Arial, sans-serif" font-size="${Math.round(Math.min(w, h) * 0.032)}" text-anchor="middle">${esc(sub)}</text>
    <text x="50%" y="${h - 24}" fill="${BONE60}" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" opacity="0.7">placeholder — swap with final asset</text>
  </svg>`;
}

function ogSvg(w, h) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <radialGradient id="g" cx="${w * 0.78}" cy="${h * 0.28}" r="${w * 0.6}" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="${CORAL}" stop-opacity="0.42"/>
        <stop offset="0.6" stop-color="${CORAL}" stop-opacity="0.05"/>
        <stop offset="1" stop-color="${INK0}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="${INK0}"/>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <text x="80" y="150" fill="${BONE}" font-family="Arial, sans-serif" font-size="52" font-weight="700">Fitviyo<tspan fill="${CORAL}">.</tspan></text>
    <text x="80" y="330" fill="${BONE}" font-family="Arial, sans-serif" font-size="92" font-weight="800">Train on your</text>
    <text x="80" y="440" fill="${BONE}" font-family="Arial, sans-serif" font-size="92" font-weight="800">terms<tspan fill="${CORAL}">.</tspan></text>
    <text x="80" y="530" fill="${BONE60}" font-family="Arial, sans-serif" font-size="34">Workout &amp; nutrition tracker for people who lift.</text>
    <rect x="80" y="560" width="360" height="6" rx="3" fill="${CORAL}"/>
  </svg>`;
}

function iconSvg(size) {
  const s = size;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 512 512">
    <rect width="512" height="512" rx="112" fill="${INK0}"/>
    <path d="M176 372V140h150v42h-104v52h92v42h-92v96z" fill="${BONE}"/>
    <circle cx="330" cy="158" r="26" fill="${CORAL}"/>
  </svg>`;
}

async function webp(svg, out) {
  await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile(out);
  console.log("✓", out);
}
async function png(svg, out) {
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log("✓", out);
}

async function main() {
  await mkdir(IMAGES, { recursive: true });

  // Hero (portrait)
  await webp(
    placeholderSvg(900, 1100, "Hero", "athlete · dark studio · coral rim"),
    join(IMAGES, "hero-athlete-dark-studio.webp"),
  );

  // Feature screenshots (phone 9:16)
  await webp(
    placeholderSvg(540, 960, "Build workouts", "app screen"),
    join(IMAGES, "feature-build-workouts.webp"),
  );
  await webp(
    placeholderSvg(540, 960, "Track nutrition", "app screen"),
    join(IMAGES, "feature-track-nutrition.webp"),
  );
  await webp(
    placeholderSvg(540, 960, "Share & discover", "app screen"),
    join(IMAGES, "feature-share-discover.webp"),
  );

  // Showcase (landscape atmosphere)
  await webp(
    placeholderSvg(1200, 900, "Running", "lone runner · dawn · coral sunrise"),
    join(IMAGES, "showcase-running-dawn.webp"),
  );
  await webp(
    placeholderSvg(1200, 800, "Food", "high-protein meal · dark stone"),
    join(IMAGES, "showcase-food-highprotein.webp"),
  );
  await webp(
    placeholderSvg(1200, 800, "Community", "group training · low light"),
    join(IMAGES, "showcase-community-training.webp"),
  );

  // OpenGraph (1200x630)
  await png(ogSvg(1200, 630), join(PUBLIC, "og-image.png"));

  // PWA / favicon PNGs
  await png(iconSvg(192), join(PUBLIC, "icon-192.png"));
  await png(iconSvg(512), join(PUBLIC, "icon-512.png"));
  await png(iconSvg(180), join(APP, "apple-icon.png"));

  console.log("\nDone. Swap the /public/images/*.webp files with finished assets (same names).");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
