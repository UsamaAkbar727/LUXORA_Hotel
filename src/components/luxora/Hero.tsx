"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  HiOutlineCalendar,
  HiArrowRight,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { TbStarFilled } from "react-icons/tb";

interface HeroProps {
  onReserveClick?: () => void;
}

/* ── animated number counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const dur = 1800;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setVal(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

/* ── word-by-word text reveal ── */
const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ── headline words ── */
const LINE1 = ["Elevate", "Every"];
const LINE2 = ["Moment"];

export default function Hero({ onReserveClick }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  /* parallax transforms */
  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%",  "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%",  "-8%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-luxora-bg"
    >
      {/* ── FULL-BLEED PARALLAX BACKGROUND ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="/luxora_hero_bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* multi-layer cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-luxora-bg/75 via-luxora-bg/45 to-luxora-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg via-luxora-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(212,175,55,0.07)_0%,transparent_70%)]" />
      </motion.div>

      {/* ── AMBIENT GLOW ORBS ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-luxora-gold/8 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[15%] right-[8%] w-[420px] h-[420px] rounded-full bg-luxora-accent/10 blur-[140px]"
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-28"
      >
        {/* ── TOP BADGE ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          {/* live status pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-luxora-gold/25 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-emerald-400 font-[var(--font-jakarta)]">
              Open Tonight
            </span>
            <span className="text-white/25 text-sm leading-none">|</span>
            <span className="text-[10.5px] uppercase tracking-[0.14em] text-white/55 font-[var(--font-jakarta)]">
              5 PM – 2 AM
            </span>
          </div>

          {/* award badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-luxora-gold/20 bg-luxora-gold/[0.06] px-4 py-1.5 backdrop-blur-sm">
            <TbStarFilled size={12} className="text-luxora-gold" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.15em] text-luxora-gold/90 font-[var(--font-jakarta)]">
              Michelin Recognised 2024
            </span>
          </div>
        </motion.div>

        {/* ── HEADLINE ── */}
        <div className="overflow-hidden perspective-[800px] mb-4">
          <motion.div
            className="flex flex-wrap gap-x-5 gap-y-2"
            variants={wordContainer}
            initial="hidden"
            animate="show"
          >
            {LINE1.map((w) => (
              <motion.span
                key={w}
                variants={wordItem}
                className="block font-[var(--font-serif)] text-[clamp(3.2rem,9vw,8rem)] font-light tracking-tight leading-[0.95] text-white will-change-transform"
              >
                {w}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-x-5 gap-y-2"
            variants={wordContainer}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.18 }}
          >
            {LINE2.map((w) => (
              <motion.span
                key={w}
                variants={wordItem}
                className="block font-[var(--font-serif)] text-[clamp(3.2rem,9vw,8rem)] font-light tracking-tight leading-[0.95] text-gold-gradient italic will-change-transform"
              >
                {w}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ── TAGLINE + DIVIDER ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-4 mb-7"
        >
          <span className="h-px w-10 bg-luxora-gold/50" />
          <p className="text-luxora-gold/80 text-xs uppercase tracking-[0.22em] font-[var(--font-jakarta)] font-medium">
            LUXORA Rooftop &amp; Suites · Level 42
          </p>
        </motion.div>

        {/* ── DESCRIPTION ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="max-w-[520px] text-white/65 text-[1.05rem] font-[var(--font-jakarta)] font-light leading-[1.75] mb-10"
        >
          An elevated sanctuary 42 floors above the metropolis — 180° panoramic views,
          French-Asian fusion tapas by Chef Marcus Vance, and master mixology crafted for
          those who appreciate the extraordinary.
        </motion.p>

        {/* ── CTA BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
        >
          <button
            onClick={onReserveClick}
            className="group relative overflow-hidden bg-gold-gradient text-black font-semibold text-[11px] tracking-[0.22em] uppercase px-9 py-4 rounded-full hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 font-[var(--font-jakarta)]"
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
            <HiOutlineCalendar size={17} />
            <span>Reserve A Table</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={15} />
          </button>

          <a
            href="#cuisine"
            className="group text-white/80 hover:text-luxora-gold text-[11px] tracking-[0.22em] uppercase transition-all duration-300 px-8 py-4 rounded-full border border-white/15 hover:border-luxora-gold/60 font-medium flex items-center justify-center gap-2 backdrop-blur-md bg-white/[0.035] font-[var(--font-jakarta)]"
          >
            <span>Explore Menu</span>
            <HiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
          </a>
        </motion.div>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="flex flex-wrap items-center gap-8 sm:gap-12"
        >
          {/* stat item */}
          {[
            { value: 42, suffix: "", label: "Floors Above City" },
            { value: 180, suffix: "°", label: "Panoramic View" },
            { value: 4, suffix: ".9★", label: "Guest Rating" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-[var(--font-serif)] text-3xl md:text-4xl font-semibold text-luxora-gold leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </span>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.18em] font-[var(--font-jakarta)] mt-1.5">
                {s.label}
              </span>
            </div>
          ))}

          <div className="hidden sm:block h-10 w-px bg-white/10 mx-2" />

          {/* awards strip */}
          <div className="flex items-center gap-2.5">
            {["Condé Nast", "Forbes 5★", "Tatler 100"].map((award) => (
              <span
                key={award}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/45 text-[9.5px] uppercase tracking-[0.14em] font-[var(--font-jakarta)]"
              >
                {award}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── RIGHT-EDGE FLOATING CARD ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-8 xl:right-14 top-1/2 -translate-y-1/2 z-20 hidden lg:block w-[280px]"
      >
        {/* featured image */}
        <div className="relative rounded-2xl overflow-hidden border border-luxora-gold/25 luxury-shadow">
          <img
            src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80"
            alt="LUXORA rooftop dining scene"
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* overlay card */}
          <div className="absolute bottom-5 left-4 right-4 rounded-xl p-4 glass-strong border border-luxora-gold/20">
            <p className="text-luxora-gold text-[9px] uppercase tracking-[0.2em] font-semibold font-[var(--font-jakarta)] mb-1">
              Featured Experience
            </p>
            <h3 className="font-[var(--font-serif)] text-white text-lg leading-snug">
              Sunset Terrace &amp; Fire Pit Cabanas
            </h3>
            <p className="text-white/50 text-[11px] font-[var(--font-jakarta)] mt-1.5 leading-relaxed">
              5:00 – 7:00 PM · Daily · Complimentary valet
            </p>
          </div>
        </div>

        {/* floating mini badges */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 -left-8 rounded-xl border border-luxora-gold/25 glass px-4 py-2.5 flex items-center gap-2.5"
        >
          <span className="text-xl">🥂</span>
          <div>
            <p className="text-white/90 text-xs font-semibold font-[var(--font-jakarta)] leading-tight">Tonight's Special</p>
            <p className="text-white/45 text-[10px] font-[var(--font-jakarta)]">Grand Cru Tasting Menu</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -bottom-5 -left-10 rounded-xl border border-luxora-gold/25 glass px-4 py-2.5 flex items-center gap-2.5"
        >
          <span className="text-xl">⭐</span>
          <div>
            <p className="text-white/90 text-xs font-semibold font-[var(--font-jakarta)] leading-tight">4.9 / 5.0</p>
            <p className="text-white/45 text-[10px] font-[var(--font-jakarta)]">3,200+ Reviews</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[9px] uppercase tracking-[0.22em] font-[var(--font-jakarta)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HiOutlineChevronDown size={18} className="text-luxora-gold/50" />
        </motion.div>
      </motion.div>

      {/* ── BOTTOM THIN GOLD RULE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxora-gold/30 to-transparent z-20" />
    </section>
  );
}
