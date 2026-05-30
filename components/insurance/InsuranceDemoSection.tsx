import InsuranceDemoForm from "@/components/InsuranceDemoForm";

export function InsuranceDemoSection() {
  return (
    <section id="demo" className="bg-[#f8faff] py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Copy */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
              Live demo
            </p>
            <h2 className="text-4xl font-bold text-[#0f2044] sm:text-5xl leading-tight">
              Hear exactly what your{" "}
              <span className="font-display italic font-normal">
                prospects hear.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#64748b]">
              Enter your name and number — we&rsquo;ll call you right now with
              a demo built for an insurance agency. Hear the qualification
              flow, the routing, the professionalism. No commitment.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Qualifies coverage needs instantly",
                "Routes hot leads to producers",
                "Sounds professional — not robotic",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#64748b]">
                  <span className="text-[#f59e0b] font-semibold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form card */}
          <div className="rounded-2xl bg-[#0f2044] p-8 shadow-xl">
            <h3 className="font-display text-2xl text-white mb-6">
              Call my agency now
            </h3>
            <InsuranceDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
