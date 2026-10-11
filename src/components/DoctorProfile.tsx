"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const specialties = [
  "Pain Management",
  "Digestive Health",
  "Women's Wellness",
  "Panchakarma Therapies",
  "Holistic Healing & Preventive Care"
];

export function DoctorProfile() {
  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark relative z-10 overflow-hidden">
      
      {/* Decorative leaf background */}
      <div className="absolute top-[20%] -right-32 w-[600px] h-[600px] z-0 pointer-events-none opacity-10 mix-blend-multiply origin-right">
        <Image src="/branch_right.webp" alt="Botanical leaf right" fill className="object-contain" sizes="600px" quality={100} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Left: Doctor Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            {/* Elegant Image Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/doctor-salwa.webp" 
                alt="Dr. Salwa Sanajil" 
                fill 
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[8px] border-white/20 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-3xl rounded-bl-3xl pointer-events-none"></div>
            </div>
            
            {/* Minimal Gold Accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-gold rounded-full opacity-30 -z-10 hidden md:block"></div>
          </motion.div>

          {/* Right: Doctor Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-forest-dark mb-4">
              Dr. Salwa Sanajil
            </h2>
            
            <p className="text-gold tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-8">
              BAMS • DOH LICENSED AYURVEDA PRACTITIONER
            </p>
            
            <p className="text-lg text-text-muted font-light leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0">
              Dedicated to restoring health through authentic Ayurveda with over 5 years of clinical excellence. Specializing in comprehensive wellness, holistic healing, and preventive care.
            </p>

            {/* Specialties List */}
            <div className="flex flex-col gap-4">
              {specialties.map((item, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  key={index}
                  className="flex items-center gap-6 bg-white border border-border rounded-full py-4 px-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-md mx-auto lg:mx-0 group"
                >
                  <div className="w-2.5 h-2.5 bg-gold rotate-45 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-text-dark font-serif text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
