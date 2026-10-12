'use client';

import React, { useState } from 'react';
import AccordionItem from '@/components/ui/AccordionItem';
import SectionHeading from '@/components/ui/SectionHeading';
import { PageCta } from '@/context/CtaContext';
import { faqItems, FaqItem } from '@/data/faq';
import { useStaggerAnimation } from '@/hooks/useGsapAnimation';

export interface FaqSectionProps {
  bannerHeading?: React.ReactNode;
  bannerDescription?: string;
  bannerButtonText?: string;
  items?: FaqItem[];
}

export default function FaqSection({
  bannerHeading,
  bannerDescription,
  bannerButtonText,
  items = faqItems,
}: FaqSectionProps = {}) {
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
    <section id="faq" className="bg-[#D0DBED]/10 pt-16 md:pt-[90px] pb-24 md:pb-32 relative overflow-visible">
      {/* Route CTA props if provided to Footer */}
      {(bannerHeading || bannerDescription || bannerButtonText) && (
        <PageCta
          heading={bannerHeading}
          description={bannerDescription}
          buttonText={bannerButtonText}
        />
      )}
      <div className="container mx-auto px-4 md:px-8">

        {/* Title: Frequently Answered Questions */}
        <div className="text-center mb-8">
          <SectionHeading
            text="Frequently Answered"
            accentText="Questions"
            accentColor="primary"
            className="text-stroke capitalize font-bold"
          />
        </div>

        {/* Structured Data for Search Engine & AI Answer Engines (AEO/AIO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />

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
    </section>
  );
}
