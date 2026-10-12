import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function ContentHeroSection() {
  return (
    <ServiceHero
      badgeText="Content"
      line1="The internet isn't running out of content."
      line2={
        <>
          <span className="relative text-cyan-400 inline-block">
            It&apos;s running out of
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
          </span>{' '}
          ideas worth listening to.
        </>
      }
      fullwidth
    />
  );
}
