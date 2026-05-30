import MedspaDemoForm from "@/components/MedspaDemoForm";

export function MedspaDemoSection() {
  return (
    <section id="demo" className="bg-[#f5ede4] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#c9a96e]">
              Live demo
            </p>
            <h2 className="font-display text-4xl text-[#1c1a18] sm:text-5xl leading-tight">
              Hear exactly what
              <br />
              your clients hear.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6b5e54]">
              Enter your name and number — we&rsquo;ll call you right now with
              a demo built for a med spa. Experience the voice, the booking
              flow, the feel. No commitment.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Books consultations on the spot",
                "Answers questions about your services",
                "Sounds natural — not robotic",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#6b5e54]">
                  <span className="text-[#c9a96e] font-semibold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-[#e8c4b2]/60 bg-white p-8 shadow-sm">
            <h3 className="font-display text-2xl text-[#1c1a18] mb-6">
              Call me now
            </h3>
            <MedspaDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
