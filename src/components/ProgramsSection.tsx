"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "Sustainable weight management with Ayurvedic guidance.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "hair-growth",
    title: "Hair Growth",
    description: "Nourishment and therapies that support stronger, healthier hair.",
    image: "/ayurveda_hair_oil.jpg"
  },
  {
    id: "skin-glowing",
    title: "Skin Glowing",
    description: "Natural care for clear, radiant and healthy looking skin.",
    image: "/ayurveda_skincare.jpg"
  },
  {
    id: "back-pain",
    title: "Back Pain",
    description: "Relief and rehabilitation for chronic back and muscle pain.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop"
  }
];

export function ProgramsSection() {
  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark relative z-10 overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-[30%] -right-20 w-[400px] h-[400px] z-0 pointer-events-none opacity-20 mix-blend-multiply origin-right">
        <Image src="/branch_right.jpg" alt="Botanical leaf right" fill className="object-contain" sizes="400px" quality={100} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6">
            OUR PROGRAMS
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-dark">
            Transforming lives naturally.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden w-full m-2 rounded-xl mb-0">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-lg font-semibold text-forest-dark mb-2 group-hover:text-gold transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-sm text-text-muted font-light leading-relaxed mb-6 flex-grow">
                  {program.description}
                </p>

                {/* Arrow Button */}
                <div className="mt-auto flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-forest-primary group-hover:bg-forest-light group-hover:border-forest-primary transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
