import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';

export default function VideoPodcastWhatWeDoSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What"
          accentText="We Do"
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <IconCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            }
            title="Brand Films"
            content={
              <ul className="space-y-2">
                {['Company stories', 'Brand stories', 'Documentary-style films', 'Culture films'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <IconCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
            }
            title="Product Videos"
            content={
              <ul className="space-y-2">
                {['Product demos', 'Product walkthroughs', 'Explainers', 'Testimonial videos'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <IconCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="8" y1="22" x2="16" y2="22" />
              </svg>
            }
            title="Podcasts & Interviews"
            content={
              <ul className="space-y-2">
                {['Audio podcasts', 'Video podcasts', 'Founder interviews', 'Expert conversations'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <IconCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>
            }
            title="Social Videos"
            content={
              <ul className="space-y-2">
                {['Reels', 'Shorts', 'Social-first content', 'Video series'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <IconCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <path d="M20.2 6 3 11l-.9-3 17.2-5Z" />
                <rect x="2" y="8" width="20" height="14" rx="2" />
              </svg>
            }
            title="Campaign Films"
            content={
              <ul className="space-y-2">
                {['Launch videos', 'Campaign films', 'Promotional videos', 'Announcements'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            }
          />

          <IconCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
              </svg>
            }
            title="Micro-Dramas"
            content={
              <ul className="space-y-2">
                {['Narrative shorts', 'Episodic content', 'Story-driven campaigns', 'Branded entertainment'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            }
          />

          {/* AI Videos Card spanning 2 columns on lg */}
          <div className="lg:col-span-2">
            <IconCard
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
                  <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
                </svg>
              }
              title="AI Videos"
              content={
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    {['AI-generated videos', 'Synthetic production'].map((b) => (
                      <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                        <span className="text-stroke font-bold">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {['AI avatars', 'Experimental formats'].map((b) => (
                      <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                        <span className="text-stroke font-bold">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
