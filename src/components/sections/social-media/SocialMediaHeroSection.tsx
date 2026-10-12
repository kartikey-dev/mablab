import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function SocialMediaHeroSection() {
  return (
    <ServiceHero
      badgeText="Social Media"
      line1="Grab attention."
      line2={
        <>
          Create <span className="relative text-cyan-400 inline-block">
            connection.
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
    />
  );
}
