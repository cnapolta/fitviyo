// Generates the three feature "app screen" mockups as crisp, on-brand webp
// images (540x960, 9:16). Hand-built UI so text is readable and matches the
// brand — swap with real app screenshots later using the same filenames.
//
// Run: npm run gen:screens

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images");

const INK0 = "#0C0E11";
const INK1 = "#14171C";
const INK2 = "#1B1F26";
const CORAL = "#FF6044";
const BONE = "#EDE9E0";
const BONE60 = "#A6A199";
const LINE = "#262B33";
const FONT = "-apple-system, Helvetica, Arial, sans-serif";

const W = 540;
const H = 960;

function statusBar() {
  return `
    <text x="34" y="52" fill="${BONE}" font-family="${FONT}" font-size="19" font-weight="600">9:41</text>
    <g fill="${BONE}" opacity="0.9">
      <rect x="452" y="40" width="20" height="13" rx="2"/>
      <rect x="478" y="40" width="20" height="13" rx="3"/>
      <rect x="480" y="42" width="14" height="9" rx="2" fill="${CORAL}"/>
    </g>`;
}

function frame(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <rect width="${W}" height="${H}" fill="${INK0}"/>
    ${statusBar()}
    ${inner}
  </svg>`;
}

// ── Screen 1: Build workouts (set-by-set player) ──────────────────
function buildWorkouts() {
  const inner = `
    <text x="34" y="118" fill="${CORAL}" font-family="${FONT}" font-size="16" font-weight="700" letter-spacing="2">WORKOUT</text>
    <text x="34" y="158" fill="${BONE}" font-family="${FONT}" font-size="40" font-weight="800">Push Day</text>
    <text x="34" y="188" fill="${BONE60}" font-family="${FONT}" font-size="19">Chest · Shoulders · Triceps</text>

    <!-- progress -->
    <text x="34" y="238" fill="${BONE60}" font-family="${FONT}" font-size="16">Exercise 2 of 5</text>
    <rect x="34" y="252" width="472" height="8" rx="4" fill="${LINE}"/>
    <rect x="34" y="252" width="190" height="8" rx="4" fill="${CORAL}"/>

    <!-- current exercise card -->
    <rect x="24" y="292" width="492" height="392" rx="22" fill="${INK1}" stroke="${LINE}"/>
    <text x="48" y="344" fill="${BONE}" font-family="${FONT}" font-size="27" font-weight="700">Bench Press</text>
    <text x="48" y="374" fill="${BONE60}" font-family="${FONT}" font-size="16">Barbell · 4 sets</text>

    <!-- set rows header -->
    <text x="48"  y="416" fill="${BONE60}" font-family="${FONT}" font-size="14" letter-spacing="1">SET</text>
    <text x="150" y="416" fill="${BONE60}" font-family="${FONT}" font-size="14" letter-spacing="1">KG</text>
    <text x="280" y="416" fill="${BONE60}" font-family="${FONT}" font-size="14" letter-spacing="1">REPS</text>

    ${setRow(432, "1", "40", "10", true, false)}
    ${setRow(486, "2", "42.5", "8", true, false)}
    ${setRow(540, "3", "45", "6", false, true)}
    ${setRow(594, "4", "45", "6", false, false)}

    <!-- rest timer pill -->
    <rect x="48" y="628" width="150" height="38" rx="19" fill="${INK2}" stroke="${LINE}"/>
    <circle cx="70" cy="647" r="6" fill="${CORAL}"/>
    <text x="86" y="653" fill="${BONE}" font-family="${FONT}" font-size="17" font-weight="600">Rest 1:30</text>

    <!-- primary button -->
    <rect x="24" y="720" width="492" height="66" rx="18" fill="${CORAL}"/>
    <text x="270" y="762" fill="${INK0}" font-family="${FONT}" font-size="22" font-weight="700" text-anchor="middle">Log set</text>

    ${tabBar(0)}`;
  return frame(inner);
}

function setRow(y, n, kg, reps, done, active) {
  const rowFill = active ? CORAL : "transparent";
  const rowStroke = active ? CORAL : LINE;
  const txt = active ? INK0 : BONE;
  const check = done
    ? `<circle cx="470" cy="${y + 12}" r="13" fill="${CORAL}"/><path d="M463 ${y + 12} l5 5 l9 -10" stroke="${INK0}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    : active
      ? `<circle cx="470" cy="${y + 12}" r="13" fill="none" stroke="${INK0}" stroke-width="2.5"/>`
      : `<circle cx="470" cy="${y + 12}" r="13" fill="none" stroke="${LINE}" stroke-width="2.5"/>`;
  return `
    <rect x="40" y="${y - 8}" width="460" height="40" rx="12" fill="${rowFill}" fill-opacity="${active ? 1 : 0}" stroke="${rowStroke}" stroke-opacity="${active ? 1 : 0}"/>
    <text x="52"  y="${y + 17}" fill="${txt}" font-family="${FONT}" font-size="19" font-weight="${active ? 700 : 500}">${n}</text>
    <text x="150" y="${y + 17}" fill="${txt}" font-family="${FONT}" font-size="19" font-weight="${active ? 700 : 500}">${kg}</text>
    <text x="282" y="${y + 17}" fill="${txt}" font-family="${FONT}" font-size="19" font-weight="${active ? 700 : 500}">${reps}</text>
    ${check}`;
}

