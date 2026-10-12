import React from 'react';
import GsapSection from '@/components/ui/GsapSection';

export default function DesignBannerSection() {
  return (
    <GsapSection animation="fadeInUp">
      <section className="bg-primary py-16 md:py-20 border-y-2 border-stroke relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="subheading-h2 text-white mb-6 capitalize font-bold">
            People don&apos;t experience brands through strategy. They experience them through design.
          </h2>
          <p className="text-purple-100 para-24 font-bold capitalize">
            Discuss your ideas with a design specialist - 30 minute free consultation.
          </p>
        </div>
      </section>
    </GsapSection>
  );
}
