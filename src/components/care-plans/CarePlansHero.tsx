"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function CarePlansHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-forest-dark">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/care_plans_hero_bg.jpg"
          alt="Ayurvedic Wellness Consultation Room"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Transparent overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-forest-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory/90" />
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
          <p className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our meticulously crafted Ayurvedic care plans designed to restore balance, heal chronic conditions, and elevate your well-being.
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Arch removed for seamless background */}
    </section>
  );
}
