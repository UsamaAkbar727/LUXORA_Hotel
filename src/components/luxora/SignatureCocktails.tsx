"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";

const cocktails = [
  {
    name: "The Gilded Rose",
    description:
      "Hendrick's gin infused with Persian rose, elderflower liqueur, champagne reduction, and a 24-karat gold leaf garnish. Served in a hand-blown crystal coupe.",
    ingredients: ["Hendrick's Gin", "St-Germain", "Champagne Reduction", "Gold Leaf"],
    price: "$38",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=85",
    accent: "#D4AF37",
  },
  {
    name: "Velvet Nocturne",
    description:
      "Japanese whisky meets black plum shrub, smoked cinnamon, and a whisper of absinthe. A brooding, complex sipper that unfolds with every taste.",
    ingredients: ["Suntory Toki", "Black Plum Shrub", "Smoked Cinnamon", "Absinthe"],
    price: "$42",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&q=85",
    accent: "#9B1C31",
  },
  {
    name: "Celestia Azure",
    description:
      "A celestial blend of reposado tequila, blue curaçao, lime cordial, and egg white foam. Shaken tableside under a cascade of edible silver glitter.",
    ingredients: ["Reposado Tequila", "Blue Curaçao", "Lime Cordial", "Egg White"],
    price: "$36",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=85",
    accent: "#D4AF37",
  },
  {
    name: "Ember & Barrel",
    description:
      "Bourbon barrel-aged for 90 days, married with demerara, Angostura bitters, and a torched orange peel. Served over a single king cube of hand-cut ice.",
    ingredients: ["Barrel-Aged Bourbon", "Demerara", "Angostura", "Torched Orange"],
    price: "$45",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&q=85",
    accent: "#9B1C31",
  },
];

interface SignatureCocktailsProps {
  onReserveClick?: () => void;
}

export default function SignatureCocktails({ onReserveClick }: SignatureCocktailsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="drinks" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-luxora-bg">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Master Mixology Program
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-white">
              Chef&apos;s Signature <span className="text-gold-gradient">Cocktails</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm leading-relaxed font-[var(--font-inter)]">
            Crafted by Master Mixologist Elena Rostova — rare aged spirits, botanical reductions, and tableside theatrical presentations.
          </p>
        </motion.div>

        {/* Cocktail Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cocktails.map((cocktail, i) => (
            <motion.div
              key={cocktail.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl bg-luxora-card border border-white/10 hover:border-luxora-gold/30 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="relative sm:w-[45%] overflow-hidden h-56 sm:h-auto">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/70 text-luxora-gold border border-luxora-gold/30">
                    {cocktail.price}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 flex-1">
                  <div>
                    <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-white mb-2 group-hover:text-luxora-gold transition-colors">
                      {cocktail.name}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed font-[var(--font-inter)] mb-4">
                      {cocktail.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cocktail.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-2.5 py-1 text-[10px] tracking-wider uppercase font-[var(--font-inter)] bg-white/5 text-white/50 rounded-full border border-white/5"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={onReserveClick}
                    className="self-start inline-flex items-center gap-2 text-luxora-gold text-xs tracking-wider uppercase font-semibold hover:underline"
                  >
                    <FiPlus size={14} /> Reserve Tasting Table
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full Menu Section */}
        <div className="mt-12 text-center">
          <a
            href="#cuisine"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/80 hover:text-luxora-gold px-8 py-3.5 rounded-full border border-white/10 hover:border-luxora-gold transition-all"
          >
            Explore Complete Culinary & Wine Menu <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
