import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { brandStandCards } from './data';

export default function BrandingStandSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Where Does Your"
          accentText="Brand Stand?"
          accentColor="primary"
          className="mb-10 capitalize font-bold"
        />

        {/* 4 Cards Grid with IconCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {brandStandCards.map((card) => (
            <IconCard
              key={card.title}
              icon={<IconComponent name={card.icon} className="w-6 h-6 text-red-500" />}
              title={card.title}
              content={card.subtitle}
            />
          ))}
        </div>

        {/* Full Width Bottom Callout Box */}
        <div className="border-2 border-stroke bg-[#EEF4FF] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 comic-shadow comic-shadow-hover">
          <p className="card-title font-heading para-24 font-bold text-stroke capitalize">
            We help you figure out what your brand needs and build it.
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="bg-[#00838F]! hover:bg-[#006064]! text-white border-2 border-stroke comic-shadow px-6 py-3 shrink-0 capitalize font-bold"
            showArrow
          >
            Let&apos;s Figure It Out
          </Button>
        </div>
      </div>
    </GsapSection>
  );
}
