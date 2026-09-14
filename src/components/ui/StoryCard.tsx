import React from 'react';

interface StoryCardProps {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  className?: string;
}

export default function StoryCard({
  number,
  title,
  description,
  accentColor,
  className = '',
}: StoryCardProps) {
  return (
    <article
      className={`relative comic-panel p-8 flex flex-col justify-between min-h-[380px] group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden ${className}`}
    >
      {/* Large watermark number */}
      <span
        className="absolute top-2 right-4 font-heading font-extrabold text-[120px] leading-none text-gray-100 select-none pointer-events-none z-0 transition-colors duration-300 group-hover:text-gray-200"
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-heading font-bold text-xl uppercase leading-tight text-dark pr-12">
          {title}
        </h3>
      </div>

      <div className="relative z-10 mt-auto">
        <p className="para-14 text-gray-600 mb-6">{description}</p>
        {/* Colored accent line */}
        <div
          className="w-12 h-1 rounded-none"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
