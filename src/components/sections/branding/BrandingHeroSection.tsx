import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function BrandingHeroSection() {
  return (
    <ServiceHero
      badgeText="Branding"
      line1="Be known for something."
      line2={
        <>
          <span className="text-cyan-400">Be </span>
          <span className="relative text-cyan-400 inline-block">
            remembered
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
          <span className="text-white"> for it.</span>
        </>
      }
    />
  );
}
