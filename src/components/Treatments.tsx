"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { treatmentCategories } from '@/data/treatments';
import { BotanicalDecoration } from './ui/BotanicalDecoration';

export function Treatments() {
  // Only show first 4 for homepage
  const homepageTreatments = treatmentCategories.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark relative overflow-hidden">
      
      {/* Realistic Botanical Decorations on sides */}
      <div className="absolute top-[5%] -right-32 w-[600px] h-[600px] z-0 pointer-events-none opacity-40 mix-blend-multiply origin-right">
        <Image src="/branch_right.jpg" alt="Botanical leaf right" fill className="object-contain" sizes="600px" quality={100} />
      </div>
      <div className="absolute top-[35%] -left-32 w-[600px] h-[600px] z-0 pointer-events-none opacity-40 mix-blend-multiply origin-left">
        <Image src="/branch_left.jpg" alt="Botanical leaf left" fill className="object-contain" sizes="600px" quality={100} />
      </div>
      <div className="absolute bottom-[10%] -right-16 w-[500px] h-[500px] z-0 pointer-events-none opacity-30 mix-blend-multiply rotate-45 origin-right">
        <Image src="/branch_right.jpg" alt="Botanical leaf right bottom" fill className="object-contain" sizes="500px" quality={100} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6">
            OUR TREATMENTS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-dark">
            Ancient wisdom. Modern care.
          </h2>
        </div>

        <div className="space-y-32">
          {homepageTreatments.map((treatment, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={treatment.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-[55%] relative group"
                >
                  <div className="aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl relative">
                    <Image 
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-[45%] flex gap-8 items-start"
                >
                  {/* Large Gold Number */}
                  <div className="text-5xl lg:text-6xl font-serif text-gold leading-none mt-1">
                    {treatment.number}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-serif text-forest-dark leading-tight mb-4">
                      {treatment.title}
                    </h3>
                    
                    <p className="text-base text-text-muted font-light leading-relaxed mb-6">
                      {treatment.shortDescription}
                    </p>

                    <Link 
                      href={`/treatments#${treatment.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-forest-dark hover:text-gold transition-colors group"
                    >
                      <span>Explore Therapies</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        {/* View All Button */}
        <div className="mt-24 text-center">
          <Link 
            href="/treatments"
            className="inline-flex items-center gap-4 border border-border text-forest-dark px-8 py-3 bg-white hover:bg-forest-light transition-all duration-300 shadow-sm"
          >
            <span className="text-xs font-semibold tracking-wide">View All Treatments</span>
            <span className="text-forest-primary">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
