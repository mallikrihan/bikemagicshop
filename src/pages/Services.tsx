import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Wrench, Flame, Eye, Check, ExternalLink, Compass, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

const coreServices = [
  {
    id: 1,
    title: 'Aftermarket Modification & Tuning',
    desc: 'Bespoke mechanical upgrades and custom performance parts. Slip-on exhaust fitting, adjustable levers, custom mirrors, and performance tuning.',
    icon: Flame,
    tag: 'PERFORMANCE',
    price: 'Custom Quote',
    bgImg: 'https://content.jdmagicbox.com/v2/comp/delhi/j4/011pxx11.xx11.180105150821.p7j4/catalogue/mk-designs-india-new-industrial-township-faridabad-nit-faridabad-motorcycle-dealers-xhtfv1twbd-250.jpg'
  },
  {
    id: 2,
    title: 'Crash Guards & Armor Protection',
    desc: 'Heavy-duty safety kits to armor your ride. Professional installation of leg guards, full crash guards, sump guards, engine guards, frame sliders, and radiator armor.',
    icon: Shield,
    tag: 'ARMOR & SAFETY',
    price: 'Standard Fitting Charges Apply',
    bgImg: 'https://helmetracing.in/wp-content/uploads/2025/12/CG-B-RE-HIM-BS6-19A_3-300x300.webp'
  },
  {
    id: 3,
    title: 'Heavy Touring Setup & Carrier Fitting',
    desc: 'Transform your machine into a cross-country touring cruiser. Fitting of premium saddle stays, saddlebags, top boxes, heavy luggage racks, carriers, and backrests.',
    icon: Compass,
    tag: 'TOURING SETUP',
    price: 'Free Fitting with Accessory Purchase',
    bgImg: 'https://gearzone.in/wp-content/uploads/2025/07/ac96853b-35bc-420b-9215-e78924774336.jpg'
  },
  {
    id: 4,
    title: 'High-Intensity Aux Lights & Electricals',
    desc: 'Illuminate the dark. Professional waterproof wiring and installation of auxiliary lights, fog lamps, LED indicators, hazard flashers, USB chargers, and heavy horns.',
    icon: Zap,
    tag: 'LIGHTING & ELECTRICS',
    price: 'Relay & Switches Included',
    bgImg: 'https://auxbeam.in/cdn/shop/products/1_87e704b5-9a4f-4b4d-b287-d3cd2d27c69b_1024x1024.jpg?v=1695718781'
  },
  {
    id: 5,
    title: 'EV Scooter & Commuter Accessories',
    desc: 'Specialized cosmetic and utility armor for modern EV scooters. Custom grab rails, all-around protection guards, backrests, and custom seat covers for Ather, OLA, River Indie, etc.',
    icon: Cpu,
    tag: 'EV & SCOOTERS',
    price: 'All-round Guard Installation',
    bgImg: 'https://m.media-amazon.com/images/I/51HMZct-OrL._SX522_.jpg'
  },
  {
    id: 6,
    title: 'Custom Cosmetic Modifications',
    desc: 'Make heads turn. Premium decal wrap adjustments, custom tank covers, high-contrast mirrors, alloy accessories, colored levers, and custom styling updates.',
    icon: Sparkles,
    tag: 'AESTHETIC STYLING',
    price: 'Full Visual Overhauls',
    bgImg: 'https://i.pinimg.com/474x/ed/49/b1/ed49b1f28477ad3479d1a8d364892e56.jpg'
  },
  {
    id: 7,
    title: 'Regular Servicing & General Care',
    desc: 'Keep your machine in prime running health. High-grade periodic engine oil changes, deep chain cleaning and lubrication, brake pads fitment, electrical checks, and spark plugs service.',
    icon: Wrench,
    tag: 'GENERAL MAINTENANCE',
    price: 'Standard Fitting Charges Apply',
    bgImg: 'https://media.gettyimages.com/id/1354099363/photo/bike-repair.jpg?s=612x612&w=gi&k=20&c=CBYRPSo_rlU4uXWPcPTRDlNpTrHmu7RG-5a6o8bT2ys='
  }
];

const accessoryFamilies = [
  {
    category: 'Safety & Protection',
    items: ['Crash guards', 'Leg guards', 'Frame sliders', 'Engine guards', 'Sump guards', 'Radiator guards']
  },
  {
    category: 'Touring Accessories',
    items: ['Saddle stays', 'Saddle bags', 'Top boxes', 'Panniers', 'Backrests', 'Carriers/luggage racks']
  },
  {
    category: 'Electrical & Lighting',
    items: ['Auxiliary lights', 'Fog lamps', 'LED indicators', 'Hazard flashers', 'USB chargers', 'Horn upgrades']
  },
  {
    category: 'Comfort & Utility',
    items: ['Mobile holders', 'Tank pads', 'Handle risers', 'Windshields/visors', 'Seat covers', 'Grip covers']
  },
  {
    category: 'Riding Gear',
    items: ['Helmets', 'Gloves', 'Riding jackets', 'Knee guards', 'Riding boots']
  },
  {
    category: 'Cosmetic Mods',
    items: ['Decals/stickers', 'Tank covers', 'Custom mirrors', 'Alloy accessories', 'Colored levers', 'Number plate holders']
  }
];

