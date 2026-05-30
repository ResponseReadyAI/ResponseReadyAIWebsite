"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "78%", label: "of insurance leads go to the first agency that responds" },
  { value: "21×", label: "more likely to qualify a lead contacted within 5 minutes" },
  { value: "62%", label: "of calls go unanswered at small independent agencies" },
];

export function InsurancePainSection() {
  return (
    <section className="bg-[#f8faff] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
              The speed-to-lead problem
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#0f2044] sm:text-5xl">
              Slow follow-up is{" "}
              <span className="font-display italic font-normal">
                costing you policies.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#64748b]">
              A prospect who can&rsquo;t reach you in the first few minutes
              calls the next agency on the list. By the time you return the
              call, they&rsquo;re already signed somewhere else.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#64748b]">
              Your AI agent answers in seconds — after hours, on weekends,
              when your producers are on other lines — qualifies the lead, and
              flags the hot ones to your team immediately.
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
                className="rounded-2xl bg-white border border-[#e2e8f0] p-6 shadow-sm"
              >
                <p className="font-display text-4xl text-[#0f2044]">{stat.value}</p>
                <p className="mt-1 text-sm text-[#64748b] leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
