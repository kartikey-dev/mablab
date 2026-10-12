import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { marketResearchAnswerCards } from './data';

export default function MarketResearchAnswersSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Find The Answers Before"
          accentText="Making The Decision."
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketResearchAnswerCards.map((col, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 flex flex-col justify-start h-full min-h-[220px]"
            >
              <h3 className="card-title font-heading para-24 font-bold text-stroke mb-4 leading-snug capitalize">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map((item, iIdx) => (
                  <li
                    key={iIdx}
                    className="para-14 text-gray-700 font-medium flex items-center gap-2.5"
                  >
                    <span className="text-stroke text-xs shrink-0 select-none">
                      ■
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
