import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { brandingFaqItems } from '@/data/faq';

export default function BrandingFaqSection() {
  return (
    <FaqSection
      items={brandingFaqItems}
      bannerHeading={
        <>
          Become <span className="text-cyan-400">Hard</span> To Ignore.
        </>
      }
      bannerDescription="If your business is struggling to stand out, let's talk. Discover what sets you apart and turn it into a brand people remember."
      bannerButtonText="Let's Talk"
    />
  );
}
