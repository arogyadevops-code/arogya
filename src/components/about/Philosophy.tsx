"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutData } from '@/data/about';

export function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="py-24 lg:py-40 bg-cream text-text-dark relative overflow-hidden z-20 shadow-xl rounded-t-[4rem] rounded-b-[4rem] -mb-16 pb-32">
      
      {/* Decorative Botanical Vectors */}
      <motion.div style={{ y: y1 }} className="absolute -top-32 -left-32 w-96 h-96 border-[1px] border-forest-primary/5 rounded-full opacity-50" />
      <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-32 w-64 h-64 border-[1px] border-gold/10 rounded-full opacity-50" />
      <motion.div style={{ y: y3 }} className="absolute -bottom-16 left-1/4 w-48 h-48 border-[1px] border-forest-primary/10 rounded-full opacity-50" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-forest-primary leading-tight mb-8">
          "{aboutData.philosophy.statement}"
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="h-[1px] bg-gold mx-auto mb-8" 
        />
        <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed">
          {aboutData.philosophy.description}
        </p>
      </motion.div>
    </section>
  );
}
