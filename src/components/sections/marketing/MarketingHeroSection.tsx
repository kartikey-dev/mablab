import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function MarketingHeroSection() {
  return (
    <ServiceHero
      badgeText="Marketing"
      badgeColor="bg-cyan-400"
      line1={
        <>
          Marketing that{' '}
          <span className="relative text-cyan-400 inline-block">
            sells.
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
        </>
      }
      line2={
        <div className="para-14 text-cyan-400 font-bold tracking-widest mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-6 capitalize">
          <span>Get Noticed.</span>
          <span className="w-8 h-0.5 bg-cyan-400 hidden sm:inline-block"></span>
          <span>Get Considered.</span>
          <span className="w-8 h-0.5 bg-cyan-400 hidden sm:inline-block"></span>
          <span>Get Chosen.</span>
        </div>
      }
    />
  );
}
