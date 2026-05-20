import { Check } from "lucide-react";
import { BOOKING_HREF } from "@/lib/constants";

const TIERS = [
  {
    name: "Foundation",
    tagline: "Always-On Coverage",
    featured: false,
    features: [
      "24/7 call answering",
      "FAQ handling (your questions, your answers)",
      "After-hours message capture",
      "Instant SMS alert to your team",
      "Weekly call summary reports",
    ],
    copy: "Great starting point for businesses that just need to stop bleeding leads after hours.",
  },
  {
    name: "Full Front Desk",
    tagline: null,
    badge: "Most Requested",
    featured: true,
    features: [
      "Everything in Foundation",
      "Live appointment scheduling",
      "Calendar sync (Google, Outlook, and booking software)",
      "CRM logging & client history",
      "Email + SMS confirmations",
      "Live human transfer when needed",
    ],
    copy: "The most common setup for dental offices, law firms, salons, home services, and more.",
  },
  {
    name: "Full Custom",
    tagline: "Revenue-Optimized",
    featured: false,
    features: [
      "Everything in Full Front Desk",
      "Multi-location call routing",
      "Lead retention workflows",
      "Custom personas & brand voice",
      "Revenue optimization scripting",
      "Dedicated account management",
    ],
    copy: "Built for growing businesses that want every call to work harder.",
  },
];

export default function TiersSection() {
  return (
    <section className="py-24 px-6 bg-[var(--color-bg)]" id="tiers">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--color-primary)] text-center mb-14">
          Choose Your Coverage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${
                tier.featured
                  ? "border-transparent bg-[var(--color-accent)]"
                  : "border-[var(--color-gray-mid)] bg-[var(--color-surface)]"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className={`text-xl font-[family-name:var(--font-display)] ${tier.featured ? "text-white" : "text-[var(--color-primary)]"}`}>
                  {tier.name}
                </h3>
                {tier.tagline && (
                  <p className={`text-sm mt-0.5 ${tier.featured ? "text-white/70" : "text-[var(--color-muted)]"}`}>
                    {tier.tagline}
                  </p>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${tier.featured ? "text-white/70" : "text-[var(--color-success)]"}`}
                      aria-hidden="true"
                    />
                    <span className={tier.featured ? "text-white" : "text-[var(--color-primary)]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <p className={`text-sm leading-relaxed border-t pt-5 ${
                tier.featured
                  ? "text-white/70 border-white/20"
                  : "text-[var(--color-muted)] border-[var(--color-gray-mid)]"
              }`}>
                {tier.copy}
              </p>

              <a
                href={BOOKING_HREF}
                className={`mt-auto flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-white text-[var(--color-accent)] hover:bg-[var(--color-gray-light)]"
                    : "border border-[var(--color-gray-mid)] text-[var(--color-primary)] hover:bg-[var(--color-gray-light)]"
                }`}
              >
                Book a Discovery Call →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
