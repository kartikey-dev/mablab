import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Mablab — Marketing and Branding Lab',
  description: 'Schedule a discovery call with Mablab marketing scientists. Let us analyze your brand and formulate a custom growth strategy.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <section className="flex-1 py-16 md:py-[90px] bg-purple-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block border-2 border-white bg-yellow-300 text-black text-xs font-extrabold uppercase px-3 py-1 mb-4 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-4">
                LET&apos;S TALK <span className="text-yellow-300 underline decoration-wavy decoration-purple-400">GROWTH.</span>
              </h1>
              <p className="text-gray-300 text-lg font-medium">
                Ready to break through the noise? Tell us about your goals, and our lead fellows will formulate your growth experiment within 24 hours.
              </p>
            </div>

            <div className="bg-white text-black p-6 md:p-12 rounded-none border-4 border-black shadow-[12px_12px_0px_0px_rgba(234,179,8,1)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
