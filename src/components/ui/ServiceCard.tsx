import React from 'react';
import Link from 'next/link';
import IconComponent, { type ServiceIconName } from './IconComponent';

export interface ServiceCardProps {
  id?: string;
  name: string;
  description: string;
  icon: ServiceIconName | string;
  className?: string;
}

export default function ServiceCard({
  id,
  name,
  description,
  icon,
  className = '',
}: ServiceCardProps) {
  const cardContent = (
    <div
      id={id}
      className={`bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-5 md:p-6 h-auto md:h-36 cursor-pointer group relative overflow-hidden ${className}`}
      role="article"
      aria-label={name}
    >
      {/* Mobile View: All 3 elements (Icon, Heading, Description) open & visible */}
      <div className="md:hidden flex flex-col gap-2">
        <div className="text-red-500">
          <IconComponent name={icon as ServiceIconName} className="w-7 h-7 text-red-500" />
        </div>
        <h3 className="font-heading text-xl font-bold text-stroke uppercase leading-tight">
          {name}
        </h3>
        <p className="para-14 text-gray-700 font-medium normal-case leading-snug">
          {description}
        </p>
      </div>

      {/* Desktop View: Interactive 2-Slot Hover Mask (96px height) */}
      <div className="hidden md:block relative overflow-hidden h-24">
        {/* Animated 3-Row Track (Row 1: Icon, Row 2: Heading, Row 3: Description) */}
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-12">
          {/* Row 1: Icon (Default top slot) */}
          <div className="h-12 flex items-center text-red-500">
            <IconComponent name={icon as ServiceIconName} className="w-8 h-8 text-red-500" />
          </div>

          {/* Row 2: Heading (Default bottom slot -> Moves to top slot on hover) */}
          <div className="h-12 flex items-center">
            <h3 className="font-heading text-2xl font-bold text-stroke uppercase leading-none">
              {name}
            </h3>
          </div>

          {/* Row 3: Description (Below viewport -> Moves to bottom slot on hover) */}
          <div className="h-12 flex items-center">
            <p className="para-14 text-gray-700 font-medium normal-case leading-snug line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (id) {
    return <Link href={`/services/${id}`}>{cardContent}</Link>;
  }

  return cardContent;
}
