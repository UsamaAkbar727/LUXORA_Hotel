"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { HiArrowRight, HiOutlineChevronDown } from "react-icons/hi";

interface HeroProps {
  onReserveClick?: () => void;
}

/* ── smooth number counter ── */
function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const dur = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
      setVal(Number((eased * to).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, decimals]);
  return (
    <>
      {val}
      {suffix}
    </>
  );
}

/* ── horizontal marquee for trust strip ── */
function MarqueeLine({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden select-none">
      <motion.div
        className="flex shrink-0 items-center gap-12"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/* ── subtle mouse-follow parallax for hero image ── */
function useMouseParallax(strength = 0.015) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 30 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [x, y, strength]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return { x: smoothX, y: smoothY };
}

/* ── Rotating headline words ── */
const WORDS = ["Moment", "Evening", "Memory", "Journey"];

/* ── stagger config ── */
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const letterReveal = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── trust logos / accolades ── */
const ACCOLADES = [
  "Condé Nast Traveler",
  "Forbes Travel Guide ★★★★★",
  "Michelin Guide 2024",
  "Tatler Best 100",
  "World Luxury Hotel Awards",
  "Asia's 50 Best Bars",
  "Robb Report",
  "Wine Spectator Grand Award",
];

export default function Hero({ onReserveClick }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.7, 1]);

  const { x: mouseX, y: mouseY } = useMouseParallax(0.012);

  /* cycling word state */
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((p) => (p + 1) % WORDS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  /* animated time display */
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const iv = setInterval(tick, 30000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-luxora-bg hero-grain"
    >
      {/* ═══════════ BACKGROUND IMAGE WITH PARALLAX ═══════════ */}
      <motion.div
        style={{ y: bgY, scale: bgScale, x: mouseX, yCorrection: mouseY }}
        className="absolute inset-[-4%] z-0 will-change-transform"
      >
        <img
          src="/luxora_hero_bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ═══════════ CINEMATIC GRADIENT OVERLAYS ═══════════ */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1]"
      >
        {/* deep bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-luxora-bg" />
        {/* left content readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
        {/* subtle warm gold ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_45%,rgba(212,175,55,0.04)_0%,transparent_65%)]" />
      </motion.div>

      {/* ═══════════ AMBIENT GLOW PARTICLES ═══════════ */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-[600px] h-[600px] rounded-full bg-luxora-gold/5 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-luxora-accent/6 blur-[170px]"
        />
      </div>

      {/* ═══════════ MAIN HERO CONTENT ═══════════ */}
      <motion.div
        style={{ y: contentY, opacity: opacityFade }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-32"
      >
        {/* ── EYEBROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-px w-14 bg-gradient-to-r from-luxora-gold/70 to-transparent" />
          <span className="text-luxora-gold/90 text-[11px] uppercase tracking-[0.35em] font-[var(--font-jakarta)] font-medium">
            Level 42 · Rooftop Sanctuary
          </span>
        </motion.div>

        {/* ── HEADLINE ── */}
        <div className="mb-6 sm:mb-8" style={{ perspective: "1200px" }}>
          {/* Line 1: "Elevate Every" */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-x-[0.28em]"
          >
            {["Elevate", "Every"].map((word) => (
              <motion.span
                key={word}
                variants={letterReveal}
                className="block font-[var(--font-serif)] text-[clamp(2.3rem,7.5vw,7.5rem)] font-light tracking-[-0.02em] leading-[1.05] text-white will-change-transform"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Line 2: Cycling word with gold shimmer */}
          <div className="h-[1.15em] sm:h-[1.05em] relative overflow-hidden mt-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[wordIdx]}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block font-[var(--font-serif)] text-[clamp(2.3rem,7.5vw,7.5rem)] font-light italic tracking-[-0.02em] leading-[1] text-gold-gradient will-change-transform"
              >
                {WORDS[wordIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* ── DESCRIPTION ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-[540px] text-white/75 text-sm sm:text-[1.05rem] font-[var(--font-jakarta)] font-light leading-[1.75] sm:leading-[1.85] mb-8 sm:mb-14 tracking-[0.01em]"
        >
          An elevated sanctuary above the metropolis — 180° panoramic views,
          Michelin-starred French-Asian fusion, and bespoke cocktails crafted
          for those who appreciate the extraordinary.
        </motion.p>

        {/* ── CTA ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3.5 sm:gap-4 mb-12 sm:mb-20 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={onReserveClick}
            className="group relative overflow-hidden bg-luxora-gold text-luxora-bg font-semibold text-[11px] tracking-[0.25em] uppercase px-8 sm:pl-10 sm:pr-7 py-[16px] sm:py-[18px] rounded-none hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-4 font-[var(--font-jakarta)] cursor-pointer"
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[800ms] ease-in-out" />
            <span className="relative z-10">Reserve Your Table</span>
            <span className="relative z-10 w-8 h-px bg-luxora-bg/40 group-hover:w-12 transition-all duration-500 hidden sm:inline-block" />
            <HiArrowRight
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              size={14}
            />
          </button>

          {/* Secondary CTA */}
          <a
            href="#story"
            className="group text-white/80 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-all duration-500 px-8 sm:px-10 py-[16px] sm:py-[18px] rounded-none border border-white/[0.18] hover:border-white/40 font-medium flex items-center justify-center gap-3 font-[var(--font-jakarta)] backdrop-blur-sm bg-white/[0.04] active:scale-[0.98]"
          >
            <span>Discover Story</span>
            <HiArrowRight
              className="opacity-70 sm:opacity-0 -translate-x-1 sm:-translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
              size={13}
            />
          </a>
        </motion.div>

        {/* ── METRICS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-wrap items-end gap-8 sm:gap-20"
        >
          {[
            { value: 42, suffix: "", label: "Floors Above" },
            { value: 180, suffix: "°", label: "Panoramic View" },
            { value: 4.9, suffix: "", decimals: 1, label: "Guest Rating" },
          ].map((s, i) => (
            <div key={i} className="group">
              <span className="font-[var(--font-serif)] text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] font-light text-white leading-none tracking-tight block">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </span>
              <span className="text-white/50 text-[10px] uppercase tracking-[0.25em] font-[var(--font-jakarta)] mt-1.5 sm:mt-2 block">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ═══════════ RIGHT-SIDE FLOATING EXPERIENCE CARD ═══════════ */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 xl:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block w-[280px] xl:w-[300px]"
      >
        <div className="relative group">
          {/* Image card */}
          <div className="relative rounded-[2px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80"
              alt="LUXORA rooftop dining"
              className="w-full aspect-[3/4] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="h-px w-8 bg-luxora-gold/60 mb-4" />
              <p className="text-luxora-gold/80 text-[9px] uppercase tracking-[0.3em] font-[var(--font-jakarta)] font-semibold mb-2">
                Tonight&apos;s Experience
              </p>
              <h3 className="font-[var(--font-serif)] text-white text-xl leading-[1.25] font-light">
                Sunset Terrace
                <br />
                <span className="text-white/70">&amp; Fire Pit Cabanas</span>
              </h3>
              <p className="text-white/50 text-[11px] font-[var(--font-jakarta)] mt-3 leading-relaxed tracking-wide">
                5:00 – 7:00 PM · Daily
              </p>
            </div>
          </div>

          {/* subtle gold line accent */}
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-luxora-gold/40 via-luxora-gold/10 to-transparent" />
        </div>

        {/* Floating glass badges */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-4 xl:-left-12 rounded-[2px] border border-white/[0.12] bg-black/80 backdrop-blur-xl px-4 py-2.5 flex items-center gap-3 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full bg-luxora-gold/10 flex items-center justify-center">
            <span className="text-luxora-gold text-sm">★</span>
          </div>
          <div>
            <p className="text-white/90 text-[11px] font-medium font-[var(--font-jakarta)] leading-tight tracking-wide">
              Michelin Guide
            </p>
            <p className="text-white/50 text-[10px] font-[var(--font-jakarta)]">
              2024 Selection
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-6 -left-6 xl:-left-14 rounded-[2px] border border-white/[0.12] bg-black/80 backdrop-blur-xl px-4 py-2.5 flex items-center gap-3 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-white/90 text-[11px] font-bold font-[var(--font-jakarta)]">
              4.9
            </span>
          </div>
          <div>
            <p className="text-white/90 text-[11px] font-medium font-[var(--font-jakarta)] leading-tight tracking-wide">
              Guest Excellence
            </p>
            <p className="text-white/50 text-[10px] font-[var(--font-jakarta)]">
              3,200+ Reviews
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════════ TRUST MARQUEE STRIP ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="relative z-20 border-t border-white/[0.06] py-5 overflow-hidden"
      >
        <MarqueeLine>
          {ACCOLADES.map((name) => (
            <span
              key={name}
              className="text-white/20 text-[10px] uppercase tracking-[0.25em] font-[var(--font-jakarta)] whitespace-nowrap flex items-center gap-4"
            >
              <span className="w-1 h-1 rounded-full bg-luxora-gold/30" />
              {name}
            </span>
          ))}
        </MarqueeLine>
      </motion.div>

      {/* ═══════════ SCROLL INDICATOR ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-white/25 to-transparent overflow-hidden"
        >
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-luxora-gold/60 to-transparent"
          />
        </motion.div>
        <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-[var(--font-jakarta)]">
          Scroll
        </span>
      </motion.div>

      {/* ═══════════ BOTTOM GOLD ACCENT LINE ═══════════ */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxora-gold/20 to-transparent z-20" />
    </section>
  );
}
