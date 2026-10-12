import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import { brandServicesList } from './data';

export default function BrandingServicesSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[420px_1fr] gap-12">
          <div>
            <SectionHeading
              accentText="Services"
              accentColor="primary"
              className="sticky top-28 capitalize font-bold"
            />
          </div>

          <div className="divide-y-2 divide-stroke border-t-2 border-b-2 border-stroke">
            {brandServicesList.map((service) => (
              <div key={service.title} className="py-6 flex items-start gap-5">
                <div className="text-red-500 mt-1 shrink-0">
                  <IconComponent name={service.icon} className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="card-title font-heading para-24 font-bold capitalize text-stroke mb-1.5">
                    {service.title}
                  </h3>
                  <p className="para-16 text-gray-600">
                    {service.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
