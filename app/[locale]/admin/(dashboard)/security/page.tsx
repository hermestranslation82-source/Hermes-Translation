'use client';
import { ShieldCheck, AlertTriangle, Activity, Lock } from 'lucide-react';
export default function SecurityPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-bold text-slate-900">Security & Logs</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center"><ShieldCheck /></div>
          <div><p className="text-sm text-slate-500">System Status</p><p className="text-xl font-bold text-slate-800">Secure</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center"><AlertTriangle /></div>
          <div><p className="text-sm text-slate-500">Failed Logins</p><p className="text-xl font-bold text-slate-800">2 Attempts</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Lock /></div>
          <div><p className="text-sm text-slate-500">Active Sessions</p><p className="text-xl font-bold text-slate-800">1 (You)</p></div>
        </div>
      </div>
      <div className="bg-white rounded-xl border shadow-sm">
        <div className="p-4 border-b"><h2 className="font-bold text-slate-800">Recent Activity Logs</h2></div>
        <div className="p-4 space-y-4">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="flex justify-between items-center py-2 border-b last:border-0">
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-700">Admin signed in successfully from IP 192.168.1.{10+i}</span>
              </div>
              <span className="text-xs text-slate-500">{i * 2} mins ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
