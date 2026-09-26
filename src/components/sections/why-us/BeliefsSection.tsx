import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BeliefsSection() {
  const beliefs = [
    'We believe understanding comes before execution.',
    'We believe good work starts with good questions.',
    'We believe brands grow when they\u2019re clear about who they are and why they matter.',
    'We believe marketing should be grounded in evidence, not assumptions.',
    'We believe creativity is most powerful when it solves a real problem.',
    'We believe businesses deserve partners who tell the truth, even when it\u2019s uncomfortable.',
  ];

  return (
    <section className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">

        <SectionHeading text="WHAT WE" accentText="BELIEVE" accentColor="primary" className="mb-2" />

        <p className="para-24 text-secondary uppercase mb-1">DEPTH BUILDS TRUST</p>
        <p className="para-16 text-stroke font-normal mb-6">It&apos;s the belief behind everything we do.</p>

        <hr className="border-t-2 border-stroke mb-8" />

        {/* Belief Items */}
        <div className="space-y-4 mb-6">
          {beliefs.map((belief, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-2 border-stroke comic-shadow p-5 bg-white"
            >
              <span className="text-primary font-heading font-extrabold text-xl min-w-[40px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="para-18 text-stroke">{belief}</p>
            </div>
          ))}
        </div>

        {/* Core Synthesis — #07 */}
        <div className="bg-primary border-2 border-stroke comic-shadow p-6 md:p-8 flex items-start gap-4">
          <span className="text-cyan-text font-heading font-extrabold text-xl min-w-[40px]">07</span>
          <div>
            <span className="para-12 text-cyan-text tracking-widest mb-1 block">CORE SYNTHESIS</span>
            <p className="para-24 text-white font-extrabold leading-relaxed">
              And we believe the best results come from thinking first and moving with purpose.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
