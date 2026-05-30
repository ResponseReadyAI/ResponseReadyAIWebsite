"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { isValidUSPhone } from "@/lib/phone";
import { BOOKING_HREF } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

const INDUSTRIES = [
  { value: "medspa", label: "Med Spa" },
  { value: "roofing", label: "Roofing" },
  { value: "plumber", label: "Plumbing" },
  { value: "auto_detailing", label: "Auto Detailing" },
  { value: "auto_dealer", label: "Auto Dealership" },
  { value: "hvac", label: "HVAC" },
  { value: "dentist", label: "Dental" },
  { value: "insurance", label: "Insurance" },
  { value: "boutique", label: "Retail Boutique" },
  { value: "contractor", label: "General Contractor" },
];

export default function VoiceDemoForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [industryError, setIndustryError] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validatePhone(value: string) {
    if (!value) {
      setPhoneError("Phone number is required.");
      return false;
    }
    if (!isValidUSPhone(value)) {
      setPhoneError("Please enter a valid 10-digit US phone number.");
      return false;
    }
    setPhoneError("");
    return true;
  }

  function validateIndustry(value: string) {
    if (!value) {
      setIndustryError("Please select your industry.");
      return false;
    }
    setIndustryError("");
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const phoneOk = validatePhone(phone);
    const industryOk = validateIndustry(industry);
    if (!phoneOk || !industryOk) return;

    setFormState("loading");

    try {
      const res = await fetch("/api/demo-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, industry, website: honeypot }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(
          data.error ?? "Something went wrong — please try again."
        );
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorMessage(
        "Something went wrong — try again or email daniel@responsereadyai.com"
      );
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-xl bg-[var(--color-accent-light)] border border-[var(--color-accent-dark)]/30 p-8 text-center space-y-5">
        <p className="text-2xl">📞</p>
        <p className="text-[var(--color-primary)] font-medium leading-relaxed">
          Your phone will ring in just a moment. Pick up and experience what
          your customers would hear.
        </p>
        <a
          href={BOOKING_HREF}
          className="inline-block rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-accent-dark)] transition-colors"
        >
          Book a Discovery Call →
        </a>
      </div>
    );
  }

  if (formState === "error") {
    return (
      <div className="rounded-xl bg-red-50 border border-red-200 p-8 space-y-4">
        <p className="text-[var(--color-error)] font-medium">{errorMessage}</p>
        <button
          onClick={() => setFormState("idle")}
          className="text-sm text-[var(--color-accent)] underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium text-white mb-1.5">
          Your name
        </label>
        <input
          id="demo-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          disabled={formState === "loading"}
          className="w-full rounded-lg border border-[var(--color-gray-mid)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="demo-phone" className="block text-sm font-medium text-white mb-1.5">
          Your phone number
        </label>
        <input
          id="demo-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (phoneError) validatePhone(e.target.value);
          }}
          onBlur={() => validatePhone(phone)}
          placeholder="Your phone number"
          disabled={formState === "loading"}
          aria-describedby={phoneError ? "phone-error" : undefined}
          className="w-full rounded-lg border border-[var(--color-gray-mid)] bg-white px-4 py-3 text-sm text-[var(--color-primary)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] disabled:opacity-50 aria-[describedby]:border-[var(--color-error)]"
        />
        {phoneError && (
          <p id="phone-error" role="alert" className="mt-1.5 text-xs text-[var(--color-error)]">
            {phoneError}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="demo-industry" className="block text-sm font-medium text-white mb-1.5">
          Your industry
        </label>
        <select
          id="demo-industry"
          required
          value={industry}
          onChange={(e) => {
            setIndustry(e.target.value);
            if (industryError) validateIndustry(e.target.value);
          }}
          onBlur={() => validateIndustry(industry)}
          disabled={formState === "loading"}
          aria-describedby={industryError ? "demo-industry-error" : undefined}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] disabled:opacity-50"
        >
          <option value="" disabled className="text-[var(--color-primary)]">Select your industry</option>
          {INDUSTRIES.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-[var(--color-primary)]">
              {opt.label}
            </option>
          ))}
        </select>
        {industryError && (
          <p id="demo-industry-error" role="alert" className="mt-1.5 text-xs text-red-300">
            {industryError}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Calling you now...
          </>
        ) : (
          "Call Me Now →"
        )}
      </button>

      <p className="text-xs text-[var(--color-muted)] text-center">
        One call. No spam. Unsubscribe instantly.
      </p>
      <p className="text-[10px] text-[var(--color-muted)] text-center leading-relaxed">
        By submitting, you consent to receive a one-time AI demo call at the
        number provided. Standard call rates may apply.
      </p>
    </form>
  );
}
