import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BotanicalDecoration } from '@/components/ui/BotanicalDecoration';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-ivory text-text-dark">
      
      {/* Desktop Full-Bleed Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image 
          src="/hero_desktop.png"
          alt="Premium Ayurvedic Wellness"
          fill
          className="object-cover object-right"
          priority
          sizes="(min-width: 1024px) 100vw, 0vw"
        />
        {/* Soft gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/50 to-transparent"></div>
      </div>

      {/* Mobile background image */}
      <div className="block lg:hidden absolute inset-0 z-0">
        <Image 
          src="/images/hero-mobile.png"
          alt="Premium Ayurvedic Wellness"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 0vw"
        />
        {/* Very soft overlay just to ensure text readability without hiding the image */}
        <div className="absolute inset-0 bg-ivory/40"></div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl text-left relative z-20">
            <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6">
              AYURVEDIC CARE • ABU DHABI
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8 text-forest-dark">
              The Science of Life, <br />
              <span className="font-light italic text-forest-primary">Practised in Full.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-dark/80 mb-10 font-sans font-light leading-relaxed">
              A complete range of traditional Ayurvedic therapies, rejuvenation programs and lifestyle care — designed for your unique balance of body, mind and spirit.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-14 w-full">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="bg-forest-dark text-white hover:bg-forest-primary w-full sm:w-auto" withArrow>
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/treatments" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-border text-forest-dark hover:border-forest-dark w-full sm:w-auto bg-ivory/50 backdrop-blur-sm">
                  Explore Treatments 
                  <span className="ml-2">↓</span>
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-8 text-sm text-text-dark/70 font-medium">
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-forest-light text-forest-primary flex items-center justify-center border border-forest-soft">🌿</span> 
                Authentic Ayurveda
              </span>
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-forest-light text-forest-primary flex items-center justify-center border border-forest-soft">✨</span> 
                Personalized Care
              </span>
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-forest-light text-forest-primary flex items-center justify-center border border-forest-soft">🌱</span> 
                Rooted in Nature
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
