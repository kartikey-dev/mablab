import React from 'react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { websiteNeeds } from './data';

export default function WebDevNeedSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="What Does Your"
          accentText="Website Need?"
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {websiteNeeds.map((card) => (
            <IconCard
              key={card.title}
              title={card.title}
              content={card.subtitle}
            />
          ))}
        </div>

        {/* Consultation strip */}
        <div className="border-2 border-stroke bg-white flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 comic-shadow">
          <p className="para-16 text-stroke font-medium">
            Discuss your ideas with a Web Dev Lead — in 30 minutes free consultation call.
          </p>
          <Link
            href="/contact"
            className="shrink-0 bg-secondary border-2 border-stroke comic-shadow-sm px-5 py-2 para-12 font-bold text-white capitalize tracking-wider hover:bg-secondary/90 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </GsapSection>
  );
}
