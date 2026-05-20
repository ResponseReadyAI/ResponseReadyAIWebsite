import FoundingClientBadge from "@/components/FoundingClientBadge";
import { BOOKING_HREF } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="pt-36 pb-32 px-6 bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="max-w-2xl">
            <div className="mb-8">
              <FoundingClientBadge />
            </div>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] text-[var(--color-primary)] leading-[1.05] tracking-tight">
              Stop Losing<br />Customers to<br />Voicemail.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[var(--color-muted)] leading-relaxed max-w-lg">
              Every call answered. Every appointment booked. Every lead captured.
              Around the clock — without hiring anyone.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href={BOOKING_HREF}
                className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-7 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-dark)] transition-colors shadow-sm"
              >
                Book a Discovery Call →
              </a>
              <p className="text-sm text-[var(--color-muted)] self-center">
                20 min. No commitment. No hard sell.
              </p>
            </div>
          </div>

          <div className="hidden lg:block select-none" aria-hidden="true">
            <span className="text-[220px] font-[family-name:var(--font-display)] leading-none text-[var(--color-accent)] opacity-[0.07]">
              24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
