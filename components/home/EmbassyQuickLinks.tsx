'use client';

import Link from 'next/link';
import { embassies, flagEmojiMap, type Locale } from '@/data/site';
import { SectionTitle } from './ServicesGrid';
import { motion } from 'framer-motion';

export function EmbassyQuickLinks({ locale, embassiesList }: { locale: Locale; embassiesList?: any[] }) {
  const listToRender = embassiesList || embassies;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 14 }
    }
  };

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: '🏛️ أي سفارة تتقدم إليها؟', en: '🏛️ Which Embassy Are You Applying To?' }} />
        <motion.div 
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {listToRender.map((embassy) => (
            <motion.div
              key={embassy.slug}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex"
            >
              <Link 
                href={`/${locale}/embassies/${embassy.slug}`} 
                className="card group p-5 text-center hover:shadow-lg hover:border-brand-red duration-300 w-full flex flex-col items-center justify-between"
              >
                <div>
                  <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand-red/5 text-3xl group-hover:bg-brand-red/10 duration-300 shadow-inner">
                    {flagEmojiMap[embassy.flag] || embassy.flag}
                  </span>
                  <h3 className="font-black text-zinc-900 group-hover:text-brand-red duration-200">{embassy.title[locale]}</h3>
                </div>
                <span className="mt-3 text-xs font-bold text-zinc-400 group-hover:text-brand-red duration-200">
                  {locale === 'ar' ? 'عرض المتطلبات 📋' : 'View Requirements 📋'}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
