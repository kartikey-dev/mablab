import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import IconComponent from '@/components/ui/IconComponent';
import { consultancyApproachCards } from './data';

export default function ConsultancyApproachSection() {
  const customSvgs: Record<string, React.ReactNode> = {
    "Find the problem worth solving": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <circle cx="12" cy="12" r="10" />
        <line x1="22" y1="12" x2="18" y2="12" />
        <line x1="6" y1="12" x2="2" y2="12" />
        <line x1="12" y1="6" x2="12" y2="2" />
        <line x1="12" y1="22" x2="12" y2="18" />
        <circle cx="12" cy="3" r="3" />
      </svg>
    ),
    "Focus on what matters": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <line x1="10" y1="18" x2="14" y2="18" />
      </svg>
    ),
    "Build a path forward": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    "Move with confidence": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  };

  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Our"
          accentText="Approach"
          accentColor="primary"
          className="mb-4 capitalize"
        />
        <div className="max-w-4xl mb-12">
          <p className="para-18 font-bold text-stroke mb-2">
            Most businesses don&apos;t need more ideas.
          </p>
          <p className="para-16 text-gray-600 font-normal leading-relaxed mb-2">
            They need a better understanding of what&apos;s happening, why it&apos;s happening, and what deserves attention next.
          </p>
          <p className="para-16 text-gray-600 font-normal leading-relaxed">
            Before recommendations comes understanding. Before action comes clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
          {consultancyApproachCards.map((card, i) => (
            <IconCard
              key={i}
              icon={
                customSvgs[card.title] || (
                  <IconComponent name="search" className="w-6 h-6 text-red-500" />
                )
              }
              title={card.title}
              content={card.text}
            />
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-stroke tracking-tight">
            The wrong problem solved brilliantly is still the wrong problem.
          </p>
        </div>
      </div>
    </GsapSection>
  );
}
