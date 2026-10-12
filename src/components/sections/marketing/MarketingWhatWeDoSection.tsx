import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { marketingWhatWeDoCards } from './data';

export default function MarketingWhatWeDoSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What"
          accentText="We Do."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        {/* 8 Cards Grid (4x2) with IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingWhatWeDoCards.map((card) => (
            <IconCard
              key={card.title}
              icon={<IconComponent name={card.icon} className="w-6 h-6 text-red-500" />}
              title={card.title}
              content={
                <ul className="space-y-1.5 para-14 text-gray-500 font-normal leading-relaxed mt-2">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
