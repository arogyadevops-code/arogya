import React from 'react';

type BotanicalDecorationProps = {
  className?: string;
  variant?: 'leaf1' | 'leaf2' | 'branch';
};

export function BotanicalDecoration({ className = "", variant = 'leaf1' }: BotanicalDecorationProps) {
  // Using elegant inline SVG paths representing botanical/ayurvedic elements
  // We'll keep them subtle and delicate.
  
  const svgs = {
    leaf1: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10 text-forest-primary">
        <path d="M100 0C100 0 150 40 150 100C150 160 100 200 100 200C100 200 50 160 50 100C50 40 100 0 100 0Z" fill="currentColor" />
        <path d="M100 0V200" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <path d="M100 50C120 40 135 60 135 60" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 90C125 70 145 90 145 90" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 130C120 115 135 135 135 135" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 60C80 50 65 70 65 70" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 100C75 80 55 100 55 100" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M100 140C80 125 65 145 65 145" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    leaf2: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10 text-gold">
        <path d="M20 180C20 180 80 160 120 100C160 40 180 20 180 20C180 20 160 80 100 120C40 160 20 180 20 180Z" fill="currentColor" />
        <path d="M20 180L180 20" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
      </svg>
    ),
    branch: (
      <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10 text-forest-primary">
         <path d="M100 300Q100 150 150 0" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
         <path d="M110 250Q150 220 170 250Q140 270 110 250Z" fill="currentColor" />
         <path d="M120 180Q170 140 190 170Q160 200 120 180Z" fill="currentColor" />
         <path d="M135 90Q180 50 195 80Q170 110 135 90Z" fill="currentColor" />
         
         <path d="M95 220Q50 190 30 230Q60 245 95 220Z" fill="currentColor" />
         <path d="M105 140Q50 110 20 150Q60 170 105 140Z" fill="currentColor" />
         <path d="M120 50Q70 20 40 60Q80 80 120 50Z" fill="currentColor" />
      </svg>
    )
  };

  return (
    <div className={`pointer-events-none absolute ${className}`}>
      {svgs[variant]}
    </div>
  );
}
