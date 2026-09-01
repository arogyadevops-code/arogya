"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-all duration-700 mx-auto ${
        scrolled 
          ? 'top-0 lg:top-4 max-w-6xl bg-white/95 backdrop-blur-xl border-b lg:border border-gold/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] lg:rounded-full py-3 lg:py-2 px-4' 
          : 'top-0 w-full bg-transparent border-b border-transparent py-4 lg:py-6 px-4'
      } text-text-dark`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-16 transition-all duration-700">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-md group-hover:scale-105">
              <span className="font-serif text-lg lg:text-xl">A</span>
            </div>
            <span className="font-serif text-xl lg:text-2xl tracking-[0.2em] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-forest-dark to-forest-primary">
              AROGYA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-xs font-sans tracking-[0.15em] uppercase font-semibold text-text-muted">
            {['Home', 'About', 'Treatments', 'Care Plans', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="relative group overflow-hidden px-1 py-2"
              >
                <span className="group-hover:text-forest-dark transition-colors duration-500">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="p-2.5 rounded-full border border-forest-dark/10 text-forest-dark hover:border-gold hover:text-gold cursor-pointer transition-all duration-500 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <Button 
              variant="primary" 
              className="group relative overflow-hidden bg-forest-dark text-white border-none font-medium tracking-[0.1em] text-[11px] uppercase px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-gold transition-colors duration-500">Book Appointment</span>
              <div className="absolute inset-0 h-full w-full bg-forest-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center text-forest-dark">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-forest-soft/30 rounded-full transition-colors duration-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-0 pt-24 bg-ivory/95 backdrop-blur-lg transition-all duration-500 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } -z-10`}
      >
        <div className="flex flex-col h-full px-8 pb-16 overflow-y-auto">
          <div className="flex flex-col space-y-8 mt-4 text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">About</Link>
            <Link href="/treatments" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Treatments</Link>
            <Link href="/care-plans" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Care Plans</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Contact</Link>
          </div>
          
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <Button variant="primary" className="w-full rounded-full bg-forest-dark text-white hover:bg-forest-primary py-4 text-sm font-medium tracking-wide">
              Book Appointment
            </Button>
            <Button variant="outline" className="w-full rounded-full py-4 text-sm font-medium tracking-wide border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
