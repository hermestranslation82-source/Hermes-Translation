import { NextResponse } from 'next/server';
import { insertRecord } from '@/lib/supabase';
import { sendLeadEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const fullName = String(form.get('full_name') || '');
    const email = String(form.get('email') || '');
    const phone = String(form.get('phone') || '');
    const documentType = String(form.get('document_type') || '');
    const sourceLanguage = String(form.get('source_language') || '');
    const targetLanguage = String(form.get('target_language') || '');
    const embassy = String(form.get('embassy') || '');
    const urgency = String(form.get('urgency') || '');
    const notes = String(form.get('notes') || '');
    const document = form.get('document');

    let supabaseResult = null;
    try {
      supabaseResult = await insertRecord('quote_requests', {
        full_name: fullName,
        email,
        phone,
        document_type: documentType,
        source_language: sourceLanguage,
        target_language: targetLanguage,
        embassy,
        urgency,
        notes
      });
    } catch (supabaseError) {
      console.warn('Optional Supabase insertion failed/skipped:', supabaseError);
    }

    let emailed = false;
    try {
      const attachments = document instanceof File && document.size > 0
        ? [{ filename: document.name, content: Buffer.from(await document.arrayBuffer()), contentType: document.type || undefined }]
        : [];
      await sendLeadEmail({
        subject: `طلب عرض سعر جديد - ${fullName || phone || email}`,
        replyTo: email,
        fields: {
          'الاسم': fullName,
          'البريد': email,
          'الهاتف / واتساب': phone,
          'نوع المستند': documentType,
          'لغة المصدر': sourceLanguage,
          'لغة الهدف': targetLanguage,
          'السفارة / الجهة': embassy,
          'السرعة': urgency,
          'ملاحظات': notes
        },
        attachments
      });
      emailed = true;
    } catch (mailError) {
      console.error('Quote lead email failed:', mailError);
    }

    const saved = Boolean(supabaseResult && !('dryRun' in supabaseResult));
    if (!emailed && !saved) {
      return NextResponse.json({ ok: false, error: 'Lead was not delivered' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, emailed, saved, whatsapp: 'https://wa.me/201501591531' });
  } catch (error: any) {
    console.error('Error saving quote lead:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
