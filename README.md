# Hermes Certified Translations Website

Production-ready bilingual website scaffold for Hermes Certified Translations, using Next.js 14 App Router, TypeScript, Tailwind CSS, next-intl, Supabase, Claude article generation, and next-sitemap.

## Tech Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- next-intl for Arabic/English routes with RTL/LTR layout
- WordPress REST API helper for headless CMS blog loading, with local static fallback
- Supabase for quote requests, contact messages, newsletter leads, backlinks, and content calendar
- Anthropic Claude API for admin article generation
- Lucide React icons
- Framer Motion dependency included for professional animation enhancements
- next-sitemap for sitemap.xml and robots.txt

## Local Setup

```bash
cd hermes-translations
npm install
cp .env.local.example .env.local
npm run dev
```

Open `http://localhost:3000/ar` or `http://localhost:3000/en`.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in Supabase, Anthropic, WordPress REST API, GA4, Search Console, admin password, WhatsApp number, and site URL values.

## Supabase Schema

Run this SQL in Supabase:

```sql
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  content_ar TEXT,
  content_en TEXT,
  featured_image TEXT,
  video_url TEXT,
  author TEXT DEFAULT 'هيرميس للترجمة',
  status TEXT DEFAULT 'draft',
  tags TEXT[],
  meta_title_ar TEXT,
  meta_title_en TEXT,
  meta_description_ar TEXT,
  meta_description_en TEXT,
  focus_keyword_ar TEXT,
  focus_keyword_en TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  document_type TEXT,
  source_language TEXT,
  target_language TEXT,
  embassy TEXT,
  urgency TEXT,
  document_url TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE backlinks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  domain TEXT NOT NULL,
  url TEXT,
  anchor_text TEXT,
  date_added DATE,
  status TEXT DEFAULT 'pending',
  notes TEXT
);

CREATE TABLE content_calendar (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  target_date DATE,
  status TEXT DEFAULT 'planned',
  blog_post_id UUID REFERENCES blog_posts(id)
);

CREATE TABLE article_feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL,
  helpful BOOLEAN NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Deployment to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Add all variables from `.env.local.example` in the Vercel dashboard. Connect the custom domain, then Vercel will issue HTTPS automatically.

## Analytics and Search Console

- GA4: set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
- Search Console: set `NEXT_PUBLIC_GSC_VERIFICATION`.
- Sitemap and robots are generated after `npm run build` through `next-sitemap`.

## Adding Content

- Blog seed data lives in `data/site.ts`.
- Add services in `data/services.ts` via `data/site.ts`.
- Add embassies in `data/embassies.ts` via `data/site.ts`.
- Add guides in `data/guides.ts` via `data/site.ts`.
- Admin blog editor is available at `/admin/blog/new`.
- AI article generator is available at `/admin/automation`.

## Backlink Strategy

The admin backlink screen renders `data/backlink-opportunities.ts`. Track outreach by adding rows to the Supabase `backlinks` table and prioritizing Critical/High opportunities first, especially Google Business Profile, LinkedIn, ProZ, Clutch, and embassy/student-related outreach.

## Created Structure

The project includes all requested route folders under `app/[locale]`, admin pages under `app/admin`, API routes under `app/api`, shared components, data files, i18n messages, Supabase/Claude/SEO/schema helpers, brand SVG logo, sitemap config, Tailwind config, and environment template.
