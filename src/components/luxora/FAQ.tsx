"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is the dress code at LUXORA?",
    answer:
      "We maintain an elegant smart-casual dress code. Gentlemen are required to wear collared shirts; shorts, athletic wear, and flip-flops are not permitted. We recommend cocktail attire for evening visits — think of it as dressing for the occasion the city skyline deserves. Our door team exercises discretion to preserve the atmosphere for all guests.",
  },
  {
    question: "How far in advance should I make a reservation?",
    answer:
      "We recommend booking at least two weeks in advance for weekday evenings and three to four weeks for Friday and Saturday nights. For private events, we suggest six to eight weeks to allow our team the time to customize every detail to your specifications. Gold Members enjoy priority access and can secure tables with as little as 48 hours' notice.",
  },
  {
    question: "Is there a minimum spend requirement?",
    answer:
      "There is no minimum spend for standard reservations. However, VIP terrace seating and The Observatory carry a per-person minimum that varies by evening and season. Your concierge will confirm all details when you book. For private events, minimums are structured into the event package and discussed during the planning process.",
  },
  {
    question: "Can I host a private event at LUXORA?",
    answer:
      "Absolutely. We offer three distinct private event spaces — The Grand Terrace for up to 200 guests, The Velvet Room for intimate gatherings of 40, and The Observatory for exclusive dinners of 12. Our dedicated events team handles everything from bespoke menus and floral design to entertainment booking and lighting programming.",
  },
  {
    question: "What does the Gold Membership include?",
    answer:
      "The Gold Membership grants priority reservation access, a complimentary signature cocktail upon each arrival, exclusive members-only terrace hours, invitations to private tasting events and preview nights, a dedicated personal concierge, 10% savings on private event bookings, complimentary valet parking, and early access to limited event tickets. It is designed for guests who visit regularly and want every return to feel effortless.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Every dietary need is accommodated with the same standard of care and creativity as our regular menu. Our kitchen can craft gluten-free, vegan, halal, kosher, and allergen-free alternatives with advance notice. Simply note your requirements when booking, and our team will ensure a seamless experience.",
  },
  {
    question: "Is valet parking available?",
    answer:
      "Complimentary valet parking is available for Gold Members. For all other guests, valet service is available for a fee at the Madison Avenue entrance. Self-parking is available at the 50th Street garage, a two-minute walk from our private elevator lobby. We recommend arriving ten minutes before your reservation to allow for elevator ascent.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-luxora-card/30 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
              Questions & Answers
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
              Frequently <span className="text-gold-gradient">Asked</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed font-[var(--font-inter)]">
            Can&apos;t find what you&apos;re looking for? Our concierge team is available seven days a week to assist with any inquiry.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-b border-white/5 last:border-b-0"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-[var(--font-inter)] text-white/80 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mt-1"
                >
                  <FiChevronDown
                    className={`transition-colors duration-300 ${
                      openIndex === i ? "text-luxora-gold" : "text-white/30"
                    }`}
                    size={18}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-white/40 text-sm font-[var(--font-inter)] leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
