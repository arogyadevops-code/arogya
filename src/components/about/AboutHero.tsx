"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutData } from '@/data/about';

export function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-16 overflow-hidden bg-transparent text-text-dark z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            style={{ y: yText, opacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-gold tracking-[0.2em] uppercase text-sm font-semibold mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block"></span>
              ABOUT AROGYA AYURVEDA
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-forest-primary leading-[1.1] mb-8">
              {aboutData.hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed mb-10">
              {aboutData.hero.description}
            </p>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-[50vh] lg:h-[65vh] w-full rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <motion.div style={{ y: yBackground, height: "120%" }} className="absolute -top-[10%] -bottom-[10%] w-full">
              <Image 
                src="/about_hero_ayurveda.jpg"
                alt="Authentic Kerala Ayurvedic Treatment Environment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-forest-dark/10"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-forest-primary">Discover Our Story</span>
        <span className="text-gold">↓</span>
      </motion.div>
    </section>
  );
}
