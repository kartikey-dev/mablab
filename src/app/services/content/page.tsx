import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import FaqSection from '@/components/sections/home/FaqSection';
import { contentFaqItems } from '@/data/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Content Services | Mablab — Ideas worth listening to",
  description:
    "The internet isn't running out of content. It's running out of ideas worth listening to. We help you create content that grabs attention, builds authority, and inspires action.",
};

export default function ContentServicePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="CONTENT"
        line1="The internet isn't running out of content."
        line2={
          <>
            <span className="text-cyan-400">It&apos;s running out of</span> ideas worth listening to.
          </>
        }
      />

      {/* ============================================
          SECTION 2: WHAT DOES YOUR CONTENT NEED?
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="What Does Your"
            accentText="Content Need?"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'thunder',
                subtitle: 'More people need to know we exist.',
              },
              {
                icon: 'protect',
                subtitle: "People don't see what makes us different.",
              },
              {
                icon: 'box',
                subtitle: 'People need to trust us before they buy from us.',
              },
              {
                icon: 'chat',
                subtitle: 'People forget about us too quickly.',
              },
              {
                icon: 'refresh',
                subtitle: 'More people need to want what we offer.',
              },
              {
                icon: 'star',
                subtitle: "People don't know we're experts yet.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between h-full min-h-[140px]"
              >
                <div>
                  <div className="text-red-500 mb-4">
                    <IconComponent name={card.icon} className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="para-18 font-extrabold text-stroke leading-snug">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: FIND THE IDEA. SHAPE THE ARGUMENT. MAKE IT TRAVEL.
          ============================================ */}
      <section className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <SectionHeading
              text="Find The Idea. Shape The Argument."
              accentText="Make It Travel."
              accentColor="primary"
              className="capitalize"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Content Strategy',
                bullets: ['Audience', 'Messaging', 'Themes', 'Content Pillars'],
              },
              {
                title: 'Thought Leadership',
                bullets: ['Founder POV', 'Executive Positioning', 'Industry Perspectives'],
              },
              {
                title: 'Editorial Strategy',
                bullets: ['Content Systems', 'Planning', 'Editorial Calendars'],
              },
              {
                title: 'Blogs & Articles',
                bullets: ['Insights', 'Education', 'Opinion Pieces'],
              },
              {
                title: 'Website Content',
                bullets: ['Pages', 'Messaging', 'Conversion-Focused Copy'],
              },
              {
                title: 'Case Studies',
                bullets: ['Customer Stories', 'Proof', 'Sales Support'],
              },
              {
                title: 'Sales Enablement',
                bullets: ['Sales Decks', 'One-Pagers', 'Battlecards', 'Objection Handling'],
              },
              {
                title: 'Reports & Strategic Documents',
                bullets: ['Research Reports', 'Annual Reports', 'Industry Analysis', 'Internal Narratives'],
              },
              {
                title: 'Campaign Content',
                bullets: ['Product Launches', 'GTM Campaigns', 'Multi-Channel Narratives'],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow px-8 py-4 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="para-24 font-extrabold text-stroke mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: MAB LAB WRITING PROCESS
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="MAB Lab Writing"
            accentText="Process"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 'STEP 01',
                title: 'DISCOVER',
                questions: [
                  'What do we know?',
                  'What does the audience care about?',
                  'What conversations are worth joining?',
                ],
                footer: 'INPUT: AUDIT & RESEARCH',
                color: 'bg-purple-700',
              },
              {
                step: 'STEP 02',
                title: 'DEVELOP',
                questions: [
                  'Find the angle.',
                  'Shape the argument.',
                  'Build the narrative.'
                ],
                footer: 'SYNTHESIS: POSITIONING',
                color: 'bg-cyan-600',
              },
              {
                step: 'STEP 03',
                title: 'WRITE',
                quote: 'Turn ideas into stories, insights and opinions.',
                footer: 'EXECUTION: VERBAL CLARITY',
                color: 'bg-stroke',
              },
              {
                step: 'STEP 04',
                title: 'PACKAGE',
                quote: 'Adapt the idea for different formats, audiences and channels.',
                footer: 'ASSEMBLY: MULTI-CHANNEL',
                color: 'bg-purple-700',
              },
              {
                step: 'STEP 05',
                title: 'DISTRIBUTE',
                quote: 'Help the right people discover it.',
                footer: 'REACH: INTENTIONAL TARGETING',
                color: 'bg-cyan-600',
              },
              {
                step: 'STEP 06',
                title: 'LEARN',
                questions: [
                  'Understand what resonates.',
                  'Refine the thinking.',
                  'Repeat.'
                ],
                footer: 'FEEDBACK FEEDS BACK TO DISCOVER',
                color: 'bg-stroke',
              },
            ].map((card) => (
              <div
                key={card.step}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <span className={`${card.color} text-white font-extrabold text-xs px-2.5 py-1 inline-block mb-3`}>
                    {card.step}
                  </span>
                  <h3 className="para-24 font-extrabold text-stroke mb-3">
                    {card.title}
                  </h3>
                  {card.questions && (
                    <ul className="space-y-1.5 mb-6">
                      {card.questions.map((q) => (
                        <li key={q} className="para-14 text-gray-600 font-medium">
                          {q}
                        </li>
                      ))}
                    </ul>
                  )}
                  {card.quote && (
                    <p className="para-14 text-gray-600 italic font-medium leading-relaxed mb-6">
                      {card.quote}
                    </p>
                  )}
                </div>
                <div className="border-t border-dashed border-stroke pt-3 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-stroke uppercase tracking-wider">
                    {card.footer}
                  </span>
                  <span className="text-stroke font-bold text-xs">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: WE SHARE THE THINKING BEHIND IT
          ============================================ */}
      <section className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10">
            <SectionHeading
              className="capitalize mb-6"
              text='We don&apos;t just share the content.'
              accentColor='primary'
              accentText={<><br />We share the thinking behind it.</>}
            />
            <p className="text-stroke para-16 font-medium">
              For every piece of content, you&apos;ll know why we wrote it, how we wrote it, and why we believe it will work.
            </p>
            <div className="relative self-start inline-flex items-center justify-center" style={{ width: '180px', height: '52px' }}>
              <svg
                viewBox="0 0 180 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
              >
                <ellipse cx="90" cy="26" rx="86" ry="22" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
              <p className="relative text-primary font-semibold text-sm italic whitespace-nowrap z-10">
                Clarity first. Always.
              </p>
            </div>
          </div>

          {/* Two column section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: THE CONTENT */}
            <div className="lg:col-span-5 h-full flex flex-col">
              <div className="bg-primary text-white para-12 comic-shadow-sm uppercase px-3 py-2 w-max mb-6 shrink-0">
                THE CONTENT
              </div>
              {/* Notebook/paper mockup */}
              <div className="bg-white border-2 border-stroke/10 flex flex-1">
                {/* Binder rings column */}
                <div className="w-10 bg-stroke/5 border-r-2 border-stroke/10 flex flex-col items-center justify-between pt-8 pb-8 shrink-0">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-stroke/10 bg-white inset-shadow-sm inset-shadow-gray-400"
                    />
                  ))}
                </div>
                {/* Paper content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-stroke mb-6">
                      <IconComponent name="edit-list" className="w-5 h-5 text-primary" />
                      <span className="para-12 text-primary uppercase tracking-widest">
                        ARTICLE
                      </span>
                    </div>
                    <h3
                      className="text-stroke para-18 mb-8"
                    >
                      Why your GTM strategy is failing (and what to&nbsp;
                      <span className='relative'>
                        fix instead)
                        <svg
                          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-3/4 h-3.5 text-cyan-400"
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
                    </h3>
                    <div className="space-y-3">
                      {[
                        'w-full',
                        'w-4/5',
                        'w-11/12',
                        'w-3/4',
                        'w-5/6',
                      ].map((width, i) => (
                        <div
                          key={i}
                          className={`h-2.5 bg-stroke/15 ${width}`}
                          style={{ borderRadius: 0 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: THE THINKING BEHIND IT */}
            <div className="lg:col-span-7 h-full">
              <div className="bg-primary text-white para-12 comic-shadow-sm uppercase px-3 py-2 w-max mb-6">
                THE THINKING BEHIND IT
              </div>
              <div className="divide-y divide-stroke/15 bg-white/80">
                {[
                  {
                    label: 'OBJECTIVE',
                    text: 'Increase relevance and engagement among SaaS founders.',
                    icon: 'target',
                  },
                  {
                    label: 'AUDIENCE',
                    text: 'SaaS founders & GTM leaders (2-10 yrs experience)',
                    icon: 'chat',
                  },
                  {
                    label: 'ANGLE',
                    text: 'Contrarian headline to create curiosity and pattern interrupt.',
                    icon: 'pen',
                  },
                  {
                    label: 'STRUCTURE',
                    text: 'Problem → Shift → Solution (Easy to scan, easy to remember)',
                    icon: 'box',
                  },
                  {
                    label: 'PRINCIPLES USED',
                    text: 'Curiosity Gap, Contrarian Thinking, Cognitive Ease, Story Structure',
                    icon: 'drafting',
                  },
                  {
                    label: 'WHY THIS WILL WORK',
                    text: 'Challenges assumptions → drives attention, saves & shares.',
                    icon: 'trending-up',
                  },
                  {
                    label: "WHAT WE'LL LEARN",
                    text: 'What angle resonates, which sections drive most engagement.',
                    icon: 'refresh',
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:grid sm:grid-cols-[36px_auto_1fr] items-start gap-2 sm:gap-4 px-5 py-4"
                  >
                    <div className="text-stroke/60 shrink-0 hidden sm:block">
                      <IconComponent name={row.icon} className="w-5 h-5 text-danger" />
                    </div>
                    <span className="text-stroke para-14 font-bold">
                      {row.label}
                    </span>
                    <p
                      className="text-primary para-12 normal-case"
                    >
                      {row.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: SHARED FAQ SECTION
          ============================================ */}
      <FaqSection
        items={contentFaqItems}
        bannerHeading={<>Grab attention, Build authority, <span className='text-cyan-text'>Inspire action.</span></>}
        bannerDescription="Often works with: Marketing, Web Content, Design, Market Research"
      />
    </>
  );
}
