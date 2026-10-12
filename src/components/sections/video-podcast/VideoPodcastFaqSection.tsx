import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { videoPodcastFaqItems } from '@/data/faq';

export default function VideoPodcastFaqSection() {
  return (
    <FaqSection
      items={videoPodcastFaqItems}
      bannerHeading="Let's tell a great story—and make it travel."
      bannerDescription=""
      bannerButtonText="Let's Talk"
    />
  );
}
