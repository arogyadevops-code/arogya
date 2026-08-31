"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function CarePlansHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-forest-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-dark/20 to-ivory" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-gold mb-6 block">
            Specialized Care
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ivory leading-tight mb-6">
            Holistic Healing Programs
          </h1>
          <p className="text-lg md:text-xl text-ivory/90 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our meticulously crafted Ayurvedic care plans designed to restore balance, heal chronic conditions, and elevate your well-being.
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Arch */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path 
            d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" 
            fill="#F6F4EB" 
            className="text-ivory"
          ></path>
        </svg>
      </div>
    </section>
  );
}
