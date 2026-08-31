"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { BotanicalDecoration } from './ui/BotanicalDecoration';

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-24 lg:py-32 bg-ivory text-text-dark overflow-hidden z-10">
      <BotanicalDecoration variant="leaf1" className="top-0 left-0 w-[300px] h-[300px] -mt-10 -ml-10 opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">
            WHAT OUR CLIENTS SAY
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4 flex flex-col items-center text-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-forest-dark leading-relaxed mb-10 italic font-light">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  <div className="flex gap-1 mb-6 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <div className="font-sans">
                    <p className="font-medium text-forest-primary text-base uppercase tracking-widest mb-1">— {testimonial.name}</p>
                    <p className="text-text-muted text-xs uppercase tracking-wider">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 w-12 h-12 rounded-full border border-forest-soft text-forest-primary flex items-center justify-center hover:bg-forest-light transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 w-12 h-12 rounded-full border border-forest-soft text-forest-primary flex items-center justify-center hover:bg-forest-light transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
