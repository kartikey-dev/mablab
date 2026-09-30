'use client';

import React, { useState } from 'react';
import AccordionItem from '@/components/ui/AccordionItem';
import SectionHeading from '@/components/ui/SectionHeading';
import LetsTalkBanner from '@/components/sections/shared/LetsTalkBanner';
import { faqItems, FaqItem } from '@/data/faq';
import { useStaggerAnimation } from '@/hooks/useGsapAnimation';

export interface FaqSectionProps {
  bannerHeading?: React.ReactNode;
  bannerDescription?: string;
  items?: FaqItem[];
}

export default function FaqSection({ bannerHeading, bannerDescription, items = faqItems }: FaqSectionProps = {}) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const containerRef = useStaggerAnimation<HTMLDivElement>('.faq-accordion-item', {
    stagger: 0.08,
    duration: 0.6,
    y: 25,
  });

  return (
    <section id="faq" className="bg-[#D0DBED]/10 pt-16 md:pt-[90px] pb-12 relative overflow-visible">
      <div className="container mx-auto px-4 md:px-8 mb-12">

        {/* Title: FREQUENTLY ANSWERED QUESTIONS */}
        <div className="text-center mb-8">
          <SectionHeading
            text="FREQUENTLY ANSWERED"
            accentText="QUESTIONS"
            accentColor="primary"
            className="text-stroke"
          />
        </div>

        {/* FAQ Accordion List */}
        <div ref={containerRef} className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {items.map((item) => (
            <div key={item.id} className="faq-accordion-item">
              <AccordionItem
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={handleToggle}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Overlapping Footer Banner */}
      <LetsTalkBanner
        heading={bannerHeading}
        description={bannerDescription}
      />
    </section>
  );
}
