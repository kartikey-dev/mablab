import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ServicesHeroSection() {
  return (
    <section className="bg-background-light py-16 md:py-[90px] border-b-4 border-stroke text-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <span className="inline-block bg-primary text-yellow-300 para-12 px-3.5 py-1.5 border-2 border-stroke comic-shadow-sm mb-4">
          EXPERIMENTAL FORMULAS
        </span>
        <SectionHeading text="OUR" accentText="SERVICES" accentColor="primary" className="mb-4" />
        <p className="para-18 text-gray-600 max-w-2xl mx-auto font-normal">
          12 specialized scientific capabilities engineered to eliminate guesswork, outperform competitors, and scale business revenue.
        </p>
      </div>
    </section>
  );
}
