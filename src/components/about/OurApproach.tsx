"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutData } from '@/data/about';
import { BotanicalDecoration } from '../ui/BotanicalDecoration';

export function OurApproach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-transparent text-text-dark relative z-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6 flex items-center gap-4">
              OUR APPROACH
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-forest-dark max-w-lg">
              {aboutData.approach.heading || "Care that begins with understanding."}
            </h2>
            
            <p className="text-lg text-text-muted font-light leading-relaxed mb-10 max-w-lg">
              {aboutData.approach.statement || "Our Ayurvedic physicians understand you as a whole — your body, mind, lifestyle and environment. We create personalized care plans that address the root cause and support natural healing."}
            </p>

            <div className="mt-8">
              <a 
                href="/about"
                className="inline-flex items-center gap-4 border border-border text-forest-dark px-8 py-3 bg-white hover:bg-forest-light transition-all duration-300 shadow-sm"
              >
                <span className="text-xs font-semibold tracking-wide">Learn More About Us</span>
                <span className="text-forest-primary">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/our_approach.jpg"
                alt="Ayurvedic Treatment Approach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white rounded-2xl p-2 shadow-xl z-20 hidden md:block">
              <div className="border border-border rounded-xl w-32 h-32 flex flex-col items-center justify-center text-center p-4">
                <span className="text-gold mb-2">
                  {/* Subtle SVG icon for authentic ayurveda */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                    <path d="M12 2V8" />
                    <path d="M12 16V22" />
                    <path d="M2 12H8" />
                    <path d="M16 12H22" />
                  </svg>
                </span>
                <span className="text-[10px] text-forest-dark font-bold tracking-[0.2em] uppercase mt-2 leading-tight">
                  Authentic<br/>Ayurveda
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
