import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

// Display — wordmark & headings. Self-hosted by next/font (zero layout shift).
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
});

// Body — everything else.
export const instrument = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
});
