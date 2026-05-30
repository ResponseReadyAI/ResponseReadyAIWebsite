"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Will my patients know they're talking to an AI?",
    a: "85–95% of callers can't tell the difference. The agent is trained to sound natural and warm — the way your front desk would. If a caller wants a human, the agent can transfer them or take a message.",
  },
  {
    q: "What happens if it can't answer a patient's question?",
    a: "The agent takes a message, captures their name and callback number, and sends your team an SMS alert instantly. Nothing falls through the cracks.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. Your existing number stays the same. We set up a simple call-forwarding rule — patients call the same number they always have.",
  },
  {
    q: "Can it book into my existing scheduling software?",
    a: "Yes. We integrate with your calendar system during setup. Your schedule stays in one place — the AI just fills it.",
  },
  {
    q: "How long does setup take?",
    a: "Most med spas are live within a few days of the discovery call. Daniel handles the build personally and reviews everything with you before going live.",
  },
];

export function MedspaFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#faf8f5] py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c9a96e]">
            FAQ
          </p>
          <h2 className="font-display text-4xl text-[#1c1a18] sm:text-5xl">
            Good questions.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#e8c4b2]/60 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-[#1c1a18] text-sm leading-snug pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#c9a96e] transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-[#6b5e54]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
