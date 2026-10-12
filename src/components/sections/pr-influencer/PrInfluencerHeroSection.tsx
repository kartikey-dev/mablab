import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';

export default function PrInfluencerHeroSection() {
  return (
    <ServiceHero
      badgeText="PR & Influencer Marketing"
      line1="The best opportunities go to the"
      line2={
        <>
          <span className="text-cyan-400 underline decoration-cyan-400 decoration-4">
            most visible
          </span>{' '}
          companies.
        </>
      }
      fullwidth
    />
  );
}
