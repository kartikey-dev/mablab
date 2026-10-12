import React from 'react';
import BrandingHeroSection from '@/components/sections/branding/BrandingHeroSection';
import BrandingStandSection from '@/components/sections/branding/BrandingStandSection';
import BrandingServicesSection from '@/components/sections/branding/BrandingServicesSection';
import BrandingProcessSection from '@/components/sections/branding/BrandingProcessSection';
import BrandingWorksWithSection from '@/components/sections/branding/BrandingWorksWithSection';
import BrandingAchieveSection from '@/components/sections/branding/BrandingAchieveSection';
import BrandingFaqSection from '@/components/sections/branding/BrandingFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Branding | Positioning, Messaging & Identity | MAB Lab',
  description:
    'Build a brand people understand, remember and choose. MAB Lab helps with positioning, messaging, identity systems and brand guidelines.',
};

export default function BrandingServicePage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><BrandingHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BrandingStandSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BrandingServicesSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BrandingProcessSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BrandingWorksWithSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BrandingAchieveSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BrandingFaqSection /></GsapSection>
    </>
  );
}
