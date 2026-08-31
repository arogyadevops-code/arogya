import React from 'react';
import Image from 'next/image';
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
        />
        {/* Soft gradient to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/90 via-ivory/50 to-transparent"></div>
      </div>

      {/* Mobile background color to match */}
      <div className="block lg:hidden absolute inset-0 z-0 bg-ivory"></div>

      {/* Subtle Botanical Decorations (Mobile Only or transparent on desktop) */}
      <BotanicalDecoration variant="branch" className="block lg:hidden top-0 right-0 w-[400px] h-[400px] -mt-20 -mr-20" />
      <BotanicalDecoration variant="leaf1" className="block lg:hidden bottom-0 left-0 w-[300px] h-[300px] -mb-20 -ml-20" />

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
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-14">
              <Button variant="primary" size="lg" className="bg-forest-dark text-white hover:bg-forest-primary w-full sm:w-auto" withArrow>
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-border text-forest-dark hover:border-forest-dark w-full sm:w-auto bg-ivory/50 backdrop-blur-sm">
                Explore Treatments 
                <span className="ml-2">↓</span>
              </Button>
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

          {/* Right Image Composition (Mobile Only) */}
          <div className="block lg:hidden relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-forest-dark/5 mix-blend-multiply z-10 rounded-[2rem]" />
            <Image 
              src="/hero_mobile.png"
              alt="Premium Ayurvedic Wellness"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
