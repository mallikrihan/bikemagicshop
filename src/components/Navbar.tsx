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
    { name: 'Store', path: '/store' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Stories', path: '/stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b-4 border-primary shrink-0',
        scrolled ? 'bg-[#111111] py-3 shadow-lg' : 'bg-[#111111] py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E50914] flex items-center justify-center rotate-45">
              <div className="-rotate-45 text-white font-black text-xl">RX</div>
            </div>
            <span className="text-white font-black text-2xl tracking-tighter uppercase ml-2">
              RIDEX <span className="text-primary">GARAGE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[10px] font-bold tracking-widest uppercase transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+919999999999" className="bg-primary text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-primary transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-[#111111] transition-all duration-300 overflow-hidden border-b-4 border-primary',
          isOpen ? 'max-h-96' : 'max-h-0 border-b-0'
        )}
      >
        <div className="px-4 py-4 space-y-0">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block py-4 text-xs font-black tracking-widest uppercase border-b border-[#222222] last:border-0 relative hover:bg-[#222] px-4 -mx-4',
                location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
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
