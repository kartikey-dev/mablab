import React from 'react';
import Button from '@/components/ui/Button';

export interface LetsTalkBannerProps {
  heading?: React.ReactNode;
  description?: string;
  className?: string;
}

export default function LetsTalkBanner({
  heading = "You've Tried Enough Things.",
  description = "If you're spending time and money on marketing without clear results, let's talk. Identify what matters, what doesn't, and where to focus next.",
  className = "",
}: LetsTalkBannerProps) {
  return (
    <div className={`w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-30 -mb-16 md:-mb-24 mt-12 md:mt-16 ${className}`}>
      <div className="bg-primary border-2 border-stroke comic-shadow-lg p-6 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-3 tracking-tight">
            {heading}
          </h3>
          <p className="para-16 text-purple-100 font-normal leading-relaxed">
            {description}
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <Button
            href="/contact"
            variant="white"
            fullWidth
            className="sm:w-auto! px-8! sm:px-10! py-4! sm:py-5! whitespace-nowrap"
            icon={
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" fill="currentColor" />
              </svg>
            }
          >
            LET&apos;S TALK!
          </Button>
        </div>
      </div>
    </div>
  );
}
