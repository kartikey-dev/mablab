import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import Button from '@/components/ui/Button';
import { designFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Design Services | Mablab — Make Every Interaction Count",
  description:
    "Whether you're launching something new, strengthening your brand, or creating better customer experiences, we'll help you design the moments that shape perception.",
};

export default function DesignServicePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="DESIGN"
        line1={
          <span className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 block font-body mb-2">
            Design shapes experiences
          </span>
        }
        line2={
          <>
            Make Every{' '}
            <span className="relative text-cyan-400 inline-block">
              Interaction
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
            </span>{' '}
            Count.
          </>
        }
      />

      {/* ============================================
          SECTION 2: WHY ARE YOU HERE?
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Why Are You"
            accentText="Here?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'palette',
                text: 'A new initiative needs a visual identity',
                customSvg: null,
              },
              {
                icon: 'diamond',
                text: "The quality of the work isn't reflected in the design",
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="M6 3h12l4 7-10 11L2 10l4-7z" fill="currentColor" fillOpacity="0.15" />
                    <path d="M11 3 8 10l4 11 4-11-3-7" />
                    <path d="M2 10h20" />
                  </svg>
                ),
              },
              {
                icon: 'bulb-slash',
                text: 'Good ideas are getting lost in poor execution',
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <line x1="2" y1="2" x2="22" y2="22" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M15.09 15.09A6 6 0 0 0 18 10c0-3.31-2.69-6-6-6a5.95 5.95 0 0 0-4.04 1.58" />
                    <path d="M6.3 9.4A6 6 0 0 0 6 10c0 1.86.85 3.53 2.18 4.63.53.44.82 1.09.82 1.77V18" />
                  </svg>
                ),
              },
              {
                icon: 'shield-alert',
                text: "The brand doesn't look as credible as the business behind it",
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.12" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
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
                  ) : (
                    <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <p className="para-18 font-extrabold text-stroke leading-snug">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 3: DESIGN THE EXPERIENCES YOUR BRAND NEEDS
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Design The Experiences"
            accentText="Your Brand Needs."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Brand & Identity Design',
                description:
                  'Visual Identities, Brand Assets, Guidelines, Templates, And Design Systems.',
              },
              {
                title: 'Campaign & Marketing Design',
                description:
                  'Campaign Identities, Launch Creatives, Advertising Assets, Promotional Materials, And Marketing Collateral.',
              },
              {
                title: 'Content & Social Design',
                description:
                  'Social Media Creatives, Content Formats, Visual Storytelling Assets, And Creator-Friendly Design Systems.',
              },
              {
                title: 'Presentation & Sales Design',
                description:
                  'Pitch Decks, Investor Presentations, Sales Presentations, Keynote Decks, And Business Communication Assets.',
              },
              {
                title: 'Digital Experience Design',
                description:
                  'Websites, Landing Pages, Interfaces, Digital Products, And Customer-Facing Experiences.',
              },
              {
                title: 'Editorial & Publication Design',
                description:
                  'Reports, Whitepapers, Magazines, Publications, Case Studies, And Long-Form Content Experiences.',
              },
              {
                title: 'Motion & Creative Assets',
                description:
                  'Motion Graphics, Animated Content, Event Visuals, Video Support Assets, And Digital Creative Production.',
              },
              {
                title: 'Design Systems & Asset Libraries',
                description:
                  'Templates, Component Libraries, Visual Frameworks, Governance Systems, And Scalable Brand Assets.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full min-h-[180px]"
              >
                <h3 className="para-18 font-extrabold text-stroke mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="para-14 text-gray-600 font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 4: TURN IDEAS INTO EXPERIENCES
          ============================================ */}
      <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Turn Ideas Into"
            accentText="Experiences."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'search',
                title: 'Understand',
                description: 'What needs to be communicated, to whom, and why.',
                customSvg: null,
              },
              {
                icon: 'translate',
                title: 'Translate',
                description: 'Find the visual language that brings the idea to life.',
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="m5 8 6 6" />
                    <path d="m4 14 6-6 2-3" />
                    <path d="M2 5h12" />
                    <path d="M7 2h1" />
                    <path d="m22 22-5-10-5 10" />
                    <path d="M14 18h6" />
                  </svg>
                ),
              },
              {
                icon: 'pen',
                title: 'Design',
                description: 'Create assets, experiences, and systems across touchpoints.',
                customSvg: null,
              },
              {
                icon: 'refine',
                title: 'Refine',
                description: 'Improve clarity, consistency, and effectiveness.',
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                ),
              },
              {
                icon: 'systematize',
                title: 'Systematize',
                description: 'Build frameworks that help the brand scale consistently.',
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <rect x="3" y="3" width="7" height="7" fill="currentColor" fillOpacity="0.15" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" fill="currentColor" fillOpacity="0.15" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                ),
              },
              {
                icon: 'portfolio',
                title: 'Selected Work',
                description:
                  'A showcase of visual identities, campaigns, content systems, presentations, digital experiences, publications, and creative assets.',
                customSvg: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity="0.15" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 sm:p-8 flex flex-col justify-start h-full min-h-[180px]"
              >
                <div className="text-red-500 mb-4">
                  {card.customSvg ? (
                    card.customSvg
                  ) : (
                    <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-stroke mb-2">
                  {card.title}
                </h3>
                <p className="para-14 text-gray-600 font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* ============================================
          SECTION 6: CTA BANNER
          ============================================ */}
      <section className="bg-primary py-16 md:py-20 border-y-2 border-stroke relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="subheading-h2 text-white mb-6">
            People Don&apos;t Experience Brands Through Strategy. They Experience Them Through Design.
          </h2>
          <p className="text-purple-100 para-24">
            Discuss your ideas with a design specialist - 30 minute free consultation.
          </p>
        </div>
      </section>

      {/* ============================================
          SECTION 7: FAQ SECTION
          ============================================ */}
      <FaqSection
        items={designFaqItems}
        bannerHeading={
          <>
            Make Every <span className="text-cyan-400">Experience</span> Count.
          </>
        }
        bannerDescription="Whether you're launching something new or evolving an existing brand, let's create experiences people remember."
      />
    </>
  );
}
