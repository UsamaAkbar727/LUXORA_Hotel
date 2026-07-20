"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Venue", href: "#venue" },
  { label: "Events", href: "#events" },
  { label: "Cuisine", href: "#cuisine" },
  { label: "Drinks", href: "#drinks" },
  { label: "Book Now", href: "#reservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 pointer-events-none"
      >
        <div
          className={`w-[92%] max-w-6xl mt-6 px-6 md:px-8 py-3 rounded-full border border-luxora-gold/20 glass relative pointer-events-auto transition-all duration-500 luxury-shadow flex items-center justify-between ${
            scrolled ? "bg-luxora-bg/85 py-2 shadow-lg border-luxora-gold/30" : "bg-luxora-bg/40 py-3"
          }`}
        >
          {/* Top golden glowing line/accent at the center of the navbar */}
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-luxora-gold/90 to-transparent blur-[0.5px]" />
          <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-36 h-6 bg-luxora-gold/10 blur-md rounded-full pointer-events-none" />

          {/* Logo */}
          <a href="#" className="relative group flex items-center">
            <span className="font-[var(--font-playfair)] text-xl md:text-2xl font-bold tracking-[0.2em] text-gold-gradient">
              LUXORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs tracking-[0.15em] uppercase text-white/80 hover:text-luxora-gold transition-colors duration-300 group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxora-gold group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#reservation"
              className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-6 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Reserve Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/80 hover:text-luxora-gold transition-colors duration-300 p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-luxora-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-3xl font-[var(--font-playfair)] tracking-[0.1em] text-white/80 hover:text-luxora-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reservation"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-4 px-10 py-3 bg-gold-gradient text-black font-semibold text-lg tracking-[0.15em] uppercase rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300"
              >
                Reserve Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
