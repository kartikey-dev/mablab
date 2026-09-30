import React from 'react';
import { notFound } from 'next/navigation';
import ServiceHero from '@/components/sections/services/ServiceHero';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqSection from '@/components/sections/home/FaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { servicesDataMap } from '@/data/servicesData';
import { Metadata } from 'next';

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const data = servicesDataMap[id];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function GenericServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const data = servicesDataMap[id];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Reusable Service Hero Section */}
      <ServiceHero
        badgeText={data.badgeText}
        line1={data.heroLine1}
        line2={
          <>
            {data.heroLine2Prefix && <span className="text-cyan-400">{data.heroLine2Prefix}</span>}
            <span className="relative text-cyan-400 inline-block">
              {data.heroLine2AccentWord}
              <svg
                className="absolute -bottom-2.5 left-0 w-full h-3.5 text-cyan-400"
                viewBox="0 0 240 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 8 Q 120 18 238 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            {data.heroLine2Suffix && <span className="text-white">{data.heroLine2Suffix}</span>}
          </>
        }
      />

      {/* Service Overview & Value Proposition Section */}
      <GsapSection animation="fadeInUp" className="bg-background-light py-16 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading text="THE" accentText={`${data.name.toUpperCase()} FORMULA`} accentColor="primary" className="mb-10" />

          {/* Overview Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-2 border-stroke comic-shadow comic-shadow-hover p-8 bg-white">
              <h2 className="heading-h3 text-stroke mb-4">WHAT IS {data.name.toUpperCase()}?</h2>
              <p className="para-18 text-gray-700 leading-relaxed font-normal mb-4">
                {data.overview}
              </p>
              <p className="para-16 text-gray-600 leading-relaxed font-normal">
                {data.tagline}
              </p>
            </div>

            <div className="bg-primary text-white border-2 border-stroke comic-shadow comic-shadow-hover p-8 flex flex-col justify-between">
              <div>
                <span className="para-12 text-yellow-300 font-extrabold uppercase tracking-widest block mb-3">
                  WHY IT MATTERS
                </span>
                <p className="para-24 text-white font-extrabold leading-relaxed">
                  &ldquo;{data.whyItMatters}&rdquo;
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/20 para-14 text-purple-200 uppercase">
                MAB LAB {data.name} SCIENCE
              </div>
            </div>
          </div>

          {/* Deliverables / Formulas Grid */}
          <h2 className="heading-h3 text-stroke mb-8">FORMULA CAPABILITIES</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {data.deliverables.map((item) => (
              <div
                key={item.number}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="para-12 text-primary font-extrabold tracking-widest block mb-2">
                    CAPABILITY #{item.number}
                  </span>
                  <h3 className="heading-h3 text-stroke mb-3">{item.title}</h3>
                  <p className="para-16 text-gray-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GsapSection>

      {/* Shared FAQ Section with Custom Banner Content */}
      <FaqSection
        bannerHeading={`READY TO SCALE WITH ${data.name.toUpperCase()}?`}
        bannerDescription="Schedule a discovery call with Mablab marketing scientists and initiate your formula today."
      />
    </>
  );
}
