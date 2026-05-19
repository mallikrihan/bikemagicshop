import React from 'react';
import { motion } from 'motion/react';

const services = [
  { id: 1, title: 'General Bike Service', price: '₹1499', desc: 'Complete checkup, oil change, chain lube, and wash.', img: 'https://images.unsplash.com/photo-1621255866838-89c566fb5208?w=800&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Engine Repair', price: 'Price on Inspection', desc: 'Advanced diagnostics and precision engine rebuilding.', img: 'https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=800&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Brake Service', price: '₹599', desc: 'Brake pad replacement, fluid bleed, and safety check.', img: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?w=800&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Chain Maintenance', price: '₹349', desc: 'Deep cleaning, slack adjustment, and premium lubrication.', img: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format&fit=crop&q=80' },
  { id: 5, title: 'Tyre Replacement', price: '₹299', desc: 'Mounting, balancing, and alignment (Tyre cost extra).', img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Bike Detailing', price: '₹1999', desc: 'Foam wash, clay bar, polish, and ceramic sealant.', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80' },
];

export default function Services() {
  const handleBook = (title: string) => {
    const text = encodeURIComponent(`Hello! I want to book the ${title} service.`);
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
            Workshop Services
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-bold tracking-widest text-xs uppercase">
            Precision care for every machine. Transparent pricing, expert mechanics.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white group flex flex-col h-full border-l-8 border-[#111111] shadow-sm hover:border-primary transition-colors hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden bg-[#111111] p-0 relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale mix-blend-luminosity opacity-80"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow border-t-4 border-gray-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-[#111111] uppercase tracking-wide">{service.title}</h3>
                </div>
                <p className="text-red-600 font-bold text-sm mb-4">Starting from {service.price}</p>
                <p className="text-gray-600 mb-8 flex-grow font-bold text-sm leading-relaxed">{service.desc}</p>
                
                <button 
                  onClick={() => handleBook(service.title)}
                  className="w-full py-4 text-center bg-[#111111] border border-transparent text-white font-black uppercase tracking-widest text-[10px] hover:bg-primary transition-colors shadow-lg"
                >
                  Book on WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
