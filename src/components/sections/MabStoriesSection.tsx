'use client';

import React from 'react';
import Link from 'next/link';
import { stories } from '@/data/stories';

export default function MabStoriesSection() {
  const accentBars = ['bg-primary', 'bg-secondary', 'bg-tag-orange'];

  return (
    <section id="stories" className="bg-background-light py-16 md:py-[90px] relative">
      <div className="container mx-auto px-4 md:px-8">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-6">
          <div>
            <h2 className="heading-mablab text-stroke">
              MAB <span className="text-primary">STORIES</span>
            </h2>
            <p className="para-18 text-gray-500 mt-2 font-normal!">
              Marketing and branding inspiration, research, tips and more...
            </p>
          </div>

          <div>
            <Link
              href="#"
              className="inline-block bg-secondary text-white para-16 px-6 py-2.5 border-2 border-stroke comic-shadow-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              VIEW ALL STORIES
            </Link>
          </div>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-6">
          {stories.map((story, idx) => (
            <div
              key={story.id}
              className="bg-white border-2 border-stroke comic-shadow p-6 flex flex-col justify-between h-full relative hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              {/* Large Watermark Number above card title */}
              <div className="text-5xl md:text-[80px] font-body font-black text-stroke/5 absolute -top-16">
                {story.number}
              </div>

              <div>
                <h3 className="text-[32px] font-heading font-bold text-stroke uppercase leading-tight md:mb-24 mb-8 max-w-11/12">
                  {story.title}
                </h3>
                <p className="para-16 text-gray-500 font-normal!">
                  {story.description}
                </p>
              </div>

              {/* Bottom Accent Underline Bar */}
              <div className={`w-12 h-1.5 border-2 border-stroke ${accentBars[idx % accentBars.length]} mt-6`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
