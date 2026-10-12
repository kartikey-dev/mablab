import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { webFaqItems } from '@/data/faq';

export default function WebDevFaqSection() {
  return (
    <FaqSection
      items={webFaqItems}
      bannerHeading={
        <>
          Turn Your Website Into A <span className="text-cyan-400">Business Asset.</span>
        </>
      }
      bannerDescription="A website that supports your brand, your marketing and your growth."
      bannerButtonText="Let's Talk"
    />
  );
}
