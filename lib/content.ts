// Shared page content. FAQ is reused by both the FAQ section and the
// FAQPage JSON-LD so the structured data always matches what's on screen.

export const faqs = [
  {
    q: "When does Fitviyo launch?",
    a: "We're in the final stretch. Join the waitlist and you'll be the first to know the moment it ships — waitlist members get in before anyone else.",
  },
  {
    q: "What platforms will it be on?",
    a: "iOS first. We're building a beautiful, native-feeling iPhone app and want it perfect before we expand. Android is on the roadmap.",
  },
  {
    q: "How much will it cost?",
    a: "Fitviyo is freemium — the core tracker is free, with an optional Pro tier that unlocks the full experience. Pro starts with a 7-day free trial, and waitlist founders lock in lifetime founder pricing.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Fitviyo is local-first: your training and nutrition data lives on your device and stays yours. No ads, no data selling, no creepy tracking — ever.",
  },
  {
    q: "What makes Fitviyo different?",
    a: "No bloat and no guilt. You build your own workouts, log food and runs in seconds, and share your training with a community that actually lifts — in an app that gets out of your way.",
  },
] as const;

export const features = [
  {
    title: "Your workouts, your way.",
    body: "Build routines in seconds and run them with a clean, set-by-set player.",
    icon: "dumbbell",
    img: {
      src: "/images/feature-build-workouts.webp",
      alt: "Fitviyo app screen showing a custom workout being built with a clean set-by-set player",
    },
  },
  {
    title: "Track everything, effortlessly.",
    body: "Calories, water, steps, and runs, logged in a tap, on a real US food database.",
    icon: "flame",
    img: {
      src: "/images/feature-track-nutrition.webp",
      alt: "Fitviyo app screen showing calories, water, steps and runs logged for the day",
    },
  },
  {
    title: "Where training becomes a movement.",
    body: "Share your workouts as beautiful cards and copy the best from the community.",
    icon: "share",
    img: {
      src: "/images/feature-share-discover.webp",
      alt: "Fitviyo app screen showing shareable workout cards from the community feed",
    },
  },
] as const;

// Higgsfield atmospheric showcase (LANDING.md §7). Filenames + alt text carry
// the prompt so finished assets can be dropped in /public/images and swapped.
export const showcase = [
  {
    src: "/images/showcase-running-dawn.webp",
    alt: "A lone runner at dawn on an empty road, cool dark tones with a coral sunrise accent, sense of motion, cinematic, minimal",
    label: "Runs",
  },
  {
    src: "/images/showcase-food-highprotein.webp",
    alt: "Clean overhead of a healthy high-protein meal on a dark stone surface, moody directional light, one small coral prop accent, editorial food photography",
    label: "Nutrition",
  },
  {
    src: "/images/showcase-community-training.webp",
    alt: "A diverse group training together in low light with a subtle coral rim light, cinematic, near-black background",
    label: "Community",
  },
] as const;
