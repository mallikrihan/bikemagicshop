import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Stories', path: '/stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b-[3px] border-primary/95 shrink-0',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      {/* Top sliding marquee bar */}
      <div className={cn(
        "bg-[#111111] border-b border-gray-900/60 py-2 text-[9px] font-black tracking-widest text-gray-300 uppercase font-display transition-all duration-300 overflow-hidden flex items-center",
        scrolled ? "max-h-0 py-0 border-b-0 opacity-0" : "max-h-8 opacity-100"
      )}>
        {/* @ts-ignore */}
        <marquee scrollamount="6" className="w-full flex items-center">
          <span className="inline-flex items-center gap-12 px-4 pt-0.5">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> WORKSHOP STATUS: ONLINE</span>
            <span className="text-primary">★</span>
            <span>LIVE CAPACITY: 82%</span>
            <span className="text-primary">★</span>
            <span>J.C. ROAD, BANGALORE</span>
            <span className="text-primary">★</span>
            <span>HQ TUNING DESK</span>
            <span className="text-primary">★</span>
            <span>PREMIUM EXHAUSTS</span>
            <span className="text-primary">★</span>
            <span>ECU REMAPPING</span>
          </span>
        {/* @ts-ignore */}
        </marquee>
      </div>

      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300", scrolled ? "py-3" : "py-4.5")}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
              <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500 text-white font-black text-sm font-display">BM</div>
            </div>
            <span className="text-black font-black text-xl tracking-tighter uppercase ml-1 italic font-display">
              BIKE<span className="text-primary">MAGIC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[10px] font-black tracking-widest uppercase transition-all py-2.5 px-4 font-display',
                  location.pathname === link.path
                    ? 'text-white bg-primary'
                    : 'text-gray-800 hover:text-white hover:bg-primary/80'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+919828525294" className="bg-primary hover:bg-red-700 text-white px-4 py-2.5 text-[8.5px] font-black uppercase tracking-wider transition-all shadow-md shadow-red-950/20 flex items-center gap-1.5 font-display hover:-translate-y-0.5 ml-2">
              <Phone className="w-3 h-3" /> Call Workshop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-primary transition-colors p-2 border border-gray-300 bg-white shadow-sm">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden border-b-2 border-primary/80 shadow-xl',
          isOpen ? 'max-h-96' : 'max-h-0 border-b-0'
        )}
      >
        <div className="px-4 py-2 space-y-0 bg-white divide-y divide-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block py-4 text-xs font-black tracking-widest uppercase transition-colors px-4 -mx-4 font-display',
                location.pathname === link.path ? 'text-white bg-primary' : 'text-gray-800 hover:text-white hover:bg-primary/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
