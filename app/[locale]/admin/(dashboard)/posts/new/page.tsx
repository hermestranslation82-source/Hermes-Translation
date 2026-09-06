/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, X, Globe, MapPin, FileText, Settings, Link as LinkIcon, BarChart, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';
import { savePostAction } from '@/lib/actions';
import RichTextEditor from '@/components/RichTextEditor';

export default function NewArticlePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'guide' | 'content' | 'seo' | 'technical' | 'offpage' | 'geo'>('guide');
  const [loading, setLoading] = useState(false);

  // Form State - Content
  const [slug, setSlug] = useState('');
  const [titleAr, setTitleAr] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [contentAr, setContentAr] = useState('');
  const [contentEn, setContentEn] = useState('');

  // Form State - SEO & Meta
  const [metaTitleAr, setMetaTitleAr] = useState('');
  const [metaTitleEn, setMetaTitleEn] = useState('');
  const [metaDescAr, setMetaDescAr] = useState('');
  const [metaDescEn, setMetaDescEn] = useState('');
  const [keywordsAr, setKeywordsAr] = useState('');
  const [keywordsEn, setKeywordsEn] = useState('');

  // Form State - Technical & Sitemap
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [robots, setRobots] = useState('index, follow');
  const [sitemapInclude, setSitemapInclude] = useState(true);
  const [sitemapPriority, setSitemapPriority] = useState('0.8');
  const [sitemapChangefreq, setSitemapChangefreq] = useState('weekly');

  // Form State - Off-Page (Backlinks Tracker)
  const [backlinks, setBacklinks] = useState<{url: string, anchor: string, domainAuthority: string}[]>([]);
  const [newBacklink, setNewBacklink] = useState({url: '', anchor: '', domainAuthority: ''});

  // On-Page Analyzer State
  const [seoScore, setSeoScore] = useState(0);

  // Real-time SEO Analyzer
  useEffect(() => {
    let score = 0;
    // Word count check
    if (contentAr.length > 300 || contentEn.length > 300) score += 20;
    if (contentAr.length > 1000 || contentEn.length > 1000) score += 10;
    // Meta title check
    if (metaTitleAr.length > 30 && metaTitleAr.length <= 60) score += 15;
    if (metaTitleEn.length > 30 && metaTitleEn.length <= 60) score += 15;
    // Meta desc check
    if (metaDescAr.length > 100 && metaDescAr.length <= 160) score += 10;
    // URL Slug check
    if (slug.length > 5 && !slug.includes('_') && !slug.includes(' ')) score += 10;
    // Headings check
    if (contentAr.includes('</h2') || contentEn.includes('</h2')) score += 10;
    // Links check
    if (contentAr.includes('href') || contentEn.includes('href')) score += 10;

    setSeoScore(Math.min(100, score));
  }, [contentAr, contentEn, metaTitleAr, metaTitleEn, metaDescAr, slug]);

  const handleAddBacklink = () => {
    if (newBacklink.url) {
      setBacklinks([...backlinks, newBacklink]);
      setNewBacklink({url: '', anchor: '', domainAuthority: ''});
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        slug,
        title_ar: titleAr,
        title_en: titleEn,
        content_ar: contentAr,
        content_en: contentEn,
        metaTitle_ar: metaTitleAr,
        metaTitle_en: metaTitleEn,
        metaDesc_ar: metaDescAr,
        metaDesc_en: metaDescEn,
        keywords_ar: keywordsAr,
        keywords_en: keywordsEn,
        canonicalUrl,
        robots,
        sitemap_include: sitemapInclude,
        sitemap_priority: parseFloat(sitemapPriority),
        sitemap_changefreq: sitemapChangefreq,
        backlinks, // If supported in DB schema, otherwise handled separately
        seo_score: seoScore,
        status: 'published',
      };
      await savePostAction(payload);
      router.push('/ar/admin/posts');
    } catch (err) {
      console.error(err);
      alert('Failed to save. Check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-4 rounded-xl border shadow-sm sticky top-0 z-50 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Advanced SEO Article Editor</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">On-Page Score:</span>
            <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full transition-all ${seoScore >= 80 ? 'bg-green-500' : seoScore >= 50 ? 'bg-orange-500' : 'bg-red-500'}`} style={{width: `${seoScore}%`}}></div>
            </div>
            <span className={`text-sm font-bold ${seoScore >= 80 ? 'text-green-600' : seoScore >= 50 ? 'text-orange-600' : 'text-red-600'}`}>{seoScore}/100</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors flex items-center gap-2">
            <X className="w-4 h-4" /> Cancel
          </button>
          <button type="submit" disabled={loading} className="px-5 py-2 bg-brand-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex items-center gap-2 disabled:opacity-50">
            <Save className="w-4 h-4" /> {loading ? 'Saving to Database...' : 'Publish & Sync Live'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[700px]">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 bg-slate-50 border-r flex flex-col">
          <button type="button" onClick={() => setActiveTab('guide')} className={`p-4 font-bold flex items-center gap-3 transition-colors text-left ${activeTab === 'guide' ? 'bg-brand-red text-white shadow-sm' : 'text-brand-red bg-red-50 hover:bg-red-100 border-b border-red-200'}`}>
            <AlertCircle className="w-5 h-5" /> 0. SEO Master Guide
          </button>
          <button type="button" onClick={() => setActiveTab('content')} className={`p-4 font-semibold flex items-center gap-3 transition-colors text-left ${activeTab === 'content' ? 'bg-white text-brand-red border-l-4 border-brand-red shadow-sm' : 'text-slate-600 hover:bg-slate-100 border-l-4 border-transparent'}`}>
            <FileText className="w-5 h-5" /> 1. Content & Editor
          </button>
          <button type="button" onClick={() => setActiveTab('seo')} className={`p-4 font-semibold flex items-center gap-3 transition-colors text-left ${activeTab === 'seo' ? 'bg-white text-brand-red border-l-4 border-brand-red shadow-sm' : 'text-slate-600 hover:bg-slate-100 border-l-4 border-transparent'}`}>
            <BarChart className="w-5 h-5" /> 2. On-Page & Meta
          </button>
          <button type="button" onClick={() => setActiveTab('technical')} className={`p-4 font-semibold flex items-center gap-3 transition-colors text-left ${activeTab === 'technical' ? 'bg-white text-brand-red border-l-4 border-brand-red shadow-sm' : 'text-slate-600 hover:bg-slate-100 border-l-4 border-transparent'}`}>
            <Settings className="w-5 h-5" /> 3. Technical & Sitemap
          </button>
          <button type="button" onClick={() => setActiveTab('offpage')} className={`p-4 font-semibold flex items-center gap-3 transition-colors text-left ${activeTab === 'offpage' ? 'bg-white text-brand-red border-l-4 border-brand-red shadow-sm' : 'text-slate-600 hover:bg-slate-100 border-l-4 border-transparent'}`}>
            <LinkIcon className="w-5 h-5" /> 4. Off-Page (Backlinks)
          </button>
          <button type="button" onClick={() => setActiveTab('geo')} className={`p-4 font-semibold flex items-center gap-3 transition-colors text-left ${activeTab === 'geo' ? 'bg-white text-brand-red border-l-4 border-brand-red shadow-sm' : 'text-slate-600 hover:bg-slate-100 border-l-4 border-transparent'}`}>
            <MapPin className="w-5 h-5" /> 5. Geo & Local SEO
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-8 bg-white overflow-auto max-h-[800px]">
          {activeTab === 'guide' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-gradient-to-r from-brand-red/10 to-transparent border border-brand-red/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-red rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-brand-red mb-1">The Ultimate Senior SEO Masterclass 🚀</h2>
                    <p className="text-slate-700 font-bold">الدليل الشامل لاكتساح الصفحة الأولى وتدمير المنافسين في جوجل (10 قواعد ذهبية)</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Rule 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">1</span> 
                      فهم نية البحث (Search Intent) - حجر الأساس
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>جوجل لم يعد محرك بحث عن "الكلمات"، بل عن "النوايا". قبل كتابة أي حرف، اسأل نفسك: ماذا يريد الباحث؟</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>نية معلوماتية (Informational):</strong> يبحث عن "كيف أوثق شهادة ميلاد؟" - الرد يكون بخطوات مرقمة واضحة ومباشرة.</li>
                        <li><strong>نية تجارية/شرائية (Transactional):</strong> يبحث عن "مكتب ترجمة معتمدة للسفارة الأمريكية" - الرد يكون بالأسعار، سرعة التسليم، وزر طلب الخدمة (CTA) القوي.</li>
                        <li>لا تخلط بين النوايا! إذا كان يبحث عن السعر، لا تكتب له مقدمة تاريخية عن الترجمة! أعطه السعر ثم اشرح التفاصيل.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">2</span> 
                      هندسة العناوين (Heading Architecture H2, H3, H4)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>العناوين هي الهيكل العظمي للمقال. جوجل يقرأ العناوين قبل قراءة المحتوى.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>H1:</strong> يتم توليده تلقائياً من عنوان المقال. لا تستخدمه أبداً داخل المحتوى.</li>
                        <li><strong>H2:</strong> للأقسام الرئيسية للمقال (مثال: شروط ترجمة السجل التجاري، أسعار الترجمة). يجب أن يحتوي بعضها على كلمات مفتاحية مرادفة (LSI).</li>
                        <li><strong>H3:</strong> يتفرع من H2 (مثال: تحت قسم الشروط، تضع H3 للأفراد و H3 للشركات).</li>
                        <li><strong>قاعدة ذهبية:</strong> لا تستخدم العناوين (Headings) لمجرد تكبير الخط! استخدم <strong>Bold</strong> لتكبير وتوضيح النصوص العادية. العناوين تُستخدم فقط لهيكلة الأفكار.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">3</span> 
                      قاعدة الأسطر الثلاثة وتجربة القارئ (UX & Readability)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>القارئ على الإنترنت يقوم بـ "المسح البصري" (Scanning) ولا يقرأ كلمة بكلمة. إذا رأى فقرة طويلة (Wall of text) سيغادر الموقع فوراً (Bounce Rate عالي) مما يدمر ترتيبك.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>لا تجعل أي فقرة تتجاوز <strong>3 إلى 4 أسطر</strong> على الشاشة.</li>
                        <li>استخدم <strong>النص العريض (Bold)</strong> لتسليط الضوء على الكلمات والعبارات المهمة داخل الفقرة لتوجيه عين القارئ.</li>
                        <li>استخدم القوائم النقطية والرقمية بكثافة عند سرد أي شروط، أوراق مطلوبة، أو خطوات. (جوجل يحب القوائم ويستخدمها في النتيجة الصفرية Snippets).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">4</span> 
                      اقتناص النتيجة الصفرية (Featured Snippets Optimization)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>النتيجة الصفرية هي المربع الذي يظهر فوق النتيجة الأولى في جوجل. لاقتناصه:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>اطرح السؤال كعنوان (H2) صريح. مثال: "ما هي الأوراق المطلوبة لتوثيق شهادة الميلاد؟"</li>
                        <li>أجب عن السؤال مباشرة أسفل العنوان في فقرة لا تتجاوز 50 كلمة.</li>
                        <li>أو استخدم قائمة مرقمة أسفل العنوان مباشرة إذا كان السؤال عن خطوات (1. استخراج الشهادة، 2. ترجمتها، 3. توثيقها).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 5 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">5</span> 
                      استراتيجية الكلمات المفتاحية (LSI & Semantic SEO)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>حشو الكلمة المفتاحية 50 مرة سيؤدي إلى معاقبة الموقع (Keyword Stuffing). بدلاً من ذلك:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ضع الكلمة الرئيسية في العنوان (H1)، في أول 100 كلمة، وفي الـ Meta Title والـ URL Slug.</li>
                        <li>استخدم مرادفات LSI: إذا كانت كلمتك "ترجمة معتمدة"، استخدم في المقال كلمات مثل: "مكتب ترجمة"، "ترجمة رسمية"، "توثيق سفارات"، "ختم اعتماد". هذا يثبت لجوجل أنك خبير في المجال (Topical Authority).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 6 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">6</span> 
                      شبكة العنكبوت (Internal Linking Strategy)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>الروابط الداخلية تنقل القوة (Link Juice) بين صفحات الموقع وتجعل الزائر يبقى أطول.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>كل مقال <strong>يجب</strong> أن يحتوي على 3 روابط داخلية لمقالات أو خدمات أخرى ذات صلة.</li>
                        <li><strong>نص الرابط (Anchor Text):</strong> لا تكتب "اضغط هنا لمعرفة المزيد". بل اجعل الرابط على الكلمة المفتاحية ذاتها. مثال: "نقدم أفضل خدمات (ترجمة الوثائق القانونية) بأسعار تنافسية".</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 7 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">7</span> 
                      تفعيل قوة الوسائط المتعددة (Multimedia SEO)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>المقال النصي فقط ممل. المحتوى الغني هو الملك.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>استخدم زر (الصورة) في المحرر لإضافة نماذج وصور للشهادات قبل وبعد الترجمة.</li>
                        <li>استخدم زر (يوتيوب) لتضمين فيديوهات ذات صلة. مجرد تشغيل الزائر للفيديو داخل المقال يضاعف الـ Time on Page وهذا مؤشر نجاح خارق بالنسبة لجوجل.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 8 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">8</span> 
                      العنوان الوصفي الجذاب (Meta Title & Description)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>هذه هي واجهة محلك في شوارع جوجل. إذا كان العرض مملاً، لن يدخل أحد حتى لو كنت رقم 1!</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Meta Title (50-60 حرفاً):</strong> الكلمة الرئيسية + فائدة/محفز + اسم البراند. (مثال: ترجمة معتمدة للسفارات في 24 ساعة | هيرميس).</li>
                        <li><strong>Meta Description (140-160 حرفاً):</strong> اشرح باختصار شديد ما سيحصل عليه الزائر + كلمة تحفيزية CTA. (مثال: تبحث عن ترجمة دقيقة ومقبولة لدى جميع السفارات؟ اضغط هنا للتعرف على شروط وأسعار الترجمة المعتمدة واطلب تسعيرك المجاني الآن!).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 9 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">9</span> 
                      هندسة الرابط الدائم (URL Slug Optimization)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>الرابط هو أول شيء يقرؤه جوجل ليفهم سياق الصفحة.</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>الرابط يجب أن يكون <strong>دائماً باللغة الإنجليزية</strong> (أو حروف لاتينية)، حتى لو كان المقال عربياً!</li>
                        <li>اجعله قصيراً ويعبر عن الكلمة المفتاحية.</li>
                        <li>افصل بين الكلمات بـ (-) وليس مسافة أو (_). (مثال ممتاز: `certified-translation-us-embassy` | مثال سيء: `post-1234`).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rule 10 */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-100 text-brand-red flex items-center justify-center text-lg font-black">10</span> 
                      الاستهداف الجغرافي (Local SEO & Geo-Targeting)
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p>في مجال الترجمة، العميل يبحث عن مكاتب قريبة منه "مكتب ترجمة في مدينة نصر"، "ترجمة معتمدة في الدقي".</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>استخدم تبويبة <strong>Geo & Local SEO</strong> لإدخال خطوط الطول والعرض (Latitude / Longitude) للمنطقة المستهدفة.</li>
                        <li>هذا الإجراء يضع كوداً سرياً (Schema) يخبر جوجل بأن هذه الصفحة مخصصة لخدمة الزوار المتواجدين في هذا النطاق الجغرافي.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl mt-8">
                    <h3 className="font-black text-2xl text-brand-gold mb-4">🚀 المراجعة النهائية (Pre-Flight Checklist)</h3>
                    <p className="text-slate-300 mb-6">قبل أن تضغط زر "Publish & Sync Live"، تأكد من الآتي:</p>
                    <ul className="list-none space-y-3 text-lg font-medium">
                      <li className="flex items-center gap-3">✅ <span className="text-slate-200">مؤشر السيو (On-Page Score) أعلى من 80/100.</span></li>
                      <li className="flex items-center gap-3">✅ <span className="text-slate-200">وضعت عنوان المقال (H1) والـ Slug الإنجليزي.</span></li>
                      <li className="flex items-center gap-3">✅ <span className="text-slate-200">المحتوى يحتوي على H2 و H3 متسلسلة بشكل منطقي.</span></li>
                      <li className="flex items-center gap-3">✅ <span className="text-slate-200">لا توجد فقرة تتعدى الـ 4 أسطر.</span></li>
                      <li className="flex items-center gap-3">✅ <span className="text-slate-200">يوجد على الأقل رابطين داخليين مقترنين بالكلمات المفتاحية.</span></li>
                      <li className="flex items-center gap-3">✅ <span className="text-slate-200">الـ Meta Title والـ Description مكتوبان بجاذبية للعميل.</span></li>
                    </ul>
                    
                    <button type="button" onClick={() => setActiveTab('content')} className="mt-8 bg-brand-gold text-slate-900 font-black text-xl py-4 px-8 rounded-xl hover:bg-white transition-all transform hover:scale-105 w-full flex items-center justify-center gap-3 shadow-lg shadow-brand-gold/20">
                      أنا جاهز! لنبدأ كتابة مقال يكتسح جوجل 🔥
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">Title (Arabic) <span className="text-brand-red">*</span></label>
                  <input required value={titleAr} onChange={e => setTitleAr(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="عنوان المقال (مثال: شروط تصديق الشهادات)..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">Title (English) <span className="text-brand-red">*</span></label>
                  <input required value={titleEn} onChange={e => setTitleEn(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="Article Title..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1">URL Slug (Must be English) <span className="text-brand-red">*</span></label>
                <input required value={slug} onChange={e => setSlug(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white font-mono" placeholder="e.g., certificate-attestation-guide-2026" />
                <p className="text-xs text-slate-500 mt-1">Keep it short, use lowercase, separate words with hyphens (-).</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Rich Content (Arabic)</label>
                  <RichTextEditor content={contentAr} onChange={setContentAr} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">Rich Content (English)</label>
                  <RichTextEditor content={contentEn} onChange={setContentEn} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Arabic Meta */}
                <div className="space-y-6">
                  <h3 className="font-bold text-xl text-brand-red border-b pb-2">Arabic Meta Tags</h3>
                  <div>
                    <label className="flex justify-between text-sm font-bold text-slate-800 mb-1">
                      Meta Title (AR)
                      <span className={metaTitleAr.length > 60 ? 'text-red-500' : 'text-green-600'}>{metaTitleAr.length}/60</span>
                    </label>
                    <input value={metaTitleAr} onChange={e => setMetaTitleAr(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="عنوان جذاب للبحث..." />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm font-bold text-slate-800 mb-1">
                      Meta Description (AR)
                      <span className={metaDescAr.length > 160 ? 'text-red-500' : 'text-green-600'}>{metaDescAr.length}/160</span>
                    </label>
                    <textarea value={metaDescAr} onChange={e => setMetaDescAr(e.target.value)} rows={3} className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="وصف يتضمن الكلمة المفتاحية و CTA..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">Focus Keywords (AR)</label>
                    <input value={keywordsAr} onChange={e => setKeywordsAr(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="ترجمة معتمدة, توثيق الخارجية..." />
                  </div>
                </div>

                {/* English Meta */}
                <div className="space-y-6">
                  <h3 className="font-bold text-xl text-brand-red border-b pb-2">English Meta Tags</h3>
                  <div>
                    <label className="flex justify-between text-sm font-bold text-slate-800 mb-1">
                      Meta Title (EN)
                      <span className={metaTitleEn.length > 60 ? 'text-red-500' : 'text-green-600'}>{metaTitleEn.length}/60</span>
                    </label>
                    <input value={metaTitleEn} onChange={e => setMetaTitleEn(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="Catchy search title..." />
                  </div>
                  <div>
                    <label className="flex justify-between text-sm font-bold text-slate-800 mb-1">
                      Meta Description (EN)
                      <span className={metaDescEn.length > 160 ? 'text-red-500' : 'text-green-600'}>{metaDescEn.length}/160</span>
                    </label>
                    <textarea value={metaDescEn} onChange={e => setMetaDescEn(e.target.value)} rows={3} className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="Description with keyword and CTA..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">Focus Keywords (EN)</label>
                    <input value={keywordsEn} onChange={e => setKeywordsEn(e.target.value)} type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="certified translation, mfa attestation..." />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-8 animate-in fade-in">
              <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Globe className="w-5 h-5"/> Canonical & Indexing Directives</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">Canonical URL</label>
                    <input value={canonicalUrl} onChange={e => setCanonicalUrl(e.target.value)} type="url" className="w-full border-slate-300 rounded-lg p-3 outline-none bg-white" placeholder="https://hermes-certified.com/..." />
                    <p className="text-xs text-slate-500 mt-1">Leave blank to self-canonicalize. Prevents duplicate content issues.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">Robots Meta Tag</label>
                    <select value={robots} onChange={e => setRobots(e.target.value)} className="w-full border-slate-300 rounded-lg p-3 outline-none bg-white font-mono">
                      <option value="index, follow">index, follow (Default - Best for SEO)</option>
                      <option value="noindex, follow">noindex, follow</option>
                      <option value="index, nofollow">index, nofollow</option>
                      <option value="noindex, nofollow">noindex, nofollow (Hidden from Google)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold/10 p-6 rounded-xl border border-brand-gold/30">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-brand-gold"><FileText className="w-5 h-5"/> XML Sitemap Settings</h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="sitemap" checked={sitemapInclude} onChange={e => setSitemapInclude(e.target.checked)} className="w-5 h-5 accent-brand-red" />
                    <label htmlFor="sitemap" className="font-bold text-slate-800">Include in Sitemap.xml</label>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">Crawl Priority (0.0 to 1.0)</label>
                    <select value={sitemapPriority} onChange={e => setSitemapPriority(e.target.value)} className="w-full border-slate-300 rounded-lg p-3 outline-none bg-white">
                      <option value="1.0">1.0 - Extremely Important</option>
                      <option value="0.8">0.8 - High Priority (Recommended)</option>
                      <option value="0.5">0.5 - Medium Priority</option>
                      <option value="0.3">0.3 - Low Priority</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-800 mb-1">Change Frequency</label>
                    <select value={sitemapChangefreq} onChange={e => setSitemapChangefreq(e.target.value)} className="w-full border-slate-300 rounded-lg p-3 outline-none bg-white">
                      <option value="always">Always</option>
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly (Recommended)</option>
                      <option value="monthly">Monthly</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'offpage' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-100 flex gap-3">
                <LinkIcon className="w-6 h-6 shrink-0" />
                <p className="text-sm font-medium">Track your link-building campaigns here. Logging backlinks helps you correlate ranking improvements with off-page efforts.</p>
              </div>

              <div className="bg-white border rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">Add New Backlink</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Source URL</label>
                    <input value={newBacklink.url} onChange={e => setNewBacklink({...newBacklink, url: e.target.value})} type="url" className="w-full border-slate-300 rounded-lg p-2 outline-none" placeholder="https://example.com/blog/translation" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Anchor Text</label>
                    <input value={newBacklink.anchor} onChange={e => setNewBacklink({...newBacklink, anchor: e.target.value})} type="text" className="w-full border-slate-300 rounded-lg p-2 outline-none" placeholder="مكتب ترجمة معتمدة" />
                  </div>
                  <button type="button" onClick={handleAddBacklink} className="bg-slate-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors">
                    + Add Link
                  </button>
                </div>
              </div>

              <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="p-3 font-bold text-slate-700">Source URL</th>
                      <th className="p-3 font-bold text-slate-700">Anchor Text</th>
                      <th className="p-3 font-bold text-slate-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {backlinks.length === 0 ? (
                      <tr><td colSpan={3} className="p-4 text-center text-slate-500">No backlinks logged yet.</td></tr>
                    ) : backlinks.map((bl, i) => (
                      <tr key={i}>
                        <td className="p-3"><a href={bl.url} target="_blank" className="text-blue-600 hover:underline">{bl.url}</a></td>
                        <td className="p-3 font-mono bg-slate-50 rounded px-2">{bl.anchor}</td>
                        <td className="p-3"><span className="text-green-600 bg-green-50 px-2 py-1 rounded font-bold text-xs"><CheckCircle2 className="w-3 h-3 inline mr-1"/> Live</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'geo' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-100 flex gap-3">
                <MapPin className="w-6 h-6 shrink-0" />
                <p className="text-sm font-medium">Geo targeting injects specific coordinates into the page schema to boost Local SEO rankings (e.g., "Translation office near me").</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">Target Region (ISO Code)</label>
                  <input type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="EG-C" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">Latitude</label>
                  <input type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="30.0444" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-1">Longitude</label>
                  <input type="text" className="w-full border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-brand-gold/50 bg-slate-50 focus:bg-white" placeholder="31.2357" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
