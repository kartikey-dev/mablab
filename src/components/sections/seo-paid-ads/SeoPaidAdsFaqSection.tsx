import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { seoPaidAdsFaqItems } from '@/data/faq';

export default function SeoPaidAdsFaqSection() {
  return (
    <FaqSection
      items={seoPaidAdsFaqItems}
      bannerHeading={
        <>
          Be Found By The <span className="text-cyan-400">Right People</span>.<br />Convert More Of Them.
        </>
      }
      bannerDescription="Often works with: Marketing, Web Content, Design, Market Research"
      bannerButtonText="Let's Talk"
    />
  );
}
