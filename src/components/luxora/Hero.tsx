"use client";

import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineSparkles, HiOutlineCalendar } from "react-icons/hi";

interface HeroProps {
  onReserveClick?: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image with luxury multi-layer overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxora_hero_bg.png"
          alt="LUXORA Rooftop Lounge Night View"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-gold duration-[10000ms]"
        />
        {/* Multi-layer ambient lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-luxora-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg/80 via-transparent to-luxora-bg/80" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Location & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-luxora-gold/30 px-4 py-1.5 rounded-full mb-6 text-xs uppercase tracking-[0.2em] font-[var(--font-inter)] text-white"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-luxora-gold font-semibold">Level 42</span> • Open Tonight from 5:00 PM
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-[var(--font-playfair)] text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-[0.04em] leading-[1.1] mb-6 text-gold-gradient"
        >
          ELEVATED GASTRONOMY <br className="hidden md:block" /> & SKYLINE VIBES
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-sm sm:text-base md:text-lg font-[var(--font-inter)] font-light max-w-2xl leading-relaxed mb-10 tracking-[0.02em]"
        >
          Welcome to LUXORA — Grand Avenue&apos;s pinnacle rooftop sanctuary. Experience 180° panoramic city views, Michelin-inspired cuisine by Chef Marcus Vance, and bespoke mixology.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <button
            onClick={onReserveClick}
            className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.2em] uppercase px-9 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-2"
          >
            <HiOutlineCalendar size={18} /> Reserve A Table
          </button>
          <a
            href="#cuisine"
            className="group text-white/90 hover:text-luxora-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300 px-8 py-4 rounded-full border border-white/20 hover:border-luxora-gold font-medium flex items-center gap-2 backdrop-blur-sm"
          >
            Explore Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase font-[var(--font-inter)]">
        <span>Scroll to Explore</span>
        <div className="w-4 h-7 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-luxora-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
