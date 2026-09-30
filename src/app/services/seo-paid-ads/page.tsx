import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/sections/home/FaqSection';
import { seoPaidAdsFaqItems } from '@/data/faq';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Paid Ads & SEO | Mablab — Be found by the right people",
  description:
    "If the right people can't find you, they can't choose you. Capture demand, create demand, and convert it with performance paid ads and search strategy.",
};

export default function SeoPaidAdsServicePage() {
  return (
    <>
      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <ServiceHero
        badgeText="PAID ADS & SEO"
        line1="If the right people"
        line2={
          <>
            <span className="text-cyan-400">can&apos;t find you,</span> they can&apos;t choose you.
          </>
        }
      />

      {/* ============================================
          SECTION 2: CAPTURE DEMAND. CREATE DEMAND. CONVERT IT.
          ============================================ */}
      <section className="bg-white py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Capture Demand. Create Demand."
            accentText="Convert It."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: PAID */}
            <div className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-stroke">
                  <span className="w-3.5 h-3.5 bg-purple-700 block" />
                  <h3 className="para-24 text-stroke tracking-wider">
                    PAID
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      num: '01/',
                      title: 'Google Ads',
                      tag: 'HIGH-INTENT',
                      tagColor: 'text-purple-700',
                      desc: 'Search campaigns designed to capture high-intent demand.',
                    },
                    {
                      num: '02/',
                      title: 'Social Ads',
                      tag: 'CROSS-PLATFORM',
                      tagColor: 'text-gray-500',
                      desc: 'Reach the right audiences across platforms.',
                    },
                    {
                      num: '03/',
                      title: 'Campaign Strategy',
                      tag: 'MESSAGING',
                      tagColor: 'text-purple-700',
                      desc: 'Planning, messaging and audience targeting.',
                    },
                    {
                      num: '04/',
                      title: 'Landing Pages',
                      tag: 'CONVERSION',
                      tagColor: 'text-red-500',
                      desc: 'Pages built to convert attention into action.',
                    },
                    {
                      num: '05/',
                      title: 'Retargeting',
                      tag: 'RETENTION',
                      tagColor: 'text-gray-500',
                      desc: 'Stay visible to people who have already shown interest.',
                    },
                    {
                      num: '06/',
                      title: 'Conversion Optimisation',
                      tag: 'EFFICIENCY',
                      tagColor: 'text-purple-700',
                      desc: 'Improve performance without increasing spend.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="pb-4 border-b border-stroke/20 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="para-18 font-extrabold text-stroke">
                          <span className="text-gray-400 font-normal para-12 mr-2">
                            {item.num}
                          </span>
                          {item.title}
                        </h4>
                        <span
                          className={`text-[11px] font-extrabold tracking-wider ${item.tagColor}`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="para-14 text-gray-600 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: ORGANIC */}
            <div className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-stroke">
                  <span className="w-3.5 h-3.5 bg-cyan-500 block" />
                  <h3 className="para-24 text-stroke tracking-wider">
                    ORGANIC
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      num: '01/',
                      title: 'SEO Strategy',
                      tag: 'FOUNDATIONAL',
                      tagColor: 'text-cyan-600',
                      desc: 'Build a long-term acquisition engine.',
                    },
                    {
                      num: '02/',
                      title: 'Keyword Research',
                      tag: 'INTENT MAPPING',
                      tagColor: 'text-gray-500',
                      desc: 'Understand what your customers are searching for.',
                    },
                    {
                      num: '03/',
                      title: 'Technical SEO',
                      tag: 'INFRASTRUCTURE',
                      tagColor: 'text-cyan-600',
                      desc: 'Improve crawlability, speed and site health.',
                    },
                    {
                      num: '04/',
                      title: 'On-Page SEO',
                      tag: 'DISCOVERABILITY',
                      tagColor: 'text-gray-500',
                      desc: 'Optimise content and pages for discoverability.',
                    },
                    {
                      num: '05/',
                      title: 'Content SEO',
                      tag: 'ORGANIC CAPTURE',
                      tagColor: 'text-cyan-600',
                      desc: 'Create content that captures demand organically.',
                    },
                    {
                      num: '06/',
                      title: 'Authority Building',
                      tag: 'DOMAIN TRUST',
                      tagColor: 'text-cyan-600',
                      desc: 'Strengthen trust and search visibility over time.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="pb-4 border-b border-stroke/20 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="para-18 font-extrabold text-stroke">
                          <span className="text-gray-400 font-normal para-12 mr-2">
                            {item.num}
                          </span>
                          {item.title}
                        </h4>
                        <span
                          className={`text-[11px] font-extrabold tracking-wider ${item.tagColor}`}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="para-14 text-gray-600 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: EVERY CLICK LEAVES A CLUE
          ============================================ */}
      <section className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Every Click"
            accentText="Leaves A Clue."
            accentColor="primary"
            className="mb-12 capitalize"
          />

          {/* 5 Process Steps Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {[
              { step: '01', text: 'What people search.' },
              { step: '02', text: 'What they ignore.' },
              { step: '03', text: 'What they click.' },
              { step: '04', text: 'What they convert on.' },
              { step: '05', text: 'What they come back for.' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border-2 border-stroke comic-shadow-sm p-4 relative flex flex-col justify-between"
              >
                <div>
                  <span className="bg-danger text-white border border-stroke font-extrabold text-[10px] p-1 inline-block absolute -top-1.5 -left-1">
                    {item.step}
                  </span>
                  <p className="para-14 font-extrabold text-stroke leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Highlight Banner Box */}
          <div className="bg-white border-2 border-stroke comic-shadow p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden min-h-[160px]">
            <div className="relative z-10">
              <h3 className="heading-h3 text-stroke leading-tight normal-case md:max-w-md sm:max-w-3/4">
                The goal isn&apos;t more traffic. The goal is understanding{' '}
                <span className="text-purple-700">
                  what creates demand.
                </span>
              </h3>
            </div>
            <Image
              src="/images/logo.svg"
              alt="Mablab Logo"
              width={282}
              height={282}
              className="w-[282px] h-[282px] absolute -right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none object-contain z-0"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: METRICS WE PAY ATTENTION TO
          ============================================ */}
      <section className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            text="Metrics We"
            accentText="Pay Attention To"
            accentColor="primary"
            className="mb-12 capitalize"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'CAC',
                desc: 'Customer Acquisition Cost',
              },
              {
                title: 'CPL',
                desc: 'Cost Per Lead',
              },
              {
                title: 'ROAS',
                desc: 'Return On Ad Spend',
              },
              {
                title: 'Conversion Rate',
                desc: '(Traffic to Conversion)',
              },
              {
                title: 'Organic Traffic',
                desc: 'Qualified traffic from search',
              },
              {
                title: 'Rankings',
                desc: 'Visibility for keywords that matter',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="para-24 font-extrabold text-stroke mb-2">
                    {card.title}
                  </h3>
                  <p className="para-14 text-gray-500 font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: SHARED FAQ SECTION
          ============================================ */}
      <FaqSection
        items={seoPaidAdsFaqItems}
        bannerHeading={
          <>
            Be Found By The <span className="text-cyan-400">Right People</span>.<br />Convert More Of Them.
          </>
        }
        bannerDescription="Often works with: Marketing, Web Content, Design, Market Research"
      />
    </>
  );
}
