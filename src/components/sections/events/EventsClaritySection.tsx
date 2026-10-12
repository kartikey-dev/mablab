import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { eventsClaritySteps } from './data';

export default function EventsClaritySection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Every"
          accentText="Successful Event"
          accentColor="primary"
          className="mb-12 capitalize"
        />

        <div className="space-y-3 sm:space-y-4 max-w-6xl mx-auto">
          {eventsClaritySteps.map((row, idx, arr) => (
            <React.Fragment key={row.phase}>
              <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left side: Stage name & description */}
                  <div className="lg:w-1/4 shrink-0 pr-4">
                    <h3 className="card-title font-heading para-24 font-bold text-stroke mb-2 capitalize">
                      {row.phase}
                    </h3>
                    <p className="para-14 text-gray-500 font-medium leading-relaxed">
                      {row.desc}
                    </p>
                  </div>

                  {/* Right side: 3 numbered action boxes */}
                  <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {row.steps.map((st) => (
                      <div
                        key={st.num}
                        className="bg-white border border-stroke p-4 sm:p-5 flex items-start gap-3.5 min-h-[92px]"
                      >
                        <span className={`para-14 font-extrabold ${row.numColor} shrink-0 mt-0.5`}>
                          {st.num}
                        </span>
                        <span className="para-13 sm:para-14 text-gray-700 font-medium leading-relaxed">
                          {st.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Downward Arrow between rows */}
              {idx < arr.length - 1 && (
                <div className="flex justify-center py-1 sm:py-2" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </GsapSection>
  );
}
