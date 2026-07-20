"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const press = [
  {
    publication: "Architectural Digest",
    title: "The 50 Most Beautiful Rooftop Spaces in the World",
    excerpt:
      "LUXORA's Grand Terrace redefines what a rooftop venue can be — part sanctuary, part spectacle, entirely unforgettable.",
    year: "2024",
    accent: "#D4AF37",
  },
  {
    publication: "The New York Times",
    title: "Where New York's Power Players Unwind After Dark",
    excerpt:
      "In a city that never sleeps, LUXORA offers the rarest commodity: a place where the noise fades and the sky takes over.",
    year: "2024",
    accent: "#9B1C31",
  },
  {
    publication: "Robb Report",
    title: "The World's Best New Private Event Venues",
    excerpt:
      "The Observatory at LUXORA is, without exaggeration, the most exclusive twelve seats in Manhattan.",
    year: "2023",
    accent: "#D4AF37",
  },
  {
    publication: "Condé Nast Traveler",
    title: "Gold Standard: Why LUXORA's Membership Is the Season's Must-Have",
    excerpt:
      "At $499 a year, the Gold Membership might be the best value in luxury hospitality — if you can secure one.",
    year: "2023",
    accent: "#9B1C31",
  },
];

const awards = [
  { title: "World's Top 50 Rooftop Bars", org: "Luxury Travel Magazine", year: "2024" },
  { title: "Best Cocktail Program, Northeast", org: "Tales of the Cocktail", year: "2024" },
  { title: "Outstanding Private Event Venue", org: "BizBash Awards", year: "2023" },
  { title: "Best New Venue", org: "Caterer Magazine", year: "2022" },
  { title: "Excellence in Hospitality Design", org: "AHEAD Awards", year: "2022" },
];

export default function PressAwards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-luxora-gold/[0.015] rounded-full blur-[150px]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
            Recognition
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            Press & <span className="text-gold-gradient">Awards</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Press Features — Left 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {press.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-6 md:p-8 rounded-2xl bg-luxora-card border border-white/5 hover:border-luxora-gold/15 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <span
                      className="font-[var(--font-playfair)] text-4xl font-bold opacity-20"
                      style={{ color: item.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-luxora-gold text-xs tracking-[0.2em] uppercase font-[var(--font-inter)]">
                        {item.publication}
                      </span>
                      <span className="text-white/20 text-xs font-[var(--font-inter)]">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-playfair)] text-lg md:text-xl font-bold mb-2 group-hover:text-luxora-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm font-[var(--font-inter)] leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex-shrink-0 self-start text-white/20 hover:text-luxora-gold transition-colors duration-300"
                    aria-label={`Read ${item.publication} article`}
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }}
                />
              </motion.div>
            ))}
          </div>

          {/* Awards — Right 2 cols */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Gradient border wrapper */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-luxora-gold/20 via-transparent to-luxora-gold/10 rounded-3xl" />
              <div className="relative bg-luxora-card rounded-3xl p-8 md:p-10 border border-luxora-gold/10">
                <div className="flex items-center gap-3 mb-8">
                  <HiOutlineSparkles className="text-luxora-gold" size={20} />
                  <span className="text-luxora-gold text-xs tracking-[0.2em] uppercase font-[var(--font-inter)]">
                    Awards
                  </span>
                </div>

                <div className="space-y-6">
                  {awards.map((award, i) => (
                    <motion.div
                      key={award.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                      className="group/award"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full border border-luxora-gold/20 flex items-center justify-center flex-shrink-0 group-hover/award:border-luxora-gold/50 transition-colors duration-300">
                          <span className="text-luxora-gold text-xs font-bold font-[var(--font-inter)]">
                            {award.year.slice(-2)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white/80 text-sm font-semibold font-[var(--font-inter)] group-hover/award:text-luxora-gold transition-colors duration-300">
                            {award.title}
                          </h4>
                          <p className="text-white/30 text-xs font-[var(--font-inter)] mt-0.5">
                            {award.org}
                          </p>
                        </div>
                      </div>
                      {i < awards.length - 1 && (
                        <div className="ml-12 mt-5 h-[1px] bg-white/5" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
