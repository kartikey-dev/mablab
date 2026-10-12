'use client';

import React from 'react';
import ContactForm from '@/components/ui/ContactForm';
import IconComponent from '@/components/ui/IconComponent';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ContactHeroSection() {
  return (
    <section className="bg-background-light py-16 md:py-[90px] relative overflow-visible">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading, Narrative, and Channel Cards */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              text="Contact"
              accentText="MAB Lab"
              accentColor="primary"
              className="mb-4 capitalize font-bold"
            />

            <p className="para-18 text-stroke font-normal mb-8 leading-relaxed max-w-xl">
              Ready to replace guesswork with strategic rigor? Tell us about your goals, and our lead fellows will formulate your growth within 24 hours.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-4 mb-6 max-w-xl">
              <div className="border-2 border-stroke bg-white p-4 comic-shadow-sm flex items-center gap-4">
                <IconComponent name="email" className="w-6 h-6" />
                <div>
                  <h4 className="card-title font-heading para-18 font-bold text-stroke capitalize">Direct Email</h4>
                  <a href="mailto:hello@mablab.in" className="para-14 text-primary hover:underline font-bold">
                    hello@mablab.in
                  </a>
                </div>
              </div>

              <div className="border-2 border-stroke bg-white p-4 comic-shadow-sm flex items-center gap-4">
                <IconComponent name="location" className="w-6 h-6" />
                <div>
                  <h4 className="card-title font-heading para-18 font-bold text-stroke capitalize">San Francisco Lab</h4>
                  <p className="para-14 text-gray-600 font-normal">
                    548 Market St, San Francisco, CA 94104
                  </p>
                </div>
              </div>
            </div>

            {/* Coffee On Us Comic Pill */}
            <div className="inline-flex items-center gap-2 border-2 border-stroke comic-shadow-purple px-4 py-2 bg-white">
              <span className="w-2.5 h-2.5 bg-secondary rounded-full inline-block"></span>
              <span className="para-16 text-stroke font-bold capitalize">The Coffee Is On Us.</span>
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="bg-white border-2 border-stroke comic-shadow-lg p-6 sm:p-8 md:p-10 relative">
            <div className="absolute -top-10 right-6 sm:right-10 hidden sm:block">
              <IconComponent name="corner-arrow-down" className="w-6.5 h-6 text-primary" />
            </div>

            <div className="mb-6 border-b-2 border-stroke pb-4">
              <h2 className="card-title font-heading para-24 font-bold text-stroke capitalize mb-1">
                Tell Us About Your Brand
              </h2>
              <p className="para-14 text-gray-500 font-normal">
                Direct form transmission to our lead strategy team.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
