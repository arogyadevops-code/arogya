"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function CarePlansHero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-transparent z-10 pt-20">
      
      {/* Background Image with Parallax & Blur */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <Image 
          src="/images/care_plans_hero_bg.webp"
          alt="Ayurvedic Wellness Consultation Room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-dark/40 backdrop-blur-[2px]" />
        {/* Soft gradient fade into the next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-ivory to-transparent" />
      </div>

      {/* Floating Glassmorphism Content Card */}
      <div className="relative z-10 px-4 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 rounded-[2rem] shadow-2xl text-center relative overflow-hidden"
        >
          {/* Subtle gold glow inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none" />

          <span className="relative flex items-center justify-center gap-4 text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-gold mb-8">
            <span className="w-12 h-[1px] bg-gold block"></span>
            Specialized Care
            <span className="w-12 h-[1px] bg-gold block"></span>
          </span>
          
          <h1 className="relative text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-sm">
            Holistic Healing Programs
          </h1>
          
          <p className="relative text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Discover our meticulously crafted Ayurvedic care plans designed to restore balance, heal chronic conditions, and elevate your well-being naturally.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
