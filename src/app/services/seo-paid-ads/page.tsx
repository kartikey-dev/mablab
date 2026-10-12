import React from 'react';
import SeoPaidAdsHeroSection from '@/components/sections/seo-paid-ads/SeoPaidAdsHeroSection';
import SeoPaidAdsDemandSection from '@/components/sections/seo-paid-ads/SeoPaidAdsDemandSection';
import SeoPaidAdsEveryClickSection from '@/components/sections/seo-paid-ads/SeoPaidAdsEveryClickSection';
import SeoPaidAdsFaqSection from '@/components/sections/seo-paid-ads/SeoPaidAdsFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & Paid Ads | Search, Leads & Conversion | MAB Lab',
  description:
    'Be found by the right people and convert more of them. SEO, Google Ads, social ads, campaign strategy, landing pages and performance optimisation.',
};

export default function SeoPaidAdsServicePage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><SeoPaidAdsHeroSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SeoPaidAdsDemandSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SeoPaidAdsEveryClickSection /></GsapSection>
      <GsapSection animation="fadeInUp"><SeoPaidAdsFaqSection /></GsapSection>
    </>
  );
}
