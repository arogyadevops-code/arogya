import React from 'react';
import { TreatmentsHero } from '@/components/treatments/TreatmentsHero';
import { TreatmentList } from '@/components/treatments/TreatmentList';
import { TreatmentsCTA } from '@/components/treatments/TreatmentsCTA';

export const metadata = {
  title: 'Our Treatments | Arogya Ayurveda Healthcare',
  description: 'Explore our authentic Ayurvedic treatments including Panchakarma, Rejuvenation Programs, Pain Management, and more.',
};

export default function TreatmentsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden pt-20 lg:pt-0">
      <TreatmentsHero />
      <TreatmentList />
      <TreatmentsCTA />
    </main>
  );
}
