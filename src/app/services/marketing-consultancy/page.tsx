import React from 'react';
import { Metadata } from 'next';
import ConsultancyHeroSection from '@/components/sections/marketing-consultancy/ConsultancyHeroSection';
import ConsultancyBringsYouHereSection from '@/components/sections/marketing-consultancy/ConsultancyBringsYouHereSection';
import ConsultancyHowWeHelpSection from '@/components/sections/marketing-consultancy/ConsultancyHowWeHelpSection';
import ConsultancyApproachSection from '@/components/sections/marketing-consultancy/ConsultancyApproachSection';
import ConsultancyWaysToThinkSection from '@/components/sections/marketing-consultancy/ConsultancyWaysToThinkSection';
import ConsultancyExpectationsSection from '@/components/sections/marketing-consultancy/ConsultancyExpectationsSection';
import ConsultancyFaqSection from '@/components/sections/marketing-consultancy/ConsultancyFaqSection';
import GsapSection from '@/components/ui/GsapSection';

export const metadata: Metadata = {
  title: 'Marketing Consulting | Strategy, Audits & Workshops | MAB Lab',
  description:
    'Get clearer priorities and make better marketing decisions. Strategy, audits, workshops and marketing leadership support for your business.',
};

export default function MarketingConsultancyPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><ConsultancyHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ConsultancyBringsYouHereSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ConsultancyHowWeHelpSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ConsultancyApproachSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ConsultancyWaysToThinkSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ConsultancyExpectationsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ConsultancyFaqSection /></GsapSection>
    </>
  );
}
