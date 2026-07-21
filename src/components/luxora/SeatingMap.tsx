"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineLocationMarker, HiCheckCircle, HiUsers } from "react-icons/hi";

interface ZoneInfo {
  id: string;
  name: string;
  capacity: string;
  minSpend: string;
  atmosphere: string;
  description: string;
  image: string;
  features: string[];
}

const zones: ZoneInfo[] = [
  {
    id: "skyline-edge",
    name: "Zone A: Skyline Edge Terrace",
    capacity: "2 - 6 Guests per table",
    minSpend: "$150 / person",
    atmosphere: "Open-Air & Panoramic",
    description: "Situated directly against the glass perimeter on Level 42. Features unobstructed 180° views of the shimmering city skyline.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=80",
    features: ["Direct Skyline Edge Glass View", "Heated Ambient Floor Lamps", "Dedicated Sommelier Service"],
  },
  {
    id: "vip-booths",
    name: "Zone B: VIP Velvet Sanctuary",
    capacity: "4 - 12 Guests per booth",
    minSpend: "$200 / person",
    atmosphere: "Intimate & Ultra-Luxury",
    description: "Deep button-tufted leather booth seating enveloped in sheer velvet curtains for privacy and bespoke cocktail cart service.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    features: ["Personal Mixologist & Cart", "Privacy Curtains", "Champagne Chiller Built-in"],
  },
  {
    id: "champagne-bar",
    name: "Zone C: Marble Champagne Lounge",
    capacity: "2 - 4 Guests per high-top",
    minSpend: "$90 / person",
    atmosphere: "Vibrant & Musical",
    description: "Polished Italian Nero Marquina marble high-tops adjacent to the live DJ booth and illuminated onyx cocktail bar.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    features: ["Direct View of Live DJ Stage", "Fast Bar Access", "Ambient Fire Pillar Feature"],
  },
  {
    id: "sunset-deck",
    name: "Zone D: Fire Pit Sunset Cabanas",
    capacity: "6 - 15 Guests per cabana",
    minSpend: "$120 / person",
    atmosphere: "Sunset Lounge & Firelight",
    description: "Relaxed low-slung teak cabanas with linear gas fire pits, ideal for sunset champagne toasts and sharing tapas plates.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    features: ["Linear Gas Fire Pit", "Lounge Sofa Seating", "Sunset Horizon View"],
  },
];

interface SeatingMapProps {
  onReserveZone?: (zoneName: string) => void;
}

export default function SeatingMap({ onReserveZone }: SeatingMapProps) {
  const [activeZone, setActiveZone] = useState<ZoneInfo>(zones[0]);

  return (
    <section id="venue" className="py-24 md:py-32 relative bg-luxora-bg overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
            Floor Plan & Layout
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold mt-2 text-white">
            Explore <span className="text-gold-gradient">Rooftop Seating Zones</span>
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed font-[var(--font-inter)]">
            Select an area on Level 42 to preview seating, minimum spend requirements, and atmospheric views.
          </p>
        </div>

        {/* Interactive Interactive Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Zone Selector Buttons / Visual Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white/40 mb-2 font-[var(--font-inter)]">
              Select Rooftop Area:
            </h3>

            {zones.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "border-luxora-gold bg-luxora-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <HiOutlineLocationMarker className={isSelected ? "text-luxora-gold" : "text-white/40"} size={18} />
                      <h4 className="font-[var(--font-playfair)] text-lg font-bold text-white group-hover:text-luxora-gold transition-colors">
                        {zone.name}
                      </h4>
                    </div>
                    <p className="text-white/50 text-xs mt-1 ml-6 font-[var(--font-inter)]">
                      {zone.atmosphere} • <span className="text-luxora-gold font-medium">{zone.minSpend}</span>
                    </p>
                  </div>
                  {isSelected && <HiCheckCircle className="text-luxora-gold" size={22} />}
                </button>
              );
            })}
          </div>

          {/* Detailed Zone View Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-3xl bg-luxora-card border border-luxora-gold/20 p-6 md:p-8 flex flex-col justify-between luxury-shadow overflow-hidden relative"
              >
                {/* Background Image Preview */}
                <div className="relative h-64 md:h-72 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden">
                  <img
                    src={activeZone.image}
                    alt={activeZone.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxora-card via-luxora-card/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-luxora-gold/30 px-3 py-1.5 rounded-full text-xs font-semibold text-luxora-gold uppercase tracking-wider flex items-center gap-2">
                    <HiUsers /> {activeZone.capacity}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-luxora-gold text-xs uppercase tracking-widest font-semibold font-[var(--font-inter)]">
                      Level 42 Dedicated Zone
                    </span>
                    <h3 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mt-1">
                      {activeZone.name}
                    </h3>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed font-[var(--font-inter)]">
                    {activeZone.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase text-white/40 tracking-wider font-semibold block">
                      Zone Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeZone.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-white/80 font-[var(--font-inter)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-luxora-gold" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-white/40 text-xs uppercase block">Minimum Spend Requirement</span>
                    <span className="text-luxora-gold text-lg font-mono font-bold">{activeZone.minSpend}</span>
                  </div>
                  <button
                    onClick={() => onReserveZone && onReserveZone(activeZone.name)}
                    className="w-full sm:w-auto bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-8 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                  >
                    Reserve Table in {activeZone.name.split(":")[0]} →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
