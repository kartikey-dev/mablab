import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import IconComponent, { type ServiceIconName } from '@/components/ui/IconComponent';

export default function DesignTurnIdeasSection() {
  const processCards = [
    {
      icon: 'search',
      title: 'Understand',
      description: 'What needs to be communicated, to whom, and why.',
      customSvg: null,
    },
    {
      icon: 'translate',
      title: 'Translate',
      description: 'Find the visual language that brings the idea to life.',
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      ),
    },
    {
      icon: 'pen',
      title: 'Design',
      description: 'Create assets, experiences, and systems across touchpoints.',
      customSvg: null,
    },
    {
      icon: 'refine',
      title: 'Refine',
      description: 'Improve clarity, consistency, and effectiveness.',
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      icon: 'layers',
      title: 'Systematize',
      description: 'Make design scalable, usable, and consistent for teams.',
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <rect x="3" y="3" width="7" height="7" fill="currentColor" fillOpacity="0.15" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" fill="currentColor" fillOpacity="0.15" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
    },
    {
      icon: 'portfolio',
      title: 'Selected Work',
      description:
        'A showcase of visual identities, campaigns, content systems, presentations, digital experiences, publications, and creative assets.',
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity="0.15" />
        </svg>
      ),
    },
  ];

  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Turn Ideas Into"
          accentText="Experiences."
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processCards.map((card) => (
            <IconCard
              key={card.title}
              icon={
                card.customSvg || (
                  <IconComponent name={card.icon as ServiceIconName} className="w-6 h-6 text-red-500" />
                )
              }
              title={card.title}
              content={card.description}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
