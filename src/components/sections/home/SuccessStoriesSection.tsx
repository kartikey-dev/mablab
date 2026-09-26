'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/ui/CaseStudyCard';

export default function SuccessStoriesSection() {
  return (
    <section id="work" className="bg-[#D0DBED]/10 py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Title: SUCCESS STORIES */}
        <div className="mb-8">
          <SectionHeading text="SUCCESS" accentText="STORIES" accentColor="primary" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left Large Featured Case Study (2 columns wide) */}
          <CaseStudyCard
            featured
            category="PERSONAL BRAND"
            title="From Invisible to In-Demand: A Consultant's Personal Brand Rebuild"
            observation="Positioning was the bottleneck, not reach. Re-aligned core value prop."
            image="/images/case-studies/personal-brand.webp"
            slug="#"
          />

          {/* Right Column: 2 Stacked Case Study Cards */}
          <div className="flex flex-col gap-6">
            <CaseStudyCard
              labNote="LAB NOTE #02"
              category="AWARENESS"
              title="Building Awareness for an SMB With Zero Paid Budget"
              image="/images/case-studies/smb-awareness.webp"
            />

            <CaseStudyCard
              labNote="LAB NOTE #03"
              category="IDENTITY & LAUNCH"
              title="Naming, Identity, and Launch for a New D2C Product – HIMALA"
              image="/images/case-studies/d2c-launch.webp"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
