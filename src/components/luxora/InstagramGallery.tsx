"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiInstagram, FiHeart, FiMessageCircle } from "react-icons/fi";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=85",
    alt: "Signature cocktail with gold leaf garnish",
    likes: 2847,
    comments: 184,
  },
  {
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=85",
    alt: "Rooftop ambiance at golden hour",
    likes: 3291,
    comments: 247,
  },
  {
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=85",
    alt: "Live music night at LUXORA",
    likes: 1956,
    comments: 132,
  },
  {
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=85",
    alt: "Private event celebration",
    likes: 4102,
    comments: 298,
  },
  {
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=85",
    alt: "Mixologist crafting a cocktail",
    likes: 2344,
    comments: 167,
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=85",
    alt: "Sunset view from the terrace",
    likes: 5621,
    comments: 412,
  },
];

export default function InstagramGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiInstagram className="text-luxora-gold" size={20} />
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              @luxora
            </span>
          </div>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold">
            Follow the <span className="text-gold-gradient">Moment</span>
          </h2>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-luxora-bg/0 group-hover:bg-luxora-bg/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-5">
                  <div className="flex items-center gap-1.5 text-white text-sm font-[var(--font-inter)]">
                    <FiHeart className="fill-white" size={16} />
                    {(post.likes / 1000).toFixed(1)}k
                  </div>
                  <div className="flex items-center gap-1.5 text-white text-sm font-[var(--font-inter)]">
                    <FiMessageCircle size={16} />
                    {post.comments}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-luxora-gold/30 text-luxora-gold text-xs tracking-[0.15em] uppercase rounded-full hover:bg-luxora-gold/10 transition-all duration-300 font-[var(--font-inter)]"
          >
            <FiInstagram size={14} />
            Follow @luxora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
