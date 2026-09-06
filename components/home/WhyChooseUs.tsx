'use client';

import { BadgeCheck, Banknote, Languages, ShieldCheck, Timer, UserCheck } from 'lucide-react';
import type { Locale } from '@/data/site';
import { SectionTitle } from './ServicesGrid';
import { motion } from 'framer-motion';

export function WhyChooseUs({ locale }: { locale: Locale }) {
  const items = [
    { icon: BadgeCheck, ar: 'معتمدون وموثوقون 🎖️', en: 'Certified & Accredited 🎖️' },
    { icon: Timer, ar: 'تسليم سريع ⚡', en: 'Fast Delivery ⚡' },
    { icon: ShieldCheck, ar: 'قبول لدى السفارات 🏛️', en: 'Accepted by Embassies 🏛️' },
    { icon: Banknote, ar: 'أسعار تنافسية 💰', en: 'Competitive Pricing 💰' },
    { icon: Languages, ar: 'مترجمون متخصصون 🗣️', en: 'Bilingual Native Translators 🗣️' },
    { icon: UserCheck, ar: 'سرية كاملة 🔒', en: 'Confidentiality Guarantee 🔒' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 14 }
    }
  };

  return (
    <section className="section-pad bg-[#FAF8F8] overflow-hidden">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: '🤔 لماذا تختار هيرميس؟', en: '🤔 Why Choose Hermes?' }} />
        <motion.div 
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map(({ icon: Icon, ar, en }) => (
            <motion.div 
              key={en}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: locale === 'ar' ? -4 : 4 }}
              className="card flex items-center gap-4 p-5 hover:shadow-md duration-200 cursor-default"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-red/10 text-brand-red">
                <Icon size={24} />
              </span>
              <h3 className="text-lg font-black text-zinc-800">{locale === 'ar' ? ar : en}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
