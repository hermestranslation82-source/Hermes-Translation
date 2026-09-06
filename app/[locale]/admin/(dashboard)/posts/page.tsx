'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Edit, Trash2, FileText, Globe } from 'lucide-react';
import { getPostsAction, deletePostAction } from '@/lib/actions';
import { useParams } from 'next/navigation';

export default function AdminPosts() {
  const params = useParams();
  const locale = params.locale as string || 'en';
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getPostsAction();
      setPosts(data);
      setLoading(false);
    }
    load();
    const interval = setInterval(load, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;
    setPosts(posts.filter(p => p.slug !== slug));
    await deletePostAction(slug);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            Articles Management
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Real-time Sync Active"></span>
          </h1>
          <p className="text-slate-500 mt-1">Manage your blog posts, SEO, and Geo-targeting.</p>
        </div>
        <Link href={`/${locale}/admin/posts/new`} className="px-5 py-2.5 bg-brand-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
          + Add New Article
        </Link>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-slate-700">Title</th>
              <th className="p-4 font-semibold text-slate-700">Date</th>
              <th className="p-4 font-semibold text-slate-700">Author</th>
              <th className="p-4 font-semibold text-slate-700">Status</th>
              <th className="p-4 font-semibold text-slate-700 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
               <tr><td colSpan={5} className="p-8 text-center text-slate-500">Loading...</td></tr>
            ) : posts.map((post: any) => (
              <tr key={post.slug} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <p className="font-semibold text-slate-800">{post.title_ar || post.title?.ar || post.title_en || 'Untitled'}</p>
                  <p className="text-sm text-slate-500">/{post.slug}</p>
                </td>
                <td className="p-4 text-slate-600">{new Date(post.created_at || post.date || Date.now()).toLocaleDateString()}</td>
                <td className="p-4 text-slate-600">Hermes Admin</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${post.status === 'draft' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                    {post.status || 'published'}
                  </span>
                </td>
                <td className="p-4 text-right flex justify-end gap-3">
                  <Link href={`/${locale}/admin/posts/${post.slug}`} className="text-slate-400 hover:text-blue-500 transition-colors">
                    <Edit className="w-5 h-5" />
                  </Link>
                  <button onClick={() => handleDelete(post.slug)} className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {!loading && posts.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500">
                  No articles found. Create your first one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
