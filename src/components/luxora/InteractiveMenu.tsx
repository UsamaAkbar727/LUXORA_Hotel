"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSparkles, HiPlus, HiCheck, HiOutlineShoppingBag, HiX } from "react-icons/hi";

interface MenuItem {
  id: string;
  name: string;
  category: "cocktails" | "dining" | "wines" | "desserts";
  price: number;
  description: string;
  ingredients: string[];
  dietary?: ("Chef's Special" | "Vegan" | "Gluten Free" | "Sommelier Pick")[];
  image: string;
}

const menuItems: MenuItem[] = [
  // Cocktails
  {
    id: "c1",
    name: "The Gilded Rose",
    category: "cocktails",
    price: 38,
    description: "Hendrick's gin infused with Persian rose, elderflower liqueur, champagne reduction, and 24K gold leaf garnish.",
    ingredients: ["Botanical Gin", "Elderflower", "Champagne Reduction", "24K Gold"],
    dietary: ["Chef's Special"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
  },
  {
    id: "c2",
    name: "Velvet Nocturne",
    category: "cocktails",
    price: 42,
    description: "Suntory Toki whisky married with black plum shrub, smoked cinnamon bark, and a whisper of absinthe.",
    ingredients: ["Japanese Whisky", "Black Plum Shrub", "Smoked Cinnamon", "Absinthe"],
    dietary: ["Sommelier Pick"],
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&q=80",
  },
  {
    id: "c3",
    name: "Celestia Azure",
    category: "cocktails",
    price: 36,
    description: "Reposado Tequila shaken with blue curacao, lime cordial, and organic egg white foam. Tableside glitter pour.",
    ingredients: ["Reposado Tequila", "Blue Curacao", "Lime Cordial", "Egg White Foam"],
    dietary: ["Gluten Free"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80",
  },
  {
    id: "c4",
    name: "Ember & Barrel",
    category: "cocktails",
    price: 45,
    description: "Bourbon aged 90 days in toasted oak, Demerara nectar, Angostura bitters, torched blood orange peel.",
    ingredients: ["Oak-Aged Bourbon", "Demerara", "Angostura", "Blood Orange"],
    dietary: ["Chef's Special"],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500&q=80",
  },

  // Fine Dining & Tapas
  {
    id: "d1",
    name: "A5 Miyazaki Wagyu Tartare",
    category: "dining",
    price: 68,
    description: "Hand-cut Miyazaki Wagyu beef, cured quail egg yolk, black truffle caviar, and toasted brioche crisp.",
    ingredients: ["A5 Wagyu", "Quail Yolk", "Black Truffle Caviar", "Brioche"],
    dietary: ["Chef's Special"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80",
  },
  {
    id: "d2",
    name: "Hokkaido Scallops & Saffron Foam",
    category: "dining",
    price: 54,
    description: "Pan-seared wild Hokkaido scallops, cauliflower silk puree, saffron reduction, and sea fennel oil.",
    ingredients: ["Wild Scallops", "Cauliflower Silk", "Saffron Reduction", "Sea Fennel"],
    dietary: ["Gluten Free", "Sommelier Pick"],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80",
  },
  {
    id: "d3",
    name: "Wild Forest Mushroom Risotto",
    category: "dining",
    price: 46,
    description: "Carnaroli rice slow-cooked with chanterelles, porcini broth, aged parmesan emulsion, and black truffle shaving.",
    ingredients: ["Carnaroli Rice", "Chanterelles", "Porcini Broth", "Truffle Shavings"],
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=500&q=80",
  },

  // Rare Wines
  {
    id: "w1",
    name: "Dom Pérignon Rosé Vintage 2008",
    category: "wines",
    price: 680,
    description: "Vibrant notes of wild strawberry, smoked paprika, and brioche. Elegant, structured perfection from Champagne.",
    ingredients: ["Pinot Noir", "Chardonnay", "Épernay, France"],
    dietary: ["Sommelier Pick"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80",
  },
  {
    id: "w2",
    name: "Château Margaux 1er Grand Cru 2015",
    category: "wines",
    price: 1450,
    description: "Opulent bouquet of violet, black currant, cedar, and velvety tannins. Decanted 2 hours prior to serving.",
    ingredients: ["Cabernet Sauvignon", "Merlot", "Bordeaux, France"],
    dietary: ["Chef's Special"],
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=500&q=80",
  },

  // Desserts
  {
    id: "ds1",
    name: "24K Valrhona Soufflé",
    category: "desserts",
    price: 32,
    description: "Warm 70% Guanaja chocolate soufflé, Madagascar vanilla bean gelato, and gold leaf veil.",
    ingredients: ["Valrhona 70%", "Madagascar Vanilla", "Gold Leaf"],
    dietary: ["Chef's Special"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80",
  },
];

interface InteractiveMenuProps {
  onReserveClick?: () => void;
}

export default function InteractiveMenu({ onReserveClick }: InteractiveMenuProps) {
  const [activeCategory, setActiveCategory] = useState<"cocktails" | "dining" | "wines" | "desserts">("cocktails");
  const [selectedDietary, setSelectedDietary] = useState<string>("All");
  const [tastingList, setTastingList] = useState<MenuItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    { key: "cocktails", label: "Signature Mixology" },
    { key: "dining", label: "Executive Dining & Tapas" },
    { key: "wines", label: "Vintage Champagne & Cellar" },
    { key: "desserts", label: "Artisanal Desserts" },
  ];

  const dietaryFilters = ["All", "Chef's Special", "Vegan", "Gluten Free", "Sommelier Pick"];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesDietary =
      selectedDietary === "All" || (item.dietary && item.dietary.includes(selectedDietary as any));
    return matchesCategory && matchesDietary;
  });

  const toggleWishlist = (item: MenuItem) => {
    if (tastingList.some((i) => i.id === item.id)) {
      setTastingList(tastingList.filter((i) => i.id !== item.id));
    } else {
      setTastingList([...tastingList, item]);
    }
  };

  const totalPrice = tastingList.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <section id="cuisine" className="py-24 md:py-32 relative bg-luxora-bg overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <span className="text-luxora-gold text-xs tracking-[0.3em] uppercase font-[var(--font-inter)] flex items-center gap-2 font-semibold">
              <HiOutlineSparkles /> Curated Culinary Arts
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-white">
              Chef&apos;s Culinary & <span className="text-gold-gradient">Mixology Menu</span>
            </h2>
          </div>

          {/* Tasting Drawer Trigger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="relative self-start md:self-auto flex items-center justify-center gap-3 bg-white/5 border border-luxora-gold/30 hover:border-luxora-gold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white transition-all active:scale-[0.98] cursor-pointer min-h-[44px]"
          >
            <HiOutlineShoppingBag className="text-luxora-gold" size={18} />
            <span>Tasting Wishlist ({tastingList.length})</span>
            {tastingList.length > 0 && (
              <span className="bg-luxora-gold text-black font-bold px-2 py-0.5 rounded-full text-[10px]">
                ${totalPrice}
              </span>
            )}
          </button>
        </div>

        {/* Category Tabs with Mobile Touch Scroll Indicator */}
        <div className="relative mb-8">
          <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto scrollbar-hide pb-3 pt-1 border-b border-white/10 -mx-6 px-6 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-5 sm:px-6 py-3 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.15em] font-medium whitespace-nowrap transition-all duration-300 active:scale-95 cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-gold-gradient text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    : "bg-white/5 text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Filters */}
        <div className="flex items-center gap-2 flex-wrap mb-10 text-xs">
          <span className="text-white/60 mr-2 uppercase tracking-wider text-[11px] font-[var(--font-inter)] font-semibold">
            Filter by:
          </span>
          {dietaryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedDietary(filter)}
              className={`px-4 py-2 rounded-full border text-[11px] uppercase tracking-wider transition-all active:scale-95 cursor-pointer min-h-[38px] ${
                selectedDietary === filter
                  ? "border-luxora-gold text-luxora-gold bg-luxora-gold/15 font-semibold"
                  : "border-white/15 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isSelected = tastingList.some((i) => i.id === item.id);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl bg-luxora-card border border-white/10 hover:border-luxora-gold/30 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxora-card via-luxora-card/30 to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold font-mono bg-black/70 text-luxora-gold border border-luxora-gold/30">
                    ${item.price}
                  </span>

                  {item.dietary && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                      {item.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-luxora-accent/80 text-white border border-luxora-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white mb-2 group-hover:text-luxora-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed font-[var(--font-inter)] mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider bg-white/5 text-white/40 border border-white/5"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleWishlist(item)}
                    className={`w-full py-3 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      isSelected
                        ? "bg-green-600/20 text-green-400 border border-green-500/40"
                        : "bg-white/5 hover:bg-luxora-gold hover:text-black text-luxora-gold border border-luxora-gold/20"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <HiCheck size={16} /> Added to Tasting Wishlist
                      </>
                    ) : (
                      <>
                        <HiPlus size={16} /> Add to Tasting Wishlist
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tasting Drawer Modal */}
        <AnimatePresence>
          {isDrawerOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-md bg-luxora-card border-l border-luxora-gold/20 h-full p-6 flex flex-col justify-between z-10 luxury-shadow"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white flex items-center gap-2">
                      <HiOutlineShoppingBag className="text-luxora-gold" /> Tasting Wishlist
                    </h3>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="p-2 text-white/50 hover:text-white"
                    >
                      <HiX size={20} />
                    </button>
                  </div>

                  {tastingList.length === 0 ? (
                    <div className="text-center py-16 text-white/40 text-sm font-[var(--font-inter)]">
                      Your tasting wishlist is empty. Select items from the menu to curate your evening.
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                      {tastingList.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                              <span className="text-xs text-luxora-gold font-mono">${item.price}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleWishlist(item)}
                            className="text-white/40 hover:text-red-400 p-1"
                          >
                            <HiX size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {tastingList.length > 0 && (
                  <div className="border-t border-white/10 pt-6 space-y-4">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-white/60 uppercase text-xs">Estimated Tasting Total</span>
                      <span className="text-luxora-gold text-xl font-mono">${totalPrice}</span>
                    </div>
                    <button
                      onClick={() => {
                        setIsDrawerOpen(false);
                        if (onReserveClick) onReserveClick();
                      }}
                      className="w-full bg-gold-gradient text-black font-semibold text-xs tracking-[0.15em] uppercase py-4 rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                    >
                      Reserve Table with Wishlist →
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
