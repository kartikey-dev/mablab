import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function SeoPaidAdsHeroSection() {
  return (
    <ServiceHero
      badgeText="Paid Ads & SEO"
      line1={
        <>
          If the right people&nbsp;
          <span className="relative text-cyan-400 inline-block">
            can&apos;t find you,
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
      line2="they can't choose you."
      fullwidth
    />
  );
}
