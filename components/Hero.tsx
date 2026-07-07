import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WaitlistCount } from "@/components/WaitlistCount";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div
        className="coral-glow pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        aria-hidden="true"
      />
      {/* Light pulsing in waves behind the content. Two glows offset in phase
          so the brightness undulates. */}
      <div
        className="hero-wave pointer-events-none absolute left-[14%] top-[34%] h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-coral) 45%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-wave pointer-events-none absolute left-[40%] top-[14%] h-64 w-64 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-coral) 38%, transparent) 0%, transparent 70%)",
          animationDelay: "-6s",
          animationDuration: "14s",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="relative">
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Train on your terms.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone-60">
            Fitviyo is the private, beautiful workout and nutrition tracker built
            for people who actually lift. No clutter, no guilt, no ads. Join the
            waitlist for early access.
          </p>

          <div className="mt-8 max-w-xl">
            <WaitlistForm id="join" />
          </div>

          <div className="mt-8">
            <WaitlistCount />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="coral-glow pointer-events-none absolute inset-0 scale-125"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink-1 shadow-2xl">
            <Image
              src="/images/hero-runner-dawn.webp"
              alt="A lone runner sprinting down an open road at dawn with a dramatic orange sunrise and warm coral light"
              width={900}
              height={1200}
              priority
              sizes="(max-width: 768px) 90vw, 384px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
