import { FOUNDER_EMAIL } from "@/lib/constants";

export default function FounderSection() {
  return (
    <section className="py-24 px-6 bg-[var(--color-primary)]" id="founder">
      <div className="mx-auto max-w-3xl">
        <div aria-hidden="true">
          <span className="text-8xl font-[family-name:var(--font-display)] text-[var(--color-accent)] leading-none opacity-50">
            &ldquo;
          </span>
        </div>

        <blockquote className="-mt-6 space-y-5">
          <p className="text-xl md:text-2xl font-[family-name:var(--font-display)] text-white leading-relaxed">
            I built Response Ready AI because I was the customer on the other end of
            the phone. I needed a service — something urgent — called twice, got
            voicemail both times, and ended up going somewhere else. The business
            probably never knew they lost me.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            If your business runs on phone calls, you can&rsquo;t afford to miss
            them. Response Ready AI makes sure you don&rsquo;t.
          </p>
          <footer className="pt-6 border-t border-white/10">
            <p className="text-sm font-semibold text-white">
              — Daniel, Founder of Response Ready AI
            </p>
            <a
              href={`mailto:${FOUNDER_EMAIL}`}
              className="text-sm text-[var(--color-accent)] hover:underline mt-1 block"
            >
              {FOUNDER_EMAIL}
            </a>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
