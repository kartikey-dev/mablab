import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { consultancyExpectationCards } from './data';

export default function ConsultancyExpectationsSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What Can You"
          accentText="Expect?"
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {consultancyExpectationCards.map((card, i) => (
            <IconCard
              key={i}
              title={card.title}
              content={card.description}
            />
          ))}
        </div>

        {/* Full Width Box at Bottom */}
        <div className="bg-white border-2 border-stroke comic-shadow p-6 md:p-8 space-y-2">
          <p className="para-16 text-stroke font-normal leading-relaxed">
            Not every challenge needs more marketing.
          </p>
          <p className="para-16 text-stroke font-normal leading-relaxed">
            Sometimes it needs a better understanding of what&apos;s really happening.
          </p>
          <p className="para-16 text-stroke font-normal leading-relaxed">
            That&apos;s what we&apos;re here for.
          </p>
        </div>
      </div>
    </GsapSection>
  );
}
