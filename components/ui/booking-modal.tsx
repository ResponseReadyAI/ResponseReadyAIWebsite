"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("open-booking", open);
    return () => window.removeEventListener("open-booking", open);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[var(--color-primary)]/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-gray-mid)] bg-[var(--color-bg)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-4 bg-[var(--color-primary)] border-b border-white/10">
              <div>
                <p className="text-sm font-semibold text-white">Book a Discovery Call</p>
                <p className="text-xs text-white/60">20 min · No commitment · No hard sell</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close booking"
                className="h-8 w-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Calendly iframe */}
            <iframe
              src="https://calendly.com/daniel-responsereadyai?hide_gdpr_banner=1&background_color=faf9f7&text_color=1a1612&primary_color=ec9513"
              width="100%"
              height="600"
              frameBorder="0"
              title="Book a discovery call with Daniel"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function openBooking() {
  window.dispatchEvent(new CustomEvent("open-booking"));
}
