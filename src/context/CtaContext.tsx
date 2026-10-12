'use client';

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { defaultCtaDataByPath, defaultCtaData, CtaBannerData } from '@/data/ctaData';

interface CtaContextValue {
  cta: CtaBannerData;
  setCta: (cta: Partial<CtaBannerData>) => void;
  resetCta: () => void;
}

const CtaContext = createContext<CtaContextValue | undefined>(undefined);

export function CtaProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [overrideCta, setOverrideCta] = useState<Partial<CtaBannerData> | null>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOverrideCta(null);
  }

  const matchedCta = useMemo(() => {
    if (!pathname) return defaultCtaData;
    if (defaultCtaDataByPath[pathname]) return defaultCtaDataByPath[pathname];
    // Dynamic service route matching
    if (pathname.startsWith('/services/')) {
      return {
        showCta: true,
        heading: "Ready To Scale With Us?",
        description: "Schedule a discovery call with Mablab marketing scientists and initiate your formula today.",
        buttonText: "Let's Talk",
        buttonHref: "/contact",
      };
    }
    return defaultCtaData;
  }, [pathname]);

  const currentCta = useMemo(() => {
    return {
      ...matchedCta,
      ...(overrideCta || {}),
    };
  }, [matchedCta, overrideCta]);

  const setCta = React.useCallback((newData: Partial<CtaBannerData>) => {
    setOverrideCta((prev) => {
      if (
        prev &&
        prev.showCta === newData.showCta &&
        prev.heading === newData.heading &&
        prev.description === newData.description &&
        prev.buttonText === newData.buttonText &&
        prev.buttonHref === newData.buttonHref
      ) {
        return prev;
      }
      return { ...(prev || {}), ...newData };
    });
  }, []);

  const resetCta = React.useCallback(() => {
    setOverrideCta(null);
  }, []);

  const value = useMemo(
    () => ({
      cta: currentCta,
      setCta,
      resetCta,
    }),
    [currentCta, setCta, resetCta]
  );

  return <CtaContext.Provider value={value}>{children}</CtaContext.Provider>;
}

export function useCta() {
  const context = useContext(CtaContext);
  return context;
}

export function PageCta({ showCta, heading, description, buttonText, buttonHref }: Partial<CtaBannerData>) {
  const ctx = useCta();
  const setCta = ctx?.setCta;
  const resetCta = ctx?.resetCta;

  useEffect(() => {
    if (!setCta) return;
    setCta({ showCta, heading, description, buttonText, buttonHref });
    return () => {
      resetCta?.();
    };
  }, [showCta, heading, description, buttonText, buttonHref, setCta, resetCta]);

  return null;
}
