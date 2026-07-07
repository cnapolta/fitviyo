import Image from "next/image";
import { showcase } from "@/lib/content";

// Bento mosaic: on desktop a fixed-height 4-col / 2-row grid where each tile
// fills its cell (md:h-full + object-cover) so nothing stretches or leaves
// gaps. On mobile everything stacks in a clean single column.
const spanClass: Record<string, string> = {
  big: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  small: "md:col-span-1",
};

const mobileAspect: Record<string, string> = {
  big: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  small: "aspect-[4/3]",
};

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
            Lifts, runs, meals, and a community that gets it, all in one dark,
            distraction-free app.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
          {showcase.map((img) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-brand border border-line bg-ink-2 ${spanClass[img.span]}`}
            >
              <div
                className={`relative w-full ${mobileAspect[img.span]} md:aspect-auto md:h-full`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes={
                    img.span === "small"
                      ? "(max-width: 768px) 90vw, 280px"
                      : "(max-width: 768px) 90vw, 560px"
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
