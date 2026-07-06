import Image from "next/image";
import { showcase } from "@/lib/content";

export function Showcase() {
  return (
    <section className="hairline bg-ink-1" aria-labelledby="showcase-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <h2
            id="showcase-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Built for the way you actually train.
          </h2>
          <p className="mt-4 text-lg text-bone-60">
            Lifts, runs, meals, and a community that gets it — in one dark,
            distraction-free app.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {showcase.map((img, i) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-brand border border-line bg-ink-2 ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${i === 0 ? "aspect-[16/12]" : "aspect-[16/10]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 90vw, 640px"
                      : "(max-width: 768px) 90vw, 320px"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="absolute left-4 top-4 rounded-full border border-line bg-ink-0/70 px-3 py-1 text-xs font-medium text-bone backdrop-blur-sm">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
