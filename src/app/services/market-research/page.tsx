import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { marketResearchFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Market Research Services | Mablab — Find Your Opportunities. Understand Your Risks.",
  description:
    "Research reduces guesswork. We help you find opportunities and understand risks with customer research, market sizing, competitor benchmarking, and evidence-based insights.",
};

export default function MarketResearchPage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="MARKET RESEARCH"
        line1={
          <>
            Find your{' '}
            <span className="relative text-cyan-400 inline-block">
              opportunities.
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
          </>
        }
        line2={
          <>
            Understand{' '}
            <span className="relative text-cyan-400 inline-block">
              your risks.
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
          </>
        }
      />

      {/* ============================================
          SECTION 2: EVERY IMPORTANT DECISION STARTS WITH THE RIGHT ANSWER
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Every Important Decision Starts With The"
            accentText="Right Answer."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-3">
            {[
              {
                num: '01',
                tabBg: 'bg-primary',
                title: 'Understanding Customers',
                points: [
                  "We don't know why customers choose competitors.",
                  "Customers aren't buying for the reasons we expected.",
                  "We don't know what customers actually care about.",
                ],
              },
              {
                num: '02',
                tabBg: 'bg-[#00B4D8]',
                title: 'Understanding Markets',
                points: [
                  'We are entering a new market.',
                  'We are targeting a new audience.',
                  "We don't know if there is enough demand.",
                ],
              },
              {
                num: '03',
                tabBg: 'bg-[#E11D48]',
                title: 'Understanding Competition',
                points: [
                  "Competitors keep winning and we don't know why.",
                  "We don't know how we're being compared.",
                  "We don't know what makes us different anymore.",
                ],
              },
              {
                num: '04',
                tabBg: 'bg-stroke',
                title: 'Understanding Opportunities',
                points: [
                  'We have an idea and need to validate it.',
                  'We are about to make a major decision.',
                  'We need evidence before investing further.',
                ],
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 relative flex flex-col justify-start h-full min-h-[280px]"
              >
                {/* Top Corner Number Tab */}
                <div
                  className={`absolute -top-3.5 left-4 px-2 py-0.5 border border-stroke text-white font-mono font-bold text-xs select-none ${card.tabBg}`}
                >
                  {card.num}
                </div>

                <h3 className="para-20 font-extrabold text-stroke mb-6 mt-1 leading-snug">
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
          SECTION 3: FIND THE ANSWERS BEFORE MAKING THE DECISION
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Find The Answers Before"
            accentText="Making The Decision."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Customer Research',
                items: [
                  'Customer Interviews',
                  'Voice of Customer Research',
                  'Customer Behaviour Analysis',
                  'Customer Journey Research',
                ],
              },
              {
                title: 'Market Research',
                items: [
                  'Market Analysis',
                  'Market Sizing',
                  'Industry Research',
                  'Trend Analysis',
                ],
              },
              {
                title: 'Competitor Research',
                items: [
                  'Competitor Analysis',
                  'Positioning Analysis',
                  'Competitive Benchmarking',
                  'Gap Analysis',
                ],
              },
              {
                title: 'Audience Research',
                items: [
                  'Audience Segmentation',
                  'Persona Development',
                  'Audience Profiling',
                  'Target Market Analysis',
                ],
              },
              {
                title: 'Brand Research',
                items: [
                  'Brand Perception Research',
                  'Brand Awareness Research',
                  'Brand Association Analysis',
                  'Positioning Validation',
                ],
              },
              {
                title: 'Opportunity Research',
                items: [
                  'Concept Testing',
                  'Demand Validation',
                  'Opportunity Mapping',
                  'Market Entry Research',
                ],
              },
            ].map((col, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 flex flex-col justify-start h-full min-h-[220px]"
              >
                <h3 className="para-18 font-extrabold text-stroke mb-4 leading-snug">
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="para-14 text-gray-700 font-medium flex items-center gap-2.5"
                    >
                      <span className="text-stroke text-xs shrink-0 select-none">
                        ■
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
          SECTION 4: THE FRAMEWORKS WE USE TO UNCOVER WHAT MATTERS
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="The frameworks we use to"
            accentText="uncover what matters."
            accentColor="primary"
            className="mb-12 capitalize"
          />
          <h2 className="hidden" aria-hidden="true">
            The Frameworks We Use To Uncover What Matters.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Customer Understanding',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
                items: [
                  'Voice of Customer (VoC)',
                  'Jobs To Be Done (JTBD)',
                  'Customer Journey Mapping',
                  'Persona & Segmentation',
                ],
              },
              {
                title: 'Brand Understanding',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.12" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                items: [
                  'Brand Health Tracking',
                  'Perceptual Mapping',
                ],
              },
              {
                title: 'Competition Understanding',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                    <line x1="13" y1="19" x2="19" y2="13" />
                    <line x1="16" y1="16" x2="20" y2="20" />
                    <line x1="19" y1="21" x2="21" y2="19" />
                    <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
                    <line x1="5" y1="14" x2="9" y2="18" />
                    <line x1="7" y1="17" x2="4" y2="20" />
                    <line x1="3" y1="19" x2="5" y2="21" />
                  </svg>
                ),
                items: [
                  'Competitor Benchmarking',
                ],
              },
              {
                title: 'Opportunity Understanding',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                ),
                items: [
                  'Concept Testing',
                  'Demand Validation',
                  'Opportunity Mapping',
                  'White Space Analysis',
                ],
              },
              {
                title: 'Market Understanding',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                items: [
                  'Market Sizing (TAM / SAM / SOM)',
                  'Trend Analysis',
                  'Category Analysis',
                ],
              },
              {
                title: 'Behaviour & Sentiment',
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                items: [
                  'Social Listening',
                  'Ethnographic Research',
                ],
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-7 flex flex-col justify-start h-full min-h-[200px]"
              >
                <div className="text-red-500 mb-4">{cat.svg}</div>
                <h3 className="para-18 font-extrabold text-stroke mb-3 leading-snug">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="para-14 text-gray-600 font-medium flex items-center gap-2"
                    >
                      <span className="text-primary text-base leading-none select-none font-bold">
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
          SECTION 5: FAQ & CTA BLOCK
          ============================================ */}
      <FaqSection
        items={marketResearchFaqItems}
        bannerHeading="Get the clarity you need."
        bannerDescription="Whether you're exploring a new market, evaluating an opportunity, understanding customers, or assessing the competition, we'll help you make your next move with confidence."
      />
    </>
  );
}
