import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { marketingSellCards } from './data';

export default function MarketingSellMoreSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What Would It Take To"
          accentText="Sell More?"
          accentColor="primary"
          className="mb-10 capitalize font-bold"
        />

        {/* 4 Cards Grid with IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingSellCards.map((card) => (
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
