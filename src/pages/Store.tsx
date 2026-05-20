import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Star, X, Filter, Sparkles, Check, Heart, Share2, HelpCircle, Eye, ShieldAlert } from 'lucide-react';

const categories = ['All', 'Helmets', 'Riding Gear', 'Safety & Protection', 'Touring Accessories', 'Electrical & Lighting', 'Comfort & Utility', 'Cosmetic Mods', 'Care'];
const brands = ['AGV', 'Alpinestars', 'Dainese', 'Mad Dog', 'Akrapovič', 'Motul', 'Zana', 'Rynox', 'Moxi', 'Bobo', 'Airoh'];

const products = [
  { 
    id: 1, 
    brand: 'AGV',
    category: 'Helmets', 
    name: 'AGV Pista GP RR Carbon', 
    price: '₹95,000', 
    originalPrice: '₹1,15,000', 
    saleBadge: 'Save 17%', 
    rating: 5, 
    img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1590634638703-4903c7340656?w=800&q=80',
    desc: 'Ultimate racing carbon helmet. Replica of Moto GP riders helmet, 100% carbon-fiber shell, hydration system, ECE 22.06 & FIM homologated.',
    specs: ['Shell: 100% Carbon Fiber', 'Certification: ECE 22.06 & FIM', 'Weight: 1450g +/- 50g', 'Ventilation: Integrated IVS Metal Vents'],
    emi: '₹7,916'
  },
  { 
    id: 2, 
    brand: 'Airoh',
    category: 'Helmets', 
    name: 'Airoh Aviator 3 Off-Road', 
    price: '₹54,000', 
    originalPrice: '₹62,000', 
    saleBadge: 'Save 13%', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1628151240292-628f8702b37c?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1590634638703-4903c7340656?w=800&q=80',
    desc: 'Elite off-road carbon-kevlar helmet. Dynamic AMS2 Plus rotation protection, optimal peak ventilation, and magnetic safety pads.',
    specs: ['Shell: HPC Carbon & Kevlar', 'Ventilation: 8 Intakes & Extractors', 'Weight: 1350g +/- 50g', 'Safety: AMS2 Plus Rotation Shield'],
    emi: '₹4,500'
  },
  { 
    id: 3, 
    brand: 'Alpinestars',
    category: 'Riding Gear', 
    name: 'Alpinestars GP Plus R v3 Jacket', 
    price: '₹38,500', 
    originalPrice: '₹45,000', 
    saleBadge: 'Save 14%', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1598460621648-93661eb1ae72?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    desc: 'Premium full-grain leather racing jacket. Engineered with safety Nucleon armor, stretch panels, and dynamic temperature regulation.',
    specs: ['Material: 1.3mm Bovine Leather', 'Armor: Nucleon Flex Plus Level-1', 'Panels: HRSF stretch fabric', 'Details: Premium YKK Zippers'],
    emi: '₹3,208'
  },
  { 
    id: 4, 
    brand: 'Dainese',
    category: 'Riding Gear', 
    name: 'Dainese Full Metal 6 Gloves', 
    price: '₹32,000', 
    originalPrice: '₹38,000', 
    saleBadge: 'Save 15%', 
    rating: 5, 
    img: 'https://images.unsplash.com/photo-1628151240292-628f8702b37c?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1590634638703-4903c7340656?w=800&q=80',
    desc: 'Full track-spec carbon titanium gloves. Made of drum-dyed goatskin, Kevlar fiber stitching, carbon & titanium armor on knuckles and back.',
    specs: ['Armor: Titanium & Carbon Inserts', 'Stitch: DuPont Kevlar Fiber', 'Material: Goatskin Leather', 'Protection: DCP on pinky finger'],
    emi: '₹2,666'
  },
  { 
    id: 5, 
    brand: 'Rynox',
    category: 'Riding Gear', 
    name: 'Rynox Storm Evo Pants', 
    price: '₹11,500', 
    originalPrice: '₹13,500', 
    saleBadge: 'Save 14%', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    desc: 'Heavy-duty all-weather adventure pants. Premium Cordura chassis with active CE Level 2 protectors on knees and hip panels.',
    specs: ['Armor: CE Level 2 (Knee & Hip)', 'Material: 600D Cordura Shield', 'Liners: Detachable Rain & Thermal', 'Visibility: Retro-reflective strips'],
    emi: '₹958'
  },
  { 
    id: 6, 
    brand: 'Zana',
    category: 'Safety & Protection', 
    name: 'Zana Crash Guard (RE Himalayan 450)', 
    price: '₹8,500', 
    originalPrice: '₹9,800', 
    saleBadge: 'Save 13%', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&q=80',
    desc: 'High-strength cold-rolled steel crash frames. Features active polymer slider heads to completely protect the radiator and tank in drops.',
    specs: ['Tubing: 22mm Cold Rolled Steel', 'Finish: Satin Black Powder Coat', 'Sliders: High-Density Derlin Clamps', 'Protection: Case & Tank shields'],
    emi: '₹708'
  },
  { 
    id: 7, 
    brand: 'Zana',
    category: 'Safety & Protection', 
    name: 'Zana Heavy Duty Bash Plate', 
    price: '₹4,200', 
    originalPrice: '₹4,800', 
    saleBadge: 'Save 12%', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80',
    desc: 'Aerospace-grade engine sump bash plate. Fully shields exhaust header pipes and lower engine casings on rocky off-road trails.',
    specs: ['Alloy: 4mm Heavy-Duty Aluminum', 'Brackets: Damped rubber-isolated', 'Airflow: Precision CNC venting slots', 'Install: Plug-and-play mounting'],
    emi: '₹350'
  },
  { 
    id: 8, 
    brand: 'Zana',
    category: 'Touring Accessories', 
    name: 'Zana Heavy Duty Saddle Stays', 
    price: '₹5,800', 
    originalPrice: '₹6,800', 
    saleBadge: 'Save 15%', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
    desc: 'Rigid reinforced saddle stays to support drybags and aluminum panniers, avoiding exhaust touches during rough riding.',
    specs: ['Framework: High-Yield Steel Tubing', 'Capacity: 25kg Load limits per side', 'Compat: Viaterra, Rynox, Givi bags', 'Finish: Rust-resistant coating'],
    emi: '₹483'
  },
  { 
    id: 9, 
    brand: 'Rynox',
    category: 'Touring Accessories', 
    name: 'Rynox Expedition Drybag (30L)', 
    price: '₹3,600', 
    originalPrice: '₹4,200', 
    saleBadge: 'Save 14%', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    desc: '100% waterproof military-grade tail pack. Welded seams with synthetic PVC tarpaulin construct for rough environments.',
    specs: ['Volume: 30 Liters Internal Space', 'Material: 500D TPU Tarpaulin', 'Seal: Roll-top waterproof locks', 'Straps: Quick-release universal mount'],
    emi: '₹300'
  },
  { 
    id: 10, 
    brand: 'Mad Dog',
    category: 'Electrical & Lighting', 
    name: 'Mad Dog Scout LED Aux Lights', 
    price: '₹2,999', 
    originalPrice: '₹3,499', 
    saleBadge: 'Save 14%', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1598460621648-93661eb1ae72?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
    desc: 'Ultra-bright professional auxiliary LEDs. Heavy-duty aluminum body, IP67 waterproof rating, perfect for long-distance adventure touring.',
    specs: ['Brightness: 4800 Lumens', 'Range: 250 Meters', 'Waterproofing: IP67 Certified', 'Power: 40 Watts Output'],
    emi: '₹249'
  },
  { 
    id: 11, 
    brand: 'Mad Dog',
    category: 'Electrical & Lighting', 
    name: 'Mad Dog Alpha LED Aux Lights', 
    price: '₹9,750', 
    originalPrice: '₹11,500', 
    saleBadge: 'Save 15%', 
    rating: 5, 
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?w=800&q=80',
    desc: 'Extreme distance professional aux spotlights. Outrageous illumination density designed for total highway blackouts.',
    specs: ['Brightness: 9600 Lumens Pair', 'Range: 350+ Meters Focal beam', 'Draw: 80 Watts combined output', 'Cert: IP68 Water & Dust Proof'],
    emi: '₹812'
  },
  { 
    id: 12, 
    brand: 'Moxi',
    category: 'Electrical & Lighting', 
    name: 'Moxi Plughazard Flasher Module', 
    price: '₹1,800', 
    originalPrice: '₹2,200', 
    saleBadge: 'Save 18%', 
    rating: 4.6, 
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?w=800&q=80',
    desc: 'Plug-and-play indicator hazard system with 40 built-in flash patterns and waterproof manual toggles.',
    specs: ['Flash Settings: 40 Dynamic Patterns', 'Installation: Fully Plug-and-play', 'Safety: Short circuit protective', 'Compatibility: Universal coupler support'],
    emi: '₹150'
  },
  { 
    id: 13, 
    brand: 'Bobo',
    category: 'Comfort & Utility', 
    name: 'Bobo Claw Mobile Holder (USB)', 
    price: '₹1,850', 
    originalPrice: '₹2,400', 
    saleBadge: 'Save 22%', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    desc: 'Security steel claw mobile handlebar mount. Equipped with custom vibration-dampeners and QC 3.0 USB fast charging.',
    specs: ['Power: QC 3.0 USB Quick Charger', 'Dampener: High-frequency elastomer', 'Claw Material: Steel & Aluminum', 'Suitability: 3.5 to 6.8 inch phones'],
    emi: '₹154'
  },
  { 
    id: 14, 
    brand: 'Zana',
    category: 'Comfort & Utility', 
    name: 'Zana Handlebar Risers (30mm)', 
    price: '₹2,400', 
    originalPrice: '₹2,900', 
    saleBadge: 'Save 17%', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80',
    desc: 'Heavy-duty CNC-milled handlebar risers. Adjusts riding geometry to allow comfortable touring and relaxed shoulder lines.',
    specs: ['Rise: 30mm Elevation height', 'Metal: CNC Billet 6061-T6 Aluminum', 'Bolts: High-Tensile Stainless Steel', 'Coating: Silver rust-resistant anodize'],
    emi: '₹200'
  },
  { 
    id: 15, 
    brand: 'Moxi',
    category: 'Cosmetic Mods', 
    name: 'Moxi CNC Adjustable Levers', 
    price: '₹3,200', 
    originalPrice: '₹3,800', 
    saleBadge: 'Save 15%', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    desc: 'CNC-machined brake and clutch lever blocks. Folding, adjustable span, and extendable slots in deep colors.',
    specs: ['Settings: 6-speed position dialer', 'Material: Billet 6061-T6 Aluminum', 'Folding: Prevents levers snap in drops', 'Finishing: Premium hard anodized colors'],
    emi: '₹266'
  },
  { 
    id: 16, 
    brand: 'Moxi',
    category: 'Cosmetic Mods', 
    name: 'Moxi Stealth Bar End Mirrors', 
    price: '₹2,100', 
    originalPrice: '₹2,600', 
    saleBadge: 'Save 19%', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    desc: 'Anti-glare convex bar-end rearview mirrors. Premium round metal casing offering absolute blind spot visual sweeps.',
    specs: ['Glass: Blue Tint Anti-Glare Convex', 'Clamp: Universal metal expansion locks', 'Body: Heavy-cast steel alloy joints', 'Adjust: 360-degree rotation ball'],
    emi: '₹175'
  },
  { 
    id: 17, 
    brand: 'Akrapovič',
    category: 'Care', 
    name: 'Akrapovič Dual Slip-On (RE 650)', 
    price: '₹65,000', 
    originalPrice: '₹72,000', 
    saleBadge: 'Save 9%', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    desc: 'Titanium sport dual exhaust slip-on system. Sleek design, weight reduction of 4.5kg, dyno tested for acoustic baritone tuning and mid-range torque.',
    specs: ['Material: Titanium Outer Sleeve', 'Weight Reduction: -4.5 Kilograms', 'Power Gain: +2.1 Horsepower', 'Sound: Aggressive Deep Acoustical Tone'],
    emi: '₹5,416'
  },
  { 
    id: 18, 
    brand: 'Motul',
    category: 'Care', 
    name: 'Motul Heavy Chain Care Pack', 
    price: '₹1,250', 
    originalPrice: '₹1,499', 
    saleBadge: 'Save 16%', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80',
    lifestyleImg: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80',
    desc: 'Ultimate O/X/Z-ring chain maintenance kit. Bundled with heavy solvents and dynamic synthetic adhesive road lubricant to prevent wear.',
    specs: ['Includes: C1 Chain Clean (400ml)', 'Lube: C2 Chain Lube Road (400ml)', 'Tools: Double-sided chain brush', 'Safe for: O, X, Z-ring chains'],
    emi: '₹104'
  }
];

