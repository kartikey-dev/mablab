import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { contentIdeaCards } from './data';

export default function ContentIdeasSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <SectionHeading
            text="Find The Idea. Shape The Argument."
            accentText="Make It Travel."
            accentColor="primary"
            className="capitalize font-bold"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentIdeaCards.map((card) => (
            <IconCard
              key={card.title}
              title={card.title}
              content={
                <ul className="space-y-2 mt-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="para-14 text-gray-600 font-normal flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-stroke rounded-full inline-block shrink-0" />
                      <span>{bullet}</span>
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
