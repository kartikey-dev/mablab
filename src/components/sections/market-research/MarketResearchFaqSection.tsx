import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { marketResearchFaqItems } from '@/data/faq';

export default function MarketResearchFaqSection() {
  return (
    <FaqSection
      items={marketResearchFaqItems}
      bannerHeading="Get the clarity you need."
      bannerDescription="Whether you're exploring a new market, evaluating an opportunity, understanding customers, or assessing the competition, we'll help you make your next move with confidence."
      bannerButtonText="Let's Talk"
    />
  );
}