const supportedBikes = [
  'Royal Enfield', 'KTM', 'Yamaha R15/FZ', 'Honda CB350/H’ness',
  'Apache series', 'Kawasaki Ninja', 'Benelli', 'Triumph',
  'Ather EV', 'OLA Electric', 'River Indie EV'
];

export default function Services() {
  const handleConsult = (title: string) => {
    const text = encodeURIComponent(`Hi Bike Magic! I want to consult about customization / accessory installation for: ${title}`);
    window.open(`https://wa.me/917947147781?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#111111] min-h-screen pb-24 text-white">
      {/* Header Panel */}
      <section className="relative py-28 bg-[#111111] overflow-hidden border-b-2 border-primary/20 mesh-grid-dark">
        <div className="absolute inset-0 opacity-15 dense-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/30 text-[9px] font-black tracking-widest text-primary uppercase mb-6 font-display">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            J.C. ROAD SPECIALIST WORKSHOP
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter font-display"
          >
            CUSTOMIZATION <span className="text-primary">&</span> SERVICES
          </motion.h1>

          <p className="text-xs md:text-sm text-gray-400 max-w-2xl mx-auto font-bold tracking-[0.2em] uppercase leading-relaxed">
            Professional installation support and aftermarket armor setups for cross-country touring, racing styling, and high-intensity electrical builds.
          </p>
        </div>
      </section>

      {/* Core Specialties Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest font-display text-white">
            MASTER WORKSHOP SERVICES
          </h2>
          <p className="text-[10px] text-primary font-black uppercase tracking-[0.22em] mt-2">
            WHAT WE SPECIALIZE IN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#1C1B1B] border border-gray-900 group flex flex-col h-full relative overflow-hidden transition-all hover:border-primary/50 shadow-2xl"
              >
                {/* Background image preview with soft bright vignette overlay */}
                <div className="h-48 overflow-hidden relative bg-[#111111]">
                  <div className="absolute inset-0 bg-black/10 z-10 transition-colors group-hover:bg-transparent" />
                  <div className="absolute inset-0 dense-pattern opacity-20 z-10 pointer-events-none" />
                  <img
                    src={service.bgImg}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />

                  {/* Floating technical tag */}
                  <span className="absolute top-4 left-4 z-20 px-2 py-0.5 bg-primary text-white text-[8px] font-black tracking-widest uppercase font-display">
                    {service.tag}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-8 flex flex-col flex-grow relative z-20 border-t border-gray-900">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3 font-display">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-xs font-bold leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <div className="border-t border-gray-800/80 pt-6 flex flex-col gap-4 mt-auto">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                      <span>RATES:</span>
                      <span className="text-primary">{service.price}</span>
                    </div>

                    <button
                      onClick={() => handleConsult(service.title)}
                      className="w-full py-3 text-center bg-[#111111] border border-gray-800 text-white font-black uppercase tracking-widest text-[9px] hover:bg-primary hover:border-primary transition-all duration-300 shadow-md font-display flex items-center justify-center gap-1.5"
                    >
                      <Wrench className="w-3.5 h-3.5" /> Book / Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Commonly Available Accessories Catalog Section */}
      <section className="py-20 bg-[#151515] border-t border-b border-gray-900 mesh-grid-dark relative">
        <div className="absolute inset-0 opacity-10 dense-pattern pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest font-display text-white">
              ACCESSORIES COMMONLY AVAILABLE
            </h2>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.22em] mt-2">
              BROWSE PARTS USUALLY IN STOCK AT BIKE MAGIC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessoryFamilies.map((family, idx) => (
              <motion.div
                key={family.category}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#1C1B1B] border border-gray-900/60 p-8 shadow-2xl hover:border-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-gray-900 pb-4 mb-6">
                  <h3 className="text-sm font-black uppercase tracking-widest text-primary font-display">
                    {family.category}
                  </h3>
                  <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                    FAMILY 0{idx + 1}
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {family.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-gray-300 font-bold">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Compatibility Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest font-display text-white">
            COMPATIBLE MACHINES & BRANDS
          </h2>
          <p className="text-[10px] text-primary font-black uppercase tracking-[0.22em] mt-2">
            WE PROVIDE CUSTOM ACCESSORIES FOR
          </p>
        </div>

        <div className="bg-[#1C1B1B] border border-gray-900 p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 dense-pattern pointer-events-none" />

          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {supportedBikes.map((bike) => (
              <span
                key={bike}
                className="px-5 py-2.5 bg-[#111111] border border-gray-850 hover:border-primary/40 text-xs font-black uppercase tracking-wider text-gray-300 transition-colors font-display"
              >
                {bike}
              </span>
            ))}
          </div>

          <div className="mt-8 text-center border-t border-gray-900 pt-6">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
              Have a machine not listed above?
              <button
                onClick={() => handleConsult('Custom Bike Setup')}
                className="text-primary hover:text-white transition-colors ml-1 uppercase underline underline-offset-4"
              >
                Consult tuning desk
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
