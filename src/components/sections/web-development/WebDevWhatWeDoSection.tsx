import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { webWhatWeDo } from './data';

export default function WebDevWhatWeDoSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What We"
          accentText="Do"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {webWhatWeDo.map((card) => (
            <IconCard
              key={card.title}
              icon={<IconComponent name={card.icon} className="w-7 h-7 text-danger" />}
              title={card.title}
              content={
                <ul className="space-y-1.5 mt-2">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="para-14 text-gray-500 font-normal flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 bg-stroke/40 rounded-full shrink-0" />
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
