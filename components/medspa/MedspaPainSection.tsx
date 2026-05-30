"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "62%", label: "of med spa calls go unanswered during peak hours" },
  { value: "$450+", label: "average revenue lost per missed booking" },
  { value: "85%", label: "of callers never call back after hitting voicemail" },
];

export function MedspaPainSection() {
  return (
    <section className="bg-[#f5ede4] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c9a96e]">
              The real cost of a missed call
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#1c1a18] sm:text-5xl">
              You&rsquo;re losing bookings
              <br />
              you never knew about.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6b5e54]">
              When your team is heads-down in a treatment room, your phone keeps
              ringing. Each unanswered call is a potential Botox consultation,
              laser package, or filler appointment — gone to the spa down the
              street that picked up.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6b5e54]">
              Your AI receptionist never goes on break, never misses a shift,
              and books exactly the way you want — while you focus on the
              clients already in the chair.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-[#e8c4b2]/60 p-6 shadow-sm"
              >
                <p className="font-display text-4xl text-[#c9a96e]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#6b5e54] leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
