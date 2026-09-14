'use client';

import React, { useState } from 'react';

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: (id: string) => void;
}

export default function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isCurrentlyOpen = isOpen !== undefined ? isOpen : internalOpen;

  const handleClick = () => {
    if (onToggle) {
      onToggle(id);
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div className="bg-white border-2 border-stroke comic-shadow transition-all">
      <button
        onClick={handleClick}
        aria-expanded={isCurrentlyOpen}
        aria-controls={`faq-answer-${id}`}
        className="w-full px-6 py-4 flex items-center justify-between text-left para-16 text-stroke uppercase cursor-pointer"
      >
        <span className="font-heading font-normal!">{question}</span>
        <span
          className="w-6 h-6 border-2 border-stroke flex items-center justify-center text-danger font-bold ml-4 shrink-0"
          aria-hidden="true"
        >
          {isCurrentlyOpen ? '-' : '+'}
        </span>
      </button>

      {isCurrentlyOpen && (
        <div
          id={`faq-answer-${id}`}
          className="px-6 pb-5 pt-1 text-gray-600 border-t border-gray-100 leading-relaxed font-normal! normal-case"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
