import React from 'react';
import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section className="py-24 relative z-10 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-forest-light rounded-3xl p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm border border-forest-dark/10">
        
        {/* Column 1: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4">
            NOT SURE WHERE TO BEGIN?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-dark leading-tight">
            Let's create a plan that's right for you.
          </h2>
        </div>
        
        {/* Column 2 & 3: Buttons */}
        <div className="lg:w-1/2 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 w-full">
          <Button variant="primary" size="lg" className="bg-forest-dark text-white hover:bg-forest-primary w-full sm:w-auto shadow-md" withArrow>
            Book Consultation
          </Button>
          <Button variant="outline" size="lg" className="border-forest-dark text-forest-dark hover:bg-forest-dark hover:text-white w-full sm:w-auto bg-transparent">
            WhatsApp Us
          </Button>
        </div>
        
      </div>
    </section>
  );
}
