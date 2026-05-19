import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { motion } from 'motion/react';
import { Wrench, Shield, Clock, ThumbsUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full relative">
      <HeroSlider />
      
      {/* Featured Services */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 border-b-4 border-[#111111] pb-4">
            <h2 className="text-sm font-black uppercase tracking-tighter italic">Our Master Services</h2>
            <Link to="/services" className="text-[10px] font-bold text-red-600 uppercase tracking-widest hover:text-[#111111]">View All Services</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              { icon: Wrench, title: 'General Service', desc: 'Comprehensive multi-point inspection and tuning to keep your machine at peak performance.', price: '₹1,499' },
              { icon: Shield, title: 'Bike Detailing', desc: 'Premium wash, wax, and protective coating to make your bike shine like new.', price: '₹999' },
              { icon: Clock, title: 'Performance Tuning', desc: 'Unleash hidden power with our advanced diagnostic and tuning equipment.', price: '₹4,999' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-8 border-l-8 border-primary shadow-sm hover:shadow-xl transition-all group"
              >
                <service.icon className="w-10 h-10 text-primary mb-6" />
                <div className="text-xs font-black uppercase mb-2 tracking-widest">{service.title}</div>
                <div className="text-[11px] text-gray-500 mb-6 line-clamp-3 font-bold">{service.desc}</div>
                <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                  <span className="text-sm font-black">From {service.price}</span>
                  <Link to="/services" className="text-[10px] text-red-600 font-bold underline cursor-pointer hover:text-black">BOOK NOW</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Parallax */}
      <section className="relative py-16 bg-[#111111] overflow-hidden flex items-center justify-center border-y-4 border-primary">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-2 divide-gray-800">
            {[ 
              { num: '15+', label: 'Years Experience' },
              { num: '10k+', label: 'Bikes Serviced' },
              { num: '5k+', label: 'Happy Customers' },
              { num: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-[#111111]">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.num}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#E50914]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Products Mini Store */}
      <section className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-4 border-[#111111] pb-4">
            <div>
              <h2 className="text-sm font-black uppercase tracking-tighter italic">Accessories Store</h2>
            </div>
            <Link to="/store" className="text-[10px] font-bold text-red-600 uppercase tracking-widest hover:text-[#111111]">
              View All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[ 
              { img: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', name: 'Carbon Racing Helmet', price: '₹14,999', cat: 'Racing' },
              { img: 'https://images.unsplash.com/photo-1598460621648-93661eb1ae72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', name: 'Leather Riding Jacket', price: '₹8,499', cat: 'Safety' },
              { img: 'https://images.unsplash.com/photo-1628151240292-628f8702b37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', name: 'Armored Gloves', price: '₹2,999', cat: 'Safety' },
              { img: 'https://images.unsplash.com/photo-1558981442-1e96f12e841f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', name: 'Performance Exhaust', price: '₹18,500', cat: 'Parts' }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white group cursor-pointer flex flex-col shadow-sm border border-gray-200"
              >
                <div className="aspect-[4/5] overflow-hidden relative bg-[#111111] p-4 flex items-center justify-center">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" />
                </div>
                <div className="p-4 flex flex-col flex-grow border-t-4 border-[#111111] group-hover:border-primary transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest">{prod.cat}</span>
                    <span className="text-[9px] text-yellow-500">★★★★★</span>
                  </div>
                  <h4 className="text-xs font-black uppercase pt-1">{prod.name}</h4>
                  <div className="mt-auto pt-4 flex justify-between items-center">
                    <span className="text-sm font-black">{prod.price}</span>
                    <button className="bg-[#111111] text-white px-3 py-1.5 text-[9px] font-bold uppercase group-hover:bg-primary transition-colors">Buy</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-[#E50914] flex items-center justify-center dense-pattern-light border-y-8 border-[#111111]">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 bg-white p-12 shadow-2xl border-l-8 border-[#111111]">
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] mb-4 uppercase tracking-tighter">Ready to Ride?</h2>
          <p className="text-sm text-gray-600 mb-8 font-bold uppercase tracking-widest">Book your service today or drop by our showroom.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-10 py-4 bg-[#111111] text-white font-black uppercase tracking-widest hover:bg-[#222222] transition-colors border-l-4 border-primary">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
