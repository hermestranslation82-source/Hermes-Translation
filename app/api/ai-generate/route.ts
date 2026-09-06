import { NextResponse } from 'next/server';
import { generateArticle } from '@/lib/claude';

export async function POST(request: Request) {
  const form = await request.formData();
  const article = await generateArticle({
    topic: String(form.get('topic') || ''),
    keywordAr: String(form.get('keywordAr') || ''),
    keywordEn: String(form.get('keywordEn') || ''),
    languagePair: String(form.get('languagePair') || ''),
    category: String(form.get('category') || '')
  });

  return NextResponse.json({ ok: true, article });
}
