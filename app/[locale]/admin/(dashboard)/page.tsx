'use client';
import { useState, useEffect } from 'react';
import { Activity, Users, FileText, Globe } from 'lucide-react';
import Link from 'next/link';
import { getDashboardStats } from '@/lib/actions';
import { useParams } from 'next/navigation';

export default function AdminDashboard() {
  const params = useParams();
  const locale = params.locale || 'en';
  const [stats, setStats] = useState<any>({ articles: 0, leads: 0, subscribers: 0, entities: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getDashboardStats();
      setStats(data);
      setLoading(false);
    }
    load();
    const interval = setInterval(load, 15000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { label: 'Published Articles', value: stats.articles, icon: FileText, color: 'bg-blue-500' },
    { label: 'Total Leads (CRM)', value: stats.leads, icon: Users, color: 'bg-green-500' },
    { label: 'Newsletter Subscribers', value: stats.subscribers, icon: Globe, color: 'bg-purple-500' },
    { label: 'Active Services & Embassies', value: stats.entities, icon: Activity, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            Dashboard Overview
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Real-time Sync Active"></span>
          </h1>
          <p className="text-slate-500 mt-1">Welcome back, Admin. Real-time data from Supabase DB.</p>
        </div>
        <Link href={`/${locale}/admin/posts/new`} className="px-5 py-2.5 bg-brand-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
          + Write New Article
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border p-6 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 text-${stat.color.replace('bg-', '')}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800">
                {loading ? <span className="animate-pulse bg-slate-200 h-6 w-12 rounded inline-block"></span> : stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h3 className="text-lg font-bold text-slate-800">Recent Leads</h3>
            <Link href={`/${locale}/admin/leads`} className="text-sm text-brand-red hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            <p className="text-slate-500 text-sm">Real-time sync enabled. Incoming web forms will appear in the Leads CRM automatically.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 border-b pb-4 mb-4">Quick SEO & Geo Actions</h3>
          <div className="space-y-3">
            <Link href={`/${locale}/admin/services`} className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all">
              <div>
                <h4 className="font-semibold text-slate-700">Update Service Metadata</h4>
                <p className="text-sm text-slate-500">Configure canonical URLs and keywords for services.</p>
              </div>
              <span className="text-brand-red font-medium">Manage &rarr;</span>
            </Link>
            <Link href={`/${locale}/admin/embassies`} className="flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all">
              <div>
                <h4 className="font-semibold text-slate-700">Set Embassies Local SEO</h4>
                <p className="text-sm text-slate-500">Inject Geo Lat/Long for map targeting.</p>
              </div>
              <span className="text-brand-red font-medium">Manage &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
