import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const categories = ['All', 'Workshop', 'Deliveries', 'Mods'];

// Generating 12 placeholder images for masonry structure
const images = Array.from({ length: 12 }, (_, i) => {
  const cat = ['Workshop', 'Deliveries', 'Mods'][i % 3];
  // Different aspect ratios for masonry effect
  const height = i % 4 === 0 ? 600 : i % 3 === 0 ? 400 : 500;
  return {
    id: i,
    category: cat,
    url: `https://images.unsplash.com/photo-1558981${400 + i}-c5f9899a28bc?w=800&h=${height}&fit=crop&q=80`,
    alt: `${cat} shot ${i}`
  };
});

// Since the generated URLs might sometimes 404 from unsplash randomly based on id math, 
// let's use a fixed set of real unsplash motorcycle related URLs for a better look.
const realImages = [
  { id: 1, category: 'Workshop', url: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?w=800&q=80' },
  { id: 2, category: 'Mods', url: 'https://images.unsplash.com/photo-1558981420-c532902e58b4?w=800&q=80' },
  { id: 3, category: 'Deliveries', url: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80' },
  { id: 4, category: 'Workshop', url: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&q=80' },
  { id: 5, category: 'Mods', url: 'https://images.unsplash.com/photo-1590634638703-4903c7340656?w=800&q=80' },
  { id: 6, category: 'Deliveries', url: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80' },
  { id: 7, category: 'Workshop', url: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80' },
  { id: 8, category: 'Mods', url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80' },
  { id: 9, category: 'Workshop', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' }, // using some mechanic/people ones too
  { id: 10, category: 'Deliveries', url: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80' },
  { id: 11, category: 'Mods', url: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=800&q=80' },
  { id: 12, category: 'Workshop', url: 'https://images.unsplash.com/photo-1598460621648-93661eb1ae72?w=800&q=80' },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeCat === 'All' ? realImages : realImages.filter(img => img.category === activeCat);

  return (
    <div className="bg-[#F3F4F6] min-h-screen pb-24">
      {/* Header */}
      <section className="relative pt-32 pb-16 border-b-8 border-primary bg-[#111111]">
        <div className="absolute inset-0 opacity-20 dense-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Our Gallery
          </motion.h1>
          <div className="flex justify-center gap-4 mt-8">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-3 border-b-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCat === cat 
                  ? 'border-primary text-white bg-[#222]' 
                  : 'border-transparent text-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid Simulation */}
      <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="relative group overflow-hidden break-inside-avoid cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
              >
                <img src={img.url} alt={img.category} className="w-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-black tracking-widest uppercase border-2 border-white px-6 py-2 bg-black/40 text-xs">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
