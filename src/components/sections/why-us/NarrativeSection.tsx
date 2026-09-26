import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function NarrativeSection() {
  return (
    <section className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">

        <SectionHeading text="OUR" accentText="STORY" accentColor="primary" className="mb-10" />

        {/* Main Story Block */}
        <div className="border-2 border-stroke comic-shadow p-8 md:p-10 mb-10">
          <div className='sm:w-3/4'>
            <p className="para-18 text-stroke font-normal leading-relaxed mb-6">
              Marketing has never been more accessible. There are more tools, more platforms, more content, more experts, and more advice than ever before. And that&apos;s why it feels even more confusing. Every day, there&apos;s a new trend to follow, a new framework to learn, a new AI tool to try, and a new expert telling you what you&apos;re doing wrong.
            </p>

            <div className="border-l-4 border-primary pl-5 mb-6">
              <p className="para-18 text-stroke font-normal leading-relaxed">
                For business owners, it can feel like everyone has an answer. The hard part is figuring out which ones are worth listening to.
              </p>
            </div>

            <p className="text-primary font-heading text-xl mb-6">
              That&apos;s why MAB Lab exists. To ease that confusion. To soften the overwhelm.
            </p>

            <hr className='border-t border-dashed border-[#D1D5DB]' />

            <span className="para-12 text-gray-500 tracking-widest mt-4 mb-2 block">DYNAMIC MATRIX :</span>

            <p className="para-18 text-stroke font-normal leading-relaxed mb-4">
              We&apos;re a tight bunch of people who are passionate about solving marketing and branding challenges. Technology. AI. Platforms. Trends. Tools.
            </p>

            <hr className='border-t border-dashed border-[#D1D5DB]' />

            <p className="para-18 text-stroke font-normal leading-relaxed my-6">
              But we&apos;re equally interested in the things that don&apos;t change. People. Trust. Behaviour. The fundamentals that keep working long after the trends have moved on.
            </p>

            <div className="border-l-4 border-secondary pl-5 mb-6">
              <p className="para-18 text-stroke font-normal leading-relaxed">
                That&apos;s the lens we bring to every project. Understand the business, the audience, and the problem. Then decide what to do. No shortcuts. Just thoughtful work, built on understanding.
              </p>
            </div>

            <p className="para-18 text-stroke font-normal leading-relaxed">
              It&apos;s not the fastest way to do marketing. But in our experience, it&apos;s usually the better way. And it&apos;s certainly the way we enjoy doing it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
