import React from 'react';
import LetsTalkBanner from '@/components/sections/shared/LetsTalkBanner';

export default function CTABannerSection() {
  return (
    <section className="bg-background-light pt-16 md:pt-[90px] pb-12 relative overflow-visible">
      <div className="container mx-auto px-4 md:px-8 mb-10">

        {/* The Lab Is Always Open Card */}
        <div className="border-2 border-stroke comic-shadow p-8 md:p-12">
          <h2 className="heading-mablab mb-6">
            <span className="text-stroke">THE LAB IS </span>
            <span className="text-primary">ALWAYS </span>
            <span className="text-stroke">OPEN</span>
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

      {/* Overlapping Footer Purple Banner */}
      <LetsTalkBanner
        heading="LET'S TALK!"
        description="Ready to replace guesswork with strategic rigor? Let's build your scientific growth engine together."
      />
    </section>
  );
}
