import React from 'react';
import { Metadata } from 'next';
import VideoPodcastHeroSection from '@/components/sections/video-podcast/VideoPodcastHeroSection';
import VideoPodcastImpactSection from '@/components/sections/video-podcast/VideoPodcastImpactSection';
import VideoPodcastWhatWeDoSection from '@/components/sections/video-podcast/VideoPodcastWhatWeDoSection';
import VideoPodcastHowWeThinkSection from '@/components/sections/video-podcast/VideoPodcastHowWeThinkSection';
import VideoPodcastContentOutputsSection from '@/components/sections/video-podcast/VideoPodcastContentOutputsSection';
import VideoPodcastMorNachaSection from '@/components/sections/video-podcast/VideoPodcastMorNachaSection';
import VideoPodcastSelectedWorkSection from '@/components/sections/video-podcast/VideoPodcastSelectedWorkSection';
import VideoPodcastFaqSection from '@/components/sections/video-podcast/VideoPodcastFaqSection';
import GsapSection from '@/components/ui/GsapSection';

export const metadata: Metadata = {
  title: 'Video & Podcast | Production & Distribution | MAB Lab',
  description:
    'Video and audio that informs, persuades, entertains and connects. From brand films and podcasts to social videos, campaigns and distribution.',
};

export default function VideoPodcastPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><VideoPodcastHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastImpactSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastWhatWeDoSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastHowWeThinkSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastContentOutputsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastMorNachaSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastSelectedWorkSection /></GsapSection>
      <GsapSection animation="fadeInUp"><VideoPodcastFaqSection /></GsapSection>
    </>
  );
}
