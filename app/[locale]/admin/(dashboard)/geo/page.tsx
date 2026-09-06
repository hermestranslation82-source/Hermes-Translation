'use client';
import { Globe, MapPin, Search } from 'lucide-react';
export default function GeoPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Geo-Targeting Map</h1>
          <p className="text-slate-500 mt-1">Manage Local SEO coordinates for global reach.</p>
        </div>
        <button className="px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-medium">Add Location Target</button>
      </div>
      <div className="bg-white rounded-xl border shadow-sm flex overflow-hidden h-[600px]">
        <div className="w-80 border-r bg-slate-50 flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search region..." className="w-full pl-9 pr-3 py-2 text-sm border rounded-md outline-none focus:ring-1 focus:ring-brand-gold" />
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 space-y-2">
            {['Cairo, EG', 'Dubai, AE', 'Riyadh, SA', 'London, UK'].map((loc, i) => (
              <div key={loc} className={`p-3 rounded-lg cursor-pointer flex items-center gap-3 ${i===0 ? 'bg-white border shadow-sm' : 'hover:bg-slate-100'}`}>
                <MapPin className={`w-5 h-5 ${i===0 ? 'text-brand-red' : 'text-slate-400'}`} />
                <div>
                  <h4 className="font-semibold text-slate-700 text-sm">{loc}</h4>
                  <p className="text-xs text-slate-500">Active targeting</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-blue-50/50 relative flex items-center justify-center">
          <Globe className="w-32 h-32 text-blue-200" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-slate-400 font-medium">Interactive Map Integration Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
