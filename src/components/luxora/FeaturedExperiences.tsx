"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineSparkles, HiOutlineMusicNote, HiOutlineUsers, HiOutlineClock } from "react-icons/hi";

const experiences = [
  {
    icon: HiOutlineSparkles,
    title: "VIP Lounge",
    description:
      "Exclusive access to our sky-high sanctuary. Private terraces, dedicated sommeliers, and a curated atmosphere designed for the discerning few who demand nothing less than extraordinary.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=85",
    accent: "#D4AF37",
    layout: "left" as const,
  },
  {
    icon: HiOutlineUsers,
    title: "Private Events",
    description:
      "Transform your vision into an unforgettable evening. From intimate celebrations of twenty to grand galas for three hundred, our event architects craft every detail to perfection.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=85",
    accent: "#9B1C31",
    layout: "right" as const,
  },
  {
    icon: HiOutlineMusicNote,
    title: "Live Music",
    description:
      "World-class performers under the open sky. Jazz ensembles, acoustic virtuosos, and international DJs transform each evening into a sensory journey that resonates long after the last note.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=85",
    accent: "#D4AF37",
    layout: "full" as const,
  },
  {
    icon: HiOutlineClock,
    title: "Signature Cocktails",
    description:
      "Our master mixologists craft liquid artistry — each cocktail a story of rare spirits, botanical infusions, and theatrical presentation that elevates the craft to an art form.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=85",
    accent: "#9B1C31",
    layout: "split" as const,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FeaturedExperiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" ref={ref} className="py-24 md:py-32 relative">
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              What We Offer
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Featured <span className="text-gold-gradient">Experiences</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-md text-sm leading-relaxed font-[var(--font-inter)]">
            Four pillars of excellence that define the LUXORA experience — each crafted to transcend the ordinary and deliver moments that linger.
          </p>
        </motion.div>
      </div>

      {/* Experience Cards — each with unique layout */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 space-y-16 md:space-y-24">
        {experiences.map((exp, i) => {
          const Icon = exp.icon;

          // Layout: Left image, right text
          if (exp.layout === "left") {
            return (
              <motion.div
                key={exp.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-luxora-gold">
                    <Icon size={20} />
                    <span className="text-xs tracking-[0.2em] uppercase font-[var(--font-inter)]">{exp.title}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-luxora-gold/30 flex items-center justify-center">
                      <Icon className="text-luxora-gold" size={18} />
                    </div>
                    <span className="text-luxora-gold text-xs tracking-[0.25em] uppercase font-[var(--font-inter)]">
                      {exp.title}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold leading-tight">
                    An Oasis Above<br />the Ordinary
                  </h3>
                  <p className="text-white/50 leading-relaxed font-[var(--font-inter)]">
                    {exp.description}
                  </p>
                  <a
                    href="#reservation"
                    className="group inline-flex items-center gap-2 text-luxora-gold text-sm tracking-[0.15em] uppercase font-[var(--font-inter)] mt-2 w-fit"
                  >
                    Learn More
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            );
          }

          // Layout: Right image, left text (reversed)
          if (exp.layout === "right") {
            return (
              <motion.div
                key={exp.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                <div className="flex flex-col gap-5 lg:order-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-luxora-accent/30 flex items-center justify-center">
                      <Icon className="text-luxora-accent" size={18} />
                    </div>
                    <span className="text-luxora-accent text-xs tracking-[0.25em] uppercase font-[var(--font-inter)]">
                      {exp.title}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold leading-tight">
                    Your Vision,<br />Our Canvas
                  </h3>
                  <p className="text-white/50 leading-relaxed font-[var(--font-inter)]">
                    {exp.description}
                  </p>
                  <a
                    href="#reservation"
                    className="group inline-flex items-center gap-2 text-luxora-accent text-sm tracking-[0.15em] uppercase font-[var(--font-inter)] mt-2 w-fit"
                  >
                    Plan Your Event
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
                <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] lg:order-2">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 right-6 flex items-center gap-2 text-luxora-accent">
                    <Icon size={20} />
                    <span className="text-xs tracking-[0.2em] uppercase font-[var(--font-inter)]">{exp.title}</span>
                  </div>
                </div>
              </motion.div>
            );
          }

          // Layout: Full-width cinematic
          if (exp.layout === "full") {
            return (
              <motion.div
                key={exp.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-luxora-bg via-luxora-bg/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full border border-luxora-gold/30 flex items-center justify-center">
                      <Icon className="text-luxora-gold" size={18} />
                    </div>
                    <span className="text-luxora-gold text-xs tracking-[0.25em] uppercase font-[var(--font-inter)]">
                      {exp.title}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold leading-tight mb-4">
                    Sound That Moves<br />the Skyline
                  </h3>
                  <p className="text-white/60 leading-relaxed font-[var(--font-inter)] mb-6">
                    {exp.description}
                  </p>
                  <a
                    href="#events"
                    className="group inline-flex items-center gap-2 text-luxora-gold text-sm tracking-[0.15em] uppercase font-[var(--font-inter)]"
                  >
                    View Schedule
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </motion.div>
            );
          }

          // Layout: Split diagonal style
          return (
            <motion.div
              key={exp.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-5 gap-6 items-center"
            >
              <div className="md:col-span-2 relative group overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg/90 via-luxora-bg/20 to-transparent" />
              </div>
              <div className="md:col-span-3 flex flex-col gap-5 md:pl-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-luxora-accent/30 flex items-center justify-center">
                    <Icon className="text-luxora-accent" size={18} />
                  </div>
                  <span className="text-luxora-accent text-xs tracking-[0.25em] uppercase font-[var(--font-inter)]">
                    {exp.title}
                  </span>
                </div>
                <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold leading-tight">
                  Crafted With<br />Obsession
                </h3>
                <p className="text-white/50 leading-relaxed font-[var(--font-inter)]">
                  {exp.description}
                </p>
                <a
                  href="#cocktails"
                  className="group inline-flex items-center gap-2 text-luxora-accent text-sm tracking-[0.15em] uppercase font-[var(--font-inter)] mt-2 w-fit"
                >
                  Explore Menu
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
