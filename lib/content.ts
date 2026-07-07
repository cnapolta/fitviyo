// Shared page content.

export const features = [
  {
    title: "Your workouts, your way.",
    body: "Build routines in seconds and run them with a clean, set-by-set player.",
    icon: "dumbbell",
    img: {
      src: "/images/feature-build-workouts.webp",
      alt: "A focused athlete pressing a heavy barbell overhead in a dark studio gym with a coral rim light",
    },
  },
  {
    title: "Track everything, effortlessly.",
    body: "Calories, water, steps, and runs, logged in a tap, on a real US food database.",
    icon: "flame",
    img: {
      src: "/images/feature-track-nutrition.webp",
      alt: "A healthy high-protein meal of grilled chicken, rice and greens beside a water bottle on a dark surface",
    },
  },
  {
    title: "Where training becomes a movement.",
    body: "Share your workouts as beautiful cards and copy the best from the community.",
    icon: "share",
    img: {
      src: "/images/feature-share-discover.webp",
      alt: "A diverse group of athletes celebrating together in a dark gym with a coral rim light",
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
