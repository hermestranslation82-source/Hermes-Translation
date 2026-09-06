'use client';
import { Database, Download, RotateCcw, Clock } from 'lucide-react';
export default function BackupsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">Database Backups</h1>
        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium flex items-center gap-2"><Database className="w-4 h-4"/> Create Backup Now</button>
      </div>
      <div className="bg-white rounded-xl border shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Backup Date</th>
              <th className="p-4 font-semibold text-slate-700">Type</th>
              <th className="p-4 font-semibold text-slate-700">Size</th>
              <th className="p-4 font-semibold text-slate-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[1,2,3,4].map(i => (
              <tr key={i}>
                <td className="p-4 text-slate-800 flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400"/> 2026-07-{15-i} 03:00 AM</td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Automated</span></td>
                <td className="p-4 text-slate-600">{(Math.random() * 10 + 15).toFixed(2)} MB</td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded text-xs font-semibold hover:bg-slate-200 flex items-center gap-1"><Download className="w-3 h-3"/> Download</button>
                  <button className="px-3 py-1.5 bg-red-50 text-red-600 rounded text-xs font-semibold hover:bg-red-100 flex items-center gap-1"><RotateCcw className="w-3 h-3"/> Restore</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
