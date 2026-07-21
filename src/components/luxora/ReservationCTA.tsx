"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiCalendar, FiClock, FiUsers, FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface ReservationCTAProps {
  onOpenModal?: () => void;
}

export default function ReservationCTA({ onOpenModal }: ReservationCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal();
    } else {
      setBookingCode("LX-" + Math.floor(100000 + Math.random() * 900000));
      setSubmitted(true);
    }
  };

  return (
    <section id="reservation" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-luxora-bg">
      {/* Background image with subtle dark luxury overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
          alt="Luxury dining ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxora-bg/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg via-luxora-bg/90 to-luxora-bg/70" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Grounded Contact Info & Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Level 42 Table Concierge
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-6 text-white">
              Reserve Your <span className="text-gold-gradient">Evening</span>
            </h2>
            <p className="text-white/60 leading-relaxed font-[var(--font-inter)] mb-8 max-w-lg text-sm">
              Whether curating an intimate dinner for two or hosting a corporate VIP gala, our dedicated concierge team attends to every culinary detail.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 text-white/70 text-sm font-[var(--font-inter)]">
                <div className="w-10 h-10 rounded-full bg-luxora-gold/10 border border-luxora-gold/30 flex items-center justify-center text-luxora-gold">
                  <HiOutlineLocationMarker size={18} />
                </div>
                <div>
                  <span className="text-white/40 text-xs block uppercase">Address:</span>
                  <span className="text-white font-medium">Level 42, Skyline Tower, 450 Grand Avenue</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/70 text-sm font-[var(--font-inter)]">
                <div className="w-10 h-10 rounded-full bg-luxora-gold/10 border border-luxora-gold/30 flex items-center justify-center text-luxora-gold">
                  <FiPhone size={16} />
                </div>
                <div>
                  <span className="text-white/40 text-xs block uppercase">Direct Concierge Phone:</span>
                  <a href="tel:+12125555890" className="text-white hover:text-luxora-gold font-medium">
                    +1 (212) 555-LUXO (5890)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/70 text-sm font-[var(--font-inter)]">
                <div className="w-10 h-10 rounded-full bg-luxora-gold/10 border border-luxora-gold/30 flex items-center justify-center text-luxora-gold">
                  <FiClock size={16} />
                </div>
                <div>
                  <span className="text-white/40 text-xs block uppercase">Opening Hours:</span>
                  <span className="text-white font-medium">Tue – Sun: 5:00 PM – 2:00 AM (Mon Closed)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-luxora-card/90 backdrop-blur-xl border border-luxora-gold/20 rounded-3xl p-8 md:p-10 luxury-shadow">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <FiCheckCircle className="text-luxora-gold mx-auto" size={48} />
                  <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-white">
                    Reservation Received
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-[var(--font-inter)]">
                    Booking Code: <span className="text-luxora-gold font-mono font-bold">{bookingCode}</span>. Our guest concierge will contact you within 30 minutes to confirm your seating zone.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-luxora-gold underline pt-4"
                  >
                    Make Another Booking
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white">
                      Instant Seating Reservation
                    </h3>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-luxora-gold bg-luxora-gold/10 px-2.5 py-1 rounded-full border border-luxora-gold/30">
                      🟢 Live Availability
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-[11px] uppercase tracking-wider font-[var(--font-inter)] mb-1 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Julian Vance"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-[var(--font-inter)] placeholder:text-white/20 focus:border-luxora-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-[11px] uppercase tracking-wider font-[var(--font-inter)] mb-1 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-[var(--font-inter)] placeholder:text-white/20 focus:border-luxora-gold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-white/50 text-[11px] uppercase tracking-wider font-[var(--font-inter)] mb-1 flex items-center gap-1">
                        <FiCalendar className="text-luxora-gold" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white text-xs font-[var(--font-inter)] focus:border-luxora-gold outline-none [color-scheme:dark]"
                      />
                    </div>

                    <div>
                      <label className="text-white/50 text-[11px] uppercase tracking-wider font-[var(--font-inter)] mb-1 flex items-center gap-1">
                        <FiClock className="text-luxora-gold" /> Time
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white text-xs font-[var(--font-inter)] focus:border-luxora-gold outline-none">
                        <option value="17:30">5:30 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="21:30">9:30 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-white/50 text-[11px] uppercase tracking-wider font-[var(--font-inter)] mb-1 flex items-center gap-1">
                        <FiUsers className="text-luxora-gold" /> Guests
                      </label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white text-xs font-[var(--font-inter)] focus:border-luxora-gold outline-none">
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all mt-4"
                  >
                    Confirm Table Reservation →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
