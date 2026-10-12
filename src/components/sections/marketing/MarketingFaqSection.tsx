import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { marketingFaqItems } from '@/data/faq';

export default function MarketingFaqSection() {
  return (
    <FaqSection
      items={marketingFaqItems}
      bannerHeading={
        <>
          More Marketing Isn&apos;t The <span className="text-cyan-400">Answer</span>.
        </>
      }
      bannerDescription="If your marketing feels more like guesswork than a growth strategy, let's talk. Identify what matters, what doesn't, and where to focus next."
      bannerButtonText="Let's Talk"
    />
  );
}
