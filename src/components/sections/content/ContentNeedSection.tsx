import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { contentNeedCards } from './data';

export default function ContentNeedSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What Does Your"
          accentText="Content Need?"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentNeedCards.map((card) => (
            <IconCard
              key={card.title}
              icon={<IconComponent name={card.icon} className="w-6 h-6 text-red-500" />}
              title={card.title}
              content={card.subtitle}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
