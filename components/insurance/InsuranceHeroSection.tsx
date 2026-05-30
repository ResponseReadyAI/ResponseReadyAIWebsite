"use client";

import { motion } from "framer-motion";
import { BOOKING_HREF } from "@/lib/constants";

export function InsuranceHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f2044] pt-20 pb-28 px-6">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 0%, rgba(245,158,11,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#f59e0b]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
          Built for insurance agencies &amp; independent brokers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-5xl leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          The first agent
          <br />
          to respond{" "}
          <span className="text-[#f59e0b]">wins the policy.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
        >
          Prospects call multiple agencies. The one that picks up first — and
          sounds credible — closes the deal. Response Ready AI answers every
          inquiry 24/7, qualifies the lead, and routes them to your producer
          before your competition even checks their voicemail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f59e0b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#d97706] transition-colors"
          >
            Hear a Demo Call →
          </a>
          <a
            href={BOOKING_HREF}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/40 transition-colors"
          >
            Book a Discovery Call
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm text-white/50"
        >
          {[
            "No new phone number needed",
            "Live in days, not weeks",
            "Set up personally by our founder",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-[#f59e0b]">✓</span> {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
