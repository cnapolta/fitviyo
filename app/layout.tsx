import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { bricolage, instrument } from "@/lib/fonts";
import { site, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: "%s | Fitviyo",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "workout tracker",
    "nutrition tracker",
    "fitness app",
    "gym app",
    "lifting app",
    "calorie tracker",
    "Fitviyo",
  ],
  authors: [{ name: "Fitviyo" }],
  creator: "Fitviyo",
  publisher: "Fitviyo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Fitviyo: Train on your terms. Workout & nutrition tracker for people who lift.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  category: "health",
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body>
        {children}
        {/* Vercel Analytics loads only on Vercel (the /_vercel/insights
            script is served by the platform), keeping local/self-hosted
            runs free of 404 console noise. */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
