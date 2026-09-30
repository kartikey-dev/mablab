import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/sections/home/FaqSection';
import { prFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PR & Influencer Marketing | Mablab — Become impossible to ignore',
  description:
    'The best opportunities go to the most visible companies. We help you earn attention, build credibility, and put your brand in front of the right people through PR and influencer marketing.',
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const brandNeeds = [
  {
    accent: 'primary',
    label: 'AWARENESS',
    bullets: [
      'We have a launch coming up.',
      'We are entering a new market.',
      'We have a major announcement to make.',
    ],
  },
  {
    accent: 'secondary',
    label: 'POSITIONING',
    bullets: [
      'Nobody knows what makes us different.',
      'We keep getting compared to the wrong competitors.',
      'We want to be known for something.',
    ],
  },
  {
    accent: 'danger',
    label: 'AUTHORITY',
    bullets: [
      'We released original research.',
      "We can't keep talking about ourselves.",
      "We have expertise that isn't reaching the market.",
    ],
  },
  {
    accent: 'stroke',
    label: 'VISIBILITY',
    bullets: [
      'Our founder should be out there more.',
      'We need to be in the right publications.',
      'Our competitors seem to be everywhere.',
    ],
  },
];

const accentColorMap: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  danger: 'bg-danger',
  stroke: 'bg-stroke',
};

const services = [
  {
    title: 'PR STRATEGY',
    bullets: ['Narratives', 'Messaging', 'Story', 'Development'],
    highlight: false,
  },
  {
    title: 'MEDIA RELATIONS',
    bullets: ['Journalists', 'Publications', 'Industry Media'],
    highlight: false,
  },
  {
    title: 'THOUGHT LEADERSHIP',
    bullets: ['Point Of View', 'Development', 'Expert Commentary', 'Bylines'],
    highlight: false,
  },
  {
    title: 'FOUNDER & EXECUTIVE PR',
    bullets: ['Executive Visibility', 'Speaking', 'Opportunities', 'Positioning'],
    highlight: false,
  },
  {
    title: 'INFLUENCER STRATEGY',
    bullets: ['Creator Selection', 'Campaign', 'Planning', 'Partnerships'],
    highlight: false,
  },
  {
    title: 'CREATOR PARTNERSHIPS',
    bullets: ['Influencers', 'Experts', 'Industry', 'Voices'],
    highlight: true,
  },
  {
    title: 'CAMPAIGNS',
    bullets: ['Launches', 'Announcements', 'Initiatives'],
    highlight: true,
  },
  {
    title: 'OUTREACH & RELATIONSHIP BUILDING',
    bullets: ['Media', 'Creators', 'Communities'],
    highlight: true,
  },
];

const portfolioTags = [
  'PR Campaigns',
  'Media Coverage',
  'Founder Visibility',
  'Thought Leadership',
  'Influencer Collaborations',
  'Launch Campaigns',
  'Creator Partnerships',
  'Industry Features',
];

const mediaLogos = [
  { name: 'Forbes', style: 'font-serif font-bold text-stroke text-lg' },
  { name: 'THE ECONOMIC TIMES', style: 'font-sans font-bold text-stroke text-sm tracking-tight' },
  { name: 'YOURSTORY', style: 'font-sans font-extrabold text-danger text-sm tracking-widest' },
  { name: 'BusinessLine', style: 'font-serif font-bold text-stroke text-base' },
  { name: 'Inc.', style: 'font-serif font-black italic text-stroke text-2xl' },
  { name: 'mint', style: 'font-sans font-bold text-[#E84B17] text-xl italic' },
  { name: 'ET BRAND EQUITY', style: 'font-sans font-extrabold text-stroke text-xs tracking-widest' },
  { name: 'ENTREPRENEUR\u00A0INDIA', style: 'font-sans font-bold text-stroke text-xs tracking-tight' },
];