export default function Store() {
  const [activeCat, setActiveCat] = useState('All');
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);

  // Toggle brand filters
  const handleBrandChange = (brand: string) => {
    if (activeBrands.includes(brand)) {
      setActiveBrands(activeBrands.filter(b => b !== brand));
    } else {
      setActiveBrands([...activeBrands, brand]);
    }
  };

  // Filter products
  const filtered = products.filter(product => {
    // Category check
    const matchesCategory = activeCat === 'All' || product.category === activeCat;
    // Brand check
    const matchesBrand = activeBrands.length === 0 || activeBrands.includes(product.brand);
    // Availability check (mocking AGV as sold out for premium feel)
    const matchesStock = !inStockOnly || product.brand !== 'Dainese'; 
    
    return matchesCategory && matchesBrand && matchesStock;
  });

  const handleBuy = (product: any) => {
    const text = encodeURIComponent(`Hello Bike Magic!\n\nI want to inquire about the pricing and availability of the following item:\nProduct: ${product.name}\nBrand: ${product.brand}\nCategory: ${product.category}\n\nPlease share the quote and current workshop stock status.`);
    window.open(`https://wa.me/917947147781?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen pb-24">
      
      {/* Header (HTRZ Stylised Banner) */}
      <section className="relative py-28 bg-[#111111] overflow-hidden border-b-[3px] border-primary/95">
        <div className="absolute inset-0 opacity-20 dense-pattern pointer-events-none"></div>
        <div className="absolute inset-0 z-0 mesh-grid opacity-30 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.25em] font-display">HTRZ MODZ CATALOG</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter font-display"
          >
            PERFORMANCE CATALOG
          </motion.h1>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="text-sm text-gray-400 max-w-xl mx-auto font-medium tracking-wide uppercase">
            Sourced and engineered by professionals. Built for the track, verified for street power.
          </p>
        </div>
      </section>

      {/* Main E-commerce Layout Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Clean Sidebar Filters */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            
            {/* Filter Header */}
            <div className="bg-[#1C1B1B] text-white p-5 border border-gray-900 flex justify-between items-center">
              <div className="flex items-center gap-2 font-display text-xs font-black uppercase tracking-wider">
                <Filter className="w-4 h-4 text-primary" /> Filter Config
              </div>
              <button 
                onClick={() => { setActiveCat('All'); setActiveBrands([]); setInStockOnly(false); }}
                className="text-[9px] font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors font-display"
              >
                Clear
              </button>
            </div>

            {/* Availability */}
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#111111] font-display border-b border-gray-150 pb-2">
                Availability
              </h4>
              <label className="flex items-center gap-3 cursor-pointer group text-xs font-bold text-gray-600 uppercase tracking-wide">
                <input 
                  type="checkbox" 
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="accent-primary w-4 h-4 cursor-pointer" 
                />
                <span className="group-hover:text-primary transition-colors">In Stock Only</span>
              </label>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#111111] font-display border-b border-gray-150 pb-2">
                Category
              </h4>
              <div className="flex flex-col gap-3">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCat(cat)}
                    className={`text-left text-xs font-bold uppercase tracking-wider transition-colors flex justify-between items-center ${
                      activeCat === cat ? 'text-primary font-black' : 'text-gray-500 hover:text-[#111111]'
                    }`}
                  >
                    <span>{cat}</span>
                    {activeCat === cat && <Check className="w-3.5 h-3.5 text-primary" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#111111] font-display border-b border-gray-150 pb-2">
                Manufacturer
              </h4>
              <div className="flex flex-col gap-3">
                {brands.map((brand, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group text-xs font-bold text-gray-600 uppercase tracking-wide">
                    <input 
                      type="checkbox" 
                      checked={activeBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                      className="accent-primary w-4 h-4 cursor-pointer" 
                    />
                    <span className="group-hover:text-[#111111] transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Product Catalog Grid */}
          <div className="lg:col-span-9">
            
            {/* Catalog Info & Quick Sort bar */}
            <div className="bg-[#1C1B1B] text-white px-6 py-4 border border-gray-900 flex justify-between items-center mb-8 font-display text-[10px] font-black uppercase tracking-wider">
              <span>Showing {filtered.length} high-spec products</span>
              <span className="text-gray-500">Grid Layout</span>
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => {
                  const isHovered = hoveredCardId === product.id;
                  // Custom badge check
                  const isSoldOut = product.brand === 'Dainese'; 
                  
                  return (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      key={product.id}
                      className="bg-white group cursor-pointer border border-gray-200 hover:border-primary transition-all flex flex-col relative"
                      onClick={() => setSelectedProduct(product)}
                      onMouseEnter={() => setHoveredCardId(product.id)}
                      onMouseLeave={() => setHoveredCardId(null)}
                    >
                      {/* Verified Badge */}
                      {!isSoldOut && (
                        <div className="absolute top-3 left-3 bg-primary text-white text-[8px] font-black px-2.5 py-1 z-10 tracking-widest uppercase font-display shadow-md">
                          VERIFIED
                        </div>
                      )}

                      {/* Sold Out Badge */}
                      {isSoldOut && (
                        <div className="absolute top-3 left-3 bg-gray-500 text-white text-[8px] font-black px-2.5 py-1 z-10 tracking-widest uppercase font-display shadow-md">
                          SOLD OUT
                        </div>
                      )}

                      {/* Image Box with Double Hover Swap */}
                      <div className="aspect-square overflow-hidden bg-[#111111] relative p-0">
                        <img 
                          src={isHovered ? product.lifestyleImg : product.img} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-700 opacity-90 mix-blend-luminosity grayscale filter contrast-[1.1]" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        
                        {/* Quick View Button Overlay */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all font-display flex items-center gap-1 border border-gray-800">
                          <Eye className="w-3 h-3 text-primary" /> View Specs
                        </div>
                      </div>

                      {/* Product Content */}
                      <div className="p-5 flex flex-col flex-grow border-t border-gray-150">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-primary text-[8px] font-black uppercase tracking-[0.2em] font-display">
                            {product.brand} • {product.category}
                          </span>
                          <div className="flex items-center gap-0.5">
                            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                            <span className="text-[9px] font-black text-gray-500 font-mono">{product.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-xs font-black text-[#111111] mb-4 uppercase font-display leading-tight min-h-[32px] line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Pricing and Whatsapp CTA */}
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest block leading-none font-display mb-1">
                              Custom Tuning
                            </span>
                            <span className="text-xs font-black uppercase text-[#111111] leading-none tracking-wide">
                              Inquire Price
                            </span>
                          </div>
                          
                          <button 
                            disabled={isSoldOut}
                            onClick={(e) => { e.stopPropagation(); handleBuy(product); }}
                            className={`px-4 py-2.5 text-[9px] font-black uppercase tracking-widest transition-colors font-display flex items-center gap-1.5 ${
                              isSoldOut 
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                              : 'bg-[#111111] text-white group-hover:bg-primary'
                            }`}
                          >
                            <ShoppingCart className="w-3.5 h-3.5" /> INQUIRE
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Zero State */}
            {filtered.length === 0 && (
              <div className="bg-white p-16 border border-gray-200 text-center flex flex-col items-center justify-center">
                <ShieldAlert className="w-12 h-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-lg font-black uppercase font-display mb-1 text-[#111111]">
                  NO RIDER GEAR MATCHES
                </h3>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Try clearing your filters or selecting a different category setup.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Product Details Modal (PDP) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-white max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative border-l-4 border-primary rounded-none overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#111111] hover:bg-primary flex items-center justify-center text-white transition-colors border border-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Modal left side: Image frame */}
              <div className="md:w-1/2 h-72 md:h-auto bg-[#111111] p-8 flex items-center justify-center relative">
                {/* corner tech decorations */}
                <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-primary" />
                <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-primary" />
                <img 
                  src={selectedProduct.img} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity filter contrast-[1.1]" 
                />
              </div>
              
              {/* Modal right side: Product Info Sheets */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center bg-white text-left">
                
                {/* Category Spec */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-950 text-primary text-[8px] font-black px-2 py-0.5 tracking-widest font-display border border-red-800">
                    {selectedProduct.brand} • {selectedProduct.category}
                  </span>
                  {selectedProduct.brand === 'Dainese' && (
                    <span className="bg-gray-100 text-gray-500 text-[8px] font-black px-2 py-0.5 tracking-widest font-display">
                      OUT OF STOCK
                    </span>
                  )}
                </div>

                {/* Big Title */}
                <h2 className="text-2xl md:text-3xl font-black text-[#111111] mb-3 uppercase tracking-tighter font-display leading-[1.1]">
                  {selectedProduct.name}
                </h2>

                {/* Stars */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-gray-500 font-mono tracking-widest">
                    {selectedProduct.rating} / 5.0 RATING
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-500 mb-6 leading-relaxed text-xs font-semibold uppercase tracking-wider">
                  {selectedProduct.desc}
                </p>

                {/* Specifications Telemetry */}
                <div className="bg-[#F4F4F4] border border-gray-200 p-4 mb-6">
                  <div className="text-[8px] font-black uppercase text-gray-500 tracking-[0.2em] mb-2 font-display">
                    TECHNICAL DATA METRICS
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedProduct.specs.map((spec: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-700 tracking-wide">
                        <span className="w-1.5 h-1.5 bg-primary" /> {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Snapmint EMI Callout */}
                <div className="bg-[#111111] border border-gray-900 p-3.5 mb-6 flex justify-between items-center text-[10px] font-black text-white uppercase tracking-wider font-display">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span>0% Interest EMI Options Available</span>
                  </div>
                  <span className="text-primary">Snapmint Active</span>
                </div>

                {/* Pricing / Checkout Actions */}
                <div className="mt-auto pt-4 border-t border-gray-150 flex items-center justify-between">
                  <div>
                    <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                      Workshop Tuning
                    </div>
                    <div className="text-xs font-black uppercase text-[#111111] leading-none tracking-wide">
                      Ask Live Quote
                    </div>
                  </div>

                  <button 
                    disabled={selectedProduct.brand === 'Dainese'}
                    onClick={() => handleBuy(selectedProduct)}
                    className={`px-6 py-4 font-black uppercase tracking-widest text-xs font-display flex items-center justify-center gap-2 transition-colors ${
                      selectedProduct.brand === 'Dainese'
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-[#111111]'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" /> Inquire Price
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
