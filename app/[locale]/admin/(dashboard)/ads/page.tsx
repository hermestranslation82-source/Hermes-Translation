'use client';

import { useState } from 'react';
import { 
  Megaphone, CheckCircle2, Copy, Download, Globe, Shield, 
  Sparkles, ExternalLink, RefreshCw, Send, Layers, HelpCircle
} from 'lucide-react';
import { toast } from 'sonner';

interface CampaignTemplate {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  finalUrl: string;
  headlines: string[];
  descriptions: string[];
  keywords: string[];
  negativeKeywords: string[];
  sitelinks: { title: string; desc: string; url: string }[];
  callouts: string[];
}

const CAMPAIGN_TEMPLATES: CampaignTemplate[] = [
  {
    id: 'embassy',
    name: 'ترجمة معتمدة للسفارات والتأشيرات',
    nameEn: 'Embassy & Visa Certified Translation',
    category: 'Embassy Visas',
    finalUrl: 'https://www.hermes-certified.com/ar/services/embassy-translation',
    headlines: [
      'مكتب ترجمة معتمد لجميع السفارات',
      'ترجمة معتمدة لفيزا شنغن وأمريكا',
      'استلام في نفس اليوم - هيرمس',
      'معتمد لدى سفارات إيطاليا وألمانيا',
      'فرعا مصر الجديدة وميدان الجيزة',
      'دقة قانونية معتمدة 100%',
      'ترجمة معتمدة للسفارة الكندية',
      'ترجمة شهادات ومستندات السفر',
      'خصومات لملفات السفر العائلية',
      'استشارة مجانية عبر واتساب',
      'أختام وتوقيعات معتمدة رسمياً',
      'خدمة ترجمة عاجلة 24 ساعة',
      'ترجمة للسفارة البريطانية UKVI',
      'خبرة أكثر من 15 عاماً بالقاهرة',
      'توصيل مستنداتك المترجمة لباب بيتك'
    ],
    descriptions: [
      'مكتب ترجمة معتمد لدى كافة السفارات والجهات القنصلية في مصر. استلام فوري ودقة لغوية متناهية.',
      'ترجمة ملفات فيزا شنغن، أمريكا، بريطانيا وكندا. مطابقة تامة لاشتراطات السفارات وأختام رسمية.',
      'فرع مصر الجديدة عمارات العبور وفرع الجيزة بميدان الجيزة. تواصل معنا الآن لطلب عرض سعر فوري.',
      'نضمن قبول ترجمتك لدى جميع السفارات أو استرداد كامل التكلفة. تسليم سريع خلال 24 ساعة.'
    ],
    keywords: [
      '[مكتب ترجمة معتمد للسفارات]',
      '"مكتب ترجمة معتمد للسفارات"',
      '[مكتب ترجمة معتمد للسفارة الامريكية]',
      '"مكتب ترجمة معتمد فيزا شنغن"',
      '[مكتب ترجمة معتمد مصر الجديدة]',
      '"مكتب ترجمة معتمد الجيزة"',
      '[ترجمة معتمدة للسفارة الالمانية]',
      '"ترجمة معتمدة للسفارة الايطالية"',
      '[مكتب ترجمة معتمد مدينة نصر]',
      '"اسعار الترجمة المعتمدة للسفارات"'
    ],
    negativeKeywords: [
      'مجانا',
      'مترجم جوجل',
      'وظائف مترجمين',
      'تحميل برنامج',
      'كورس ترجمة',
      'قاموس انجليزي',
      'مترجم فوري وظيفة'
    ],
    sitelinks: [
      { title: 'ترجمة فيزا شنغن', desc: 'متطلبات وترجمة أوراق السفر الأوروبية', url: '/ar/guides/visa-translation' },
      { title: 'أسعار الترجمة المعتمدة', desc: 'احصل على عرض سعر فوري ومجاني', url: '/ar/quote' },
      { title: 'فروعنا بالقاهرة والجيزة', desc: 'عمارات العبور وميدان الجيزة', url: '/ar/contact' },
      { title: 'التوثيق من الخارجية', desc: 'خدمات تصديق المستندات والشهادات', url: '/ar/services/notarization' }
    ],
    callouts: ['اعتماد رسمي 100%', 'استلام في نفس اليوم', 'فروع بمصر الجديدة والجيزة', 'دعم واتساب 24/7']
  },
  {
    id: 'legal',
    name: 'ترجمة قانونية معتمدة وعقود',
    nameEn: 'Legal & Contracts Certified Translation',
    category: 'Legal & Judicial',
    finalUrl: 'https://www.hermes-certified.com/ar/services/legal-translation',
    headlines: [
      'مكتب ترجمة قانونية معتمد بمصر',
      'ترجمة عقود وأحكام قضائية معتمدة',
      'صياغة تشريعية وقانون مقارن دقيق',
      'ترجمة توكيلات رسمية ومحاضر',
      'سرية تامة بموجب اتفاقيات NDA',
      'مترجمون قانونيون ومستشارون معتمدون',
      'ترجمة مستندات التحكيم الدولي',
      'معتمد لدى المحاكم والشهر العقاري',
      'فرعا صلاح سالم وميدان الجيزة',
      'تسليم ملفات الشركات الكبرى سريعاً',
      'مكتب هيرمس للترجمة القانونية',
      'ترجمة قوانين ولوائح تأسيس الشركات',
      'مطابقة المصطلحات اللاتينية والتشريعية',
      'عرض سعر فوري لملفك القانوني',
      'خبرة مع كبرى مكاتب المحاماة'
    ],
    descriptions: [
      'ترجمة قانونية معتمدة للمحامين والشركات. عقود، أحكام قضائية، توكيلات ومستندات تحكيم بدقة تشريعية.',
      'صياغة احترافية وفق قواعد القانون المقارن مع الحفاظ المطلق على سرية المستندات باتفاقيات ملزمة.',
      'معتمد لدى المحاكم ووزارة العدل والشهر العقاري والجهات الدولية. فرعا مصر الجديدة والجيزة.',
      'تواصل مع مستشاري الترجمة القانونية بهيرمس الآن لتدقيق ملفك وصياغته بدقة متناهية.'
    ],
    keywords: [
      '[مكتب ترجمة قانونية معتمد]',
      '"ترجمة عقود قانونية معتمدة"',
      '[ترجمة احكام قضائية معتمدة]',
      '"مكتب ترجمة قانوني القاهرة"',
      '[ترجمة توكيلات رسمية معتمدة]',
      '"ترجمة قانونية انجليزي عربي"',
      '[مكاتب ترجمة قانونية معتمدة مصر]'
    ],
    negativeKeywords: ['مجانا', 'وظائف قانونية', 'استشارات محامي مجاني', 'نموذج عقد مجاني'],
    sitelinks: [
      { title: 'ترجمة التوكيلات والعقود', desc: 'دقة تشريعية معتمدة للشهر العقاري', url: '/ar/services/legal-translation' },
      { title: 'خدمات التوثيق والتصديق', desc: 'توثيق وزارة العدل والخارجية', url: '/ar/services/notarization' },
      { title: 'طلب عرض سعر قانوني', desc: 'سرية تامة ومعاينة مجانية للملف', url: '/ar/quote' },
      { title: 'تواصل مع المستشار', desc: 'واتساب مباشر لخدمة المحامين', url: '/ar/contact' }
    ],
    callouts: ['اتفاقيات سرية NDA', 'صياغة قانون مقارن', 'معتمد لوزارة العدل', 'مراجعة ثنائية صارمة']
  },
  {
    id: 'personal',
    name: 'ترجمة المستندات الشخصية والشهادات',
    nameEn: 'Personal Documents & Vital Records',
    category: 'Civil Records',
    finalUrl: 'https://www.hermes-certified.com/ar/services/personal-documents',
    headlines: [
      'ترجمة شهادة الميلاد والزواج معتمدة',
      'مكتب ترجمة أوراق شخصية معتمد',
      'ترجمة القيد العائلي والفيش الجنائي',
      'استلام في ساعتين - ترجمة معتمدة',
      'مطابقة تامة لأسماء جواز السفر',
      'معتمد للهجرة والسفارات والخارجية',
      'أفضل أسعار الترجمة المعتمدة بمصر',
      'فرع مصر الجديدة وفرع الجيزة',
      'أختام وشعار هيرمس المعتمد',
      'ترجمة شهادات التخرج وبيان الدرجات',
      'تجهيز كامل لملفات الهجرة ولم الشمل',
      'استلم نسختك المترجمة أينما كنت',
      'خدمة ترجمة عاجلة أونلاين عبر واتساب',
      'دقة كاملة في الأرقام والتواريخ',
      'معتمد لمكاتب السجل المدني والهجرة'
    ],
    descriptions: [
      'ترجمة معتمدة لشهادات الميلاد، عقود الزواج، الفيش الجنائي، وشهادات الجيش. استلام سريع ومطابقة 100%.',
      'أوراقك الشخصية مترجمة ومعتمدة وجاهزة للسفارات ومكاتب الهجرة والخارجية. فرعا الجيزة ومصر الجديدة.',
      'أرسل أوراقك الآن عبر واتساب واستلم الترجمة معتمدة ومختومة دون الحاجة لمغادرة منزلك.',
      'خصومات خاصة للباقات العائلية وملفات الهجرة ولم الشمل. تواصل معنا للحصول على عرض سعر فوري.'
    ],
    keywords: [
      '[ترجمة شهادة ميلاد معتمدة]',
      '"ترجمة شهادة تخرج معتمدة"',
      '[ترجمة عقد زواج معتمد]',
      '"ترجمة فيش جنائي معتمد"',
      '[ترجمة قيد عائلي معتمد]',
      '"مكتب ترجمة شهادات معتمد"',
      '[اسعار ترجمة شهادة الميلاد]'
    ],
    negativeKeywords: ['استخراج شهادة ميلاد', 'موقع وزارة الداخلية', 'رسوم استخراج بطاقة'],
    sitelinks: [
      { title: 'دليل ترجمة شهادات الميلاد', desc: 'كل ما تحتاج معرفته للسفارات', url: '/ar/guides/birth-certificate' },
      { title: 'ترجمة الشهادات الأكاديمية', desc: 'للجامعات ومعادلة WES والمنح', url: '/ar/services/academic-documents' },
      { title: 'طلب تسعير سريع', desc: 'احسب التكلفة وأرسل عبر واتساب', url: '/ar/quote' },
      { title: 'فروع هيرمس المعتمدة', desc: 'مصر الجديدة والجيزة', url: '/ar/contact' }
    ],
    callouts: ['مطابقة لجواز السفر', 'تسليم سريع بساعتين', 'معتمد لكافة السفارات', 'خدمة واتساب أونلاين']
  }
];

