"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Key,
  Ticket,
  CheckCircle2,
  XCircle,
  Sparkles,
  Camera,
  UserCheck,
  Car,
  AlertCircle,
  Shirt,
  ArrowRight,
  Sun,
  Moon,
  Wine
} from "lucide-react";

type TopChoice = "blazer" | "shirt" | "dress" | "graphic_tee" | "hoodie";
type BottomChoice = "trousers" | "dark_denim" | "skirt" | "shorts";
type FootwearChoice = "dress_shoes" | "heels" | "designer_sneakers" | "flipflops";
type TimeChoice = "day" | "night";

export default function DressCodePolicy() {
  const [activeTab, setActiveTab] = useState<"sartorial" | "protocols" | "arrival" | "courtesy">("sartorial");
  const [attireSubTab, setAttireSubTab] = useState<"gentlemen" | "ladies" | "footwear" | "prohibited">("gentlemen");

  // Outfit Checker State
  const [selectedTop, setSelectedTop] = useState<TopChoice>("blazer");
  const [selectedBottom, setSelectedBottom] = useState<BottomChoice>("trousers");
  const [selectedFootwear, setSelectedFootwear] = useState<FootwearChoice>("dress_shoes");
  const [selectedTime, setSelectedTime] = useState<TimeChoice>("night");
  const [showCheckerModal, setShowCheckerModal] = useState(false);

  // Evaluate Outfit Compliance
  const evaluateOutfit = () => {
    if (selectedTop === "graphic_tee" || selectedTop === "hoodie" || selectedFootwear === "flipflops" || selectedBottom === "shorts") {
      if (selectedTime === "day" && selectedBottom === "shorts" && selectedFootwear !== "flipflops" && selectedTop !== "hoodie") {
        return {
          status: "warning",
          title: "Conditionally Permitted (Sunset Hours Only)",
          badge: "Sunset Hours Compliant",
          description: "Elevated casual attire with tailored shorts is permitted during Sunset Lounge hours (5 PM - 8 PM). After 8:00 PM, evening attire is strictly required.",
          tip: "Consider switching to tailored trousers and dress shoes if staying past 8:00 PM."
        };
      }
      return {
        status: "prohibited",
        title: "Non-Compliant for Evening Service",
        badge: "Strictly Restricted",
        description: "Athletic hoodies, graphic t-shirts, sports caps, and flip-flops do not align with Level 42 sartorial standards.",
        tip: "Please pair a collared dress shirt or tailored jacket with leather dress shoes or luxury loafers."
      };
    }

    if (selectedTop === "blazer" || selectedTop === "dress" || selectedTop === "shirt") {
      if (selectedFootwear === "designer_sneakers" && selectedTime === "night") {
        return {
          status: "approved",
          title: "Approved • Modern Smart Elegant",
          badge: "Compliant & Stylish",
          description: "Pristine designer leather sneakers paired with a tailored blazer or sharp dress shirt are warmly welcomed for evening dining.",
          tip: "Ensure sneakers are immaculate and styled with tailored trousers."
        };
      }
      return {
        status: "approved",
        title: "Compliant • High-Fashion Standard",
        badge: "VIP Approved",
        description: "Your selection perfectly matches LUXORA's Level 42 evening dress code standard. You are set for an exceptional evening.",
        tip: "We look forward to hosting you at Skyline Tower."
      };
    }

    return {
      status: "approved",
      title: "Compliant • Smart Casual",
      badge: "Approved",
      description: "Your selection meets house expectations.",
      tip: "Complimentary VIP valet is available upon arrival."
    };
  };

  const outfitResult = evaluateOutfit();

  const attireCategories = {
    gentlemen: [
      {
        title: "Evening Tailored Jacket & Suit",
        subtitle: "Recommended After 6:00 PM",
        status: "encouraged",
        badgeText: "Highly Encouraged",
        description: "Tailored blazers, velvet jackets, or bespoke suiting paired with crisp dress shirts or elevated fine-knit turtlenecks.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=85",
        rules: ["Collared shirts or tailored jackets", "Pressed trousers or dark tailored denim", "Sophisticated evening color palette"]
      },
      {
        title: "Smart Dress Shirts & Knits",
        subtitle: "Sunset to Evening Standard",
        status: "encouraged",
        badgeText: "Compliant",
        description: "Crisp button-down shirts, silk linen oxfords, or fine merino wool knits tucked into tailored trousers.",
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&q=85",
        rules: ["Tucked collared shirts preferred", "Tailored fit with crisp lines", "Leather belt or clean waistband finish"]
      }
    ],
    ladies: [
      {
        title: "Evening Gowns & Cocktail Dresses",
        subtitle: "Signature Evening Glamour",
        status: "encouraged",
        badgeText: "Highly Encouraged",
        description: "Elegant cocktail dresses, floor-length silk gowns, chic evening jumpsuits, or haute-couture coordinates.",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=85",
        rules: ["Sophisticated evening silhouettes", "High-fashion tailoring & silk garments", "Statement fine jewelry welcomed"]
      },
      {
        title: "Refined Separates & Silk Blouses",
        subtitle: "Modern Luxury Style",
        status: "encouraged",
        badgeText: "Compliant",
        description: "Tailored blazer dress combinations, silk blouses paired with wide-leg trousers, or high-fashion pencil skirts.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=85",
        rules: ["Elevated high-fashion separates", "Designer outerwear & stoles", "Elegant accessories"]
      }
    ],
    footwear: [
      {
        title: "Leather Dress Shoes & Heels",
        subtitle: "Classic Luxury Footwear",
        status: "encouraged",
        badgeText: "Standard Requirement",
        description: "Handcrafted Italian leather oxfords, suede loafers, monk straps, stilettos, high-fashion strappy heels, or refined pumps.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=85",
        rules: ["Pristine polished footwear", "Closed-toe dress shoes for gentlemen", "High-end heel options for ladies"]
      },
      {
        title: "Pristine Designer Leather Sneakers",
        subtitle: "Modern Smart Casual Allowed",
        status: "encouraged",
        badgeText: "Permitted with Style",
        description: "Immaculate minimalist leather designer sneakers (e.g. Common Projects, Tom Ford) when styled with blazers and tailored trousers.",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=85",
        rules: ["Must be pristine and clean", "Paired strictly with tailored trousers", "No athletic gym runners allowed"]
      }
    ],
    prohibited: [
      {
        title: "Athletic Wear & Gym Attire",
        subtitle: "Strictly Restricted After 6:00 PM",
        status: "prohibited",
        badgeText: "Not Permitted",
        description: "Sweatpants, hoodies, athletic tanks, gym compression shorts, sports jerseys, or branded athletic tracksuits.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85",
        rules: ["No sports branded gear", "No gym tank tops or hoodies", "No activewear leggings"]
      },
      {
        title: "Casual Beachwear & Flip-Flops",
        subtitle: "Strictly Restricted",
        status: "prohibited",
        badgeText: "Not Permitted",
        description: "Rubber flip-flops, pool slides, torn denim, graphic t-shirts, sports baseball caps, or beach cover-ups.",
        image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&q=85",
        rules: ["No rubber footwear or pool slides", "No distressing or heavy tears", "No baseball caps inside after 6 PM"]
      }
    ]
  };

  return (
    <section id="policies" className="py-24 bg-luxora-bg relative overflow-hidden">
      {/* Background Ambient Glow & Subtle Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-luxora-gold/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-luxora-accent/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxora-gold/10 border border-luxora-gold/25 text-luxora-gold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold font-[var(--font-inter)]">
              Elegance Defined • House Protocol
            </span>
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-white tracking-tight">
            Venue Policies & <span className="text-gold-gradient">Dress Code</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-luxora-gold to-transparent mx-auto my-5" />
          <p className="text-white/70 text-sm md:text-base font-[var(--font-inter)] leading-relaxed">
            To preserve an atmosphere of understated luxury and sophisticated glamour at Level 42, we kindly ask that guests adhere to our house guidelines prior to arrival.
          </p>
        </div>

        {/* Primary Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {[
            { id: "sartorial", label: "Sartorial Standards", icon: Shirt },
            { id: "protocols", label: "Entry & Age Protocols", icon: Clock },
            { id: "arrival", label: "VIP Valet & Arrival", icon: Car },
            { id: "courtesy", label: "Reservation Courtesy", icon: Ticket },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase font-[var(--font-inter)] transition-all duration-300 flex items-center gap-2.5 ${isActive
                    ? "bg-gold-gradient text-black shadow-[0_0_20px_rgba(212,175,55,0.35)] scale-[1.02]"
                    : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-luxora-gold/30 hover:bg-white/10"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-luxora-gold"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT AREA */}
        <AnimatePresence mode="wait">
          {/* TAB 1: SARTORIAL DRESS CODE */}
          {activeTab === "sartorial" && (
            <motion.div
              key="sartorial"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-10"
            >
              {/* Sub Category Switcher */}
              <div className="flex justify-center border-b border-white/10 pb-4 max-w-xl mx-auto gap-4 md:gap-8">
                {[
                  { id: "gentlemen", label: "Gentlemen" },
                  { id: "ladies", label: "Ladies" },
                  { id: "footwear", label: "Footwear & Accessories" },
                  { id: "prohibited", label: "Prohibited Attire" },
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setAttireSubTab(sub.id as any)}
                    className={`text-xs md:text-sm tracking-widest uppercase font-medium pb-2 relative transition-colors ${attireSubTab === sub.id ? "text-luxora-gold font-semibold" : "text-white/50 hover:text-white/80"
                      }`}
                  >
                    {sub.label}
                    {attireSubTab === sub.id && (
                      <motion.div
                        layoutId="activeSubTab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxora-gold"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Grid of Sartorial Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {attireCategories[attireSubTab].map((item, idx) => {
                  const isProhibited = item.status === "prohibited";
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className={`group rounded-2xl glass-strong overflow-hidden border transition-all duration-500 hover:-translate-y-1 flex flex-col md:flex-row ${isProhibited
                          ? "border-red-500/20 hover:border-red-500/40"
                          : "border-luxora-gold/20 hover:border-luxora-gold/50 luxury-shadow"
                        }`}
                    >
                      {/* Image Preview */}
                      <div className="relative md:w-5/12 h-56 md:h-auto overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxora-bg via-transparent to-transparent opacity-80" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider backdrop-blur-md border ${isProhibited
                                ? "bg-red-950/80 text-red-300 border-red-500/30"
                                : "bg-luxora-bg/80 text-luxora-gold border-luxora-gold/40"
                              }`}
                          >
                            {isProhibited ? <XCircle className="w-3 h-3 text-red-400" /> : <CheckCircle2 className="w-3 h-3 text-luxora-gold" />}
                            {item.badgeText}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between">
                        <div>
                          <span className="text-luxora-gold/80 text-[11px] uppercase tracking-widest font-semibold block mb-1">
                            {item.subtitle}
                          </span>
                          <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 font-[var(--font-inter)]">
                            {item.description}
                          </p>
                        </div>

                        {/* Rules List */}
                        <div className="space-y-2 border-t border-white/10 pt-4">
                          {item.rules.map((rule, rIdx) => (
                            <div key={rIdx} className="flex items-center gap-2 text-xs text-white/80">
                              {isProhibited ? (
                                <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                              ) : (
                                <CheckCircle2 className="w-3.5 h-3.5 text-luxora-gold shrink-0" />
                              )}
                              <span>{rule}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Interactive Outfit Checker CTA Banner */}
              <div className="mt-12 rounded-2xl bg-gradient-to-r from-luxora-card via-luxora-card/90 to-luxora-card border border-luxora-gold/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6 luxury-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-luxora-gold/5 blur-[80px] pointer-events-none" />
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold-gradient text-black flex items-center justify-center shrink-0 shadow-lg">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-[var(--font-playfair)] text-lg md:text-xl font-bold text-white">
                      Unsure about your evening ensemble?
                    </h4>
                    <p className="text-white/60 text-xs md:text-sm mt-1">
                      Use our VIP Interactive Attire Compliance Assistant to verify your outfit before arriving at Skyline Tower.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowCheckerModal(true)}
                  className="bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.03] transition-all duration-300 shrink-0 flex items-center gap-2 relative z-10"
                >
                  Verify Your Outfit <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: ENTRY & AGE PROTOCOLS */}
          {activeTab === "protocols" && (
            <motion.div
              key="protocols"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center max-w-xl mx-auto mb-8">
                <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-white mb-2">
                  Evening Timeline & Age Matrix
                </h3>
                <p className="text-white/60 text-xs md:text-sm">
                  We welcome discerning guests across dedicated dining windows. Entry protocols transition seamlessly throughout the evening.
                </p>
              </div>

              {/* Timeline Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                  {
                    time: "5:00 PM – 8:00 PM",
                    title: "Sunset Lounge Hours",
                    subtitle: "Families & Aperitivo",
                    icon: Sun,
                    agePolicy: "All Ages Welcome",
                    attire: "Smart Casual / Elevated Afternoon",
                    desc: "Families with children are warmly welcomed during sunset hours on Level 42. Enjoy panoramic sunset views with family-friendly dining.",
                    accent: "from-amber-500/20 to-luxora-gold/10"
                  },
                  {
                    time: "8:00 PM – 11:00 PM",
                    title: "Nightfall Fine Dining",
                    subtitle: "Strictly 21+ • High Fashion",
                    icon: Wine,
                    agePolicy: "21+ Adults Only",
                    attire: "Smart Elegant Evening Attire",
                    desc: "Entrance transitions strictly to guests aged 21 and above with valid physical photo ID. Live jazz trios & curated chef tasting menus.",
                    accent: "from-luxora-gold/20 to-luxora-card"
                  },
                  {
                    time: "11:00 PM – 3:00 AM",
                    title: "Midnight VIP Lounge",
                    subtitle: "Strictly 21+ • Black Tie Optional",
                    icon: Moon,
                    agePolicy: "21+ VIP Concierge Screen",
                    attire: "High Fashion / Glamorous Cocktail",
                    desc: "High-energy sky lounge experience with guest international DJs. Entry is subject to door capacity and VIP reservation precedence.",
                    accent: "from-purple-900/20 to-luxora-card"
                  }
                ].map((period) => {
                  const Icon = period.icon;
                  return (
                    <div
                      key={period.time}
                      className="rounded-2xl glass-strong border border-luxora-gold/20 p-8 flex flex-col justify-between hover:border-luxora-gold/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${period.accent}`} />
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 rounded-xl bg-luxora-gold/10 border border-luxora-gold/20 flex items-center justify-center text-luxora-gold">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-luxora-gold font-mono text-xs font-semibold px-3 py-1 rounded-full bg-luxora-gold/10 border border-luxora-gold/20">
                            {period.time}
                          </span>
                        </div>

                        <span className="text-white/40 text-[10px] uppercase font-semibold tracking-widest block font-[var(--font-inter)] mb-1">
                          {period.subtitle}
                        </span>
                        <h4 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-3">
                          {period.title}
                        </h4>
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 font-[var(--font-inter)]">
                          {period.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                        <div className="flex items-center justify-between text-white/80">
                          <span className="text-white/50">Age Policy:</span>
                          <span className="font-semibold text-luxora-gold">{period.agePolicy}</span>
                        </div>
                        <div className="flex items-center justify-between text-white/80">
                          <span className="text-white/50">Dress Code:</span>
                          <span className="font-semibold text-white/90">{period.attire}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ID Protocol Notice */}
              <div className="rounded-xl bg-white/5 border border-white/10 p-6 flex items-start gap-4 text-xs md:text-sm text-white/70 max-w-3xl mx-auto mt-6">
                <AlertCircle className="w-5 h-5 text-luxora-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-1 font-semibold">Government Identification Requirement</strong>
                  All guests arriving after 8:00 PM must present valid physical government-issued photo identification (Passport, National ID, or Driver's License). Digital photos or copies are not accepted by Concierge Security.
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: VIP VALET & ARRIVAL */}
          {activeTab === "arrival" && (
            <motion.div
              key="arrival"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "VIP Valet Porte-Cochère",
                  subtitle: "Skyline Tower Main Entrance",
                  desc: "Complimentary valet parking is provided exclusively for LUXORA patrons at the main drive of Skyline Tower. Dedicated valets ensure secure staging for high-end luxury vehicles.",
                  icon: Car,
                  details: ["24/7 Monitored VIP Valet Staging", "Complimentary EV Supercharging", "Direct Lobby Entrance access"]
                },
                {
                  step: "02",
                  title: "Ground Concierge Reception",
                  subtitle: "Lobby Level VIP Desk",
                  desc: "Upon arrival, present your reservation to our Ground Floor Concierge. Enjoy private coat check, luggage holding, and priority escort to the sky lobby elevators.",
                  icon: ShieldCheck,
                  details: ["Private Coat & Suit Checking", "Dedicated Reception Host", "Express Reservation Clearance"]
                },
                {
                  step: "03",
                  title: "Level 42 Express Elevators",
                  subtitle: "Direct High-Speed Transit",
                  desc: "Private express glass elevators whisk guests directly from the Ground Concierge to Level 42 Rooftop Sanctuary in under 28 seconds with seamless panoramic views.",
                  icon: Key,
                  details: ["28-Second Direct Elevators", "Continuous Departs Every 90s", "Private VIP Keycard Access"]
                }
              ].map((stepItem) => {
                const Icon = stepItem.icon;
                return (
                  <div
                    key={stepItem.step}
                    className="rounded-2xl glass-strong border border-luxora-gold/20 p-8 flex flex-col justify-between hover:border-luxora-gold/50 transition-all duration-300 hover:-translate-y-1 relative"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-luxora-gold/10 border border-luxora-gold/20 flex items-center justify-center text-luxora-gold">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-[var(--font-playfair)] text-3xl font-bold text-luxora-gold/30">
                          {stepItem.step}
                        </span>
                      </div>

                      <span className="text-luxora-gold text-[10px] uppercase font-semibold tracking-widest block font-[var(--font-inter)] mb-1">
                        {stepItem.subtitle}
                      </span>
                      <h4 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-3">
                        {stepItem.title}
                      </h4>
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 font-[var(--font-inter)]">
                        {stepItem.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                      {stepItem.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-luxora-gold shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* TAB 4: RESERVATION COURTESY & PRIVACY */}
          {activeTab === "courtesy" && (
            <motion.div
              key="courtesy"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Ticket,
                  title: "15-Minute Seating Grace Window",
                  subtitle: "Table Holding Policy",
                  description: "To ensure optimal dining flow, reserved tables are held for up to 15 minutes past the scheduled arrival time. If running late, please notify our VIP Concierge team via phone or live chat so we can hold your table."
                },
                {
                  icon: Clock,
                  title: "24-Hour Cancellation & Deposit",
                  subtitle: "Flexible Reservation Management",
                  description: "Table cancellations or party size changes can be completed penalty-free up to 24 hours prior to reservation time. Late cancellations within 24 hours are subject to standard deposit terms."
                },
                {
                  icon: Camera,
                  title: "High-Profile Patron Privacy Protocol",
                  subtitle: "Discreet Photography Guidelines",
                  description: "LUXORA is committed to safeguarding the privacy of all guests. Flash photography, professional filming gear, and live streaming are strictly prohibited in public dining areas to preserve an intimate environment."
                },
                {
                  icon: Sparkles,
                  title: "Celebrations & Special Requests",
                  subtitle: "Bespoke Dining Etiquette",
                  description: "Outside food, beverages, and external celebration decor are not permitted. Custom chef cakes and vintage champagne bottles may be pre-arranged directly through our Head Concierge prior to arrival."
                }
              ].map((courtesy) => {
                const Icon = courtesy.icon;
                return (
                  <div
                    key={courtesy.title}
                    className="rounded-2xl glass-strong border border-white/10 p-8 hover:border-luxora-gold/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-luxora-gold/10 border border-luxora-gold/20 flex items-center justify-center text-luxora-gold mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-luxora-gold text-[10px] uppercase font-semibold tracking-widest block font-[var(--font-inter)] mb-1">
                        {courtesy.subtitle}
                      </span>
                      <h4 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-3">
                        {courtesy.title}
                      </h4>
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed font-[var(--font-inter)]">
                        {courtesy.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL: INTERACTIVE OUTFIT COMPLIANCE CHECKER */}
        <AnimatePresence>
          {showCheckerModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-luxora-card border-t sm:border border-luxora-gold/30 rounded-t-3xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 luxury-shadow relative overflow-hidden max-h-[92vh] sm:max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setShowCheckerModal(false)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-95"
                  aria-label="Close outfit checker"
                >
                  <XCircle className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-3 mb-6 pr-8">
                  <div className="w-10 h-10 rounded-xl bg-gold-gradient text-black flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white">
                      VIP Attire Compliance Checker
                    </h3>
                    <p className="text-white/60 text-xs">
                      Select your planned ensemble to receive real-time dress code clearance.
                    </p>
                  </div>
                </div>

                {/* Form Controls */}
                <div className="space-y-5">
                  {/* Arrival Time */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-luxora-gold block mb-2">
                      1. Estimated Time of Arrival
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setSelectedTime("day")}
                        className={`py-3 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${selectedTime === "day"
                            ? "bg-luxora-gold/20 border-luxora-gold text-luxora-gold font-semibold"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                          }`}
                      >
                        <Sun className="w-4 h-4" /> Before 6:00 PM (Sunset)
                      </button>
                      <button
                        onClick={() => setSelectedTime("night")}
                        className={`py-3 px-4 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${selectedTime === "night"
                            ? "bg-luxora-gold/20 border-luxora-gold text-luxora-gold font-semibold"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                          }`}
                      >
                        <Moon className="w-4 h-4" /> After 6:00 PM (Evening)
                      </button>
                    </div>
                  </div>

                  {/* Top / Outerwear */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-luxora-gold block mb-2">
                      2. Top / Outerwear Selection
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      {[
                        { id: "blazer", label: "Suit / Blazer" },
                        { id: "shirt", label: "Collared Shirt" },
                        { id: "dress", label: "Evening Dress" },
                        { id: "graphic_tee", label: "Graphic T-Shirt" },
                        { id: "hoodie", label: "Athletic Hoodie" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedTop(item.id as TopChoice)}
                          className={`py-2.5 px-3 rounded-lg border text-left transition-all ${selectedTop === item.id
                              ? "bg-luxora-gold/20 border-luxora-gold text-white font-medium"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                            }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bottoms */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-luxora-gold block mb-2">
                      3. Trousers / Bottoms Selection
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                      {[
                        { id: "trousers", label: "Tailored Trousers" },
                        { id: "dark_denim", label: "Dark Tailored Denim" },
                        { id: "skirt", label: "Evening Skirt" },
                        { id: "shorts", label: "Athletic Shorts" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedBottom(item.id as BottomChoice)}
                          className={`py-2.5 px-3 rounded-lg border text-left transition-all ${selectedBottom === item.id
                              ? "bg-luxora-gold/20 border-luxora-gold text-white font-medium"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                            }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Footwear */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-luxora-gold block mb-2">
                      4. Footwear Selection
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                      {[
                        { id: "dress_shoes", label: "Leather Dress Shoes" },
                        { id: "heels", label: "Heels / Pumps" },
                        { id: "designer_sneakers", label: "Luxury Leather Sneakers" },
                        { id: "flipflops", label: "Flip-Flops / Slides" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedFootwear(item.id as FootwearChoice)}
                          className={`py-2.5 px-3 rounded-lg border text-left transition-all ${selectedFootwear === item.id
                              ? "bg-luxora-gold/20 border-luxora-gold text-white font-medium"
                              : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                            }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RESULT CARD */}
                <div
                  className={`mt-6 p-5 rounded-2xl border transition-all ${outfitResult.status === "approved"
                      ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-100"
                      : outfitResult.status === "warning"
                        ? "bg-amber-950/40 border-amber-500/40 text-amber-100"
                        : "bg-rose-950/40 border-rose-500/40 text-rose-100"
                    }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {outfitResult.status === "approved" && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    {outfitResult.status === "warning" && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
                    {outfitResult.status === "prohibited" && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    <h4 className="font-bold text-sm md:text-base font-[var(--font-playfair)]">
                      {outfitResult.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed font-[var(--font-inter)] mb-3">
                    {outfitResult.description}
                  </p>
                  <div className="text-[11px] pt-3 border-t border-white/10 opacity-80 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-luxora-gold" />
                    <span>Concierge Advice: {outfitResult.tip}</span>
                  </div>
                </div>

                <div className="mt-6 text-right">
                  <button
                    onClick={() => setShowCheckerModal(false)}
                    className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
