"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Calendar, Database, UserCheck, ArrowRightLeft, MessageSquare } from "lucide-react";

const FEATURES = [
  {
    icon: Phone,
    title: "Answers Every Call",
    body: "No voicemail. No missed calls. Your agent picks up every single time, day or night.",
  },
  {
    icon: Calendar,
    title: "Books Appointments",
    body: "Syncs with your calendar and books appointments automatically, no staff required.",
  },
  {
    icon: Database,
    title: "Logs to Your CRM",
    body: "Every call is recorded, summarized, and logged. Nothing falls through the cracks.",
  },
  {
    icon: UserCheck,
    title: "Qualifies Leads",
    body: "Your agent knows who's a fit and who isn't — asks the right questions every time.",
  },
  {
    icon: ArrowRightLeft,
    title: "Escalates to Humans",
    body: "When a caller needs a real person, your agent warm-transfers instantly.",
  },
  {
    icon: MessageSquare,
    title: "Sends Confirmations",
    body: "Automatic SMS and email confirmations reduce no-shows.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [featured, ...rest] = FEATURES;
  const FeaturedIcon = featured.icon;

  return (
    <section className="py-24 px-6 bg-[var(--color-surface)]" id="features">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-14">
          What Response Ready AI<br />Does For Your Business
        </h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-[var(--color-accent)] rounded-2xl p-10 flex flex-col justify-between min-h-[320px]"
          >
            <FeaturedIcon className="h-8 w-8 text-white" aria-hidden="true" />
            <div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] text-white mb-3">
                {featured.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{featured.body}</p>
            </div>
          </motion.div>

          <div className="flex flex-col divide-y divide-[var(--color-gray-mid)]">
            {rest.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: (i + 1) * 0.07 }}
                  className="flex items-start gap-5 py-6 first:pt-0"
                >
                  <Icon
                    className="h-5 w-5 text-[var(--color-accent)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-primary)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
