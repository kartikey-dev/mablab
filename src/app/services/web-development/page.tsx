import React from 'react';
import WebDevHeroSection from '@/components/sections/web-development/WebDevHeroSection';
import WebDevNeedSection from '@/components/sections/web-development/WebDevNeedSection';
import WebDevWhatWeDoSection from '@/components/sections/web-development/WebDevWhatWeDoSection';
import WebDevBuiltToPerformSection from '@/components/sections/web-development/WebDevBuiltToPerformSection';
import WebDevDeliverSection from '@/components/sections/web-development/WebDevDeliverSection';
import WebDevWhyMabLabSection from '@/components/sections/web-development/WebDevWhyMabLabSection';
import WebDevFaqSection from '@/components/sections/web-development/WebDevFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | Websites, E-commerce & CMS | MAB Lab',
  description:
    'Build websites that work for your business. From websites and e-commerce to CMS and custom integrations, we build with strategy in mind.',
};

export default function WebDevelopmentPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><WebDevHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WebDevNeedSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WebDevWhatWeDoSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WebDevBuiltToPerformSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WebDevDeliverSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WebDevWhyMabLabSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WebDevFaqSection /></GsapSection>
    </>
  );
}
