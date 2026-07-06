import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fitviyo — Workout & nutrition tracker",
    short_name: "Fitviyo",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0C0E11",
    theme_color: "#0C0E11",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
