import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function WebDevHeroSection() {
  return (
    <ServiceHero
      badgeText="Web Development"
      line1={
        <>
          Make every&nbsp;
          <span className="relative text-cyan-400 inline-block">
            visit count
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
          .
        </>
      }
      line2={
        <>
          <span className="para-18 text-white/90 block mt-6 mx-auto capitalize">
            Designed to build trust. Built to drive action.
          </span>
        </>
      }
    />
  );
}
