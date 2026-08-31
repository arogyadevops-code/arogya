"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function TreatmentsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-forest-dark text-ivory rounded-b-[4rem] z-20">
      
      {/* Background Image with Parallax */}
      <motion.div style={{ y: yBackground, height: "120%" }} className="absolute -top-[10%] -bottom-[10%] w-full">
        <Image 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
          alt="Ayurvedic Treatments at Arogya"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-forest-dark/60"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ opacity }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm font-semibold mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-gold block"></span>
            OUR SERVICES
            <span className="w-12 h-[1px] bg-gold block"></span>
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif leading-[1.1] mb-8">
            Holistic Healing Therapies
          </h1>
          <p className="text-xl md:text-2xl text-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Authentic, time-tested Ayurvedic treatments tailored to restore your natural state of balance.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-ivory">Explore Treatments</span>
        <span className="text-gold">↓</span>
      </motion.div>

    </section>
  );
}
