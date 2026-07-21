"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GiCutDiamond } from "react-icons/gi";

const teamProfiles = [
  {
    name: "Chef Marcus Vance",
    role: "Executive Culinary Director",
    bio: "Former 2-Michelin starred Sous Chef in Paris. Marcus curates LUXORA's French-Asian fusion tapas menu.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
  },
  {
    name: "Elena Rostova",
    role: "Master Mixologist & Beverage Director",
    bio: "Pioneer of botanical fat-washing and rare spirit infusions with 14 years behind Tokyo & London luxury bars.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

const milestones = [
  {
    year: "2020",
    title: "The Architecture",
    text: "Fifty-two floors above the metropolis, raw penthouse space was transformed by Milanese interior designers into a glass-enclosed sanctuary.",
  },
  {
    year: "2022",
    title: "Culinary Unveiling",
    text: "Chef Marcus Vance and Elena Rostova opened LUXORA's doors to 120 inaugural guests. Reservations for the season filled in 48 hours.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    text: "Awarded 'Best Rooftop Lounge & Fine Dining' by International Hospitality Review and featured in Architectural Digest.",
  },
];

export default function OurStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-luxora-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Top: Story & Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-luxora-gold/20 luxury-shadow">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="LUXORA rooftop lounge at twilight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxora-bg/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-6 glass border border-luxora-gold/30 rounded-2xl p-5 max-w-[240px] shadow-2xl"
            >
              <GiCutDiamond className="text-luxora-gold mb-2" size={22} />
              <p className="text-white text-sm font-[var(--font-playfair)] font-bold leading-snug">
                World&apos;s Top 50 Rooftop Establishments
              </p>
              <p className="text-white/50 text-xs font-[var(--font-inter)] mt-1">
                — International Hospitality Review
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Authentic Hospitality
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-3 mb-6 text-white">
              Crafted With <br />
              <span className="text-gold-gradient">Uncompromising Passion</span>
            </h2>
            <div className="space-y-4 text-white/60 font-[var(--font-inter)] text-sm leading-relaxed">
              <p>
                LUXORA was established with a singular vision: to create a sky-high haven where exceptional gastronomy, bespoke mixology, and breathtaking architecture meet seamlessly on Level 42.
              </p>
              <p>
                From hand-blown crystal coupes imported from Murano to rare Japanese whiskies aged in Mizunara oak, every element at LUXORA is curated to ensure your evening is unforgettable.
              </p>
            </div>

            {/* Team Bios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              {teamProfiles.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border border-luxora-gold/40"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-[var(--font-playfair)]">
                      {member.name}
                    </h4>
                    <span className="text-[11px] text-luxora-gold block font-[var(--font-inter)]">
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          {milestones.map((m) => (
            <div key={m.year} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <span className="text-luxora-gold font-mono font-bold text-2xl">{m.year}</span>
              <h3 className="font-[var(--font-playfair)] text-lg font-bold text-white mt-1 mb-2">
                {m.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed font-[var(--font-inter)]">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
