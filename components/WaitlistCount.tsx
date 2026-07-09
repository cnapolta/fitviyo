"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// Live social-proof figure. Fetches the real signup count, then animates a
// quick count-up from 0 → total. At 0 it shows a "be first" line instead of
// "0+". Reserves a stable height so the async update doesn't shift layout.
export function WaitlistCount() {
  const [target, setTarget] = useState<number | null>(null); // null = loading
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let active = true;
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d: { count: number | null }) => {
        if (!active) return;
        setTarget(site.waitlistBaseCount + (typeof d.count === "number" ? d.count : 0));
      })
      .catch(() => {
        if (active) setTarget(site.waitlistBaseCount);
      });
    return () => {
      active = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (target === null || target <= 0) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(eased * target));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  // Loading — reserve height, render nothing.
  if (target === null) {
    return <div className="min-h-[58px]" aria-hidden="true" />;
  }

  // No signups yet.
  if (target <= 0) {
    return (
      <p className="flex min-h-[58px] items-center text-base text-bone-60">
        Be one of the first to join.
      </p>
    );
  }

  return (
    <div
      className="flex min-h-[58px] items-center gap-3"
      role="img"
      aria-label={`${target.toLocaleString("en-US")}+ people already joined the waitlist`}
    >
      <span
        aria-hidden="true"
        className="font-display text-5xl font-extrabold leading-none tracking-tight text-coral-grad tabular-nums"
      >
        {display.toLocaleString("en-US")}+
      </span>
      <span aria-hidden="true" className="text-sm leading-tight text-bone-60">
        people already
        <br />
        joined the waitlist
      </span>
    </div>
  );
}
