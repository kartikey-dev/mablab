import React from 'react';
import { Metadata } from 'next';
import DesignHeroSection from '@/components/sections/design/DesignHeroSection';
import DesignWhyAreYouHereSection from '@/components/sections/design/DesignWhyAreYouHereSection';
import DesignWhatWeDesignSection from '@/components/sections/design/DesignWhatWeDesignSection';
import DesignTurnIdeasSection from '@/components/sections/design/DesignTurnIdeasSection';
import DesignBannerSection from '@/components/sections/design/DesignBannerSection';
import DesignFaqSection from '@/components/sections/design/DesignFaqSection';
import GsapSection from '@/components/ui/GsapSection';

export const metadata: Metadata = {
  title: 'Design | Brand, Digital & Marketing Design | MAB Lab',
  description:
    'Design that helps people understand, remember and engage with your brand. Presentations, marketing assets, digital and print design.',
};

export default function DesignServicePage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><DesignHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><DesignWhyAreYouHereSection /></GsapSection>
      <GsapSection animation="fadeInUp"><DesignWhatWeDesignSection /></GsapSection>
      <GsapSection animation="fadeInUp"><DesignTurnIdeasSection /></GsapSection>
      <GsapSection animation="fadeInUp"><DesignBannerSection /></GsapSection>
      <GsapSection animation="fadeInUp"><DesignFaqSection /></GsapSection>
    </>
  );
}
