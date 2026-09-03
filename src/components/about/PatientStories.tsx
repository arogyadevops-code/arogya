"use client";
import React, { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function PatientStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark overflow-hidden relative z-10">
      
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 lg:top-20 lg:left-32 text-[15rem] font-serif text-forest-primary/5 leading-none select-none pointer-events-none">
        "
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <p className="text-forest-primary tracking-[0.2em] uppercase text-sm font-semibold mb-16 flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-forest-primary block"></span>
          HEAR FROM OUR PATIENTS
          <span className="w-8 h-[1px] bg-forest-primary block"></span>
        </p>

        <div className="relative min-h-[300px] flex items-center justify-center">
          
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`absolute top-1/2 -translate-y-1/2 left-0 w-full transition-all duration-1000 ease-in-out text-center ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0 pointer-events-auto' 
                  : index < currentIndex 
                    ? 'opacity-0 -translate-x-full pointer-events-none' 
                    : 'opacity-0 translate-x-full pointer-events-none'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-serif text-forest-dark leading-relaxed md:leading-normal mb-12 max-w-3xl mx-auto">
                "{testimonial.quote}"
              </h3>
              
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                
                {/* Name and Arrows Container */}
                <div className="flex items-center gap-6 mt-2">
                  <button 
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-forest-primary/20 text-forest-primary flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <p className="text-xl font-medium tracking-wide text-forest-primary min-w-[150px]">
                    {testimonial.name}
                  </p>
                  
                  <button 
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-forest-primary/20 text-forest-primary flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 pointer-events-auto cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
