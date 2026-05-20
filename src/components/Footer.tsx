import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-4 shrink-0 border-t-[3px] border-primary/95 relative mesh-grid opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-white font-black text-xs font-display">BM</div>
              </div>
              <span className="text-white font-black ml-2 text-xl tracking-tighter uppercase font-display italic">
                BIKE<span className="text-primary">MAGIC</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Premium motorcycle custom build workshop & performance parts catalog. We provide world-class custom engineering and styling accessories for real riders.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BikeMagicOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1C1B1B] border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mybikemagic/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1C1B1B] border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1C1B1B] border border-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-gray-500 font-display">Navigation</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-300 font-display">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/store" className="hover:text-primary transition-colors">Accessories Store</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/stories" className="hover:text-primary transition-colors">Customer Stories</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-gray-500 font-display">Tuning & Custom Shop</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-300 font-display">
              <li><Link to="/services" className="hover:text-primary transition-colors">Stage 1-3 ECU Remaps</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Custom Crash Protection</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Exhaust Fitting</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">CNC Billet Enhancements</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">9H Ceramic Detailing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6 text-gray-500 font-display">HQ Workshop</h3>
            <ul className="space-y-4 text-xs text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="leading-relaxed">Shop No. 1/12, Opposite Canara Bank, 3rd Cross, JC Road, Bangalore - 560002, Karnataka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 98285 25294</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>info@bikemagicshop.com</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-500 font-display">Build Alerts</h4>
              <div className="flex">
                <input type="text" placeholder="EMAIL OR WHATSAPP..." className="bg-[#1C1B1B] text-white px-4 py-3 w-full font-bold text-[10px] uppercase focus:outline-none border border-gray-800 border-r-0 focus:border-primary transition-all rounded-none" />
                <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 font-black uppercase text-[10px] transition-colors font-display rounded-none shadow-lg shadow-[#25D366]/10 border border-[#25D366] hover:border-[#128C7E]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-850 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-gray-500 font-display">
          <p>
            &copy; {new Date().getFullYear()} BIKE MAGIC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute top-1/2 -right-16 md:right-8 transform -translate-y-1/2 w-12 h-12 bg-[#1C1B1B] border border-gray-800 hover:bg-primary flex items-center justify-center text-white transition-all shadow-lg hidden md:flex"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
