import React from 'react';
import IconComponent, { type ServiceIconName } from './IconComponent';

interface ServiceCardProps {
  name: string;
  icon: ServiceIconName;
  className?: string;
}

export default function ServiceCard({ name, icon, className = '' }: ServiceCardProps) {
  return (
    <div
      className={`comic-panel p-6 flex flex-col gap-3 group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(91,33,182,0.3)] ${className}`}
      role="article"
      aria-label={name}
    >
      <div className="text-danger">
        <IconComponent name={icon} size={28} />
      </div>
      <h3 className="font-heading font-bold text-base uppercase tracking-wide text-dark">
        {name}
      </h3>
    </div>
  );
}
