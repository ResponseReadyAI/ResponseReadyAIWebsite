import BeforeAfter from "@/components/BeforeAfter";

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-[var(--color-bg)]" id="problem">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center">
          Every Missed Call Is a Lost Customer
        </h2>
        <BeforeAfter />
      </div>
    </section>
  );
}
