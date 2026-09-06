'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, FileText, Briefcase, Landmark, BookOpen, Settings, LogOut, FileCheck, 
  Users, Image as ImageIcon, BarChart3, Search, Mail, ShieldAlert, Zap, Globe, MessageSquare, Database
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || 'en';
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('hermes_admin_auth');
    if (!auth) {
      router.push(`/${locale}/admin/login`);
    } else {
      setAuthorized(true);
    }
  }, [router, locale]);

  const handleLogout = () => {
    localStorage.removeItem('hermes_admin_auth');
    router.push(`/${locale}/admin/login`);
  };

  const menuItems = [
    { name: 'Dashboard Overview', icon: LayoutDashboard, href: `/${locale}/admin` },
    { name: 'Leads & Quotes', icon: Users, href: `/${locale}/admin/leads` },
    { name: 'Articles (Blog)', icon: FileText, href: `/${locale}/admin/posts` },
    { name: 'Services', icon: Briefcase, href: `/${locale}/admin/services` },
    { name: 'Embassies Local SEO', icon: Landmark, href: `/${locale}/admin/embassies` },
    { name: 'Guides & Rules', icon: BookOpen, href: `/${locale}/admin/guides` },
    { name: 'Gov. Bodies Config', icon: FileCheck, href: `/${locale}/admin/government` },
    { name: 'Media & Files', icon: ImageIcon, href: `/${locale}/admin/media` },
    { name: 'SEO Auto-Auditor', icon: Search, href: `/${locale}/admin/seo` },
    { name: 'Analytics & Traffic', icon: BarChart3, href: `/${locale}/admin/analytics` },
    { name: 'Newsletter Hub', icon: Mail, href: `/${locale}/admin/newsletter` },
    { name: 'Auto-Translators API', icon: Zap, href: `/${locale}/admin/translators` },
    { name: 'Geo-Targeting Map', icon: Globe, href: `/${locale}/admin/geo` },
    { name: 'Customer Chat Logs', icon: MessageSquare, href: `/${locale}/admin/chat` },
    { name: 'Database Backups', icon: Database, href: `/${locale}/admin/backups` },
    { name: 'Security & Logs', icon: ShieldAlert, href: `/${locale}/admin/security` },
    { name: 'System Settings', icon: Settings, href: `/${locale}/admin/settings` },
  ];

  if (!authorized) return <div className="h-screen bg-slate-900 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin"></div></div>;

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white shadow-xl flex flex-col overflow-hidden">
        <div className="p-6 shrink-0 border-b border-slate-800 bg-slate-900 z-10">
          <h2 className="text-2xl font-black text-brand-gold tracking-wider">HERMES</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Enterprise Matrix</p>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-hide">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all group"
            >
              <item.icon className="w-5 h-5 shrink-0 text-slate-500 group-hover:text-brand-gold transition-colors" />
              <span className="font-medium text-sm truncate">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800 shrink-0 bg-slate-900">
          <button onClick={handleLogout} className="flex items-center justify-center gap-2 px-4 py-3 w-full rounded-lg text-slate-400 bg-slate-800 hover:bg-red-500/20 hover:text-red-400 transition-all font-medium text-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm shrink-0">
          <h1 className="text-lg font-bold text-slate-800 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Live
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">Super Admin</p>
              <p className="text-xs text-slate-500">admin@hermes.com</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-gold to-yellow-500 flex items-center justify-center text-white font-bold shadow-md">
              A
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8 relative">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
          <div className="relative z-10 max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
