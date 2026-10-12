import React from 'react';
import { Metadata } from 'next';
import MarketResearchHeroSection from '@/components/sections/market-research/MarketResearchHeroSection';
import MarketResearchDecisionsSection from '@/components/sections/market-research/MarketResearchDecisionsSection';
import MarketResearchAnswersSection from '@/components/sections/market-research/MarketResearchAnswersSection';
import MarketResearchFrameworksSection from '@/components/sections/market-research/MarketResearchFrameworksSection';
import MarketResearchFaqSection from '@/components/sections/market-research/MarketResearchFaqSection';
import GsapSection from '@/components/ui/GsapSection';

export const metadata: Metadata = {
  title: 'Market Research | Customer, Market & Competitor Research | MAB Lab',
  description:
    'Understand your market before making important decisions. Customer insights, competitor analysis and market intelligence to reduce guesswork.',
};

export default function MarketResearchPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><MarketResearchHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketResearchDecisionsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketResearchAnswersSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketResearchFrameworksSection /></GsapSection>
      <GsapSection animation="fadeInUp"><MarketResearchFaqSection /></GsapSection>
    </>
  );
}
