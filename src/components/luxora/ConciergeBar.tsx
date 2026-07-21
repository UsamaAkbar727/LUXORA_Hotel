"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhone, HiOutlineCalendar, HiOutlineSparkles, HiX, HiOutlineLocationMarker, HiChevronUp } from "react-icons/hi";

interface ConciergeBarProps {
  onOpenReservation: () => void;
}

export default function ConciergeBar({ onOpenReservation }: ConciergeBarProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Expanded Quick Concierge Drawer */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 bg-luxora-card/95 backdrop-blur-xl border border-luxora-gold/30 rounded-3xl p-5 luxury-shadow text-white space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs uppercase font-semibold tracking-wider text-luxora-gold font-[var(--font-inter)]">
                  Live Venue Concierge
                </span>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-white/40 hover:text-white p-1"
              >
                <HiX size={16} />
              </button>
            </div>

            <div className="space-y-2 text-xs font-[var(--font-inter)]">
              <div className="flex items-center justify-between text-white/80">
                <span className="text-white/40">Current Status:</span>
                <span className="text-emerald-400 font-medium">Open Tonight until 2 AM</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span className="text-white/40">Location:</span>
                <span className="text-white font-medium flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-luxora-gold" /> Level 42, Skyline Tower
                </span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span className="text-white/40">Terrace Seating:</span>
                <span className="text-luxora-gold font-medium">Limited Availability</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setExpanded(false);
                  onOpenReservation();
                }}
                className="w-full bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase py-3 rounded-xl hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <HiOutlineCalendar size={16} /> Book Table Now
              </button>

              <a
                href="tel:+12125555890"
                className="w-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 text-xs font-semibold uppercase tracking-wider py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <HiOutlinePhone size={14} className="text-luxora-gold" /> Call VIP Host
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Pill */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 bg-luxora-card/90 backdrop-blur-md border border-luxora-gold/40 hover:border-luxora-gold px-5 py-3 rounded-full luxury-shadow text-white text-xs font-[var(--font-inter)] transition-all duration-300"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="font-semibold uppercase tracking-wider text-[11px] text-white">
          Level 42 VIP Concierge
        </span>
        <HiChevronUp className={`text-luxora-gold transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} size={16} />
      </motion.button>
    </div>
  );
}
