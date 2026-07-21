"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Award,
  Utensils,
  Wine,
  Building2,
  Users,
  ChevronRight,
  Quote,
  Crown,
  Star,
  ArrowRight,
  ShieldCheck,
  Compass
} from "lucide-react";

const teamProfiles = [
  {
    id: "marcus",
    name: "Chef Marcus Vance",
    role: "Executive Culinary Director",
    credentials: "Former 2-Michelin Star Sous Chef • Paris & Lyon",
    quote: "Gastronomy is not merely cooking; it is the architecture of emotion built from the world's rarest ingredients.",
    bio: "With over 18 years mastering haute cuisine in Paris and Tokyo, Marcus brings a revolutionary French-Asian fusion philosophy to Level 42. Every dish is a canvas of precision and seasonality.",
    signatureDish: "Hokkaido Scallop Tartare with Imperial Caviar & Yuzu Foam",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Master Mixologist & Beverage Director",
    credentials: "Pioneer of Botanical Fat-Washing • Tokyo & London",
    quote: "A truly great cocktail tells a story across five senses—from the weight of hand-blown crystal to the finish of rare botanicals.",
    bio: "Renowned across Tokyo and London's elite cocktail lounges, Elena curates LUXORA's legendary beverage program, featuring rare spirits aged in Mizunara oak and bespoke crystal ice carving.",
    signatureDish: "Smoked Cardamom & 30-Year Mizunara Oak Old Fashioned",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85",
  },
];

