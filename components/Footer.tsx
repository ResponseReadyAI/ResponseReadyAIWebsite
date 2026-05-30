import { NAV_LINKS, SITE_NAME, FOUNDER_EMAIL } from "@/lib/constants";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "SMS Consent Policy", href: "/sms-consent" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-gray-mid)] py-12 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Logo + contact */}
          <div className="space-y-3">
            <p className="text-base font-bold text-[var(--color-primary)] tracking-tight">
              {SITE_NAME}
            </p>
            <a
              href={`mailto:${FOUNDER_EMAIL}`}
              className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {FOUNDER_EMAIL}
            </a>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-gray-mid)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)]">
            © 2026 Response Ready AI. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1" role="list">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs text-[var(--color-muted)] hover:text-[var(--color-muted)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
