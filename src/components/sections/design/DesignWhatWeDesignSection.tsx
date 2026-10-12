import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { designOfferings } from './data';

export default function DesignWhatWeDesignSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Design The Experiences"
          accentText="Your Brand Needs."
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designOfferings.map((card) => (
            <div
              key={card.title}
              className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[180px]"
            >
              <h3 className="card-title font-heading para-24 font-bold text-stroke mb-3 leading-snug capitalize">
                {card.title}
              </h3>
              <p className="para-14 text-gray-600 font-normal leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
