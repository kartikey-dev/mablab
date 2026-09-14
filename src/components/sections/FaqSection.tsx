'use client';

import React, { useState } from 'react';
import AccordionItem from '../ui/AccordionItem';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { faqItems } from '@/data/faq';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#D0DBED]/10 py-16 md:pt-[90px] md:pb-45 relative">
      <div className="container mx-auto px-4 md:px-8">

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
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Bottom Banner: LET'S TALK! Purple Banner */}
        <div className="max-w-6xl w-full absolute left-1/2 -translate-x-1/2 -bottom-18 bg-primary border-2 border-stroke comic-shadow-lg px-8 py-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="subheading-h2 text-white mb-3">
              LET&apos;S TALK!
            </h3>
            <p className="para-18 text-purple-200 font-normal! normal-case">
              Ready to replace guesswork with strategic rigor? Let&apos;s build your scientific growth engine together.
            </p>
          </div>

          <div>
            <Button
              href="#contact"
              variant="white"
              className="px-12! py-6! whitespace-nowrap"
              icon={
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" fill="currentColor" />
                </svg>
              }
            >
              LET&apos;S TALK!
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
