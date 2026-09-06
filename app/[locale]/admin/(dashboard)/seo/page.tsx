'use client';
import { Search, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
export default function SEOPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">SEO Auto-Auditor</h1>
        <button className="px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-medium">Run Full Audit Now</button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-green-500 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-slate-800">92%</span>
          </div>
          <h3 className="font-bold text-slate-700">Overall SEO Score</h3>
        </div>
        <div className="col-span-2 bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Audit Results</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> Meta Tags present on 100% of pages.</li>
            <li className="flex items-center gap-3 text-sm text-slate-700"><CheckCircle className="w-5 h-5 text-green-500" /> Schema markup validates successfully.</li>
            <li className="flex items-center gap-3 text-sm text-slate-700"><AlertCircle className="w-5 h-5 text-orange-500" /> 3 Images missing ALT attributes.</li>
            <li className="flex items-center gap-3 text-sm text-slate-700"><AlertCircle className="w-5 h-5 text-orange-500" /> Canonical URLs missing on some service pages.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
