import React from 'react';
import Image from 'next/image';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { videoPodcastFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Video & Podcast Services | Mablab — Make People See It, Hear It, Feel It",
  description:
    "Video and audio that informs, persuades, entertains, and connects. High-impact video production, brand films, podcasts, and multi-channel content repurposing.",
};

export default function VideoPodcastPage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="VIDEO & PODCAST"
        line1="Make people"
        line2={
          <>
            <span className="relative text-cyan-400 inline-block">
              See It, Hear It, Feel It.
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3.5 text-cyan-400"
                viewBox="0 0 240 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 8 Q 120 18 238 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            <span className="para-18 text-white/90 block mt-6 mx-auto">
              Video and audio that informs, persuades, entertains, and connects.
            </span>
          </>
        }
      />

      {/* ============================================
          SECTION 2: MAKE AN IMPACT
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Make An"
            accentText="Impact."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Express',
                subtitle: 'Make your POV memorable.',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="m3 11 18-5v12L3 14v-3z" />
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                  </svg>
                ),
              },
              {
                title: 'Persuade',
                subtitle: 'Make a stronger case for why you matter.',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.12" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Entertain',
                subtitle: 'Make attention worth giving.',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                  </svg>
                ),
              },
              {
                title: 'Connect',
                subtitle: 'Make the brand feel human.',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="currentColor" fillOpacity="0.12" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[160px]"
              >
                <div className="text-red-500 mb-5">{card.svg}</div>
                <h3 className="para-18 font-extrabold text-stroke mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="para-14 text-gray-500 font-normal leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 3: WHAT WE DO
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What"
            accentText="We Do"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Top 4 Cards */}
            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]">
              <div className="text-red-500 mb-4">
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
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                Brand Films
              </h3>
              <ul className="space-y-2">
                {['Company stories', 'Brand stories', 'Documentary-style films', 'Culture films'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]">
              <div className="text-red-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                Product Videos
              </h3>
              <ul className="space-y-2">
                {['Product demos', 'Product walkthroughs', 'Explainers', 'Testimonial videos'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]">
              <div className="text-red-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="8" y1="22" x2="16" y2="22" />
                </svg>
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                Podcasts &amp; Interviews
              </h3>
              <ul className="space-y-2">
                {['Audio podcasts', 'Video podcasts', 'Founder interviews', 'Expert conversations'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]">
              <div className="text-red-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                Social Videos
              </h3>
              <ul className="space-y-2">
                {['Reels', 'Shorts', 'Social-first content', 'Video series'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Row: 2 Single-width Cards + 1 Double-width Card */}
            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]">
              <div className="text-red-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <path d="M20.2 6 3 11l-.9-3 17.2-5Z" />
                  <rect x="2" y="8" width="20" height="14" rx="2" />
                </svg>
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                Campaign Films
              </h3>
              <ul className="space-y-2">
                {['Launch videos', 'Campaign films', 'Promotional videos', 'Announcements'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]">
              <div className="text-red-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 15s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
                  <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                Micro-Dramas
              </h3>
              <ul className="space-y-2">
                {['Narrative shorts', 'Episodic content', 'Story-driven campaigns', 'Branded entertainment'].map((b) => (
                  <li key={b} className="para-14 text-gray-600 font-medium flex items-center gap-2">
                    <span className="text-stroke font-bold">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Videos Card spanning 2 columns on lg */}
            <div className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px] lg:col-span-2">
              <div className="text-red-500 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8.01" y2="16" strokeWidth="3" />
                  <line x1="16" y1="16" x2="16.01" y2="16" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                AI Videos
              </h3>
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
            </div>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 4: HOW WE THINK
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="How We"
            accentText="Think"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
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
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-between h-full min-h-[260px]"
              >
                <div>
                  <div className="text-red-500 mb-4">{card.svg}</div>
                  <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.pills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 text-xs font-semibold text-primary border border-primary/40 rounded-full inline-block bg-purple-50/50"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="para-14 text-gray-500 font-normal leading-relaxed pt-2 border-t border-stroke/20">
                  {card.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 5: THE MOST EXPENSIVE CONTENT IS CONTENT YOU CAN ONLY USE ONCE
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="The Most Expensive Content Is Content You Can"
            accentText="Only Use Once."
            accentColor="primary"
            className="mb-6 capitalize max-w-7xl"
          />

          <div className="mb-10">
            <p className="para-16 text-gray-500 mb-4">
              A single podcast can become social content, blog articles, email campaigns, sales material, thought leadership, website content, and more.
            </p>
            <p className="para-16 text-gray-500">
              The more value we can create from one piece of content, the less often you need to start from scratch.
            </p>
          </div>

          <div>
            <h3 className="para-24 font-extrabold text-stroke mb-4">
              Content Outputs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                'Social Clips',
                'Event Content',
                'Internal Comms',
                'Thought Leadership',
                'Website Content',
                'Sales Material',
                'Email Campaigns',
                'Blog Articles',
              ].map((output) => (
                <div
                  key={output}
                  className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-4 text-center font-extrabold text-stroke para-16 flex items-center justify-center min-h-[58px]"
                >
                  {output}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 6: JUNGLE MEIN MOR NACHA KISNE DEKHA?
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          {/* Main Card */}
          <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Left Column: Copy */}
              <div className="lg:col-span-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-primary mb-6 leading-tight">
                  Jungle Mein Mor Nacha Kisne Dekha?
                </h2>

                <div className="space-y-4 para-16 text-gray-500 font-normal">
                  <p>
                    No matter how great your video is, it&apos;s a wasted opportunity if nobody sees it.
                  </p>
                  <p>
                    That&apos;s why we think beyond production.
                  </p>
                  <p>
                    Every video we create is designed for distribution, repurposing, and reuse—so it can reach more people, create more opportunities, and keep delivering value long after it&apos;s published.
                  </p>
                  <p>
                    Because a great video isn&apos;t just meant to be made.
                  </p>
                  <p className="para-18">
                    It&apos;s meant to be seen.
                  </p>
                </div>
              </div>

              {/* Right Column: Peacock Artwork */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <Image
                  src="/images/our-moto.png"
                  alt="Jungle Mein Mor Nacha Kisne Dekha?"
                  width={545}
                  height={312}
                  priority
                  className="w-full max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Distribution Channels */}
          <div className="mt-12 md:mt-16">
            <h3 className="para-24 font-extrabold text-stroke mb-4">
              Distribution Channels
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                'Website',
                'Partners',
                'YouTube',
                'LinkedIn',
                'Newsletter',
                'Community',
                'PR & Media',
                'Paid Ads',
              ].map((channel) => (
                <div
                  key={channel}
                  className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-4 text-center font-bold text-stroke para-14 sm:para-16 flex items-center justify-center min-h-[52px]"
                >
                  {channel}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 7: SELECTED WORK
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stroke">
              Selected <span className="text-primary">Work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((work, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-between h-full min-h-[160px]"
              >
                <div className="text-red-500 mb-5">{work.svg}</div>
                <div>
                  <h3 className="para-18 font-extrabold text-stroke mb-1.5 leading-snug">
                    {work.title}
                  </h3>
                  <p className={`para-14 font-bold ${work.categoryColor}`}>
                    {work.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 8: FAQ & CTA BLOCK
          ============================================ */}
      <FaqSection
        items={videoPodcastFaqItems}
        bannerHeading="Let's tell a great story—and make it travel."
        bannerDescription=""
      />
    </>
  );
}
