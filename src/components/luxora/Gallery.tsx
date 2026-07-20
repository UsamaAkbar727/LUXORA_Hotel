"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  { src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&q=85", alt: "Cocktail bar ambiance with warm lighting", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85", alt: "Rooftop city view at night", span: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85", alt: "Elegant plated fine dining", span: "" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=85", alt: "Golden sunset from the terrace", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85", alt: "Live music performance on stage", span: "" },
  { src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=85", alt: "Luxury hotel lounge interior", span: "" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=85", alt: "Signature cocktail with garnish", span: "" },
  { src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&q=85", alt: "Intimate private dining celebration", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=85", alt: "Artisan cocktail preparation", span: "" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85", alt: "Upscale restaurant interior design", span: "" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
            Visual Journey
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
            The <span className="text-gold-gradient">Gallery</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer ${img.span}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-luxora-bg/0 group-hover:bg-luxora-bg/40 transition-all duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs tracking-[0.2em] uppercase font-[var(--font-inter)] border border-white/30 px-4 py-2 rounded-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-luxora-bg/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-10 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <FiChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-10 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <FiChevronRight size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={images[lightbox].src.replace("w=600", "w=1200")}
              alt={images[lightbox].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
