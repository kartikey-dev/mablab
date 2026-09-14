'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
  id: string;
}

export default function AccordionItem({
  question,
  answer,
  isOpen = false,
  onToggle,
  id,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = onToggle ? isOpen : internalOpen;
  const handleToggle = onToggle || (() => setInternalOpen(!internalOpen));

  return (
    <div className="border-2 border-stroke overflow-hidden transition-all duration-300">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        aria-expanded={open}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-header-${id}`}
      >
        <span className="font-heading font-bold text-sm md:text-base uppercase tracking-wide text-dark pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-primary text-primary font-bold text-lg transition-transform duration-300 ${
            open ? 'rotate-45 bg-primary text-white' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t-2 border-primary/20">
          <p className="para-16 text-gray-600 pt-4 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
