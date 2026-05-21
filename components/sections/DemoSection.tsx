import VoiceDemoForm from "@/components/VoiceDemoForm";

export default function DemoSection() {
  return (
    <section
      className="py-24 px-6 bg-[var(--color-primary)]"
      id="demo"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-xl">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 mb-5">
            Live Demo
          </span>
          <h2
            id="demo-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Hear It on Your Phone — Right Now
          </h2>
          <p className="text-white/70 text-lg">
            Enter your number and we'll call you in seconds. No sign-up.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-7">
          <VoiceDemoForm />
        </div>
      </div>
    </section>
  );
}
