'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconComponent, { ServiceIconName } from '../ui/IconComponent';
import Button from '../ui/Button';
import { services } from '@/data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  // Lock body scrolling & hide scrollbar when Mega Menu or Mobile Menu is open
  useEffect(() => {
    if (isMegaMenuOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMegaMenuOpen, mobileMenuOpen]);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the very top
      if (currentScrollY <= 0) {
        setHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Don't hide while mega menu or mobile menu is open
      if (isMegaMenuOpen || mobileMenuOpen) {
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < lastScrollY.current) {
        // Scrolling UP → show header
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN → hide header
        setHeaderVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMegaMenuOpen, mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background-light border-b-4 border-stroke transition-transform duration-300 ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between relative">

          {/* 3x3 Mablab Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="MABLAB Logo"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
              priority
            />
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-stroke para-16">
            {/* Services Label — hover opens mega menu, no /services listing page */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 transition-colors cursor-default ${isMegaMenuOpen ? 'text-primary' : 'hover:text-primary'
                  }`}
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <Link href="/why-us" className="hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:block">
            <Button href="/contact" variant="secondary" size="md">
              Let&apos;s Talk!
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stroke focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

        {/* FULL BROWSER-WIDTH MEGA MENU (DESKTOP / TABLET) */}
        {isMegaMenuOpen && (
          <div
            className="hidden md:block absolute left-0 right-0 top-full w-full bg-white border-b-4 border-stroke comic-shadow-lg z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 md:px-8 py-8">

              {/* Header inside Mega Menu */}
              <div className="border-b-2 border-gray-100 pb-4 mb-6">
                <span className="para-12 text-primary">EXPERIMENTAL FORMULAS</span>
                <h3 className="heading-h3 text-stroke mt-0.5">OUR 12 SCIENTIFIC SERVICES</h3>
              </div>

              {/* 4 Columns x 3 Rows Grid of Services */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="p-3.5 border-2 border-transparent hover:border-stroke hover:bg-background-light transition-all rounded-none group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-background-light group-hover:bg-white border border-stroke flex items-center justify-center text-danger shrink-0">
                        <IconComponent name={service.icon as ServiceIconName} className="w-5 h-5 text-danger" />
                      </div>
                      <div>
                        <h4 className="para-14 text-stroke group-hover:text-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="para-12 text-gray-500 line-clamp-1 font-normal normal-case mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom Featured Banner in Mega Menu */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between bg-background-light p-4 border-2 border-stroke">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🧪</span>
                  <span className="para-14 text-stroke">
                    Need a custom multi-formula marketing campaign? Talk directly to our lead fellows.
                  </span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setIsMegaMenuOpen(false)}
                  className="para-12 text-primary underline font-bold hover:text-secondary"
                >
                  BOOK DISCOVERY CALL
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background-light border-t-2 border-stroke px-6 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Expandable Services Accordion */}
            <div>
              <div
                className="flex items-center justify-between para-16 text-stroke py-2 cursor-pointer"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span className="hover:text-primary">Services</span>
                <button className="p-1 focus:outline-none" aria-label="Toggle services sub-menu">
                  <svg
                    className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 pt-2 space-y-2.5 border-l-2 border-primary my-2">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 para-14 text-gray-700 hover:text-primary py-1"
                    >
                      <IconComponent name={service.icon as ServiceIconName} className="w-4 h-4 text-danger shrink-0" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block para-16 text-stroke"
            >
              Why Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block para-16 text-stroke"
            >
              Contact
            </Link>
            <Button
              href="/contact"
              variant="secondary"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk!
            </Button>
          </div>
        )}
      </header>

      {/* FULL BROWSER BACKDROP SHIELD (CLICKABLE TO CLOSE) */}
      {isMegaMenuOpen && (
        <div
          className="hidden md:block fixed inset-0 top-[76px] bg-black/40 backdrop-blur-xs z-40 transition-opacity duration-200"
          onClick={() => setIsMegaMenuOpen(false)}
          onMouseEnter={handleMouseLeave}
          aria-hidden="true"
        />
      )}
    </>
  );
}
