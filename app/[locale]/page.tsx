import { BlogPreview } from '@/components/home/BlogPreview';
import { CTASection } from '@/components/home/CTASection';
import { EmbassyQuickLinks } from '@/components/home/EmbassyQuickLinks';
import { HeroSection } from '@/components/home/HeroSection';
import { ProcessSteps } from '@/components/home/ProcessSteps';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { SocialProofCounter } from '@/components/home/SocialProofCounter';
import { Testimonials } from '@/components/home/Testimonials';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import type { Locale } from '@/data/site';
import { createMetadata } from '@/lib/seo';
import { getServices, getEmbassies, getProcessSteps } from '@/lib/cms';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createMetadata({ 
    locale, 
    path: '/', 
    title: locale === 'ar' ? 'هيرميس للترجمة المعتمدة في مصر' : 'Hermes Certified Translations in Egypt',
    description: locale === 'ar' ? 'ترجمة معتمدة للسفارات والجهات الحكومية والتأشيرات والمنح في مصر.' : 'Certified translation for embassies, government bodies, visas, and scholarships in Egypt.'
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const [servicesList, embassiesList, stepsList] = await Promise.all([
    getServices(),
    getEmbassies(),
    getProcessSteps()
  ]);

  return (
    <>
      <HeroSection locale={locale} />
      <SocialProofCounter locale={locale} />
      <ServicesGrid locale={locale} servicesList={servicesList} />
      <WhyChooseUs locale={locale} />
      <EmbassyQuickLinks locale={locale} embassiesList={embassiesList} />
      <ProcessSteps locale={locale} stepsList={stepsList} />
      <Testimonials locale={locale} />
      <BlogPreview locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
