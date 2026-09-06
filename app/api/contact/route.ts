import { NextResponse } from 'next/server';
import { insertRecord } from '@/lib/supabase';

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

    return NextResponse.json({ ok: true, supabaseResult });
  } catch (error: any) {
    console.error('Error saving contact lead:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
