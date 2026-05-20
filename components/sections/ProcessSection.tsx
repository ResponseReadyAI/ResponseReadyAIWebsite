const STEPS = [
  {
    number: "01",
    title: "Configure",
    body: "We learn your business: your FAQs, your tone, your calendar. Daniel handles every detail.",
  },
  {
    number: "02",
    title: "Go Live",
    body: "Your agent is deployed. Your existing phone number stays the same — just simple call forwarding.",
  },
  {
    number: "03",
    title: "Review",
    body: "Weekly call summaries. Script updates anytime. Your agent gets smarter over time.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 bg-[var(--color-bg)]" id="process">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--color-primary)] text-center mb-16">
          Up and Running in Days
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-gray-mid)]">
          {STEPS.map((step) => (
            <div key={step.number} className="relative px-8 py-8 md:py-0 first:pl-0 last:pr-0 overflow-hidden">
              <span
                className="absolute top-0 right-2 text-[8rem] font-[family-name:var(--font-display)] leading-none text-[var(--color-accent)] opacity-[0.07] select-none pointer-events-none"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-3">
                  Step {step.number}
                </p>
                <h3 className="text-xl font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
