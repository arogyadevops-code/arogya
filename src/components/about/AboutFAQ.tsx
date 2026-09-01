"use client";
import React, { useState } from 'react';
import { faqData } from '@/data/faq';
import { Plus, X } from 'lucide-react';

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-transparent text-text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-forest-primary tracking-[0.2em] uppercase text-sm font-semibold mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-forest-primary block"></span>
              YOUR QUESTIONS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-primary leading-tight">
              Everything you need to know before your visit.
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`border border-forest-primary/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-cream shadow-md border-transparent' : 'bg-white hover:border-gold/50'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-xl font-serif pr-8 transition-colors duration-300 ${isOpen ? 'text-forest-primary' : 'text-text-dark'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gold text-white rotate-90' : 'bg-forest-primary/5 text-forest-primary'}`}>
                      {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-8 pb-8 text-text-muted font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
