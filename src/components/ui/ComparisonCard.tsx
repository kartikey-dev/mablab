import React from 'react';
import IconComponent from './IconComponent';

export interface ComparisonCardProps {
  variant: 'shortcut' | 'mablab';
  title: string;
  description: string;
  className?: string;
}

export default function ComparisonCard({
  variant,
  title,
  description,
  className = '',
}: ComparisonCardProps) {
  if (variant === 'shortcut') {
    return (
      <div className={`bg-[#D0DBED]/30 p-6 text-stroke para-16 ${className}`}>
        <div className="flex items-center gap-2 font-heading font-normal! text-gray-600 mb-2">
          <span>
            <IconComponent name="warning-triangle" className="w-5 h-5 text-gray-500" />
          </span>{' '}
          {title}
        </div>
        <p className="font-normal! max-w-[80%]">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-primary border-2 border-stroke comic-shadow p-6 text-white para-16 ${className}`}>
      <div className="flex items-center gap-2 font-normal! mb-2">
        <span>
          <IconComponent name="mablab-seal" className="w-5 h-5 text-white" />
        </span>{' '}
        {title}
      </div>
      <p className="font-normal! max-w-[80%]">
        {description}
      </p>
    </div>
  );
}
