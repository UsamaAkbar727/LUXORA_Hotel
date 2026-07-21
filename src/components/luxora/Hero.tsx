"use client";

import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineLocationMarker, HiArrowRight, HiOutlineClock } from "react-icons/hi";

interface HeroProps {
  onReserveClick?: () => void;
}

export default function Hero({ onReserveClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxora-bg pt-28 pb-16">
      {/* Background Image with Ambient Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxora_hero_bg.png"
          alt="LUXORA Rooftop Lounge View"
          className="w-full h-full object-cover object-center scale-105 opacity-40 animate-pulse-gold duration-[12000ms]"
        />
        {/* Soft Multi-layered Editorial Lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg via-luxora-bg/60 to-luxora-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg via-luxora-bg/75 to-transparent" />
      </div>

      {/* Subtle Radial Ambient Gold Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-luxora-gold/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container — Editorial Asymmetrical Layout */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: High-Fashion Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Live Venue Status & Location */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-luxora-gold/30 px-4 py-1.5 rounded-full text-xs font-[var(--font-jakarta)] text-white/90 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-luxora-gold font-semibold tracking-wider uppercase text-[11px]">Level 42</span>
              <span className="text-white/30">•</span>
              <span className="text-white/70">450 Grand Avenue, Downtown</span>
            </div>

            {/* Editorial Headline */}
            <div>
              <span className="text-luxora-gold font-serif italic text-2xl md:text-3xl lg:text-4xl block mb-2 font-normal">
                Where the skyline meets culinary distinction.
              </span>
              <h1 className="font-[var(--font-serif)] text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-normal tracking-tight leading-[0.98] text-white">
                LUXORA <br />
                <span className="text-gold-gradient font-italic italic font-light">Rooftop & Suites</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-white/75 text-base md:text-lg font-[var(--font-jakarta)] font-light max-w-xl leading-relaxed tracking-normal">
              An elevated sanctuary 42 floors above the metropolis. Experience 180° panoramic city views, French-Asian fusion tapas by Chef Marcus Vance, and master mixology.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onReserveClick}
                className="group bg-gold-gradient text-black font-semibold text-xs tracking-[0.2em] uppercase px-9 py-4.5 rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-[var(--font-jakarta)]"
              >
                <HiOutlineCalendar size={18} />
                <span>Reserve A Table</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>

              <a
                href="#cuisine"
                className="group text-white hover:text-luxora-gold text-xs tracking-[0.2em] uppercase transition-all duration-300 px-8 py-4.5 rounded-full border border-white/20 hover:border-luxora-gold font-medium flex items-center justify-center gap-2 backdrop-blur-md bg-white/5 font-[var(--font-jakarta)]"
              >
                <span>Explore Menu</span>
              </a>
            </div>

            {/* Editorial Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <span className="font-[var(--font-serif)] text-2xl md:text-3xl font-semibold text-luxora-gold block">
                  Level 42
                </span>
                <span className="text-white/50 text-xs font-[var(--font-jakarta)] uppercase tracking-wider block mt-0.5">
                  Panoramic Deck
                </span>
              </div>
              <div>
                <span className="font-[var(--font-serif)] text-2xl md:text-3xl font-semibold text-luxora-gold block">
                  4.9 ★
                </span>
                <span className="text-white/50 text-xs font-[var(--font-jakarta)] uppercase tracking-wider block mt-0.5">
                  Verified Rating
                </span>
              </div>
              <div>
                <span className="font-[var(--font-serif)] text-2xl md:text-3xl font-semibold text-luxora-gold block">
                  5 PM – 2 AM
                </span>
                <span className="text-white/50 text-xs font-[var(--font-jakarta)] uppercase tracking-wider block mt-0.5">
                  Open Tuesday–Sunday
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Fashion Featured Media Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-luxora-gold/30 luxury-shadow group">
              <img
                src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=85"
                alt="LUXORA Rooftop Dining View"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-strong border border-luxora-gold/30 text-left space-y-2">
                <span className="text-luxora-gold text-[10px] font-bold uppercase tracking-[0.2em] font-[var(--font-jakarta)] block">
                  Featured Experience
                </span>
                <h3 className="font-[var(--font-serif)] text-xl md:text-2xl text-white font-semibold leading-snug">
                  Sunset Terrace & Fire Pit Cabanas
                </h3>
                <p className="text-white/60 text-xs font-[var(--font-jakarta)] leading-relaxed">
                  Sunset Hours: 5:00 PM – 7:00 PM Daily. Complimentary valet at main lobby.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
