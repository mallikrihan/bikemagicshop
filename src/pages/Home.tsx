import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { motion } from 'motion/react';
import { Wrench, Shield, Clock, Flame, ArrowRight, Eye, ShieldAlert, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full relative bg-white overflow-x-hidden">
      <HeroSlider />

      {/* Asymmetrical High-Performance Upgrades Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-gray-200 pb-4">
            <div>
              <div className="text-[10px] font-black uppercase text-primary tracking-[0.25em] mb-1 font-display">HTRZ APPROVED</div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#111111] font-display">
                HOT CUSTOM UPGRADES
              </h2>
            </div>
            <Link to="/store" className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:text-black flex items-center gap-1 mt-4 md:mt-0 font-display">
              Browse All Parts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Promo Card 1: Custom Crash Defense (Tall, Left Column) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 bg-[#111111] border border-gray-900 min-h-[450px] relative overflow-hidden group flex flex-col justify-end p-8"
            >
              <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700">
                <img src="https://m.media-amazon.com/images/I/71e1R1n9wvL.jpg" alt="Crash defense parts" className="w-full h-full object-cover" />
              </div>
              {/* Subtle text protector only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              <div className="relative z-20">
                <div className="bg-primary text-white text-[8px] font-black tracking-widest px-3 py-1 uppercase mb-3 inline-block font-display">
                  CRASH DEFENSE
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 font-display">
                  CHASSIS SLIDERS & GUARDS
                </h3>
                <p className="text-gray-400 text-xs font-medium mb-6 uppercase tracking-wider">
                  Engineered protective gear customized for Royal Enfield, KTM, Dominar & Yamahas.
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-white font-black text-sm font-display">Premium Quality</span>
                  <Link to="/store" className="text-[10px] font-black text-primary tracking-widest uppercase hover:text-white transition-colors flex items-center gap-1 font-display">
                    BUY NOW <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Side Cards Container (8 Columns) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Promo Card 2 & 3 Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Promo Card 2: Mad Dog Lights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-[#111111] border border-gray-900 min-h-[260px] relative overflow-hidden group flex flex-col justify-end p-6"
                >
                  <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700">
                    <img src="https://lrlmotors.com/cdn/shop/products/maddog-scout-combo-aux-light-10-watts-843393.jpg?v=1679063005 " alt="Aux LED lights" className="w-full h-full object-cover" />
                  </div>
                  {/* Subtle text protector only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                  <div className="relative z-20">
                    <div className="bg-primary text-white text-[8px] font-black tracking-widest px-3 py-1 uppercase mb-2 inline-block font-display">
                      LIGHTING SPEC
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1 font-display">
                      MAD DOG LED AUX
                    </h3>
                    <p className="text-gray-400 text-[10px] font-medium mb-4 uppercase tracking-wider">
                      Blast through pure darkness with dynamic, ultra-bright LED modules.
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-850">
                      <span className="text-white font-black text-xs font-display">High Power LEDs</span>
                      <Link to="/store" className="text-[9px] font-black text-primary tracking-widest uppercase hover:text-white transition-colors font-display">
                        EXPLORE
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Promo Card 3: Akrapovič Exhaust */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-[#111111] border border-gray-900 min-h-[260px] relative overflow-hidden group flex flex-col justify-end p-6"
                >
                  <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700">
                    <img src="https://www.fc-moto.de/WebRoot/FCMotoDB/Shops/10207048/5F04/8F08/EDE2/6F9F/A016/AC1E/1407/3DD5/trackraw_silber_ml.jpg" alt="Racing Exhaust" className="w-full h-full object-cover" />
                  </div>
                  {/* Subtle text protector only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

                  <div className="relative z-20">
                    <div className="bg-primary text-white text-[8px] font-black tracking-widest px-3 py-1 uppercase mb-2 inline-block font-display">
                      POWER EXHAUSTS
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1 font-display">
                      RAW RACING PIPE
                    </h3>
                    <p className="text-gray-400 text-[10px] font-medium mb-4 uppercase tracking-wider">
                      Slip-on & full titanium exhausts to maximize power output & acoustics.
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-850">
                      <span className="text-white font-black text-xs font-display">Akrapovič / Yoshimura</span>
                      <Link to="/store" className="text-[9px] font-black text-primary tracking-widest uppercase hover:text-white transition-colors font-display">
                        EXPLORE
                      </Link>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Promo Card 4: Carbon Gear (Wide Banner) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#111111] border border-gray-900 min-h-[170px] relative overflow-hidden group flex flex-col justify-end p-8"
              >
                <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700">
                  <img src="https://www.motostorm.it/images/products/large/caschi_offroad/hjc_c50_primal_rosso.jpg" alt="Carbon racing gear" className="w-full h-full object-cover" />
                </div>
                {/* Subtle text protector only */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />

                <div className="relative z-20 max-w-lg">
                  <div className="bg-primary text-white text-[8px] font-black tracking-widest px-3 py-1 uppercase mb-2 inline-block font-display">
                    PRO RIDER SAFETY
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 font-display">
                    CARBON APPAREL & OFF-ROAD HELMETS
                  </h3>
                  <p className="text-gray-400 text-xs font-medium mb-0 uppercase tracking-wider">
                    Official Dainese racing armor, ECE 22.06 AGV helmets, and heavy-duty carbon Kevlar gloves.
                  </p>
                </div>
                <div className="absolute right-8 bottom-8 z-20 hidden md:block">
                  <Link to="/store" className="bg-primary hover:bg-red-700 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest font-display">
                    SHOP SAFETY SPEC
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-[#111111] text-white border-y-[3px] border-primary/95 relative mesh-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-800 pb-4">
            <div>
              <div className="text-[10px] font-black uppercase text-primary tracking-[0.25em] mb-1 font-display">EXPERTS ON STANDBY</div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white font-display">
                MASTER WORKSHOP SERVICES
              </h2>
            </div>
            <Link to="/services" className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:text-white flex items-center gap-1 mt-4 md:mt-0 font-display">
              Explore All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: 'Superbike Tuning', desc: 'Expert dyno mapping, valve clearances, and high-performance chain fitment to keep your beast running flawlessly.' },
              { icon: Shield, title: '9H Ceramic Detailing', desc: 'Aggressive multi-stage machine compounding and nano-quartz paint coatings to provide liquid mirrors of gloss.' },
              { icon: Clock, title: 'Chassis Upgrades', desc: 'Custom installations of crash cages, touring luggage plates, heavy dual auxiliary lighting, and ECU systems.' }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#1C1B1B]/80 border border-gray-800 p-8 hover:border-primary transition-all relative flex flex-col group backdrop-blur-sm"
              >
                {/* Flair top line */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-300" />

                <service.icon className="w-9 h-9 text-primary mb-6 group-hover:scale-110 transition-transform duration-350" />
                <h3 className="text-base font-black uppercase mb-2 tracking-wide font-display text-white">{service.title}</h3>
                <p className="text-[11px] text-gray-400 mb-8 leading-relaxed font-semibold uppercase tracking-wider">{service.desc}</p>
                <div className="flex justify-between items-center mt-auto border-t border-gray-850 pt-4">
                  <span className="text-xs font-black text-gray-300 uppercase tracking-widest font-display">Tuning Ready</span>
                  <Link to="/services" className="text-[10px] text-primary font-black tracking-widest hover:text-white transition-colors font-display">
                    BOOK SPEC
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Parallax (HTRZ Telemetry Dashboard) */}
      <section className="relative py-16 bg-[#1C1B1B] overflow-hidden flex items-center justify-center border-b-[3px] border-primary/95 mesh-grid-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-x-0 md:divide-x border border-gray-850 md:border-0 divide-gray-800 bg-black/40 p-6 md:p-0">
            {[
              { num: '10K+', label: 'Bikes Serviced', spec: 'Precision Diagnostics' },
              { num: '5K+', label: 'Happy Customers', spec: 'High Raving Feedbacks' },
              { num: '24/7', label: 'Support Available', spec: 'WhatsApp Tuning Desk' }
            ].map((stat, i) => (
              <div key={i} className="p-4 flex flex-col justify-center items-center">
                <div className="text-3xl md:text-5xl font-black text-white mb-2 font-display text-shadow-premium">{stat.num}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary font-display mb-1">{stat.label}</div>
                <div className="text-[8px] font-bold uppercase tracking-wider text-gray-500">{stat.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Mini Store */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-gray-200 pb-4">
            <div>
              <div className="text-[10px] font-black uppercase text-primary tracking-[0.25em] mb-1 font-display">MAGIC OFFERS</div>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-[#111111] font-display">
                PREMIUM RIDER CATALOG
              </h2>
            </div>
            <Link to="/store" className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:text-black flex items-center gap-1 mt-4 md:mt-0 font-display">
              View Entire Store <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: 'https://www.motostorm.it/images/products/large/caschi_integrali/scorpion_exo1500_air_zity_rosso.jpg', name: 'Carbon Racing Helmet', price: '₹14,999', originalPrice: '₹18,500', cat: 'Racing Spec', sale: 'SAVE 19%' },
              { img: 'https://www.motostorm.it/images/products/large/giacche/brema_safer_2_jacket_bianco.jpg', name: 'Leather Riding Jacket', price: '₹8,499', originalPrice: '₹9,999', cat: 'Pro Safety', sale: 'SAVE 15%' },
              { img: 'https://www.motostorm.it/images/products/large/guanti/berik_195106-13.jpg', name: 'Armored Gloves', price: '₹2,999', originalPrice: '₹3,499', cat: 'Pro Safety', sale: 'SAVE 14%' },
              { img: 'https://m.media-amazon.com/images/I/619OBoP7zDL._SX522_.jpg', name: 'Performance Exhaust', price: '₹18,500', originalPrice: '₹22,000', cat: 'Bolt-On Performance', sale: 'SAVE 16%' }
            ].map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white group cursor-pointer flex flex-col shadow-md border border-gray-200 relative"
              >

                <div className="aspect-[4/5] overflow-hidden relative bg-gray-100 p-0 flex items-center justify-center">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col flex-grow border-t border-gray-100">
                  <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em] mb-1 font-display">{prod.cat}</span>
                  <h4 className="text-xs font-black uppercase text-[#111111] font-display min-h-[32px] line-clamp-2 leading-tight">{prod.name}</h4>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest font-display">In Stock</span>
                    <Link to="/store" className="bg-[#111111] text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest group-hover:bg-primary transition-colors font-display">
                      VIEW GEAR
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (HQ Custom Base Callout) */}
      <section className="py-24 relative bg-[#111111] flex items-center justify-center mesh-grid-dark border-t-[3px] border-primary/95">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 w-full">
          <div className="bg-[#1C1B1B] border border-gray-800 p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-primary" />

            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter font-display text-shadow-premium">
              UNLEASH YOUR MACHINE
            </h2>
            <p className="text-xs text-gray-400 mb-8 font-black uppercase tracking-[0.2em]">
              Ready to modify? Chat directly with our Master Tuner or Schedule a workshop slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917947147781?text=Hi%20Bike%20Magic!%20I%20want%20to%20consult%20about%20modifying%20my%20bike!"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-primary text-white font-black uppercase tracking-widest hover:bg-red-700 hover:-translate-y-0.5 transition-all text-xs font-display flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 text-white" /> CONSULT MASTER TUNER
              </a>
              <Link to="/contact" className="px-8 py-4 bg-[#111111] border border-gray-800 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black hover:-translate-y-0.5 transition-all text-xs font-display flex items-center justify-center">
                CONTACT WORKSHOP
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
