'use client';

import { useState } from 'react';
import type { Locale } from '@/data/site';
import { toast } from 'sonner';

export function NewsletterForm({ locale }: { locale: Locale }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error();

      toast.success(
        locale === 'ar' 
          ? 'شكراً لاشتراكك في نشرتنا البريدية!' 
          : 'Thank you for subscribing to our newsletter!'
      );
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(
        locale === 'ar' 
          ? 'حدث خطأ أثناء الاشتراك. يرجى المحاولة مرة أخرى.' 
          : 'An error occurred during subscription. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-md bg-white">
      <input 
        name="email" 
        type="email" 
        required 
        placeholder={locale === 'ar' ? 'البريد الإلكتروني' : 'Email address'} 
        className="min-w-0 flex-1 px-3 py-3 text-sm text-zinc-900 outline-none"
        disabled={loading}
      />
      <button 
        type="submit"
        className="bg-brand-gold px-4 text-sm font-bold text-brand-red-dark hover:bg-white hover:text-brand-red duration-200 disabled:opacity-50"
        disabled={loading}
      >
        {loading 
          ? (locale === 'ar' ? '...' : '...') 
          : (locale === 'ar' ? 'اشترك' : 'Join')}
      </button>
    </form>
  );
}
