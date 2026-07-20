"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlinePlay } from "react-icons/hi";

const stats = [
  { value: "52nd", label: "Floor" },
  { value: "360°", label: "City Views" },
  { value: "4.9", label: "Rating" },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay (simulates night city ambiance) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=1920&q=85"
          alt="Luxury rooftop cityscape at night"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxora-bg/70 via-luxora-bg/40 to-luxora-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg/50 via-transparent to-luxora-bg/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-[1px] h-32 bg-gradient-to-b from-transparent via-luxora-gold/30 to-transparent hidden xl:block" />
      <div className="absolute top-1/3 right-10 w-[1px] h-24 bg-gradient-to-b from-transparent via-luxora-gold/20 to-transparent hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-luxora-gold" />
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Rooftop Lounge & Event Venue
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
          >
            <span className="block">Elevate</span>
            <span className="block text-gold-gradient">Your Nights</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-[var(--font-inter)]"
          >
            Where the skyline meets sophistication. Experience curated cocktails,
            live performances, and unforgettable evenings above the city.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#reservation"
              className="relative overflow-hidden group px-8 py-4 bg-luxora-gold text-luxora-bg font-semibold text-sm tracking-[0.15em] uppercase rounded-sm"
            >
              <span className="relative z-10 group-hover:text-luxora-gold transition-colors duration-300">
                Reserve a Table
              </span>
              <span className="absolute inset-0 bg-luxora-bg translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
            <a
              href="#events"
              className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-sm tracking-[0.15em] uppercase rounded-sm hover:border-luxora-gold/50 hover:text-luxora-gold transition-all duration-500"
            >
              <HiOutlinePlay className="text-luxora-gold group-hover:scale-110 transition-transform duration-300" size={16} />
              Explore Events
            </a>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-8"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.15 }}
                className="font-[var(--font-playfair)] text-4xl font-bold text-gold-gradient"
              >
                {stat.value}
              </motion.div>
              <div className="text-white/40 text-xs tracking-[0.2em] uppercase mt-1 font-[var(--font-inter)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-[var(--font-inter)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-luxora-gold/60" size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
