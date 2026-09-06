'use client';

import Link from 'next/link';
import { Award, BadgeCheck, ShieldCheck, Timer } from 'lucide-react';
import type { Locale } from '@/data/site';
import { motion } from 'framer-motion';

export function HeroSection({ locale }: { locale: Locale }) {
  const badges = [
    { icon: BadgeCheck, ar: 'مترجم معتمد 🏆', en: 'Certified Translator 🏆' },
    { icon: Award, ar: 'اعتماد من الجهات الحكومية ⚖️', en: 'Government Entities Accredited ⚖️' },
    { icon: Timer, ar: 'تسليم خلال 24 ساعة ⚡', en: '24-Hour Delivery ⚡' },
    { icon: ShieldCheck, ar: 'ضمان قبول 100% 🛡️', en: '100% Acceptance Guarantee 🛡️' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 } 
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, rotate: -1 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const } 
    }
  };

  return (
    <section className="hero-pattern brand-gradient text-white overflow-hidden">
      <div className="container-padded grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            variants={itemVariants}
            className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/90 ring-1 ring-white/20"
          >
            {locale === 'ar' ? '✨ خدمات ترجمة معتمدة في القاهرة والجيزة' : '✨ Certified translation in Cairo & Giza'}
          </motion.p>
          <motion.h1 
            variants={itemVariants}
            className="max-w-4xl font-cairo text-4xl font-black leading-tight md:text-6xl"
          >
            {locale === 'ar'
              ? 'ترجمة معتمدة موثوقة لجميع السفارات والجهات الحكومية في مصر 🇪🇬'
              : 'Certified Translation Services for All Embassies & Government Bodies in Egypt 🇪🇬'}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/82"
          >
            {locale === 'ar'
              ? 'نساعدك في تجهيز مستنداتك الرسمية بدقة وسرية وسرعة، مع ترجمة معتمدة مناسبة لطلبات التأشيرات والمنح والهجرة والجهات الحكومية. 💼'
              : 'We prepare official documents accurately, confidentially, and quickly for visas, scholarships, immigration, embassies, and government authorities. 💼'}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link 
              href={`/${locale}/quote`} 
              className="rounded-md bg-white px-6 py-3 font-extrabold text-brand-red shadow-lg hover:bg-brand-gold duration-200 transform hover:-translate-y-0.5"
            >
              {locale === 'ar' ? 'طلب عرض سعر 📄' : 'Request a Quote 📄'}
            </Link>
            <Link 
              href={`/${locale}/services`} 
              className="rounded-md border border-white/70 px-6 py-3 font-extrabold text-white hover:bg-white/10 duration-200 transform hover:-translate-y-0.5"
            >
              {locale === 'ar' ? 'عرض الخدمات 📂' : 'View Our Services 📂'}
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {badges.map(({ icon: Icon, ar, en }) => (
              <div 
                key={en} 
                className="flex items-center gap-3 rounded-md bg-white/10 px-4 py-3 text-sm font-bold ring-1 ring-white/15 hover:bg-white/15 duration-200"
              >
                <Icon className="text-brand-gold" size={18} />
                {locale === 'ar' ? ar : en}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hidden lg:block"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-lg bg-white/10 p-5 ring-1 ring-white/20 shadow-2xl relative group">
            <div className="absolute inset-0 bg-brand-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="aspect-[4/5] rounded-md bg-[url('https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center shadow-inner transform group-hover:scale-[1.01] transition-transform duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
