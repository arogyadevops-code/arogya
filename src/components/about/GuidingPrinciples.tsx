"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { aboutData } from '@/data/about';
import { BotanicalDecoration } from '../ui/BotanicalDecoration';

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function GuidingPrinciples() {
  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark relative z-20 overflow-hidden border-t border-border">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="max-w-3xl mb-24"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gold block"></span>
            OUR GUIDING PRINCIPLES
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-dark leading-tight mb-8">
            The values and purpose that inspire our commitment to holistic healing.
          </h2>
        </motion.div>

        <div className="space-y-16 lg:space-y-24 max-w-5xl">
          
          {/* Mission */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start group border-b border-border pb-16 lg:pb-24"
          >
            <div className="w-full lg:w-1/3">
              <span className="text-5xl md:text-6xl font-serif text-forest-soft block mb-4 group-hover:text-gold transition-colors duration-500 font-light">01</span>
              <h3 className="text-2xl font-serif text-forest-dark uppercase tracking-widest">Our Mission</h3>
            </div>
            <div className="w-full lg:w-2/3 lg:pt-4">
              <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed">
                To empower individuals and families to live healthier, happier lives through <span className="text-forest-dark group-hover:text-forest-primary transition-colors duration-500 font-medium">authentic Ayurvedic healthcare</span>, personalized treatment plans, and natural solutions that address the root cause of illnesses rather than just the symptoms.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start group border-b border-border pb-16 lg:pb-24"
          >
            <div className="w-full lg:w-1/3">
              <span className="text-5xl md:text-6xl font-serif text-forest-soft block mb-4 group-hover:text-gold transition-colors duration-500 font-light">02</span>
              <h3 className="text-2xl font-serif text-forest-dark uppercase tracking-widest">Our Vision</h3>
            </div>
            <div className="w-full lg:w-2/3 lg:pt-4">
              <p className="text-xl md:text-2xl text-text-muted font-light leading-relaxed">
                To become one of the <span className="text-forest-dark group-hover:text-forest-primary transition-colors duration-500 font-medium">most trusted Ayurveda healthcare centers</span> in the UAE by delivering genuine care, promoting preventive healthcare, and inspiring communities to adopt a healthier lifestyle.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start group"
          >
            <div className="w-full lg:w-1/3">
              <span className="text-5xl md:text-6xl font-serif text-forest-soft block mb-4 group-hover:text-gold transition-colors duration-500 font-light">03</span>
              <h3 className="text-2xl font-serif text-forest-dark uppercase tracking-widest">Our Values</h3>
            </div>
            <div className="w-full lg:w-2/3 lg:pt-4">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {aboutData.principles.values.map((value, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 text-lg text-text-muted font-serif group-hover:text-forest-dark transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 block"></span>
                    {value}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
