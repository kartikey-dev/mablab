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
      lineWidth: 'w-12 md:w-36',
    },
    {
      id: 'brand',
      iconName: 'brand',
      label: (<><strong>Build</strong> Your Position Into a Brand</>),
      lineWidth: 'w-14 md:w-32',
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
      lineWidth: 'w-5 md:w-16',
    },
    {
      id: 'protect',
      iconName: 'protect',
      label: (<><strong>Protect</strong> Outcome with Zero-shortcut Marketing</>),
      lineWidth: 'w-4',
    },
  ];

  return (
    <section id="why-us" className="iceberg-wrapper py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">

        {/* Aspect Ratio Canvas matching iceberg image dimensions */}
        <div className="relative w-full mx-auto min-h-[700px] sm:min-h-[850px] md:min-h-[1000px] flex flex-col justify-between py-6">

          {/* Iceberg Image in Background Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <Image
              src="/images/iceberg-cutout.png"
              alt="Mablab Iceberg Strategy"
              width={1000}
              height={1200}
              className="iceberg-img w-auto h-[550px] sm:h-[750px] md:h-[900px] max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)]"
              priority
            />
          </div>

          {/* Top Section: WHY US Title, WHAT YOU SEE & Brief -> Flow Chain */}
          <div className="relative z-30 text-center sm:text-left pt-2 pb-6">

            {/* Title: WHY US */}
            <div className="mb-4 sm:mb-6">
              <SectionHeading text="WHY" accentText="US" accentColor="#5B21B6" />
            </div>

            {/* Subheader: WHAT YOU SEE */}
            <div className="mb-2">
              <span className="para-16 text-stroke font-extrabold uppercase tracking-wider bg-white/90 backdrop-blur-xs px-3.5 py-1 border-2 border-stroke inline-block comic-shadow-sm">
                WHAT YOU SEE
              </span>
            </div>

            {/* Flow Chain: Brief -> Solution -> Execution -> Launch -> Report */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 max-w-full mt-3">
              {[
                { label: 'Brief', isBrief: true },
                { label: 'Solution', isBrief: false },
                { label: 'Execution', isBrief: false },
                { label: 'Launch', isBrief: false },
                { label: 'Report', isBrief: false },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="bg-white border-2 border-stroke odd:rotate-1 comic-shadow-sm px-3 py-2 text-stroke flex items-center gap-1.5 text-xs sm:text-sm font-extrabold shadow-md hover:scale-105 transition-transform">
                    <IconComponent name={step.isBrief ? 'brief' : 'thunder'} className="w-4 h-4 text-danger shrink-0" />
                    <span>{step.label}</span>
                  </div>
                  {i < 4 && <span className="text-stroke font-extrabold text-xs sm:text-base">→</span>}
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* Center Overlay Text: MAB LAB THINKING */}
          <div className="relative z-20 text-center my-6 sm:my-10">
            <span className="inline-block bg-[#051A2E]/90 border-2 border-cyan-400 comic-shadow-cyan px-6 py-2">
              <SectionHeading as="h3" className="font-body! text-cyan-text uppercase text-xl sm:text-3xl font-extrabold tracking-wider m-0">
                MAB LAB THINKING
              </SectionHeading>
            </span>
          </div>

          {/* Left Side Callouts (Desktop / Tablet Overlay mapped to iceberg left contour) */}
          <div className="absolute left-0 sm:left-1 md:left-2 top-[48%] bottom-[4%] flex-col gap-12 md:gap-16 z-30 hidden sm:flex items-start py-2">
            {leftCallouts.map((item) => (
              <div key={item.id} className="flex items-center gap-1.5 group">
                <div className="bg-[#0A192F]/95 border-2 border-cyan-400 comic-shadow-cyan text-white px-3 sm:px-4 py-2 group-odd:rotate-1 group-even:-rotate-1 flex items-center gap-2 text-xs sm:text-sm transition-transform hover:scale-105 font-bold">
                  <IconComponent name={item.iconName} className="w-4.5 h-4.5 text-danger shrink-0" />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center">
                  <div className={`${item.lineWidth} border-b-2 border-dotted border-cyan-400`} />
                  <div className="w-2.5 h-2.5 border-2 border-cyan-400 bg-cyan-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Callouts (Desktop / Tablet Overlay mapped to iceberg right contour) */}
          <div className="absolute right-0 sm:right-1 md:right-2 top-[50%] bottom-[4%] flex-col gap-14 md:gap-20 z-30 hidden sm:flex items-end py-2">
            {rightCallouts.map((item) => (
              <div key={item.id} className="flex items-center gap-1.5 group">
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 border-2 border-purple-400 bg-purple-400 shrink-0" />
                  <div className={`${item.lineWidth} border-b-2 border-dotted border-purple-400`} />
                </div>
                <div className="bg-[#0A192F]/95 border-2 border-purple-500 comic-shadow-purple text-white px-3 sm:px-4 py-2 group-odd:rotate-1 group-even:-rotate-1 flex items-center gap-2 text-xs sm:text-sm transition-transform hover:scale-105 font-bold">
                  <IconComponent name={item.iconName} className="w-4.5 h-4.5 text-danger shrink-0" />
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Overlay Callouts Grid (Clean responsive list for small mobile screens) */}
          <div className="relative z-30 grid grid-cols-1 gap-2.5 sm:hidden mt-4 pb-4">
            {[...leftCallouts, ...rightCallouts].map((item, i) => (
              <div
                key={item.id}
                className={`bg-[#0A192F]/95 border-2 text-white px-3 py-2 text-xs font-bold flex items-center gap-2 rounded-none ${i < 4 ? 'border-cyan-400 comic-shadow-cyan' : 'border-purple-500 comic-shadow-purple'
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
