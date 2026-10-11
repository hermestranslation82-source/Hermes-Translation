import {
  Award,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FileCheck,
  FileText,
  Gavel,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stamp,
  Timer,
  UserCheck
} from 'lucide-react';

export type Locale = 'ar' | 'en';

export type LocalizedText = {
  ar: string;
  en: string;
};

export type PageItem = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  icon?: keyof typeof iconMap;
  keywords?: LocalizedText;
};

export const iconMap = {
  Award,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  FileCheck,
  FileText,
  Gavel,
  GraduationCap,
  HeartPulse,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Stamp,
  Timer,
  UserCheck
};

export const company = {
  name: {
    ar: 'هيرميس للترجمة المعتمدة',
    en: 'Hermes Certified Translations'
  },
  tagline: {
    ar: 'ترجمة معتمدة للسفارات والجهات الحكومية',
    en: 'Certified translation for embassies and government bodies'
  },
  phone: '+20 150 159 1531',
  email: 'info@hermes-certified.com',
  whatsapp: '201501591531',
  address: {
    ar: 'ميدان الجيزة، عمارة عمر أفندي، الدور الثامن، شقة 33',
    en: 'Omar Effendi Building, Giza Square, 8th Floor, Apt 33'
  },
  branches: [
    {
      id: 'giza',
      name: {
        ar: 'فرع الجيزة (الرئيسي)',
        en: 'Giza Branch (Main)'
      },
      address: {
        ar: 'ميدان الجيزة، عمارة عمر أفندي، الدور الثامن، شقة 33',
        en: 'Omar Effendi Building, Giza Square, 8th Floor, Apt 33'
      },
      phone: '+20 150 159 1531',
      whatsapp: '201501591531'
    },
    {
      id: 'heliopolis',
      name: {
        ar: 'فرع مصر الجديدة',
        en: 'Heliopolis Branch'
      },
      address: {
        ar: 'عمارات العبور، عمارة 31، الدور 14، شقة 163 (بجوار مترو أرض المعارض)',
        en: 'El-Obour Buildings, Bldg 31, 14th Floor, Apt 163 (Next to Fair Zone Metro)'
      },
      phone: '+20 150 159 1531',
      whatsapp: '201501591531'
    }
  ]
};

export const navItems = [
  { href: '/', label: { ar: 'الرئيسية', en: 'Home' } },
  { href: '/about', label: { ar: 'من نحن', en: 'About Us' } },
  { href: '/services', label: { ar: 'خدماتنا', en: 'Services' } },
  { href: '/embassies', label: { ar: 'السفارات', en: 'Embassies' } },
  { href: '/guides', label: { ar: 'الأدلة', en: 'Guides' } },
  { href: '/government', label: { ar: 'الجهات الحكومية', en: 'Government' } },
  { href: '/blog', label: { ar: 'المدونة', en: 'Blog' } },
  { href: '/contact', label: { ar: 'تواصل معنا', en: 'Contact' } }
];

