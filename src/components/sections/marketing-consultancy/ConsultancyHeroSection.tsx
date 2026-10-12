import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function ConsultancyHeroSection() {
  return (
    <ServiceHero
      badgeText="MARKETING CONSULTANCY"
      line1={
        <span className="text-white block">
          Identify the{' '}
          <span className="relative text-cyan-400 inline-block">
            right problem.
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
        </span>
      }
      line2={
        <>
          <span className="relative text-cyan-400 inline-block">
            Then solve it.
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
          <span className="para-18 text-white/90 block mt-6 mx-auto normal-case">
            The results you want depend on getting the first step right.
            <br className="hidden sm:inline" /> We help you find it.
          </span>
        </>
      }
    />
  );
}
