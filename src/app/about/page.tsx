import React from 'react';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAre } from '@/components/about/WhoWeAre';
import { OurApproach } from '@/components/about/OurApproach';
import { AreasOfCare } from '@/components/about/AreasOfCare';
import { GuidingPrinciples } from '@/components/about/GuidingPrinciples';
import { TransformationalPrograms } from '@/components/about/TransformationalPrograms';
import { WhyArogya } from '@/components/about/WhyArogya';
import { Philosophy } from '@/components/about/Philosophy';
import { AboutFAQ } from '@/components/about/AboutFAQ';
import { PatientStories } from '@/components/about/PatientStories';
import { AboutCTA } from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Arogya Ayurveda | Authentic Kerala Ayurveda in Abu Dhabi',
  description: 'Arogya Ayurveda Healthcare is dedicated to helping individuals restore balance and improve their overall well-being through personalized, natural healing.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <AboutHero />
      <WhoWeAre />
      <OurApproach />
      <AreasOfCare />
      <GuidingPrinciples />
      <TransformationalPrograms />
      <WhyArogya />
      <Philosophy />
      <AboutFAQ />
      <PatientStories />
      <AboutCTA />
    </main>
  );
}
