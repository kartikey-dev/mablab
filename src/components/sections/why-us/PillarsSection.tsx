import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PillarsSection() {
  return (
    <section className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">

        <SectionHeading text="WHO" accentText="WE ARE" accentColor="primary" className="mb-10" />

        {/* Purple Banner */}
        <div className="bg-primary border-2 border-stroke comic-shadow p-6 md:p-12 mb-10">
          <p className="text-white subheading-h2 text-center capitalize">
            Businesses.Brands.Marketing.People.
          </p>
        </div>

        {/* Bottom Quote Card */}
        <div className="border-2 border-stroke comic-shadow p-6 md:p-8 w-3/4">
          <p className="font-heading text-xl text-stroke mb-4">
            MAB Lab was built by curious people who enjoy understanding how things work, why they work, and what makes them work better.
          </p>
          <p className="font-heading text-xl text-primary">
            That&apos;s the thinking behind everything we do.
          </p>
        </div>

      </div>
    </section>
  );
}
