import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { eventsGoalCards } from './data';

export default function EventsGoalsSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Every Event Starts With A"
          accentText="Goal."
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsGoalCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 flex flex-col justify-start h-full min-h-[260px]"
            >
              <h3 className="card-title font-heading para-24 font-bold text-stroke mb-4 leading-snug capitalize">
                {card.title}
              </h3>
              <ul className="space-y-4">
                {card.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    className="para-14 sm:para-15 text-gray-600 font-medium flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="text-stroke font-bold text-base select-none shrink-0 leading-none mt-0.5">
                      ›
                    </span>
                    <span>{pt}</span>
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
