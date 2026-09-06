'use client';

import { useState } from 'react';
import type { Locale } from '@/data/site';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function QuoteForm({ locale }: { locale: Locale }) {
  const [loading, setLoading] = useState(false);

  const t = {
    ar: [
      'الاسم الكامل 👤', // 0
      'البريد الإلكتروني 📧', // 1
      'الهاتف / واتساب 📱', // 2
      'نوع المستند 📄', // 3
      'لغة المصدر 🗣️', // 4
      'لغة الهدف 🎯', // 5
      'السفارة / الجهة 🏛️', // 6
      'السرعة المطلوبة ⚡', // 7
      'أي ملاحظات إضافية أو تفاصيل خاصة... ✍️', // 8
      'إرسال طلب السعر 🚀' // 9
    ],
    en: [
      'Full Name 👤',
      'Email 📧',
      'Phone / WhatsApp 📱',
      'Document Type 📄',
      'Source Language 🗣️',
      'Target Language 🎯',
      'Embassy / Authority 🏛️',
      'Urgency Level ⚡',
      'Any additional notes or special requirements... ✍️',
      'Send Quote Request 🚀'
    ]
  }[locale];

  const documentTypes = locale === 'ar' 
    ? ['شهادة ميلاد 👶', 'عقد زواج 💍', 'شهادة تخرج / أكاديمية 🎓', 'جواز سفر ✈️', 'توكيل رسمي 📝', 'مستند قانوني ⚖️', 'أخرى 📁']
    : ['Birth Certificate 👶', 'Marriage Certificate 💍', 'Diploma / Academic 🎓', 'Passport ✈️', 'Power of Attorney 📝', 'Legal Document ⚖️', 'Other 📁'];

  const languages = locale === 'ar'
    ? ['العربية 🇸🇦', 'الإنجليزية 🇬🇧', 'الفرنسية 🇫🇷', 'الألمانية 🇩🇪', 'الإيطالية 🇮🇹', 'الإسبانية 🇪🇸', 'أخرى 🌐']
    : ['Arabic 🇸🇦', 'English 🇬🇧', 'French 🇫🇷', 'German 🇩🇪', 'Italian 🇮🇹', 'Spanish 🇪🇸', 'Other 🌐'];

  const urgencyOptions = locale === 'ar'
    ? ['عادي (3-5 أيام) 📅', 'عاجل (24-48 ساعة) ⚡', 'في نفس اليوم 🚀']
    : ['Standard (3-5 days) 📅', 'Express (24-48 hours) ⚡', 'Same Day 🚀'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      toast.success(
        locale === 'ar' 
          ? 'تم إرسال طلبك بنجاح! سنتواصل معك عبر واتساب لتأكيد التفاصيل. 🎉' 
          : 'Your request has been sent successfully! We will contact you via WhatsApp to finalize. 🎉'
      );

      (e.target as HTMLFormElement).reset();

      if (data.whatsapp) {
        setTimeout(() => {
          window.open(data.whatsapp, '_blank');
        }, 1500);
      }
    } catch (error) {
      toast.error(
        locale === 'ar' 
          ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى. ❌' 
          : 'An error occurred while sending the request. Please try again. ❌'
      );
    } finally {
      setLoading(false);
    }
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <motion.form 
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit} 
      className="card grid gap-4 p-6 md:grid-cols-2 shadow-xl hover:shadow-2xl duration-300 overflow-hidden"
    >
      <motion.input variants={itemVariants} name="full_name" required placeholder={t[0]} className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading} />
      <motion.input variants={itemVariants} name="email" type="email" required placeholder={t[1]} className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading} />
      <motion.input variants={itemVariants} name="phone" required placeholder={t[2]} className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading} />
      
      <motion.select variants={itemVariants} name="document_type" required className="rounded-md border px-4 py-3 bg-white focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading}>
        <option value="">{t[3]}</option>
        {documentTypes.map((type) => <option key={type} value={type}>{type}</option>)}
      </motion.select>
      
      <motion.select variants={itemVariants} name="source_language" required className="rounded-md border px-4 py-3 bg-white focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading}>
        <option value="">{t[4]}</option>
        {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
      </motion.select>
      
      <motion.select variants={itemVariants} name="target_language" required className="rounded-md border px-4 py-3 bg-white focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading}>
        <option value="">{t[5]}</option>
        {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
      </motion.select>
      
      <motion.input variants={itemVariants} name="embassy" placeholder={t[6]} className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading} />
      
      <motion.select variants={itemVariants} name="urgency" required className="rounded-md border px-4 py-3 bg-white focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading}>
        <option value="">{t[7]}</option>
        {urgencyOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </motion.select>
      
      <motion.div variants={itemVariants} className="md:col-span-2">
        <label className="block mb-2 text-xs font-bold text-zinc-500">
          {locale === 'ar' ? '📎 ارفاق المستند (اختياري)' : '📎 Attach Document (Optional)'}
        </label>
        <input name="document" type="file" className="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150 bg-white" disabled={loading} />
      </motion.div>
      
      <motion.textarea variants={itemVariants} name="notes" placeholder={t[8]} className="min-h-32 rounded-md border px-4 py-3 md:col-span-2 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" disabled={loading} />
      
      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit" 
        className="rounded-md bg-brand-red px-6 py-4 font-bold text-white hover:bg-brand-red-dark md:col-span-2 disabled:opacity-50 shadow-md hover:shadow-lg transition-colors duration-200"
        disabled={loading}
      >
        {loading 
          ? (locale === 'ar' ? '⏳ جاري إرسال طلبك...' : '⏳ Sending your request...') 
          : t[9]}
      </motion.button>
    </motion.form>
  );
}
