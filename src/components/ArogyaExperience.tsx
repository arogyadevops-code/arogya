import React from 'react';
import Image from 'next/image';

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your lifestyle, concerns and wellness goals."
  },
  {
    number: "02",
    title: "Understanding",
    description: "Our practitioners assess and identify the root imbalance."
  },
  {
    number: "03",
    title: "Personalized Care",
    description: "A customized Ayurvedic plan created just for you."
  },
  {
    number: "04",
    title: "Continued Wellness",
    description: "Guidance and support for lasting balance and wellbeing."
  }
];

export function ArogyaExperience() {
  return (
    <section id="care-plans" className="py-20 lg:py-32 bg-ivory text-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-forest-dark order-2 lg:order-1 relative shadow-2xl">
            <div className="absolute inset-0 bg-black/10 z-10" />
            <Image 
              src="/images/arogya-experience.jpg"
              alt="Arogya Ayurvedic Experience Room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gold tracking-widest uppercase text-sm font-semibold mb-4">
              THE AROGYA EXPERIENCE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-primary mb-6">
              A moment to slow down.
            </h2>
            <p className="text-lg text-text-muted mb-12 font-light">
              From your first consultation to your personalized wellness journey, every part of the Arogya experience is designed around balance, calm and mindful care.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-forest-primary font-serif text-xl bg-cream group-hover:bg-gold group-hover:text-forest-dark transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-serif text-forest-primary mb-2">— {step.title}</h4>
                    <p className="text-text-muted font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
