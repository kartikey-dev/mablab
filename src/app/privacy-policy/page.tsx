import React from 'react';
import PrivacyPolicySection from '@/components/sections/privacy-policy/PrivacyPolicySection';
import GsapSection from '@/components/ui/GsapSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mablab — Marketing and Branding Lab',
  description:
    'Learn how Mablab handles your information, respects your privacy, and keeps your data secure.',
};

export default function PrivacyPolicyPage() {
  return (
    <GsapSection animation="fadeInUp">
      <PrivacyPolicySection />
    </GsapSection>
  );
}
