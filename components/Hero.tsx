import { AuroraBackground } from "@/components/ui/aurora-background";
import { StoreButtons } from "@/components/StoreButtons";

export function Hero() {
  return (
    <AuroraBackground>
      <section
        aria-labelledby="hero-heading"
        className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center md:py-32"
      >
        <h1
          id="hero-heading"
          className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Train on <span className="text-coral-grad">your terms.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-bone-60">
          The private, beautiful workout and nutrition tracker for people who
          actually lift. Get a plan for your goal, then track every set and meal.
        </p>

        <StoreButtons className="mt-9" />

        <p className="mt-6 text-sm text-bone-60">
          Free to start. iPhone now, Android soon.
        </p>
      </section>
    </AuroraBackground>
  );
}
