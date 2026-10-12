import React from 'react';
import SocialMediaHeroSection from '@/components/sections/social-media/SocialMediaHeroSection';
import SocialMediaNeedSection from '@/components/sections/social-media/SocialMediaNeedSection';
import SocialMediaWhatWeDoSection from '@/components/sections/social-media/SocialMediaWhatWeDoSection';
import SocialMediaPresenceSection from '@/components/sections/social-media/SocialMediaPresenceSection';
import SocialMediaProcessSection from '@/components/sections/social-media/SocialMediaProcessSection';
import SocialMediaFaqSection from '@/components/sections/social-media/SocialMediaFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media | Strategy, Content & Community | MAB Lab',
  description:
    'Grab attention and create connection. Social media strategy, content, community management, campaigns and founder-led social.',
};

export default function SocialMediaServicePage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><SocialMediaHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SocialMediaNeedSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SocialMediaWhatWeDoSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SocialMediaPresenceSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SocialMediaProcessSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SocialMediaFaqSection /></GsapSection>
    </>
  );
}
