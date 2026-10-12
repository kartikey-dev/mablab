import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function EventsHeroSection() {
  return (
    <ServiceHero
      badgeText="EVENTS"
      line1="Create opportunities."
      line2={
        <>
          <span className="relative text-cyan-400 inline-block">
            Build relationships.
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
            We help you plan, participate in, and amplify events that bring the right people together and drive growth.
          </span>
        </>
      }
    />
  );
}
