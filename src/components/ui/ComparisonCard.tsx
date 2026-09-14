import React from 'react';

interface ComparisonCardProps {
  variant: 'warning' | 'success';
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
  const styles = {
    warning: {
      bg: 'bg-stroke',
      text: 'text-white',
      icon: '⚠️',
      iconBg: 'bg-yellow-500/20',
    },
    success: {
      bg: 'bg-primary',
      text: 'text-white',
      icon: '✅',
      iconBg: 'bg-green-500/20',
    },
  };

  const s = styles[variant];

  return (
    <div className={`${s.bg} ${s.text} p-5 rounded-none ${className}`}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0" aria-hidden="true">
          {s.icon}
        </span>
        <div>
          <p className="font-heading font-bold text-sm uppercase tracking-wide mb-2">
            {title}
          </p>
          <p className="para-14 opacity-90 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
