import React from 'react';
import BrandValuesSection from '@/components/sections/why-us/BrandValuesSection';
import PillarsSection from '@/components/sections/why-us/PillarsSection';
import NarrativeSection from '@/components/sections/why-us/NarrativeSection';
import PeopleSection from '@/components/sections/why-us/PeopleSection';
import BeliefsSection from '@/components/sections/why-us/BeliefsSection';
import DualCardSection from '@/components/sections/why-us/DualCardSection';
import CTABannerSection from '@/components/sections/why-us/CTABannerSection';
import GsapSection from '@/components/ui/GsapSection';

export default function WhyUsPage() {
  return (
    <>
      <GsapSection animation="fadeInUp"><BrandValuesSection /></GsapSection>
      <GsapSection animation="fadeInUp"><PillarsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><NarrativeSection /></GsapSection>
      <GsapSection animation="fadeInUp"><PeopleSection /></GsapSection>
      <GsapSection animation="fadeInUp"><BeliefsSection /></GsapSection>
      <GsapSection animation="fadeInUp"><DualCardSection /></GsapSection>
      <GsapSection animation="fadeInUp"><CTABannerSection /></GsapSection>
    </>
  );
}
