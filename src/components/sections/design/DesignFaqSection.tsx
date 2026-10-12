import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { designFaqItems } from '@/data/faq';

export default function DesignFaqSection() {
  return (
    <FaqSection
      items={designFaqItems}
      bannerHeading={
        <>
          Make Every <span className="text-cyan-400">Experience</span> Count.
        </>
      }
      bannerDescription="Whether you're launching something new or evolving an existing brand, let's create experiences people remember."
      bannerButtonText="Let's Talk"
    />
  );
}
