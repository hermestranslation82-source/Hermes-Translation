CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  icon TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS embassies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  flag TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS guides (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS government_bodies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_ar TEXT,
  excerpt_en TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert initial data for Services
INSERT INTO services (slug, title_ar, title_en, excerpt_ar, excerpt_en, icon) VALUES
('embassy-translation', 'ترجمة معتمدة للسفارات', 'Embassy Certified Translation', 'ترجمة وثائق التأشيرات والهجرة والدراسة بالخارج طبقاً لمتطلبات السفارات.', 'Visa, immigration, and study-abroad document translation aligned with embassy requirements.', 'Landmark'),
('legal-translation', 'ترجمة قانونية', 'Legal Document Translation', 'عقود، أحكام، توكيلات، مستندات محاكم وصيغ قانونية معتمدة.', 'Contracts, judgments, powers of attorney, court papers, and certified legal texts.', 'Gavel'),
('personal-documents', 'ترجمة الوثائق الشخصية', 'Personal Documents Translation', 'شهادات ميلاد وزواج وطلاق وجوازات سفر وسجلات جنائية.', 'Birth, marriage, divorce certificates, passports, and criminal records.', 'FileCheck')
ON CONFLICT (slug) DO NOTHING;

-- Insert initial data for Embassies
INSERT INTO embassies (slug, title_ar, title_en, excerpt_ar, excerpt_en, flag) VALUES
('us-embassy', 'سفارة أمريكا', 'US Embassy', 'متطلبات ترجمة وثائق التأشيرة الأمريكية.', 'Translation requirements for US visa files.', '🇺🇸'),
('uk-embassy', 'سفارة بريطانيا', 'UK Embassy', 'ترجمات معتمدة لطلبات بريطانيا.', 'Certified translations for UK applications.', '🇬🇧'),
('germany-embassy', 'سفارة ألمانيا', 'Germany Embassy', 'ترجمة وثائق شنغن والدراسة والعمل.', 'Schengen, study, and work translation requirements.', '🇩🇪')
ON CONFLICT (slug) DO NOTHING;

-- Insert initial data for Guides
INSERT INTO guides (slug, title_ar, title_en, excerpt_ar, excerpt_en) VALUES
('visa-translation', 'ترجمة طلبات التأشيرة', 'Visa Application Translation', 'ما تحتاجه لترجمة ملف التأشيرة قبل التقديم.', 'What to translate before submitting a visa application.'),
('scholarship-translation', 'ترجمة المنح الدراسية', 'Scholarship Documents Translation', 'ترجمة شهادات وكشوف وخطابات المنح.', 'Translation for certificates, transcripts, and scholarship letters.')
ON CONFLICT (slug) DO NOTHING;

-- Insert initial data for Government Bodies
INSERT INTO government_bodies (slug, title_ar, title_en, excerpt_ar, excerpt_en) VALUES
('ministry-of-foreign-affairs', 'وزارة الخارجية', 'Ministry of Foreign Affairs', 'إرشادات تصديق الترجمة من الخارجية المصرية.', 'Guidance for Egyptian Ministry of Foreign Affairs attestation.'),
('ministry-of-justice', 'وزارة العدل', 'Ministry of Justice', 'متطلبات الترجمة للجهات القضائية.', 'Translation requirements for judicial authorities.')
ON CONFLICT (slug) DO NOTHING;
