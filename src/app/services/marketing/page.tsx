import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import FaqSection from '@/components/sections/home/FaqSection';
import { marketingFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marketing Services | Mablab — Growth formulas that sell",
  description:
    "If your marketing feels more like guesswork than a growth strategy, let's talk. Identify what matters, what doesn't, and where to focus next.",
};

export default function MarketingServicePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="MARKETING"
        badgeColor="bg-cyan-400"
        line1={
          <>
            Marketing that{' '}
            <span className="relative text-cyan-400 inline-block">
              sells.
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
          <div className="para-14 text-cyan-400 font-extrabold tracking-widest mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <span>GET NOTICED.</span>
            <span className="w-8 h-0.5 bg-cyan-400 hidden sm:inline-block"></span>
            <span>GET CONSIDERED.</span>
            <span className="w-8 h-0.5 bg-cyan-400 hidden sm:inline-block"></span>
            <span>GET CHOSEN.</span>
          </div>
        }
      />

      {/* ============================================
          SECTION 2: WHAT WOULD IT TAKE TO SELL MORE?
          ============================================ */}
      <section className="bg-background-light py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What Would It Take To"
            accentText="Sell More?"
            accentColor="primary"
            className="mb-10 capitalize"
          />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'eye',
                title: 'You need more people to know about you.',
              },
              {
                icon: 'trending-up',
                title: 'You need to create more demand for what we sell.',
              },
              {
                icon: 'puzzle',
                title: 'You need to stand out in our market.',
              },
              {
                icon: 'cart',
                title: 'You need more people to buy.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-red-500 mb-4">
                    <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="para-18 font-extrabold text-stroke leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WHAT WE DO.
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What"
            accentText="We Do."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          {/* 8 Cards Grid (4x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'flag',
                title: 'Marketing Strategy',
                bullets: [
                  'Marketing strategy',
                  'Audience',
                  'Positioning',
                  'Competitive',
                  'Analysis',
                ],
              },
              {
                icon: 'rocket',
                title: 'Go-to-Market',
                bullets: ['GTM strategy', 'Launch planning', 'Market entry'],
              },
              {
                icon: 'box',
                title: 'Product Marketing',
                bullets: [
                  'Product positioning',
                  'Messaging',
                  'Sales enablement',
                  'Product launches',
                ],
              },
              {
                icon: 'edit-list',
                title: 'Content Marketing',
                bullets: [
                  'Content strategy',
                  'Thought Leadership',
                  'Content creation',
                  'Distribution',
                ],
              },
              {
                icon: 'megaphone',
                title: 'Campaigns',
                bullets: [
                  'Campaign strategy',
                  'Creative campaigns',
                  'Campaign management',
                ],
              },
              {
                icon: 'target',
                title: 'Demand Generation',
                bullets: [
                  'Lead generation',
                  'Paid media',
                  'SEO',
                  'Social',
                  'Account-based Marketing',
                ],
              },
              {
                icon: 'nodes',
                title: 'Lifecycle Marketing',
                bullets: [
                  'Email',
                  'CRM',
                  'Marketing automation',
                  'Retention',
                  'Customer engagement',
                ],
              },
              {
                icon: 'chart',
                title: 'Marketing Analytics',
                bullets: [
                  'Measurement',
                  'Attribution',
                  'Conversion optimisation',
                  'Performance analysis',
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-start h-full"
              >
                <div className="text-red-500 mb-3">
                  <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="para-24 font-heading font-extrabold text-stroke mb-3">
                  {card.title}
                </h3>
                <ul className="space-y-1.5 para-14 text-gray-500 font-normal leading-relaxed">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gray-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: HOW WE APPROACH MARKETING.
          ============================================ */}
      <section className="bg-[#EFF4FF] py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="How We Approach"
            accentText="Marketing."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          {/* 5 Step Column Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01 / UNDERSTAND',
                stepColor: 'text-cyan-500',
                title: 'The Full Picture',
                bullets: [
                  'Business',
                  'Market',
                  'Audience',
                  'Competition',
                  'Existing position',
                ],
              },
              {
                step: '02 / DECIDE',
                stepColor: 'text-purple-600',
                title: 'The Strategy',
                bullets: [
                  'What needs to happen',
                  'Who we need to reach',
                  'What we need to say',
                ],
              },
              {
                step: '03 / PLAN',
                stepColor: 'text-cyan-500',
                title: 'The Roadmap',
                bullets: [
                  'Channels',
                  'Content',
                  'Campaigns',
                  'Distribution',
                  'Priorities',
                ],
              },
              {
                step: '04 / EXECUTE',
                stepColor: 'text-purple-600',
                title: 'The Action',
                text: 'Put the plan into market across the right activities.',
              },
              {
                step: '05 / LEARN',
                stepColor: 'text-red-500',
                title: 'The Loop',
                bullets: ['Measure', 'Learn', 'Improve', 'Repeat'],
              },
            ].map((col) => (
              <div
                key={col.step}
                className="bg-white border-2 border-stroke comic-shadow-sm p-5 flex flex-col justify-start h-full"
              >
                <span
                  className={`${col.stepColor} font-extrabold text-xs uppercase tracking-wider mb-2 block`}
                >
                  {col.step}
                </span>
                <h3 className="para-24 font-heading font-extrabold text-stroke mb-3">
                  {col.title}
                </h3>
                {col.bullets ? (
                  <ul className="space-y-1.5 para-14 text-gray-500 font-normal leading-relaxed">
                    {col.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-gray-400">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="para-14 text-gray-500 font-normal leading-relaxed">
                    {col.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Yellow Banner Pill at bottom */}
          <div className="flex justify-center mt-10">
            <div className="bg-[#FEF08A] border-2 border-stroke comic-shadow-sm px-6 py-2.5 para-12 font-extrabold text-stroke uppercase text-center inline-flex items-center gap-2">
              <span>THE PROCESS IS NOT LINEAR.</span>
              <span>&rarr;</span>
              <span>Learn. Adjust. Repeat.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: MAKE MARKETING A GROWTH ENGINE.
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Make Marketing A"
            accentText="Growth Engine."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: 'Reach More People',
                subtitle: 'Get discovered by more of the right people.',
              },
              {
                title: 'Create Demand',
                subtitle: 'Make more people want what you sell.',
              },
              {
                title: 'Become The Preference',
                subtitle: 'Give people a reason to choose you.',
              },
              {
                title: 'Generate Sales',
                subtitle: 'Turn attention into revenue.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="para-24 font-extrabold text-stroke mb-2">
                    {card.title}
                  </h3>
                  <p className="para-14 text-gray-500 font-normal leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Often Works With Pills Row */}
          <div className="flex flex-wrap items-center gap-3 para-12 font-extrabold uppercase pt-6 border-t-2 border-gray-100">
            <span className="text-purple-600 font-extrabold">
              OFTEN WORKS WITH:
            </span>
            {['Branding', 'Web', 'Design', 'Content'].map((tag) => (
              <span
                key={tag}
                className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-1 text-stroke font-extrabold text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: SHARED FAQ SECTION
          ============================================ */}
      <FaqSection
        items={marketingFaqItems}
        bannerHeading={
          <>
            MORE MARKETING ISN&apos;T THE <span className="text-cyan-400">ANSWER</span>.
          </>
        }
        bannerDescription="If your marketing feels more like guesswork than a growth strategy, let's talk. Identify what matters, what doesn't, and where to focus next."
      />
    </>
  );
}
