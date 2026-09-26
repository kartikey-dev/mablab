import React from 'react';
import BrandValuesSection from '@/components/sections/why-us/BrandValuesSection';
import PillarsSection from '@/components/sections/why-us/PillarsSection';
import NarrativeSection from '@/components/sections/why-us/NarrativeSection';
import PeopleSection from '@/components/sections/why-us/PeopleSection';
import BeliefsSection from '@/components/sections/why-us/BeliefsSection';
import DualCardSection from '@/components/sections/why-us/DualCardSection';
import CTABannerSection from '@/components/sections/why-us/CTABannerSection';

export default function WhyUsPage() {
  return (
    <>
      <BrandValuesSection />
      <PillarsSection />
      <NarrativeSection />
      <PeopleSection />
      <BeliefsSection />
      <DualCardSection />
      <CTABannerSection />
    </>
  );
}
