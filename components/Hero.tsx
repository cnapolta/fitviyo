import { AuroraBackground } from "@/components/ui/aurora-background";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WaitlistCount } from "@/components/WaitlistCount";

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

        <div className="mt-9 w-full max-w-md">
          <WaitlistForm id="join" />
        </div>

        <div className="mt-8 flex justify-center">
          <WaitlistCount />
        </div>
      </section>
    </AuroraBackground>
  );
}
