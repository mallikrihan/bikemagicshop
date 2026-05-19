import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Star, X } from 'lucide-react';

const categories = ['All', 'Helmets', 'Riding Gear', 'Accessories', 'Care'];

const products = [
  { id: 1, category: 'Helmets', name: 'AGV Pista GP RR', price: '₹95,000', rating: 5, img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80', desc: 'Full carbon fiber racing helmet.' },
  { id: 2, category: 'Helmets', name: 'Shoei RF-1400', price: '₹48,000', rating: 4.8, img: 'https://images.unsplash.com/photo-1574676571597-29bdc56ecfa1?w=800&q=80', desc: 'Premium touring and sport helmet.' },
  { id: 3, category: 'Riding Gear', name: 'Alpinestars GP Plus R', price: '₹38,500', rating: 4.9, img: 'https://images.unsplash.com/photo-1598460621648-93661eb1ae72?w=800&q=80', desc: 'Leather racing jacket with armor.' },
  { id: 4, category: 'Riding Gear', name: 'Dainese Full Metal 6', price: '₹32,000', rating: 5, img: 'https://images.unsplash.com/photo-1628151240292-628f8702b37c?w=800&q=80', desc: 'Titanium and carbon fiber track gloves.' },
  { id: 5, category: 'Accessories', name: 'Akrapovič Slip-On', price: '₹65,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?w=800&q=80', desc: 'Titanium performance exhaust system.' },
  { id: 6, category: 'Care', name: 'Motul Chain Care Kit', price: '₹1,250', rating: 4.7, img: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&q=80', desc: 'Chain cleaner and road lube bundle.' },
];

export default function Store() {
  const [activeCat, setActiveCat] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filtered = activeCat === 'All' ? products : products.filter(p => p.category === activeCat);

  const handleBuy = (product: any) => {
    const text = encodeURIComponent(`Hello! I want to purchase:\n\nProduct: ${product.name}\nPrice: ${product.price}\n\nPlease check availability.`);
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen pb-24">
      {/* Header */}
      <section className="relative py-24 bg-[#111111] overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0 opacity-20 dense-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Accessories Store
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide mb-10">
            Premium gear for premium riders.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
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

      {/* Product Grid */}
      <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white group cursor-pointer shadow-sm border border-gray-200 hover:border-primary transition-colors flex flex-col"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square overflow-hidden bg-[#111111] relative p-6">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-luminosity grayscale" />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 text-[9px] font-black text-black flex items-center gap-1 border border-gray-200">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {product.rating}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow border-t-4 border-[#111111] group-hover:border-primary transition-colors">
                  <p className="text-red-600 text-[9px] font-black uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-sm font-black text-[#111111] mb-2 uppercase">{product.name}</h3>
                  <p className="text-gray-800 font-bold text-sm mb-6">{product.price}</p>
                  
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleBuy(product); }}
                    className="mt-auto w-full py-3 text-center bg-[#111111] text-white font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative border-l-8 border-primary"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#111111] hover:bg-primary flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="md:w-1/2 h-64 md:h-auto bg-[#111111] p-8">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover grayscale mix-blend-luminosity" />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-2">{selectedProduct.category}</p>
                <h2 className="text-3xl md:text-4xl font-black text-[#111111] mb-4 uppercase tracking-tighter">{selectedProduct.name}</h2>
                <div className="flex items-center gap-2 mb-6 text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 
                  <span className="font-bold text-xs uppercase">{selectedProduct.rating} / 5.0 Rating</span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm font-bold">{selectedProduct.desc}</p>
                
                <div className="mt-auto">
                  <p className="text-2xl font-black text-[#111111] mb-6">{selectedProduct.price}</p>
                  <button 
                    onClick={() => handleBuy(selectedProduct)}
                    className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-[#111111] transition-colors flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-5 h-5" /> Order via WhatsApp
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
