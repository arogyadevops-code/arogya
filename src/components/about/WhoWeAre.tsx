"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutData } from '@/data/about';
import { BotanicalDecoration } from '../ui/BotanicalDecoration';

export function WhoWeAre() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentParts = aboutData.whoWeAre.content;

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-ivory text-text-dark -mt-16 pt-32 lg:pt-48 relative z-10 overflow-hidden">
      <BotanicalDecoration variant="leaf1" className="top-1/4 right-0 w-[400px] h-[400px] -mr-20 opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block"></span>
              WHO WE ARE
            </p>
            
            <h2 className="text-4xl md:text-5xl font-serif text-forest-dark leading-tight mb-10">
              {aboutData.whoWeAre.heading}
            </h2>
            
            <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed">
              <p>
                <strong className="font-semibold text-text-dark">{contentParts[0]}</strong> 
              </p>
              <p>{contentParts[1]}</p>
              <p>{contentParts[2]}</p>
            </div>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 h-[2px] bg-gold/50"
            />
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-white shadow-2xl relative">
              <motion.div style={{ y: yImage, height: "120%" }} className="absolute -top-[10%] w-full">
                <Image 
                  src={aboutData.whoWeAre.image}
                  alt="Arogya Ayurveda Consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
            
            <div className="absolute top-10 -right-8 md:-right-12 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-xl z-20 hidden md:block">
              <div className="border border-gold rounded-full w-24 h-24 flex flex-col items-center justify-center text-center p-2">
                <span className="text-xl font-serif text-forest-primary leading-none mb-1">Authentic</span>
                <span className="text-[10px] text-text-muted font-medium tracking-widest uppercase">Ayurveda</span>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
