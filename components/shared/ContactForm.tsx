'use client';

import { useState } from 'react';
import type { Locale } from '@/data/site';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function ContactForm({ locale }: { locale: Locale }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error();

      toast.success(
        locale === 'ar' 
          ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً. 🎉' 
          : 'Your message has been sent successfully! We will contact you soon. 🎉'
      );
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(
        locale === 'ar' 
          ? 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى. ❌' 
          : 'An error occurred while sending the message. Please try again. ❌'
      );
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <motion.form 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit} 
      className="card grid gap-4 p-6 shadow-xl hover:shadow-2xl duration-300 overflow-hidden"
    >
      <motion.input 
        variants={itemVariants} 
        name="name" 
        required 
        placeholder={locale === 'ar' ? 'الاسم بالكامل 👤' : 'Full Name 👤'} 
        className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" 
        disabled={loading} 
      />
      <motion.input 
        variants={itemVariants} 
        name="email" 
        type="email" 
        required 
        placeholder={locale === 'ar' ? 'البريد الإلكتروني 📧' : 'Email Address 📧'} 
        className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" 
        disabled={loading} 
      />
      <motion.input 
        variants={itemVariants} 
        name="phone" 
        placeholder={locale === 'ar' ? 'رقم الهاتف (اختياري) 📱' : 'Phone Number (Optional) 📱'} 
        className="rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" 
        disabled={loading} 
      />
      <motion.textarea 
        variants={itemVariants} 
        name="message" 
        required 
        placeholder={locale === 'ar' ? 'كيف يمكننا مساعدتك؟ اكتب رسالتك هنا... 💬' : 'How can we help you? Write your message here... 💬'} 
        className="min-h-36 rounded-md border px-4 py-3 focus:ring-2 focus:ring-brand-red/20 outline-none duration-150" 
        disabled={loading} 
      />
      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit" 
        className="rounded-md bg-brand-red px-6 py-4 font-bold text-white hover:bg-brand-red-dark disabled:opacity-50 shadow-md hover:shadow-lg transition-colors duration-200"
        disabled={loading}
      >
        {loading 
          ? (locale === 'ar' ? '⏳ جاري إرسال رسالتك...' : '⏳ Sending message...') 
          : (locale === 'ar' ? 'إرسال الرسالة 🚀' : 'Send Message 🚀')}
      </motion.button>
    </motion.form>
  );
}
