import React from 'react';
import { Leaf, User, HeartPulse, Sparkles } from 'lucide-react';
import { BotanicalDecoration } from './ui/BotanicalDecoration';

const features = [
  {
    icon: Leaf,
    title: "Authentic Ayurveda",
    description: "Traditional Ayurvedic principles presented through a modern wellness experience."
  },
  {
    icon: User,
    title: "Personalized Approach",
    description: "Care and recommendations tailored to individual wellness goals."
  },
  {
    icon: HeartPulse,
    title: "Experienced Practitioners",
    description: "Qualified Ayurvedic experts committed to your wellbeing."
  },
  {
    icon: Sparkles,
    title: "Holistic Wellness",
    description: "Focus on overall wellbeing rather than a single treatment."
  }
];

export function WhyArogya() {
  return (
    <section className="py-24 lg:py-32 bg-forest-light text-text-dark relative overflow-hidden">
      <BotanicalDecoration variant="leaf1" className="top-0 left-0 w-[500px] h-[500px] -mt-24 -ml-24 opacity-10" />
      <BotanicalDecoration variant="leaf2" className="bottom-0 right-0 w-[400px] h-[400px] -mb-10 -mr-10 opacity-[0.07]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-6">
            WHY AROGYA?
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-dark leading-tight">
            Rooted in tradition. <br/>Designed for modern life.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col relative group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-forest-soft text-gold bg-white shadow-sm group-hover:border-gold transition-colors duration-500">
                  <feature.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <span className="text-4xl font-serif text-forest-dark/10 group-hover:text-gold/40 transition-colors duration-500 font-light">
                  0{index + 1}
                </span>
              </div>
              
              <div className="w-full h-[1px] bg-forest-soft mb-6 group-hover:bg-gold/50 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-serif mb-3 text-forest-dark">{feature.title}</h3>
              <p className="text-text-muted font-light text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