// ── Screen 2: Track nutrition (Today dashboard) ───────────────────
function trackNutrition() {
  // calorie ring
  const cx = 270, cy = 320, r = 96;
  const circ = 2 * Math.PI * r;
  const pct = 0.8;
  const inner = `
    <text x="34" y="130" fill="${BONE}" font-family="${FONT}" font-size="40" font-weight="800">Today</text>
    <text x="34" y="160" fill="${BONE60}" font-family="${FONT}" font-size="18">Monday, Jul 6</text>

    <!-- calorie ring -->
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${LINE}" stroke-width="18"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${CORAL}" stroke-width="18" stroke-linecap="round"
      stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - pct)}" transform="rotate(-90 ${cx} ${cy})"/>
    <text x="${cx}" y="${cy - 4}" fill="${BONE}" font-family="${FONT}" font-size="46" font-weight="800" text-anchor="middle">1,840</text>
    <text x="${cx}" y="${cy + 26}" fill="${BONE60}" font-family="${FONT}" font-size="18" text-anchor="middle">of 2,300 kcal</text>
    <text x="${cx}" y="${cy + 52}" fill="${CORAL}" font-family="${FONT}" font-size="16" font-weight="700" text-anchor="middle">460 left</text>

    <!-- macros -->
    ${macro(470, "Protein", 142, 165, "142 / 165 g")}
    ${macro(528, "Carbs", 180, 230, "180 / 230 g")}
    ${macro(586, "Fat", 55, 70, "55 / 70 g")}

    <!-- water + steps -->
    <rect x="24" y="646" width="240" height="120" rx="20" fill="${INK1}" stroke="${LINE}"/>
    <text x="48" y="688" fill="${BONE60}" font-family="${FONT}" font-size="16">Water</text>
    <text x="48" y="726" fill="${BONE}" font-family="${FONT}" font-size="30" font-weight="800">6<tspan fill="${BONE60}" font-size="20" font-weight="500"> / 8 cups</tspan></text>
    ${waterDots(48, 742)}

    <rect x="276" y="646" width="240" height="120" rx="20" fill="${INK1}" stroke="${LINE}"/>
    <text x="300" y="688" fill="${BONE60}" font-family="${FONT}" font-size="16">Steps</text>
    <text x="300" y="726" fill="${BONE}" font-family="${FONT}" font-size="30" font-weight="800">8,420</text>
    <rect x="300" y="742" width="192" height="6" rx="3" fill="${LINE}"/>
    <rect x="300" y="742" width="130" height="6" rx="3" fill="${CORAL}"/>

    ${tabBar(1)}`;
  return frame(inner);
}

function macro(y, name, val, max, label) {
  const w = 472;
  const fill = Math.round((val / max) * w);
  return `
    <text x="34" y="${y}" fill="${BONE}" font-family="${FONT}" font-size="18" font-weight="600">${name}</text>
    <text x="506" y="${y}" fill="${BONE60}" font-family="${FONT}" font-size="16" text-anchor="end">${label}</text>
    <rect x="34" y="${y + 12}" width="${w}" height="10" rx="5" fill="${LINE}"/>
    <rect x="34" y="${y + 12}" width="${fill}" height="10" rx="5" fill="${CORAL}"/>`;
}

function waterDots(x, y) {
  let d = "";
  for (let i = 0; i < 8; i++) {
    d += `<circle cx="${x + 10 + i * 26}" cy="${y}" r="7" fill="${i < 6 ? CORAL : LINE}"/>`;
  }
  return d;
}

