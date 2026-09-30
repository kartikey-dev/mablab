'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicesCol1 = [
  { name: 'Branding', href: '/services/branding' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Marketing', href: '/services/marketing' },
  { name: 'Social Media', href: '/services/social-media' },
  { name: 'Content', href: '/services/content' },
  { name: 'Video & Podcast', href: '/services/video-podcast' },
];

const servicesCol2 = [
  { name: 'PR & Influencer', href: '/services/pr-influencer' },
  { name: 'SEO & Paid Ads', href: '/services/seo-paid-ads' },
  { name: 'Design', href: '/services/design' },
  { name: 'Market Research', href: '/services/market-research' },
  { name: 'Events', href: '/services/events' },
  { name: 'Marketing Consulting', href: '/services/marketing-consulting' },
];

export default function Footer() {
  return (
    <footer className="bg-background-light pt-16 md:pt-35 pb-6 border-t-4 border-stroke">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_1fr] gap-8 mb-10">

          {/* Col 1: Logo + Tagline + Social */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/logo.svg"
                alt="MABLAB Logo"
                width={100}
                height={100}
                className="w-25 h-25 object-contain"
              />
            </Link>

            <p className="para-16 text-[#6B7280] mb-5 italic normal-case! font-normal!">
              Jungle Mein Mor Nacha Kisne Dekha?
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Visit Mablab YouTube channel" className="w-8 h-8 rounded-none bg-red-600 text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                ▶
              </a>
              <a href="#" aria-label="Visit Mablab LinkedIn page" className="w-8 h-8 rounded-none bg-linkedin-blue text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                in
              </a>
              <a href="#" aria-label="Visit Mablab Instagram profile" className="w-8 h-8 rounded-none bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                📸
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="para-12 text-stroke mb-4">NAVIGATION</h4>
            <ul className="space-y-2.5 para-14 text-[#6B7280] font-normal">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/why-us" className="hover:text-primary transition-colors">Why Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services — split into two sub-columns */}
          <div className="md:col-span-2">
            <h4 className="para-12 text-stroke mb-4">SERVICES</h4>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-2.5 para-14 text-[#6B7280] font-normal">
                {servicesCol1.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-primary transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5 para-14 text-[#6B7280] font-normal">
                {servicesCol2.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-primary transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Copyright + Privacy Policy */}
        <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 para-12 text-gray-500 normal-case! font-normal!">
          <span>© 2026 MAB Lab. All Rights Reserved.</span>
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
}
