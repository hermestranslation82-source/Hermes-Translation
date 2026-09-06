'use client';
import { useEffect, useState } from 'react';
import { BarChart, Globe, MousePointerClick, Activity, TrendingUp } from 'lucide-react';
import { getAnalyticsDataAction } from '@/lib/actions';

export default function AnalyticsPage() {
  const [data, setData] = useState({ totalViews: 0, todayViews: 0, topPages: [] as any[] });
  const [loading, setLoading] = useState(true);

  const loadAnalytics = async () => {
    const res = await getAnalyticsDataAction();
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    loadAnalytics();
    const interval = setInterval(loadAnalytics, 10000); // Live update every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <BarChart className="w-8 h-8 text-brand-red" />
            Live Traffic Analytics
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" title="Live Polling Active"></span>
          </h1>
          <p className="text-slate-500 mt-1">100% Real-time website visitor data tracked directly into your database.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border p-6 shadow-sm flex items-center gap-4 border-l-4 border-l-blue-500">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Total All-Time Views</p>
            <h3 className="text-3xl font-black text-slate-800">
              {loading ? '...' : data.totalViews.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6 shadow-sm flex items-center gap-4 border-l-4 border-l-green-500">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Views Today</p>
            <h3 className="text-3xl font-black text-slate-800">
              {loading ? '...' : data.todayViews.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6 shadow-sm flex items-center gap-4 border-l-4 border-l-brand-gold">
          <div className="w-12 h-12 bg-yellow-50 text-brand-gold rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Unique Pages Visited</p>
            <h3 className="text-3xl font-black text-slate-800">
              {loading ? '...' : data.topPages.length}
            </h3>
          </div>
        </div>
      </div>

      {/* Top Pages Table */}
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b bg-slate-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <MousePointerClick className="w-5 h-5 text-slate-500" />
            Top Performing Pages (Recent)
          </h2>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-100 border-b">
            <tr>
              <th className="p-4 font-semibold text-slate-700 w-16">Rank</th>
              <th className="p-4 font-semibold text-slate-700">Page URL</th>
              <th className="p-4 font-semibold text-slate-700 text-right">View Count</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan={3} className="p-8 text-center text-slate-500">Loading live data...</td></tr>
            ) : data.topPages.length === 0 ? (
              <tr><td colSpan={3} className="p-8 text-center text-slate-500">No traffic recorded yet. Try visiting a page on the website!</td></tr>
            ) : (
              data.topPages.map((page, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${index === 0 ? 'bg-yellow-100 text-yellow-700' : index === 1 ? 'bg-slate-200 text-slate-700' : index === 2 ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'}`}>
                      #{index + 1}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-sm text-blue-600 break-all">{page.path}</td>
                  <td className="p-4 text-right font-bold text-slate-800">
                    {page.views.toLocaleString()} <span className="text-slate-400 font-normal text-sm ml-1">views</span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
