import React from 'react';
import Link from 'next/link';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { webFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development | Mablab — Turn your website into a business asset',
  description:
    'Make every visit count. We design and build websites that are fast, brand-led, and built to convert — supporting your marketing, your brand, and your growth.',
};

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const websiteNeeds = [
  {
    title: 'A New Website',
    subtitle: 'Build a strong foundation from day one.',
  },
  {
    title: 'Tell Our Story Better',
    subtitle: 'Communicate clearly and build trust faster.',
  },
  {
    title: 'Make It Easier To Use',
    subtitle: 'Create a better experience for every visitor.',
  },
  {
    title: 'Get More Enquiries',
    subtitle: 'Turn attention into action.',
  },
];

const whatWeDo = [
  {
    icon: 'compass',
    title: 'Strategy & Site Architecture',
    bullets: ['User journeys', 'Site structure', 'Content hierarchy', 'Conversion pathways'],
  },
  {
    icon: 'palette',
    title: 'Brand-Led Web Design',
    bullets: ['Brand consistency', 'Intuitive interfaces', 'Responsive design', 'Memorable experiences'],
  },
  {
    icon: 'edit-list',
    title: 'Content & Messaging',
    bullets: ['Clear communication', 'Strategic storytelling', 'Stronger positioning', 'Action-focused copy'],
  },
  {
    icon: 'layout',
    title: 'Landing Pages & Campaigns',
    bullets: ['Product launches', 'Lead generation', 'Campaign support', 'Conversion-focused experiences'],
  },
  {
    icon: 'search',
    title: 'Search & Discoverability',
    bullets: ['Search visibility', 'SEO foundations', 'AI search readiness', 'Organic growth'],
  },
  {
    icon: 'nodes',
    title: 'Intelligent Experiences',
    bullets: ['AI assistants', 'Smart automation', 'Personalised interactions', 'Enhanced user experiences'],
  },
  {
    icon: 'trending-up',
    title: 'Performance & Optimisation',
    bullets: ['Faster load times', 'Mobile-first experiences', 'Better usability', 'Continuous optimisation'],
  },
  {
    icon: 'refresh',
    title: 'Support & Evolution',
    bullets: ['Ongoing improvements', 'Technical support', 'Performance monitoring', 'Future enhancements'],
  },
];

const builtToPerform = [
  {
    icon: 'thunder',
    title: 'Fast',
    subtitle: 'Built for speed and usability.',
  },
  {
    icon: 'layouts',
    title: 'Mobile First',
    subtitle: 'Designed for the way people browse today.',
  },
  {
    icon: 'search',
    title: 'Search Ready',
    subtitle: 'Structured for visibility and discoverability.',
  },
  {
    icon: 'trending-up',
    title: 'Future Ready',
    subtitle: 'Built to evolve as your business grows.',
  },
];

const howWeDeliver = [
  {
    icon: 'search',
    title: 'Discover',
    subtitle: 'Understand your business, audience and goals.',
  },
  {
    icon: 'fork',
    title: 'Structure',
    subtitle: 'Map content, journeys and user experience.',
  },
  {
    icon: 'shapes',
    title: 'Design & Build',
    subtitle: 'Bring strategy, content, design and development together.',
  },
  {
    icon: 'rocket',
    title: 'Launch',
    subtitle: 'Test, refine and prepare for the world.',
  },
  {
    icon: 'trending-up',
    title: 'Improve',
    subtitle: 'Monitor performance and identify opportunities for growth.',
  },
];

