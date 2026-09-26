import React from 'react';
import HeroSection from '@/components/sections/home/HeroSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import WhyUsSection from '@/components/sections/home/WhyUsSection';
import TeamSection from '@/components/sections/home/TeamSection';
import MabStoriesSection from '@/components/sections/home/MabStoriesSection';
import ContactSection from '@/components/sections/shared/ContactSection';
import FaqSection from '@/components/sections/home/FaqSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <MabStoriesSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
