import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { paidDemandItems, organicDemandItems } from './data';

export default function SeoPaidAdsDemandSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="Capture Demand. Create Demand."
          accentText="Convert It."
          accentColor="primary"
          className="mb-12 capitalize font-bold"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: PAID */}
          <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-stroke">
                <span className="w-3.5 h-3.5 bg-purple-700 block" />
                <h3 className="card-title font-heading para-24 font-bold text-stroke capitalize tracking-wider">
                  Paid
                </h3>
              </div>
              <div className="space-y-4">
                {paidDemandItems.map((item) => (
                  <div
                    key={item.title}
                    className="pb-4 border-b border-stroke/20 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="card-title font-heading para-24 font-bold text-stroke capitalize">
                        <span className="text-gray-400 font-normal para-14 mr-2">
                          {item.num}
                        </span>
                        {item.title}
                      </h4>
                      <span
                        className={`text-[11px] font-bold tracking-wider capitalize ${item.tagColor}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="para-14 text-gray-600 font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: ORGANIC */}
          <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-stroke">
                <span className="w-3.5 h-3.5 bg-cyan-500 block" />
                <h3 className="card-title font-heading para-24 font-bold text-stroke capitalize tracking-wider">
                  Organic
                </h3>
              </div>
              <div className="space-y-4">
                {organicDemandItems.map((item) => (
                  <div
                    key={item.title}
                    className="pb-4 border-b border-stroke/20 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="card-title font-heading para-24 font-bold text-stroke capitalize">
                        <span className="text-gray-400 font-normal para-14 mr-2">
                          {item.num}
                        </span>
                        {item.title}
                      </h4>
                      <span
                        className={`text-[11px] font-bold tracking-wider capitalize ${item.tagColor}`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <p className="para-14 text-gray-600 font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
