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
    <div className={`w-full max-w-6xl mx-auto px-4 md:px-8 z-20 absolute left-1/2 -translate-x-1/2 -bottom-23 ${className}`}>
      <div className="bg-primary border-2 border-stroke comic-shadow-lg p-6 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-white mb-3 tracking-tight">
            {heading}
          </h3>
          <p className="para-16 text-purple-100 font-normal leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        <div className="shrink-0">
          <Button
            href="#contact"
            variant="white"
            className="px-12! py-6! whitespace-nowrap"
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
