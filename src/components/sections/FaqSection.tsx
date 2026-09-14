'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
          <h2 className="heading-mablab text-stroke">
            FREQUENTLY ANSWERED <br />
            <span className="text-primary">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border-2 border-stroke comic-shadow transition-all"
              >
                <button
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full px-6 py-4 flex items-center justify-between text-left para-16 text-stroke uppercase cursor-pointer"
                >
                  <span className='font-heading font-normal!'>{item.question}</span>
                  <span className="w-6 h-6 border-2 border-stroke flex items-center justify-center text-danger font-bold ml-4 shrink-0" aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${item.id}`} className="px-6 pb-5 pt-1 text-gray-600 border-t border-gray-100 leading-relaxed font-normal! normal-case">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
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
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary para-16 font-normal! px-12 py-6 border-2 border-stroke comic-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all whitespace-nowrap"
            >
              LET&apos;S TALK!
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
