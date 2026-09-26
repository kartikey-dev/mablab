import React from 'react';

export default function DualCardSection() {
  return (
    <section className="bg-background-light py-16 md:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Our Mission */}
          <div className="border-2 border-stroke comic-shadow p-8">
            <h3 className="para-24 text-stroke mb-4">OUR MISSION</h3>
            <p className="para-18 text-stroke font-normal leading-relaxed">
              To help businesses make better marketing decisions through research, strategy, creativity, and thoughtful execution.
            </p>
          </div>

          {/* Our Vision */}
          <div className="border-2 border-stroke comic-shadow p-8">
            <h3 className="para-24 text-stroke mb-4">OUR VISION</h3>
            <p className="para-18 text-stroke font-normal leading-relaxed">
              A world where marketing feels smarter, more useful, and more human.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
