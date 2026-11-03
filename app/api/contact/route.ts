import { NextResponse } from 'next/server';
import { insertRecord } from '@/lib/supabase';
import { sendLeadEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const phone = String(form.get('phone') || '');
    const message = String(form.get('message') || '');

    let supabaseResult = null;
    try {
      supabaseResult = await insertRecord('contact_messages', {
        name,
        email,
        phone,
        message
      });
    } catch (supabaseError) {
      console.warn('Optional Supabase insertion failed/skipped:', supabaseError);
    }

    let emailed = false;
    try {
      await sendLeadEmail({
        subject: `رسالة تواصل جديدة من الموقع - ${name || phone || email}`,
        replyTo: email,
        fields: { 'الاسم': name, 'البريد': email, 'الهاتف': phone, 'الرسالة': message }
      });
      emailed = true;
    } catch (mailError) {
      console.error('Contact lead email failed:', mailError);
    }

    const saved = Boolean(supabaseResult && !('dryRun' in supabaseResult));
    if (!emailed && !saved) {
      return NextResponse.json({ ok: false, error: 'Lead was not delivered' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, emailed, saved });
  } catch (error: any) {
    console.error('Error saving contact lead:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
