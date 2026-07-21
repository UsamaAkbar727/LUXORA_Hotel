"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCheckCircle, HiOutlineCalendar, HiOutlineClock, HiOutlineUsers, HiOutlineSparkles, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const seatingZones = [
  {
    id: "skyline",
    name: "Skyline Frontline",
    desc: "Unobstructed edge seating with 180° panoramic city views",
    minSpend: "$150 / person",
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&q=80",
  },
  {
    id: "vip-booth",
    name: "VIP Leather Booth",
    desc: "Plush private booth dining with dedicated mixologist service",
    minSpend: "$200 / person",
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
  },
  {
    id: "sunset-deck",
    name: "Sunset Terrace",
    desc: "Open-air wooden deck perfect for sunset cocktails & appetizers",
    minSpend: "$100 / person",
    badge: "Sunset View",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&q=80",
  },
  {
    id: "chefs-counter",
    name: "Chef's Counter",
    desc: "Front-row seats to Chef Marcus Vance's open kitchen culinary magic",
    minSpend: "$250 / person",
    badge: "Gastronomic",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80",
  },
];

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [selectedZone, setSelectedZone] = useState("skyline");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = "LX-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-luxora-card border border-luxora-gold/20 rounded-3xl p-6 md:p-10 luxury-shadow z-10 my-8 overflow-hidden"
        >
          {/* Top Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-luxora-gold to-transparent" />

          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Close modal"
          >
            <HiX size={20} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-luxora-gold text-xs tracking-[0.25em] uppercase font-[var(--font-inter)]">
              Direct Concierge Booking
            </span>
            <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold mt-1 text-white">
              Reserve Your <span className="text-gold-gradient">LUXORA Experience</span>
            </h2>
          </div>

          {/* Step Indicator */}
          {step < 3 && (
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs font-[var(--font-inter)]">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step === 1 ? "bg-luxora-gold text-black" : "bg-white/10 text-white/60"}`}>
                  1
                </span>
                <span className={step === 1 ? "text-luxora-gold font-medium" : "text-white/40"}>
                  Select Seating Area
                </span>
              </div>
              <div className="w-12 h-[1px] bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step === 2 ? "bg-luxora-gold text-black" : "bg-white/10 text-white/60"}`}>
                  2
                </span>
                <span className={step === 2 ? "text-luxora-gold font-medium" : "text-white/40"}>
                  Guest Details & Time
                </span>
              </div>
            </div>
          )}

          {/* STEP 1: Seating Zone Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-white/60 text-sm font-[var(--font-inter)]">
                Choose your preferred atmosphere for the evening:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seatingZones.map((zone) => (
                  <div
                    key={zone.id}
                    onClick={() => setSelectedZone(zone.id)}
                    className={`relative rounded-2xl overflow-hidden border p-4 cursor-pointer transition-all duration-300 ${
                      selectedZone === zone.id
                        ? "border-luxora-gold bg-luxora-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="h-28 -mx-4 -mt-4 mb-3 overflow-hidden relative">
                      <img src={zone.image} alt={zone.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <span className="absolute top-2 right-2 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-black/60 text-luxora-gold border border-luxora-gold/30">
                        {zone.badge}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <h4 className="font-[var(--font-playfair)] text-lg font-bold text-white">
                        {zone.name}
                      </h4>
                      {selectedZone === zone.id && (
                        <HiCheckCircle className="text-luxora-gold" size={20} />
                      )}
                    </div>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">
                      {zone.desc}
                    </p>
                    <div className="mt-3 text-xs font-medium text-luxora-gold">
                      Min. Spend: {zone.minSpend}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-8 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                >
                  Continue to Reservation Details →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Reservation Details Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-between text-xs font-[var(--font-inter)]">
                <div>
                  <span className="text-white/40 block">Selected Seating:</span>
                  <span className="text-luxora-gold font-semibold text-sm">
                    {seatingZones.find((z) => z.id === selectedZone)?.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-white/60 hover:text-white underline text-xs"
                >
                  Change Zone
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-[var(--font-inter)]">
                    <HiOutlineCalendar className="text-luxora-gold" /> Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-[var(--font-inter)]">
                    <HiOutlineClock className="text-luxora-gold" /> Preferred Time *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none"
                  >
                    <option value="17:30">5:30 PM (Sunset Hour)</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:30">7:30 PM (Prime Dinner)</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:30">9:30 PM (Late Cocktail)</option>
                    <option value="22:30">10:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-[var(--font-inter)]">
                    <HiOutlineUsers className="text-luxora-gold" /> Party Size *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value={15}>15+ Guests (VIP Gala)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 font-[var(--font-inter)]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Thorne"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 font-[var(--font-inter)]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 font-[var(--font-inter)]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/60 text-xs uppercase tracking-wider block mb-2 font-[var(--font-inter)]">
                  Special Occasion or Dietary Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="Anniversary, birthday, allergy notifications, champagne on arrival..."
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-luxora-gold outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-white/60 hover:text-white text-xs uppercase tracking-wider"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-10 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
                >
                  Confirm & Lock Reservation
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Booking Confirmation Dialog */}
          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-luxora-gold/20 border border-luxora-gold flex items-center justify-center mx-auto text-luxora-gold">
                <HiCheckCircle size={36} />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-luxora-gold font-semibold font-[var(--font-inter)]">
                  Reservation Confirmed
                </span>
                <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-white mt-1">
                  We Await Your Arrival, {name || "Esteemed Guest"}
                </h3>
                <p className="text-white/60 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Your table reservation has been logged with our VIP Concierge team. A confirmation message has been dispatched to <span className="text-white font-medium">{email}</span>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white/5 rounded-2xl p-6 border border-luxora-gold/20 max-w-lg mx-auto text-left space-y-3 text-sm font-[var(--font-inter)]">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/40 text-xs uppercase">Booking Reference</span>
                  <span className="text-luxora-gold font-mono font-bold tracking-widest text-base">
                    {bookingRef}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 block">Seating Zone:</span>
                    <span className="text-white font-medium">
                      {seatingZones.find((z) => z.id === selectedZone)?.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Party Size:</span>
                    <span className="text-white font-medium">{guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Date & Time:</span>
                    <span className="text-white font-medium">{date || "Tonight"} at {time}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Venue Location:</span>
                    <span className="text-white font-medium">Level 42, Skyline Tower</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+12125555890"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-luxora-gold px-6 py-3 rounded-full border border-white/10 hover:border-luxora-gold transition-all"
                >
                  <HiOutlinePhone size={16} /> Direct Concierge Line
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                >
                  Return to Experience
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
