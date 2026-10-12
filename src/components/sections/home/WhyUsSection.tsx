'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';

export default function WhyUsSection() {
  // Desktop 7 Staggered Rows cleanly spaced out below MAB LAB THINKING (Image 1)
  const desktopRows = [
    {
      id: 'audience',
      side: 'left',
      topPos: 'top-[46%]',
      rightInset: 'right-[54%]',
      leftInset: 'left-[2%] xl:left-[4%]',
      iconName: 'audience',
      label: (<><strong>Understand</strong> Business & Audience</>),
      color: 'cyan',
    },
    {
      id: 'decision',
      side: 'right',
      topPos: 'top-[52%]',
      leftInset: 'left-[54%]',
      rightInset: 'right-[2%] xl:right-[4%]',
      iconName: 'decision',
      label: (<><strong>Decide</strong> on Attention, Investment & Action</>),
      color: 'purple',
    },
    {
      id: 'problems',
      side: 'left',
      topPos: 'top-[58%]',
      rightInset: 'right-[53%]',
      leftInset: 'left-[2%] xl:left-[4%]',
      iconName: 'problems',
      label: (<><strong>Detect</strong> Real Problems & Opportunities</>),
      color: 'cyan',
    },
    {
      id: 'test',
      side: 'right',
      topPos: 'top-[64%]',
      leftInset: 'left-[53%]',
      rightInset: 'right-[2%] xl:right-[4%]',
      iconName: 'test',
      label: (<><strong>Test.</strong> Learn. Make It Better</>),
      color: 'purple',
    },
    {
      id: 'place',
      side: 'left',
      topPos: 'top-[70%]',
      rightInset: 'right-[52%]',
      leftInset: 'left-[2%] xl:left-[4%]',
      iconName: 'place',
      label: (<><strong>Find</strong> Your Place & Own It</>),
      color: 'cyan',
    },
    {
      id: 'protect',
      side: 'right',
      topPos: 'top-[76%]',
      leftInset: 'left-[52%]',
      rightInset: 'right-[2%] xl:right-[4%]',
      iconName: 'protect',
      label: (<><strong>Protect</strong> Outcome with Zero-shortcut Marketing</>),
      color: 'purple',
    },
    {
      id: 'brand',
      side: 'left',
      topPos: 'top-[82%]',
      rightInset: 'right-[46%]',
      leftInset: 'left-[2%] xl:left-[4%]',
      iconName: 'brand',
      label: (<><strong>Build</strong> Your Position Into a Brand</>),
      color: 'cyan',
    },
  ];

  // Mobile / Tablet ordered list of 7 items (exact order and alternating borders as in Image 2 & Image 3)
  const mobileCallouts = [
    {
      id: 'audience',
      iconName: 'audience',
      label: (<><strong>Understand</strong> Business & Audience</>),
      isCyan: true,
    },
    {
      id: 'problems',
      iconName: 'problems',
      label: (<><strong>Detect</strong> Real Problems & Opportunities</>),
      isCyan: false,
    },
    {
      id: 'place',
      iconName: 'place',
      label: (<><strong>Find</strong> Your Place & Own It</>),
      isCyan: true,
    },
    {
      id: 'brand',
      iconName: 'brand',
      label: (<><strong>Build</strong> Your Position Into a Brand</>),
      isCyan: false,
    },
    {
      id: 'decision',
      iconName: 'decision',
      label: (<><strong>Decide</strong> on Attention, Investment & Action</>),
      isCyan: true,
    },
    {
      id: 'test',
      iconName: 'test',
      label: (<><strong>Test.</strong> Learn. Make It Better</>),
      isCyan: false,
    },
    {
      id: 'protect',
      iconName: 'protect',
      label: (<><strong>Protect</strong> Outcome with Zero-shortcut Marketing</>),
      isCyan: true,
    },
  ];

  return (
    <section id="why-us" className="iceberg-wrapper relative w-full overflow-hidden pt-8 md:pt-12 lg:pt-16 lg:pb-24">
      <div className="container mx-auto lg:px-8 relative z-10 w-full">

        {/* TOP SECTION: SKY AREA (WHY US & WHAT YOU SEE PROCESS FLOW) */}
        <div className="relative z-20 md:px-8 px-4 text-center sm:text-left">
          {/* Section Heading: Why Us */}
          <div className="mb-2 sm:mb-3">
            <SectionHeading text="Why" accentText="Us" accentColor="primary" />
          </div>

          {/* Subheader: What You See */}
          <p className="para-16 text-stroke normal-case font-bold tracking-wide mb-3">
            What You See
          </p>

          {/* PROCESS STEPS: Desktop / Tablet 1 Row (Image 1 & Image 2) */}
          <div className="hidden sm:flex flex-wrap items-center gap-2 md:gap-3">
            <div className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-2 text-stroke flex items-center gap-2 text-xs md:text-sm font-extrabold shadow-md hover:scale-105 transition-transform">
              <IconComponent name="brief" className="w-4 h-4 text-danger shrink-0" />
              <span>Brief</span>
            </div>
            <span className="text-stroke font-extrabold text-xs md:text-sm select-none">→</span>
            <div className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-2 text-stroke flex items-center gap-2 text-xs md:text-sm font-extrabold shadow-md hover:scale-105 transition-transform">
              <IconComponent name="thunder" className="w-4 h-4 text-danger shrink-0" />
              <span>Solution</span>
            </div>
            <span className="text-stroke font-extrabold text-xs md:text-sm select-none">→</span>
            <div className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-2 text-stroke flex items-center gap-2 text-xs md:text-sm font-extrabold shadow-md hover:scale-105 transition-transform">
              <IconComponent name="thunder" className="w-4 h-4 text-danger shrink-0" />
              <span>Execution</span>
            </div>
            <span className="text-stroke font-extrabold text-xs md:text-sm select-none">→</span>
            <div className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-2 text-stroke flex items-center gap-2 text-xs md:text-sm font-extrabold shadow-md hover:scale-105 transition-transform">
              <IconComponent name="thunder" className="w-4 h-4 text-danger shrink-0" />
              <span>Launch</span>
            </div>
            <span className="text-stroke font-extrabold text-xs md:text-sm select-none">→</span>
            <div className="bg-white border-2 border-stroke comic-shadow-sm px-3.5 py-2 text-stroke flex items-center gap-2 text-xs md:text-sm font-extrabold shadow-md hover:scale-105 transition-transform">
              <IconComponent name="thunder" className="w-4 h-4 text-danger shrink-0" />
              <span>Report</span>
            </div>
          </div>

          {/* PROCESS STEPS: Mobile 2 Rows (Image 3) */}
          <div className="flex sm:hidden flex-col items-center gap-2 mt-2">
            {/* Row 1 */}
            <div className="flex items-center gap-1.5 justify-center">
              <div className="bg-white border-2 border-stroke comic-shadow-sm px-2.5 py-1.5 text-stroke flex items-center gap-1.5 text-xs font-extrabold shadow-md">
                <IconComponent name="brief" className="w-3.5 h-3.5 text-danger shrink-0" />
                <span>Brief</span>
              </div>
              <span className="text-stroke font-extrabold text-xs select-none">→</span>
              <div className="bg-white border-2 border-stroke comic-shadow-sm px-2.5 py-1.5 text-stroke flex items-center gap-1.5 text-xs font-extrabold shadow-md">
                <IconComponent name="thunder" className="w-3.5 h-3.5 text-danger shrink-0" />
                <span>Solution</span>
              </div>
              <span className="text-stroke font-extrabold text-xs select-none">→</span>
              <div className="bg-white border-2 border-stroke comic-shadow-sm px-2.5 py-1.5 text-stroke flex items-center gap-1.5 text-xs font-extrabold shadow-md">
                <IconComponent name="thunder" className="w-3.5 h-3.5 text-danger shrink-0" />
                <span>Execution</span>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex items-center gap-1.5 justify-center">
              <span className="text-stroke font-extrabold text-xs select-none">→</span>
              <div className="bg-white border-2 border-stroke comic-shadow-sm px-2.5 py-1.5 text-stroke flex items-center gap-1.5 text-xs font-extrabold shadow-md">
                <IconComponent name="thunder" className="w-3.5 h-3.5 text-danger shrink-0" />
                <span>Launch</span>
              </div>
              <span className="text-stroke font-extrabold text-xs select-none">→</span>
              <div className="bg-white border-2 border-stroke comic-shadow-sm px-2.5 py-1.5 text-stroke flex items-center gap-1.5 text-xs font-extrabold shadow-md">
                <IconComponent name="thunder" className="w-3.5 h-3.5 text-danger shrink-0" />
                <span>Report</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN STAGE: ICEBERG & UNDERWATER THINKING */}
        <div className='max-w-7xl w-full mx-auto'>
          {/* DESKTOP STAGE (lg: 1024px+) matching Image 1 */}
          <div className="hidden lg:block relative w-full h-[850px] xl:h-[950px] 2xl:h-[1020px]">

            {/* Deep Ocean Background Layer locked to top-[30.0%] of Stage */}
            <div
              className="absolute inset-x-[-100vw] top-[30.0%] bottom-[-100px] z-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, #0284c7 0%, #0369a1 25%, #075985 55%, #0f2f57 80%, #0a192f 100%)'
              }}
            />

            {/* Glowing Waterline Indicator locked to top-[30.0%] of Stage */}
            <div className="absolute inset-x-[-100vw] top-[30.0%] h-[2px] z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_0_14px_rgba(224,242,254,0.9)]" />

            {/* Iceberg Graphic in Center aligned to top:0 so graphic waterline matches top-[30.0%] */}
            <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-10">
              <Image
                src="/images/iceberg-cutout.png"
                alt="Mablab Iceberg Strategy"
                width={750}
                height={950}
                className="h-full w-auto max-h-[850px] xl:max-h-[950px] 2xl:max-h-[1020px] max-w-none object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
                priority
              />
            </div>

            {/* MAB LAB THINKING Overlay Title Below Waterline */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[38%] xl:top-[37%] z-20 text-center pointer-events-none w-full">
              <SectionHeading
                as="h3"
                accentColor="cyan"
                accentText="MAB LAB THINKING"
                className="text-shadow-lg text-shadow-stroke text-3xl lg:text-4xl xl:text-5xl font-black tracking-wider"
              />
            </div>

            {/* 7 Staggered Callout Rows (Alternating Left/Right down the iceberg starting at top-[48%]) */}
            {desktopRows.map((row) => (
              <div
                key={row.id}
                className={`absolute ${row.topPos} ${row.leftInset} ${row.rightInset} flex items-center z-30 pointer-events-auto`}
              >
                {row.side === 'left' ? (
                  <>
                    {/* Left Badge Card */}
                    <div className="bg-[#0A192F]/95 border-2 border-cyan-400 comic-shadow-cyan text-white px-3.5 py-2 text-xs xl:text-sm font-bold flex items-center gap-2.5 shadow-lg hover:scale-105 transition-transform shrink-0 whitespace-nowrap">
                      <IconComponent name={row.iconName} className="w-4 h-4 text-danger shrink-0" />
                      <span>{row.label}</span>
                    </div>
                    {/* Horizontal Dotted Connector Line */}
                    <div className="flex-1 border-b-2 border-dotted border-cyan-400 mx-1.5" />
                    {/* Cyan Square Dot targeting the Iceberg */}
                    <div className="w-2.5 h-2.5 border-2 border-cyan-400 bg-cyan-400 shrink-0" />
                  </>
                ) : (
                  <>
                    {/* Purple Square Dot targeting the Iceberg */}
                    <div className="w-2.5 h-2.5 border-2 border-purple-400 bg-purple-400 shrink-0" />
                    {/* Horizontal Dotted Connector Line */}
                    <div className="flex-1 border-b-2 border-dotted border-purple-400 mx-1.5" />
                    {/* Right Badge Card */}
                    <div className="bg-[#0A192F]/95 border-2 border-purple-500 comic-shadow-purple text-white px-3.5 py-2 text-xs xl:text-sm font-bold flex items-center gap-2.5 shadow-lg hover:scale-105 transition-transform shrink-0 whitespace-nowrap">
                      <IconComponent name={row.iconName} className="w-4 h-4 text-danger shrink-0" />
                      <span>{row.label}</span>
                    </div>
                  </>
                )}
              </div>
            ))}

          </div>

          {/* TABLET & MOBILE STAGE (< 1024px) matching Image 2 & Image 3 */}
          <div className="lg:hidden relative w-full pt-4 pb-24 flex flex-col items-center overflow-hidden">

            {/* Iceberg Image Container */}
            <div className="relative w-full max-w-[500px] flex flex-col items-center justify-center">

              {/* Deep Ocean Background Layer locked to top-[30.0%] of Mobile Stage */}
              <div
                className="absolute inset-x-[-100vw] top-[30.0%] bottom-[-100px] z-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, #0284c7 0%, #0369a1 25%, #075985 55%, #0f2f57 80%, #0a192f 100%)'
                }}
              />

              {/* Glowing Waterline Indicator locked to top-[30.0%] of Mobile Stage */}
              <div className="absolute inset-x-[-100vw] top-[30.0%] h-[2px] z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_0_14px_rgba(224,242,254,0.9)]" />

              {/* Iceberg Graphic */}
              <Image
                src="/images/iceberg-cutout.png"
                alt="Mablab Iceberg Strategy"
                width={500}
                height={650}
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] relative z-10"
                priority
              />

              {/* MAB LAB THINKING Overlay Title Below Waterline */}
              <div className="absolute top-[36%] sm:top-[36%] left-1/2 -translate-x-1/2 z-20 text-center w-full px-2">
                <SectionHeading
                  as="h3"
                  accentColor="cyan"
                  accentText="MAB LAB THINKING"
                  className="text-shadow-lg text-shadow-stroke text-xl sm:text-3xl font-black tracking-wider"
                />
              </div>

              {/* Vertically Stacked 7 Callout Badges (Images 2 & 3) Overlaying Lower Portion Below Title */}
              <div className="absolute top-[48%] sm:top-[48%] left-1/2 -translate-x-1/2 w-full px-4 z-30 flex flex-col items-center gap-2 sm:gap-2.5">
                {mobileCallouts.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-[#0A192F]/95 border-2 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-lg w-fit max-w-[90vw] sm:max-w-[420px] justify-start transition-transform hover:scale-105 ${item.isCyan
                      ? 'border-cyan-400 comic-shadow-cyan'
                      : 'border-purple-500 comic-shadow-purple'
                      }`}
                  >
                    <IconComponent name={item.iconName} className="w-4 h-4 text-danger shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


