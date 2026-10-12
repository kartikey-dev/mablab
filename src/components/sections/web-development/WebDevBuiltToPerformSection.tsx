import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { builtToPerform } from './data';

export default function WebDevBuiltToPerformSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Built To"
          accentText="Perform"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {builtToPerform.map((card) => (
            <IconCard
              key={card.title}
              icon={<IconComponent name={card.icon} className="w-7 h-7 text-danger" />}
              title={card.title}
              content={card.subtitle}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
