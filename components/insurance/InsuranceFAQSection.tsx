"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Will prospects know they're talking to an AI?",
    a: "85–95% of callers can't tell the difference. The agent is built to sound professional and natural. If a caller requests a human, it can transfer them directly or take a message for your team.",
  },
  {
    q: "What happens after the AI qualifies a lead?",
    a: "Your team gets an immediate SMS alert with the prospect's name, number, coverage interest, and urgency level. Hot leads don't wait in a CRM queue — they hit your phone.",
  },
  {
    q: "Do we need to change our phone number or phone system?",
    a: "No. Your existing lines stay exactly as they are. We set up a forwarding rule — your clients call the same number they always have.",
  },
  {
    q: "Can it handle multiple lines of business (auto, home, life, commercial)?",
    a: "Yes. The agent is built around your specific book of business. It knows which questions to ask for each line and routes accordingly.",
  },
  {
    q: "How long does setup take?",
    a: "Most agencies are live within a few days of the discovery call. Daniel builds the agent personally and reviews it with you before anything goes live.",
  },
];

export function InsuranceFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f8faff] py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-[#0f2044] sm:text-5xl">
            Common questions.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-[#0f2044] text-sm leading-snug pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#f59e0b] transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-[#64748b]">
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
