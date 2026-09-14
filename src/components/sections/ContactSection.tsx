'use client';

import React from 'react';
import ContactForm from '../ui/ContactForm';

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

              {/* Shortcut Marketing Warning Card */}
              <div className="bg-[#D0DBED]/30 p-6 text-stroke para-16">
                <div className="flex items-center gap-2 font-heading font-normal! text-gray-600 mb-2">
                  <span>
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 19L11 0L22 19H0ZM3.45 17H18.55L11 4L3.45 17ZM11 16C11.2833 16 11.5208 15.9042 11.7125 15.7125C11.9042 15.5208 12 15.2833 12 15C12 14.7167 11.9042 14.4792 11.7125 14.2875C11.5208 14.0958 11.2833 14 11 14C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15C10 15.2833 10.0958 15.5208 10.2875 15.7125C10.4792 15.9042 10.7167 16 11 16ZM10 13H12V8H10V13Z" fill="#6B7280" />
                    </svg>
                  </span> SHORTCUT MARKETING:
                </div>
                <p className="font-normal! max-w-[80%]">
                  Do first. Think later. Save 20% of the time upfront. Spend 100% more fixing what you got wrong.
                </p>
              </div>

              {/* Mab Lab Success Card */}
              <div className="bg-primary border-2 border-stroke comic-shadow p-6 text-white para-16">
                <div className="flex items-center gap-2 font-normal! mb-2">
                  <span>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z" fill="white" />
                    </svg>
                  </span> MAB LAB:
                </div>
                <p className="font-normal! max-w-[80%]">
                  Think first. Do it right. Spend a little more time upfront. Save a lot more time later.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="bg-white border-2 border-stroke comic-shadow-lg p-6 md:p-12 relative">
            <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute -top-10 right-10'>
              <path d="M0 13.5L2.1375 11.3625L7.5 16.7625V0H25.5V3H10.5V16.7625L15.9 11.3625L18.0375 13.4625L9 22.5L0 13.5Z" fill="#5B21B6" />
            </svg>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
