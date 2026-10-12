import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { marketingConsultancyFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marketing Consultancy | Mablab — Identify the Right Problem. Then Solve It.",
  description:
    "The results you want depend on getting the first step right. We help you find it. Strategic marketing leadership, growth planning, and advisory.",
};

export default function MarketingConsultancyPage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="MARKETING CONSULTANCY"
        line1={
          <span className="text-white block">
            Identify the{' '}
            <span className="relative text-cyan-400 inline-block">
              right problem.
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
          </span>
        }
        line2={
          <>
            <span className="relative text-cyan-400 inline-block">
              Then solve it.
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
              The results you want depend on getting the first step right.
              <br className="hidden sm:inline" /> We help you find it.
            </span>
          </>
        }
      />

      {/* ============================================
          SECTION 2: WHAT BRINGS YOU HERE?
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What"
            accentText="Brings You Here?"
            accentColor="primary"
            className="mb-4 capitalize"
          />
          <div className="max-w-3xl mb-12">
            <p className="para-18 font-extrabold text-stroke mb-2">
              Every business reaches a point where the next step isn&apos;t obvious.
            </p>
            <p className="para-16 text-gray-600 font-normal leading-relaxed">
              Sometimes you need an outside perspective to make sense of what&apos;s happening, what matters most, and where to focus next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Growth has slowed',
                subtitle: "You're looking for answers.",
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    <polyline points="17 18 23 18 23 12" />
                  </svg>
                ),
              },
              {
                title: 'Marketing feels uncertain',
                subtitle: "You're looking for clarity.",
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                ),
              },
              {
                title: 'Something important is changing',
                subtitle: "You're looking for direction.",
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                ),
              },
              {
                title: 'There are too many possibilities',
                subtitle: "You're looking for focus.",
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="12" r="3" />
                    <path d="M6 9v6" />
                    <path d="M8.5 7.5 15.5 11" />
                    <path d="m8.5 16.5 7-3.5" />
                  </svg>
                ),
              },
              {
                title: "Teams aren't aligned",
                subtitle: "You're looking for alignment.",
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
              },
              {
                title: 'A big decision needs to be made',
                subtitle: "You're looking for confidence.",
                svg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h18" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-between h-full min-h-[160px]"
              >
                <div>
                  <div className="text-red-500 mb-5">{card.svg}</div>
                  <h3 className="para-18 font-extrabold text-stroke mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="para-14 text-gray-500 font-normal leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 3: HOW CAN WE HELP?
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="How Can We"
            accentText="Help?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {[
              {
                title: 'Marketing Strategy',
                subtitle: 'Turn ambition into direction.',
                icon: 'compass',
                customSvg: null,
              },
              {
                title: 'Growth Planning',
                subtitle: 'Identify opportunities, priorities, and next steps.',
                icon: 'trending-up',
                customSvg: null,
              },
              {
                title: 'Go-To-Market Strategy',
                subtitle: 'Launch products, services, and initiatives with confidence.',
                icon: 'rocket',
                customSvg: null,
              },
              {
                title: 'Marketing Audits',
                subtitle: "Understand what's working, what isn't, and why.",
                icon: null,
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: 'Marketing Leadership',
                subtitle: 'Access strategic guidance without a full-time hire.',
                icon: null,
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14v2H5v-2z" fill="currentColor" fillOpacity="0.15" />
                  </svg>
                ),
              },
              {
                title: 'Workshops & Advisory Sessions',
                subtitle: 'Solve challenges, align teams, and make better decisions.',
                icon: null,
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[160px]"
              >
                <div className="text-red-500 mb-5">
                  {card.customSvg ? (
                    card.customSvg
                  ) : card.icon ? (
                    <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                  ) : null}
                </div>
                <h3 className="para-18 font-extrabold text-stroke mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="para-14 text-gray-500 font-normal leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Full Width Bottom Callout Box */}
          <div className="bg-white border-2 border-stroke comic-shadow p-5 md:p-6 flex items-center gap-4">
            <div className="text-red-500 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <p className="para-16 font-extrabold text-stroke leading-snug">
              Available as one-time engagements, ongoing advisory, workshops, and fractional support.
            </p>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 4: OUR APPROACH
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Our"
            accentText="Approach"
            accentColor="primary"
            className="mb-4 capitalize"
          />
          <div className="max-w-4xl mb-12">
            <p className="para-18 font-extrabold text-stroke mb-2">
              Most businesses don&apos;t need more ideas.
            </p>
            <p className="para-16 text-gray-600 font-normal leading-relaxed mb-2">
              They need a better understanding of what&apos;s happening, why it&apos;s happening, and what deserves attention next.
            </p>
            <p className="para-16 text-gray-600 font-normal leading-relaxed">
              Before recommendations comes understanding. Before action comes clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {[
              {
                icon: 'search',
                title: "Understand what's happening",
                text: 'Every business is different. We start by understanding the situation, the context, and the factors influencing performance.',
                customSvg: null,
              },
              {
                icon: null,
                title: 'Find the problem worth solving',
                text: "Symptoms can be misleading. We look beyond what's visible to identify the challenges, opportunities, and decisions that matter most.",
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="22" y1="12" x2="18" y2="12" />
                    <line x1="6" y1="12" x2="2" y2="12" />
                    <line x1="12" y1="6" x2="12" y2="2" />
                    <line x1="12" y1="22" x2="12" y2="18" />
                    <circle cx="12" cy="3" r="3" />
                  </svg>
                ),
              },
              {
                icon: null,
                title: 'Focus on what matters',
                text: 'Not everything deserves attention. We help you prioritise the actions most likely to create meaningful impact.',
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="7" y1="12" x2="17" y2="12" />
                    <line x1="10" y1="18" x2="14" y2="18" />
                  </svg>
                ),
              },
              {
                icon: null,
                title: 'Build a path forward',
                text: 'Once the priorities are clear, we develop practical recommendations and actionable next steps.',
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                ),
              },
              {
                icon: null,
                title: 'Move with confidence',
                text: "Whether you need strategic guidance, leadership support, workshops, or ongoing advisory, we're here to help.",
                customSvg: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-500">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[220px]"
              >
                <div className="text-red-500 mb-4">
                  {card.customSvg ? (
                    card.customSvg
                  ) : card.icon ? (
                    <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                  ) : null}
                </div>
                <h3 className="para-18 font-extrabold text-stroke mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="para-14 text-gray-600 font-normal leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-stroke tracking-tight">
              The wrong problem solved brilliantly is still the wrong problem.
            </p>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 5: 100+ WAYS TO THINK. ONE THING TO FIND.
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="100+ Ways To Think."
            accentText="One Thing To Find."
            accentColor="primary"
            className="mb-2 capitalize"
          />
          <h3 className="para-24 font-extrabold text-stroke mb-4">
            The problem worth solving.
          </h3>
          <div className="max-w-4xl mb-12">
            <p className="para-16 text-gray-700 font-normal leading-relaxed mb-2">
              No two businesses are the same.
            </p>
            <p className="para-16 text-gray-600 font-normal leading-relaxed">
              That&apos;s why we don&apos;t rely on a single methodology, framework, or way of thinking. We draw from research, strategy, marketing, innovation, and decision-making disciplines to understand situations, evaluate opportunities, and make better recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: 'Strategy',
                bullets: [
                  'SWOT Analysis',
                  'TOWS Matrix',
                  'Ansoff Matrix',
                  "Porter's Five Forces",
                  'Blue Ocean Strategy',
                  'BCG Matrix',
                  'McKinsey 7S',
                  'VRIO Analysis',
                  'PESTLE Analysis',
                  'Value Disciplines',
                ],
              },
              {
                title: 'Marketing & Growth',
                bullets: [
                  'STP Framework',
                  'Jobs To Be Done',
                  'Customer Journey Mapping',
                  'Growth Loops',
                  'AARRR Framework',
                  'RACE Framework',
                  'Marketing Funnel Analysis',
                  'Demand Generation Models',
                  'Category Entry Points',
                  'Customer Lifetime Value Analysis',
                ],
              },
              {
                title: 'Research & Insights',
                bullets: [
                  'Voice of Customer Research',
                  'Customer Segmentation',
                  'Persona Development',
                  'Market Mapping',
                  'Competitor Benchmarking',
                  'Win/Loss Analysis',
                  'Kano Model',
                  'Product-Market Fit Analysis',
                  'Problem-Solution Fit Analysis',
                  'Customer Experience Mapping',
                ],
              },
              {
                title: 'Innovation & Decision Making',
                bullets: [
                  'Design Thinking',
                  'Lean Startup',
                  'Business Model Canvas',
                  'Value Proposition Canvas',
                  'Scenario Planning',
                  'Opportunity Solution Trees',
                  'Root Cause Analysis',
                  'Decision Trees',
                  'Systems Thinking',
                  'First Principles Thinking',
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full"
              >
                <h4 className="para-20 font-extrabold text-stroke mb-4 pb-2 border-b-2 border-stroke">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.bullets.map((bullet, j) => (
                    <li key={j} className="para-14 text-gray-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-stroke rounded-full shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Full Width Box at Bottom of Frameworks */}
          <div className="bg-white border-2 border-stroke comic-shadow p-6 md:p-8">
            <h4 className="para-20 font-extrabold text-stroke mb-2">
              And many more.
            </h4>
            <p className="para-16 text-gray-700 leading-relaxed mb-2 font-medium">
              Frameworks don&apos;t solve problems. Understanding does.
            </p>
            <p className="para-14 text-gray-500 leading-relaxed font-normal">
              The value isn&apos;t in knowing a tool. It&apos;s in knowing when to use it, when not to use it, and how to apply it to the situation in front of you.
            </p>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 6: WHAT CAN YOU EXPECT?
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What can you"
            accentText="expect?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: 'Clearer priorities',
                description: "Know what deserves attention and what doesn't.",
              },
              {
                title: 'Better decisions',
                description: 'Make important business and marketing decisions with greater confidence.',
              },
              {
                title: 'Stronger alignment',
                description: 'Get leadership, sales, marketing, and stakeholders moving in the same direction.',
              },
              {
                title: 'Smarter investments',
                description: "Focus time, budget, and effort where they'll have the greatest impact.",
              },
              {
                title: 'Faster progress',
                description: 'Reduce uncertainty and spend less time heading in the wrong direction.',
              },
              {
                title: 'A clearer path forward',
                description: 'Leave with practical recommendations, next steps, and a plan you can act on.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-8 flex flex-col justify-start h-full min-h-[160px]"
              >
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-stroke mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="para-14 text-gray-600 font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Full Width Box at Bottom */}
          <div className="bg-white border-2 border-stroke comic-shadow p-6 md:p-8 space-y-2">
            <p className="para-16 text-stroke font-normal leading-relaxed">
              Not every challenge needs more marketing.
            </p>
            <p className="para-16 text-stroke font-normal leading-relaxed">
              Sometimes it needs a better understanding of what&apos;s really happening.
            </p>
            <p className="para-16 text-stroke font-normal leading-relaxed">
              That&apos;s what we&apos;re here for.
            </p>
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 7: FAQ SECTION WITH CTA BANNER BLOCK
          ============================================ */}
      <FaqSection
        items={marketingConsultancyFaqItems}
        bannerHeading={
          <>
            LET&apos;S FIND THE <span className="text-cyan-400">RIGHT PROBLEM.</span>
          </>
        }
        bannerDescription="Whether you're evaluating opportunities, navigating uncertainty, or preparing for your next stage of growth, we'll help you make sense of what's happening and decide what comes next. Ready to move forward with confidence?"
      />
    </>
  );
}
