import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { howWeDeliver } from './data';

export default function WebDevDeliverSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px] border-t border-stroke/10">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="How We"
          accentText="Deliver"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {howWeDeliver.map((step) => (
            <IconCard
              key={step.title}
              icon={<IconComponent name={step.icon} className="w-6 h-6 text-danger" />}
              title={step.title}
              content={step.subtitle}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