const whyMabLab = [
  {
    num: '01',
    numColor: 'bg-secondary',
    title: 'Strategy First',
    body: 'Every decision is tied to a business objective.',
  },
  {
    num: '02',
    numColor: 'bg-primary',
    title: 'Brand Led',
    body: 'Your website should feel like an extension of your brand.',
  },
  {
    num: '03',
    numColor: 'bg-danger',
    title: 'Built For Performance',
    body: 'Designed to perform, not just impress.',
  },
  {
    num: '04',
    numColor: 'bg-stroke',
    title: 'Ongoing Partnership',
    body: 'We stay involved long after the website goes live.',
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function WebDevelopmentPage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <ServiceHero
        badgeText="WEB DEVELOPMENT"
        line1="Make every"
        line2={
          <>
            <span className="text-cyan-400 underline decoration-cyan-400 decoration-4">
              visit count
            </span>
            .
          </>
        }
      />

      {/* Hero subtitle strip */}
      <div className="bg-primary py-4 border-t border-white/10">
        <p className="text-center text-white/80 font-medium text-base tracking-wide">
          Designed to build trust. Built to drive action.
        </p>
      </div>

      {/* ============================================
          SECTION 2: WHAT DOES YOUR WEBSITE NEED?
          ============================================ */}
      <section className="bg-background-light py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What Does Your"
            accentText="Website Need?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {websiteNeeds.map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col gap-2"
              >
                <h3 className="para-18 font-extrabold text-stroke leading-snug">{card.title}</h3>
                <p className="para-14 text-gray-500 font-normal leading-relaxed">{card.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Consultation strip */}
          <div className="border-2 border-stroke bg-white flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 comic-shadow">
            <p className="para-14 text-stroke font-medium">
              Discuss your ideas with a Web Dev Lead — in 30 minutes free consultation call.
            </p>
            <Link
              href="/contact"
              className="shrink-0 bg-secondary border-2 border-stroke comic-shadow-sm px-5 py-2 para-12 font-extrabold text-white uppercase tracking-wider hover:bg-secondary/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WHAT WE DO — 2×4 GRID
          ============================================ */}
      <section className="bg-background-light py-16 md:py-[90px] border-t border-stroke/10">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What We"
            accentText="Do"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col gap-4"
              >
                <div className="text-danger">
                  <IconComponent name={card.icon} className="w-7 h-7 text-danger" />
                </div>
                <h3 className="para-18 font-extrabold text-stroke leading-snug">{card.title}</h3>
                <ul className="space-y-1.5">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="para-14 text-gray-500 font-normal flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 bg-stroke/40 rounded-full shrink-0" />
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
          SECTION 4: BUILT TO PERFORM
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Built To"
            accentText="Perform"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {builtToPerform.map((card) => (
              <div
                key={card.title}
                className="bg-background-light border-2 border-stroke comic-shadow p-6 flex flex-col gap-3"
              >
                <div className="text-danger">
                  <IconComponent name={card.icon} className="w-7 h-7 text-danger" />
                </div>
                <h3 className="para-18 font-extrabold text-stroke">{card.title}</h3>
                <p className="para-14 text-gray-500 font-normal leading-relaxed">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: HOW WE DELIVER — 5-STEP PROCESS
          ============================================ */}
      <section className="bg-background-light py-16 md:py-[90px] border-t border-stroke/10">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="How We"
            accentText="Deliver"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howWeDeliver.map((step) => (
              <div
                key={step.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col gap-3"
              >
                <div className="text-danger">
                  <IconComponent name={step.icon} className="w-6 h-6 text-danger" />
                </div>
                <h3 className="para-18 font-extrabold text-stroke">{step.title}</h3>
                <p className="para-14 text-gray-500 font-normal leading-relaxed">{step.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: WHY MAB LAB
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Why"
            accentText="MAB Lab"
            accentColor="primary"
            className="mb-10 capitalize"
          />

          {/* 2×2 numbered reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-2 border-stroke mb-8">
            {whyMabLab.map((item) => (
              <div
                key={item.num}
                className="border border-stroke/30 p-6 flex flex-col gap-2 relative"
              >
                <span
                  className={`absolute top-0 left-0 ${item.numColor} text-white para-12 font-extrabold px-2 py-0.5`}
                >
                  {item.num}
                </span>
                <h3 className="para-18 font-extrabold text-stroke mt-5">{item.title}</h3>
                <p className="para-14 text-gray-500 font-normal leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Link cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-2 border-stroke p-6 flex flex-col gap-3 comic-shadow bg-white">
              <h3 className="para-24 font-extrabold">
                <span className="text-stroke">See </span>
                <span className="text-primary">The Work</span>
              </h3>
              <p className="para-14 text-gray-500 font-normal">
                Explore selected projects and the thinking behind them.
              </p>
              <div className="border-b border-stroke/20 mt-1" />
              <Link
                href="/contact"
                className="para-12 font-extrabold text-secondary uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
              >
                VIEW PROJECTS <span>→</span>
              </Link>
            </div>
            <div className="border-2 border-stroke p-6 flex flex-col gap-3 comic-shadow bg-white">
              <h3 className="para-24 font-extrabold">
                <span className="text-stroke">See How </span>
                <span className="text-primary">We Think</span>
              </h3>
              <p className="para-14 text-gray-500 font-normal">
                Insights, perspectives and lessons from our work.
              </p>
              <div className="border-b border-stroke/20 mt-1" />
              <Link
                href="/contact"
                className="para-12 font-extrabold text-secondary uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
              >
                EXPLORE STORIES <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FAQ
          ============================================ */}
      <FaqSection
        items={webFaqItems}
        bannerHeading={
          <>
            TURN YOUR WEBSITE INTO A{' '}
            <span className="text-cyan-text">BUSINESS ASSET.</span>
          </>
        }
        bannerDescription="A website that supports your brand, your marketing and your growth."
      />
    </>
  );
}
