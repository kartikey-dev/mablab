'use client';

import React from 'react';
import ContactForm from '../ui/ContactForm';
import ComparisonCard from '../ui/ComparisonCard';
import IconComponent from '../ui/IconComponent';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background-light py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Column: Heading + Shortcut vs Mab Lab Comparison Cards */}
          <div>
            <h2 className="text-5xl md:text-[56px] font-extrabold font-heading text-stroke leading-none mb-8">
              STILL DOING THE <br />
              <span className="text-[#D0DBED]">SHORTCUT-</span> <br />
              <span className="text-[#D0DBED]">MARKETING?</span>
            </h2>

            <div className="space-y-6">
              <ComparisonCard
                variant="shortcut"
                title="SHORTCUT MARKETING:"
                description="Do first. Think later. Save 20% of the time upfront. Spend 100% more fixing what you got wrong."
              />

              <ComparisonCard
                variant="mablab"
                title="MAB LAB:"
                description="Think first. Do it right. Spend a little more time upfront. Save a lot more time later."
              />
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="bg-white border-2 border-stroke comic-shadow-lg p-6 md:p-12 relative">
            <div className="absolute -top-10 right-10">
              <IconComponent name="corner-arrow-down" className="w-6.5 h-6 text-primary" />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