export const services: PageItem[] = [
  { slug: 'embassy-translation', title: { ar: 'ترجمة معتمدة للسفارات', en: 'Embassy Certified Translation' }, excerpt: { ar: 'ترجمة وثائق التأشيرات والهجرة والدراسة بالخارج طبقاً لمتطلبات السفارات.', en: 'Visa, immigration, and study-abroad document translation aligned with embassy requirements.' }, icon: 'Landmark' },
  { slug: 'legal-translation', title: { ar: 'ترجمة قانونية', en: 'Legal Document Translation' }, excerpt: { ar: 'عقود، أحكام، توكيلات، مستندات محاكم وصيغ قانونية معتمدة.', en: 'Contracts, judgments, powers of attorney, court papers, and certified legal texts.' }, icon: 'Gavel' },
  { slug: 'personal-documents', title: { ar: 'ترجمة الوثائق الشخصية', en: 'Personal Documents Translation' }, excerpt: { ar: 'شهادات ميلاد وزواج وطلاق وجوازات سفر وسجلات جنائية.', en: 'Birth, marriage, divorce certificates, passports, and criminal records.' }, icon: 'FileCheck' },
  { slug: 'academic-documents', title: { ar: 'ترجمة الوثائق الأكاديمية', en: 'Academic Documents Translation' }, excerpt: { ar: 'شهادات تخرج، كشوف درجات، خطابات قبول، وملفات المنح الدراسية.', en: 'Diplomas, transcripts, acceptance letters, and scholarship documents.' }, icon: 'GraduationCap' },
  { slug: 'commercial-translation', title: { ar: 'ترجمة تجارية', en: 'Commercial & Business Translation' }, excerpt: { ar: 'سجلات تجارية، عقود شركات، ميزانيات، ومراسلات أعمال.', en: 'Commercial registers, company contracts, financials, and business correspondence.' }, icon: 'BriefcaseBusiness' },
  { slug: 'medical-translation', title: { ar: 'ترجمة طبية', en: 'Medical Translation' }, excerpt: { ar: 'تقارير وتحاليل وملفات علاجية بلغة دقيقة وسرية كاملة.', en: 'Reports, lab results, and medical files translated accurately and confidentially.' }, icon: 'HeartPulse' },
  { slug: 'technical-translation', title: { ar: 'ترجمة تقنية', en: 'Technical Translation' }, excerpt: { ar: 'كتالوجات، مواصفات، مستندات هندسية، وملفات تقنية متخصصة.', en: 'Manuals, specifications, engineering documents, and specialized technical files.' }, icon: 'FileText' },
  { slug: 'sworn-translation', title: { ar: 'ترجمة محلفة', en: 'Sworn Translator Services' }, excerpt: { ar: 'ترجمة موثوقة للجهات الرسمية التي تشترط مترجماً محلفاً أو معتمداً.', en: 'Trusted translations for authorities requiring sworn or accredited translators.' }, icon: 'Stamp' },
  { slug: 'notarization', title: { ar: 'توثيق وأبوستيل', en: 'Notarization & Apostille Assistance' }, excerpt: { ar: 'إرشاد ومساعدة في التوثيق والتصديق حسب الجهة المطلوبة.', en: 'Guidance and assistance with notarization and legalization workflows.' }, icon: 'BadgeCheck' }
];

export const flagEmojiMap: Record<string, string> = {
  US: '🇺🇸',
  UK: '🇬🇧',
  CA: '🇨🇦',
  DE: '🇩🇪',
  FR: '🇫🇷',
  SA: '🇸🇦',
  AE: '🇦🇪',
  IT: '🇮🇹',
  AU: '🇦🇺',
  EU: '🇪🇺'
};

export const embassies: (PageItem & { flag: string })[] = [
  { slug: 'us-embassy', flag: 'US', title: { ar: 'سفارة أمريكا', en: 'US Embassy' }, excerpt: { ar: 'متطلبات ترجمة وثائق التأشيرة الأمريكية.', en: 'Translation requirements for US visa files.' } },
  { slug: 'uk-embassy', flag: 'UK', title: { ar: 'سفارة بريطانيا', en: 'UK Embassy' }, excerpt: { ar: 'ترجمات معتمدة لطلبات بريطانيا.', en: 'Certified translations for UK applications.' } },
  { slug: 'canada-embassy', flag: 'CA', title: { ar: 'سفارة كندا', en: 'Canada Embassy' }, excerpt: { ar: 'وثائق الهجرة والدراسة والعمل في كندا.', en: 'Immigration, study, and work documents for Canada.' } },
  { slug: 'germany-embassy', flag: 'DE', title: { ar: 'سفارة ألمانيا', en: 'Germany Embassy' }, excerpt: { ar: 'ترجمة وثائق شنغن والدراسة والعمل.', en: 'Schengen, study, and work translation requirements.' } },
  { slug: 'france-embassy', flag: 'FR', title: { ar: 'سفارة فرنسا', en: 'France Embassy' }, excerpt: { ar: 'ملفات فيزا فرنسا والوثائق الأكاديمية.', en: 'France visa and academic document files.' } },
  { slug: 'saudi-embassy', flag: 'SA', title: { ar: 'سفارة السعودية', en: 'Saudi Arabia Embassy' }, excerpt: { ar: 'ترجمة وثائق العمل والزيارات العائلية.', en: 'Work and family visit document translations.' } },
  { slug: 'uae-embassy', flag: 'AE', title: { ar: 'سفارة الإمارات', en: 'UAE Embassy' }, excerpt: { ar: 'وثائق العمل والإقامة والتصديقات.', en: 'Work, residency, and attestation documents.' } },
  { slug: 'italy-embassy', flag: 'IT', title: { ar: 'سفارة إيطاليا', en: 'Italy Embassy' }, excerpt: { ar: 'متطلبات ترجمة ملفات إيطاليا وشنغن.', en: 'Italy and Schengen document requirements.' } },
  { slug: 'australia-embassy', flag: 'AU', title: { ar: 'سفارة أستراليا', en: 'Australia Embassy' }, excerpt: { ar: 'هجرة ودراسة وتأشيرات أستراليا.', en: 'Australia migration, study, and visa files.' } },
  { slug: 'schengen', flag: 'EU', title: { ar: 'دليل تأشيرة شنغن', en: 'Schengen Visa Translation Guide' }, excerpt: { ar: 'دليل موحد لوثائق شنغن المترجمة.', en: 'Unified guide for translated Schengen documents.' } }
];

