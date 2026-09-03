import React from 'react';
import Image from 'next/image';

export function PartnersSection() {
  return (
    <section className="py-16 bg-cream text-text-dark border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-forest-primary text-center">
          Our Insurance Partners
        </h2>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Fading edges for seamless look */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee hover:pause-animation">
          <div className="flex w-max items-center h-20 sm:h-24 pr-8">
            <div className="relative w-[800px] h-full overflow-hidden mix-blend-multiply">
              <Image 
                src="/images/insurance-partners.png" 
                alt="Insurance Partners" 
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
          <div className="flex w-max items-center h-20 sm:h-24 pr-8">
            <div className="relative w-[800px] h-full overflow-hidden mix-blend-multiply">
              <Image 
                src="/images/insurance-partners.png" 
                alt="Insurance Partners" 
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
