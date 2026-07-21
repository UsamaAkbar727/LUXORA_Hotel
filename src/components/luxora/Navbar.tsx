"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import AmbientPlayer from "@/components/luxora/AmbientPlayer";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#cuisine" },
  { label: "Floor Plan", href: "#venue" },
  { label: "Dress Code", href: "#policies" },
  { label: "Events", href: "#events" },
  { label: "Cocktails", href: "#drinks" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onReserveClick?: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

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
          className={`w-[94%] max-w-6xl mt-3 sm:mt-5 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full border border-luxora-gold/20 glass relative pointer-events-auto transition-all duration-500 luxury-shadow flex items-center justify-between ${
            scrolled ? "bg-luxora-bg/90 py-2 sm:py-2.5 shadow-xl border-luxora-gold/30" : "bg-luxora-bg/60 py-2.5 sm:py-3"
          }`}
        >
          {/* Top golden glowing accent */}
          <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-luxora-gold/90 to-transparent blur-[0.5px]" />

          {/* Logo */}
          <a href="#" className="relative group flex items-center shrink-0">
            <span className="font-[var(--font-playfair)] text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] text-gold-gradient">
              LUXORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-luxora-gold transition-colors duration-300 group font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxora-gold group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>

          {/* Right Controls (Ambient Audio + Reserve CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            <AmbientPlayer />
            <button
              onClick={onReserveClick}
              className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-5 py-2 rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <AmbientPlayer />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/90 hover:text-luxora-gold transition-colors duration-300 p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/5 active:scale-95"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-luxora-bg/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center overflow-y-auto px-6 py-20"
          >
            {/* Top Close Bar inside Menu */}
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full border border-luxora-gold/30 bg-luxora-card/80 text-luxora-gold flex items-center justify-center shadow-lg active:scale-95"
                aria-label="Close navigation"
              >
                <HiX size={22} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-6 my-auto max-w-sm w-full">
              <span className="text-[10px] uppercase tracking-[0.3em] text-luxora-gold/80 font-semibold font-[var(--font-jakarta)] mb-2">
                Level 42 · Skyline Sanctuary
              </span>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="text-2xl sm:text-3xl font-[var(--font-playfair)] tracking-[0.1em] text-white/90 hover:text-luxora-gold transition-colors py-1 font-light"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.button
                onClick={() => {
                  setMobileOpen(false);
                  if (onReserveClick) onReserveClick();
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.04, duration: 0.3 }}
                className="mt-6 w-full py-4 bg-gold-gradient text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-[0.98] transition-all text-center"
              >
                Reserve Table Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
