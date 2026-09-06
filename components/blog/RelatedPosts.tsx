import { BlogCard } from './BlogCard';
import { blogPosts, type Locale } from '@/data/site';

export function RelatedPosts({ locale }: { locale: Locale }) {
  return <div className="grid gap-5 md:grid-cols-3">{blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} locale={locale} post={post} />)}</div>;
}
