import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Image, Compass, Aperture, Eye } from 'lucide-react';

const categories = ['All', 'Workshop', 'Deliveries', 'Custom Mods'];

const realImages = [
  { id: 1, category: 'Workshop', url: 'https://artofmotorcycles.co/storage/2020/07/aux-lights-3-1-600x358.jpg', title: 'Auxiliary Lighting Array Install', iso: 'ISO 200', f: 'f/2.8', t: '1/250s' },
  { id: 2, category: 'Custom Mods', url: 'https://rukminim2.flixcart.com/image/480/640/xif0q/bike-crash-guard/r/c/d/black-sump-guard-for-classic-reborn-meteor-350-seflipo-original-imagw5p2gjpumjwa.jpeg?q=90', title: 'Royal Enfield Engine Sump Cover', iso: 'ISO 400', f: 'f/4.0', t: '1/160s' },
  { id: 3, category: 'Deliveries', url: 'https://m.media-amazon.com/images/I/71CFsjVOlbL._AC_UF350,350_QL80_.jpg', title: 'KTM Crash Sliders Unboxing', iso: 'ISO 100', f: 'f/1.8', t: '1/500s' },
  { id: 4, category: 'Workshop', url: 'https://lrlmotors.com/cdn/shop/products/yamaha-r15-v3-mt-15-exhaust-slider-945781.jpg?v=1692100532', title: 'Yamaha R15 Exhaust Alignment', iso: 'ISO 800', f: 'f/3.5', t: '1/125s' },
  { id: 5, category: 'Custom Mods', url: 'https://armysctv.com/cdn/shop/files/kit-deco-sherco-sur-mesure-rouge-bordeaux.jpg?v=1767950362&width=1800', title: 'Aesthetic Decal Visual Tuning', iso: 'ISO 200', f: 'f/2.8', t: '1/400s' },
  { id: 6, category: 'Deliveries', url: 'https://www.reisemoto.com/cdn/shop/files/Auto_Engina_ADVENTURE_SERIES_TOP_BOX_7451300021b.png?v=1743154596&width=1000', title: 'ADV Heavy Luggage Stay Box', iso: 'ISO 100', f: 'f/2.0', t: '1/320s' },
  { id: 7, category: 'Workshop', url: 'https://bikerrated.com/wp-content/uploads/2019/04/best-motorcycle-chain-cleaner.jpg', title: 'Chain Maintenance Solvents Clean', iso: 'ISO 400', f: 'f/4.0', t: '1/200s' },
  { id: 8, category: 'Custom Mods', url: 'https://m.media-amazon.com/images/I/71dd02dyt0L.jpg', title: 'Stealth Bar End Convex Mirrors', iso: 'ISO 800', f: 'f/5.6', t: '1/80s' },
  { id: 9, category: 'Workshop', url: 'https://m.media-amazon.com/images/I/81pO+e9qhXL._AC_UF1000,1000_QL80_.jpg', title: 'Master Handle Risers Setup', iso: 'ISO 320', f: 'f/2.8', t: '1/160s' },
  { id: 10, category: 'Deliveries', url: 'https://s.alicdn.com/@sc04/kf/H3b541c55189046468a3c37fb34241c7d4/Motorcycle-Seats-Cushions-Waterproof-Breathable-Seat-for-Scooter-Yamaha-Nvx-Aerox-155-Accessories-2021-2023.jpg', title: 'EV Scooter Seat Cushion Fitment', iso: 'ISO 200', f: 'f/3.2', t: '1/125s' },
  { id: 11, category: 'Custom Mods', url: 'https://royalpiston.in/cdn/shop/files/41Q7QuRJ0kL.jpg?v=1778278608&width=3840', title: 'Akrapovic Baritone Acoustical Dyno', iso: 'ISO 100', f: 'f/1.8', t: '1/800s' },
  { id: 12, category: 'Workshop', url: 'https://m.media-amazon.com/images/I/71oi8LkISUL.jpg', title: 'Heavy Fog Auxiliary Wiring', iso: 'ISO 400', f: 'f/4.0', t: '1/250s' }
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filtered = activeCat === 'All' ? realImages : realImages.filter(img => img.category === activeCat);

  return (
    <div className="bg-[#111111] min-h-screen pb-24 text-white">

      {/* Header (HTRZ Stylised Banner) */}
      <section className="relative py-28 bg-[#111111] overflow-hidden border-b-[3px] border-primary/95">
        <div className="absolute inset-0 opacity-20 dense-pattern pointer-events-none"></div>
        <div className="absolute inset-0 z-0 mesh-grid opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.25em] font-display">Tuning Log Visuals</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter font-display"
          >
            WORKSHOP GALLERY
          </motion.h1>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>

          {/* Glowing Filters Nav HUD */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-3 text-[9px] font-black uppercase tracking-widest transition-all font-display border ${activeCat === cat
                  ? 'bg-primary border-primary text-white'
                  : 'bg-[#1C1B1B]/80 border-gray-900 text-gray-400 hover:text-white hover:border-gray-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-Grid-like Telemetry Panel */}
      <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative group overflow-hidden border border-gray-900 hover:border-primary transition-all cursor-pointer aspect-square bg-[#1C1B1B]"
                onClick={() => setSelectedImage(img)}
              >
                {/* Image element */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glowing Overlay border effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-all pointer-events-none z-10 m-2" />

                {/* Telemetry metadata overlay banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 pt-10 translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-primary text-[8px] font-black uppercase tracking-[0.2em] font-display block mb-1">
                    {img.category}
                  </span>
                  <h4 className="text-white text-xs font-black uppercase font-display leading-tight truncate">
                    {img.title}
                  </h4>
                  <div className="flex gap-3 mt-2 text-[8px] font-black text-gray-500 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{img.iso}</span>
                    <span>{img.f}</span>
                    <span>{img.t}</span>
                  </div>
                </div>

                {/* Floating zoom indicator top right */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-gray-800">
                  <Eye className="w-3.5 h-3.5 text-primary" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Expanded Telemetry Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col md:flex-row items-stretch justify-between bg-black/95 p-0 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Left Column: Expanded High Res Photo view */}
            <div className="flex-grow flex items-center justify-center p-6 relative">
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20 bg-[#1C1B1B] p-2 border border-gray-900"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(214,24,39,0.15)] border border-gray-900"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Right Column: Dynamic Camera Telemetry HUD Spec Sheet */}
            <div
              className="w-full md:w-[350px] bg-[#111111] border-t md:border-t-0 md:border-l border-gray-900 p-8 flex flex-col justify-between shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Tech specifications header */}
                <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-gray-900">
                  <Aperture className="w-4 h-4 text-primary animate-spin" />
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.25em] font-display">
                    IMAGE SPECS TELEMETRY
                  </span>
                </div>

                <span className="bg-[#1C1B1B] border border-gray-900 text-primary text-[8px] font-black px-2.5 py-1 tracking-widest uppercase font-display rounded-sm inline-block mb-3">
                  {selectedImage.category}
                </span>

                <h3 className="text-xl font-black text-white uppercase font-display tracking-tight leading-tight mb-4">
                  {selectedImage.title}
                </h3>

                <p className="text-[11px] text-gray-500 uppercase font-semibold leading-relaxed tracking-wider mb-8">
                  Captured live at our specialized J.C. Road workshop in Bengaluru. Every upgrade is engineered to perfection and verified for dynamic street power.
                </p>

                {/* Exif/Camera Spec Grid */}
                <div className="bg-[#1C1B1B] border border-gray-900 p-4 space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider">
                    <span className="text-gray-500">Camera ISO</span>
                    <span className="text-white font-mono">{selectedImage.iso}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider border-t border-gray-950 pt-3.5">
                    <span className="text-gray-500">Aperture Setting</span>
                    <span className="text-white font-mono">{selectedImage.f}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider border-t border-gray-950 pt-3.5">
                    <span className="text-gray-500">Shutter Speed</span>
                    <span className="text-white font-mono">{selectedImage.t}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider border-t border-gray-950 pt-3.5">
                    <span className="text-gray-500">Resolution</span>
                    <span className="text-white font-mono">1920 x 1080 PX</span>
                  </div>
                </div>
              </div>

              {/* Consultation Prompt */}
              <div className="pt-6 border-t border-gray-900 mt-8">
                <a
                  href={`https://wa.me/917947147781?text=Hi%20Bike%20Magic!%20I%20saw%20your%20awesome%20photo%20in%20the%20gallery%20titled:%20"${encodeURIComponent(selectedImage.title)}"%20and%20want%20to%20consult%20about%20doing%20a%20similar%20modification%20for%20my%20bike!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-white hover:text-black py-4 font-black uppercase tracking-widest text-[10px] font-display flex items-center justify-center gap-2 border border-primary transition-colors text-white"
                >
                  <Compass className="w-3.5 h-3.5 shrink-0" /> Conslult Custom Modification
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
