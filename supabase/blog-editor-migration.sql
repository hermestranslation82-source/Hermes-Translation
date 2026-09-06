ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_image TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_title_ar TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_title_en TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_description_ar TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_description_en TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS canonical_url TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS sitemap_include BOOLEAN DEFAULT true;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS sitemap_priority DECIMAL(2,1) DEFAULT 0.7;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS sitemap_changefreq TEXT DEFAULT 'weekly';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS schema_faq BOOLEAN DEFAULT true;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS schema_breadcrumb BOOLEAN DEFAULT true;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS word_count INTEGER DEFAULT 0;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS reading_time INTEGER DEFAULT 0;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS seo_score INTEGER DEFAULT 0;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMPTZ;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS autosave_content_ar TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS autosave_content_en TEXT;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS internal_links JSONB DEFAULT '[]'::jsonb;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS category TEXT[];

CREATE TABLE IF NOT EXISTS authors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_ar TEXT NOT NULL,
  name_en TEXT,
  bio_ar TEXT,
  bio_en TEXT,
  avatar TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name_ar TEXT NOT NULL,
  name_en TEXT,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS blog_posts_status_idx ON blog_posts(status);
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_seo_score_idx ON blog_posts(seo_score);
