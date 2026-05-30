"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { isValidUSPhone } from "@/lib/phone";
import { BOOKING_HREF } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

export default function MedspaDemoForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [phoneError, setPhoneError] = useState("");
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validatePhone(phone)) return;

    setFormState("loading");

    try {
      const res = await fetch("/api/demo-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, industry: "medspa", website: honeypot }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error ?? "Something went wrong — please try again.");
        setFormState("error");
        return;
      }

      setFormState("success");
    } catch {
      setErrorMessage("Something went wrong — try again or email daniel@responsereadyai.com");
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl bg-[#f5ede4] border border-[#c9a96e]/30 p-8 text-center space-y-5">
        <p className="text-2xl">📞</p>
        <p className="text-[#1c1a18] font-medium leading-relaxed">
          Your phone will ring in just a moment. Pick up and hear the agent your
          clients would experience.
        </p>
        <a
          href={BOOKING_HREF}
          className="inline-block rounded-full bg-[#c9a96e] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a8875a] transition-colors"
        >
          Book a Discovery Call →
        </a>
      </div>
    );
  }

  if (formState === "error") {
    return (
      <div className="rounded-2xl bg-red-50 border border-red-200 p-8 space-y-4">
        <p className="text-red-600 font-medium">{errorMessage}</p>
        <button
          onClick={() => setFormState("idle")}
          className="text-sm text-[#c9a96e] underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
        <label htmlFor="ms-name" className="block text-sm font-medium text-[#1c1a18] mb-1.5">
          Your name
        </label>
        <input
          id="ms-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          disabled={formState === "loading"}
          className="w-full rounded-xl border border-[#e8c4b2] bg-white px-4 py-3 text-sm text-[#1c1a18] placeholder:text-[#9e8e83] focus:border-[#c9a96e] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20 disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="ms-phone" className="block text-sm font-medium text-[#1c1a18] mb-1.5">
          Your phone number
        </label>
        <input
          id="ms-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (phoneError) validatePhone(e.target.value);
          }}
          onBlur={() => validatePhone(phone)}
          placeholder="(555) 000-0000"
          disabled={formState === "loading"}
          aria-describedby={phoneError ? "ms-phone-error" : undefined}
          className="w-full rounded-xl border border-[#e8c4b2] bg-white px-4 py-3 text-sm text-[#1c1a18] placeholder:text-[#9e8e83] focus:border-[#c9a96e] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]/20 disabled:opacity-50"
        />
        {phoneError && (
          <p id="ms-phone-error" role="alert" className="mt-1.5 text-xs text-red-600">
            {phoneError}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full flex items-center justify-center gap-2 rounded-full bg-[#c9a96e] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#a8875a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Calling you now...
          </>
        ) : (
          "Call My Spa Now →"
        )}
      </button>

      <p className="text-xs text-[#9e8e83] text-center">
        One call. No spam. Unsubscribe instantly.
      </p>
      <p className="text-[10px] text-[#9e8e83] text-center leading-relaxed">
        By submitting, you consent to receive a one-time AI demo call at the
        number provided. Standard call rates may apply.
      </p>
    </form>
  );
}