// ── Screen 3: Share & discover (community feed) ───────────────────
function shareDiscover() {
  const inner = `
    <text x="34" y="130" fill="${BONE}" font-family="${FONT}" font-size="40" font-weight="800">Discover</text>
    <text x="34" y="160" fill="${BONE60}" font-family="${FONT}" font-size="18">Workouts from the community</text>

    <!-- search -->
    <rect x="24" y="184" width="492" height="52" rx="16" fill="${INK1}" stroke="${LINE}"/>
    <circle cx="58" cy="210" r="9" fill="none" stroke="${BONE60}" stroke-width="2.5"/>
    <line x1="65" y1="217" x2="72" y2="224" stroke="${BONE60}" stroke-width="2.5" stroke-linecap="round"/>
    <text x="86" y="217" fill="${BONE60}" font-family="${FONT}" font-size="18">Search routines</text>

    ${workoutCard(260, "Upper Body Hypertrophy", "Alex R.", "8 exercises · 45 min", "1.2k", true)}
    ${workoutCard(432, "5×5 Strength", "Jordan M.", "5 exercises · 60 min", "980", false)}
    ${workoutCard(604, "Leg Day Burn", "Sam K.", "7 exercises · 50 min", "743", false)}

    ${tabBar(2)}`;
  return frame(inner);
}

function workoutCard(y, title, author, meta, saves, featured) {
  const stroke = featured ? CORAL : LINE;
  const initial = author.charAt(0);
  return `
    <rect x="24" y="${y}" width="492" height="150" rx="20" fill="${INK1}" stroke="${stroke}" stroke-width="${featured ? 2 : 1}"/>
    <circle cx="66" cy="${y + 44}" r="22" fill="${INK2}" stroke="${LINE}"/>
    <text x="66" y="${y + 51}" fill="${CORAL}" font-family="${FONT}" font-size="20" font-weight="700" text-anchor="middle">${initial}</text>
    <text x="102" y="${y + 40}" fill="${BONE}" font-family="${FONT}" font-size="23" font-weight="700">${title}</text>
    <text x="102" y="${y + 66}" fill="${BONE60}" font-family="${FONT}" font-size="16">by ${author}</text>
    ${featured ? `<rect x="392" y="${y + 22}" width="100" height="34" rx="17" fill="${CORAL}"/><text x="442" y="${y + 44}" fill="${INK0}" font-family="${FONT}" font-size="16" font-weight="700" text-anchor="middle">Save</text>` : `<rect x="392" y="${y + 22}" width="100" height="34" rx="17" fill="none" stroke="${LINE}"/><text x="442" y="${y + 44}" fill="${BONE}" font-family="${FONT}" font-size="16" font-weight="600" text-anchor="middle">Save</text>`}
    <line x1="48" y1="${y + 96}" x2="468" y2="${y + 96}" stroke="${LINE}"/>
    <text x="48" y="${y + 126}" fill="${BONE60}" font-family="${FONT}" font-size="16">${meta}</text>
    <path d="M492 ${y + 120} c-4 -4 -14 -4 -14 4 c0 6 14 12 14 12 c0 0 14 -6 14 -12 c0 -8 -10 -8 -14 -4z" fill="${CORAL}" transform="translate(-58 0)"/>
    <text x="468" y="${y + 126}" fill="${BONE}" font-family="${FONT}" font-size="16" font-weight="600" text-anchor="end">${saves}</text>`;
}

// ── shared bottom tab bar ─────────────────────────────────────────
function tabBar(active) {
  const items = ["Train", "Food", "Discover", "You"];
  let g = `<rect x="0" y="878" width="${W}" height="82" fill="${INK1}"/><line x1="0" y1="878" x2="${W}" y2="878" stroke="${LINE}"/>`;
  items.forEach((label, i) => {
    const x = 68 + i * 135;
    const on = i === active;
    g += `<circle cx="${x}" cy="908" r="5" fill="${on ? CORAL : BONE60}"/>
      <text x="${x}" y="938" fill="${on ? BONE : BONE60}" font-family="${FONT}" font-size="15" font-weight="${on ? 700 : 500}" text-anchor="middle">${label}</text>`;
  });
  return g;
}

async function render(svg, name) {
  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(join(OUT, name));
  console.log("✓", name);
}

await render(buildWorkouts(), "feature-build-workouts.webp");
await render(trackNutrition(), "feature-track-nutrition.webp");
await render(shareDiscover(), "feature-share-discover.webp");
console.log("Done.");
