import React from 'react';
import ServiceHero from '@/components/sections/services/ServiceHero';
import { ServiceDetailData } from '@/data/servicesData';

interface ServiceDetailHeroSectionProps {
  data: ServiceDetailData;
}

export default function ServiceDetailHeroSection({ data }: ServiceDetailHeroSectionProps) {
  return (
    <ServiceHero
      badgeText={data.badgeText}
      line1={data.heroLine1}
      line2={
        <>
          {data.heroLine2Prefix && <span className="text-cyan-400">{data.heroLine2Prefix}</span>}
          <span className="relative text-cyan-400 inline-block">
            {data.heroLine2AccentWord}
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
          {data.heroLine2Suffix && <span className="text-white">{data.heroLine2Suffix}</span>}
        </>
      }
    />
  );
}
