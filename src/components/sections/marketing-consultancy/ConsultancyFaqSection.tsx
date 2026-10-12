import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { marketingConsultancyFaqItems } from '@/data/faq';

export default function ConsultancyFaqSection() {
  return (
    <FaqSection
      items={marketingConsultancyFaqItems}
      bannerHeading={
        <>
          Let&apos;s Find The <span className="text-cyan-400">Right Problem.</span>
        </>
      }
      bannerDescription="Whether you're evaluating opportunities, navigating uncertainty, or preparing for your next stage of growth, we'll help you make sense of what's happening and decide what comes next. Ready to move forward with confidence?"
      bannerButtonText="Let's Talk"
    />
  );
}
