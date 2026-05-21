"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Does it really sound human?",
    a: "Research shows 85–95% of callers cannot distinguish modern AI voice from a human agent. Your agent is configured with a warm, professional voice, your business name, and natural conversation flow.",
  },
  {
    q: "What happens when it doesn't know the answer?",
    a: "Your agent is programmed with your specific FAQs and scripts. If a caller asks something outside its knowledge, it tells them politely that it's connecting them to a team member.",
  },
  {
    q: "Do I need to change my phone system?",
    a: "No. Your existing business number stays the same. We configure a simple call forwarding rule.",
  },
  {
    q: "What if I need a human to take over?",
    a: "Live transfer is built in. For urgent matters, priority clients, or any caller who requests it, your agent can warm-transfer in real time.",
  },
  {
    q: "Is my business data secure?",
    a: "All call data is encrypted in transit and at rest. You own your data and can export or delete it at any time.",
  },
  {
    q: "Can I customize what the agent says?",
    a: "Completely. The agent is built to your specifications — your greeting, your FAQs, your tone. Script updates available anytime.",
  },
  {
    q: "Does this work for my industry?",
    a: "Response Ready AI is built for any phone-call-dependent business: medical/dental, law, real estate, home services, salons, fitness, hospitality, and more.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[var(--color-bg)]" id="faq">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-[var(--color-gray-mid)] bg-[var(--color-surface)] overflow-hidden"
              >
                <dt>
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-gray-light)] transition-colors"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    {faq.q}
                    <ChevronDown
                      className={`h-4 w-4 text-[var(--color-muted)] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-sm text-[var(--color-muted)] leading-relaxed"
                >
                  {faq.a}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
