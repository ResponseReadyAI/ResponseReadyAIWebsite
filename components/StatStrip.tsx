"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({
  target,
  prefix = "",
  suffix = "",
  started,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, target]);

  return (
    <span className="text-5xl font-[family-name:var(--font-display)] tabular-nums text-white">
      {prefix}{count}{suffix}
    </span>
  );
}

const SUPPORTING_STATS = [
  { value: 62, suffix: "%", label: "of small business calls go unanswered" },
  { value: 450, prefix: "$", label: "average revenue lost per missed call" },
  { value: 95, suffix: "%", label: "of callers can't tell it's AI" },
];

export default function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[var(--color-primary)] py-20 px-6"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 pb-12 border-b border-white/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-5">
            The reality
          </p>
          <div className="flex items-baseline gap-4 flex-wrap">
            <span className="text-8xl md:text-[9rem] font-[family-name:var(--font-display)] text-white leading-none">
              85%
            </span>
            <span className="text-xl md:text-2xl text-white/50 max-w-xs leading-snug">
              of callers who reach voicemail never call back.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {SUPPORTING_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <CountUp
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                started={isInView}
              />
              <p className="text-sm text-white/50 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
