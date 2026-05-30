"use client";

import { motion } from "framer-motion";
import { BOOKING_HREF } from "@/lib/constants";

export function MedspaHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] pt-20 pb-24 px-6">
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 0%, #f0e0d0 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e8c4b2] bg-white px-4 py-1.5 text-xs font-medium text-[#9e7e66] shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a96e]" />
          Built exclusively for med spas & aesthetic clinics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-5xl leading-tight tracking-tight text-[#1c1a18] sm:text-6xl lg:text-7xl"
        >
          Your front desk,
          <br />
          <em className="not-italic text-[#c9a96e]">always on.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[#6b5e54]"
        >
          Every call you miss is a booking that walks out the door. Response
          Ready AI answers your phone 24/7 — during treatments, after hours,
          on weekends — and schedules consultations automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-[#1c1a18] px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#2c2015] transition-colors"
          >
            Hear a Demo Call →
          </a>
          <a
            href={BOOKING_HREF}
            className="inline-flex items-center gap-2 rounded-full border border-[#e8c4b2] bg-white px-7 py-3.5 text-sm font-semibold text-[#1c1a18] hover:border-[#c9a96e] transition-colors"
          >
            Book a Discovery Call
          </a>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-3 text-sm text-[#9e8e83]"
        >
          {[
            "No new phone number needed",
            "Live in days, not weeks",
            "Set up personally by our founder",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="text-[#c9a96e]">✓</span> {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
