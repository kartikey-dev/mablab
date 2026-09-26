import React from 'react';
import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection';
import ServicesGridSection from '@/components/sections/services/ServicesGridSection';
import ContactSection from '@/components/sections/shared/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Mablab — 12 Scientific Marketing Formulas',
  description:
    "Explore Mablab's 12 specialized marketing and branding formulas: Branding, Web Development, SEO, Paid Ads, Social Media, Content, PR & Influencers, Video & Podcast, Market Research, Design, Events, and Consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
      <ContactSection />
    </>
  );
}
