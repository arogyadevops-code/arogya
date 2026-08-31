import React from 'react';
import { Hero } from '@/components/Hero';
import { CategoryNav } from '@/components/CategoryNav';
import { OurApproach } from '@/components/about/OurApproach';
import { Treatments } from '@/components/Treatments';
import { WhyArogya } from '@/components/about/WhyArogya';
import { ProgramsSection } from '@/components/ProgramsSection';
import { DoctorProfile } from '@/components/DoctorProfile';
import { FinalCTA } from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden pt-20 lg:pt-0">
      <Hero />
      <CategoryNav />
      <OurApproach />
      <Treatments />
      <WhyArogya />
      <ProgramsSection />
      <DoctorProfile />
      <FinalCTA />
    </main>
  );
}
