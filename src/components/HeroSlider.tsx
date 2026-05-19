import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Professional Bike Service\n& Premium Accessories',
    subtitle: 'Performance • Style • Reliability'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Master Mechanics\nat Your Service',
    subtitle: 'Expert Tuning • Comprehensive Care'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590634638703-4903c7340656?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'World-Class Gear\nfor Real Riders',
    subtitle: 'Helmets • Jackets • Essentials'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bfce2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Precision Craftsmanship',
    subtitle: 'Detailing • Custom Builds • Upgrades'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#111111] flex flex-col justify-end p-10 mt-[-80px]">
      {/* Background with dense pattern */}
      <div className="absolute inset-0 opacity-20 dense-pattern z-10 pointer-events-none md:block hidden"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={slides[current].image} alt="Motorcycle background" className="absolute object-cover w-full h-full opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-end h-full pb-20">
        <div className="max-w-3xl">
          <div className="text-[#E50914] font-bold text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in shadow-2xl inline-block bg-black/50 px-4 py-2 border-l-4 border-primary">Premium Workshop</div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 whitespace-pre-line uppercase tracking-tighter"
            >
              {slides[current].title}
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 text-sm max-w-sm mb-8 font-bold"
            >
              {slides[current].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start"
          >
            <Link to="/services" className="bg-[#E50914] text-white px-8 py-4 text-xs font-black uppercase hover:bg-red-700 transition-colors shadow-lg tracking-widest text-center">
              Book Service
            </Link>
            <Link to="/store" className="bg-white text-black px-8 py-4 text-xs font-black uppercase hover:bg-gray-200 transition-colors tracking-widest text-center border-l-4 border-black">
              Shop Accessories
            </Link>
          </motion.div>
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white text-black hover:bg-primary hover:text-white transition-all z-20 shadow-xl opacity-50 hover:opacity-100 hidden md:block">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white text-black hover:bg-primary hover:text-white transition-all z-20 shadow-xl opacity-50 hover:opacity-100 hidden md:block">
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-8 right-8 flex gap-2 z-20 pb-10">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`w-12 h-2 transition-all border-l-4 ${current === i ? 'bg-primary border-white' : 'bg-[#222222] border-[#222222] hover:bg-gray-800'}`}
          />
        ))}
      </div>
      
      {/* Floating stat from theme */}
      <div className="absolute top-32 right-10 bg-[#E50914] p-4 text-white text-center shadow-2xl z-20 hidden lg:block border-b-4 border-[#111111]">
        <div className="text-3xl font-black">15+</div>
        <div className="text-[10px] uppercase tracking-tighter font-bold">Years<br/>Excellence</div>
      </div>
    </div>
  );
}
