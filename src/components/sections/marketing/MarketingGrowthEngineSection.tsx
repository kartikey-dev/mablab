import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { marketingGrowthCards } from './data';

export default function MarketingGrowthEngineSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Make Marketing A"
          accentText="Growth Engine."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        {/* 4 Cards Grid with IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {marketingGrowthCards.map((card) => (
            <IconCard
              key={card.title}
              title={card.title}
              content={card.subtitle}
            />
          ))}
        </div>

        {/* Often Works With Pills Row */}
        <div className="flex flex-wrap items-center gap-3 para-12 font-bold capitalize pt-6 border-t-2 border-gray-100">
          <span className="text-purple-600 font-bold">
            Often Works With:
          </span>
          {['Branding', 'Web', 'Design', 'Content'].map((tag) => (
            <span
              key={tag}
              className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-1 text-stroke font-bold text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
