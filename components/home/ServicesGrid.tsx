'use client';

import Link from 'next/link';
import { iconMap, services, type Locale } from '@/data/site';
import { motion } from 'framer-motion';

export function ServicesGrid({ locale, servicesList }: { locale: Locale; servicesList?: any[] }) {
  const listToRender = servicesList || services;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 100, damping: 16 } 
    }
  };

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: '🎯 خدماتنا المميزة', en: '🎯 Our Premium Services' }} />
        <motion.div 
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {listToRender.map((service) => {
            const Icon = service.icon ? (iconMap[service.icon as keyof typeof iconMap] || iconMap.FileText) : iconMap.FileText;
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex"
              >
                <Link 
                  href={`/${locale}/services/${service.slug}`} 
                  className="card group border-t-4 border-t-brand-red p-6 hover:shadow-xl duration-300 w-full flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-5 inline-flex rounded-lg bg-brand-red/5 p-3 text-brand-red group-hover:bg-brand-red group-hover:text-white duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-black text-zinc-900 group-hover:text-brand-red duration-200">{service.title[locale]}</h3>
                    <p className="mt-3 leading-7 text-zinc-600 text-sm">{service.excerpt[locale]}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 font-bold text-brand-red group-hover:text-brand-red-dark text-sm">
                    {locale === 'ar' ? 'تفاصيل الخدمة 🔍' : 'Service details 🔍'} 
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function SectionTitle({ locale, title, eyebrow }: { locale: Locale; title: { ar: string; en: string }; eyebrow?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-widest text-brand-gold">{eyebrow}</p>}
      <h2 className="font-cairo text-3xl font-black text-zinc-950 md:text-5xl">{title[locale]}</h2>
      <div className="mt-4 h-1 w-24 rounded bg-brand-red" />
    </div>
  );
}