const caseStudies = [
  {
    num: '01',
    numColor: 'bg-secondary',
    title: 'Founder Visibility Initiative',
    body: 'Built thought leadership for a fintech founder, leading to 25+ media features and speaking opportunities.',
  },
  {
    num: '02',
    numColor: 'bg-danger',
    title: 'Product Launch Campaign',
    body: '360° PR campaign for a B2B SaaS platform resulting in strong industry coverage and market buzz.',
  },
  {
    num: '03',
    numColor: 'bg-primary',
    title: 'Research & Thought Leadership',
    body: 'Positioned a research report with top-tier media placements and industry conversations.',
  },
  {
    num: '04',
    numColor: 'bg-stroke',
    title: 'Influencer Collaboration',
    body: 'Ran creator-led campaigns that drove awareness, trust and engagement at scale.',
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function PrInfluencerPage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <ServiceHero
        badgeText="PR & INFLUENCER MARKETING"
        line1="The best opportunities go to the"
        line2={
          <>
            <span className="text-cyan-400 underline decoration-cyan-400 decoration-4">
              most visible
            </span>{' '}
            companies.
          </>
        }
      />

      {/* ============================================
          SECTION 2: WHAT DOES YOUR BRAND NEED?
          ============================================ */}
      <section className="bg-background-light py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What Does Your"
            accentText="Brand Need?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandNeeds.map((card) => (
              <div
                key={card.label}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 shrink-0 ${accentColorMap[card.accent]}`}
                  />
                  <span className="text-stroke uppercase para-18">
                    {card.label}
                  </span>
                </div>
                <ul className="space-y-2">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="para-14 text-stroke/80 font-medium flex items-start gap-2"
                    >
                      <span className="text-stroke/40 font-bold text-xs mt-0.5">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: FIND THE STORY — SERVICES GRID
          ============================================ */}
      <section className="bg-background py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <SectionHeading className="capitalize">
              <span className="text-stroke">Find The Story. Find The Audience. </span>
              <span className="text-primary">Find The Messenger.</span>
            </SectionHeading>
          </div>

          <div className="border-2 border-stroke overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className={`border-b border-r border-stroke/30 px-6 py-5 flex flex-col gap-3 last:border-r-0 ${svc.highlight ? 'bg-primary' : 'bg-white'
                    }`}
                >
                  <h3
                    className={`para-12 font-extrabold uppercase tracking-wider ${svc.highlight ? 'text-white' : 'text-stroke'
                      }`}
                  >
                    {svc.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {svc.bullets.map((b) => (
                      <li
                        key={b}
                        className={`para-14 font-normal flex items-center gap-1.5 ${svc.highlight ? 'text-white/80' : 'text-gray-600'
                          }`}
                      >
                        <span
                          className={`w-1 h-1 rounded-full shrink-0 ${svc.highlight ? 'bg-white/60' : 'bg-stroke'
                            }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: SELECTED WORK
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Selected"
            accentText="Work"
            accentColor="primary"
            className="mb-10 capitalize"
          />

          {/* Portfolio spectrum tags */}
          <div className="mb-8">
            <p className="text-[10px] font-extrabold text-stroke/40 uppercase tracking-widest mb-3">
              PORTFOLIO SPECTRUM
            </p>
            <div className="flex flex-wrap gap-2">
              {portfolioTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-stroke comic-shadow-sm px-3 py-1 para-12 font-semibold text-stroke"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Media placements table */}
          <div className="mb-10">
            <p className="text-[10px] font-extrabold text-stroke uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary inline-block" />
              MEDIA PLACEMENT ENVIRONMENTS // STRATEGIC TIERS
            </p>
            <div className="border-2 border-stroke grid grid-cols-2 sm:grid-cols-4">
              {mediaLogos.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center justify-center py-5 px-3 min-h-[64px] border border-stroke/20"
                >
                  <span className={m.style}>{m.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case study cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.num}
                className="border-2 border-stroke comic-shadow bg-white p-6 flex flex-col gap-3 relative"
              >
                <span className={`text-white border border-stroke font-extrabold para-12 p-1 inline-block absolute -top-1.5 -left-1 ${cs.numColor}`}>{cs.num}</span>
                <h3 className="para-18 font-extrabold text-stroke leading-snug">{cs.title}</h3>
                <p className="para-14 text-gray-600 font-normal leading-relaxed">{cs.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: FAQ
          ============================================ */}
      <FaqSection
        items={prFaqItems}
        bannerHeading={
          <>
            BECOME IMPOSSIBLE{' '}
            <span className="text-cyan-text">TO IGNORE.</span>
          </>
        }
        bannerDescription="For customers. For talent. For investors. For your industry."
      />
    </>
  );
}
