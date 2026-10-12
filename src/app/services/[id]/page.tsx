import React from 'react';
import { notFound } from 'next/navigation';
import ServiceDetailHeroSection from '@/components/sections/service-detail/ServiceDetailHeroSection';
import ServiceDetailOverviewSection from '@/components/sections/service-detail/ServiceDetailOverviewSection';
import ServiceDetailFaqSection from '@/components/sections/service-detail/ServiceDetailFaqSection';
import GsapSection from '@/components/ui/GsapSection';
import { servicesDataMap } from '@/data/servicesData';
import { Metadata } from 'next';

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const data = servicesDataMap[id];
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function GenericServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const data = servicesDataMap[id];

  if (!data) {
    notFound();
  }

  return (
    <>
      <GsapSection animation="fadeInUp"><ServiceDetailHeroSection data={data} /></GsapSection>
      <GsapSection animation="fadeInUp"><ServiceDetailOverviewSection data={data} /></GsapSection>
      <GsapSection animation="fadeInUp"><ServiceDetailFaqSection data={data} /></GsapSection>
    </>
  );
}
