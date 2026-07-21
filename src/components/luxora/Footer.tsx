"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";

const hours = [
  { day: "Tuesday — Thursday", time: "5:00 PM — 1:00 AM" },
  { day: "Friday — Saturday", time: "5:00 PM — 2:00 AM" },
  { day: "Sunday", time: "5:00 PM — 12:00 AM" },
];

const socials = [
  { icon: FiInstagram, label: "Instagram", href: "#" },
  { icon: FiFacebook, label: "Facebook", href: "#" },
  { icon: FiTwitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="pt-20 pb-8 border-t border-white/5 bg-luxora-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <span className="font-[var(--font-playfair)] text-3xl font-bold tracking-[0.2em] text-gold-gradient">
              LUXORA
            </span>
            <p className="text-white/50 text-xs leading-relaxed mt-4 font-[var(--font-inter)]">
              Where the skyline meets culinary distinction. Level 42 rooftop lounge, fine dining, and private VIP event space.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-luxora-gold/40 hover:text-luxora-gold transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-luxora-gold text-xs tracking-[0.2em] uppercase font-[var(--font-inter)] mb-5">
              Location & Valet
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/60">
                <FiMapPin className="text-luxora-gold flex-shrink-0 mt-1" size={14} />
                <span className="text-xs font-[var(--font-inter)] leading-relaxed">
                  Skyline Tower, Level 42<br />
                  450 Grand Avenue, Downtown
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <FiPhone className="text-luxora-gold flex-shrink-0" size={14} />
                <a href="tel:+12125555890" className="text-xs font-[var(--font-inter)] hover:text-luxora-gold">
                  +1 (212) 555-LUXO (5890)
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <FiMail className="text-luxora-gold flex-shrink-0" size={14} />
                <span className="text-xs font-[var(--font-inter)]">concierge@luxora.com</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-luxora-gold text-xs tracking-[0.2em] uppercase font-[var(--font-inter)] mb-5">
              Opening Hours
            </h4>
            <div className="space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex items-start gap-3">
                  <FiClock className="text-luxora-gold flex-shrink-0 mt-1" size={14} />
                  <div>
                    <div className="text-white/80 text-xs font-[var(--font-inter)]">{h.day}</div>
                    <div className="text-white/40 text-[11px] font-[var(--font-inter)]">{h.time}</div>
                  </div>
                </div>
              ))}
              <div className="text-[11px] text-white/40 pt-1 font-[var(--font-inter)]">
                Sunset Hours: 5:00 PM – 7:00 PM Daily
              </div>
            </div>
          </motion.div>

          {/* Newsletter & Direct Concierge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-luxora-gold text-xs tracking-[0.2em] uppercase font-[var(--font-inter)] mb-5">
              VIP Guest List
            </h4>
            <p className="text-white/50 text-xs font-[var(--font-inter)] mb-4 leading-relaxed">
              Receive private invitations to guest chef tasting dinners & seasonal menu launches.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-xs font-[var(--font-inter)] placeholder:text-white/20 focus:outline-none focus:border-luxora-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-gradient text-black rounded-xl hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all"
                aria-label="Subscribe"
              >
                <FiArrowUpRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 rounded-2xl overflow-hidden border border-white/10 h-[200px] bg-luxora-card relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1826!2d-73.9712!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTgnMTYuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LUXORA Location Map"
          />
        </motion.div>

        {/* Bottom Bar with Developer Source Zip download */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-[var(--font-inter)]">
            &copy; {new Date().getFullYear()} LUXORA Rooftop Lounge & Fine Dining. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="text-white/40 text-xs font-[var(--font-inter)] hover:text-white transition-colors">
              FAQ & Policies
            </a>
            <a href="/api/download" className="text-white/40 text-xs font-[var(--font-inter)] hover:text-luxora-gold flex items-center gap-1 transition-colors">
              <FiDownload size={12} /> Source ZIP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
