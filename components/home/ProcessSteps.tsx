'use client';

import { processSteps, type Locale } from '@/data/site';
import { SectionTitle } from './ServicesGrid';
import { motion } from 'framer-motion';

export function ProcessSteps({ locale, stepsList }: { locale: Locale; stepsList?: any[] }) {
  const listToRender = stepsList || processSteps;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="section-pad bg-[#FAF8F8] overflow-hidden">
      <div className="container-padded">
        <SectionTitle locale={locale} title={{ ar: '⚙️ كيف نعمل؟', en: '⚙️ How It Works' }} />
        <motion.div 
          className="grid gap-5 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {listToRender.map((step, index) => (
            <motion.div 
              key={step.title.en || index} 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="card p-6 border-t-2 border-t-brand-gold hover:shadow-md duration-200"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-brand-gold text-xl font-black text-brand-red-dark shadow-sm">
                {index + 1}
              </span>
              <h3 className="text-lg font-black text-zinc-900">{step.title[locale]}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{step.text[locale]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
