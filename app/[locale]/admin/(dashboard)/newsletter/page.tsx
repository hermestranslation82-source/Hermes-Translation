'use client';
import { useState, useEffect } from 'react';
import { Mail, Send, Edit3 } from 'lucide-react';
import { getSubscribersAction } from '@/lib/actions';

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getSubscribersAction();
      setSubscribers(data);
      setLoading(false);
    }
    load();
    const interval = setInterval(load, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            Newsletter Hub
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Real-time Sync Active"></span>
          </h1>
          <p className="text-slate-500 mt-1">Manage subscribers and broadcast campaigns.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl border shadow-sm p-6">
          <h2 className="font-bold text-slate-800 flex items-center gap-2 mb-6"><Edit3 className="w-5 h-5"/> Compose Broadcast</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subject Line</label>
              <input type="text" className="w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-brand-gold" placeholder="Special Discount on Legal Translation..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">HTML Message</label>
              <textarea rows={10} className="w-full border rounded-lg p-3 outline-none focus:ring-1 focus:ring-brand-gold" placeholder="Write your email body here..."></textarea>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-sm text-slate-500">Sending to: <strong>{subscribers.length} Subscribers</strong></span>
              <button className="px-6 py-2.5 bg-brand-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex items-center gap-2"><Send className="w-4 h-4"/> Send Broadcast</button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border shadow-sm flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-bold text-slate-800">Recent Subscribers</h2>
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">{subscribers.length} Total</span>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-3">
            {loading ? <div className="text-center py-4 text-slate-400">Loading...</div> : subscribers.map(sub => (
              <div key={sub.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400"><Mail className="w-4 h-4"/></div>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-slate-700 truncate">{sub.email}</p>
                  <p className="text-xs text-slate-400">{new Date(sub.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
