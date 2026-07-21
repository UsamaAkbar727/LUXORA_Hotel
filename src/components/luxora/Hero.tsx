"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCalendar, HiOutlineSparkles, HiOutlineLocationMarker, HiStar, HiChevronRight, HiOutlineShieldCheck, HiOutlineFire } from "react-icons/hi";

interface HeroProps {
  onReserveClick?: () => void;
}

const heroSlides = [
  {
    image: "/luxora_hero_bg.png",
    fallback: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1920&q=85",
    badge: "LEVEL 42 SKYLINE SANCTUARY",
    title: "ELEVATED GASTRONOMY & SKYLINE VIBES",
    desc: "Perched 42 floors above the city. Experience 180° panoramic skyline vistas, Michelin-inspired tapas by Chef Marcus Vance, and bespoke mixology.",
  },
  {
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1920&q=85",
    fallback: "/luxora_hero_bg.png",
    badge: "SUNSET FIRE PIT CABANAS",
    title: "GOLDEN HOUR ABOVE THE METROPOLIS",
    desc: "Unwind during Sunset Hours (5 PM – 7 PM) with vintage champagne, outdoor fire pits, and lofi acoustic sessions under open skies.",
  },
  {
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1920&q=85",
    fallback: "/luxora_hero_bg.png",
    badge: "BESPOKE MIXOLOGY & WINE",
    title: "LIQUID ARTISTRY BY ELENA ROSTOVA",
    desc: "Indulge in 24K gold-infused cocktails, rare barrel-aged spirits, and over 400 reserve champagne labels in our private marble lounge.",
  },
];

