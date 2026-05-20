"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOKING_HREF, SITE_NAME } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 bg-[var(--color-bg)] ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" className="text-base font-bold text-[var(--color-primary)] tracking-tight">
            {SITE_NAME}
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
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

          {/* Desktop CTA */}
          <a
            href={BOOKING_HREF}
            className="hidden md:inline-flex items-center rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Book a Call
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[var(--color-primary)] hover:bg-[var(--color-gray-light)] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[var(--color-bg)] flex flex-col px-6 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between mb-10">
            <a
              href="/"
              className="text-base font-bold text-[var(--color-primary)] tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              {SITE_NAME}
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-md text-[var(--color-primary)] hover:bg-[var(--color-gray-light)] transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <ul className="flex flex-col gap-6 flex-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xl font-medium text-[var(--color-primary)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={BOOKING_HREF}
            className="flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-dark)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call →
          </a>
        </div>
      )}
    </>
  );
}
