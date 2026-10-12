import React from 'react';
import PrInfluencerHeroSection from '@/components/sections/pr-influencer/PrInfluencerHeroSection';
import PrInfluencerBrandNeedSection from '@/components/sections/pr-influencer/PrInfluencerBrandNeedSection';
import PrInfluencerStorySection from '@/components/sections/pr-influencer/PrInfluencerStorySection';
import PrInfluencerSelectedWorkSection from '@/components/sections/pr-influencer/PrInfluencerSelectedWorkSection';
import PrInfluencerFaqSection from '@/components/sections/pr-influencer/PrInfluencerFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PR & Influencer | Media, Thought Leadership & Creators | MAB Lab',
  description:
    'Build awareness, authority and visibility through PR and influencer marketing, including media relations, thought leadership and creator partnerships.',
};

export default function PrInfluencerPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><PrInfluencerHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><PrInfluencerBrandNeedSection /></GsapSection>
      <GsapSection animation="fadeInUp"><PrInfluencerStorySection /></GsapSection>
      <GsapSection animation="fadeInUp"><PrInfluencerSelectedWorkSection /></GsapSection>
      <GsapSection animation="fadeInUp"><PrInfluencerFaqSection /></GsapSection>
    </>
  );
}
