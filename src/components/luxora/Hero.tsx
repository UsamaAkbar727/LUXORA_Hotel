"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxora_hero_bg.png"
          alt="Luxury rooftop cityscape at night with a hand holding a cocktail"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-luxora-bg" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-normal tracking-[0.05em] leading-[1.2] mb-6 text-gold-gradient"
        >
          ELEVATE YOUR NIGHTS <br className="hidden md:block" /> ABOVE THE CITY
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-xs sm:text-sm md:text-base font-inter font-light max-w-xl md:max-w-2xl leading-relaxed mb-8 tracking-[0.03em]"
        >
          Discover Luxora, the premier rooftop lounge and event venue offering
          panoramic city views, exquisite cocktails, and unparalleled events.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="#explore"
            className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Explore The Lounge
          </a>
          <a
            href="#reservation"
            className="group text-white/90 hover:text-luxora-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-1.5 font-medium mt-1"
          >
            Book An Event <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
