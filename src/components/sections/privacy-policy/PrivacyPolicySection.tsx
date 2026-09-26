import React from 'react';
import LetsTalkBanner from '@/components/sections/shared/LetsTalkBanner';

export default function PrivacyPolicySection() {
  return (
    <section className="bg-background-light  py-16 md:pt-[90px] md:pb-36 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* Header Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border-2 border-stroke bg-white px-3.5 py-1.5 para-12 font-extrabold text-stroke uppercase comic-shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
            PRIVACY POLICY
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-stroke mb-3 tracking-tight">
          Privacy Policy
        </h1>
        <p className="para-12 text-gray-400 uppercase tracking-widest font-bold mb-10">
          LAST UPDATED: SEPTEMBER 2026
        </p>

        {/* Intro */}
        <p className="para-24 text-primary font-extrabold mb-4 leading-relaxed">
          We believe understanding builds trust.
        </p>
        <p className="para-18 text-gray-600 font-normal leading-relaxed mb-4">
          That applies to marketing, branding, and how we handle your information.
        </p>
        <p className="para-18 text-gray-600 font-normal leading-relaxed mb-14">
          This Privacy Policy explains what information we collect, why we collect it, and what happens to it when you visit our website or get in touch with us.
        </p>

        {/* ============================================
            01 // SYNOPSIS — Executive Summary Box
            ============================================ */}
        <div className="border-2 border-stroke comic-shadow relative p-6 md:p-10 bg-white mb-16">
          {/* Executive Summary Badge Top Right */}
          <span className="absolute top-6 right-0 bg-stroke text-white para-12 font-extrabold px-4 py-1 uppercase tracking-wider">
            EXECUTIVE SUMMARY
          </span>

          <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
            01 // SYNOPSIS
          </span>
          <h2 className="heading-h3 capitalize text-stroke mb-2">The Short Version</h2>
          <p className="para-14 text-gray-500 italic mb-6">
            If you&apos;re not in the mood to read a privacy policy, here&apos;s the gist:
          </p>

          <div className="space-y-3.5 mb-6">
            {[
              'We collect only the information we need.',
              'We use it to run our website and communicate with you.',
              'We don\u2019t sell your personal information.',
              'We don\u2019t share your information with advertisers.',
              'We try our best to keep your information secure.',
              'If you\u2019d like us to update or delete your information, just ask.',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 border-2 border-cyan-500 bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <p className="para-16 text-stroke font-extrabold leading-snug">{text}</p>
              </div>
            ))}
          </div>

          <hr className="border-t border-gray-200 mb-4" />
          <p className="para-14 text-primary font-extrabold">Now for the slightly longer version.</p>
        </div>

        {/* ============================================
            DETAILED SECTIONS (02 THROUGH 10)
            ============================================ */}
        <div className="space-y-0">

          {/* 02 / COLLECTION */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                02 / COLLECTION
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Information We Collect</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                When you visit our website, contact us, subscribe to something, or work with us, we may collect information such as:
              </p>
              <ul className="list-disc pl-5 space-y-2 para-16 text-stroke font-normal leading-relaxed mb-6">
                <li>Your name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Information you choose to share with us</li>
                <li>Website usage information such as pages visited, browser type, device information, and similar analytics data</li>
              </ul>
              <p className="para-14 text-gray-500 font-normal">
                Most of the personal information we receive is information you choose to provide.
              </p>
            </div>
          </div>

          {/* 03 / PURPOSE */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                03 / PURPOSE
              </span>
              <h3 className="heading-h3 capitalize text-stroke">How We Use Your Information</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2 para-16 text-stroke font-normal leading-relaxed mb-6">
                <li>Respond to enquiries</li>
                <li>Communicate with prospective and existing clients</li>
                <li>Deliver our services</li>
                <li>Improve our website and user experience</li>
                <li>Understand how visitors use our website</li>
                <li>Send updates or marketing communications if you&apos;ve chosen to receive them</li>
                <li>Comply with legal obligations when required</li>
              </ul>
              <hr className="border-t border-gray-200 my-6" />
              <p className="para-16 text-primary font-extrabold mb-1">That&apos;s it.</p>
              <p className="para-16 text-stroke font-extrabold">
                We don&apos;t collect information for the sake of collecting information.
              </p>
            </div>
          </div>

          {/* 04 / ANALYTICS */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                04 / ANALYTICS
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Cookies &amp; Analytics</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                Like most websites, we may use cookies and analytics tools to understand how visitors use our website.
              </p>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-3">
                These tools help us answer questions like:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 para-16 text-gray-700 font-normal leading-relaxed mb-6">
                <li>Which pages are useful?</li>
                <li>Which pages aren&apos;t?</li>
                <li>How do people find us?</li>
                <li>How can we improve the experience?</li>
              </ul>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                Cookies generally don&apos;t tell us who you are as an individual. They help us understand patterns and improve the website.
              </p>
              <p className="para-14 text-gray-500 font-normal">
                You can control or disable cookies through your browser settings.
              </p>
            </div>
          </div>

          {/* 05 / INTEGRATIONS */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                05 / INTEGRATIONS
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Third-Party Services</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                We may use trusted third-party tools and platforms to operate our website, communicate with clients, manage projects, process forms, analyse website traffic, or deliver services.
              </p>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                These providers may process information on our behalf, but only for the purposes of helping us run our business.
              </p>
              <p className="para-16 text-stroke font-extrabold mb-2">Examples may include:</p>
              <ul className="list-disc pl-5 space-y-1.5 para-16 text-gray-700 font-normal leading-relaxed mb-6">
                <li>Website hosting providers</li>
                <li>Analytics platforms</li>
                <li>Email and communication tools</li>
                <li>Project management tools</li>
                <li>CRM systems</li>
              </ul>
              <p className="para-14 text-gray-500 font-normal">
                We encourage you to review the privacy policies of any third-party services you interact with through our website.
              </p>
            </div>
          </div>

          {/* 06 / SECURITY */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                06 / SECURITY
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Data Security</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                We take reasonable steps to protect the information we collect.
              </p>
              <p className="para-16 text-stroke font-normal leading-relaxed">
                No website, platform, or method of transmission is completely secure, but we use appropriate measures to help safeguard your information from unauthorised access, misuse, or disclosure.
              </p>
            </div>
          </div>

          {/* 07 / RETENTION */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                07 / RETENTION
              </span>
              <h3 className="heading-h3 capitalize text-stroke">How Long We Keep Information</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                We keep information only for as long as it is reasonably necessary to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 para-16 text-gray-700 font-normal leading-relaxed mb-6">
                <li>Provide our services</li>
                <li>Maintain business records</li>
                <li>Meet legal, accounting, or regulatory requirements</li>
              </ul>
              <p className="para-14 text-gray-500 font-normal">
                When information is no longer required, we aim to delete or securely dispose of it.
              </p>
            </div>
          </div>

          {/* 08 / RIGHTS */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                08 / RIGHTS
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Your Rights</h3>
            </div>
            <div>
              <div className="border-2 border-stroke comic-shadow p-6 bg-white mb-4">
                <p className="para-16 text-stroke font-extrabold mb-3">
                  Depending on where you live, you may have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-2 para-16 text-stroke font-normal leading-relaxed">
                  <li>Access the information we hold about you</li>
                  <li>Request corrections to your information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Object to certain uses of your information</li>
                </ul>
              </div>
              <p className="para-14 text-stroke font-medium">
                If you&apos;d like to make a request regarding your personal information, please contact us.
              </p>
            </div>
          </div>

          {/* 09 / UPDATES */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                09 / UPDATES
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Changes To This Policy</h3>
            </div>
            <div>
              <p className="para-16 text-stroke font-normal leading-relaxed mb-4">
                From time to time, we may update this Privacy Policy to reflect changes to our website, services, technology, or legal requirements.
              </p>
              <p className="para-14 text-gray-500 font-normal">
                When we do, we&apos;ll update the &quot;Last Updated&quot; date at the top of this page.
              </p>
            </div>
          </div>

          {/* 10 / DIRECT ENQUIRY */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 py-10 border-t-2 border-gray-200 mb-12">
            <div>
              <span className="para-12 text-primary font-extrabold uppercase tracking-widest block mb-1">
                10 / DIRECT ENQUIRY
              </span>
              <h3 className="heading-h3 capitalize text-stroke">Contact Us</h3>
            </div>
            <div>
              <div className="border-2 border-stroke comic-shadow-purple p-6 md:p-8 bg-white">
                <p className="para-18 text-stroke font-medium mb-6">
                  If you have questions about this Privacy Policy or how we handle information, we&apos;d be happy to help.
                </p>

                <div className="inline-flex items-center gap-2 border-2 border-cyan-text/40 bg-[#EFF6FF] px-4 py-2 text-sm mb-6">
                  <span className="text-primary font-bold">Email:</span>
                  <a href="mailto:hello@mablab.in" className="text-secondary font-bold underline hover:text-secondary transition-colors">
                    hello@mablab.in
                  </a>
                </div>

                <hr className="border-t border-gray-200 mb-4" />
                <p className="para-14 text-gray-500 font-normal mb-1">
                  Or simply get in touch through our website.
                </p>
                <p className="para-16 text-stroke font-extrabold">
                  We&apos;ll do our best to point you in the right direction.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* End of Document Archive Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 font-mono uppercase pt-8 border-t-2 border-gray-200 mb-16">
          <span>END OF DOCUMENT // PRIVACY POLICY</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-primary"></span>
            MAB LAB STRATEGY &amp; LEGAL ARCHIVE
          </span>
        </div>

      </div>

      {/* LET'S TALK Banner Overlapping Footer */}
      <LetsTalkBanner
        heading="LET'S TALK!"
        description="Ready to replace guesswork with strategic rigor? Let's build your scientific growth engine together."
      />
    </section>
  );
}
