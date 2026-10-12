import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { eventsFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events Services | Mablab — Create Opportunities. Build Relationships.",
  description:
    "We help you plan, participate in, and amplify events that bring the right people together and drive growth. End-to-end corporate, brand, and industry event management.",
};

export default function EventsPage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="EVENTS"
        line1="Create opportunities."
        line2={
          <>
            <span className="relative text-cyan-400 inline-block">
              Build relationships.
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
              We help you plan, participate in, and amplify events that bring the right people together and drive growth.
            </span>
          </>
        }
      />

      {/* ============================================
          SECTION 2: EVERY EVENT STARTS WITH A GOAL
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Every Event Starts With A"
            accentText="Goal."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Reach The Right People',
                points: [
                  'We need to get in front of decision-makers.',
                  'We need access to a specific audience.',
                  'We need more face time with prospects.',
                ],
              },
              {
                title: 'Strengthen Relationships',
                points: [
                  'We want deeper engagement than digital channels allow.',
                  'We need stronger relationships with customers and partners.',
                  'We want more meaningful conversations.',
                ],
              },
              {
                title: 'Create Momentum',
                points: [
                  'We have a launch coming up.',
                  'We have a major announcement to make.',
                  'We need people paying attention.',
                ],
              },
              {
                title: 'Build A Community',
                points: [
                  'We want to bring people together.',
                  'We want customers to engage with each other.',
                  'We want to create ongoing participation around our brand.',
                ],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 flex flex-col justify-start h-full min-h-[260px]"
              >
                <h3 className="para-20 font-extrabold text-stroke mb-6 leading-snug">
                  {card.title}
                </h3>
                <ul className="space-y-4">
                  {card.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="para-14 sm:para-15 text-gray-600 font-medium flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="text-stroke font-bold text-base select-none shrink-0 leading-none mt-0.5">
                        ›
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 3: TURN EVENTS INTO OPPORTUNITIES
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Turn Events Into"
            accentText="Opportunities."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Event Strategy',
                subhead: "Make sure you're investing in the right opportunities.",
                bulletColor: 'text-primary',
                items: [
                  'Event Research & Selection',
                  'Sponsorship Strategy',
                  'Speaking Opportunities',
                  'Event Marketing Strategy',
                  'Event Planning & Coordination',
                  'Event Promotion',
                ],
              },
              {
                title: 'Event Participation',
                subhead: 'Show up with a clear purpose and a plan.',
                bulletColor: 'text-[#0284C7]',
                items: [
                  'Conferences & Trade Shows',
                  'Exhibitions',
                  'Sponsorships',
                  'Booth Strategy & Design',
                  'Event Messaging',
                  'On-Ground Engagement',
                ],
              },
              {
                title: 'Event Creation',
                subhead: 'Bring people together around your brand.',
                bulletColor: 'text-stroke',
                items: [
                  'Webinars & Virtual Events',
                  'Product Launches',
                  'Brand Launches',
                  'Corporate Events',
                  'Community Events',
                  'Networking Events',
                ],
              },
              {
                title: 'Event Amplification',
                subhead: 'Extend the impact beyond the event itself.',
                bulletColor: 'text-red-500',
                items: [
                  'Event Content Creation',
                  'Social Media Coverage',
                  'PR & Media Outreach',
                  'Speaker Promotion',
                  'Post-Event Campaigns',
                  'Lead Nurturing',
                ],
              },
            ].map((col, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-8 flex flex-col justify-start h-full min-h-[280px]"
              >
                <h3 className="text-2xl font-extrabold text-stroke mb-2">
                  {col.title}
                </h3>
                <p className="para-15 text-gray-500 italic font-normal mb-6">
                  {col.subhead}
                </p>
                <ul className="space-y-2.5">
                  {col.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="para-15 text-gray-700 font-medium flex items-center gap-2.5"
                    >
                      <span className={`${col.bulletColor} text-lg leading-none select-none font-bold`}>
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 4: EVERY SUCCESSFUL EVENT STARTS WITH CLARITY
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Every Successful Event"
            accentText="Starts With Clarity"
            accentColor="primary"
            className="mb-12 capitalize"
          />
          <h2 className="hidden" aria-hidden="true">
            Every Successful Event Starts With Clarity.
          </h2>

          <div className="space-y-3 sm:space-y-4 max-w-6xl mx-auto">
            {[
              {
                phase: 'Goal',
                desc: 'Know What Success Looks Like Before The Event Begins.',
                numColor: 'text-primary',
                steps: [
                  { num: '01', text: 'Define clear objectives and success metrics.' },
                  { num: '02', text: 'Align the event with business and marketing goals.' },
                  { num: '03', text: 'Identify the outcomes you want to create.' },
                ],
              },
              {
                phase: 'Audience',
                desc: 'Reach The People Who Matter Most.',
                numColor: 'text-cyan-600',
                steps: [
                  { num: '01', text: 'Identify the right audience, stakeholders and decision-makers.' },
                  { num: '02', text: 'Understand what matters to them and why they should engage.' },
                  { num: '03', text: 'Build messaging and experiences around their interests.' },
                ],
              },
              {
                phase: 'Experience',
                desc: 'Create Something Worth Remembering.',
                numColor: 'text-gray-800',
                steps: [
                  { num: '01', text: 'Design experiences that reflect your brand and objectives.' },
                  { num: '02', text: 'Create moments that attract attention and spark conversations.' },
                  { num: '03', text: 'Ensure every touchpoint reinforces the intended message.' },
                ],
              },
              {
                phase: 'Engagement',
                desc: 'Turn Attendance Into Interaction.',
                numColor: 'text-red-500',
                steps: [
                  { num: '01', text: 'Encourage meaningful conversations and participation.' },
                  { num: '02', text: 'Create opportunities for networking, learning and discovery.' },
                  { num: '03', text: 'Capture interest, feedback, leads and relationships.' },
                ],
              },
              {
                phase: 'Follow-Through',
                desc: 'Extend The Impact Beyond The Event.',
                numColor: 'text-primary',
                steps: [
                  { num: '01', text: 'Nurture leads, relationships and opportunities.' },
                  { num: '02', text: 'Repurpose event content across marketing channels.' },
                  { num: '03', text: 'Measure outcomes and identify the next steps.' },
                ],
              },
            ].map((row, idx, arr) => (
              <React.Fragment key={row.phase}>
                <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left side: Stage name & description */}
                    <div className="lg:w-1/4 shrink-0 pr-4">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-stroke mb-2">
                        {row.phase}
                      </h3>
                      <p className="para-14 text-gray-500 font-medium leading-relaxed">
                        {row.desc}
                      </p>
                    </div>

                    {/* Right side: 3 numbered action boxes */}
                    <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {row.steps.map((st) => (
                        <div
                          key={st.num}
                          className="bg-white border border-stroke p-4 sm:p-5 flex items-start gap-3.5 min-h-[92px]"
                        >
                          <span className={`para-14 font-extrabold ${row.numColor} shrink-0 mt-0.5`}>
                            {st.num}
                          </span>
                          <span className="para-13 sm:para-14 text-gray-700 font-medium leading-relaxed">
                            {st.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Downward Arrow between rows */}
                {idx < arr.length - 1 && (
                  <div className="flex justify-center py-1 sm:py-2" aria-hidden="true">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <polyline points="19 12 12 19 5 12" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 5: EVENTS OF ALL SHAPES AND SIZES
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Events Of All"
            accentText="Shapes And Sizes."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          {/* 6 Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Brand & Product',
                svg: (
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
                svg: (
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
                svg: (
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
                svg: (
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
                svg: (
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
                svg: (
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
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 flex flex-col justify-start h-full min-h-[220px]"
              >
                <div className="text-red-500 mb-4">{cat.svg}</div>
                <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
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
              </div>
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
            <h3 className="para-20 font-extrabold text-stroke mb-2">
              End-to-End Event Management
            </h3>
            <p className="para-16 text-gray-600 font-normal leading-relaxed">
              From planning and vendor management to production, promotion and on-ground execution, we manage every aspect of your event.
            </p>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 6: FAQ & CTA BLOCK
          ============================================ */}
      <FaqSection
        items={eventsFaqItems}
        bannerHeading="Turn events into business outcomes."
        bannerDescription="Whether you're hosting, exhibiting, sponsoring or participating, we'll help you create meaningful connections, stronger relationships and lasting business opportunities."
      />
    </>
  );
}