export const guides: PageItem[] = [
  { slug: 'visa-translation', title: { ar: 'ترجمة طلبات التأشيرة', en: 'Visa Application Translation' }, excerpt: { ar: 'ما تحتاجه لترجمة ملف التأشيرة قبل التقديم.', en: 'What to translate before submitting a visa application.' } },
  { slug: 'scholarship-translation', title: { ar: 'ترجمة المنح الدراسية', en: 'Scholarship Documents Translation' }, excerpt: { ar: 'ترجمة شهادات وكشوف وخطابات المنح.', en: 'Translation for certificates, transcripts, and scholarship letters.' } },
  { slug: 'immigration-documents', title: { ar: 'وثائق الهجرة', en: 'Immigration Documents' }, excerpt: { ar: 'قائمة الوثائق الشائعة لملفات الهجرة.', en: 'Common translated documents for immigration files.' } },
  { slug: 'birth-certificate', title: { ar: 'ترجمة شهادة الميلاد', en: 'Birth Certificate Translation' }, excerpt: { ar: 'ترجمة معتمدة لشهادة الميلاد للاستخدام الرسمي.', en: 'Certified birth certificate translation for official use.' } },
  { slug: 'marriage-certificate', title: { ar: 'ترجمة عقد الزواج', en: 'Marriage Certificate Translation' }, excerpt: { ar: 'ترجمة عقود الزواج للسفارات والجهات الحكومية.', en: 'Marriage certificate translation for embassies and authorities.' } },
  { slug: 'divorce-certificate', title: { ar: 'ترجمة حكم الطلاق', en: 'Divorce Certificate Translation' }, excerpt: { ar: 'ترجمة أحكام ووثائق الطلاق الرسمية.', en: 'Certified translation for divorce judgments and documents.' } },
  { slug: 'criminal-record', title: { ar: 'ترجمة صحيفة الحالة الجنائية', en: 'Criminal Record Translation' }, excerpt: { ar: 'ترجمة الفيش والتشبيه للفيزا والهجرة والعمل.', en: 'Police record translation for visas, immigration, and work.' } },
  { slug: 'power-of-attorney', title: { ar: 'ترجمة توكيل رسمي', en: 'Power of Attorney Translation' }, excerpt: { ar: 'ترجمة التوكيلات العامة والخاصة.', en: 'Translation for general and special powers of attorney.' } },
  { slug: 'educational-certificates', title: { ar: 'ترجمة الشهادات الدراسية', en: 'Educational Certificates Translation' }, excerpt: { ar: 'ترجمة شهادات المدارس والجامعات وكشوف الدرجات.', en: 'Translation for school, university, and transcript documents.' } },
  { slug: 'driver-license', title: { ar: 'ترجمة رخصة القيادة', en: "Driver's License Translation" }, excerpt: { ar: 'ترجمة رخص القيادة للاستخدام الخارجي.', en: 'Driver license translation for international use.' } },
  { slug: 'commercial-register', title: { ar: 'ترجمة السجل التجاري', en: 'Commercial Register Translation' }, excerpt: { ar: 'ترجمة السجلات والبطاقات الضريبية للشركات.', en: 'Translation for commercial registers and company tax cards.' } }
];

export const governmentBodies: PageItem[] = [
  { slug: 'ministry-of-foreign-affairs', title: { ar: 'وزارة الخارجية', en: 'Ministry of Foreign Affairs' }, excerpt: { ar: 'إرشادات تصديق الترجمة من الخارجية المصرية.', en: 'Guidance for Egyptian Ministry of Foreign Affairs attestation.' } },
  { slug: 'ministry-of-justice', title: { ar: 'وزارة العدل', en: 'Ministry of Justice' }, excerpt: { ar: 'متطلبات الترجمة للجهات القضائية.', en: 'Translation requirements for judicial authorities.' } },
  { slug: 'notary-offices', title: { ar: 'الشهر العقاري', en: 'Notary Public Offices' }, excerpt: { ar: 'ترجمة وتوثيق توكيلات وعقود.', en: 'Translation and notarization for powers of attorney and contracts.' } },
  { slug: 'civil-registry', title: { ar: 'السجل المدني', en: 'Civil Registry' }, excerpt: { ar: 'شهادات الميلاد والزواج والطلاق والقيد العائلي.', en: 'Birth, marriage, divorce, and family record documents.' } },
  { slug: 'courts', title: { ar: 'المحاكم والجهات القضائية', en: 'Courts & Judicial Bodies' }, excerpt: { ar: 'ترجمة أحكام ودعاوى ومستندات تقاضي.', en: 'Translation for judgments, lawsuits, and litigation documents.' } }
];

