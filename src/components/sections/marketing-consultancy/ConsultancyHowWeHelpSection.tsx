import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import IconComponent, { type ServiceIconName } from '@/components/ui/IconComponent';
import { consultancyHowWeHelpCards } from './data';

export default function ConsultancyHowWeHelpSection() {
  const customSvgs: Record<string, React.ReactNode> = {
    'Marketing Audits': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
    'Marketing Leadership': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
    'Workshops & Advisory Sessions': (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  };

  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="How Can We"
          accentText="Help?"
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {consultancyHowWeHelpCards.map((card, i) => (
            <IconCard
              key={i}
              icon={
                customSvgs[card.title] || (
                  <IconComponent name={card.icon as ServiceIconName} className="w-6 h-6 text-red-500" />
                )
              }
              title={card.title}
              content={card.subtitle}
            />
          ))}
        </div>

        {/* Full Width Bottom Callout Box */}
        <div className="bg-white border-2 border-stroke comic-shadow p-5 md:p-6 flex items-center gap-4">
          <div className="text-red-500 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <p className="para-16 font-bold text-stroke leading-snug">
            Available as one-time engagements, ongoing advisory, workshops, and fractional support.
          </p>
        </div>
      </div>
    </GsapSection>
  );
}
