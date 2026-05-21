import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flame, ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://motocare.co.in/storage/blogs/1723620899_66bc5e235d1e6.jpg',
    tag: 'STAGE-3 RACING SPEC',
    title: 'CUSTOM STREET\nMODS & EXHAUSTS',
    subtitle: 'Performance Billet Parts • Custom Crash Guards • Loud exhausts',
    specTitle: 'PROJECT CHIMERA [RE GT650]',
    pricing: 'Bespoke Quote Only',
    specs: [
      { name: 'Exhaust', val: 'Akrapovič Titanium Duals' },
      { name: 'ECU Remap', val: 'PowerTronic Stage-2 Tune' },
      { name: 'Suspension', val: 'Öhlins Retro Gas Shocks' },
      { name: 'Billet Trim', val: 'CNC Billet Triple Clamp' }
    ]
  },
  {
    id: 2,
    image: 'https://htrzmodz.com/cdn/shop/files/rtx_mobile_cover.jpg?v=1773398110&width=1100',
    tag: 'TUNING LAB',
    title: 'MASTER ECU\nRE-MAPPING & FUELING',
    subtitle: 'Rev Limit Extensions • Throttle Decat Mapping • Dynamic Dyno Tuning',
    specTitle: 'DIAGNOSTICS & TELEMETRY',
    pricing: 'Consult Tuner Live',
    specs: [
      { name: 'Rev Limit', val: '+1,500 RPM Extended' },
      { name: 'Mapping', val: 'Aero Decat Throttle Curves' },
      { name: 'A/F Ratio', val: 'Optimized 13.2 Target AFR' },
      { name: 'Add-Ons', val: 'Pop & Bang Maps / Quickshifter' }
    ]
  },
  {
    id: 3,
    image: 'https://bandidospitstop.com/cdn/shop/files/xsr_155_32730feb-110f-4d1e-8186-42baf614c9a5.webp?v=1776884062&width=1400',
    tag: 'RIDER PROTECTION',
    title: 'OFFICIAL AGV &\nDAINESE GEAR',
    subtitle: 'Carbon Fiber Helmets • D-Ring Safety Straps • Armored Jackets',
    specTitle: 'SAFETY SPEC SHEET',
    pricing: 'Premium Safety Packs',
    specs: [
      { name: 'Helmet Shell', val: 'Carbon-Aramid Kevlar' },
      { name: 'Safety Rating', val: 'ECE 22.06 & FIM Approved' },
      { name: 'Armor Type', val: 'D3O® Level-2 Back/Shoulder' },
      { name: 'Glove Tech', val: 'Titanium Knuckle Sliders' }
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tag: 'DETAILING LAB',
    title: '9H CERAMIC COAT\n& GRAPHIC WRAPS',
    subtitle: 'Ultra Hydrophobic Coating • Liquid PPF Protective Films',
    specTitle: 'GLOSS METRICS & PPF',
    pricing: 'Studio Consultation',
    specs: [
      { name: 'Hardness Rating', val: '9H Diamond Tough Matrix' },
      { name: 'Protection Type', val: 'Anti-Scratch Self-Healing PPF' },
      { name: 'Thickness', val: '12 Mil Ceramic Defense' },
      { name: 'Gloss Factor', val: '100% Wet-Look Reflectance' }
    ]
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  const activeSlide = slides[current];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-end">
      {/* Subtle Overlay to keep text readable */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none" />

      {/* Slide Images (Ken Burns Animating Zoom) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.09 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={activeSlide.image}
              alt="Motorcycle customization backdrop"
              className="object-cover w-full h-full transition-all duration-700"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Main Dashboard Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center pb-12 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

          {/* Left Column: Brand & Title */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${current}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Small Tag */}
                <div className="text-white font-black text-[13px] tracking-[0.2em] uppercase mb-1 drop-shadow-md font-display">
                  {activeSlide.tag}
                </div>

                {/* Massive Title */}
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.0] uppercase tracking-tighter text-shadow-premium font-display">
                  {activeSlide.title}
                </h1>

                {/* Horizontal Bar under title */}
                <div className="h-1.5 bg-white w-3/4 max-w-md mt-3 mb-8 shadow-lg"></div>

                {/* Shop Now Button */}
                <Link to="/services" className="inline-flex items-center gap-2 bg-[#F97316] text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#EA580C] hover:scale-[1.02] transition-all shadow-xl shadow-[#F97316]/20 font-display relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-1">
                    Shop now <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Spec Telemetry Panel */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`spec-${current}`}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="backdrop-blur-md bg-black/45 border border-white/10 p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Corner Bracket Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F97316]/45" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F97316]/45" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F97316]/45" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F97316]/45" />

                {/* Telemetry Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#F97316] rounded-full animate-pulse" />
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase font-mono">SYSTEM TELEMETRY</span>
                  </div>
                  <span className="text-[9px] font-black bg-[#F97316]/10 text-[#F97316] px-3 py-1 border border-[#F97316]/20 uppercase tracking-widest font-mono">
                    {activeSlide.pricing}
                  </span>
                </div>

                {/* Spec Title */}
                <h3 className="text-xl font-black text-white uppercase tracking-tight font-display mb-6 border-b border-white/10 pb-4">
                  {activeSlide.specTitle}
                </h3>

                {/* Specs List */}
                <div className="space-y-4 font-mono text-[11px] uppercase tracking-wider">
                  {activeSlide.specs.map((spec, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 font-medium">{spec.name}</span>
                        <span className="text-white font-bold">{spec.val}</span>
                      </div>
                      {/* Interactive Progress Bar */}
                      <div className="h-1 bg-gray-950 w-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                          className="h-full bg-[#F97316]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Floating Side WhatsApp Action Button */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-30 hidden xl:flex">
        <a 
          href="https://wa.me/919828525294" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center border-2 border-white/20"
          aria-label="Contact on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
          </svg>
        </a>
      </div>

      {/* Bottom Dashboard Slider Indicators (Premium Progress Meters) */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="text-left group cursor-pointer focus:outline-none flex flex-col pt-3 border-t-2 border-gray-800 hover:border-gray-600 transition-colors relative"
            >
              {/* Progress Fill bar (triggers when current item is active) */}
              {current === i && (
                <div className="absolute top-[-2px] left-0 right-0 h-[2px] bg-primary overflow-hidden">
                  <motion.div
                    key={current}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-primary"
                  />
                </div>
              )}

              <div className="flex justify-between items-center mb-1">
                <span className={`text-[10px] font-black font-mono ${current === i ? 'text-primary' : 'text-gray-600 group-hover:text-gray-400'}`}>
                  0{slide.id}
                </span>
                {/* Active or hover telemetry marker dot */}
                <span className={`relative w-1.5 h-1.5 rounded-full transition-all duration-300 pointer-events-none ${current === i ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}>
                  <span className="absolute inset-0 bg-primary rounded-full animate-ping" />
                  <span className="absolute inset-0 bg-primary rounded-full" />
                </span>
              </div>
              <span className={`text-[8px] font-black uppercase tracking-[0.15em] line-clamp-1 ${current === i ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                {slide.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Prev / Next Chevrons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-[#1C1B1B]/80 text-white border border-gray-800 hover:bg-primary hover:border-primary transition-all z-20 shadow-xl opacity-30 hover:opacity-100 hidden lg:flex rounded-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-[#1C1B1B]/80 text-white border border-gray-800 hover:bg-primary hover:border-primary transition-all z-20 shadow-xl opacity-30 hover:opacity-100 hidden lg:flex rounded-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
