"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiOutlineQuestionMarkCircle } from "react-icons/hi";

const faqs = [
  {
    q: "Do you accept walk-in guests or are reservations strictly required?",
    a: "While advance table reservations are strongly encouraged (especially for Friday and Saturday evenings), our Marble Champagne Lounge on Level 42 maintains a limited number of high-top tables reserved exclusively for walk-in guests on a first-come basis.",
  },
  {
    q: "What is the dress code requirement at LUXORA Rooftop?",
    a: "We enforce a 'Smart Elegant' dress code. For gentlemen, collared shirts or tailored jackets are suggested. Athletic apparel, beachwear, flip-flops, and baseball caps are strictly prohibited after 6:00 PM.",
  },
  {
    q: "Are guests under 21 permitted on the rooftop?",
    a: "Guests of all ages are welcome during Sunset Hours between 5:00 PM and 8:00 PM. After 8:00 PM, entry is strictly restricted to patrons aged 21 and older with valid government-issued photo ID.",
  },
  {
    q: "Is valet parking available at Skyline Tower?",
    a: "Yes. Complimentary VIP valet parking is located directly at the main entrance lobby of Skyline Tower on 450 Grand Avenue. From the lobby, private express elevators elevate guests directly to Level 42.",
  },
  {
    q: "Can LUXORA host private galas or corporate events?",
    a: "Absolutley. LUXORA offers exclusive private venue buyouts for corporate evenings, private weddings, and celebrity galas accommodating up to 250 guests. Please contact our events team at events@luxora.com.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-luxora-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-16">
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] flex items-center justify-center gap-2">
            <HiOutlineQuestionMarkCircle /> Guest Inquiries
          </span>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold mt-2 text-white">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="bg-luxora-card border border-white/10 hover:border-luxora-gold/30 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-[var(--font-playfair)] font-bold text-lg text-white hover:text-luxora-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <HiChevronDown
                    className={`text-luxora-gold transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/60 text-xs md:text-sm leading-relaxed font-[var(--font-inter)] border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
