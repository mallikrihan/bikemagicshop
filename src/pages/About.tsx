import React from 'react';
import { motion } from 'motion/react';
import { Shield, MapPin, Phone, Clock, Star, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white pb-24">
      
      {/* Hero Parallax Header */}
      <section className="relative py-32 overflow-hidden border-b-[3px] border-primary/95 mesh-grid bg-black">
        <div className="absolute inset-0 opacity-15 dense-pattern pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center">
            {/* Live Telemetry Indicators */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-gray-900 rounded-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-400 font-display">
                WORKSHOP STATUS: OPEN NOW
              </span>
              <span className="text-gray-700">|</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-[10px] font-black text-white font-display">4.3 GOOGLE SCORE</span>
              </div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter font-display"
            >
              ABOUT BIKE MAGIC
            </motion.h1>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
            
            <p className="text-xs text-primary max-w-xl mx-auto font-black tracking-[0.25em] uppercase font-display">
              Motorcycle parts store • J.C. Road mods specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Core Showcase Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Premium Unsplash Showroom & Spec Telemetry Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-gray-100 border border-gray-200 overflow-hidden group flex-grow"
            >
              <img 
                src="https://content3.jdmagicbox.com/v2/comp/bangalore/p7/080pxx80.xx80.161116184838.y4p7/catalogue/bike-magic-plus-jc-road-bangalore-motorcycle-accessory-dealers-jgab7joqvl.jpg" 
                alt="Bike Magic JC Road Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter contrast-[1.15]" 
              />
              
              {/* Floating Address Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/90 border-l-[3px] border-primary p-5 border border-gray-950 backdrop-blur-md">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-1 font-display">
                  JC Road HQ Showroom
                </h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-relaxed">
                  Opposite Canara Bank, 3rd Cross, JC Road, Bangalore - 560002
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Real Description and Verified Listing Attributes */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary font-display block mb-2">
                  THE BENGALURU LEGEND
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-[#111111] mb-8 uppercase tracking-tighter font-display leading-tight">
                  ESTABLISHED MODIFICATION STUDIO
                </h2>

                {/* Google Verified Card Attributes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#F4F4F4] border border-gray-200 p-4 flex items-center gap-4 hover:border-primary transition-colors">
                    <Star className="w-7 h-7 text-yellow-500 fill-yellow-500 shrink-0" />
                    <div>
                      <h4 className="text-xs font-black text-[#111111] uppercase tracking-wider font-display">Google Store Score</h4>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">4.3 Stars rating</p>
                    </div>
                  </div>

                  <div className="bg-[#F4F4F4] border border-gray-200 p-4 flex items-center gap-4 hover:border-primary transition-colors">
                    <Compass className="w-7 h-7 text-primary shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-xs font-black text-[#111111] uppercase tracking-wider font-display">Classification</h4>
                      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Motorcycle parts store</p>
                    </div>
                  </div>
                </div>

                {/* REAL DESCRIPTION */}
                <div className="space-y-6 text-gray-600 font-semibold leading-relaxed text-xs uppercase tracking-wider mb-10 border-l-[3px] border-primary pl-6">
                  <p>
                    Bike Magic is a motorcycle accessories and parts store located on JC Road, Bengaluru — an area widely known as the city’s main market for bike modifications, riding gear, spare parts, and touring accessories.
                  </p>
                  <p>
                    The store mainly serves motorcycle enthusiasts looking for aftermarket upgrades, touring setups, protection accessories, lighting systems, and customization work.
                  </p>
                </div>
              </div>

              {/* Action Buttons Call / Directions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200 mt-auto">
                <a 
                  href="tel:09828525294"
                  className="bg-primary hover:bg-black hover:text-white text-white py-4 font-black uppercase tracking-widest text-[10px] font-display flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Call: 098285 25294
                </a>
                
                <a 
                  href="https://maps.google.com/?q=Bike+Magic+JC+Road+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-black hover:text-white text-[#111111] py-4 font-black uppercase tracking-widest text-[10px] font-display flex items-center justify-center gap-2 border border-gray-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary animate-bounce" /> Directions
                </a>
              </div>

            </motion.div>
          </div>

        </div>
        </div>
      </section>

      {/* JC ROAD CREDENTIALS PANEL */}
      <section className="py-20 bg-black border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#1C1B1B]/40 border border-gray-950 p-6 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider font-display mb-1">JC ROAD SPECIALISTS</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                  Located in the beating heart of Bangalore's legendary bike modifications hub.
                </p>
              </div>
            </div>

            <div className="bg-[#1C1B1B]/40 border border-gray-950 p-6 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider font-display mb-1">ENTHUSIAST CENTRIC</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                  Engineered and curated precisely for riders who demand performance upgrades.
                </p>
              </div>
            </div>

            <div className="bg-[#1C1B1B]/40 border border-gray-950 p-6 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider font-display mb-1">COURIER DISPATCH</h4>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                  Fast packing, verified courier tracks, and dispatch support across India.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
