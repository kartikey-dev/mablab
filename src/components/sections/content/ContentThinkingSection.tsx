import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import IconComponent from '@/components/ui/IconComponent';
import GsapSection from '@/components/ui/GsapSection';
import { contentThinkingRows } from './data';

export default function ContentThinkingSection() {
  return (
    <GsapSection animation="fadeInUp" className="bg-[#D0DBED]/10 py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <SectionHeading
            className="capitalize mb-6 font-bold"
            text="We don't just share the content."
            accentColor="primary"
            accentText={
              <>
                <br />
                We share the thinking behind it.
              </>
            }
          />
          <p className="text-stroke para-16 font-medium">
            For every piece of content, you&apos;ll know why we wrote it, how we wrote it, and why we believe it will work.
          </p>
          <div className="relative self-start inline-flex items-center justify-center mt-3" style={{ width: '180px', height: '52px' }}>
            <svg
              viewBox="0 0 180 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <ellipse cx="90" cy="26" rx="86" ry="22" stroke="currentColor" strokeWidth="2" className="text-primary" />
            </svg>
            <p className="relative text-primary font-semibold text-sm italic whitespace-nowrap z-10">
              Clarity first. Always.
            </p>
          </div>
        </div>

        {/* Two column section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: THE CONTENT */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="bg-primary text-white para-12 comic-shadow-sm uppercase px-3 py-2 w-max mb-6 shrink-0 font-bold">
              The Content
            </div>
            {/* Notebook/paper mockup */}
            <div className="bg-white border-2 border-stroke/10 flex flex-1">
              {/* Binder rings column */}
              <div className="w-10 bg-stroke/5 border-r-2 border-stroke/10 flex flex-col items-center justify-between pt-8 pb-8 shrink-0">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-stroke/10 bg-white inset-shadow-sm inset-shadow-gray-400"
                  />
                ))}
              </div>
              {/* Paper content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-stroke mb-6">
                    <IconComponent name="edit-list" className="w-5 h-5 text-primary" />
                    <span className="para-12 text-primary uppercase tracking-widest font-bold">
                      Article
                    </span>
                  </div>
                  <h3 className="card-title font-heading para-24 font-bold text-stroke mb-8 capitalize">
                    Why your GTM strategy is failing (and what to&nbsp;
                    <span className="relative">
                      fix instead)
                      <svg
                        className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-3/4 h-3.5 text-cyan-400"
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
                  </h3>
                  <div className="space-y-3">
                    {['w-full', 'w-4/5', 'w-11/12', 'w-3/4', 'w-5/6'].map((width, i) => (
                      <div
                        key={i}
                        className={`h-2.5 bg-stroke/15 ${width}`}
                        style={{ borderRadius: 0 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: THE THINKING BEHIND IT */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-primary text-white para-12 comic-shadow-sm uppercase px-3 py-2 w-max mb-6 font-bold">
              The Thinking Behind It
            </div>
            <div className="divide-y divide-stroke/15 bg-white/80 border-2 border-stroke">
              {contentThinkingRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:grid sm:grid-cols-[36px_auto_1fr] items-start gap-2 sm:gap-4 px-5 py-4"
                >
                  <div className="text-stroke/60 shrink-0 hidden sm:block">
                    <IconComponent name={row.icon} className="w-5 h-5 text-danger" />
                  </div>
                  <span className="text-stroke para-14 font-bold capitalize">
                    {row.label}
                  </span>
                  <p className="text-primary para-14 normal-case font-medium">
                    {row.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
