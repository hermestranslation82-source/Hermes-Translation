'use client';
import { Image as ImageIcon, UploadCloud, Folder, File, Trash2 } from 'lucide-react';
export default function MediaPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Media & Files</h1>
          <p className="text-slate-500 mt-1">Manage images, PDFs, and translated documents.</p>
        </div>
        <button className="px-4 py-2 bg-brand-red text-white rounded-lg text-sm font-medium flex items-center gap-2"><UploadCloud className="w-4 h-4"/> Upload File</button>
      </div>
      <div className="bg-white rounded-xl border shadow-sm p-6">
        <div className="grid grid-cols-5 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="group relative rounded-xl border overflow-hidden cursor-pointer hover:border-brand-red transition-all">
              <div className="aspect-square bg-slate-100 flex items-center justify-center">
                <Folder className="w-12 h-12 text-slate-300 group-hover:text-brand-red" />
              </div>
              <div className="p-3 bg-white border-t">
                <p className="text-sm font-semibold text-slate-700 truncate">Folder {i}</p>
                <p className="text-xs text-slate-500">{i*12} items</p>
              </div>
            </div>
          ))}
          {[1,2,3,4,5,6,7].map(i => (
            <div key={`file-${i}`} className="group relative rounded-xl border overflow-hidden cursor-pointer hover:border-brand-red transition-all">
              <div className="aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                <ImageIcon className="w-12 h-12 text-slate-300" />
              </div>
              <div className="p-3 bg-white border-t flex justify-between items-center">
                <div className="overflow-hidden">
                  <p className="text-sm font-semibold text-slate-700 truncate">document_{i}.pdf</p>
                  <p className="text-xs text-slate-500">2.4 MB</p>
                </div>
                <button className="text-slate-300 hover:text-red-500"><Trash2 className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
