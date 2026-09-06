'use client';
import { MessageSquare, MoreVertical, Send } from 'lucide-react';
export default function ChatPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-120px)] flex flex-col">
      <h1 className="text-3xl font-bold text-slate-900 shrink-0">Customer Chat Logs</h1>
      <div className="flex-1 bg-white rounded-xl border shadow-sm flex overflow-hidden">
        <div className="w-80 border-r bg-slate-50 flex flex-col">
          {[1,2,3].map(i => (
            <div key={i} className={`p-4 border-b cursor-pointer hover:bg-slate-100 ${i===1?'bg-white border-l-4 border-l-brand-red':''}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800">User {1029-i}</span>
                <span className="text-xs text-slate-400">10:4{i} AM</span>
              </div>
              <p className="text-sm text-slate-500 truncate">I need a quote for...</p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-bold text-slate-800">User 1028</h3>
            <button className="text-slate-400"><MoreVertical className="w-5 h-5"/></button>
          </div>
          <div className="flex-1 p-4 bg-slate-50 space-y-4 overflow-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0"></div>
              <div className="bg-white p-3 rounded-lg border shadow-sm text-sm text-slate-700 max-w-md">Hello, I need a translation for my birth certificate to German. How much is it?</div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-xs shrink-0">H</div>
              <div className="bg-brand-red text-white p-3 rounded-lg shadow-sm text-sm max-w-md">Welcome! A standard birth certificate to German is 250 EGP. When do you need it by?</div>
            </div>
          </div>
          <div className="p-4 bg-white border-t flex gap-2">
            <input type="text" className="flex-1 border rounded-lg p-2 outline-none focus:border-brand-red" placeholder="Type a message..." />
            <button className="bg-brand-red text-white p-2 rounded-lg"><Send className="w-5 h-5"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
