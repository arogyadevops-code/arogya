"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { BotanicalDecoration } from './ui/BotanicalDecoration';

const ABOUT_TABS = [
  {
    id: 'mission',
    title: 'Our Mission',
    heading: 'Empowering Health & Happiness',
    content: "To empower individuals and families to live healthier, happier lives through authentic Ayurvedic healthcare, personalized treatment plans, and natural solutions that address the root cause of illnesses rather than just the symptoms.",
    image: "/images/ayurveda_intro_mission.webp"
  },
  {
    id: 'vision',
    title: 'Our Vision',
    heading: 'The Most Trusted Care in the UAE',
    content: "To become one of the most trusted Ayurveda healthcare centers in the UAE by delivering genuine care, promoting preventive healthcare, and inspiring communities to adopt healthier lifestyles.",
    image: "/images/ayurveda_intro_vision.webp"
  },
  {
    id: 'values',
    title: 'Our Values',
    heading: 'Nurturing Body, Mind & Spirit',
    content: "Empathy, respect, dedication, honesty, transparency, and professionalism, with a commitment to treating the root cause while nurturing the body, mind, and spirit.",
    image: "/images/ayurveda_intro_values.webp"
  }
];

export function AyurvedaIntro() {
  const [activeTab, setActiveTab] = useState(ABOUT_TABS[0].id);

  const currentTab = ABOUT_TABS.find(tab => tab.id === activeTab) || ABOUT_TABS[0];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-cream text-text-dark overflow-hidden z-10">
      <BotanicalDecoration variant="leaf2" className="bottom-0 right-0 w-[400px] h-[400px] -mb-20 -mr-20 opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Interactive Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-20 border-b border-border pb-4">
          {ABOUT_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm lg:text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative pb-2 ${
                activeTab === tab.id ? 'text-forest-primary' : 'text-text-muted hover:text-gold'
              }`}
            >
              {tab.title}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-t-full transition-all duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl min-h-[300px] flex flex-col justify-center transition-all duration-500 ease-in-out">
            <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-6">
              ABOUT AROGYA AYURVEDA
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-forest-dark leading-tight mb-8">
              {currentTab.heading}
            </h2>
            
            <p className="text-lg text-text-muted mb-12 font-light leading-relaxed">
              {currentTab.content}
            </p>
            
            <div>
              <Button variant="primary" className="bg-forest-dark text-white hover:bg-forest-primary" withArrow>
                Book Your Consultation
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[450px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden bg-forest-light shadow-xl">
             <div className="absolute inset-0 bg-black/5 z-10" />
             
             {ABOUT_TABS.map((tab) => (
               <Image 
                 key={tab.id}
                 src={tab.image}
                 alt={tab.title}
                 fill
                 className={`object-cover transition-opacity duration-1000 ease-in-out ${
                   activeTab === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                 }`}
                 sizes="(max-width: 1024px) 100vw, 50vw"
               />
             ))}
             
            {/* Floating Badge */}
            <div className="absolute top-8 left-8 bg-ivory/90 backdrop-blur-sm rounded-full p-2 shadow-xl z-20 hidden md:block">
              <div className="border border-gold rounded-full w-28 h-28 flex flex-col items-center justify-center text-center p-2">
                <span className="text-2xl font-serif text-forest-primary leading-none mb-1">Authentic</span>
                <span className="text-xs text-text-muted font-medium tracking-wide uppercase">Ayurveda</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
