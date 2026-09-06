import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export const supabaseAdmin = supabaseUrl && serviceRoleKey ? createClient(supabaseUrl, serviceRoleKey) : null;

export async function insertRecord(table: string, payload: Record<string, unknown>) {
  if (!supabaseAdmin) {
    return { ok: true, dryRun: true, table, payload };
  }

  const { data, error } = await supabaseAdmin.from(table).insert(payload).select().single();
  if (error) throw error;
  return { ok: true, data };
}

export async function upsertRecord(table: string, payload: Record<string, unknown>, onConflict = 'id') {
  if (!supabaseAdmin) {
    return { ok: true, dryRun: true, table, payload };
  }

  const { data, error } = await supabaseAdmin.from(table).upsert(payload, { onConflict }).select().single();
  if (error) throw error;
  return { ok: true, data };
}
