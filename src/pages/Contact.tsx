import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
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
            Get In Touch
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-bold tracking-widest text-xs uppercase">
            Book a service, inquire about products, or just drop by for a coffee and bike talk.
          </p>
        </div>
      </section>

      <section className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 border border-gray-200 border-t-8 border-t-primary shadow-sm"
          >
            <h2 className="text-3xl font-black text-[#111111] mb-8 uppercase tracking-tighter">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-[#F3F4F6] border-l-4 border-transparent focus:border-primary text-[#111111] px-4 py-3 focus:outline-none transition-colors font-bold text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input type="tel" required className="w-full bg-[#F3F4F6] border-l-4 border-transparent focus:border-primary text-[#111111] px-4 py-3 focus:outline-none transition-colors font-bold text-sm" />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input type="email" required className="w-full bg-[#F3F4F6] border-l-4 border-transparent focus:border-primary text-[#111111] px-4 py-3 focus:outline-none transition-colors font-bold text-sm" />
              </div>
              
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Service Required / Subject</label>
                <select className="w-full bg-[#F3F4F6] border-l-4 border-transparent focus:border-primary text-[#111111] px-4 py-3 focus:outline-none transition-colors appearance-none font-bold text-sm">
                  <option>General Inquiry</option>
                  <option>Book a Service</option>
                  <option>Parts & Accessories</option>
                  <option>Custom Modification</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={5} required className="w-full bg-[#F3F4F6] border-l-4 border-transparent focus:border-primary text-[#111111] px-4 py-3 focus:outline-none transition-colors font-bold text-sm"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-[#111111] text-white font-black uppercase tracking-widest text-xs hover:bg-primary transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 border border-gray-200 border-l-4 border-l-[#111111] text-center shadow-sm">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-[#111111] font-black mb-2 uppercase tracking-wide">Location</h3>
                <p className="text-gray-600 text-xs font-bold">123 Rider Avenue<br/>Auto District<br/>Metropolis, MC 10001</p>
              </div>
              <div className="bg-white p-8 border border-gray-200 border-l-4 border-l-[#111111] text-center shadow-sm">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-[#111111] font-black mb-2 uppercase tracking-wide">Contact</h3>
                <p className="text-gray-600 text-xs font-bold mb-1">+91 999 999 9999</p>
                <p className="text-gray-600 text-xs font-bold">service@ridex.com</p>
              </div>
              <div className="bg-[#111111] p-8 border border-gray-800 text-center md:col-span-2 shadow-sm border-t-4 border-t-primary">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-white font-black mb-2 uppercase tracking-wide">Business Hours</h3>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 max-w-xs mx-auto mt-4 uppercase tracking-widest">
                  <span>Monday - Friday:</span>
                  <span className="text-white">09:00 AM - 08:00 PM</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 max-w-xs mx-auto mt-2 uppercase tracking-widest">
                  <span>Saturday:</span>
                  <span className="text-white">09:00 AM - 06:00 PM</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 max-w-xs mx-auto mt-2 uppercase tracking-widest">
                  <span>Sunday:</span>
                  <span className="text-primary font-black">CLOSED</span>
                </div>
              </div>
            </div>

            <div className="h-64 bg-gray-200 border-4 border-white w-full flex items-center justify-center p-4 shadow-sm relative">
              <div className="absolute inset-0 opacity-10 dense-pattern-light pointer-events-none"></div>
               <div className="text-center relative z-10">
                 <MapPin className="w-12 h-12 text-gray-700 mx-auto mb-2" />
                 <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Interactive Map Placeholder</p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>
      
      {/* Floating Action Button for WhatsApp */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Contact on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}
