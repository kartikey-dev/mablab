import React from 'react';
import { PageCta } from '@/context/CtaContext';
import { whyUsCtaData } from '@/data/ctaData';

export default function CTABannerSection() {
  return (
    <section className="bg-background-light pt-16 md:pt-[90px] pb-24 md:pb-32 relative overflow-visible">
      <PageCta {...whyUsCtaData} />
      <div className="container mx-auto px-4 md:px-8">

        {/* The Lab Is Always Open Card */}
        <div className="border-2 border-stroke comic-shadow p-8 md:p-12">
          <h2 className="heading-mablab mb-6 capitalize">
            <span className="text-stroke">The Lab Is </span>
            <span className="text-primary">Always </span>
            <span className="text-stroke">Open</span>
          </h2>

          <p className="text-xl text-stroke mb-3 sm:w-2/3">
            We&apos;re endlessly curious about how businesses grow, how brands earn trust, and how ideas spread.
          </p>
          <p className="text-xl text-stroke mb-3 sm:w-2/3">
            That&apos;s what we spend our time thinking about.
          </p>
          <p className="text-primary text-xl font-bold mb-6">
            If that sounds like your kind of conversation, come say hello.
          </p>

          {/* Coffee Tag */}
          <div className="inline-flex items-center gap-2 border-2 border-stroke comic-shadow-purple px-4 py-2">
            <span className="w-2.5 h-2.5 bg-secondary rounded-full inline-block"></span>
            <span className="para-18 text-stroke">The coffee is on us.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
