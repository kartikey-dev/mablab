import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { contentFaqItems } from '@/data/faq';

export default function ContentFaqSection() {
  return (
    <FaqSection
      items={contentFaqItems}
      bannerHeading={
        <>
          Grab Attention, Build Authority, <span className="text-cyan-400">Inspire Action.</span>
        </>
      }
      bannerDescription="Often works with: Marketing, Web Content, Design, Market Research"
      bannerButtonText="Let's Talk"
    />
  );
}
