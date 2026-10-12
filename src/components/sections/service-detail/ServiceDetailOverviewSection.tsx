import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import IconCard from '@/components/ui/IconCard';
import { ServiceDetailData } from '@/data/servicesData';

interface ServiceDetailOverviewSectionProps {
  data: ServiceDetailData;
}

export default function ServiceDetailOverviewSection({ data }: ServiceDetailOverviewSectionProps) {
  return (
    <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="The"
          accentText={`${data.name} Formula`}
          accentColor="primary"
          className="mb-10 capitalize font-bold"
        />

        {/* Overview Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border-2 border-stroke comic-shadow comic-shadow-hover p-8 bg-white">
            <h2 className="card-title font-heading para-24 font-bold text-stroke capitalize mb-4">
              What Is {data.name}?
            </h2>
            <p className="para-18 text-gray-700 leading-relaxed font-normal mb-4">
              {data.overview}
            </p>
            <p className="para-16 text-gray-600 leading-relaxed font-normal">
              {data.tagline}
            </p>
          </div>

          <div className="bg-primary text-white border-2 border-stroke comic-shadow comic-shadow-hover p-8 flex flex-col justify-between">
            <div>
              <span className="para-12 text-yellow-300 font-bold uppercase tracking-widest block mb-3">
                Why It Matters
              </span>
              <p className="para-24 text-white font-bold leading-relaxed">
                &ldquo;{data.whyItMatters}&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/20 para-14 text-purple-200 capitalize">
              Mablab {data.name} Science
            </div>
          </div>
        </div>

        {/* Deliverables / Formulas Grid using IconCard */}
        <h2 className="card-title font-heading para-24 font-bold text-stroke capitalize mb-8">
          Formula Capabilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {data.deliverables.map((item) => (
            <IconCard
              key={item.number}
              tag={`Capability #${item.number}`}
              tagColor="bg-primary"
              title={item.title}
              content={item.description}
            />
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