export default function Hero({ onReserveClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quickDate, setQuickDate] = useState("");
  const [quickGuests, setQuickGuests] = useState(2);
  const [quickZone, setQuickZone] = useState("Skyline Edge");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[900px] h-screen flex flex-col justify-between overflow-hidden bg-luxora-bg pt-28 pb-10">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = slide.fallback;
              }}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-Layered Glass & Radial Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxora-bg/95 via-luxora-bg/60 to-luxora-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg/90 via-transparent to-luxora-bg/90" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Floating Ambient Golden Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-luxora-gold/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Left Floating KPI Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden xl:flex absolute top-1/3 left-10 z-20 bg-luxora-card/80 backdrop-blur-2xl border border-luxora-gold/30 rounded-2xl p-4 max-w-[200px] luxury-shadow items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-luxora-gold/15 border border-luxora-gold/30 flex items-center justify-center text-luxora-gold font-bold">
          4.9
        </div>
        <div>
          <div className="flex items-center text-luxora-gold text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <HiStar key={i} size={12} />
            ))}
          </div>
          <span className="text-[11px] text-white/70 block mt-0.5 font-[var(--font-jakarta)]">
            1,240+ Verified Reviews
          </span>
        </div>
      </motion.div>

      {/* Right Floating Highlight Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden xl:flex absolute top-1/3 right-10 z-20 bg-luxora-card/80 backdrop-blur-2xl border border-luxora-gold/30 rounded-2xl p-4 max-w-[220px] luxury-shadow items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-luxora-accent/20 border border-luxora-accent/40 flex items-center justify-center text-luxora-accent">
          <HiOutlineFire size={20} />
        </div>
        <div>
          <span className="text-luxora-gold text-[10px] uppercase font-bold tracking-wider block font-[var(--font-jakarta)]">
            Sunset Sessions
          </span>
          <span className="text-[11px] text-white/80 font-medium block leading-snug font-[var(--font-jakarta)]">
            5:00 PM – 7:00 PM Daily
          </span>
        </div>
      </motion.div>

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-16 my-auto flex flex-col items-center text-center">
        {/* Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-luxora-gold/40 px-5 py-2 rounded-full mb-6 text-xs uppercase tracking-[0.25em] font-[var(--font-jakarta)] text-white shadow-2xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-luxora-gold font-bold">{slide.badge}</span>
        </motion.div>

        {/* Headline with Modern Outfit Font */}
        <motion.h1
          key={slide.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-[var(--font-outfit)] text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-gold-gradient max-w-5xl drop-shadow-2xl"
        >
          {slide.title}
        </motion.h1>

        {/* Subtitle with Plus Jakarta Sans */}
        <motion.p
          key={slide.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/85 text-base sm:text-lg md:text-xl font-[var(--font-jakarta)] font-light max-w-2xl leading-relaxed mb-10 tracking-[0.01em]"
        >
          {slide.desc}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10"
        >
          <button
            onClick={onReserveClick}
            className="group bg-gold-gradient text-black font-extrabold text-xs tracking-[0.2em] uppercase px-10 py-4.5 rounded-full hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-300 flex items-center gap-2"
          >
            <HiOutlineCalendar size={18} />
            <span>Book Table Reservation</span>
            <HiChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>

          <a
            href="#venue"
            className="group text-white hover:text-luxora-gold text-xs tracking-[0.2em] uppercase transition-all duration-300 px-8 py-4.5 rounded-full border border-white/20 hover:border-luxora-gold font-semibold flex items-center gap-2 backdrop-blur-md bg-white/5"
          >
            <HiOutlineLocationMarker className="text-luxora-gold" size={16} />
            <span>Explore Rooftop Zones</span>
          </a>
        </motion.div>

        {/* Slideshow Progress Bar */}
        <div className="flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === idx ? "w-12 bg-luxora-gold shadow-[0_0_12px_rgba(212,175,55,0.9)]" : "w-3 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Modern Booking Search Widget */}
      <div className="relative z-10 max-w-5xl mx-auto w-[94%] mt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-luxora-card/95 backdrop-blur-2xl border border-luxora-gold/40 rounded-3xl p-4 md:p-6 luxury-shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
        >
          {/* Date Selector */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-xs font-[var(--font-jakarta)]">
            <HiOutlineCalendar className="text-luxora-gold flex-shrink-0" size={18} />
            <div className="w-full">
              <span className="text-[10px] uppercase text-white/50 block font-bold tracking-wider">Date</span>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="bg-transparent text-white text-xs outline-none w-full [color-scheme:dark] font-medium"
              />
            </div>
          </div>

          {/* Party Size Selector */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-xs font-[var(--font-jakarta)]">
            <HiOutlineSparkles className="text-luxora-gold flex-shrink-0" size={18} />
            <div className="w-full">
              <span className="text-[10px] uppercase text-white/50 block font-bold tracking-wider">Guests</span>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(Number(e.target.value))}
                className="bg-transparent text-white text-xs outline-none w-full appearance-none cursor-pointer font-medium"
              >
                <option value={2} className="bg-luxora-card">2 Guests (Intimate Table)</option>
                <option value={4} className="bg-luxora-card">4 Guests (Group)</option>
                <option value={6} className="bg-luxora-card">6 Guests (Terrace)</option>
                <option value={10} className="bg-luxora-card">10+ Guests (VIP Gala)</option>
              </select>
            </div>
          </div>

          {/* Seating Zone Selector */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-xs font-[var(--font-jakarta)]">
            <HiOutlineLocationMarker className="text-luxora-gold flex-shrink-0" size={18} />
            <div className="w-full">
              <span className="text-[10px] uppercase text-white/50 block font-bold tracking-wider">Seating Area</span>
              <select
                value={quickZone}
                onChange={(e) => setQuickZone(e.target.value)}
                className="bg-transparent text-white text-xs outline-none w-full appearance-none cursor-pointer font-medium"
              >
                <option value="Skyline Edge" className="bg-luxora-card">Skyline Edge Glass</option>
                <option value="VIP Booth" className="bg-luxora-card">VIP Velvet Booth</option>
                <option value="Sunset Cabana" className="bg-luxora-card">Sunset Fire Cabana</option>
                <option value="Champagne Lounge" className="bg-luxora-card">Marble Bar Lounge</option>
              </select>
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            onClick={onReserveClick}
            className="w-full h-full bg-gold-gradient text-black font-extrabold text-xs tracking-[0.15em] uppercase py-4 rounded-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2"
          >
            <span>Check Availability</span>
            <HiChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
