import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { socialPresenceSteps } from './data';

export default function SocialMediaPresenceSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="How We Build A"
          accentText="Social Presence"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {socialPresenceSteps.map((item) => (
            <IconCard
              key={item.step}
              tag={item.step}
              tagColor="bg-danger"
              title={item.title}
              content={item.description}
            />
          ))}
        </div>

        <div className="bg-[#FFF8E7] border-2 border-stroke comic-shadow-sm px-6 py-3 max-w-max mx-auto text-center">
          <p className="text-stroke font-bold text-sm capitalize tracking-wide">
            ⚡ Learn feeds back into Listen.
          </p>
        </div>
      </div>
    </GsapSection>
  );
}
