import React from 'react';
import Image from 'next/image';
import GsapSection from '@/components/ui/GsapSection';
import { videoPodcastChannels } from './data';

export default function VideoPodcastMorNachaSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-white py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Card */}
        <div className="bg-white border-2 border-stroke comic-shadow p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Left Column: Copy */}
            <div className="lg:col-span-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-primary mb-6 leading-tight capitalize">
                Jungle Mein Mor Nacha Kisne Dekha?
              </h2>

              <div className="space-y-4 para-16 text-gray-500 font-normal">
                <p>
                  No matter how great your video is, it&apos;s a wasted opportunity if nobody sees it.
                </p>
                <p>
                  That&apos;s why we think beyond production.
                </p>
                <p>
                  Every video we create is designed for distribution, repurposing, and reuse—so it can reach more people, create more opportunities, and keep delivering value long after it&apos;s published.
                </p>
                <p>
                  Because a great video isn&apos;t just meant to be made.
                </p>
                <p className="para-18 font-bold text-stroke">
                  It&apos;s meant to be seen.
                </p>
              </div>
            </div>

            {/* Right Column: Peacock Artwork */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <Image
                src="/images/our-moto.png"
                alt="Jungle Mein Mor Nacha Kisne Dekha?"
                width={545}
                height={312}
                priority
                className="w-full max-w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Distribution Channels */}
        <div className="mt-12 md:mt-16">
          <h3 className="card-title font-heading para-24 font-bold text-stroke mb-4 capitalize">
            Distribution Channels
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {videoPodcastChannels.map((channel) => (
              <div
                key={channel}
                className="bg-white border-2 border-stroke comic-shadow comic-shadow-hover p-4 text-center font-bold text-stroke capitalize para-14 sm:para-16 flex items-center justify-center min-h-[52px]"
              >
                {channel}
              </div>
            ))}
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