export const processSteps = [
  { title: { ar: 'أرسل المستندات', en: 'Send Documents' }, text: { ar: 'ارفع الملفات أو أرسلها عبر واتساب.', en: 'Upload files or send them via WhatsApp.' } },
  { title: { ar: 'احصل على عرض سعر', en: 'Get a Quote' }, text: { ar: 'نراجع المستند ونحدد السعر والمدة.', en: 'We review scope, price, and delivery time.' } },
  { title: { ar: 'الترجمة والاعتماد', en: 'Translation & Certification' }, text: { ar: 'ينجزها مترجم متخصص مع ختم الاعتماد.', en: 'A specialist translator prepares the certified copy.' } },
  { title: { ar: 'التسليم', en: 'Delivery' }, text: { ar: 'استلام إلكتروني أو مطبوع حسب احتياجك.', en: 'Receive digital or printed delivery as needed.' } }
];

export const faqs = [
  { q: { ar: 'هل الترجمة مقبولة لدى السفارات؟', en: 'Are translations accepted by embassies?' }, a: { ar: 'نجهز الترجمة المعتمدة وفق متطلبات الجهات الرسمية والسفارات الشائعة في مصر.', en: 'We prepare certified translations according to common embassy and authority requirements in Egypt.' } },
  { q: { ar: 'كم تستغرق الترجمة؟', en: 'How long does translation take?' }, a: { ar: 'غالباً من 24 إلى 48 ساعة، وتتوفر خدمة عاجلة حسب نوع المستند.', en: 'Most files take 24 to 48 hours, with urgent delivery available depending on document type.' } },
  { q: { ar: 'هل يمكن إرسال المستندات أونلاين؟', en: 'Can I send documents online?' }, a: { ar: 'نعم، يمكن رفع المستند عبر نموذج عرض السعر أو إرساله على واتساب.', en: 'Yes, documents can be uploaded through the quote form or sent by WhatsApp.' } },
  { q: { ar: 'هل بياناتي سرية؟', en: 'Is my information confidential?' }, a: { ar: 'نلتزم بسرية كاملة في التعامل مع كل المستندات الشخصية والتجارية.', en: 'We handle all personal and commercial documents with strict confidentiality.' } },
  { q: { ar: 'هل تساعدون في التصديق؟', en: 'Do you help with attestation?' }, a: { ar: 'نقدم إرشاداً عملياً حول خطوات التصديق والتوثيق بحسب الجهة المطلوبة.', en: 'We provide practical guidance for attestation and notarization based on the destination authority.' } }
];

export const blogPosts = [
  {
    slug: 'certified-translation-for-embassies-egypt',
    title: { ar: 'دليل الترجمة المعتمدة للسفارات في مصر', en: 'Certified Translation for Embassies in Egypt' },
    excerpt: { ar: 'كل ما تحتاج معرفته قبل تقديم مستنداتك المترجمة للسفارة.', en: 'Everything you need to know before submitting translated documents to an embassy.' },
    date: '2026-01-15',
    author: company.name,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['embassy', 'certified translation']
  },
  {
    slug: 'birth-certificate-translation-egypt',
    title: { ar: 'ترجمة شهادة الميلاد: المتطلبات والخطوات', en: 'Birth Certificate Translation: Requirements and Steps' },
    excerpt: { ar: 'متى تحتاج شهادة ميلاد مترجمة ومعتمدة وما خطوات تجهيزها؟', en: 'When you need a certified birth certificate translation and how to prepare it.' },
    date: '2026-02-03',
    author: company.name,
    videoUrl: '',
    tags: ['documents', 'birth certificate']
  },
  {
    slug: 'schengen-visa-translation-guide',
    title: { ar: 'دليل ترجمة مستندات فيزا شنغن', en: 'Schengen Visa Translation Guide' },
    excerpt: { ar: 'قائمة المستندات التي تطلبها أغلب سفارات شنغن مترجمة.', en: 'A list of documents most Schengen embassies request in translation.' },
    date: '2026-03-20',
    author: company.name,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['schengen', 'visa']
  }
];

export function bySlug(items: PageItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}
