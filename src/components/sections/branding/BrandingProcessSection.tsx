import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { brandProcessSteps } from './data';

export default function BrandingProcessSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#EFF4FF] py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <span className="para-12 text-primary font-bold uppercase tracking-widest block mb-3">
          Our Process
        </span>
        <div className="grid md:grid-cols-[420px_1fr] gap-8">
          <SectionHeading
            text="First, We Figure Out What The Brand"
            accentText="Needs To Say."
            accentColor="primary"
            className="mb-12 max-w-3xl capitalize subheading-h2 font-bold"
          />

          {/* 4 Process Cards (2x2 Grid) using IconCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {brandProcessSteps.map((step) => (
              <IconCard
                key={step.num}
                tag={step.num}
                tagColor="bg-cyan-600"
                icon={<IconComponent name={step.icon} className="w-6 h-6 text-red-500" />}
                title={step.title}
                content={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
