import React from 'react';
import GsapSection from '@/components/ui/GsapSection';

export default function BrandingWorksWithSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#F8F9FF] py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-2 para-12 font-bold text-stroke capitalize">
          <span className="w-5 h-5 border-2 border-cyan-500 text-cyan-500 rounded-full flex items-center justify-center text-xs">
            +
          </span>
          <span>Often Works With: Market Research • Content • Design • Web</span>
        </div>
      </div>
    </GsapSection>
  );
}
