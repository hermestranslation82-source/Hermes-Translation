'use client';

import type { Locale } from '@/data/site';
import { motion } from 'framer-motion';

export function SocialProofCounter({ locale }: { locale: Locale }) {
  const stats = [
    { n: '500+', ar: 'عميل سعيد تم خدمته 😊', en: 'Happy Clients Served 😊' },
    { n: '15,000+', ar: 'مستند رسمي مترجم 📄', en: 'Official Documents Translated 📄' },
    { n: '100%', ar: 'معدل قبول لدى السفارات 🏛️', en: 'Embassy Acceptance Rate 🏛️' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="bg-brand-red py-12 text-white overflow-hidden">
      <motion.div 
        className="container-padded grid gap-6 text-center md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div 
            key={stat.en}
            variants={itemVariants}
            className="p-4"
          >
            <div className="text-5xl font-black text-brand-gold">{stat.n}</div>
            <p className="mt-2 font-bold text-lg text-white/90">{locale === 'ar' ? stat.ar : stat.en}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
