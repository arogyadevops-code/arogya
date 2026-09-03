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
      <BotanicalDecoration variant="leaf2" className="bottom-0 right-0 w-[300px] h-[300px] -mb-10 -mr-10 opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="w-12 h-[1px] bg-forest-dark/30"></div>
             <p className="text-forest-dark tracking-[0.2em] uppercase text-xs font-semibold">
               HEAR FROM OUR PATIENTS
             </p>
             <div className="w-12 h-[1px] bg-forest-dark/30"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4 flex flex-col items-center text-center">
                  <p className="text-2xl md:text-3xl font-serif text-forest-dark leading-relaxed mb-10 font-light max-w-3xl mx-auto">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  <div className="flex gap-1 mb-6 text-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <div className="font-sans flex items-center justify-center gap-6 mt-2">
                     <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-forest-soft/50 text-forest-primary flex items-center justify-center hover:bg-forest-light transition-colors cursor-pointer">
                       <ChevronLeft className="w-5 h-5" />
                     </button>
                     
                     <div className="flex flex-col items-center min-w-[150px]">
                       <p className="font-medium text-forest-dark text-lg">{testimonial.name}</p>
                     </div>
                     
                     <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-forest-soft/50 text-forest-primary flex items-center justify-center hover:bg-forest-light transition-colors cursor-pointer">
                       <ChevronRight className="w-5 h-5" />
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
