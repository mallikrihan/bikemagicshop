import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-4 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#E50914] flex items-center justify-center rotate-45">
                <div className="-rotate-45 text-white font-black text-sm">RX</div>
              </div>
              <span className="text-white font-black ml-2 text-xl tracking-tighter uppercase">
                RIDEX <span className="text-primary">GARAGE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium motorcycle service center & accessories store. We provide world-class care for your machine and the best gear for your ride.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-6 text-gray-500">Quick Links</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-white">
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
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-6 text-gray-500">Popular Services</h3>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-white">
              <li><Link to="/services" className="hover:text-primary transition-colors">General Bike Service</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Engine Diagnostics</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Performance Tuning</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Custom Modifications</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Wash & Detailing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-6 text-gray-500">Contact Info</h3>
            <ul className="space-y-4 text-xs font-bold text-white">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Rider Avenue, Auto District<br />Metropolis, MC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 999 999 9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>service@ridex.com</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-500">Subscribe</h4>
              <div className="flex">
                <input type="email" placeholder="YOUR EMAIL..." className="bg-[#222222] text-white px-4 py-3 w-full font-bold text-[10px] uppercase focus:outline-none border-l-4 border-transparent focus:border-primary transition-all" />
                <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 font-black uppercase text-[10px] transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t-2 border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-widest text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} RIDEX BIKE GARAGE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="absolute top-1/2 -right-16 md:right-8 transform -translate-y-1/2 w-12 h-12 bg-accent hover:bg-primary flex items-center justify-center rounded-full text-white transition-all shadow-lg hidden md:flex"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
