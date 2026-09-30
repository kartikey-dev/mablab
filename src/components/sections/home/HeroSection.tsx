'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

export default function HeroSection() {
    const [hoveredTab, setHoveredTab] = useState<'groundwork' | 'frameworks' | 'guesswork' | null>(null);

    const heroRef = useGsapAnimation<HTMLDivElement>({
        animation: 'fadeInUp',
        duration: 0.9,
        y: 45,
    });

    return (
        <section className="bg-background-light py-12 sm:py-16 md:py-[90px] relative overflow-hidden">
            <div ref={heroRef} className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-full">

                {/* Main Headline Stack */}
                <h1 className="max-w-4xl mx-auto mb-10 sm:mb-12">

                    {/* Line 1: Marketing Scientists with Avatars above Scientists */}
                    <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-2 text-stroke tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold">
                        <span>Marketing</span>

                        <div className="relative inline-block">
                            {/* 3 Overlapping Grayscale Avatars Floating Above "Scientists" */}
                            <div className="absolute -top-11 right-6 sm:right-12 hidden sm:flex -space-x-3 items-center">
                                <Image
                                    src="/images/avatar1.webp"
                                    alt="Scientist Avatar 1"
                                    width={54}
                                    height={54}
                                    className="w-11 h-11 sm:w-13.5 sm:h-13.5 rounded-full border-4 border-white object-cover grayscale"
                                />
                                <Image
                                    src="/images/avatar2.webp"
                                    alt="Scientist Avatar 2"
                                    width={54}
                                    height={54}
                                    className="w-11 h-11 sm:w-13.5 sm:h-13.5 rounded-full border-4 border-white object-cover grayscale"
                                />
                                <Image
                                    src="/images/avatar3.webp"
                                    alt="Scientist Avatar 3"
                                    width={54}
                                    height={54}
                                    className="w-11 h-11 sm:w-13.5 sm:h-13.5 rounded-full border-4 border-white object-cover grayscale"
                                />
                            </div>

                            {/* Scientists text with purple color + wavy line + top right icon */}
                            <span className="text-primary relative inline-block">
                                Scientists
                                {/* SVG Icon positioned just above 's' at top right corner rotated -12deg */}
                                <svg
                                    width="18"
                                    height="25"
                                    viewBox="0 0 18 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute -top-2 right-0 rotate-12 pointer-events-none w-3.5 h-5 sm:w-4.5 sm:h-6"
                                >
                                    <path
                                        d="M-1.32248e-05 21.2818L0.519767 18.8364L6.63319 20.1359L7.15297 17.6905C5.46159 17.331 4.14654 16.4285 3.20781 14.983C2.26909 13.5375 1.97948 11.969 2.339 10.2776C2.60322 9.03457 3.18495 7.97614 4.08419 7.10234C4.98343 6.22854 6.06364 5.68074 7.32481 5.45894C7.63511 4.80074 8.11594 4.31722 8.7673 4.0084C9.41865 3.69958 10.101 3.62097 10.8142 3.77257L10.5445 1.73447L11.797 1.55342L11.603 0.362045L14.108 -4.37684e-05L14.2279 1.23947L15.4805 1.05843L16.8937 10.9433L15.6412 11.1243L15.8222 12.3768L13.3172 12.7389L13.1973 11.4994L11.9448 11.6804L11.64 9.50707C11.2736 9.72739 10.8766 9.86664 10.4489 9.92483C10.0213 9.98301 9.60796 9.94841 9.20906 9.82102C8.76941 9.68497 8.38089 9.45862 8.04352 9.14198C7.70615 8.82533 7.43164 8.46347 7.21998 8.0564C6.60047 8.2655 6.07431 8.61159 5.64149 9.09466C5.20868 9.57773 4.92297 10.1453 4.78437 10.7974C4.56779 11.8163 4.74032 12.7582 5.30195 13.623C5.86358 14.4879 6.65385 15.0286 7.67275 15.2451L17.4542 17.3243L16.9345 19.7696L10.821 18.4702L10.3012 20.9155L17.6374 22.4749L17.1176 24.9203L-1.32248e-05 21.2818ZM13.552 9.5301L14.7433 9.33606L13.8862 3.14763L12.6337 3.32867L13.552 9.5301ZM9.84343 8.03897C10.1899 8.11261 10.5052 8.05716 10.7893 7.87262C11.0735 7.68809 11.2524 7.4226 11.326 7.07618C11.3996 6.72975 11.3442 6.41445 11.1597 6.13029C10.9751 5.84613 10.7096 5.66724 10.3632 5.5936C10.0168 5.51997 9.70149 5.57542 9.41733 5.75995C9.13317 5.94449 8.95427 6.20997 8.88064 6.5564C8.807 6.90282 8.86245 7.21812 9.04699 7.50228C9.23153 7.78644 9.49701 7.96534 9.84343 8.03897Z"
                                        fill="#5B21B6"
                                    />
                                </svg>
                                {/* Wavy Underline SVG */}
                                <svg
                                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/4 h-3 text-primary"
                                    viewBox="0 0 100 20"
                                    preserveAspectRatio="none"
                                    fill="none"
                                >
                                    <path
                                        d="M0 10 Q25 20, 50 10 T100 10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Line 2: for Your Business Needs inside Double-Bordered Container */}
                    <div className="mt-3 sm:mt-4 relative flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-stroke text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold">
                        <span>for Your</span>

                        <div className="relative top-1 sm:top-2 inline-block border-2 border-stroke comic-shadow p-2 sm:p-2.5 text-left bg-white max-w-full">
                            <span className="block text-stroke leading-none">Business Needs</span>
                            <span className="block para-12 sm:para-16 text-primary mt-1.5 sm:mt-2 tracking-normal text-center font-normal">
                                Branding, Marketing, Web Development, Market Research, Etc.
                            </span>
                        </div>
                    </div>
                </h1>

                {/* CTA Button */}
                <div className="mb-10 sm:mb-14">
                    <Button href="#contact" variant="secondary" size="lg" showArrow>
                        LET&apos;S TALK!
                    </Button>
                </div>

                {/* Bottom Strip Container with Interactive Hover Cards Floating Above */}
                <div className="relative mx-auto">

                    {/* HOVER POPOVER CARDS DISPLAYED ABOVE TABS */}
                    <div className="hidden md:grid grid-cols-3 gap-0 absolute top-full left-0 right-0 z-30 pointer-events-none">

                        {/* Groundwork Hover Card */}
                        <div
                            className={`transition-all duration-200 ${hoveredTab === 'groundwork'
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="h-full bg-white border-2 border-stroke border-t-0 p-3 text-left relative">
                                <div className="w-6 h-6 bg-primary text-white flex items-center justify-center font-extrabold text-sm mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    ✓
                                </div>
                                <p className="para-16 text-stroke font-normal normal-case leading-relaxed">
                                    A clear view of your market, audience, and opportunity.
                                </p>
                            </div>
                        </div>

                        {/* Frameworks Hover Card */}
                        <div
                            className={`transition-all duration-200 ${hoveredTab === 'frameworks'
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="h-full bg-white border-2 border-stroke border-t-0 p-3 text-left relative">
                                <div className="w-6 h-6 bg-secondary text-white flex items-center justify-center font-extrabold text-sm mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    ✓
                                </div>
                                <p className="para-16 text-stroke font-normal normal-case leading-relaxed">
                                    Data and research behind every strategic decision.
                                </p>
                            </div>
                        </div>

                        {/* Guesswork Hover Card */}
                        <div
                            className={`transition-all duration-200 ${hoveredTab === 'guesswork'
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="h-full bg-[#E0E7FF] border-2 border-dashed border-red-500 p-3 text-left relative overflow-hidden">
                                <div className="w-6 h-6 bg-red-600 text-white flex items-center justify-center font-extrabold text-sm mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-4deg]">
                                    ✕
                                </div>
                                <p className="para-16 text-gray-400 font-normal normal-case leading-relaxed line-through">
                                    No decisions based on assumptions or trends.
                                </p>
                                <div className="absolute inset-x-0 top-8 pt-1 border-t-2 border-red-500 flex items-center justify-center rotate-[-4deg]">
                                    <span className="para-16 text-red-500 font-extrabold tracking-widest uppercase">
                                        ELIMINATED
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* TAB STRIP: GROUNDWORK | FRAMEWORKS | GUESSWORK */}
                    <div className="border-2 border-stroke bg-white grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-stroke comic-shadow">

                        {/* Tab 1: GROUNDWORK */}
                        <div
                            className={`p-6 flex items-center justify-center gap-3 text-primary text-2xl font-bold font-heading uppercase cursor-pointer transition-colors ${hoveredTab === 'groundwork' ? 'bg-purple-50' : ''
                                }`}
                            onMouseEnter={() => setHoveredTab('groundwork')}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <GroundworkIcon />
                            <span>GROUNDWORK</span>
                        </div>

                        {/* Tab 2: FRAMEWORKS */}
                        <div
                            className={`p-6 flex items-center justify-center gap-3 text-primary text-2xl font-bold font-heading uppercase cursor-pointer transition-colors ${hoveredTab === 'frameworks' ? 'bg-cyan-50' : ''
                                }`}
                            onMouseEnter={() => setHoveredTab('frameworks')}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <FrameworksIcon />
                            <span>FRAMEWORKS</span>
                        </div>

                        {/* Tab 3: GUESSWORK */}
                        <div
                            className={`p-6 flex items-center justify-center gap-3 text-primary text-2xl font-bold font-heading uppercase cursor-pointer transition-colors ${hoveredTab === 'guesswork' ? 'bg-red-50' : 'bg-[#D0DBED]/30'
                                }`}
                            onMouseEnter={() => setHoveredTab('guesswork')}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <GuessworkIcon />
                            <span className="line-through decoration-[#6B7280] decoration-2 text-[#6B7280]">GUESSWORK</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

{/* Groundwork Exact SVG Icon */ }
function GroundworkIcon() {
    return (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M5 22.485C4.0625 22.485 3.13542 22.2558 2.21875 21.7975C1.30208 21.3392 0.5625 20.735 0 19.985C0.541667 19.985 1.09375 19.7715 1.65625 19.3444C2.21875 18.9173 2.5 18.2975 2.5 17.485C2.5 16.4433 2.86458 15.5579 3.59375 14.8287C4.32292 14.0996 5.20833 13.735 6.25 13.735C7.29167 13.735 8.17708 14.0996 8.90625 14.8287C9.63542 15.5579 10 16.4433 10 17.485C10 18.86 9.51042 20.0371 8.53125 21.0163C7.55208 21.9954 6.375 22.485 5 22.485ZM5 19.985C5.6875 19.985 6.27604 19.7402 6.76562 19.2506C7.25521 18.761 7.5 18.1725 7.5 17.485C7.5 17.1308 7.38021 16.834 7.14062 16.5944C6.90104 16.3548 6.60417 16.235 6.25 16.235C5.89583 16.235 5.59896 16.3548 5.35938 16.5944C5.11979 16.834 5 17.1308 5 17.485C5 17.9642 4.94271 18.4017 4.82812 18.7975C4.71354 19.1933 4.5625 19.5683 4.375 19.9225C4.47917 19.9642 4.58333 19.985 4.6875 19.985C4.79167 19.985 4.89583 19.985 5 19.985ZM12.1875 14.985L8.75 11.5475L19.9375 0.36C20.1667 0.130833 20.4531 0.0110417 20.7969 0.000625C21.1406 -0.00979167 21.4375 0.11 21.6875 0.36L23.375 2.0475C23.625 2.2975 23.75 2.58917 23.75 2.9225C23.75 3.25583 23.625 3.5475 23.375 3.7975L12.1875 14.985Z" fill="#DC2626" />
        </svg>
    );
}

{/* Frameworks Exact SVG Icon */ }
function FrameworksIcon() {
    return (
        <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M0.3125 22.5L0 19.75L3.5625 9.9375C3.875 10.2292 4.21354 10.474 4.57812 10.6719C4.94271 10.8698 5.33333 11.0208 5.75 11.125L2.3125 20.5625L0.3125 22.5ZM13.4375 22.5L11.4375 20.5625L8 11.125C8.41667 11.0208 8.80729 10.8698 9.17188 10.6719C9.53646 10.474 9.875 10.2292 10.1875 9.9375L13.75 19.75L13.4375 22.5ZM6.875 10C5.83333 10 4.94792 9.63542 4.21875 8.90625C3.48958 8.17708 3.125 7.29167 3.125 6.25C3.125 5.4375 3.35938 4.71354 3.82812 4.07812C4.29688 3.44271 4.89583 3 5.625 2.75V0H8.125V2.75C8.85417 3 9.45312 3.44271 9.92188 4.07812C10.3906 4.71354 10.625 5.4375 10.625 6.25C10.625 7.29167 10.2604 8.17708 9.53125 8.90625C8.80208 9.63542 7.91667 10 6.875 10ZM6.875 7.5C7.22917 7.5 7.52604 7.38021 7.76562 7.14062C8.00521 6.90104 8.125 6.60417 8.125 6.25C8.125 5.89583 8.00521 5.59896 7.76562 5.35938C7.52604 5.11979 7.22917 5 6.875 5C6.52083 5 6.22396 5.11979 5.98438 5.35938C5.74479 5.59896 5.625 5.89583 5.625 6.25C5.625 6.60417 5.74479 6.90104 5.98438 7.14062C6.22396 7.38021 6.52083 7.5 6.875 7.5Z" fill="#DC2626" />
        </svg>
    );
}

{/* Guesswork Exact SVG Icon */ }
function GuessworkIcon() {
    return (
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M5.625 18.75C6.14583 18.75 6.58854 18.5677 6.95312 18.2031C7.31771 17.8385 7.5 17.3958 7.5 16.875C7.5 16.3542 7.31771 15.9115 6.95312 15.5469C6.58854 15.1823 6.14583 15 5.625 15C5.10417 15 4.66146 15.1823 4.29688 15.5469C3.93229 15.9115 3.75 16.3542 3.75 16.875C3.75 17.3958 3.93229 17.8385 4.29688 18.2031C4.66146 18.5677 5.10417 18.75 5.625 18.75ZM5.625 7.5C6.14583 7.5 6.58854 7.31771 6.95312 6.95312C7.31771 6.58854 7.5 6.14583 7.5 5.625C7.5 5.10417 7.31771 4.66146 6.95312 4.29688C6.58854 3.93229 6.14583 3.75 5.625 3.75C5.10417 3.75 4.66146 3.93229 4.29688 4.29688C3.93229 4.66146 3.75 5.10417 3.75 5.625C3.75 6.14583 3.93229 6.58854 4.29688 6.95312C4.66146 7.31771 5.10417 7.5 5.625 7.5ZM11.25 13.125C11.7708 13.125 12.2135 12.9427 12.5781 12.5781C12.9427 12.2135 13.125 11.7708 13.125 11.25C13.125 10.7292 12.9427 10.2865 12.5781 9.92188C12.2135 9.55729 11.7708 9.375 11.25 9.375C10.7292 9.375 10.2865 9.55729 9.92188 9.92188C9.55729 10.2865 9.375 10.7292 9.375 11.25C9.375 11.7708 9.55729 12.2135 9.92188 12.5781C10.2865 12.9427 10.7292 13.125 11.25 13.125ZM16.875 18.75C17.3958 18.75 17.8385 18.5677 18.2031 18.2031C18.5677 17.8385 18.75 17.3958 18.75 16.875C18.75 16.3542 18.5677 15.9115 18.2031 15.5469C17.8385 15.1823 17.3958 15 16.875 15C16.3542 15 15.9115 15.1823 15.5469 15.5469C15.1823 15.9115 15 16.3542 15 16.875C15 17.3958 15.1823 17.8385 15.5469 18.2031C15.9115 18.5677 16.3542 18.75 16.875 18.75ZM16.875 7.5C17.3958 7.5 17.8385 7.31771 18.2031 6.95312C18.5677 6.58854 18.75 6.14583 18.75 5.625C18.75 5.10417 18.5677 4.66146 18.2031 4.29688C17.8385 3.93229 17.3958 3.75 16.875 3.75C16.3542 3.75 15.9115 3.93229 15.5469 4.29688C15.1823 4.66146 15 5.10417 15 5.625C15 6.14583 15.1823 6.58854 15.5469 6.95312C15.9115 7.31771 16.3542 7.5 16.875 7.5ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H20C20.6875 0 21.276 0.244792 21.7656 0.734375C22.2552 1.22396 22.5 1.8125 22.5 2.5V20C22.5 20.6875 22.2552 21.276 21.7656 21.7656C21.276 22.2552 20.6875 22.5 20 22.5H2.5ZM2.5 20H20V2.5H2.5V20ZM2.5 2.5V20V2.5Z" fill="#DC2626" />
        </svg>
    );
}
