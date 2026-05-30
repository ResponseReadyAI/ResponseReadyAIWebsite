"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Your number stays the same",
    body: "No new phone lines, no confusing your patients. A simple call-forwarding rule routes missed calls to your AI receptionist — completely invisible to your team.",
  },
  {
    num: "02",
    title: "AI answers, books, and confirms",
    body: "The agent greets callers in your brand's voice, answers questions about your services, books consultations directly into your calendar, and sends SMS confirmations — automatically.",
  },
  {
    num: "03",
    title: "You see everything",
    body: "Every call logged, every booking recorded. Get an SMS alert for anything urgent. Review weekly summaries. You're always in control without being on call.",
  },
];

export function MedspaHowItWorksSection() {
  return (
    <section id="process" className="bg-[#faf8f5] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c9a96e]">
            How it works
          </p>
          <h2 className="font-display text-4xl text-[#1c1a18] sm:text-5xl">
            Three steps. Zero disruption.
          </h2>
          <p className="mt-4 text-[#6b5e54] max-w-lg mx-auto">
            We handle the entire setup personally. You review and approve.
            Most med spas are live within a few days.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-2xl border border-[#e8c4b2]/60 bg-white p-7 shadow-sm"
            >
              <span className="font-display text-5xl text-[#e8c4b2]">{step.num}</span>
              <h3 className="mt-3 font-semibold text-[#1c1a18] text-lg leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b5e54]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
