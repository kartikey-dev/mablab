import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { prServicesList } from './data';

export default function PrInfluencerStorySection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-background py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <SectionHeading className="capitalize font-bold">
            <span className="text-stroke">Find The Story. Find The Audience. </span>
            <span className="text-primary">Find The Messenger.</span>
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prServicesList.map((svc) => (
            <IconCard
              key={svc.title}
              title={svc.title}
              className={svc.highlight ? 'bg-primary! text-white!' : ''}
              content={
                <ul className="space-y-1.5 mt-2">
                  {svc.bullets.map((b) => (
                    <li
                      key={b}
                      className={`para-14 font-normal flex items-center gap-1.5 ${svc.highlight ? 'text-white/90' : 'text-gray-600'
                        }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full shrink-0 ${svc.highlight ? 'bg-white/60' : 'bg-stroke'
                          }`}
                      />
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
