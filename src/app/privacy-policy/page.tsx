import React from 'react';
import PrivacyPolicySection from '@/components/sections/privacy-policy/PrivacyPolicySection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mablab — Marketing and Branding Lab',
  description:
    'Learn how Mablab handles your information, respects your privacy, and keeps your data secure.',
};

export default function PrivacyPolicyPage() {
  return (
    <PrivacyPolicySection />
  );
}
