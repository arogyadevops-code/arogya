import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { BotanicalDecoration } from '../ui/BotanicalDecoration';

export function TreatmentsCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-forest-light text-text-dark text-center overflow-hidden">
      <BotanicalDecoration variant="leaf2" className="top-0 right-0 w-[400px] h-[400px] -mt-10 -mr-10 opacity-10" />
      <BotanicalDecoration variant="branch" className="bottom-0 left-0 w-[350px] h-[350px] -mb-10 -ml-10 opacity-5" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-6">
          READY FOR BALANCE?
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-dark leading-tight mb-6">
          Begin your journey to wellness.
        </h2>
        <p className="text-xl text-text-muted font-light mb-12 max-w-2xl mx-auto">
          Schedule a consultation with our Ayurvedic experts to discover the treatments best suited for your unique constitution.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="primary" className="bg-forest-dark text-white hover:bg-forest-primary w-full text-lg px-10 py-5" withArrow>
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
