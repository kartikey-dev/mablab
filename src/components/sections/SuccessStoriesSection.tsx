'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessStoriesSection() {
  return (
    <section id="work" className="bg-[#D0DBED]/10 py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Title: SUCCESS STORIES */}
        <h2 className="heading-mablab text-stroke mb-8">
          SUCCESS <span className="text-primary">STORIES</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left Large Featured Case Study (2 columns wide) */}
          <div className="lg:col-span-2 h-full relative bg-white border-2 border-stroke comic-shadow grid md:grid-cols-2">

            {/* Observation Sticky Tape Note at Top Right */}
            <div className="absolute -top-9 -right-6 z-20 bg-[#FEF3C7] border border-stroke p-4 max-w-[200px] comic-shadow transform -rotate-3">
              <span className="para-16 text-stroke block mb-0.5">
                OBSERVATION:
              </span>
              <p className="para-12 text-stroke/70 leading-tight normal-case!">
                Positioning was the bottleneck, not reach. Re-aligned core value prop.
              </p>
            </div>

            {/* Left Image Half */}
            <div className="relative min-h-[300px] md:min-h-[420px] w-full bg-gray-100">
              <Image
                src="/images/case-studies/personal-brand.webp"
                alt="Personal Brand Rebuild"
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* Right Purple Content Half */}
            <div className="bg-primary p-8 md:p-10 text-white flex flex-col justify-center">
              <div>
                <span className="para-12 text-purple-200 block mb-4">
                  PERSONAL BRAND
                </span>
                <h3 className="heading-h3 leading-snug normal-case! mb-6">
                  From Invisible to In-Demand: A Consultant&apos;s Personal Brand Rebuild
                </h3>
              </div>

              <div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 para-12 text-white hover:text-yellow-300 transition-colors"
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: 2 Stacked Case Study Cards */}
          <div className="flex flex-col gap-6">

            {/* Card 1: LAB NOTE #02 */}
            <div className="bg-white border-2 border-stroke comic-shadow p-4 relative">
              <div className="absolute top-3 left-3 z-10 bg-tag-orange comic-shadow text-white para-12 px-2.5 py-1 border border-stroke">
                LAB NOTE #02
              </div>
              <div className="relative aspect-video w-full mb-3 bg-gray-100 overflow-hidden">
                <Image
                  src="/images/case-studies/smb-awareness.webp"
                  alt="SMB Awareness"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <span className="para-12 text-tag-orange block mb-1">
                AWARENESS
              </span>
              <h4 className="para-16 text-stroke leading-snug">
                Building Awareness for an SMB With Zero Paid Budget
              </h4>
            </div>

            {/* Card 2: LAB NOTE #03 */}
            <div className="bg-white border-2 border-stroke comic-shadow p-4 relative">
              <div className="absolute top-3 left-3 z-10 bg-tag-orange comic-shadow text-white para-12 px-2.5 py-1 border border-stroke">
                LAB NOTE #03
              </div>
              <div className="relative aspect-video w-full mb-3 bg-gray-100 overflow-hidden">
                <Image
                  src="/images/case-studies/d2c-launch.webp"
                  alt="D2C Product HIMALA"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <span className="para-12 text-tag-orange block mb-1">
                IDENTITY &amp; LAUNCH
              </span>
              <h4 className="para-16 text-stroke leading-snug">
                Naming, Identity, and Launch for a New D2C Product – HIMALA
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
