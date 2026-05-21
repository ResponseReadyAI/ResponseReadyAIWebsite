const BEFORE = [
  "Calls going to voicemail after hours",
  "Staff answering the same questions all day",
  "Leads that called once and never came back",
  "Appointments you never knew you lost",
];

const AFTER = [
  "Every call answered, 24/7",
  "FAQs handled automatically",
  "Appointments booked while you sleep",
  "Every lead captured and logged",
];

export default function BeforeAfter() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10">
      <div className="rounded-xl border border-red-100 bg-red-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-5">
          Without Response Ready AI
        </p>
        <ul className="space-y-3">
          {BEFORE.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[var(--color-primary)]">
              <span className="mt-0.5 text-[var(--color-error)] font-bold shrink-0" aria-hidden="true">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-green-100 bg-green-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-5">
          With Response Ready AI
        </p>
        <ul className="space-y-3">
          {AFTER.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[var(--color-primary)]">
              <span className="mt-0.5 text-[var(--color-success)] font-bold shrink-0" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
