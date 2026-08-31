"use client";
import React, { useState } from 'react';
import { Leaf, Droplets, Sparkles, HeartPulse, Brain, Flower2, Activity, ShieldCheck } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Treatments', icon: Leaf },
  { id: 'panchakarma', name: 'Panchakarma', icon: Droplets },
  { id: 'rejuvenation', name: 'Rejuvenation', icon: Sparkles },
  { id: 'pain', name: 'Pain Management', icon: HeartPulse },
  { id: 'mental', name: 'Mental Wellness', icon: Brain },
  { id: 'women', name: "Women's Wellness", icon: Flower2 },
  { id: 'lifestyle', name: 'Lifestyle', icon: Activity },
  { id: 'preventive', name: 'Preventive Care', icon: ShieldCheck },
];

export function CategoryNav() {
  const [active, setActive] = useState('all');

  return (
    <div className="w-full bg-transparent relative z-30 -mt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-border p-2">
          
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 md:pb-0">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = active === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  className={`flex flex-col items-center justify-center min-w-[120px] md:min-w-[140px] flex-1 py-4 px-2 rounded-xl transition-all duration-300 snap-center ${
                    isActive 
                      ? 'bg-forest-light text-forest-dark' 
                      : 'hover:bg-cream text-text-muted hover:text-forest-dark'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isActive ? 'text-gold' : 'text-text-muted/60'}`} />
                  <span className={`text-xs font-medium tracking-wide text-center ${isActive ? 'font-semibold' : ''}`}>
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}
