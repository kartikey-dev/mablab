import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { contentProcessCards } from './data';

export default function ContentProcessSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="MAB Lab Writing"
          accentText="Process"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentProcessCards.map((card) => (
            <IconCard
              key={card.step}
              tag={card.step}
              tagColor={card.color}
              title={card.title}
              category={card.footer}
              content={
                <div className="mt-2">
                  {card.questions && (
                    <ul className="space-y-1.5 mb-3">
                      {card.questions.map((q) => (
                        <li key={q} className="para-14 text-gray-600 font-medium">
                          {q}
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.quote && (
                    <p className="para-14 text-gray-600 italic font-medium leading-relaxed mb-3">
                      {card.quote}
                    </p>
                  )}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
