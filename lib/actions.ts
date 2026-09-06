'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function getDashboardStats() {
  if (!supabaseAdmin) return { articles: 0, leads: 0, subscribers: 0, entities: 0 };

  const [
    { count: postsCount }, 
    { count: quotesCount }, 
    { count: contactsCount },
    { count: subCount },
    { count: servCount },
    { count: embCount }
  ] = await Promise.all([
    supabaseAdmin.from('posts').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('quote_requests').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('contact_messages').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('services').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('embassies').select('*', { count: 'exact', head: true })
  ]);

  return {
    articles: postsCount || 0,
    leads: (quotesCount || 0) + (contactsCount || 0),
    subscribers: subCount || 0,
    entities: (servCount || 0) + (embCount || 0)
  };
}

export async function getLeadsAction() {
  if (!supabaseAdmin) return [];

  const { data: quotes } = await supabaseAdmin.from('quote_requests').select('*').order('created_at', { ascending: false });
  const { data: contacts } = await supabaseAdmin.from('contact_messages').select('*').order('created_at', { ascending: false });

  const mappedQuotes = (quotes || []).map((q: any) => ({
    id: `Q-${q.id}`,
    realId: q.id,
    name: q.full_name || 'Unknown',
    email: q.email || '-',
    phone: q.phone || '-',
    type: 'quote',
    document: q.document_type || '-',
    embassy: q.embassy || '-',
    status: q.status || 'pending',
    date: q.created_at ? new Date(q.created_at).toLocaleString() : 'Just now'
  }));

  const mappedContacts = (contacts || []).map((c: any) => ({
    id: `C-${c.id}`,
    realId: c.id,
    name: c.name || 'Unknown',
    email: c.email || '-',
    phone: c.phone || '-',
    type: 'contact',
    document: '-',
    embassy: '-',
    status: c.status || 'pending',
    date: c.created_at ? new Date(c.created_at).toLocaleString() : 'Just now'
  }));

  const allLeads = [...mappedQuotes, ...mappedContacts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return allLeads;
}

export async function updateLeadStatus(id: number, type: string, status: string) {
  if (!supabaseAdmin) return;
  const table = type === 'quote' ? 'quote_requests' : 'contact_messages';
  await supabaseAdmin.from(table).update({ status }).eq('id', id);
  revalidatePath('/[locale]/admin/leads', 'page');
}

export async function getSubscribersAction() {
  if (!supabaseAdmin) return [];
  const { data } = await supabaseAdmin.from('newsletter_subscribers').select('*').order('created_at', { ascending: false });
  return data || [];
}

export async function savePostAction(postData: any) {
  if (!supabaseAdmin) return { ok: false };
  const { error } = await supabaseAdmin.from('posts').upsert({
    ...postData,
    updated_at: new Date().toISOString()
  }, { onConflict: 'slug' });
  
  if (error) throw error;
  
  // Force website cache to update instantly
  revalidatePath('/', 'layout');
  
  return { ok: true };
}

export async function deletePostAction(slug: string) {
  if (!supabaseAdmin) return { ok: false };
  const { error } = await supabaseAdmin.from('posts').delete().eq('slug', slug);
  if (error) throw error;
  
  revalidatePath('/', 'layout');
  return { ok: true };
}

export async function getPostsAction() {
  if (!supabaseAdmin) return [];
  const { data } = await supabaseAdmin.from('posts').select('*').order('created_at', { ascending: false });
  return data || [];
}

// --- Dynamic Collections Actions --- //

export async function getCollectionAction(table: string) {
  if (!supabaseAdmin) return [];
  const { data } = await supabaseAdmin.from(table).select('*').order('created_at', { ascending: false });
  return data || [];
}

export async function saveCollectionItemAction(table: string, payload: any) {
  if (!supabaseAdmin) return { ok: false };
  const { error } = await supabaseAdmin.from(table).upsert({
    ...payload,
    updated_at: new Date().toISOString()
  }, { onConflict: 'slug' });
  
  if (error) throw error;
  revalidatePath('/', 'layout');
  return { ok: true };
}

// --- Analytics Actions --- //

export async function trackPageViewAction(path: string, userAgent: string) {
  if (!supabaseAdmin) return;
  try {
    await supabaseAdmin.from('page_views').insert({ path, user_agent: userAgent });
  } catch (e) {
    console.error('Failed to track view', e);
  }
}

export async function getAnalyticsDataAction() {
  if (!supabaseAdmin) return { totalViews: 0, todayViews: 0, topPages: [] };
  
  try {
    const { count: totalViews } = await supabaseAdmin.from('page_views').select('*', { count: 'exact', head: true });
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const { count: todayViews } = await supabaseAdmin.from('page_views').select('*', { count: 'exact', head: true }).gte('created_at', today.toISOString());

    // Fetch last 2000 views to calculate top pages (in-memory grouping)
    const { data: recentViews } = await supabaseAdmin.from('page_views').select('path').order('created_at', { ascending: false }).limit(2000);
    
    const pageCounts: Record<string, number> = {};
    if (recentViews) {
      recentViews.forEach(v => {
        pageCounts[v.path] = (pageCounts[v.path] || 0) + 1;
      });
    }
    
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([path, views]) => ({ path, views }));

    return { 
      totalViews: totalViews || 0, 
      todayViews: todayViews || 0, 
      topPages 
    };
  } catch (e) {
    console.error(e);
    return { totalViews: 0, todayViews: 0, topPages: [] };
  }
}

export async function deleteCollectionItemAction(table: string, slug: string) {
  if (!supabaseAdmin) return { ok: false };
  const { error } = await supabaseAdmin.from(table).delete().eq('slug', slug);
  if (error) throw error;
  
  revalidatePath('/', 'layout');
  return { ok: true };
}
