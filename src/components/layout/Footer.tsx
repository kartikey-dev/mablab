'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-light pt-16 md:pt-35 pb-12 border-t-4 border-stroke">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">

          {/* Left Column: Logo + Tagline + Social Icons */}
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

            <p className="para-16 text-[#6B7280] mb-3 italic normal-case! font-normal!">
              Jungle Mein Mor Nacha Kisne Dekha?
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* YouTube (Red) */}
              <a href="#" aria-label="Visit Mablab YouTube channel" className="w-8 h-8 rounded-none bg-red-600 text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                ▶
              </a>
              {/* LinkedIn (Blue) */}
              <a href="#" aria-label="Visit Mablab LinkedIn page" className="w-8 h-8 rounded-none bg-linkedin-blue text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                in
              </a>
              {/* Instagram (Pink) */}
              <a href="#" aria-label="Visit Mablab Instagram profile" className="w-8 h-8 rounded-none bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white flex items-center justify-center text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                📸
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="para-12 text-stroke mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 para-14 text-[#6B7280] font-normal">
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#why-us" className="hover:text-primary transition-colors">Why Us</Link></li>
              <li><Link href="#stories" className="hover:text-primary transition-colors">Our Stories</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="para-12 text-stroke mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 para-14 text-[#6B7280] font-normal">
              <li><Link href="#services" className="hover:text-primary transition-colors">Branding</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Design</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Website Development</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Social Media</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Content</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Paid Ads &amp; SEO</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">PR &amp; Influencer Marketing</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="para-12 text-stroke mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 para-14 text-[#6B7280] font-normal">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-3 border-t border-gray-200 text-center para-12 text-gray-500 normal-case! font-normal!">
          © 2026 MAB Lab. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
