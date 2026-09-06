/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { Edit, Trash2, Plus, X, Save, RefreshCw } from 'lucide-react';
import { getCollectionAction, saveCollectionItemAction, deleteCollectionItemAction } from '@/lib/actions';

interface Field {
  key: string;
  label: string;
  type: 'text' | 'textarea';
}

interface CollectionManagerProps {
  tableName: string;
  title: string;
  description: string;
  fields: Field[];
}

export default function CollectionManager({ tableName, title, description, fields }: CollectionManagerProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [saving, setSaving] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const items = await getCollectionAction(tableName);
      setData(items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // Poll every 15 seconds to ensure real-time feel if multiple admins are working
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, [tableName]);

  const handleOpenModal = (item: any = null) => {
    setEditingItem(item);
    if (item) {
      setFormData(item);
    } else {
      setFormData({});
    }
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      // Slug is required for these tables
      if (!formData.slug) {
        alert('Slug is required');
        setSaving(false);
        return;
      }
      await saveCollectionItemAction(tableName, formData);
      setModalOpen(false);
      loadData();
    } catch (err) {
      console.error(err);
      alert('Failed to save. Ensure slug is unique.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (confirm('Are you sure you want to delete this item? This will instantly reflect on the website.')) {
      try {
        await deleteCollectionItemAction(tableName, slug);
        loadData();
      } catch (err) {
        console.error(err);
        alert('Failed to delete.');
      }
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            {title}
            {loading && <RefreshCw className="w-4 h-4 text-brand-red animate-spin" />}
          </h1>
          <p className="text-slate-500 mt-1">{description}</p>
        </div>
        <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-brand-red text-white rounded-lg font-medium shadow-md shadow-red-500/20 flex items-center gap-2 hover:bg-red-700 transition-colors">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Slug</th>
              <th className="p-4 font-semibold text-slate-700">Title (AR)</th>
              <th className="p-4 font-semibold text-slate-700">Title (EN)</th>
              <th className="p-4 font-semibold text-slate-700">Status</th>
              <th className="p-4 font-semibold text-slate-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr><td colSpan={5} className="p-8 text-center text-slate-500">No records found. Click "Add New" to create one.</td></tr>
            ) : data.map((item) => (
              <tr key={item.slug} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-mono text-sm text-slate-600">{item.slug}</td>
                <td className="p-4 font-semibold text-slate-900">{item.title_ar}</td>
                <td className="p-4 text-slate-600">{item.title_en}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center w-max gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
                  </span>
                </td>
                <td className="p-4 text-right flex justify-end gap-2">
                  <button onClick={() => handleOpenModal(item)} className="p-2 text-slate-400 hover:text-blue-600 bg-white border shadow-sm rounded-md transition-colors"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.slug)} className="p-2 text-slate-400 hover:text-red-600 bg-white border shadow-sm rounded-md transition-colors"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-bold text-slate-800">{editingItem ? 'Edit Item' : 'Add New Item'}</h2>
              <button type="button" onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-700"><X className="w-6 h-6" /></button>
            </div>
            
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Unique Slug (Required)</label>
                <input required value={formData.slug || ''} onChange={e => setFormData({...formData, slug: e.target.value})} disabled={!!editingItem} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white font-mono" placeholder="e.g., my-service-name" />
                {editingItem && <p className="text-xs text-orange-600 mt-1">Slug cannot be changed once created.</p>}
              </div>

              {fields.map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-bold text-slate-700 mb-1">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea value={formData[field.key] || ''} onChange={e => setFormData({...formData, [field.key]: e.target.value})} rows={3} className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" />
                  ) : (
                    <input value={formData[field.key] || ''} onChange={e => setFormData({...formData, [field.key]: e.target.value})} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" />
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-slate-50 flex justify-end gap-3">
              <button type="button" onClick={() => setModalOpen(false)} className="px-5 py-2 font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">Cancel</button>
              <button type="submit" disabled={saving} className="px-5 py-2 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-md flex items-center gap-2">
                <Save className="w-4 h-4" /> {saving ? 'Syncing...' : 'Save & Publish Live'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
