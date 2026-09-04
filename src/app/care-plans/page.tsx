import React from 'react';
import { CarePlansHero } from '@/components/care-plans/CarePlansHero';
import { CarePlanGrid } from '@/components/care-plans/CarePlanGrid';
import { TreatmentsCTA } from '@/components/treatments/TreatmentsCTA';

export const metadata = {
  title: 'Care Plans | Arogya Ayurveda Healthcare',
  description: 'Explore our specialized Ayurvedic care plans designed for holistic healing, recovery, and long-term wellness.',
};

export default function CarePlansPage() {
  return (
    <main 
      className="flex min-h-screen flex-col w-full overflow-x-hidden pt-20 lg:pt-0 relative"
      style={{
        backgroundImage: "url('/care_plan_bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>
      
      <div className="relative z-10 w-full flex flex-col flex-grow">
        <CarePlansHero />
        <CarePlanGrid />
        <TreatmentsCTA />
      </div>
    </main>
  );
}
