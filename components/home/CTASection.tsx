'use client';

import Link from 'next/link';
import type { Locale } from '@/data/site';
import { motion } from 'framer-motion';

export function CTASection({ locale }: { locale: Locale }) {
  return (
    <section className="hero-pattern bg-brand-red-dark py-20 text-white overflow-hidden">
      <motion.div 
        className="container-padded text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring' as const, stiffness: 80 }}
      >
        <h2 className="font-cairo text-3xl font-black md:text-5xl">
          {locale === 'ar' ? '🚀 مستعد تبدأ؟ احصل على عرض سعر مجاني الآن' : '🚀 Ready to Start? Get Your Free Quote Now'}
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link 
            href={`/${locale}/quote`} 
            className="mt-8 inline-flex rounded-md bg-white px-8 py-4 font-black text-brand-red shadow-lg hover:bg-brand-gold hover:text-brand-red-dark duration-200"
          >
            {locale === 'ar' ? 'اطلب عرض سعر مجاني 📄' : 'Get a Free Quote 📄'}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
