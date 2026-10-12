import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';

export default function EventsShapesSizesSection() {
  const categories = [
    {
      title: 'Brand & Product',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
      items: [
        'Product Launches',
        'Brand Launches',
        'Press Events',
        'Experiential Campaigns',
      ],
    },
    {
      title: 'Corporate',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      ),
      items: [
        'Annual Days',
        'Foundation Day Celebrations',
        'Town Halls',
        'Leadership Events',
      ],
    },
    {
      title: 'Industry & Business',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <line x1="3" y1="22" x2="21" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <polygon points="12 2 20 7 4 7" fill="currentColor" fillOpacity="0.15" />
        </svg>
      ),
      items: [
        'Conferences',
        'Trade Shows',
        'Exhibitions',
        'Industry Summits',
      ],
    },
    {
      title: 'Community & Engagement',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      items: [
        'Community Meetups',
        'Networking Events',
        'Partner Events',
        'Customer Events',
      ],
    },
    {
      title: 'Digital Events',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polygon points="10 7 15 10 10 13 10 7" fill="currentColor" />
        </svg>
      ),
      items: [
        'Webinars',
        'Virtual Conferences',
        'Online Workshops',
        'Live Sessions',
      ],
    },
    {
      title: 'Employer Branding',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
      items: [
        'Recruitment Events',
        'Campus Engagement Programs',
        'Employee Engagement Events',
        'Employer Branding Activations',
      ],
    },
  ];

  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Events Of All"
          accentText="Shapes And Sizes."
          accentColor="primary"
          className="mb-12 capitalize"
        />

        {/* 6 Category Cards using IconCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <IconCard
              key={idx}
              icon={cat.icon}
              title={cat.title}
              content={
                <ul className="space-y-2 mt-1">
                  {cat.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="para-14 text-gray-600 font-medium flex items-center gap-2.5"
                    >
                      <span className="text-gray-400 text-xs shrink-0 select-none">
                        ■
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>

        {/* Full-width End-to-End Event Management Card */}
        <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-8 mt-6">
          <div className="text-red-500 mb-3">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-red-500"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <circle cx="8" cy="14" r="1" fill="currentColor" />
              <circle cx="12" cy="14" r="1" fill="currentColor" />
              <circle cx="16" cy="14" r="1" fill="currentColor" />
              <circle cx="8" cy="18" r="1" fill="currentColor" />
              <circle cx="12" cy="18" r="1" fill="currentColor" />
              <circle cx="16" cy="18" r="1" fill="currentColor" />
            </svg>
          </div>
          <h3 className="card-title font-heading para-24 font-bold text-stroke mb-2 capitalize">
            End-To-End Event Management
          </h3>
          <p className="para-16 text-gray-600 font-normal leading-relaxed">
            From planning and vendor management to production, promotion and on-ground execution, we manage every aspect of your event.
          </p>
        </div>
      </div>
    </GsapSection>
  );
}
