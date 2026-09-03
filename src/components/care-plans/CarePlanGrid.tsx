"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { carePlans } from '@/data/carePlans';
import { ArrowRight } from 'lucide-react';

export function CarePlanGrid() {
  return (
    <section className="py-24 bg-transparent text-text-dark relative z-10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50rem] h-[50rem] bg-forest-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-forest-primary mb-6"
          >
            Specialized Care Programs
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto"
          />
        </div>

        <div className="space-y-16 lg:space-y-24 mt-16">
          {carePlans.map((plan, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 group`}
              >
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                  
                  {/* Floating Action Button */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isEven ? 'lg:pr-10' : 'lg:pl-10'}`}>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-serif text-forest-primary/20 font-light">{(index + 1).toString().padStart(2, '0')}</span>
                    <div className="w-12 h-px bg-gold/50" />
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-serif text-forest-dark mb-6 group-hover:text-gold transition-colors duration-500 leading-tight">
                    {plan.title}
                  </h3>
                  
                  <p className="text-lg text-text-muted font-light leading-relaxed mb-10 max-w-lg">
                    {plan.description}
                  </p>

                  <div className="inline-flex items-center gap-3 text-forest-primary font-medium tracking-wide uppercase text-sm border-b border-gold/30 pb-2 w-max hover:border-gold hover:text-gold transition-colors duration-300 cursor-pointer">
                    <span>Explore Program</span>
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
