import FoundingClientBadge from "@/components/FoundingClientBadge";
import { BOOKING_HREF } from "@/lib/constants";

export default function FooterCTASection() {
  return (
    <section
      className="py-24 px-6 bg-[var(--color-primary)] text-center"
      aria-labelledby="footer-cta-heading"
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <h2
          id="footer-cta-heading"
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Never Miss a Lead Again.
        </h2>
        <p className="text-white/70 text-lg">
          20-minute call. No commitment. No hard sell. Just a live demo and
          custom plan.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href={BOOKING_HREF}
            className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-gray-light)] transition-colors shadow-sm"
          >
            Book a Discovery Call →
          </a>
          <FoundingClientBadge />
        </div>
      </div>
    </section>
  );
}
