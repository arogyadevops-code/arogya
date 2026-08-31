"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { carePlans } from '@/data/carePlans';
import { ArrowRight } from 'lucide-react';

export function CarePlanGrid() {
  return (
    <section className="py-24 bg-ivory text-text-dark relative z-10 overflow-hidden">
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {carePlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-forest-primary/5 shadow-xl shadow-forest-dark/5 hover:shadow-2xl hover:shadow-forest-primary/10 transition-all duration-500 flex flex-col h-full relative cursor-pointer"
            >
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 text-ivory font-medium tracking-wide">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow bg-white relative">
                
                <h3 className="text-2xl font-serif text-forest-primary mb-4 group-hover:text-gold transition-colors duration-300">
                  {plan.title}
                </h3>
                
                <p className="text-text-muted font-light leading-relaxed mb-6 flex-grow">
                  {plan.description}
                </p>

                <div className="w-12 h-px bg-gold/30 group-hover:w-full transition-all duration-500 ease-out mt-auto" />
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
