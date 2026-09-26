'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';

export default function WhyUsSection() {
  const leftCallouts = [
    {
      id: 'audience',
      iconName: 'audience',
      label: (<><strong>Understand</strong> Business & Audience</>),
      lineWidth: 'w-4 md:w-12',
    },
    {
      id: 'problems',
      iconName: 'problems',
      label: (<><strong>Detect</strong> Real Problems & Opportunities</>),
      lineWidth: 'w-3 md:w-10',
    },
    {
      id: 'place',
      iconName: 'place',
      label: (<><strong>Find</strong> Your Place & Own It</>),
      lineWidth: 'w-12 md:w-40',
    },
    {
      id: 'brand',
      iconName: 'brand',
      label: (<><strong>Build</strong> Your Position Into a Brand</>),
      lineWidth: 'w-14 md:w-36',
    },
  ];

  const rightCallouts = [
    {
      id: 'decision',
      iconName: 'decision',
      label: (<><strong>Decide</strong> on Attention, Investment & Action</>),
      lineWidth: 'w-4 md:w-8',
    },
    {
      id: 'test',
      iconName: 'test',
      label: (<><strong>Test.</strong> Learn. Make It Better</>),
      lineWidth: 'w-5 md:w-18',
    },
    {
      id: 'protect',
      iconName: 'protect',
      label: (<><strong>Protect</strong> Outcome with Zero-shortcut Marketing</>),
      lineWidth: 'w-4',
    },
  ];

  return (
    <section
      id="why-us"
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #d5ecf9 0%, #e6effc 27.9%, #bdd6e5 29%, #136e94 32%, #164162 47%, #201c44 74%, #1a1939 100%)'
      }}
    >
      <div className="container mx-auto px-3 sm:px-6 md:px-8 relative z-20">

        {/* Aspect Ratio Canvas matching exact iceberg image dimensions (850x1024) */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[850/1024] overflow-hidden">

          {/* Full Uncropped Background Image */}
          <Image
            src="/images/iceberg.jpg"
            alt="Why Us Iceberg Background"
            fill
            className="object-cover object-center pointer-events-none z-0"
            priority
          />

          {/* Curved Purple Dashed Line Overlay (Arcs from WHY US to right underwater section) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block" viewBox="0 0 850 1024" fill="none">
            <path
              d="M 270 80 C 450 15, 910 80, 620 410"
              stroke="#5B21B6"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>

          {/* Top Overlay Section: WHY US Title, WHAT YOU SEE & Brief -> Activity Flow */}
          <div className="absolute top-[3.5%] left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 z-30 pointer-events-auto">

            {/* Title: WHY US */}
            <div className="mb-3.5 sm:mb-7">
              <SectionHeading text="WHY" accentText="US" accentColor="#5B21B6" className="leading-[72px]!" />
            </div>

            {/* Subheader: WHAT YOU SEE */}
            <div className="mb-1.5 sm:mb-2.5">
              <span className="para-16 text-gray-800 block uppercase font-bold">
                WHAT YOU SEE
              </span>
            </div>

            {/* Flow Chain: Brief -> Solution -> Execution -> Launch -> Report */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-2.5 max-w-full">
              {[
                { label: 'Brief', isBrief: true },
                { label: 'Solution', isBrief: false },
                { label: 'Execution', isBrief: false },
                { label: 'Launch', isBrief: false },
                { label: 'Report', isBrief: false },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="bg-white border-2 border-stroke odd:rotate-2 comic-shadow-sm p-3 text-stroke flex items-center gap-1 text-[11px] sm:text-xs md:text-sm font-extrabold shadow-md">
                    <IconComponent name={step.isBrief ? 'brief' : 'thunder'} className="w-4 h-4 text-danger shrink-0" />
                    <span>{step.label}</span>
                  </div>
                  {i < 4 && <span className="text-stroke font-extrabold text-xs sm:text-base">→</span>}
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* Center Overlay Text: MAB LAB THINKING (Positioned underwater across iceberg body) */}
          <div className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20 w-full px-4">
            <SectionHeading as="h3" className="font-body! text-cyan-text uppercase">
              MAB LAB THINKING
            </SectionHeading>
          </div>

          {/* Left Side Callouts (Desktop / Tablet Overlay mapped to iceberg left contour) */}
          <div className="absolute left-[1%] sm:left-[3%] md:left-[4%] top-[51%] bottom-[2%] flex-col gap-18 z-30 hidden sm:flex items-start py-1">
            {leftCallouts.map((item) => (
              <div key={item.id} className="flex items-center gap-1 sm:gap-1.5 group">
                <div className="bg-[#121829]/95 border-2 border-cyan-400 comic-shadow-cyan text-white px-2.5 sm:px-3.5 py-1.5 group-odd:rotate-2 group-even:-rotate-2 flex items-center gap-2 text-[11px] sm:text-xs md:text-sm transition-transform hover:scale-105 hover:rotate-0 font-bold">
                  <IconComponent name={item.iconName} className="w-4.5 h-4.5 text-danger shrink-0" />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center">
                  <div className={`${item.lineWidth} border-b-2 border-dotted border-cyan-400`} />
                  <div className="w-2.5 h-2.5 border-2 border-cyan-400 bg-transparent shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Callouts (Desktop / Tablet Overlay mapped to iceberg right contour) */}
          <div className="absolute right-[1%] sm:right-[3%] md:right-[4%] top-[54%] bottom-[2%] flex-col gap-20 z-30 hidden sm:flex items-end py-1">
            {rightCallouts.map((item) => (
              <div key={item.id} className="flex items-center gap-1 sm:gap-1.5 group">
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 border-2 border-purple-500 bg-purple-500 shrink-0" />
                  <div className={`${item.lineWidth} border-b-2 border-dotted border-purple-500`} />
                </div>
                <div className="bg-[#121829]/95 border-2 border-purple-600 comic-shadow-purple text-white px-2.5 sm:px-3.5 py-1.5 group-odd:rotate-2 group-even:-rotate-2 flex items-center gap-2 text-[11px] sm:text-xs md:text-sm transition-transform hover:scale-105 hover:rotate-0 font-bold">
                  <IconComponent name={item.iconName} className="w-4.5 h-4.5 text-danger shrink-0" />
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Overlay Callouts Grid (Below water text for small mobile screens) */}
          <div className="absolute bottom-2 left-2 right-2 grid grid-cols-1 gap-1 sm:hidden z-30">
            {[...leftCallouts, ...rightCallouts].map((item, i) => (
              <div
                key={item.id}
                className={`bg-[#0F172A]/95 border text-white px-2 py-1 text-[10px] font-bold flex items-center gap-1.5 rounded-none ${i < 4 ? 'border-cyan-400 comic-shadow-cyan' : 'border-purple-500 comic-shadow-purple'
                  }`}
              >
                <IconComponent name={item.iconName} className="w-4 h-4 text-danger shrink-0" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
