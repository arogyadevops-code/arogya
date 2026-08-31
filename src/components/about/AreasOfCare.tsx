"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { aboutData } from '@/data/about';

const IMAGES = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629367355289-5f80b9bdc99f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596541223130-5d5660ee276a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
];

export function AreasOfCare() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-cream text-text-dark overflow-hidden relative z-10 rounded-b-[4rem] shadow-xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-forest-primary tracking-[0.2em] uppercase text-sm font-semibold mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-forest-primary block"></span>
              OUR AREAS OF CARE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-primary leading-tight">
              Holistic treatments for <br />complete well-being
            </h2>
          </motion.div>
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border transition-all duration-300 flex items-center justify-center ${canScrollLeft ? 'border-forest-primary/30 text-forest-primary hover:bg-forest-primary hover:text-white hover:scale-105 active:scale-95' : 'border-forest-primary/10 text-forest-primary/30 cursor-not-allowed'}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border transition-all duration-300 flex items-center justify-center ${canScrollRight ? 'border-forest-primary/30 text-forest-primary hover:bg-forest-primary hover:text-white hover:scale-105 active:scale-95' : 'border-forest-primary/10 text-forest-primary/30 cursor-not-allowed'}`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {aboutData.coreAreas.map((area, index) => (
            <div 
              key={area.id} 
              className="min-w-[85vw] sm:min-w-[400px] lg:min-w-[450px] snap-start group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <Image 
                  src={IMAGES[index % IMAGES.length]}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 blur-0 group-hover:blur-[1px]"
                  sizes="(max-width: 768px) 85vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                <div className="absolute top-8 left-8 text-gold font-serif text-3xl font-light">
                  {area.id}
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4 px-2">
                <div>
                  <h3 className="text-2xl font-serif text-forest-primary mb-3 group-hover:text-gold transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-text-muted font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-forest-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:border-gold group-hover:text-white transition-all duration-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(217,169,74,0.4)]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
      
      {/* Blend into Guiding Principles (Ivory) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-ivory/50 pointer-events-none"></div>
    </section>
  );
}
