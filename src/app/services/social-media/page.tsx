import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import FaqSection from '@/components/sections/home/FaqSection';
import { socialMediaFaqItems } from '@/data/faq';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Social Media Services | Mablab — Grab attention. Create connection.',
  description:
    "If your content isn't creating the impact you'd hoped for, let's talk. Identify what resonates with your audience and what deserves more attention.",
};

export default function SocialMediaServicePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="SOCIAL MEDIA"
        line1="Grab attention."
        line2={
          <>
            Create <span className="relative text-cyan-400 inline-block">
              connection.
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
          SECTION 2: WHAT DOES YOUR SOCIAL MEDIA NEED?
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What Does Your"
            accentText="Social Media Need?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'eye',
                title: 'Get Noticed',
                subtitle: 'Reach more of the right people.',
              },
              {
                icon: 'chat',
                title: 'Build Trust',
                subtitle: 'Credibility through consistent content.',
              },
              {
                icon: 'pen',
                title: 'Stand Apart',
                subtitle: 'Develop a voice people recognize and remember.',
              },
              {
                icon: 'refresh',
                title: 'Stay Relevant',
                subtitle: 'Keep showing up long after the first impression.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-red-500 mb-4">
                    <IconComponent name={card.icon} className="w-8 h-8 text-red-500" />
                  </div>
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
        </div>
      </section>

      {/* ============================================
          SECTION 3: WHAT WE DO.
          ============================================ */}
      <section className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What"
            accentText="We Do."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'chart',
                title: 'Social Strategy',
                bullets: ['Audit & Benchmarking', 'Channel Architecture', 'KPI Frameworks'],
                showButton: false
              },
              {
                icon: 'nodes',
                title: 'Platform Strategy',
                bullets: ['Algorithm Optimization', 'Feature Adoption', 'Platform-Specific Playbooks'],
                showButton: false
              },
              {
                icon: 'box',
                title: 'Content Strategy',
                bullets: ['Content Pillars', 'Narrative Arcs', 'Distribution Planning'],
                showButton: false
              },
              {
                icon: 'pen',
                title: 'Copy & Creative',
                bullets: [
                  'Visual Identity Systems',
                  'High-Impact Short-Form Video',
                  'Conversion-Led Copywriting',
                ],
                showButton: false
              },
              {
                icon: 'star',
                title: 'Founder / Executive Social',
                bullets: ['Personal Branding', 'Thought Leadership', 'Ghostwriting'],
                showButton: false
              },
              {
                icon: 'chat',
                title: 'Community Management',
                bullets: ['Active Engagement', 'Crisis Management', 'Sentiment Analysis'],
                showButton: false
              },
              {
                icon: 'megaphone',
                title: 'Social Campaigns',
                bullets: ['Product Launches', 'Influencer Integration', 'Paid Social Amplification'],
                showButton: false
              },
              {
                icon: '',
                title: 'Need custom approach?',
                bullets: [],
                span: 'lg:col-span-2 text-center items-center justify-center',
                showButton: true,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between ${card.span ? card.span : ''
                  }`}
              >
                <div className={`text-red-500 mb-4 ${card.span ? "hidden" : ""}`}>
                  <IconComponent name={card.icon} className="w-8 h-8 text-red-500" />
                </div>
                <h3 className={`para-24 font-extrabold mb-4 ${card.span ? "text-primary" : "text-stroke"}`}>
                  {card.title}
                </h3>
                <ul className={card.span ? "hidden" : "space-y-2"}>
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="para-14 text-gray-600 font-normal flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-stroke rounded-full inline-block" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                {card.showButton && <Button href="/contact" variant="secondary" size="md">
                  Let&apos;s Talk!
                </Button>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: HOW WE BUILD A SOCIAL PRESENCE
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="How We Build A"
            accentText="Social Presence"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              {
                step: '01',
                title: 'Listen',
                description: 'Audience · Conversations · Culture · Competition',
              },
              {
                step: '02',
                title: 'Find the angle',
                description: 'What can we say that is relevant, distinctive and worth noticing?',
              },
              {
                step: '03',
                title: 'Create',
                description: 'Ideas · Copy · Design · Video',
              },
              {
                step: '04',
                title: 'Publish',
                description: 'The right platform · Format · Timing · Distribution',
              },
              {
                step: '05',
                title: 'Learn',
                description: 'Engagement · Behaviour · Performance · Feedback',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border-2 border-stroke comic-shadow p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-red-500 font-black text-sm tracking-wider uppercase block mb-2">
                    {item.step} — {item.title}
                  </span>
                  <p className="para-14 text-stroke font-semibold mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FFF8E7] border-2 border-stroke comic-shadow-sm px-6 py-3 max-w-max mx-auto text-center">
            <p className="text-stroke font-extrabold text-sm uppercase tracking-wide">
              ⚡ Learn feeds back into Listen.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: WHAT HAPPENS WHEN YOU DECIDE TO WORK WITH US
          ============================================ */}
      <section className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What Happens When You Decide To"
            accentText="Work With Us."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {[
              {
                category: 'INPUT',
                step: '01 FIRST CALL',
                icon: 'chat',
              },
              {
                category: 'DEFINE',
                step: '02 STRATEGY',
                icon: 'compass',
              },
              {
                category: 'CREATE',
                step: '03 FIRST CONTENT',
                icon: 'pen',
              },
              {
                category: 'PUBLISH',
                step: '04 GO LIVE',
                icon: 'rocket',
              },
              {
                category: 'OPTIMISE',
                step: '05 LEARN & IMPROVE',
                icon: 'trending-up',
              },
            ].map((col) => (
              <div
                key={col.step}
                className="bg-white border-2 border-stroke comic-shadow p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="text-cyan-600 font-extrabold text-xs uppercase tracking-wider block mb-2">
                    {col.category}
                  </span>
                  <h4 className="font-extrabold text-stroke text-base mb-4">
                    {col.step}
                  </h4>
                </div>
                <div className="text-red-500 mt-2">
                  <IconComponent name={col.icon} className="w-6 h-6 text-red-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-gray-500 font-extrabold text-xs uppercase tracking-wider text-center">
            NOTE: NOTHING STAYS STATIC. FEEDBACK LOOPS ARE BUILT-IN.
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: SHARED FAQ SECTION
          ============================================ */}
      <FaqSection
        items={socialMediaFaqItems}
        bannerHeading={
          <>
            MORE CONTENT ISN&apos;T THE <span className="text-cyan-400">ANSWER</span>.
          </>
        }
        bannerDescription="If your content isn't creating the impact you'd hoped for, let's talk. Identify what resonates with your audience and what deserves more attention."
      />
    </>
  );
}
