import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { prBrandNeedCards, accentColorMap } from './data';

export default function PrInfluencerBrandNeedSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What Does Your"
          accentText="Brand Need?"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prBrandNeedCards.map((card) => (
            <IconCard
              key={card.label}
              icon={
                <span
                  className={`w-3.5 h-3.5 inline-block ${accentColorMap[card.accent] || 'bg-primary'}`}
                />
              }
              title={card.label}
              content={
                <ul className="space-y-2 mt-2">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="para-14 text-stroke/80 font-medium flex items-start gap-2"
                    >
                      <span className="text-stroke/40 font-bold text-xs mt-0.5">›</span>
                      <span>{b}</span>
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
