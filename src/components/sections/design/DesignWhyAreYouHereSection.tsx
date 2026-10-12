import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import IconComponent, { type ServiceIconName } from '@/components/ui/IconComponent';

export default function DesignWhyAreYouHereSection() {
  const cards = [
    {
      icon: 'palette',
      title: 'Visual Identity',
      text: 'A new initiative needs a visual identity',
      customSvg: null,
    },
    {
      icon: 'diamond',
      title: 'Design Quality',
      text: "The quality of the work isn't reflected in the design",
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M6 3h12l4 7-10 11L2 10l4-7z" fill="currentColor" fillOpacity="0.15" />
          <path d="M11 3 8 10l4 11 4-11-3-7" />
          <path d="M2 10h20" />
        </svg>
      ),
    },
    {
      icon: 'bulb-slash',
      title: 'Idea Execution',
      text: 'Good ideas are getting lost in poor execution',
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <line x1="2" y1="2" x2="22" y2="22" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 15.09A6 6 0 0 0 18 10c0-3.31-2.69-6-6-6a5.95 5.95 0 0 0-4.04 1.58" />
          <path d="M6.3 9.4A6 6 0 0 0 6 10c0 1.86.85 3.53 2.18 4.63.53.44.82 1.09.82 1.77V18" />
        </svg>
      ),
    },
    {
      icon: 'shield-alert',
      title: 'Brand Credibility',
      text: "The brand doesn't look as credible as the business behind it",
      customSvg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.12" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Why Are You"
          accentText="Here?"
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <IconCard
              key={i}
              icon={
                card.customSvg || (
                  <IconComponent name={card.icon as ServiceIconName} className="w-6 h-6 text-red-500" />
                )
              }
              title={card.title}
              content={card.text}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
