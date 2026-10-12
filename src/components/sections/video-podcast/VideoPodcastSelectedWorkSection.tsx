import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';

export default function VideoPodcastSelectedWorkSection() {
  const works = [
    {
      title: 'Building in Public',
      category: 'Podcast',
      categoryColor: 'text-primary',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      title: 'The Next Era',
      category: 'Product Video',
      categoryColor: 'text-[#0284C7]',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polygon points="10 7 15 10 10 13 10 7" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Beyond Boundaries',
      category: 'Brand Film',
      categoryColor: 'text-red-500',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      ),
    },
    {
      title: 'Stories of Impact',
      category: 'Interview Series',
      categoryColor: 'text-gray-600',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 md:mb-10">
          <SectionHeading
            text="Selected"
            accentText="Work"
            accentColor="primary"
            className="capitalize"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, i) => (
            <IconCard
              key={i}
              icon={work.svg}
              title={work.title}
              category={work.category}
              categoryColor={work.categoryColor}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
