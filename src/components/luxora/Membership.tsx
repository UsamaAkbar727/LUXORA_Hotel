"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const benefits = [
  "Priority reservation access — any table, any night",
  "Complimentary signature cocktail upon arrival",
  "Exclusive members-only rooftop terrace access",
  "Invitations to private tasting events and previews",
  "Dedicated personal concierge service",
  "10% savings on private event bookings",
  "Complimentary valet parking on every visit",
  "Early access to limited event tickets",
];

export default function Membership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membership" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxora-gold/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineSparkles className="text-luxora-gold" size={20} />
              <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
                Exclusive Access
              </span>
            </div>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gold <span className="text-gold-gradient">Membership</span>
            </h2>
            <p className="text-white/50 leading-relaxed font-[var(--font-inter)] mb-8 max-w-lg">
              For those who seek more than a night out — who desire a permanent
              seat at the city&apos;s most elevated experience. The Gold Membership
              unlocks a world of privileges reserved for the few.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full border border-luxora-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiCheck className="text-luxora-gold" size={10} />
                  </div>
                  <span className="text-white/60 text-sm font-[var(--font-inter)]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Card glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-luxora-gold/30 via-luxora-gold/5 to-luxora-gold/20 rounded-3xl blur-[1px]" />

              <div className="relative bg-luxora-card rounded-3xl p-8 md:p-10 border border-luxora-gold/10 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxora-gold/[0.04] rounded-bl-full" />

                <div className="relative">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-luxora-gold/10 border border-luxora-gold/20 rounded-full mb-8">
                    <HiOutlineSparkles className="text-luxora-gold" size={12} />
                    <span className="text-luxora-gold text-[10px] tracking-[0.2em] uppercase font-[var(--font-inter)]">
                      Most Popular
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-end gap-1">
                      <span className="font-[var(--font-playfair)] text-5xl md:text-6xl font-bold text-gold-gradient">
                        $499
                      </span>
                      <span className="text-white/40 text-sm font-[var(--font-inter)] mb-2">/year</span>
                    </div>
                    <p className="text-white/30 text-xs font-[var(--font-inter)] mt-2">
                      Less than $42/month for unparalleled access
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-luxora-gold/20 to-transparent mb-8" />

                  {/* Quick benefits */}
                  <div className="space-y-3 mb-10">
                    {benefits.slice(0, 5).map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <FiCheck className="text-luxora-gold flex-shrink-0" size={14} />
                        <span className="text-white/50 text-sm font-[var(--font-inter)] line-clamp-2">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#reservation"
                    className="group relative flex items-center justify-center gap-2 w-full py-4 bg-gold-gradient text-luxora-bg font-semibold text-sm tracking-[0.15em] uppercase rounded-xl overflow-hidden"
                  >
                    <span className="relative z-10">Become a Member</span>
                    <FiArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
