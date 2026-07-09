import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Hook } from "@/components/Hook";
import { FeatureTrio } from "@/components/FeatureTrio";
import { AppFeatures } from "@/components/AppFeatures";
import { WhyJoin } from "@/components/WhyJoin";
import { Contact } from "@/components/Contact";
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
        <FeatureTrio />
        <AppFeatures />
        <WhyJoin />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
