'use client';

import React from 'react';
import ContactForm from '@/components/ui/ContactForm';
import IconComponent from '@/components/ui/IconComponent';

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

            <div className="border-2 border-stroke comic-shadow overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="bg-[#D0DBED]/30 border-b-2 border-r-2 border-stroke p-4 font-heading text-gray-600 text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <IconComponent name="warning-triangle" className="w-5 h-5 text-gray-500" />
                        Shortcut Marketing
                      </div>
                    </th>
                    <th className="bg-primary border-b-2 border-stroke p-4 font-heading text-white text-sm uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <IconComponent name="mablab-seal" className="w-5 h-5 text-white" />
                        MAB LAB
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="para-16 text-stroke">
                  <tr className="border-b-2 border-stroke">
                    <td className="p-4 border-r-2 border-stroke bg-[#D0DBED]/10 font-normal">Do first. Think later.</td>
                    <td className="p-4 bg-purple-50 font-normal">Think first. Do it right.</td>
                  </tr>
                  <tr className="border-b-2 border-stroke">
                    <td className="p-4 border-r-2 border-stroke bg-[#D0DBED]/10 font-normal">Save 20% of the time upfront.</td>
                    <td className="p-4 bg-purple-50 font-normal">Spend a little more time upfront.</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-2 border-stroke bg-[#D0DBED]/10 font-normal">Spend 100% more fixing what you got wrong.</td>
                    <td className="p-4 bg-purple-50 font-normal">Save a lot more time later.</td>
                  </tr>
                </tbody>
              </table>
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
