'use client';

import React from 'react';
import Button from '@/components/ui/Button';

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-[90px] bg-yellow-400 border-t-4 border-b-4 border-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-black tracking-tight mb-6">
          STOP GUESSING. START <span className="bg-purple-700 text-yellow-300 px-3 py-1 border-2 border-black rotate-1 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">TESTING.</span>
        </h2>
        <p className="text-black text-lg md:text-xl font-bold max-w-2xl mx-auto mb-8">
          Join 50+ growth-stage brands scaling revenue through scientifically validated marketing experiments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="#contact" variant="primary" size="lg">
            BOOK A DISCOVERY CALL
          </Button>
        </div>
      </div>
    </section>
  );
}
