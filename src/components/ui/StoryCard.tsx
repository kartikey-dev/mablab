import React from 'react';

export interface StoryCardProps {
  id?: string;
  number: string;
  title: string;
  description: string;
  accentBarClass?: string;
  className?: string;
}

export default function StoryCard({
  number,
  title,
  description,
  accentBarClass = 'bg-primary',
  className = '',
}: StoryCardProps) {
  return (
    <div
      className={`bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-between h-full relative cursor-pointer ${className}`}
      role="article"
    >
      {/* Large Watermark Number above card title */}
      <div className="text-5xl md:text-[80px] font-body font-black text-stroke/5 absolute -top-16 select-none pointer-events-none">
        {number}
      </div>

      <div>
        <h3 className="text-[32px] font-heading font-bold text-stroke uppercase leading-tight md:mb-24 mb-8 max-w-11/12">
          {title}
        </h3>
        <p className="para-16 text-gray-500 font-normal!">
          {description}
        </p>
      </div>

      {/* Bottom Accent Underline Bar */}
      <div className={`w-12 h-1.5 border-2 border-stroke ${accentBarClass} mt-6`} aria-hidden="true" />
    </div>
  );
}
