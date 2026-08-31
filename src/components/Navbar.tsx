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
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-border shadow-sm py-2' 
          : 'bg-white border-transparent py-4'
      } text-text-dark`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 transition-all duration-500">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 font-serif text-3xl tracking-widest font-semibold flex items-center gap-2 cursor-pointer group text-forest-dark">
            <div className="w-8 h-8 rounded-full border border-forest-dark flex items-center justify-center text-forest-dark group-hover:bg-forest-dark group-hover:text-white transition-all duration-500">
              <span className="font-serif text-sm">A</span>
            </div>
            AROGYA
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-sans tracking-[0.15em] uppercase font-semibold text-text-dark">
            <Link href="/" className="relative group hover:text-gold transition-colors duration-300">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="relative group hover:text-gold transition-colors duration-300">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/treatments" className="relative group hover:text-gold transition-colors duration-300">
              Treatments
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/care-plans" className="relative group hover:text-gold transition-colors duration-300">
              Care Plans
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="relative group hover:text-gold transition-colors duration-300">
              Contact
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="primary" size="sm" className="bg-forest-dark text-white hover:bg-forest-primary border-none font-medium tracking-wide text-xs px-6 py-2.5 rounded-md">
              Book Appointment
            </Button>
            <div className="p-2.5 rounded-md bg-forest-soft text-forest-dark hover:bg-gold hover:text-white cursor-pointer transition-all duration-300">
              <Phone className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center text-forest-dark">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 transition-colors duration-300">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 top-[72px] bg-ivory transition-all duration-500 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } z-40`}
      >
        <div className="flex flex-col h-full px-8 pt-10 pb-16 overflow-y-auto">
          <div className="flex flex-col space-y-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">About</Link>
            <Link href="/treatments" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Treatments</Link>
            <Link href="/care-plans" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Care Plans</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-forest-dark hover:text-gold transition-colors">Contact</Link>
          </div>
          
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <Button variant="primary" className="w-full bg-forest-dark text-white hover:bg-forest-primary py-4 text-sm font-medium tracking-wide rounded-md">
              Book Appointment
            </Button>
            <Button variant="outline" className="w-full py-4 text-sm font-medium tracking-wide border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white rounded-md">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