const craftPillars = [
  {
    id: "culinary",
    title: "Culinary Artistry",
    subtitle: "Michelin-Grade Heritage",
    icon: Utensils,
    tag: "Haute Cuisine",
    description: "Our culinary ethos balances French technique with vibrant East-Asian flavor profiles. We source A5 Japanese Wagyu from Miyazaki, wild white truffles from Alba, and daily fresh catch flown directly from Tokyo's Toyosu Market.",
    highlights: ["A5 Miyazaki Wagyu & Fresh Caviar", "Daily Toyosu Market Air Freight", "Hand-blown Murano Glassware"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=85",
  },
  {
    id: "mixology",
    title: "Botanical Alchemy",
    subtitle: "Liquid Perfection",
    icon: Wine,
    tag: "Rare Spirits",
    description: "Our cocktail laboratory utilizes botanical fat-washing, rotary evaporation, and custom oak maturation. Featuring over 120 rare whiskies and small-batch agave spirits served over hand-carved diamond ice spheres.",
    highlights: ["Custom Mizunara Oak Maturation", "Botanical Fat-Washing Laboratory", "Hand-carved Diamond Ice Spheres"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=85",
  },
  {
    id: "architecture",
    title: "Penthouse Sanctuary",
    subtitle: "52 Floors Above Metropolis",
    icon: Building2,
    tag: "Milanese Design",
    description: "Designed by Milan’s premier interior architects, LUXORA combines obsidian stone, brushed 24k brass accents, and acoustic glass panels that frame uninterrupted panoramic skylines from floor to ceiling.",
    highlights: ["Floor-to-Ceiling Acoustic Glass", "Brushed 24k Brass & Obsidian Stone", "Private Heated Sky Terraces"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=85",
  },
  {
    id: "service",
    title: "Unrivaled Hospitality",
    subtitle: "Bespoke VIP Concierge",
    icon: Compass,
    tag: "Personalized Service",
    description: "From private sommeliers guiding rare vintage pairings to personalized table hosts anticipating every desire, our service staff is trained at top European luxury hospitality academies.",
    highlights: ["Dedicated Private Sommeliers", "Discreet High-Profile Guest Security", "Personalized Dining Hosts"],
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=85",
  },
];

const milestones = [
  {
    year: "2020",
    period: "Phase I",
    title: "Architectural Inception",
    text: "Fifty-two floors above the metropolis, raw penthouse space was transformed by Milanese interior architects into a glass-encased sky sanctuary.",
    accent: "from-amber-500/20 to-luxora-gold/10"
  },
  {
    year: "2022",
    period: "Phase II",
    title: "The Inaugural Debut",
    text: "Chef Marcus Vance and Elena Rostova unveiled LUXORA to 120 inaugural patrons. Opening season reservations filled completely within 48 hours.",
    accent: "from-luxora-gold/20 to-luxora-card"
  },
  {
    year: "2024",
    period: "Phase III",
    title: "Global Recognition",
    text: "Awarded 'World’s Top 50 Rooftop Establishments' by International Hospitality Review and featured in Architectural Digest and Vogue International.",
    accent: "from-purple-900/20 to-luxora-card"
  },
  {
    year: "2026",
    period: "Phase IV",
    title: "The Next Horizon",
    text: "Expansion of our private 500-bottle vintage wine cellar and inauguration of the ultra-exclusive Chef’s Table Private Suite on Level 42.",
    accent: "from-amber-600/20 to-luxora-gold/20"
  }
];

export default function OurStory() {
  const [activePillar, setActivePillar] = useState<string>("culinary");
  const [selectedCraftsman, setSelectedCraftsman] = useState<string>("marcus");

  const currentPillar = craftPillars.find((p) => p.id === activePillar) || craftPillars[0];
  const currentCraftsman = teamProfiles.find((t) => t.id === selectedCraftsman) || teamProfiles[0];

  return (
    <section id="story" className="py-24 md:py-36 bg-luxora-bg relative overflow-hidden">
      {/* Subtle Background Glow Spheres */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-luxora-gold/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-luxora-accent/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* HEADER SECTION: Iconic Brand Emblem & Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxora-gold/10 border border-luxora-gold/25 text-luxora-gold mb-6"
          >
            <Crown className="w-3.5 h-3.5 text-luxora-gold" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold font-[var(--font-inter)]">
              Heritage • Architecture • Gastronomy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-[var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Crafted With <br />
            <span className="text-gold-gradient">Uncompromising Passion</span>
          </motion.h2>

          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-luxora-gold to-transparent mx-auto my-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg font-[var(--font-inter)] leading-relaxed max-w-2xl mx-auto"
          >
            LUXORA was established with a singular vision: to create an unassailable sanctuary where haute gastronomy, rare mixology, and high architecture converge on Level 42.
          </motion.p>
        </div>

        {/* ACCLAIM & STATS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24"
        >
          {[
            { stat: "52", label: "Floors Above Metropolis", icon: Building2 },
            { stat: "2", label: "Michelin Star Heritage", icon: Award },
            { stat: "120+", label: "Rare Vintage Spirits", icon: Wine },
            { stat: "TOP 50", label: "Global Rooftop Venue", icon: Crown },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-strong border border-luxora-gold/20 p-6 md:p-8 text-center hover:border-luxora-gold/40 transition-all duration-300 luxury-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-luxora-gold/10 border border-luxora-gold/20 flex items-center justify-center text-luxora-gold mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-gold-gradient mb-1">
                  {item.stat}
                </div>
                <div className="text-white/60 text-xs tracking-wider uppercase font-[var(--font-inter)] font-medium">
                  {item.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* SECTION 2: THE 4 PILLARS OF LUXORA CRAFT */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-semibold block mb-2 font-[var(--font-inter)]">
              Four Pillars of Excellence
            </span>
            <h3 className="font-[var(--font-playfair)] text-2xl md:text-4xl font-bold text-white">
              The Essence of Our Craft
            </h3>
          </div>

          {/* Pillar Navigation Tabs */}
          <div className="flex items-center sm:justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide pb-3 pt-1 mb-8 sm:mb-10 -mx-6 px-6 sm:mx-0 sm:px-0">
            {craftPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase font-[var(--font-inter)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap active:scale-95 cursor-pointer ${isActive
                      ? "bg-gold-gradient text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-luxora-gold/30"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-luxora-gold"}`} />
                  {pillar.title}
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl glass-strong border border-luxora-gold/25 overflow-hidden luxury-shadow grid lg:grid-cols-12 gap-0"
            >
              {/* Image Side */}
              <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[350px] lg:min-h-[480px]">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-luxora-bg via-luxora-bg/30 to-transparent" />

                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest bg-luxora-bg/85 border border-luxora-gold/40 text-luxora-gold backdrop-blur-md">
                    {currentPillar.tag}
                  </span>
                </div>
              </div>

              {/* Detail Content Side */}
              <div className="lg:col-span-6 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-luxora-gold/90 text-xs uppercase tracking-[0.25em] font-semibold block mb-2 font-[var(--font-inter)]">
                    {currentPillar.subtitle}
                  </span>
                  <h4 className="font-[var(--font-playfair)] text-2xl md:text-4xl font-bold text-white mb-4">
                    {currentPillar.title}
                  </h4>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-[var(--font-inter)]">
                    {currentPillar.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <span className="text-xs font-semibold text-luxora-gold uppercase tracking-wider block mb-1">
                    Key Hallmarks
                  </span>
                  {currentPillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-white/90 font-[var(--font-inter)]">
                      <ShieldCheck className="w-4 h-4 text-luxora-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SECTION 3: MASTER CRAFTSMEN SPOTLIGHT */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-semibold block mb-2 font-[var(--font-inter)]">
              Curators of Taste
            </span>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
              Meet Our Visionaries
            </h3>
            <p className="text-white/60 text-xs md:text-sm mt-2">
              Driven by relentless passion, our culinary and beverage directors transform rare global ingredients into works of art.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamProfiles.map((member) => {
              const isSelected = selectedCraftsman === member.id;
              return (
                <div
                  key={member.id}
                  onClick={() => setSelectedCraftsman(member.id)}
                  className={`rounded-3xl glass-strong border transition-all duration-500 p-8 md:p-10 cursor-pointer luxury-shadow flex flex-col justify-between ${isSelected
                      ? "border-luxora-gold/50 bg-luxora-card/90"
                      : "border-white/10 hover:border-luxora-gold/30 hover:bg-white/5"
                    }`}
                >
                  <div>
                    {/* Profile Header */}
                    <div className="flex items-center gap-5 mb-6">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-luxora-gold/40 shadow-xl"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow">
                          <Star className="w-3.5 h-3.5 fill-black" />
                        </div>
                      </div>

                      <div>
                        <span className="text-luxora-gold text-[11px] font-semibold tracking-wider uppercase block font-[var(--font-inter)]">
                          {member.role}
                        </span>
                        <h4 className="font-[var(--font-playfair)] text-2xl font-bold text-white mt-0.5 mb-1">
                          {member.name}
                        </h4>
                        <span className="text-white/50 text-xs font-[var(--font-inter)] block">
                          {member.credentials}
                        </span>
                      </div>
                    </div>

                    {/* Quote Box */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6 relative">
                      <Quote className="w-6 h-6 text-luxora-gold/30 absolute top-3 right-3" />
                      <p className="text-white/80 text-xs md:text-sm italic leading-relaxed font-[var(--font-serif)]">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </div>

                    <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 font-[var(--font-inter)]">
                      {member.bio}
                    </p>
                  </div>

                  {/* Signature Creation */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-white/50">Signature Creation:</span>
                    <span className="text-luxora-gold font-semibold font-[var(--font-inter)] text-right">
                      {member.signatureDish}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: CHRONICLES OF LEVEL 42 (TIMELINE) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-semibold block mb-2 font-[var(--font-inter)]">
              Legacy & Evolution
            </span>
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
              Chronicles of Level 42
            </h3>
            <p className="text-white/60 text-xs md:text-sm mt-2">
              From raw penthouse architecture to an internationally acclaimed rooftop sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-2xl glass-strong border border-luxora-gold/20 p-8 flex flex-col justify-between hover:border-luxora-gold/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${m.accent}`} />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-bold text-gold-gradient">
                      {m.year}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-luxora-gold px-2.5 py-1 rounded-full bg-luxora-gold/10 border border-luxora-gold/20">
                      {m.period}
                    </span>
                  </div>

                  <h4 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-3">
                    {m.title}
                  </h4>
                  <p className="text-white/65 text-xs md:text-sm leading-relaxed font-[var(--font-inter)]">
                    {m.text}
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
