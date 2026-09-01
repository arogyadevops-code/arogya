"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { programsData } from '@/data/programs';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function TransformationalPrograms() {
  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark relative z-20 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <p className="text-forest-primary tracking-[0.2em] uppercase text-sm font-semibold mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-forest-primary block"></span>
            TRANSFORMATIONAL PROGRAMS
            <span className="w-8 h-[1px] bg-forest-primary block"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-primary leading-tight">
            Guided by the timeless wisdom of Ayurveda
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programsData.map((program) => (
            <motion.div variants={itemVariants} key={program.id} className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
              
              {/* Background Image */}
              <Image 
                src={program.image}
                alt={program.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Default Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent transition-opacity duration-700"></div>
              
              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-forest-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px]"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-serif mb-2 group-hover:-translate-y-4 transition-transform duration-700">
                  {program.title}
                </h3>
                
                {/* Reveal on hover */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 delay-100 flex flex-col justify-end">
                  <p className="text-white/80 font-light mb-6">
                    {program.description}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
      
      {/* Blend into Why Arogya (Forest Green) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-forest-primary/20 pointer-events-none"></div>
    </section>
  );
}
