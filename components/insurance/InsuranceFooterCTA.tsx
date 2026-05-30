import { BOOKING_HREF, FOUNDER_EMAIL } from "@/lib/constants";

export function InsuranceFooterCTA() {
  return (
    <footer className="bg-[#0a1628] py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-white sm:text-5xl leading-tight">
          Stop losing policies to faster agencies.
        </h2>
        <p className="mt-5 text-white/60 text-base leading-relaxed max-w-lg mx-auto">
          No contracts. No templates. A custom AI agent built for your book of
          business, personally by our founder. Book a 20-minute call to see it live.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={BOOKING_HREF}
            className="inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#d97706] transition-colors shadow-lg"
          >
            Book a Discovery Call →
          </a>
          <a
            href={`mailto:${FOUNDER_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/40 transition-colors"
          >
            Email Daniel
          </a>
        </div>
        <p className="mt-12 text-xs text-white/20">
          © {new Date().getFullYear()} Response Ready AI ·{" "}
          <a href="/privacy" className="underline hover:text-white/40">
            Privacy
          </a>
        </p>
      </div>
    </footer>
  );
}
