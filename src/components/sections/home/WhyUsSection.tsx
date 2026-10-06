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
      lineWidth: 'w-2 lg:w-16 xl:w-48',
    },
    {
      id: 'problems',
      iconName: 'problems',
      label: (<><strong>Detect</strong> Real Problems & Opportunities</>),
      lineWidth: 'w-2 lg:w-16 xl:w-48',
    },
    {
      id: 'place',
      iconName: 'place',
      label: (<><strong>Find</strong> Your Place & Own It</>),
      lineWidth: 'w-20 lg:w-52 xl:w-86',
    },
    {
      id: 'brand',
      iconName: 'brand',
      label: (<><strong>Build</strong> Your Position Into a Brand</>),
      lineWidth: 'w-22 lg:w-50 xl:w-82',
    },
  ];

  const rightCallouts = [
    {
      id: 'decision',
      iconName: 'decision',
      label: (<><strong>Decide</strong> on Attention, Investment & Action</>),
      lineWidth: 'lg:w-8 xl:w-32',
    },
    {
      id: 'test',
      iconName: 'test',
      label: (<><strong>Test.</strong> Learn. Make It Better</>),
      lineWidth: 'w-6 lg:w-32 xl:w-64',
    },
    {
      id: 'protect',
      iconName: 'protect',
      label: (<><strong>Protect</strong> Outcome with Zero-shortcut Marketing</>),
      lineWidth: 'lg:w-4 xl:w-34',
    },
  ];

  return (
    <section id="why-us" className="iceberg-wrapper py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">

        {/* Aspect Ratio Canvas matching iceberg image dimensions */}
        <div className="relative w-full mx-auto min-h-[700px] sm:min-h-[750px] lg:min-h-[1000px] lg:py-6">

          {/* Iceberg Image in Background Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <Image
              src="/images/iceberg-cutout.png"
              alt="Mablab Iceberg Strategy"
              width={1000}
              height={1200}
              className="iceberg-img lg:w-auto w-full h-auto lg:h-[1200px] max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)]"
              priority
            />
          </div>

          {/* Top Section: WHY US Title, WHAT YOU SEE & Brief -> Flow Chain */}
          <div className="relative z-30 text-center sm:text-left pt-2 lg:pb-6 sm:pb-16 pb-20">

            {/* Title: WHY US */}
            <div className="mb-4 sm:mb-6">
              <SectionHeading text="WHY" accentText="US" accentColor="primary" />
            </div>

            {/* Subheader: WHAT YOU SEE */}
            <div className="mb-2">
              <p className='para-16 text-stroke normal-case'>What You See</p>
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

          <div className="relative z-20 text-center my-12 sm:my-8 lg:my-26">
            <SectionHeading as="h3" accentColor='cyan' accentText="MAB LAB THINKING" className='text-shadow-lg text-shadow-stroke' />
          </div>

          <div className='max-w-6xl mx-auto w-full relative z-20'>
            {/* Left Side Callouts (Desktop / Tablet Overlay mapped to iceberg left contour) */}
            <div className="absolute left-0 sm:left-1 md:left-2 md:top-[48%] md:bottom-[4%] top-[42%] flex-col gap-12 md:gap-16 z-30 hidden lg:flex items-start py-2">
              {leftCallouts.map((item) => (
                <div key={item.id} className="flex items-center gap-1.5">
                  <div className="bg-[#0A192F]/95 border-2 border-cyan-400 comic-shadow-cyan text-white px-3 sm:px-4 py-2 flex items-center gap-2 text-xs sm:text-sm transition-transform hover:scale-105 font-bold">
                    <IconComponent name={item.iconName} className="w-4.5 h-4.5 text-danger shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <div className="md:flex hidden items-center">
                    <div className={`${item.lineWidth} border-b-2 border-dotted border-cyan-400`} />
                    <div className="w-2.5 h-2.5 border-2 border-cyan-400 bg-cyan-400 shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Callouts (Desktop / Tablet Overlay mapped to iceberg right contour) */}
            <div className="absolute right-0 sm:right-1 md:right-2 md:top-[50%] md:bottom-[4%] top-[46%] flex-col gap-14 md:gap-20 z-30 hidden lg:flex items-end py-2">
              {rightCallouts.map((item) => (
                <div key={item.id} className="flex items-center gap-1.5">
                  <div className="md:flex hidden items-center">
                    <div className="w-2.5 h-2.5 border-2 border-purple-400 bg-purple-400 shrink-0" />
                    <div className={`${item.lineWidth} border-b-2 border-dotted border-purple-400`} />
                  </div>
                  <div className="bg-[#0A192F]/95 border-2 border-purple-500 comic-shadow-purple text-white px-3 sm:px-4 py-2 flex items-center gap-2 text-xs sm:text-sm transition-transform hover:scale-105 font-bold">
                    <IconComponent name={item.iconName} className="w-4.5 h-4.5 text-danger shrink-0" />
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Overlay Callouts Grid (Clean responsive list for small mobile screens) */}
          <div className="relative z-30 flex flex-col items-center justify-center gap-2.5 lg:hidden mt-4 pb-4">
            {[...leftCallouts, ...rightCallouts].map((item, i) => (
              <div
                key={item.id}
                className={`bg-[#0A192F]/95 border-2 text-white px-3 py-2 w-max text-xs font-bold inline-flex items-center gap-2 rounded-none odd:border-cyan-400 odd:comic-shadow-cyan even:border-purple-500 even:comic-shadow-purple`}
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
