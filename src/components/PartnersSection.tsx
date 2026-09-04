"use client";
import React from 'react';

const partners = [
  { name: "AXA", logo: "/images/partners/axa.webp" },
  { name: "Neuron", logo: "/images/partners/neuron.webp" },
  { name: "SAICO Insurance", logo: "/images/partners/saico.webp" },
  { name: "ADNIC", logo: "/images/partners/adnic.webp" },
  { name: "Cigna", logo: "/images/partners/cigna.webp" },
  { name: "Daman", logo: "/images/partners/daman.webp" },
  { name: "FMC", logo: "/images/partners/fmc.webp" },
  { name: "Mednet", logo: "/images/partners/mednet.webp" },
  { name: "MSH", logo: "/images/partners/msh.webp" },
  { name: "NAS", logo: "/images/partners/nas.webp" }
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-cream text-text-dark border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-forest-primary text-center">
          Our Insurance Partners
        </h2>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden flex py-8 bg-white/40 shadow-inner">
        {/* Fading edges for seamless look */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee hover:pause-animation">
          <div className="flex w-max items-center pr-12">
            {partners.map((partner, index) => (
              <div key={`p1-${index}`} className="mx-8 md:mx-12 w-32 md:w-40 flex justify-center items-center h-20 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = partner.name;
                    e.currentTarget.parentElement!.className = "mx-8 md:mx-12 flex items-center justify-center text-xl font-serif text-forest-primary/70 font-semibold uppercase tracking-widest whitespace-nowrap";
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex w-max items-center pr-12">
            {partners.map((partner, index) => (
              <div key={`p2-${index}`} className="mx-8 md:mx-12 w-32 md:w-40 flex justify-center items-center h-20 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = partner.name;
                    e.currentTarget.parentElement!.className = "mx-8 md:mx-12 flex items-center justify-center text-xl font-serif text-forest-primary/70 font-semibold uppercase tracking-widest whitespace-nowrap";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
