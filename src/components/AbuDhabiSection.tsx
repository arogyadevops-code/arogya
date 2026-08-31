import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { MapPin } from 'lucide-react';

export function AbuDhabiSection() {
  return (
    <section className="bg-forest-primary text-ivory flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
          Ayurveda in the heart of<br/>Abu Dhabi
        </h2>
        
        <div className="flex items-start gap-4 mb-10">
          <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
          <div>
            <p className="font-serif text-xl mb-1 text-gold">AROGYA AYURVEDA</p>
            <p className="text-ivory/80 font-light">Abu Dhabi, UAE</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="secondary" withArrow>
            Visit Us
          </Button>
          <Button variant="outline" withArrow>
            Get Directions
          </Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
         {/* Gradient overlay to fade into the green */}
         <div className="absolute inset-0 bg-gradient-to-r from-forest-primary via-forest-primary/50 to-transparent z-10 hidden lg:block" />
         <div className="absolute inset-0 bg-gradient-to-t from-forest-primary via-forest-primary/50 to-transparent z-10 lg:hidden" />
         
         <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop"
            alt="Abu Dhabi Skyline"
            fill
            className="object-cover"
         />
      </div>
    </section>
  );
}
