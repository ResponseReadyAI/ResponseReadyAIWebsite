import { BOOKING_HREF, FOUNDER_EMAIL } from "@/lib/constants";

export function MedspaFooterCTA() {
  return (
    <footer className="bg-[#1c1a18] py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-white sm:text-5xl leading-tight">
          Ready to fill your schedule?
        </h2>
        <p className="mt-5 text-[#9e8e83] text-base leading-relaxed max-w-lg mx-auto">
          No contracts. No templates. A custom AI receptionist built for your
          med spa, personally by our founder. Book a 20-minute call to see it live.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={BOOKING_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-[#c9a96e] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#a8875a] transition-colors shadow-lg"
          >
            Book a Discovery Call →
          </a>
          <a
            href={`mailto:${FOUNDER_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/40 transition-colors"
          >
            Email Daniel
          </a>
        </div>
        <p className="mt-12 text-xs text-[#5a5047]">
          © {new Date().getFullYear()} Response Ready AI ·{" "}
          <a href="/privacy" className="underline hover:text-[#9e8e83]">
            Privacy
          </a>
        </p>
      </div>
    </footer>
  );
}
