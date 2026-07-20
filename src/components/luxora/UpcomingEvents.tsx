"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const events = [
  {
    date: { day: "24", month: "JUL" },
    title: "Midnight Serenade",
    dj: "DJ Aurelius",
    genre: "Deep House & Soul",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&q=85",
    status: "Selling Fast",
  },
  {
    date: { day: "31", month: "JUL" },
    title: "Golden Hour Sessions",
    dj: "Nina Velours",
    genre: "Nu Disco & Funk",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85",
    status: "Available",
  },
  {
    date: { day: "07", month: "AUG" },
    title: "Eclipse Night",
    dj: "The Midnight Collective",
    genre: "Melodic Techno",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=85",
    status: "Limited",
  },
  {
    date: { day: "14", month: "AUG" },
    title: "Velvet Skyline",
    dj: "Sasha Konstantin",
    genre: "Afro House",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=85",
    status: "Available",
  },
];

export default function UpcomingEvents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="events" ref={ref} className="py-24 md:py-32 bg-luxora-card/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              What&apos;s Next
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Upcoming <span className="text-gold-gradient">Events</span>
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-white/50 text-sm tracking-[0.15em] uppercase font-[var(--font-inter)] hover:text-luxora-gold transition-colors duration-300"
          >
            View All Events
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Horizontal Event Cards */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex-shrink-0 w-[320px] md:w-[360px] overflow-hidden rounded-2xl bg-luxora-card border border-white/5 transition-all duration-500 hover:border-luxora-gold/20"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxora-card via-luxora-card/40 to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 glass rounded-xl px-4 py-3 text-center">
                  <div className="font-[var(--font-playfair)] text-2xl font-bold text-luxora-gold leading-none">
                    {event.date.day}
                  </div>
                  <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase mt-0.5 font-[var(--font-inter)]">
                    {event.date.month}
                  </div>
                </div>

                {/* Status */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-[var(--font-inter)] ${
                    event.status === "Selling Fast"
                      ? "bg-luxora-accent/20 text-luxora-accent border border-luxora-accent/30"
                      : event.status === "Limited"
                      ? "bg-luxora-gold/20 text-luxora-gold border border-luxora-gold/30"
                      : "bg-white/10 text-white/70 border border-white/10"
                  }`}
                >
                  {event.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[var(--font-playfair)] text-xl font-bold mb-2 group-hover:text-luxora-gold transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-white/50 text-sm font-[var(--font-inter)] mb-1">
                  {event.dj}
                </p>
                <p className="text-white/30 text-xs font-[var(--font-inter)] tracking-[0.1em] uppercase mb-5">
                  {event.genre}
                </p>
                <a
                  href="#reservation"
                  className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 border border-luxora-gold/30 text-luxora-gold text-xs tracking-[0.15em] uppercase rounded-sm group/btn font-[var(--font-inter)]"
                >
                  <span className="relative z-10 group-hover/btn:text-luxora-bg transition-colors duration-300">
                    Reserve Spot
                  </span>
                  <FiArrowRight className="relative z-10 text-xs group-hover/btn:text-luxora-bg transition-colors duration-300" />
                  <span className="absolute inset-0 bg-luxora-gold translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                </a>
              </div>

              {/* Hover accent line */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-gold-gradient transition-all duration-500 ${
                  hoveredIndex === i ? "w-full" : "w-0"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
