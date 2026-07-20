"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "Isabella Marchetti",
    title: "Art Director, Vogue Italia",
    text: "LUXORA isn't just a lounge — it's a mood, a moment suspended between the sky and the city lights. Every detail, from the gold-rimmed glassware to the curated playlists, whispers elegance. I've hosted three private events here, and each one left my guests speechless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Alexander Voss",
    title: "CEO, Meridian Capital",
    text: "In my line of work, impressions are everything. LUXORA delivers an experience that commands respect before the first drink arrives. The VIP lounge is my go-to for client entertainment — discreet, refined, and always impeccable. The staff anticipates needs before you articulate them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Camille Durand",
    title: "Michelin-Starred Chef",
    text: "As someone who obsesses over craft, I can tell you — the cocktail program at LUXORA is genuinely world-class. The Ember & Oak alone is worth the visit. Rare spirits, precise technique, and presentation that rivals any fine-dining course. A masterclass in liquid artistry.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Raj Patel",
    title: "Film Producer, Luminance Studios",
    text: "We booked the entire venue for our film's after-party. The events team transformed the space into something out of a movie itself — cascading florals, bespoke lighting, and a surprise performance that had everyone on their feet. It was, without question, the best event we've ever hosted.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Sophia Chen",
    title: "Travel Editor, Condé Nast",
    text: "I've reviewed rooftop bars from Tokyo to Ibiza, and LUXORA holds its own against the very best. The 360-degree views are breathtaking, but it's the warmth of the service that stays with you. They remember your name, your drink, your preferences. That's rare, and it matters.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
];

export default function CustomerReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }, [active]);

  const goNext = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  const current = reviews[active];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-luxora-card/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
            Testimonials
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            What Our <span className="text-gold-gradient">Guests</span> Say
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Quote mark */}
              <div className="text-luxora-gold/20 font-[var(--font-playfair)] text-8xl leading-none mb-4 select-none">
                &ldquo;
              </div>

              {/* Review text */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-[var(--font-inter)] max-w-2xl mx-auto mb-8">
                {current.text}
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <FiStar key={i} className="text-luxora-gold fill-luxora-gold" size={16} />
                ))}
              </div>

              {/* Reviewer */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-luxora-gold/30"
                />
                <div className="text-left">
                  <div className="font-[var(--font-playfair)] font-semibold text-white">
                    {current.name}
                  </div>
                  <div className="text-white/40 text-xs font-[var(--font-inter)] tracking-[0.05em]">
                    {current.title}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-luxora-gold/30 hover:text-luxora-gold transition-all duration-300"
              aria-label="Previous review"
            >
              <FiChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === active
                      ? "w-8 h-2 bg-luxora-gold"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-luxora-gold/30 hover:text-luxora-gold transition-all duration-300"
              aria-label="Next review"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
