import React from 'react';
import { motion } from 'motion/react';
import { Target, Award, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* Header */}
      <section className="relative py-24 bg-[#111111] overflow-hidden border-b-8 border-primary">
        <div className="absolute inset-0 opacity-20 dense-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            Our Story
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-bold tracking-widest text-xs uppercase">
            Passionate mechanics, premium gear, & an unmatched dedication to motorcycles.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Workshop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#111111] border-l-8 border-primary text-white p-8 max-w-xs shadow-2xl hidden md:block">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Since 2011</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Building trust through precision engineering.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-black uppercase tracking-widest text-[#E50914] mb-2">The RideX Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#111111] mb-8 uppercase tracking-tighter">We Don't Just Fix Bikes,<br/>We Elevate The Ride.</h3>
              
              <div className="space-y-6 text-gray-600 font-bold leading-relaxed mb-10 text-sm">
                <p>Founded by a group of passionate racers and mechanics, RideX was born from a simple idea: riders deserve a workshop that treats their machines with the same obsession they do.</p>
                <p>Over the past decade, we have grown from a small neighborhood garage into a state-of-the-art service center and premium accessories destination. We source only the finest parts and employ master technicians.</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 border-l-4 border-[#111111] shadow-sm">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-[#111111] font-black uppercase mb-2 text-sm tracking-wider">Our Mission</h4>
                  <p className="text-xs font-bold text-gray-500">To provide unparalleled motorcycle care and equip riders for the journey ahead.</p>
                </div>
                <div className="bg-white p-6 border-l-4 border-primary shadow-sm">
                  <Award className="w-8 h-8 text-[#111111] mb-4" />
                  <h4 className="text-[#111111] font-black uppercase mb-2 text-sm tracking-wider">Quality Guarantee</h4>
                  <p className="text-xs font-bold text-gray-500">Every service comes with our personal seal of approval and quality warranty.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#111111] border-y-8 border-primary">
        <div className="absolute inset-0 opacity-10 dense-pattern pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#E50914] mb-2">The Experts</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Meet Our Team</h3>
            <div className="w-24 h-2 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { name: 'Alex Thompson', role: 'Head Mechanic', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Sarah Miller', role: 'Accessories Specialist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'David Chen', role: 'Performance Tuner', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500 border-b-4 border-white group-hover:border-primary">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black text-white mb-1 uppercase tracking-wider">{member.name}</h4>
                  <p className="text-primary text-[10px] font-bold tracking-widest uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
