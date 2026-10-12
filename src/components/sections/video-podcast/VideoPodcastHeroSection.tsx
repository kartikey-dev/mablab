import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function VideoPodcastHeroSection() {
  return (
    <ServiceHero
      badgeText="VIDEO & PODCAST"
      line1="Make people"
      line2={
        <>
          <span className="relative text-cyan-400 inline-block">
            See It, Hear It, Feel It.
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
          <span className="text-base sm:text-lg md:text-xl font-medium text-white/90 block font-body mt-6 max-w-2xl mx-auto leading-relaxed normal-case">
            Video and audio that informs, persuades, entertains, and connects.
          </span>
        </>
      }
    />
  );
}
