import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Hook } from "@/components/Hook";
import { FeatureTrio } from "@/components/FeatureTrio";
import { Showcase } from "@/components/Showcase";
import { WhyJoin } from "@/components/WhyJoin";
import { FAQ } from "@/components/FAQ";
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
        <Showcase />
        <WhyJoin />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
