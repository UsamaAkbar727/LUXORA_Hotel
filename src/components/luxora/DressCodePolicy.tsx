"use client";

import { HiOutlineShieldCheck, HiOutlineClock, HiOutlineTicket, HiOutlineKey } from "react-icons/hi";

export default function DressCodePolicy() {
  const policies = [
    {
      icon: HiOutlineShieldCheck,
      title: "Dress Code Standard",
      subtitle: "Smart Elegant Attire",
      description:
        "Gentlemen are encouraged to wear collared shirts or tailored jackets. Evening cocktail dresses or refined attire preferred for ladies. Athletic wear, flip-flops, and sports caps are strictly prohibited after 6:00 PM.",
    },
    {
      icon: HiOutlineClock,
      title: "Age & Entry Policy",
      subtitle: "21+ After 8:00 PM",
      description:
        "Families with children are warmly welcomed during Sunset Hours (5:00 PM – 8:00 PM). After 8:00 PM, entry is strictly restricted to guests aged 21 and above with valid photo identification.",
    },
    {
      icon: HiOutlineKey,
      title: "Arrival & Valet",
      subtitle: "Complimentary VIP Valet",
      description:
        "Valet service is available at the main lobby entrance of Skyline Tower. Private express elevators depart continuously from Ground Concierge directly to Level 42.",
    },
    {
      icon: HiOutlineTicket,
      title: "Reservations & Deposit",
      subtitle: "24-Hour Grace Policy",
      description:
        "Seating reservations are held for up to 15 minutes past the reserved time. Table cancellations or party size changes can be made without penalty up to 24 hours prior.",
    },
  ];

  return (
    <section className="py-20 bg-luxora-card/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)]">
            Guest Information
          </span>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold mt-2 text-white">
            Venue Policies & <span className="text-gold-gradient">Dress Code</span>
          </h2>
          <p className="text-white/50 text-xs md:text-sm mt-3 font-[var(--font-inter)] leading-relaxed">
            To preserve an elevated atmosphere for all our patrons, we kindly ask that guests review our house guidelines prior to arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {policies.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white/5 border border-white/10 hover:border-luxora-gold/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-luxora-gold/10 border border-luxora-gold/20 flex items-center justify-center text-luxora-gold mb-4">
                    <Icon size={24} />
                  </div>
                  <span className="text-luxora-gold text-[10px] uppercase font-semibold tracking-widest block font-[var(--font-inter)]">
                    {p.subtitle}
                  </span>
                  <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white mt-1 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-[var(--font-inter)]">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
