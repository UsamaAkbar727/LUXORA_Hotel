"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const spaces = [
  {
    title: "The Grand Terrace",
    description:
      "A 3,200-square-foot open-air terrace wrapping the building's perimeter, offering unobstructed 360-degree views of the Manhattan skyline. Heated floors extend the season deep into autumn, while retractable glass panels shield against unexpected weather without sacrificing the view.",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=85",
    stats: { size: "3,200 sq ft", capacity: "200 guests", feature: "360° Views" },
  },
  {
    title: "The Velvet Room",
    description:
      "An intimate 800-square-foot private chamber draped in hand-stitched Italian velvet, with bespoke walnut paneling and a fireplace carved from a single block of Calacatta marble. Seating curves organically around low tables, encouraging conversation to flow as freely as the cocktails.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
    stats: { size: "800 sq ft", capacity: "40 guests", feature: "Private Bar" },
  },
  {
    title: "The Observatory",
    description:
      "Perched at the tower's apex, this glass-enclosed jewel seats just twelve. A retractable roof opens to the stars on clear nights, while a dedicated sommelier and private chef curate each course and pairing in real time. This is where LUXORA's most legendary evenings begin.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=85",
    stats: { size: "400 sq ft", capacity: "12 guests", feature: "Retractable Roof" },
  },
];

export default function TheSpace() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-luxora-card/40 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
            Architecture & Design
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            The <span className="text-gold-gradient">Space</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto mt-4 text-sm leading-relaxed font-[var(--font-inter)]">
            Three distinct environments, one unified vision. Each space was designed by a different
            world-class firm, yet every room speaks the same language of understated opulence.
          </p>
        </motion.div>

        {/* Space Cards — vertical cascade with alternating emphasis */}
        <div className="space-y-8 md:space-y-12">
          {spaces.map((space, i) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-white/5 bg-luxora-card transition-all duration-500 hover:border-luxora-gold/15 ${
                  i === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[300px] md:h-[400px] lg:h-auto overflow-hidden ${
                    i === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-luxora-card/40 to-transparent" />

                  {/* Floating stat pills */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {Object.entries(space.stats).map(([key, val]) => (
                      <div
                        key={key}
                        className="glass rounded-full px-3 py-1.5 text-[10px] tracking-[0.12em] uppercase font-[var(--font-inter)]"
                      >
                        <span className="text-luxora-gold">{val}</span>
                        <span className="text-white/40 ml-1">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-8 md:p-10 lg:p-14 flex flex-col justify-center ${
                    i === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[1px] bg-luxora-gold/40" />
                    <span className="text-luxora-gold text-[10px] tracking-[0.3em] uppercase font-[var(--font-inter)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4 group-hover:text-luxora-gold transition-colors duration-500">
                    {space.title}
                  </h3>
                  <p className="text-white/45 leading-relaxed font-[var(--font-inter)] mb-6">
                    {space.description}
                  </p>
                  <a
                    href="#reservation"
                    className="group/link inline-flex items-center gap-2 text-luxora-gold text-xs tracking-[0.15em] uppercase font-[var(--font-inter)] w-fit"
                  >
                    Book This Space
                    <FiArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
