import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { whyMabLab } from './data';

export default function WebDevWhyMabLabSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Why"
          accentText="MAB Lab"
          accentColor="primary"
          className="mb-10 capitalize font-bold"
        />

        {/* 2×2 numbered reasons using IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {whyMabLab.map((item) => (
            <IconCard
              key={item.num}
              tag={item.num}
              tagColor={item.numColor}
              title={item.title}
              content={item.body}
            />
          ))}
        </div>

        {/* Link cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border-2 border-stroke p-6 flex flex-col gap-3 comic-shadow bg-white">
            <h3 className="card-title font-heading para-24 font-bold capitalize">
              <span className="text-stroke">See </span>
              <span className="text-primary">The Work</span>
            </h3>
            <p className="para-14 text-gray-500 font-normal">
              Explore selected projects and the thinking behind them.
            </p>
            <div className="border-b border-stroke/20 mt-1" />
            <Link
              href="/contact"
              className="para-12 font-bold text-secondary capitalize tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
            >
              View Projects <span>→</span>
            </Link>
          </div>
          <div className="border-2 border-stroke p-6 flex flex-col gap-3 comic-shadow bg-white">
            <h3 className="card-title font-heading para-24 font-bold capitalize">
              <span className="text-stroke">See How </span>
              <span className="text-primary">We Think</span>
            </h3>
            <p className="para-14 text-gray-500 font-normal">
              Insights, perspectives and lessons from our work.
            </p>
            <div className="border-b border-stroke/20 mt-1" />
            <Link
              href="/contact"
              className="para-12 font-bold text-secondary capitalize tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
            >
              Explore Stories <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
