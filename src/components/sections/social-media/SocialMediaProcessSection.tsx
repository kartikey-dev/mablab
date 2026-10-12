import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { socialWorkWithUsSteps } from './data';

export default function SocialMediaProcessSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What Happens When You Decide To"
          accentText="Work With Us."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {socialWorkWithUsSteps.map((col) => (
            <IconCard
              key={col.step}
              tag={col.category}
              tagColor="bg-cyan-600"
              icon={<IconComponent name={col.icon} className="w-6 h-6 text-red-500" />}
              title={col.step}
            />
          ))}
        </div>

        <div className="text-gray-500 font-bold text-xs capitalize tracking-wider text-center">
          Note: Nothing stays static. Feedback loops are built-in.
        </div>
      </div>
    </GsapSection>
  );
}
