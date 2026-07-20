"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GiCutDiamond } from "react-icons/gi";

const milestones = [
  {
    year: "2018",
    title: "The Vision",
    text: "A shared dream between three hospitality veterans — to create a sanctuary above the skyline where every detail would speak a language of refined indulgence.",
  },
  {
    year: "2019",
    title: "The Ascent",
    text: "Fifty-two floors above Madison Avenue, a raw penthouse skeleton was chosen as the canvas. Architects from Milan and lighting designers from Tokyo began their transformation.",
  },
  {
    year: "2020",
    title: "The Craft",
    text: "While the world paused, LUXORA's team trained, refined, and perfected. Cocktail programs were born, supplier relationships forged, and every service protocol scripted to the second.",
  },
  {
    year: "2021",
    title: "The Unveiling",
    text: "On a crisp October evening, LUXORA opened its doors to 120 hand-selected guests. By midnight, reservations for the next three months had sold out entirely.",
  },
  {
    year: "2024",
    title: "The Standard",
    text: "Named among the world's top 50 bars, featured in Architectural Digest, and the preferred venue for New York's creative elite. The vision is now the standard.",
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-luxora-accent/[0.02] rounded-full blur-[150px]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Top: Image + Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="LUXORA rooftop lounge at twilight with city skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg/60 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-6 glass rounded-2xl p-5 max-w-[220px]"
            >
              <GiCutDiamond className="text-luxora-gold mb-2" size={20} />
              <p className="text-white/80 text-sm font-[var(--font-playfair)] font-semibold leading-snug">
                Among the World&apos;s Top 50 Rooftop Venues
              </p>
              <p className="text-white/40 text-xs font-[var(--font-inter)] mt-1">
                — Architectural Digest, 2024
              </p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Our Story
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-8">
              Born From<br />
              <span className="text-gold-gradient">Obsession</span>
            </h2>
            <div className="space-y-5 text-white/50 font-[var(--font-inter)] leading-relaxed">
              <p>
                LUXORA was never meant to be just another rooftop bar. It was conceived as an answer
                to a question that haunted its founders: why does luxury so often feel hollow? Why do
                gilded surfaces so rarely conceal genuine substance?
              </p>
              <p>
                The answer, they believed, lay in the details no one sees — the 47 iterations of a
                single cocktail recipe, the precisely calibrated warmth of ambient lighting that
                flatters every complexion, the sommelier who remembers not just your preference but
                the conversation that revealed it.
              </p>
              <p>
                Every element of LUXORA — from the hand-finished brass fixtures to the acoustically
                engineered music program — was designed with a singular conviction: true luxury is
                invisible. It&apos;s the feeling that everything, absolutely everything, has been
                considered.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-luxora-gold/0 via-luxora-gold/20 to-luxora-gold/0" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-luxora-gold rounded-full -translate-x-1/2 mt-2 ring-4 ring-luxora-bg z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}>
                  <span className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold-gradient">
                    {milestone.year}
                  </span>
                  <h3 className="font-[var(--font-playfair)] text-xl md:text-2xl font-bold text-white mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-white/45 font-[var(--font-inter)] text-sm leading-relaxed max-w-md inline-block">
                    {milestone.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
