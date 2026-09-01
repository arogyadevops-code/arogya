"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function CarePlansHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Transparent overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-forest-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-medium text-forest-primary/70 mb-6 block">
            Specialized Care
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-forest-primary leading-tight mb-6">
            Holistic Healing Programs
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-light max-w-2xl mx-auto leading-relaxed">
            Discover our meticulously crafted Ayurvedic care plans designed to restore balance, heal chronic conditions, and elevate your well-being.
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Arch removed for seamless background */}
    </section>
  );
}
