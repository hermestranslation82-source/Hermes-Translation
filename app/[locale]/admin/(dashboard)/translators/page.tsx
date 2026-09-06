'use client';
import { Zap, Users, CheckCircle2, Star } from 'lucide-react';
export default function TranslatorsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Translators Hub</h1>
          <p className="text-slate-500 mt-1">Assign tasks and monitor freelance/in-house translators.</p>
        </div>
        <button className="px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-medium flex items-center gap-2"><Users className="w-4 h-4"/> Add Translator</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {n: 'Dr. Sarah Ahmed', lang: 'English ↔ Arabic', r: '4.9', t: 1450, s: 'Available'},
          {n: 'John Doe', lang: 'German ↔ English', r: '4.8', t: 890, s: 'Busy'},
          {n: 'Mona Youssef', lang: 'French ↔ Arabic', r: '5.0', t: 2100, s: 'Available'},
        ].map((t, i) => (
          <div key={i} className="bg-white rounded-xl border shadow-sm p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400">{t.n[0]}</div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${t.s === 'Available' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{t.s}</span>
            </div>
            <h3 className="font-bold text-lg text-slate-800">{t.n}</h3>
            <p className="text-sm text-brand-red font-medium mt-1">{t.lang}</p>
            <div className="mt-6 pt-6 border-t flex justify-between text-center">
              <div>
                <p className="text-xs text-slate-500">Rating</p>
                <p className="font-bold text-slate-800 flex items-center justify-center gap-1"><Star className="w-3 h-3 text-brand-gold fill-brand-gold"/> {t.r}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Tasks</p>
                <p className="font-bold text-slate-800">{t.t}</p>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-lg text-sm transition-colors border">Assign Task</button>
          </div>
        ))}
      </div>
    </div>
  );
}
