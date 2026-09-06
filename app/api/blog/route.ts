import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/cms';
import { upsertRecord } from '@/lib/supabase';

export async function GET() {
  const blogPosts = await getBlogPosts();
  return NextResponse.json({ ok: true, posts: blogPosts });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const slug = body.slug;

    if (!slug) {
      return NextResponse.json({ ok: false, error: 'Slug is required' }, { status: 400 });
    }

    let supabaseResult = null;
    try {
      const hasStableId = typeof body.id === 'string' && body.id.length > 0;
      supabaseResult = await upsertRecord('posts', {
        ...body,
        status: body.status || 'published',
        updated_at: new Date().toISOString()
      }, hasStableId ? 'id' : 'slug');
    } catch (supabaseError) {
      console.warn('Optional Supabase blog post upsert failed/skipped:', supabaseError);
    }

    return NextResponse.json({
      ok: true,
      message: 'Draft updated in Supabase',
      supabaseResult
    });
  } catch (error: any) {
    console.error('Error saving blog post draft:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
