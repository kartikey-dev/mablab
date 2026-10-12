import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { prFaqItems } from '@/data/faq';

export default function PrInfluencerFaqSection() {
  return (
    <FaqSection
      items={prFaqItems}
      bannerHeading={
        <>
          Become Impossible <span className="text-cyan-400">To Ignore.</span>
        </>
      }
      bannerDescription="For customers. For talent. For investors. For your industry."
      bannerButtonText="Let's Talk"
    />
  );
}
