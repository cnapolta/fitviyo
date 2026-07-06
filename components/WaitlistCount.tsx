"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

// Shows the baseline immediately (no layout shift), then adds real signups
// from the waitlist_count() RPC once they load.
export function WaitlistCount() {
  const [count, setCount] = useState<number>(site.waitlistBaseCount);

  useEffect(() => {
    let active = true;
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d: { count: number | null }) => {
        if (active && typeof d.count === "number") {
          setCount(site.waitlistBaseCount + d.count);
        }
      })
      .catch(() => {
        /* keep baseline */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <strong className="text-bone">{count.toLocaleString("en-US")}+</strong>
  );
}
