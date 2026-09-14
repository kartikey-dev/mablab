'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyUsSection() {
  const leftCallouts = [
    {
      id: 'audience',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      label: (<><strong>Understand</strong> Business & Audience</>),
      lineWidth: 'w-4 md:w-12',
    },
    {
      id: 'problems',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
      label: (<><strong>Detect</strong> Real Problems & Opportunities</>),
      lineWidth: 'w-3 md:w-10',
    },
    {
      id: 'place',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: (<><strong>Find</strong> Your Place & Own It</>),
      lineWidth: 'w-12 md:w-40',
    },
    {
      id: 'brand',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
      label: (<><strong>Build</strong> Your Position Into a Brand</>),
      lineWidth: 'w-14 md:w-36',
    },
  ];

  const rightCallouts = [
    {
      id: 'decision',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      ),
      label: (<><strong>Decide</strong> on Attention, Investment & Action</>),
      lineWidth: 'w-4 md:w-8',
    },
    {
      id: 'test',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      ),
      label: (<><strong>Test.</strong> Learn. Make It Better</>),
      lineWidth: 'w-5 md:w-18',
    },
    {
      id: 'protect',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
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
              <h2 className="heading-mablab text-stroke uppercase leading-[72px]! flex items-center gap-2 sm:gap-3">
                <span>WHY</span>
                <span className="text-[#5B21B6]">US</span>
              </h2>
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
                    {step.isBrief ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    )}
                    <span>{step.label}</span>
                  </div>
                  {i < 4 && <span className="text-stroke font-extrabold text-xs sm:text-base">→</span>}
                </React.Fragment>
              ))}
            </div>

          </div>

          {/* Center Overlay Text: MAB LAB THINKING (Positioned underwater across iceberg body) */}
          <div className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20 w-full px-4">
            <h3 className="heading-mablab font-body! text-cyan-text uppercase">
              MAB LAB THINKING
            </h3>
          </div>

          {/* Left Side Callouts (Desktop / Tablet Overlay mapped to iceberg left contour) */}
          <div className="absolute left-[1%] sm:left-[3%] md:left-[4%] top-[51%] bottom-[2%] flex-col gap-18 z-30 hidden sm:flex items-start py-1">
            {leftCallouts.map((item) => (
              <div key={item.id} className="flex items-center gap-1 sm:gap-1.5 group">
                <div className="bg-[#121829]/95 border-2 border-cyan-400 comic-shadow-cyan text-white px-2.5 sm:px-3.5 py-1.5 group-odd:rotate-2 group-even:-rotate-2 flex items-center gap-2 text-[11px] sm:text-xs md:text-sm transition-transform hover:scale-105 hover:rotate-0 font-bold">
                  {item.icon}
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
                  {item.icon}
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
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
