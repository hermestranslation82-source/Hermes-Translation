import { ServicesGrid } from '@/components/home/ServicesGrid';
import type { Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getServices } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ locale, path: '/services', title: locale === 'ar' ? 'خدمات الترجمة المعتمدة' : 'Certified Translation Services', description: 'All certified translation services by Hermes.' });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const servicesList = await getServices();
  return <ServicesGrid locale={locale} servicesList={servicesList} />;
}
