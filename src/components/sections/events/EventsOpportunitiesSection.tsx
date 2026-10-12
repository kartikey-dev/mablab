import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { eventsOpportunityCards } from './data';

export default function EventsOpportunitiesSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Turn Events Into"
          accentText="Opportunities."
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {eventsOpportunityCards.map((col, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-8 flex flex-col justify-start h-full min-h-[280px]"
            >
              <h3 className="card-title font-heading para-24 font-bold text-stroke mb-2 capitalize">
                {col.title}
              </h3>
              <p className="para-15 text-gray-500 italic font-normal mb-6">
                {col.subhead}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((item, iIdx) => (
                  <li
                    key={iIdx}
                    className="para-15 text-gray-700 font-medium flex items-center gap-2.5"
                  >
                    <span className={`${col.bulletColor} text-lg leading-none select-none font-bold`}>
                      •
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
