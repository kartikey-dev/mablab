import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { eventsFaqItems } from '@/data/faq';

export default function EventsFaqSection() {
  return (
    <FaqSection
      items={eventsFaqItems}
      bannerHeading="Turn events into business outcomes."
      bannerDescription="Whether you're hosting, exhibiting, sponsoring or participating, we'll help you create meaningful connections, stronger relationships and lasting business opportunities."
      bannerButtonText="Let's Talk"
    />
  );
}
