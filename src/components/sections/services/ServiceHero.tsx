import React from 'react';

export interface ServiceHeroProps {
  badgeText: string;
  line1: React.ReactNode;
  line2: React.ReactNode;
  badgeColor?: string;
  className?: string;
}

export default function ServiceHero({
  badgeText,
  line1,
  line2,
  badgeColor = 'bg-cyan-400',
  className = '',
}: ServiceHeroProps) {
  return (
    <section className={`bg-primary py-20 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[360px] md:min-h-[440px] ${className}`}>
      {/* Background Subtle Oval Glow / Ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[80%] border border-white/10 rounded-[100%] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        {/* Top Badge */}
        <div className="mb-6">
          <span className={`inline-block ${badgeColor} text-stroke border-2 border-stroke comic-shadow-sm px-4 py-1 para-12 font-extrabold uppercase tracking-wider`}>
            {badgeText}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.12] mx-auto max-w-5xl break-words">
          <div>{line1}</div>
          <div className="mt-2 md:mt-3">{line2}</div>
        </h1>
      </div>
    </section>
  );
}
