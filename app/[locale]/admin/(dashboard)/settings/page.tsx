'use client';
import { Save, User, MapPin } from 'lucide-react';
export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
        <button className="px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-medium flex items-center gap-2"><Save className="w-4 h-4"/> Save All</button>
      </div>
      <div className="bg-white rounded-xl border shadow-sm p-6 space-y-6">
        <h3 className="font-bold text-lg border-b pb-2">Company Info</h3>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm text-slate-500 mb-1">Company Name</label><input type="text" className="w-full border rounded-lg p-2" defaultValue="Hermes Translations" /></div>
          <div><label className="block text-sm text-slate-500 mb-1">Phone Number</label><input type="text" className="w-full border rounded-lg p-2" defaultValue="+20 15 01591531" /></div>
          <div className="col-span-2"><label className="block text-sm text-slate-500 mb-1">Address</label><input type="text" className="w-full border rounded-lg p-2" defaultValue="Cairo, Egypt" /></div>
        </div>
        <h3 className="font-bold text-lg border-b pb-2 mt-8">Integrations API</h3>
        <div className="space-y-4">
          <div><label className="block text-sm text-slate-500 mb-1">Supabase URL</label><input type="password" className="w-full border rounded-lg p-2" defaultValue="****************" /></div>
          <div><label className="block text-sm text-slate-500 mb-1">Google Analytics ID</label><input type="text" className="w-full border rounded-lg p-2" defaultValue="G-XXXXXXXXXX" /></div>
        </div>
      </div>
    </div>
  );
}
