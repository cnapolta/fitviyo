"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

// Live social-proof line. Shows the real signup count (waitlistBaseCount +
// actual rows from the waitlist_count() RPC). When the count is 0 it shows a
// "be first" message instead of an empty "0+ joined". Container keeps a stable
// height so the async update doesn't cause layout shift.
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
        /* keep current value */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="flex min-h-6 items-center gap-3 text-sm text-bone-60">
      {count > 0 && (
        <div className="flex -space-x-2" aria-hidden="true">
          {["bg-coral", "bg-bone-60", "bg-line", "bg-coral"].map((c, i) => (
            <span
              key={i}
              className={`h-6 w-6 rounded-full border border-ink-0 ${c}`}
            />
          ))}
        </div>
      )}
      <span>
        {count > 0 ? (
          <>
            <strong className="text-bone">
              {count.toLocaleString("en-US")}+
            </strong>{" "}
            already joined
          </>
        ) : (
          "Be one of the first to join."
        )}
      </span>
    </div>
  );
}
