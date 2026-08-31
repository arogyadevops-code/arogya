import React from 'react';
import { Button } from '../ui/Button'; // Adjusted path if necessary

export function AboutCTA() {
  return (
    <section className="py-24 lg:py-32 bg-forest-dark text-ivory relative overflow-hidden">
      
      {/* Botanical Background Hint */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundBlendMode: "luminosity"
           }}>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
          Take the first step toward natural healing.
        </h2>
        <p className="text-xl text-ivory/80 font-light mb-12">
          Personalized Ayurvedic care tailored to individual wellness needs.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-5">
            Book Your Appointment →
          </Button>
          <a href="#" className="text-gold hover:text-white transition-colors duration-300 underline underline-offset-4 tracking-wide">
            Talk to Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
