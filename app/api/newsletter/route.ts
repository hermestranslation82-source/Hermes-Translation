import { NextResponse } from 'next/server';
import { insertRecord } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const email = String(form.get('email') || '');

    let supabaseResult = null;
    try {
      supabaseResult = await insertRecord('newsletter_subscribers', {
        email
      });
    } catch (supabaseError) {
      console.warn('Optional Supabase insertion failed/skipped:', supabaseError);
    }

    return NextResponse.json({ ok: true, supabaseResult });
  } catch (error: any) {
    console.error('Error saving newsletter lead:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
