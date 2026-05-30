"use client";

import { FOUNDING_SPOTS_TAKEN, FOUNDING_SPOTS_TOTAL, FOUNDING_SPOTS_REMAINING } from "@/lib/constants";
import { openBooking } from "@/components/ui/booking-modal";

export default function FoundingClientSection() {
  const pct = Math.round((FOUNDING_SPOTS_TAKEN / FOUNDING_SPOTS_TOTAL) * 100);

  return (
    <section
      className="py-24 px-6 bg-[var(--color-accent-light)]"
      id="founding"
      aria-labelledby="founding-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="founding-heading"
          className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6"
        >
          Join the Founding Client Program
        </h2>

        <div className="text-[var(--color-primary)] text-base leading-relaxed space-y-4 mb-8">
          <p>
            We're onboarding our first 10 businesses personally. Every setup is
            handled by our founder — not a template, not a ticket. In exchange,
            Founding Clients get priority plans that won't be available once
            we're at scale.
          </p>
          <p className="italic text-[var(--color-muted)]">
            {FOUNDING_SPOTS_TAKEN} of {FOUNDING_SPOTS_TOTAL} spots taken ·{" "}
            {FOUNDING_SPOTS_REMAINING} remaining
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="mx-auto mb-10 h-2.5 max-w-sm rounded-full bg-[var(--color-accent-light)] overflow-hidden"
          role="progressbar"
          aria-valuenow={FOUNDING_SPOTS_TAKEN}
          aria-valuemin={0}
          aria-valuemax={FOUNDING_SPOTS_TOTAL}
          aria-label={`${FOUNDING_SPOTS_TAKEN} of ${FOUNDING_SPOTS_TOTAL} founding spots taken`}
        >
          <div
            className="h-full rounded-full bg-[var(--color-accent)] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>

        <button
          onClick={openBooking}
          className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-7 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-dark)] transition-colors shadow-sm"
        >
          Claim Your Spot →
        </button>
      </div>
    </section>
  );
}
