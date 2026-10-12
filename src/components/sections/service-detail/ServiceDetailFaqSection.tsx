import React from 'react';
import FaqSection from '@/components/sections/home/FaqSection';
import { ServiceDetailData } from '@/data/servicesData';

interface ServiceDetailFaqSectionProps {
  data: ServiceDetailData;
}

export default function ServiceDetailFaqSection({ data }: ServiceDetailFaqSectionProps) {
  return (
    <FaqSection
      bannerHeading={`Ready To Scale With ${data.name}?`}
      bannerDescription="Schedule a discovery call with Mablab marketing scientists and initiate your formula today."
      bannerButtonText="Let's Talk"
    />
  );
}
