"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const whyFeatures = [
  {
    id: "01",
    title: "Authentic Ayurveda",
    description: "Time-tested therapies rooted in classical Ayurvedic principles.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
        <path d="M12 2V8" />
        <path d="M12 16V22" />
        <path d="M2 12H8" />
        <path d="M16 12H22" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Personalised Approach",
    description: "Care plans tailored to your unique constitution and wellness goals.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )
  },
  {
    id: "03",
    title: "Experienced Practitioners",
    description: "Qualified Ayurvedic experts with years of clinical experience.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  },
  {
    id: "04",
    title: "Holistic Wellness",
    description: "Treating the root cause and supporting balance of body, mind and spirit.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
      </svg>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function WhyArogya() {
  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark relative z-10 overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] z-0 pointer-events-none opacity-20 mix-blend-multiply origin-left">
        <Image src="/branch_left.jpg" alt="Botanical leaf left" fill className="object-contain" sizes="500px" quality={100} />
      </div>
      <div className="absolute bottom-[0%] -right-20 w-[600px] h-[600px] z-0 pointer-events-none opacity-20 mix-blend-multiply origin-right">
        <Image src="/branch_right.jpg" alt="Botanical leaf right" fill className="object-contain" sizes="600px" quality={100} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6">
            WHY AROGYA?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-forest-dark">
            Rooted in tradition.<br />Designed for modern life.
          </h2>
        </motion.div>

        {/* 4-Column Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {whyFeatures.map((feature) => (
            <motion.div variants={itemVariants} key={feature.id} className="group flex flex-col items-center text-center">
              
              <div className="mb-6">
                {feature.icon}
              </div>
              
              <div className="text-4xl font-serif text-gold mb-4 leading-none">
                {feature.id}
              </div>
              
              <h3 className="text-lg font-semibold text-forest-dark mb-4 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm text-text-muted font-light leading-relaxed max-w-[250px]">
                {feature.description}
              </p>
              
              {/* Divider lines between columns (Desktop only) */}
              {feature.id !== "04" && (
                <div className="hidden lg:block absolute w-[1px] h-32 bg-border right-0 top-1/2 -translate-y-1/2" style={{ right: `${(4 - parseInt(feature.id)) * 25}%`, zIndex: -1 }}></div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
