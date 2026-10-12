import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GsapSection from '@/components/ui/GsapSection';
import { videoPodcastOutputs } from './data';

export default function VideoPodcastContentOutputsSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/15 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          text="The Most Expensive Content Is Content You Can"
          accentText="Only Use Once."
          accentColor="primary"
          className="mb-6 capitalize max-w-5xl"
        />

        <div className="max-w-4xl mb-10">
          <p className="para-16 md:para-18 text-gray-700 font-normal leading-relaxed mb-4">
            A single podcast can become social content, blog articles, email campaigns, sales material, thought leadership, website content, and more.
          </p>
          <p className="para-16 md:para-18 font-extrabold text-stroke leading-relaxed">
            The more value we can create from one piece of content, the less often you need to start from scratch.
          </p>
        </div>

        <div>
          <h3 className="card-title font-heading para-24 font-bold text-stroke mb-4 capitalize">
            Content Outputs
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {videoPodcastOutputs.map((output) => (
              <div
                key={output}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-4 text-center font-bold text-stroke capitalize para-16 flex items-center justify-center min-h-[58px]"
              >
                {output}
              </div>
            ))}
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
