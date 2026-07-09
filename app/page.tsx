import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Hook } from "@/components/Hook";
import { AppFeatures } from "@/components/AppFeatures";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Hook />
        <AppFeatures />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
