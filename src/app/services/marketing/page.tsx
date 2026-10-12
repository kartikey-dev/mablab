import React from 'react';
import MarketingHeroSection from '@/components/sections/marketing/MarketingHeroSection';
import MarketingSellMoreSection from '@/components/sections/marketing/MarketingSellMoreSection';
import MarketingWhatWeDoSection from '@/components/sections/marketing/MarketingWhatWeDoSection';
import MarketingApproachSection from '@/components/sections/marketing/MarketingApproachSection';
import MarketingGrowthEngineSection from '@/components/sections/marketing/MarketingGrowthEngineSection';
import MarketingFaqSection from '@/components/sections/marketing/MarketingFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing | Strategy, Campaigns & Growth | MAB Lab',
  description:
    'Marketing built to get you noticed, considered and chosen. Strategy, campaigns, demand generation, lifecycle marketing and optimisation.',
};

export default function MarketingServicePage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><MarketingHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketingSellMoreSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketingWhatWeDoSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketingApproachSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketingGrowthEngineSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketingFaqSection /></GsapSection>
    </>
  );
}