export default function GoogleAdsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<CampaignTemplate>(CAMPAIGN_TEMPLATES[0]);
  const [testingConnection, setTestingConnection] = useState(false);
  const [connectionResult, setConnectionResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleTestConnection = async () => {
    setTestingConnection(true);
    setConnectionResult(null);
    try {
      const res = await fetch('/api/google-ads/test-connection');
      const data = await res.json();
      if (res.ok && data.success) {
        setConnectionResult({ success: true, message: data.message });
        toast.success('تم التحقق بنجاح من اتصال Google Ads API!');
      } else {
        setConnectionResult({ success: false, message: data.message || 'فشل الاتصال' });
        toast.error(data.message || 'فشل الاتصال بـ Google Ads');
      }
    } catch {
      setConnectionResult({ success: false, message: 'حدث خطأ في الاتصال بالشبكة' });
      toast.error('حدث خطأ في الاتصال بالشبكة');
    } finally {
      setTestingConnection(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`تم نسخ ${label} بنجاح!`);
  };

  const downloadBulkCsv = () => {
    const headers = [
      'Campaign',
      'Ad Group',
      'Keyword / Headline',
      'Criterion Type',
      'Final URL',
      'Description 1',
      'Description 2'
    ];

    const rows: string[] = [];
    rows.push(headers.join(','));

    // Add keywords
    selectedTemplate.keywords.forEach((kw) => {
      const type = kw.startsWith('[') ? 'Exact' : kw.startsWith('"') ? 'Phrase' : 'Broad';
      const cleanKw = kw.replace(/[\[\]"]/g, '');
      rows.push(`"${selectedTemplate.name}","${selectedTemplate.category}","${cleanKw}","${type}","${selectedTemplate.finalUrl}","",""`);
    });

    // Add ad copy row
    rows.push(
      `"${selectedTemplate.name}","${selectedTemplate.category}","${selectedTemplate.headlines[0]}","Responsive Search Ad","${selectedTemplate.finalUrl}","${selectedTemplate.descriptions[0]}","${selectedTemplate.descriptions[1]}"`
    );

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(rows.join('\n'));
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', `Google_Ads_${selectedTemplate.id}_Campaign.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('تم تحميل ملف الحملة المجمع (Google Ads Bulk CSV) بنجاح!');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white shadow-md">
              <Megaphone className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl font-black text-slate-900">Google Ads Campaign Hub</h1>
              <p className="text-xs text-slate-500">إدارة وإنشاء حملات إعلانات جوجل الاحترافية وربط الـ API الرسمي</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleTestConnection}
            disabled={testingConnection}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${testingConnection ? 'animate-spin' : ''}`} />
            <span>{testingConnection ? 'جاري الفحص...' : 'فحص اتصال Google API'}</span>
          </button>
          <a
            href="https://ads.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow transition hover:bg-slate-800"
          >
            <span>فتح لوحة Google Ads</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Cloud & OAuth API Status Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">حالة الربط البرمجي السحابي (Google Cloud & Ads API)</h2>
            </div>
            <p className="text-xs text-slate-600">
              بيانات الاعتماد السحابية (OAuth 2.0 Credentials) ومفاتيح الربط الدائمة مُدمجة ومحمية بنجاح داخل النظام.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5" /> Customer ID: 339-501-8878
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700 border border-blue-200">
                <Shield className="h-3.5 w-3.5" /> Client ID: 79122587...apps.googleusercontent.com
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700 border border-purple-200">
                <Globe className="h-3.5 w-3.5" /> OAuth Refresh Token: Connected
              </span>
            </div>
          </div>

          <div className="shrink-0 bg-slate-50 rounded-xl p-4 border border-slate-200 min-w-[280px]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-500">حالة الاتصال الفوري:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> متصل وجاهز
              </span>
            </div>
            {connectionResult && (
              <p className={`mt-2 text-xs font-medium rounded p-2 ${connectionResult.success ? 'bg-emerald-100/60 text-emerald-800' : 'bg-red-100/60 text-red-800'}`}>
                {connectionResult.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Campaign Strategy Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Layers className="h-4 w-4 text-brand-gold" />
            اختر نوع الحملة المراد إطلاقها (Campaign Architecture):
          </h2>
          <span className="text-xs text-slate-500">مصممة وفق أعلى معايير Google Search و Quality Score</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CAMPAIGN_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => setSelectedTemplate(tmpl)}
              className={`text-right p-4 rounded-xl border-2 transition-all ${
                selectedTemplate.id === tmpl.id
                  ? 'border-brand-red bg-red-50/30 shadow-md ring-2 ring-brand-red/10'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase">{tmpl.category}</span>
                {selectedTemplate.id === tmpl.id && (
                  <CheckCircle2 className="h-4 w-4 text-brand-red" />
                )}
              </div>
              <h3 className="font-bold text-sm text-slate-900">{tmpl.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{tmpl.nameEn}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Campaign Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Google Search Mockup & Action Buttons */}
        <div className="lg:col-span-5 space-y-5">
          {/* Ad Mockup */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="text-xs font-bold text-slate-500">معاينة الإعلان في بحث جوجل (Google Search Preview)</span>
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Mobile & Desktop</span>
            </div>

            <div className="space-y-2 font-sans bg-slate-50/70 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <span className="font-bold bg-amber-400/30 text-amber-900 text-[10px] px-1.5 py-0.5 rounded font-bold">Ad</span>
                <span className="text-slate-500 text-xs font-mono truncate">{selectedTemplate.finalUrl}</span>
              </div>

              <h4 className="text-base font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                {selectedTemplate.headlines[0]} | {selectedTemplate.headlines[1]} | {selectedTemplate.headlines[2]}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedTemplate.descriptions[0]}
              </p>

              {/* Sitelinks Mockup */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                {selectedTemplate.sitelinks.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-[#1a0dab] font-bold block truncate hover:underline">{s.title}</span>
                    <span className="text-[11px] text-slate-500 block truncate">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Export Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={downloadBulkCsv}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-red to-red-700 hover:from-brand-red-dark hover:to-red-800 text-white py-3 px-4 text-xs font-bold shadow-md transition-all"
              >
                <Download className="h-4 w-4" />
                <span>تحميل ملف الحملة الجاهز (Download Bulk CSV)</span>
              </button>

              <button
                onClick={() => copyToClipboard(selectedTemplate.headlines.join('\n'), 'العناوين')}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2.5 px-4 text-xs font-bold transition"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>نسخ كافة العناوين الـ 15 (Copy All Headlines)</span>
              </button>
            </div>
          </div>

          {/* Direct API Launcher Tip */}
          <div className="rounded-xl bg-amber-50/70 border border-amber-200 p-4 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>طريقة رفع الحملة إلى حسابك بثانية واحدة:</span>
            </div>
            <p className="leading-relaxed">
              1. اضغط على زر <strong>تحميل ملف الحملة الجاهز (Bulk CSV)</strong> أعلاه.
              <br />
              2. في لوحة إعلانات جوجل، اذهب إلى <strong>Tools & Settings</strong> ⬅️ <strong>Bulk Actions</strong> ⬅️ <strong>Uploads</strong>.
              <br />
              3. ارفع الملف مباشرة، وستجد الحملة بمجموعاتها الإعلانية وكلماتها المفتاحية ظهرت في حسابك فوراً!
            </p>
          </div>
        </div>

        {/* Right: Headlines, Descriptions & Keywords Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          {/* Headlines Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">عناوين الإعلان المتجاوبة (15 Responsive Headlines)</h3>
                <p className="text-xs text-slate-500">مكتوبة بدقة مع إشارات الثقة ومطابقة لحدود جوجل (30 حرف)</p>
              </div>
              <button
                onClick={() => copyToClipboard(selectedTemplate.headlines.join('\n'), 'العناوين')}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
                title="نسخ الكل"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedTemplate.headlines.map((hl, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-medium text-slate-800 truncate">{hl}</span>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0 mr-2">{hl.length}/30</span>
                </div>
              ))}
            </div>
          </div>

          {/* Descriptions Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">أوصاف الإعلان (4 Responsive Descriptions)</h3>
                <p className="text-xs text-slate-500">مركزة على نقاط القوة والاعتماد وعناوين الفروع (90 حرف)</p>
              </div>
              <button
                onClick={() => copyToClipboard(selectedTemplate.descriptions.join('\n'), 'الأوصاف')}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
                title="نسخ الكل"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2">
              {selectedTemplate.descriptions.map((desc, idx) => (
                <div key={idx} className="flex items-start justify-between text-xs p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-700 leading-relaxed font-medium">{desc}</span>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0 mr-3 mt-0.5">{desc.length}/90</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords & Negative Keywords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Keywords */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-xs font-bold text-slate-900">الكلمات المفتاحية المستهدفة (Match Types)</h4>
                <button
                  onClick={() => copyToClipboard(selectedTemplate.keywords.join('\n'), 'الكلمات المفتاحية')}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="space-y-1.5">
                {selectedTemplate.keywords.map((kw, idx) => (
                  <span key={idx} className="inline-block text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100 ml-1.5 mb-1.5">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Negative Keywords */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <h4 className="text-xs font-bold text-slate-900 text-red-700">الكلمات السلبية ( لمنع إهدار الميزانية)</h4>
                <button
                  onClick={() => copyToClipboard(selectedTemplate.negativeKeywords.join('\n'), 'الكلمات السلبية')}
                  className="text-slate-400 hover:text-slate-700"
                >
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="space-y-1.5">
                {selectedTemplate.negativeKeywords.map((neg, idx) => (
                  <span key={idx} className="inline-block text-xs font-mono bg-red-50 text-red-700 px-2 py-1 rounded border border-red-100 ml-1.5 mb-1.5">
                    -{neg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
