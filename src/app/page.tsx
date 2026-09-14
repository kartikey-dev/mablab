import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactSection from '@/components/sections/ContactSection';
import TeamSection from '@/components/sections/TeamSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import MabStoriesSection from '@/components/sections/MabStoriesSection';
import FaqSection from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light text-stroke border-4 border-stroke selection:bg-primary selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* 10 Homepage Sections matching Figma layout */}
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TeamSection />
        <SuccessStoriesSection />
        <MabStoriesSection />
        <ContactSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
