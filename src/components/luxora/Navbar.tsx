"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const navLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Membership", href: "#membership" },
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass-strong py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold tracking-[0.2em] text-gold-gradient">
              LUXORA
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-gradient group-hover:w-full transition-all duration-500" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxora-gold group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-luxora-gold transition-colors duration-300">
                <FiInstagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-luxora-gold transition-colors duration-300">
                <FiFacebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/50 hover:text-luxora-gold transition-colors duration-300">
                <FiTwitter size={16} />
              </a>
            </div>
            <a
              href="#reservation"
              className="relative overflow-hidden px-6 py-2.5 border border-luxora-gold/50 text-luxora-gold text-sm tracking-[0.15em] uppercase rounded-sm group"
            >
              <span className="relative z-10 group-hover:text-luxora-bg transition-colors duration-300">
                Reserve Table
              </span>
              <span className="absolute inset-0 bg-luxora-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/80 hover:text-luxora-gold transition-colors duration-300 p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
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
                className="mt-4 px-10 py-3 border border-luxora-gold text-luxora-gold text-lg tracking-[0.15em] uppercase rounded-sm hover:bg-luxora-gold hover:text-luxora-bg transition-all duration-300"
              >
                Reserve Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
