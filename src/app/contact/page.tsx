import React from 'react';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Mablab — Marketing and Branding Lab',
  description: 'Schedule a discovery call with Mablab marketing scientists. Let us analyze your brand and formulate a custom growth strategy.',
};

export default function ContactPage() {
  return (
    <ContactHeroSection />
  );
}
