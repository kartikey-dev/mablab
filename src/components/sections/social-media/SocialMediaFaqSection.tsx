import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { socialMediaFaqItems } from '@/data/faq';

export default function SocialMediaFaqSection() {
  return (
    <FaqSection
      items={socialMediaFaqItems}
      bannerHeading={
        <>
          More Content Isn&apos;t The <span className="text-cyan-400">Answer</span>.
        </>
      }
      bannerDescription="If your content isn't creating the impact you'd hoped for, let's talk. Identify what resonates with your audience and what deserves more attention."
      bannerButtonText="Let's Talk"
    />
  );
}
