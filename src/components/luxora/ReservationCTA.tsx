"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiClock, FiUsers, FiMail, FiPhone } from "react-icons/fi";

export default function ReservationCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reservation" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
          alt="Luxury dining ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxora-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg via-luxora-bg/80 to-luxora-bg/60" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Reserve Your Evening
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-6">
              Your Table <span className="text-gold-gradient">Awaits</span>
            </h2>
            <p className="text-white/50 leading-relaxed font-[var(--font-inter)] mb-10 max-w-lg">
              Whether it&apos;s an intimate dinner for two or a celebration for twenty,
              every reservation at LUXORA is treated as a curated experience.
              Our concierge team will ensure every detail exceeds expectation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/40">
                <FiPhone size={16} className="text-luxora-gold" />
                <span className="text-sm font-[var(--font-inter)]">+1 (212) 555-LUXO</span>
              </div>
              <div className="flex items-center gap-4 text-white/40">
                <FiMail size={16} className="text-luxora-gold" />
                <span className="text-sm font-[var(--font-inter)]">reservations@luxora.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-luxora-card/80 backdrop-blur-xl border border-luxora-gold/10 rounded-3xl p-8 md:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Alexander"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] placeholder:text-white/20 focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Voss"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] placeholder:text-white/20 focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="alexander@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] placeholder:text-white/20 focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 flex items-center gap-2">
                      <FiCalendar size={12} className="text-luxora-gold" />
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300 [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 flex items-center gap-2">
                      <FiClock size={12} className="text-luxora-gold" />
                      Time
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300 appearance-none">
                      <option value="">Select time</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 flex items-center gap-2">
                    <FiUsers size={12} className="text-luxora-gold" />
                    Guests
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300 appearance-none">
                    <option value="">Number of guests</option>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-white/40 text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] mb-2 block">
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Anniversary celebration, dietary requirements, seating preference..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-[var(--font-inter)] placeholder:text-white/20 focus:outline-none focus:border-luxora-gold/40 transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gold-gradient text-luxora-bg font-semibold text-sm tracking-[0.15em] uppercase rounded-xl overflow-hidden"
                >
                  <span className="relative z-10">Confirm Reservation</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
