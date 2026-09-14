import React from 'react';
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
  return (
    <div
      id={id}
      className={`bg-white border-2 border-stroke comic-shadow p-6 hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex flex-col justify-between h-36 cursor-pointer group ${className}`}
      role="article"
      aria-label={name}
    >
      <div className="text-red-500 mb-2">
        <IconComponent name={icon as ServiceIconName} className="w-8 h-8 text-red-500" />
      </div>

      {/* Rolling Text Mask */}
      <div className="relative overflow-hidden h-14">
        <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-14">
          {/* Heading (Default) */}
          <h3 className="font-heading text-2xl font-bold text-stroke uppercase h-14 flex items-center">
            {name}
          </h3>
          {/* One-Liner Description (Rolling in on hover) */}
          <p className="para-16 text-gray-700 font-medium normal-case leading-snug h-14 flex items-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
