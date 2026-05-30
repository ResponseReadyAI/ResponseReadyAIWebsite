"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Your number stays the same",
    body: "No disruption to your existing lines. A simple call-forwarding rule routes after-hours calls and overflow to your AI agent — your clients and prospects call the same number they always have.",
  },
  {
    num: "02",
    title: "AI qualifies and routes instantly",
    body: "The agent greets every caller professionally, captures their coverage needs, qualifies the opportunity, and either connects them directly to the right producer or schedules a callback — in seconds.",
  },
  {
    num: "03",
    title: "Hot leads land in your inbox",
    body: "Qualified prospects get flagged with an SMS alert to your team immediately. Every call is logged with name, number, coverage interest, and urgency. Nothing falls between the cracks.",
  },
];

export function InsuranceHowItWorksSection() {
  return (
    <section id="process" className="bg-[#0f2044] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
            How it works
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">
            Simple setup. Immediate impact.
          </h2>
          <p className="mt-4 text-white/60 max-w-lg mx-auto">
            Daniel handles the build personally. You approve it before it goes
            live. Most agencies are running within a few days.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <span className="font-display text-5xl text-[#f59e0b]/40">{step.num}</span>
              <h3 className="mt-3 font-semibold text-white text-lg leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
