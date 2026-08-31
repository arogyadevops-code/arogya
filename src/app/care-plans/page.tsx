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
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden pt-20 lg:pt-0">
      <CarePlansHero />
      <CarePlanGrid />
      <TreatmentsCTA />
    </main>
  );
}
