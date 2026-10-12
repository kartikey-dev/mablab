import React from 'react';
import HeroSection from '@/components/sections/home/HeroSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import TeamSection from '@/components/sections/home/TeamSection';
import MabStoriesSection from '@/components/sections/home/MabStoriesSection';
import ContactSection from '@/components/sections/shared/ContactSection';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MAB Lab | Marketing Scientists for Your Business Needs',
  description:
    'MAB Lab helps businesses make better marketing decisions through research, strategy, branding, content, design, technology and more.',
};

export default function Home() {
  return (
    <>
      <GsapSection animation="fadeInUp"><HeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ServicesSection /></GsapSection>
      <GsapSection animation="fadeInUp"><WhyUsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><TeamSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MabStoriesSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ContactSection /></GsapSection>
      <GsapSection animation="fadeInUp"><FaqSection /></GsapSection>
    </>
  );
}
