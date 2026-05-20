import ChatDemoPlaceholder from "@/components/ChatDemoPlaceholder";
import VoiceDemoForm from "@/components/VoiceDemoForm";

export default function DemoSection() {
  return (
    <section
      className="py-24 px-6 bg-[var(--color-primary)]"
      id="demo"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 mb-5">
            Live Demo
          </span>
          <h2
            id="demo-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Don't Take Our Word for It
          </h2>
          <p className="text-white/70 text-lg">
            Experience both products. No sign-up.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Chat Demo */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Chat with the AI Agent
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              This is the same kind of AI agent your business would have. Ask it
              a question, try to book an appointment, or just see how it sounds.
            </p>
            <ChatDemoPlaceholder />
            <p className="mt-3 text-xs text-[var(--color-muted)] text-center">
              Full chat agent coming soon
            </p>
          </div>

          {/* Voice Demo */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Hear It on Your Phone — Right Now
            </h3>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Enter your number and we'll call you in seconds. You'll hear
              exactly what your customers would hear when they call your
              business. No sign-up. Takes 60 seconds.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-7">
              <VoiceDemoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
