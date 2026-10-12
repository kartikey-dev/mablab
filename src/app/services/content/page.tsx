import React from 'react';
import ContentHeroSection from '@/components/sections/content/ContentHeroSection';
import ContentNeedSection from '@/components/sections/content/ContentNeedSection';
import ContentIdeasSection from '@/components/sections/content/ContentIdeasSection';
import ContentProcessSection from '@/components/sections/content/ContentProcessSection';
import ContentThinkingSection from '@/components/sections/content/ContentThinkingSection';
import ContentFaqSection from '@/components/sections/content/ContentFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content | Strategy, Thought Leadership & Content | MAB Lab',
  description:
    'Turn expertise into authority. Content strategy, thought leadership, editorial planning, articles, case studies, sales enablement and more.',
};

export default function ContentServicePage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><ContentHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ContentNeedSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ContentIdeasSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ContentProcessSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ContentThinkingSection /></GsapSection>
      <GsapSection animation="fadeInUp"><ContentFaqSection /></GsapSection>
    </>
  );
}
