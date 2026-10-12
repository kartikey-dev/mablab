import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { prPortfolioTags, prMediaLogos, prCaseStudies } from './data';

export default function PrInfluencerSelectedWorkSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Selected"
          accentText="Work"
          accentColor="primary"
          className="mb-10 capitalize font-bold"
        />

        {/* Portfolio spectrum tags */}
        <div className="mb-8">
          <p className="text-[10px] font-bold text-stroke/40 uppercase tracking-widest mb-3">
            Portfolio Spectrum
          </p>
          <div className="flex flex-wrap gap-2">
            {prPortfolioTags.map((tag) => (
              <span
                key={tag}
                className="border border-stroke comic-shadow-sm px-3 py-1 para-12 font-semibold text-stroke capitalize"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Media placements table */}
        <div className="mb-10">
          <p className="text-[10px] font-bold text-stroke uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-primary inline-block" />
            Media Placement Environments // Strategic Tiers
          </p>
          <div className="border-2 border-stroke grid grid-cols-2 sm:grid-cols-4 bg-white">
            {prMediaLogos.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-center py-5 px-3 min-h-[64px] border border-stroke/20"
              >
                <span className={m.style}>{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case study cards with IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {prCaseStudies.map((cs, idx) => (
            <IconCard
              key={idx}
              tag={`0${idx + 1}`}
              tagColor={cs.numColor}
              title={cs.title}
              content={cs.body}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
