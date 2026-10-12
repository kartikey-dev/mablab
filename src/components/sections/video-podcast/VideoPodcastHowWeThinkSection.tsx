import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';

export default function VideoPodcastHowWeThinkSection() {
  const processCards = [
    {
      title: 'What needs to happen?',
      subtext: 'What are we trying to change?',
      pills: ['Trust', 'Action', 'Authority', 'Awareness'],
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: 'Who needs to see it?',
      subtext: 'Who are we making this for?',
      pills: ['Audience', 'Context', 'Platform'],
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'What will make them care?',
      subtext: 'Why would they watch?',
      pills: ['Hook', 'Story', 'Format'],
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: 'How should we tell it?',
      subtext: "What's the best medium?",
      pills: ['Film', 'Series', 'Podcast', 'Interview'],
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M20.2 6 3 11l-.9-3 17.2-5Z" />
          <rect x="2" y="8" width="20" height="14" rx="2" />
        </svg>
      ),
    },
    {
      title: 'How do we make it spread?',
      subtext: 'How do we get more value from every piece?',
      pills: ['Distribution', 'Repurposing', 'Amplification'],
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
  ];

  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="How We"
          accentText="Think"
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {processCards.map((card, i) => (
            <IconCard
              key={i}
              icon={card.svg}
              title={card.title}
              content={
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-2.5 py-1 text-xs font-semibold text-primary border border-primary/40 rounded-full inline-block bg-purple-50/50"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <p className="para-14 text-gray-500 font-normal leading-relaxed pt-2 border-t border-stroke/20">
                    {card.subtext}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
