'use client';

import React from 'react';
import Link from 'next/link';

export interface IconCardProps {
  icon?: React.ReactNode;
  title: string;
  content?: React.ReactNode;
  link?: string;
  tag?: string | number;
  tagColor?: string;
  category?: string;
  categoryColor?: string;
  className?: string;
  id?: string;
}

export default function IconCard({
  icon,
  title,
  content,
  link,
  tag,
  tagColor = 'bg-primary',
  category,
  categoryColor = 'text-primary',
  className = '',
  id,
}: IconCardProps) {

  const cardBody = (
    <div
      id={id}
      className={`bg-white border-2 border-stroke comic-shadow comic-shadow-hover text-stroke p-6 sm:p-7 relative flex flex-col justify-between h-full min-h-[180px] transition-all ${className}`}
    >
      {/* Optional Top Tag (e.g. 01, 02) */}
      {tag !== undefined && (
        <div
          className={`absolute -top-3.5 left-4 px-2 py-0.5 border border-stroke text-white font-mono font-bold text-xs select-none ${tagColor}`}
        >
          {tag}
        </div>
      )}

      <div>
        {/* Top Header with Icon and Visibility Toggle */}
        <div className="flex items-center justify-between mb-4">
          {icon ? <div className="text-danger">{icon}</div> : <div />}
        </div>

        {/* Card Title: Always Capitalize & para-24 with font-heading */}
        <h3 className="card-title font-heading para-24 font-bold capitalize mb-3 leading-snug">
          {title}
        </h3>

        {/* Content with State-Managed Visibility */}
        {content && (
          <div
            className={`transition-opacity duration-200`}
          >
            {typeof content === 'string' ? (
              <p className="para-14 text-gray-600 font-normal leading-relaxed">
                {content}
              </p>
            ) : (
              content
            )}
          </div>
        )}
      </div>

      {/* Footer Category or Link */}
      {(category || link) && (
        <div className="mt-4 pt-2 flex items-center justify-between">
          {category && (
            <span className={`para-14 font-bold capitalize ${categoryColor}`}>
              {category}
            </span>
          )}
          {link && (
            <span className="para-14 font-bold text-primary hover:underline ml-auto inline-flex items-center gap-1">
              Explore →
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block h-full group">
        {cardBody}
      </Link>
    );
  }

  return cardBody;
}
