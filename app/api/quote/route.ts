import { NextResponse } from 'next/server';
import { insertRecord } from '@/lib/supabase';

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

    return NextResponse.json({ ok: true, supabaseResult, whatsapp: 'https://wa.me/201501591531' });
  } catch (error: any) {
    console.error('Error saving quote lead:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
