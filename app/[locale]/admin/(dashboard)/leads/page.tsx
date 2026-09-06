'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, FileText, Calendar, CheckCircle2, XCircle, Clock, Landmark } from 'lucide-react';
import { getLeadsAction, updateLeadStatus } from '@/lib/actions';

export default function LeadsPage() {
  const [filter, setFilter] = useState('all');
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getLeadsAction();
      setLeads(data);
      setLoading(false);
    }
    load();
    
    // Auto-refresh every 10 seconds for real-time feel
    const interval = setInterval(load, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = async (id: number, type: string, newStatus: string) => {
    // Optimistic update
    setLeads(leads.map(l => (l.realId === id && l.type === type) ? { ...l, status: newStatus } : l));
    await updateLeadStatus(id, type, newStatus);
  };

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            Leads & Quotes CRM
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Real-time Sync Active"></span>
          </h1>
          <p className="text-slate-500 mt-1">Manage incoming requests from the website forms in real-time.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === 'all' ? 'bg-slate-800 text-white' : 'bg-white border text-slate-600 hover:bg-slate-50'}`}>All</button>
          <button onClick={() => setFilter('pending')} className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === 'pending' ? 'bg-orange-500 text-white' : 'bg-white border text-slate-600 hover:bg-slate-50'}`}>Pending</button>
          <button onClick={() => setFilter('contacted')} className={`px-4 py-2 rounded-lg text-sm font-medium ${filter === 'contacted' ? 'bg-blue-500 text-white' : 'bg-white border text-slate-600 hover:bg-slate-50'}`}>Contacted</button>
        </div>
      </div>

      <div className="grid gap-4">
        {loading ? (
          <div className="text-center py-12"><div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto"></div></div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 bg-white border rounded-xl">
            <p className="text-slate-500">No leads found for this filter.</p>
          </div>
        ) : filtered.map(lead => (
          <div key={lead.id} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 md:items-center">
            
            {/* Status & ID */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-lg bg-slate-50 border">
              <span className="text-xs font-bold text-slate-400">{lead.id}</span>
              {lead.status === 'pending' && <Clock className="w-6 h-6 text-orange-500 mt-2" />}
              {lead.status === 'contacted' && <Mail className="w-6 h-6 text-blue-500 mt-2" />}
              {lead.status === 'closed' && <CheckCircle2 className="w-6 h-6 text-green-500 mt-2" />}
            </div>

            {/* Info */}
            <div className="flex-1 grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{lead.name}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <Mail className="w-3.5 h-3.5" /> {lead.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <Phone className="w-3.5 h-3.5" /> {lead.phone}
                </div>
              </div>

              {lead.type === 'quote' ? (
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <span className="bg-brand-red/10 text-brand-red px-2 py-0.5 rounded text-xs">Quote Request</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                    <FileText className="w-3.5 h-3.5" /> {lead.document}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <Landmark className="w-3.5 h-3.5" /> {lead.embassy}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">General Contact</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center gap-2">
                <div className="flex gap-2">
                  <select 
                    value={lead.status}
                    onChange={(e) => handleStatusChange(lead.realId, lead.type, e.target.value)}
                    className="text-xs border rounded p-1 outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <div className="mt-1 flex gap-2">
                  <a href={`mailto:${lead.email}`} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded text-xs font-semibold hover:bg-blue-100 transition-colors">Email</a>
                  <a href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="px-3 py-1.5 bg-green-50 text-green-600 rounded text-xs font-semibold hover:bg-green-100 transition-colors">WhatsApp</a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
