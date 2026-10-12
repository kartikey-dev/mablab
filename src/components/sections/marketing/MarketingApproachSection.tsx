import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { marketingApproachSteps } from './data';

export default function MarketingApproachSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#EFF4FF] py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="How We Approach"
          accentText="Marketing."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        {/* 5 Step Column Cards with IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {marketingApproachSteps.map((col) => (
            <IconCard
              key={col.step}
              tag={col.step}
              tagColor="bg-stroke"
              title={col.title}
              content={
                col.bullets ? (
                  <ul className="space-y-1.5 para-14 text-gray-500 font-normal leading-relaxed mt-2">
                    {col.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="para-14 text-gray-500 font-normal leading-relaxed mt-2">
                    {col.text}
                  </p>
                )
              }
            />
          ))}
        </div>

        {/* Yellow Banner Pill at bottom */}
        <div className="flex justify-center mt-10">
          <div className="bg-[#FEF08A] border-2 border-stroke comic-shadow-sm px-6 py-2.5 para-12 font-bold text-stroke capitalize text-center inline-flex items-center gap-2">
            <span>The Process Is Not Linear.</span>
            <span>&rarr;</span>
            <span>Learn. Adjust. Repeat.</span>
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
