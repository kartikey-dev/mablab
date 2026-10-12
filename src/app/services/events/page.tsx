import React from 'react';
import { Metadata } from 'next';
import EventsHeroSection from '@/components/sections/events/EventsHeroSection';
import EventsGoalsSection from '@/components/sections/events/EventsGoalsSection';
import EventsOpportunitiesSection from '@/components/sections/events/EventsOpportunitiesSection';
import EventsClaritySection from '@/components/sections/events/EventsClaritySection';
import EventsShapesSizesSection from '@/components/sections/events/EventsShapesSizesSection';
import EventsFaqSection from '@/components/sections/events/EventsFaqSection';
import GsapSection from '@/components/ui/GsapSection';

export const metadata: Metadata = {
  title: 'Events | Strategy, Planning & Production | MAB Lab',
  description:
    'Create events that make an impact. Event strategy, planning, production and audience engagement built around what you need to achieve.',
};

export default function EventsPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><EventsHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><EventsGoalsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><EventsOpportunitiesSection /></GsapSection>
      <GsapSection animation="fadeInUp"><EventsClaritySection /></GsapSection>
      <GsapSection animation="fadeInUp"><EventsShapesSizesSection /></GsapSection>
      <GsapSection animation="fadeInUp"><EventsFaqSection /></GsapSection>
    </>
  );
}
