import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { consultancyFrameworkColumns } from './data';

export default function ConsultancyWaysToThinkSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="100+ Ways To Think."
          accentText="One Thing To Find."
          accentColor="primary"
          className="mb-2 capitalize"
        />
        <h3 className="card-title font-heading para-24 font-bold text-stroke mb-4 capitalize">
          The problem worth solving.
        </h3>
        <div className="max-w-4xl mb-12">
          <p className="para-16 text-gray-700 font-normal leading-relaxed mb-2">
            No two businesses are the same.
          </p>
          <p className="para-16 text-gray-600 font-normal leading-relaxed">
            That&apos;s why we don&apos;t rely on a single methodology, framework, or way of thinking. We draw from research, strategy, marketing, innovation, and decision-making disciplines to understand situations, evaluate opportunities, and make better recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {consultancyFrameworkColumns.map((col, i) => (
            <div
              key={i}
              className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-6 flex flex-col justify-start h-full"
            >
              <h4 className="card-title font-heading para-24 font-bold text-stroke mb-4 pb-2 border-b-2 border-stroke capitalize">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.bullets.map((bullet, j) => (
                  <li key={j} className="para-14 text-gray-700 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-stroke rounded-full shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full Width Box at Bottom of Frameworks */}
        <div className="bg-white border-2 border-stroke comic-shadow p-6 md:p-8">
          <h4 className="card-title font-heading para-24 font-bold text-stroke mb-2 capitalize">
            And Many More.
          </h4>
          <p className="para-16 text-gray-700 leading-relaxed mb-2 font-medium">
            Frameworks don&apos;t solve problems. Understanding does.
          </p>
          <p className="para-14 text-gray-500 leading-relaxed font-normal">
            The value isn&apos;t in knowing a tool. It&apos;s in knowing when to use it, when not to use it, and how to apply it to the situation in front of you.
          </p>
        </div>
      </div>
    </GsapSection>
  );
}
