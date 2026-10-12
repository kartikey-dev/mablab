import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { clickClueSteps, metricCards } from './data';

export default function SeoPaidAdsEveryClickSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Every Click"
          accentText="Leaves A Clue."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        {/* 5 Process Steps Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {clickClueSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white border-2 border-stroke comic-shadow-sm p-4 relative flex flex-col justify-between"
            >
              <div>
                <span className="bg-danger text-white border border-stroke font-bold text-[10px] p-1 inline-block absolute -top-2 -left-1">
                  {item.step}
                </span>
                <p className="para-14 font-bold text-stroke leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="card-title font-heading para-24 font-bold text-stroke capitalize mb-8">
          Metrics We Pay Attention To
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metricCards.map((card) => (
            <IconCard
              key={card.title}
              title={card.title}
              content={card.desc}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
