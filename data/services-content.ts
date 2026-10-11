export interface ServiceCategory {
  title: { ar: string; en: string };
  items: { ar: string; en: string }[];
}

export interface TurnaroundItem {
  docType: { ar: string; en: string };
  standard: { ar: string; en: string };
  rush: { ar: string; en: string };
}

export interface ServiceFAQ {
  q: { ar: string; en: string };
  a: { ar: string; en: string };
}

export interface ServiceContent {
  slug: string;
  metaTitle: { ar: string; en: string };
  metaDesc: { ar: string; en: string };
  h1: { ar: string; en: string };
  opening: { ar: string; en: string };
  definitionTitle: { ar: string; en: string };
  definitionText: { ar: string; en: string };
  needTitle: { ar: string; en: string };
  needText: { ar: string; en: string };
  documentsSectionTitle: { ar: string; en: string };
  categories: ServiceCategory[];
  specialistWhyPoint: { ar: string; en: string };
  turnaroundTable: TurnaroundItem[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  extendedContent?: {
    legalStandards?: { title: { ar: string; en: string }; body: { ar: string; en: string } };
    embassiesCompliance?: { title: { ar: string; en: string }; items: { name: { ar: string; en: string }; desc: { ar: string; en: string } }[] };
    prepGuidelines?: { title: { ar: string; en: string }; items: { ar: string; en: string }[] };
  };
}

export const servicesContent: Record<string, ServiceContent> = {
  'embassy-translation': {
    slug: 'embassy-translation',
    metaTitle: {
      ar: 'ترجمة معتمدة للسفارات والجهات الحكومية في مصر | هيرمس',
      en: 'Certified Embassy Translation Services Cairo & Giza | Hermes'
    },
    metaDesc: {
      ar: 'مكتب ترجمة معتمد للسفارات (شنغن، أمريكا، بريطانيا، كندا). دقة قانونية معتمدة، مطابقة لشروط القنصليات، وتسليم فوري بمصر الجديدة والجيزة. اطلب عرض سعرك الآن.',
      en: 'Accredited certified translation for US, UK, Canada & Schengen embassies in Cairo & Giza. 100% consular compliance, fast turnaround & verified accuracy. Get a quote.'
    },
    h1: {
      ar: 'الترجمة المعتمدة للسفارات والجهات الحكومية في مصر | معايير الاعتماد والقبول الدولي',
      en: 'Certified Translation Services for Embassies and Consulates in Egypt | Official Acceptance & Legal Compliance'
    },
    opening: {
      ar: 'تُعد مرحلة تقديم المستندات الرسمية إلى السفارات والقنصليات الأجنبية والجهات الحكومية الدولية الخطوة المحورية في معاملات التأشيرات، الهجرة، لمّ الشمل، العمل، والدراسة بالخارج. في مكتب هيرمس للترجمة المعتمدة (Hermes Certified Translations)، ندرك أن ورقة واحدة مترجمة بشكل غير دقيق أو غير مستوفية للمعايير الشكلية والقانونية قد تؤدي إلى رفض المعاملة القنصلية، تعطيل السفر، أو تكبيد صاحب الشأن أعباء مالية وإدارية إضافية. نقدم في فرعينا بمصر الجديدة وميدان الجيزة، وكذلك عبر منصتنا الرقمية المباشرة، خدمة ترجمة معتمدة شاملة تغطي كافة متطلبات الهيئات الدبلوماسية المعتمدة في جمهورية مصر العربية، مع الالتزام الحرفي بالدقة اللغوية، الصياغة القانونية الرصينة، والسرية التامة للبيانات الشخصية والمؤسسية.',
      en: 'Submitting official records, personal certificates, and commercial documentation to foreign embassies, consulates, and international regulatory authorities is the most critical milestone in your visa application, migration process, academic enrollment, or cross-border business expansion. At Hermes Certified Translations, we recognize that a minor typographical discrepancy, unverified legal terminology, or an improperly formatted translator declaration can lead to consular delays, administrative rejections, or unexpected procedural expenses. Operating from our primary offices in Heliopolis and Giza Square, Hermes delivers accredited, professional, and audit-compliant certified translations accepted across diplomatic missions, ministries, and judicial authorities in Cairo and internationally.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة المعتمدة للسفارات؟ وما الفرق بينها وبين الترجمة العادية والمحلفة؟',
      en: 'What is Certified Translation? Standards, Legal Declarations, and Consular Recognition'
    },
    definitionText: {
      ar: 'تختلف الترجمة المعتمدة (Certified Translation) جوهرياً عن الترجمة التحريرية العادية أو الترجمات التجارية غير الرسمية؛ فالترجمة المعتمدة وثيقة قانونية ذات حجية رسمية أمام البعثات الدبلوماسية والجهات القضائية، وتستلزم عناصر شكلية وموضوعية محددة: (1) مطابقة تامة ودقيقة للنص الأصلي بما في ذلك الأرقام والهوامش والأختام والتوقيعات، (2) إقرار رسمي بصحة ومطابقة الترجمة (Statement of Accuracy) موقع من المترجم المعتمد، (3) الختم الرسمي وتوقيع مكتب الترجمة المعتمد ببياناته وسجله التجاري والضريبي، و(4) تاريخ الترجمة ورقم مرجعي للملف لتسهيل الاستعلام والتحقق القنصلي.',
      en: 'A Certified Translation is fundamentally distinct from standard commercial or literary translation. It is an official legal record bearing legal accountability before consular officers, visa processing centres, and government bodies. An official translation must fulfill distinct structural and formal criteria: (1) Verbatim and faithful reproduction of all original content including stamps, seals, marginal notes, and signatures, (2) A formal Statement of Accuracy executed on official letterhead by a qualified translator, (3) The official seal, commercial registration details, and tax identification code of the accredited bureau, and (4) A traceable reference number and date of issuance for seamless consular verification.'
    },
    needTitle: {
      ar: 'متى تحتاج إلى خدمة الترجمة المعتمدة للسفارات؟',
      en: 'When Do You Require Embassy-Certified Translations?'
    },
    needText: {
      ar: 'يحتاج المواطنون والمقيمون في مصر إلى الترجمة المعتمدة عند مخاطبة أية جهة رسمية تتحدث لغة مختلفة عن لغة المستند، وأبرز هذه الحالات: (1) طلبات تأشيرات السفر والسياحة والزيارة وخاصة تأشيرات دول منطقة شنغن (Schengen Visa)، والمملكة المتحدة (UKVI)، والولايات المتحدة الأمريكية (B1/B2)، وكندا وأستراليا، (2) معاملات الهجرة والإقامة الدائمة مثل Express Entry لكندا وبرامج USCIS لأمريكا، (3) التقديم للمنح والجامعات الدولية ومعادلة الشهادات (WES, uni-assist)، (4) عقود العمل وتأشيرات التوظيف الدولي وخطابات الموارد البشرية (HR Letters)، و(5) توثيق العلاقات الأسرية والأحوال الشخصية كالزواج المدني في الخارج ولمّ الشمل.',
      en: 'Expatriates, international travelers, Egyptian citizens, and corporate entities require certified translations whenever engaging with foreign jurisdictions. Primary use cases include: (1) Schengen and European visa submissions via VFS Global, TLScontact, and BLS International, (2) Immigration, citizenship, and permanent residency dossiers for Canada (IRCC), USA (USCIS), and Australia, (3) International higher education admissions and academic credentials evaluation (WES, ECFMG, uni-assist), (4) Cross-border employment agreements, HR letters, and corporate transfers, and (5) Civil status, family reunification, foreign marriage registration, and inheritance procedures.'
    },
    documentsSectionTitle: {
      ar: 'الوثائق والمستندات التي نترجمها للسفارات والهيئات الرسمية',
      en: 'Document Categories Covered for Official Embassies and Public Bodies'
    },
    categories: [
      {
        title: { ar: 'وثائق الأحوال المدنية والشخصية', en: 'Civil Status & Vital Records' },
        items: [
          { ar: 'شهادات الميلاد والوفاة وقيد الزواج وإشهاد الطلاق', en: 'Birth, death, marriage, and divorce certificates' },
          { ar: 'القيد العائلي المميكن والقيد الفردي الصادر من مصلحة الأحوال المدنية', en: 'Official family registration records and individual civil records' },
          { ar: 'بطاقات الرقم القومي المصرية وجوازات السفر وإثباتات الهوية', en: 'National identity cards, passports, and civil identification records' }
        ]
      },
      {
        title: { ar: 'المستندات الجنائية والخدمة العسكرية', en: 'Criminal & Military Records' },
        items: [
          { ar: 'صحيفة الحالة الجنائية (الفيش والتشبيه) المميكنة للسفارات', en: 'Police clearance certificates (Criminal Status Records)' },
          { ar: 'شهادات إنهاء الخدمة العسكرية أو الإعفاء النهائي أو المؤقت', en: 'Military service completion and exemption certificates' },
          { ar: 'شهادات التحركات الصادرة من الإدارة العامة للجوازات والهجرة', en: 'Travel movement certificates issued by passport authorities' }
        ]
      },
      {
        title: { ar: 'المستندات المالية والبنكية', en: 'Financial & Banking Records' },
        items: [
          { ar: 'كشوف الحسابات البنكية لآخر 3-6 أشهر لحركة الأموال والودائع', en: 'Bank statements (3-6 months) showing transactions and balances' },
          { ar: 'خطابات الملاءة المالية والودائع والأوعية الادخارية والشهادات الاستثمارية', en: 'Bank solvency letters, certificates of deposit, and asset confirmations' },
          { ar: 'عقود الملكية للأراضي والعقارات ورخص السيارات', en: 'Real estate title deeds, property ownership contracts, and vehicle licenses' }
        ]
      },
      {
        title: { ar: 'المستندات المهنية وخطابات العمل', en: 'Employment & Corporate Records' },
        items: [
          { ar: 'خطابات العمل والموارد البشرية (HR Letters) وبيانات مفردات المرتب', en: 'HR employment verification letters and salary certificates' },
          { ar: 'عقود العمل الفردية وبرنت التأمينات الاجتماعية المعتمد', en: 'Employment contracts and official social insurance printouts' },
          { ar: 'السجلات التجارية والبطاقات الضريبية المعتمدة لرجال الأعمال والشركات', en: 'Commercial registers, tax cards, and corporate licenses' }
        ]
      },
      {
        title: { ar: 'المستندات الأكاديمية والجامعية', en: 'Academic & University Credentials' },
        items: [
          { ar: 'شهادات التخرج الجامعية والمؤهلات الدراسية والدبلومات', en: 'University graduation certificates, degrees, and diplomas' },
          { ar: 'بيانات الدرجات وكشوف العلامات الأكاديمية والمحتوى العلمي', en: 'Official academic transcripts, grade reports, and course descriptions' },
          { ar: 'شهادات الثانوية العامة وما يعادلها والشهادات المدرسية', en: 'General Secondary Education Certificates (Thanaweya Amma) and school diplomas' }
        ]
      },
      {
        title: { ar: 'المستندات القضائية والتوكيلات القانونية', en: 'Judicial & Notary Records' },
        items: [
          { ar: 'التوكيلات الرسمية العامة والخاصة وتوكيلات القضايا وتوكيلات البنوك', en: 'General and special powers of attorney (POAs) and notary deeds' },
          { ar: 'أحكام المحاكم وإعلامات الوراثة والدعاوى القضائية المشهرة', en: 'Court rulings, probate distribution deeds, and judicial claims' },
          { ar: 'عقود الشركات والنظم الأساسية ومحاضر الجمعيات العمومية', en: 'Articles of incorporation, company statutes, and board minutes' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'خبرة تراكمية متخصصة في الاشتراطات القنصلية المعمول بها في القاهرة والجيزة. يلتزم فريقنا بنظام تدقيق ثنائي صارم (Dual-Proofreading) يضمن مطابقة الأسماء حرفياً لجوازات السفر، مع توفير ختم الاعتماد الرسمي وإقرار المسؤولية القانونية المقبول لدى كافة السفارات والجهات الدولية دون تأخير أو ارتداد.',
      en: 'Decades of combined consular translation expertise in Cairo and Giza. Our multi-tiered quality control enforces dual-linguist proofreading, verbatim passport name matching, and official certification endorsements trusted by all diplomatic missions and global authorities with zero margin for consular rejection.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات الأحوال المدنية (ميلاد / زواج / قيد عائلي / فيش)', en: 'Civil Certificates (Birth / Marriage / Family Registry / Police Record)' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '3 - 4 ساعات (خدمة فورية عاجلة)', en: '3 - 4 Hours (Express Rush)' }
      },
      {
        docType: { ar: 'كشوف الحسابات البنكية وخطابات الموارد البشرية (HR Letter)', en: 'Bank Statements & Employment Letters (HR Letters)' },
        standard: { ar: '24 - 48 ساعة عمل', en: '24 - 48 Business Hours' },
        rush: { ar: 'نفس اليوم (خلال ساعات الدوام)', en: 'Same-Day Delivery' }
      },
      {
        docType: { ar: 'مستندات الشركات (سجل تجاري / بطاقة ضريبية / عقود تأسيس)', en: 'Corporate Documents (Commercial Register / Tax Card / By-Laws)' },
        standard: { ar: '48 ساعة عمل', en: '48 Business Hours' },
        rush: { ar: '24 ساعة عمل', en: '24 Business Hours' }
      },
      {
        docType: { ar: 'الشهادات والبيانات الأكاديمية وقضايا المحاكم والتوكيلات', en: 'Academic Transcripts, Judicial Rulings & Powers of Attorney' },
        standard: { ar: '48 - 72 ساعة عمل', en: '48 - 72 Business Hours' },
        rush: { ar: '24 - 36 ساعة عمل', en: '24 - 36 Business Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل الترجمة الصادرة من هيرمس مقبولة لدى سفارات شنغن والسفارة الأمريكية والبريطانية؟', en: 'Are Hermes certified translations accepted by Schengen, US, UK, and Canadian embassies?' },
        a: {
          ar: 'نعم بكل تأكيد. تصدر ترجماتنا مستوفية لكافة المعايير الشكلية والموضوعية المنشورة من قبل سفارات دول منطقة شنغن، وسفارة الولايات المتحدة (USCIS)، والمملكة المتحدة (UKVI)، وكندا، وكافة البعثات الدبلوماسية المعتمدة في جمهورية مصر العربية، شاملة إقرار المطابقة والختم الرسمي ورقم الملف المرجعي.',
          en: 'Yes, absolutely. Our translations strictly adhere to published formal and legal guidelines of all Schengen embassies, the US Embassy (USCIS), UKVI (UK Home Office), IRCC (Canada), and all accredited diplomatic missions in Egypt, complete with statements of accuracy, official seals, and verifiable reference numbers.'
        }
      },
      {
        q: { ar: 'هل يلزم إحضار أصل المستند إلى المكتب أم تكفي الصورة الضوئية؟', en: 'Do I need to submit the original document at your branch, or is a scanned copy sufficient?' },
        a: {
          ar: 'لبدء عملية الترجمة والتدقيق والاعتماد، تكفي تماماً صورة ضوئية (Scan) أو صورة واضحة بكاميرا الهاتف مرسلة عبر واتساب أو نموذج الموقع. وتذكر دائماً أن السفارة ستطلب منك إحضار أصل المستند لمطابقته أثناء مقابلتك الشخصية أو تسليم الملف بمركز التأشيرات.',
          en: 'For translation execution, quality review, and certification, a high-resolution scan or clear smartphone photograph sent via WhatsApp or our secure online portal is entirely sufficient. However, remember that embassies typically require you to present the original hard-copy document during your visa appointment.'
        }
      },
      {
        q: { ar: 'ما الفرق بين الترجمة المعتمدة وتصديق وزارة الخارجية المصرية؟', en: 'What is the difference between a certified translation and Ministry of Foreign Affairs (MFA) attestation?' },
        a: {
          ar: 'تصديق وزارة الخارجية هو إجراء حكومي يُثبت صحة توقيع وختم الموظف الحكومي المصري على أصل المستند. أما الترجمة المعتمدة فهي نقل محتوى المستند المصدق إلى لغة السفارة مع إقرار قانوني وختم مكتب ترجمة معتمد. بعض السفارات تشترط تصديق الخارجية قبل الترجمة، وفريقنا يوجهك للترتيب الإجرائي الصحيح.',
          en: 'MFA attestation authenticates the official signature and governmental seal on your original public record. Certified translation renders that authenticated instrument into the target foreign language, accompanied by legal certification endorsements and bureau seals. Certain embassies require MFA attestation prior to translation, and our team provides guidance on exact sequence requirements.'
        }
      },
      {
        q: { ar: 'كيف تضمنون مطابقة الأسماء لجوازات السفر بدقة تامة؟', en: 'How do you guarantee that personal names match travel passports precisely?' },
        a: {
          ar: 'نلزم فريقنا بالحصول على صورة من جواز السفر لكل شخص مذكور في الوثائق قبل البدء في الترجمة؛ ونقوم بتطبيق هجاء الحروف حرفياً كما هو مدون في جواز السفر لتفادي أي خطأ إملائي قد يؤدي لرفض المعاملة القنصلية.',
          en: 'We mandate the submission of passport biodata pages for all individuals named in the documents. Our linguists duplicate passport transliterations letter for letter, preventing typographical discrepancies that could lead to consular complications.'
        }
      },
      {
        q: { ar: 'كيف يمكنني استلام أوراقي المترجمة والمعتمدة؟', en: 'How do I receive my completed and stamped certified translations?' },
        a: {
          ar: 'يمكنك استلام النسخ الورقية الرسمية المختومة من فرعنا بمصر الجديدة (عمارات العبور بجوار مترو أرض المعارض) أو فرعنا بميدان الجيزة (عمارة عمر أفندي)، أو طلب الشحن السريع للمنازل والشركات بجميع المحافظات، مع إرسال نسخة رقمية عالية الدقة PDF فور الانتهاء.',
          en: 'You can collect official stamped hard copies directly from our Heliopolis branch (El-Obour Bldgs by Fair Zone Metro) or our Giza branch (Omar Effendi Bldg, Giza Square), or request express courier delivery to any address across Egypt, alongside instant high-res digital PDF delivery.'
        }
      },
      {
        q: { ar: 'كيف يتم احتساب تكلفة وسعر الترجمة المعتمدة؟', en: 'How is the certified translation cost calculated?' },
        a: {
          ar: 'تُحسب التكلفة بشفافية تامة بناءً على عدد الصفحات الرسمية، واللغة المستهدفة، ونوع المستند وتخصصه، وسرعة التسليم المطلوبة (عادية أم عاجلة)، بدون أي مصاريف إدارية مخفية، مع توفير أسعار تفضيلية للملفات الكبيرة وحزم التأشيرات العائلية.',
          en: 'Pricing is transparently calculated based on official page count, target language, subject-matter complexity, and turnaround speed (standard vs express), with no hidden administrative fees and volume rates available for comprehensive family and corporate visa dossiers.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'المعايير القانونية والشكلية للترجمة المعتمدة المعترف بها دولياً',
          en: 'International Consular & Legal Recognition Standards'
        },
        body: {
          ar: 'لكي تكون الترجمة معتمدة رسمياً أمام القنصليات ومراكز التأشيرات المعتمدة (VFS Global, TLScontact, BLS International)، يجب أن تستوفي أربعة معايير لا تقبل التهاون: أولاً، إقرار خطي رسمي من المترجم المعتمد بمسؤوليته القانونية عن صحة الترجمة ومطابقتها التامة للأصل. ثانياً، خاتم مكتب الترجمة المعتمد متضمناً الاسم التجاري والرقم الضريبي ورقم القيد. ثالثاً، إثبات تاريخ الإصدار ورقم مرجعي للملف في الأرشيف لتمكين القنصلية من التحقق الفوري. رابعاً، نقل كامل ودقيق لكافة الحواشي والأختام والتوقيعات المنقوشة على المستند الأصلي دون اجتهاد أو حذف.',
          en: 'To achieve official recognition by foreign consulates and visa processing contractors (such as VFS Global, TLScontact, and BLS International), certified translations must comply with four inviolable benchmarks: First, an explicit written Declaration of Accuracy holding professional legal liability for verbatim textual equivalence. Second, an official corporate seal bearing commercial registry and tax identification credentials. Third, an issuance date and traceable archival reference number facilitating swift consular audit. Fourth, exhaustive, verbatim reproduction of all marginal endorsements, revenue stamps, circular seals, and signatures with zero unauthorized omissions.'
        }
      },
      embassiesCompliance: {
        title: {
          ar: 'تغطية شاملة لاشتراطات البعثات الدبلوماسية الكبرى في مصر',
          en: 'Comprehensive Compliance with Major Diplomatic Missions in Egypt'
        },
        items: [
          {
            name: { ar: 'سفارات دول منطقة شنغن الأوروبية', en: 'European Schengen Member States' },
            desc: {
              ar: 'تغطية معتمدة للغات الإنجليزية والفرنسية والألمانية والإيطالية والإسبانية والهولندية وفقاً لكتيبات الاشتراطات القنصلية لمراكز التأشيرات (فرنسا، ألمانيا، إيطاليا، إسبانيا، هولندا، سويسرا، السويد، النمسا، اليونان، وغيرها).',
              en: 'Full compliance in English, French, German, Italian, Spanish, and Dutch aligned with official visa guidelines for France, Germany, Italy, Spain, Netherlands, Switzerland, Sweden, Austria, Greece, and all Schengen missions.'
            }
          },
          {
            name: { ar: 'سفارة الولايات المتحدة الأمريكية بالقاهرة (US Embassy)', en: 'Embassy of the United States in Cairo' },
            desc: {
              ar: 'مطابقة تامة لتعليمات دائرة الهجرة والجنسية الأمريكية (USCIS) ومكتب الشؤون القنصلية، شاملة إقرار الترجمة القانوني باللغة الإنجليزية وتنسيق الصفحات المماثل للأصل.',
              en: 'Strict compliance with U.S. Citizenship and Immigration Services (USCIS) and Department of State standards, complete with English certification statements and mirror page layouts.'
            }
          },
          {
            name: { ar: 'سفارة المملكة المتحدة (UKVI - Home Office)', en: 'United Kingdom Visas & Immigration (UKVI)' },
            desc: {
              ar: 'استيفاء الشروط الصارمة للحكومة البريطانية: بيان المترجم المعتمد، إثبات المطابقة، بيانات التواصل، والتاريخ الرسمي، المقبولة لدى VFS Global بالقاهرة والإسكندرية.',
              en: 'Comprehensive alignment with UK Home Office requirements: verified certified translator credentials, contact details, date, and accuracy declaration accepted by VFS Global.'
            }
          },
          {
            name: { ar: 'سفارة كندا بالقاهرة ودائرة الهجرة (IRCC)', en: 'Embassy of Canada & IRCC Immigration' },
            desc: {
              ar: 'اعتماد رسمي للغتي كندا الرسميتين (الإنجليزية والفرنسية) لملفات الهجرة السريعة (Express Entry)، وتأشيرات الدراسة والعمل ولمّ الشمل.',
              en: 'Official translation in Canada’s dual official languages (English & French) for Express Entry, study permits, work visas, and family sponsorship.'
            }
          },
          {
            name: { ar: 'سفارات دول الخليج والملحقيات الثقافية والتجارية', en: 'GCC Embassies & Arab Diplomatic Missions' },
            desc: {
              ar: 'ترجمة معتمدة مطابقة لاشتراطات سفارات السعودية والإمارات وقطر والكويت وسلطنة عمان، متوافقة مع متطلبات الملحقيات الثقافية والتصديقات التجارية.',
              en: 'Certified translations aligned with Saudi Arabia, UAE, Qatar, Kuwait, and Oman embassy criteria, catering to cultural attachés, commercial attestations, and employment visas.'
            }
          }
        ]
      },
      prepGuidelines: {
        title: {
          ar: 'إرشادات هامة يجب مراعاتها قبل تقديم مستنداتك للترجمة المعتمدة',
          en: 'Essential Preparation Guidelines Before Submitting Records for Translation'
        },
        items: [
          {
            ar: 'تأكد من وضوح كافة الأختام والتوقيعات: احرص على أن تكون الصورة الضوئية شاملة لكامل حواف الصفحة مع ظهور أختام النسر والتصديقات الخلفية بوضوح تام.',
            en: 'Ensure complete legibility of all seals and marginal notes: provide full-bleed scans showing circular official seals and reverse-side endorsements.'
          },
          {
            ar: 'مراجعة الحاجة لتصديق الخارجية: تشترط بعض السفارات تصديق المستند الأصلي لدى مكاتب تصديقات وزارة الخارجية المصرية قبل ترجمته؛ يرجى مراجعة فريقنا للتوجيه الصحيح.',
            en: 'Verify MFA attestation prerequisites: several European embassies require original certificates to bear fresh Egyptian Ministry of Foreign Affairs seals prior to translation.'
          },
          {
            ar: 'إرفاق صورة جواز السفر: أرسل دائماً صورة من الصفحة الأولى لجواز السفر لكل شخص مذكور في الوثائق لضمان تطابق الحروف الإنجليزية بنسبة 100%.',
            en: 'Always provide passport biodata copies: ensure personal names for all applicants and family members are transliterated identically to international travel documents.'
          },
          {
            ar: 'مراعاة فترة صلاحية المستندات: تنص لوائح العديد من السفارات على ألا تتجاوز مدة إصدار القيد العائلي أو صحيفة الحالة الجنائية 3 إلى 6 أشهر كحد أقصى.',
            en: 'Monitor document expiration windows: keep in mind that consular regulations frequently mandate that police records and family certificates be issued within the last 3-6 months.'
          }
        ]
      }
    },
    relatedServices: ['legal-translation', 'personal-documents', 'commercial-translation', 'academic-documents']
  },
    'legal-translation': {
    slug: 'legal-translation',
    metaTitle: {
      ar: 'ترجمة قانونية معتمدة في مصر | عقود، أحكام، وتوكيلات | هيرمس',
      en: 'Certified Legal Translation Cairo & Giza | Contracts & Court Rulings | Hermes'
    },
    metaDesc: {
      ar: 'مكتب ترجمة قانونية معتمد للمحامين والشركات. ترجمة العقود، الأحكام القضائية، التوكيلات، ومستندات التحكيم بدقة تشريعية متناهية. فرعا مصر الجديدة والجيزة.',
      en: 'Accredited legal translation bureau in Egypt for law firms & corporations. Verbatim accuracy for contracts, court judgments, POAs & arbitration dossiers.'
    },
    h1: {
      ar: 'الترجمة القانونية المعتمدة في مصر | صياغة العقود والتوكيلات والأحكام القضائية',
      en: 'Certified Legal Translation Services in Egypt | Contracts, POAs & Court Rulings'
    },
    opening: {
      ar: 'تمثل الترجمة القانونية الركيزة الأساسية لحماية الحقوق والمصالح التعاقدية والتجارية للأفراد والمؤسسات والشركات متعددة الجنسيات. في مكتب هيرمس للترجمة المعتمدة، ندرك أن الكلمة الواحدة في النص القانوني قد تغير التكييف القضائي للالتزام، أو تحسم نزاعاً تحكيمياً بملايين الجنيهات. لذلك، نوفر فريقاً نخبوياً من المترجمين القانونيين ذوي الخلفية التشريعية المتخصصة، لترجمة ومراجعة العقود، الأحكام القضائية، توكيلات الشهر العقاري، والنزاعات التجارية بأعلى درجات الانضباط المصطلحي والسرية المهنية.',
      en: 'Legal translation serves as the critical safeguard for contractual rights, litigation standing, and cross-border commercial transactions. At Hermes Certified Translations, we maintain an elite division of specialized legal linguists with proven jurisprudence backgrounds to deliver verifiable, compliant translations of contracts, judicial verdicts, powers of attorney, and corporate disputes with absolute confidentiality.'
    },
    definitionTitle: {
      ar: 'ما هي معايير الترجمة القانونية المعتمدة؟',
      en: 'Standards of Certified Legal Translation'
    },
    definitionText: {
      ar: 'الترجمة القانونية هي فرع تخصصي بالغ الدقة يُعنى بنقل النصوص التشريعية والتعاقدية والقضائية من نظام قانوني إلى آخر (مثل المقارنة بين القانون المدني Civil Law والقانون العام الأنجلوسكسوني Common Law). تتطلب هذه الخدمة صياغة محكمة خالية من اللبس، حفظ الشروط الإلزامية والجزائية، استيفاء الصياغات التوثيقية المعتمدة من الشهر العقاري والمحاكم، ومهور كل صفحة بختم مكتب ترجمة معتمد وإقرار رسمي بصحة ومطابقة النص للأصل.',
      en: 'Legal translation is a highly specialized discipline bridging distinct legal jurisdictions (such as Civil Law and Common Law systems). It demands unambiguous contractual precision, faithful preservation of penalty and indemnity clauses, verified notary terminology, and formal authentication by an accredited translation office complete with corporate seals and signed declarations of legal accuracy.'
    },
    needTitle: {
      ar: 'متى تحتاج إلى الترجمة القانونية المعتمدة؟',
      en: 'When Do You Require Certified Legal Translation?'
    },
    needText: {
      ar: 'تعد الترجمة القانونية ضرورة لا غنى عنها في حالات متعددة: (1) الترافع وتقديم المستندات الأجنبية أمام المحاكم المصرية بدرجاتها وهيئات التحكيم (CRCICA)، (2) إبرام اتفاقيات الشراكة والاندماج والاستحواذ مع كيانات دولية، (3) توثيق التوكيلات العامة والخاصة وتوكيلات البنوك والقضايا المتبادلة بين مصر والخارج، (4) إثبات الملكيات وبراءات الاختراع والنزاعات العمالية، و(5) تأسيس الفروع الأجنبية وصياغة اللوائح والاتفاقيات التجارية الإلزامية.',
      en: 'Certified legal translation is indispensable when: (1) Submitting foreign exhibits before Egyptian courts and international arbitration panels (CRCICA, ICC), (2) Structuring cross-border mergers, acquisitions, and joint venture pacts, (3) Notarizing reciprocal general and special POAs between Egyptian and overseas registries, (4) Prosecuting patent, trademark, and employment disputes, and (5) Incorporating foreign company branches and executing statutory governance policies.'
    },
    documentsSectionTitle: {
      ar: 'فئات المستندات القانونية التي نترجمها ونعتمدها',
      en: 'Legal Document Categories We Translate & Certify'
    },
    categories: [
      {
        title: { ar: 'العقود والاتفاقيات التجارية', en: 'Contracts & Commercial Agreements' },
        items: [
          { ar: 'عقود التوريد والخدمات والاتفاقيات الإطارية (SLA / Master Agreements)', en: 'Supply contracts, service agreements, and master frameworks' },
          { ar: 'اتفاقيات عدم الإفصاح والسرية (NDA) واتفاقيات الشراكة (JV)', en: 'Non-disclosure agreements (NDAs) and joint venture contracts' },
          { ar: 'عقود البيع والسمسرة والإيجار والوكالات التجارية الحصرية', en: 'Sales, brokerage, lease, and exclusive agency agreements' }
        ]
      },
      {
        title: { ar: 'التوكيلات وتوثيقات الشهر العقاري', en: 'Powers of Attorney & Notary Deeds' },
        items: [
          { ar: 'التوكيلات الرسمية العامة والخاصة وتوكيلات القضايا الموثقة', en: 'General and special powers of attorney and litigation POAs' },
          { ar: 'توكيلات البنوك وإدارة الحسابات ورهن العقارات وإثبات التاريخ', en: 'Banking POAs, mortgage contracts, and certified date registries' },
          { ar: 'إقرارات التنازل والتصالح المعتمدة أمام مكاتب التوثيق', en: 'Official waivers, settlement deeds, and reconciliation instruments' }
        ]
      },
      {
        title: { ar: 'الأحكام القضائية وأوراق المحاكم', en: 'Judicial Rulings & Court Filings' },
        items: [
          { ar: 'أحكام محاكم الاستئناف والنقض والأحكام الابتدائية بالصيغة التنفيذية', en: 'Enforceable appellate, cassation, and first-instance court judgments' },
          { ar: 'صحف الدعاوى ومذكرات الدفاع وتقارير الخبراء والطعون', en: 'Statements of claim, defense briefs, expert reports, and appeals' },
          { ar: 'إعلانات المحضرين وإنذارات على يد محضر وأوامر الأداء القضائية', en: 'Bailiff service notices, formal legal warnings, and payment orders' }
        ]
      },
      {
        title: { ar: 'التحكيم الدولي والنزاعات التجارية', en: 'Arbitration & Cross-Border Disputes' },
        items: [
          { ar: 'مشارطات التحكيم وبنود تسوية النزاعات المتفق عليها', en: 'Arbitration submission agreements and dispute escalation clauses' },
          { ar: 'مذكرات ومستندات التحكيم لدى مركز القاهرة الإقليمي (CRCICA)', en: 'Arbitration memorials and exhibits before regional and international centers' },
          { ar: 'قرارات التحكيم النهائية وإجراءات تذييلها بالصيغة التنفيذية', en: 'Final arbitral awards and local judicial enforcement proceedings' }
        ]
      },
      {
        title: { ar: 'الأحوال الشخصية والتركات والوصايا', en: 'Probate, Wills & Family Law' },
        items: [
          { ar: 'إعلامات الوراثة الشرعية وحصر التركات وقسمة الأموال المشاعة', en: 'Islamic probate decrees, estate inventories, and inheritance deeds' },
          { ar: 'الوصايا الموثقة وأحكام النفقة والحضانة والوصاية على القُصّر', en: 'Notarized wills, alimony rulings, and child guardianship orders' },
          { ar: 'وثائق ومراسيم الزواج والطلاق المدني وأحكام إثبات النسب', en: 'Civil marriage certificates, divorce decrees, and paternity judgments' }
        ]
      },
      {
        title: { ar: 'الملكية الفكرية والتنظيمية', en: 'Intellectual Property & Corporate Policies' },
        items: [
          { ar: 'شهادات تسجيل العلامات التجارية وبراءات الاختراع والنماذج الصناعية', en: 'Trademark registration certificates, patent filings, and industrial designs' },
          { ar: 'لوائح حوكمة الشركات ودليل السياسات الداخلية ولوائح العمل', en: 'Corporate governance charters, compliance manuals, and labor bylaws' },
          { ar: 'تراخيص الاستخدام البرمجي وحقوق الملكية الأدبية والفنية', en: 'Software licensing agreements, copyright transfers, and franchise deeds' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'يقوم على ترجمة ملفاتك القانونية مستشارون ومترجمون متخصصون في القانون المقارن وصياغة العقود. نضمن مطابقة المصطلحات اللاتينية والتشريعية المعتمدة، مع صيانة تامة لسرية البيانات بموجب اتفاقيات سرية (NDA) صارمة لكل عميل.',
      en: 'Our legal division is directed by legal linguists with dedicated comparative jurisprudence backgrounds. We ensure flawless terminology concordance across Civil and Common law traditions, protected by ironclad non-disclosure protocols.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'التوكيلات الرسمية وإقرارات الشهر العقاري', en: 'Powers of Attorney & Notarized Declarations' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '3 - 5 ساعات', en: '3 - 5 Hours' }
      },
      {
        docType: { ar: 'العقود والاتفاقيات التجارية (حتى 15 صفحة)', en: 'Contracts & Commercial Agreements (Up to 15 pages)' },
        standard: { ar: '48 ساعة عمل', en: '48 Business Hours' },
        rush: { ar: 'نفس اليوم (خلال ساعات العمل)', en: 'Same-Day Service' }
      },
      {
        docType: { ar: 'الأحكام القضائية ومذكرات التحكيم المطولة', en: 'Court Judgments & Extended Arbitration Briefs' },
        standard: { ar: '3 - 5 أيام عمل', en: '3 - 5 Business Days' },
        rush: { ar: '48 ساعة عمل', en: '48 Business Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل تعتمد المحاكم المصرية والنيابات ترجماتكم القانونية؟', en: 'Are your legal translations accepted by Egyptian courts and prosecutors?' },
        a: {
          ar: 'نعم، تصدر ترجماتنا القانونية مطابقة للاشتراطات المعتمدة، وممهورة بالختم الرسمي وإقرار المسؤولية لمكتب الترجمة المعتمد، مما يمنحها الحجية الرسمية أمام المحاكم وخبراء وزارة العدل وهيئات التحكيم.',
          en: 'Yes. Our legal translations strictly fulfill judicial requirements, carrying accredited bureau seals and declarations of accuracy required by courts, Ministry of Justice panels, and arbitration tribunals.'
        }
      },
      {
        q: { ar: 'كيف تضمنون سرية مستندات العقود وقضايا النزاع الحساسة؟', en: 'How do you guarantee confidentiality for sensitive contracts and disputes?' },
        a: {
          ar: 'نوقع اتفاقيات سرية معلومات ملزمة (NDA) مع كبار العملاء والشركات ومكاتب المحاماة، وتتم معالجة المستندات عبر بيئة تخزين مشفرة مع حصر الاطلاع على المترجم والمراجع المعنيين فقط.',
          en: 'We execute binding Non-Disclosure Agreements (NDAs) with corporate clients and law firms, processing all files within encrypted environments accessible strictly by assigned linguists.'
        }
      },
      {
        q: { ar: 'ما الفرق بين المصطلحات القانونية في القانون المصري والأنظمة الأجنبية؟', en: 'How do you navigate differences between Egyptian law and foreign legal concepts?' },
        a: {
          ar: 'يعتمد فريقنا منهجية القانون المقارن (Comparative Jurisprudence)، حيث يتم اختيار المصطلح الإنجليزي أو الفرنسي المكافئ وظيفياً وقانونياً للنص المصري، مع وضع هوامش توضيحية احترافية عند الضرورة لتفادي أي لبس قضائي.',
          en: 'Our linguists apply functional comparative legal equivalents between Egyptian civil jurisprudence and Anglo-American common law doctrines, appending scholarly translator footnotes when necessary.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'المنهجية الفنية للترجمة القانونية المعتمدة',
          en: 'Methodology of Certified Legal Translation'
        },
        body: {
          ar: 'تخضع كل صفحة قانونية لتدقيق مزدوج صارم يبدأ بتحديد النظام التشريعي الحاكم للعقد أو الحكم، ومراجعة أرقام المواد القانونية والتواريخ وأسماء الأطراف بالهجاء الرسمي، ثم فحص الصياغات الإلزامية (Shall / Must / May) لضمان عدم الإخلال بالالتزامات الأصلية، وتنتهي بالختم والتوقيع الحي المعتمد.',
          en: 'Every legal document undergoes rigorous dual audit: identifying governing jurisdictions, verifying statutory article references and party names, scrutinizing mandatory versus discretionary modal syntax, and executing official certification.'
        }
      },
      embassiesCompliance: {
        title: {
          ar: 'الهيئات والجهات القضائية التي تعتمد ترجماتنا',
          en: 'Judicial & Arbitral Authorities Recognizing Our Work'
        },
        items: [
          {
            name: { ar: 'المحاكم المصرية وهيئات قضايا الدولة', en: 'Egyptian Courts & Judicial Bodies' },
            desc: {
              ar: 'المحاكم الابتدائية والاستئنافية ومحكمة النقض والمحكمة الاقتصادية ومجلس الدولة.',
              en: 'First-instance, appellate, economic, cassation courts and the State Council.'
            }
          },
          {
            name: { ar: 'مراكز التحكيم التجاري الدولي', en: 'International Arbitration Centers' },
            desc: {
              ar: 'مركز القاهرة الإقليمي (CRCICA)، ومحكمة لندن للتحكيم (LCIA)، ومحاكم مركز دبي المالي (DIFC).',
              en: 'CRCICA Cairo, London Court of International Arbitration (LCIA), and DIFC Courts.'
            }
          },
          {
            name: { ar: 'مكاتب الشهر العقاري والتوثيق', en: 'Notary Public Offices (Shahr El-Aqary)' },
            desc: {
              ar: 'مكاتب التوثيق النموذجية وإدارات تصديق التوكيلات والعقود الرسمية في كافة المحافظات.',
              en: 'Official notary registries and authentication desks across all governorates.'
            }
          }
        ]
      },
      prepGuidelines: {
        title: {
          ar: 'إرشادات المحامين والشركات قبل إرسال الوثائق القانونية',
          en: 'Checklist for Legal Counsel & Corporate Legal Departments'
        },
        items: [
          {
            ar: 'توفير النسخة الأصلية أو صورة واضحة جداً تتضمن كافة الملاحق ومحاضر الاجتماعات والأختام الخلفية.',
            en: 'Provide complete scans inclusive of all schedules, addenda, and reverse endorsement seals.'
          },
          {
            ar: 'إرفاق مسرد بالمصطلحات الخاصة بالشركة أو ترجمات الأسماء المعتمدة في السجل التجاري إن وجدت.',
            en: 'Attach corporate glossaries and approved English spellings for shareholders and entities.'
          },
          {
            ar: 'تحديد الجهة المستهدفة بالترجمة لضبط الصياغة بما يتفق مع القوانين الإجرائية المتبعة لديها.',
            en: 'Identify the target judicial body to calibrate jurisdictional drafting conventions.'
          }
        ]
      }
    },
    relatedServices: ['embassy-translation', 'commercial-translation', 'personal-documents', 'sworn-translation']
  },

  'personal-documents': {
    slug: 'personal-documents',
    metaTitle: {
      ar: 'ترجمة معتمدة للوثائق الشخصية والأحوال المدنية | مصر الجديدة والجيزة | هيرمس',
      en: 'Certified Personal Documents Translation | Cairo & Giza | Hermes'
    },
    metaDesc: {
      ar: 'ترجمة معتمدة لشهادات الميلاد، عقود الزواج، القيد العائلي، الفيش والتشبيه، وشهادات الجيش. مطابقة كاملة لشروط السفارات والخارجية المصرية وتسليم فوري.',
      en: 'Accredited translation for birth, marriage certificates, family registers, police records & military service documents in Cairo & Giza. Fast delivery.'
    },
    h1: {
      ar: 'الترجمة المعتمدة للوثائق الشخصية والأحوال المدنية في مصر',
      en: 'Certified Personal Documents & Civil Records Translation Services in Egypt'
    },
    opening: {
      ar: 'تعتبر الوثائق الشخصية وثائق الثبوتية الأساسية التي يعتمد عليها أي ملف تأشيرة، هجرة، زواج، أو سفر دولي. في هيرمس للترجمة المعتمدة، نولي كل شهادة ميلاد أو وثيقة زواج أو قيد عائلي أقصى درجات العناية والتدقيق، حيث تترجم بمعايير الاعتماد الصارمة المقبولة لدى كافة السفارات الأجنبية، مكاتب تصديقات وزارة الخارجية المصرية، والجهات الحكومية داخل وخارج مصر، مع التسليم السريع من فرعينا بمصر الجديدة والجيزة أو عبر الشحن السريع.',
      en: 'Personal and vital records form the foundation of every immigration dossier, visa application, overseas civil marriage, or residency request. At Hermes Certified Translations, we handle civil certificates, family records, police clearance papers, and military exemptions with rigorous scrutiny, ensuring verbatim fidelity, passport name correspondence, and official seals accepted across all foreign embassies and Egyptian Ministry of Foreign Affairs attestation bureaus.'
    },
    definitionTitle: {
      ar: 'ما هي معايير ترجمة الوثائق الشخصية المعتمدة؟',
      en: 'Standards of Certified Personal Document Translation'
    },
    definitionText: {
      ar: 'تتطلب ترجمة الوثائق الشخصية المعتمدة مطابقة تامة لهجاء الأسماء الكاملة (الاسم الرباعي أو الخماسي) وفقاً لجواز السفر الدولي، ودقة متناهية في تحويل التواريخ الهجرية والميلادية وأرقام القيد والسجلات المدنية، فضلاً عن ختم الاعتماد الرسمي وإقرار المترجم القانوني بمسؤوليته عن صحة الترجمة ومطابقتها للمستند المصدر.',
      en: 'Certified personal document translation requires exact transliteration matching the applicant passport, dual validation of Gregorian and Hijri calendar dates, reproduction of civil registry numbers and barcode data, and official authentication stamps accompanied by the translator accuracy declaration.'
    },
    needTitle: {
      ar: 'متى تحتاج لترجمة مستنداتك الشخصية؟',
      en: 'When Do You Require Personal Document Translation?'
    },
    needText: {
      ar: 'يحتاج الأفراد لترجمة وثائقهم الشخصية عند: (1) التقديم لتأشيرات شنغن والولايات المتحدة والمملكة المتحدة وكندا، (2) إنهاء إجراءات الزواج المدني من أجانب أو توثيق الزواج في الخارج، (3) برامج الهجرة ولمّ الشمل الأسري وإثبات صلة القرابة، (4) استخراج شهادات الميلاد والإقامة للأبناء المولودين بالخارج، و(5) التوظيف الدولي والتعاقدات الخارجية.',
      en: 'Personal document translation is required when: (1) Applying for Schengen, US, UK, Canadian, or Gulf visas, (2) Registering international civil marriages or foreign consular status, (3) Prosecuting immigration and family sponsorship petitions, (4) Documenting births, citizenships, and dependent residencies abroad, and (5) Securing overseas employment permits.'
    },
    documentsSectionTitle: {
      ar: 'قائمة الوثائق الشخصية والأحوال المدنية المشمولة بالخدمة',
      en: 'Personal & Civil Documents Covered'
    },
    categories: [
      {
        title: { ar: 'وثائق الأحوال المدنية والأسرة', en: 'Civil Status & Family Records' },
        items: [
          { ar: 'شهادات الميلاد المميكنة (الكمبيوتر) وشهادات الوفاة', en: 'Computerized birth certificates and death records' },
          { ar: 'وثائق وقسائم الزواج وإشهادات الطلاق والرجعة', en: 'Official marriage deeds and divorce certificates' },
          { ar: 'القيد العائلي المميكن والقيد الفردي الصادر من مصلحة الأحوال المدنية', en: 'Certified family registration records and individual records' }
        ]
      },
      {
        title: { ar: 'الهوية الوطنية والجوازات', en: 'Identification & Travel Documents' },
        items: [
          { ar: 'بطاقات الرقم القومي المصرية وترجمة كامل بيانات الوجهين', en: 'National ID cards (full dual-sided translation)' },
          { ar: 'جوازات السفر وتأشيرات الدخول والخروج والأختام القنصلية', en: 'Passports, entry/exit stamps, and visas' },
          { ar: 'شهادات التحركات الصادرة من مصلحة الجوازات والهجرة بمجمع التحرير/العباسية', en: 'Travel movement history records issued by passport authorities' }
        ]
      },
      {
        title: { ar: 'المستندات الجنائية والعسكرية', en: 'Criminal Records & Military Service' },
        items: [
          { ar: 'صحيفة الحالة الجنائية (الفيش والتشبيه) الموجهة للسفارات', en: 'Police clearance certificates (Criminal Status Records)' },
          { ar: 'شهادات أداء الخدمة العسكرية أو الإعفاء النهائي أو المؤقت', en: 'Military completion and exemption certificates' },
          { ar: 'شهادات التجنيد وتصاريح السفر العسكرية', en: 'Conscription records and military travel permits' }
        ]
      },
      {
        title: { ar: 'رخص القيادة والبيانات المرورية', en: 'Driver Licenses & Traffic Records' },
        items: [
          { ar: 'رخص القيادة الخاصة والمهنية الصادرة من إدارات المرور', en: 'Private and commercial driver licenses' },
          { ar: 'شهادات بيانات رخص القيادة الصادرة للتأكيد القنصلي بالخارج', en: 'Official driver record extracts for foreign endorsement' },
          { ar: 'رخص تسيير المركبات والسيارات لإثبات الملكية والأصول', en: 'Vehicle registration cards and asset deeds' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'نظام فحص حرفي متقدم يضمن تطابق الأسماء مع جوازات السفر بنسبة 100%، وتوفير أختام الاعتماد الرسمية المقبولة لدى مكاتب تصديقات وزارة الخارجية المصرية وكافة السفارات، مع تسليم فوري في نفس اليوم للحالات المستعجلة.',
      en: 'Rigorous passport-alignment protocols guaranteeing 100% name accuracy, verified stamps recognized by the Egyptian Ministry of Foreign Affairs and foreign embassies, with same-day express turnaround for urgent travel dates.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات الميلاد والزواج والوفاة والقيد العائلي', en: 'Birth, Marriage, Death & Family Records' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '2 - 3 ساعات (فوري)', en: '2 - 3 Hours (Express)' }
      },
      {
        docType: { ar: 'الفيش والتشبيه وشهادات الخدمة العسكرية', en: 'Police Records & Military Exemption Papers' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '3 - 4 ساعات', en: '3 - 4 Hours' }
      },
      {
        docType: { ar: 'شهادات التحركات ورخص القيادة وبطاقات الرقم القومي', en: 'Travel Movement Certificates & Driver Licenses' },
        standard: { ar: '24 - 48 ساعة عمل', en: '24 - 48 Business Hours' },
        rush: { ar: 'نفس اليوم', en: 'Same-Day Service' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل تشترط السفارات تاريخ إصدار حديث للوثائق الشخصية المترجمة؟', en: 'Do embassies mandate recent issuance dates for personal records?' },
        a: {
          ar: 'نعم، تشترط معظم السفارات ألا يتجاوز تاريخ إصدار القيد العائلي أو صحيفة الحالة الجنائية أو شهادات الميلاد المميكنة 3 إلى 6 أشهر كحد أقصى وقت التقديم، لذا ننصح باستخراج شهادات حديثة قبل الترجمة.',
          en: 'Yes, most consular authorities require police records and family certificates to be issued within the last 3-6 months. We recommend acquiring recent civil printouts prior to certified translation.'
        }
      },
      {
        q: { ar: 'هل يجب تصديق الوثيقة الشخصية من الخارجية قبل الترجمة أم بعدها؟', en: 'Must personal documents be stamped by the MFA before or after translation?' },
        a: {
          ar: 'يعتمد ذلك على اشتراطات السفارة المستهدفة؛ بعض السفارات تشترط تصديق أصل الوثيقة من الخارجية المصرية أولاً لتترجم أختام الخارجية ضمن الملف، وسفارات أخرى تكتفي بالترجمة المعتمدة المباشرة.',
          en: 'This depends on target embassy regulations: certain embassies require the original public record to bear MFA authentication stamps first so those stamps are translated into the final dossier.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'ضوابط مطابقة الأسماء والأرقام القومية',
          en: 'Rules for Identity Transliteration & Civil Codes'
        },
        body: {
          ar: 'يقوم المدقق بمقارنة الاسم الرباعي في الوثيقة حرفاً بحرف مع الصفحة التعريفية في جواز السفر، مع توثيق الأرقام القومية ورمز الباركود وأختام النسر لضمان خلو الملف من أي سبب للرفض الإداري.',
          en: 'Our senior linguist verifies four-part personal names letter for letter against international travel passports, capturing national IDs, bar codes, and national seals to eliminate administrative rejection risks.'
        }
      },
      embassiesCompliance: {
        title: {
          ar: 'سفارات وجهات تقبل ترجمات وثائقنا الشخصية',
          en: 'Embassies & Consulates Accepting Our Civil Translations'
        },
        items: [
          {
            name: { ar: 'سفارات دول الاتحاد الأوروبي وشنغن', en: 'EU & Schengen Embassies' },
            desc: {
              ar: 'مطابقة تامة لمتطلبات مراكز VFS Global وTLScontact وBLS.',
              en: 'Full compliance with VFS Global, TLScontact, and BLS submission standards.'
            }
          },
          {
            name: { ar: 'السفارة الأمريكية ودائرة الهجرة (USCIS)', en: 'US Embassy & USCIS Immigrant Petitions' },
            desc: {
              ar: 'إقرار المطابقة باللغة الإنجليزية وتنسيق الصفحات المعتمد رسمياً.',
              en: 'Official English accuracy declaration and standardized formatting.'
            }
          },
          {
            name: { ar: 'سفارات دول الخليج والدول العربية', en: 'GCC & Arab Consular Services' },
            desc: {
              ar: 'تأشيرات الإقامة العائلية وعقود العمل والملحقيات العمالية.',
              en: 'Family residency, labor attaché verification, and employment visas.'
            }
          }
        ]
      },
      prepGuidelines: {
        title: {
          ar: 'نصائح مهمة قبل تصوير وإرسال وثائقك الشخصية',
          en: 'Checklist Before Uploading Personal Documents'
        },
        items: [
          {
            ar: 'تأكد من إرسال صورة جواز السفر بوضوح لضمان كتابة الاسم بالإنجليزية بصورة مطابقة.',
            en: 'Provide a crisp scan of your international passport biodata page.'
          },
          {
            ar: 'تأكد من وضوح ختم النسر أو أختام الأحوال المدنية على الوجه والظهر.',
            en: 'Ensure all governmental eagle seals on both sides of the certificate are fully legible.'
          }
        ]
      }
    },
    relatedServices: ['embassy-translation', 'legal-translation', 'academic-documents', 'sworn-translation']
  },

  'commercial-translation': {
    slug: 'commercial-translation',
    metaTitle: {
      ar: 'ترجمة تجارية معتمدة للشركات ورجال الأعمال في مصر | هيرمس',
      en: 'Certified Commercial & Corporate Translation Egypt | Hermes'
    },
    metaDesc: {
      ar: 'ترجمة تجارية معتمدة للسجلات التجارية، البطاقات الضريبية، القوائم المالية، الميزانيات، وعقود التأسيس. دعم كامل للشركات والمستثمرين في القاهرة والجيزة.',
      en: 'Accredited commercial translation in Egypt for trade registers, tax cards, audited financial statements, by-laws & tender bids. Fast corporate turnaround.'
    },
    h1: {
      ar: 'الترجمة التجارية المعتمدة للشركات ورجال الأعمال في مصر | سجلات وميزانيات',
      en: 'Certified Commercial & Corporate Translation Services in Egypt | Trade Registers & Financials'
    },
    opening: {
      ar: 'تتطلب المعاملات التجارية العابرة للحدود، تأسيس الفروع الدولية، فتح الحسابات المصرفية الخارجية، والتقديم لتأشيرات رجال الأعمال والمستثمرين ترجمة تجارية معتمدة تتسم بالدقة المحاسبية والقانونية المطلقة. في مكتب هيرمس للترجمة المعتمدة، نخدم مئات الشركات المحلية والشركات متعددة الجنسيات ورواد الأعمال عبر ترجمة معتمدة وموثوقة للسجلات التجارية، البطاقات الضريبية، القوائم المالية المدققة، وعقود التأسيس، مع مراعاة المعايير الدولية لإعداد التقارير المالية (IFRS).',
      en: 'Cross-border commerce, international subsidiary setup, foreign corporate banking, and investor visa applications demand certified commercial translations characterized by uncompromising financial and legal rigor. At Hermes Certified Translations, we support hundreds of domestic corporations, multinationals, and entrepreneurs with accredited translations of Commercial Registers, Tax Cards, audited financial balance sheets, and Articles of Association.'
    },
    definitionTitle: {
      ar: 'ما هي معايير الترجمة التجارية المعتمدة؟',
      en: 'Standards of Certified Corporate & Financial Translation'
    },
    definitionText: {
      ar: 'الترجمة التجارية المعتمدة هي ترجمة رسمية تجمع بين الفهم الدقيق لقوانين الشركات المعمول بها (مثل قانون الاستثمار وقانون الشركات المصري) والمعايير المحاسبية المعتمدة (IFRS / GAAP). تشمل الوثائق أختام وتوقيعات مكتب الترجمة المعتمد، إقرار المطابقة القانوني، وأرقام السجل والملف الضريبي، لضمان قبولها الفوري أمام البنوك، الغرف التجارية، الهيئات الاستثمارية، والسفارات الأجنبية.',
      en: 'Certified commercial translation blends comprehensive knowledge of corporate legislation (such as Egyptian Investment Law and Corporate Codes) with international accounting frameworks (IFRS/GAAP). Documents feature official bureau authentication seals, legal accuracy statements, and commercial registration numbers, guaranteeing immediate acceptance by banks, commercial registries, and embassies.'
    },
    needTitle: {
      ar: 'متى تحتاج شركتك إلى الترجمة التجارية المعتمدة؟',
      en: 'When Does Your Business Require Certified Commercial Translation?'
    },
    needText: {
      ar: 'تحتاج الشركات ورجال الأعمال لخدماتنا عند: (1) التقديم لتأشيرات السياحة ورجال الأعمال بالسفارات (مثل إثبات الملاءة التجارية لفيزا شنغن وأمريكا)، (2) فتح حسابات بنكية تجارية للشركات داخل مصر أو في بنوك دولية (الإمارات، أوروبا، أمريكا)، (3) تأسيس فروع أجنبية وقيد الشركات بالخارج، (4) المشاركة في المناقصات والعطاءات الدولية، و(5) التنسيق مع مراجعي الحسابات والشركاء والمستثمرين الأجانب.',
      en: 'Corporate entities require certified commercial translation when: (1) Filing business visa applications with foreign consulates, (2) Opening corporate bank accounts with domestic or international banks, (3) Incorporating overseas branch entities and establishing foreign holding vehicles, (4) Submitting bids for international procurement tenders, and (5) Disclosing audited figures to cross-border investors.'
    },
    documentsSectionTitle: {
      ar: 'الوثائق التجارية والمالية المشمولة بالخدمة',
      en: 'Commercial & Financial Documents Covered'
    },
    categories: [
      {
        title: { ar: 'مستندات تأسيس وقيد الشركات', en: 'Corporate Incorporation & Registration' },
        items: [
          { ar: 'السجل التجاري الحديث الصادر من الغرفة التجارية ومصلحة السجل التجاري', en: 'Official Commercial Register extracts issued by registry authorities' },
          { ar: 'البطاقة الضريبية وشهادات التسجيل في ضريبة القيمة المضافة (VAT)', en: 'Tax cards and Value Added Tax (VAT) registration certificates' },
          { ar: 'عقود التأسيس والنظم الأساسية للشركات المساهمة وذات المسؤولية المحدودة', en: 'Articles of Association, company statutes, and bylaws' }
        ]
      },
      {
        title: { ar: 'القوائم المالية والتقارير المصرفية', en: 'Audited Financials & Bank Reports' },
        items: [
          { ar: 'الميزانيات العمومية وقوائم الدخل والتدفقات النقدية المدققة', en: 'Audited balance sheets, income statements, and cash flow reports' },
          { ar: 'تقارير مراقبي الحسابات القانونيين وشهادات الملاءة المالية', en: 'Statutory auditor reports and letters of financial standing' },
          { ar: 'كشوف الحسابات البنكية الاستثمارية وحركات الاعتمادات المستندية (LC)', en: 'Corporate bank statements, credit facilities, and Letters of Credit' }
        ]
      },
      {
        title: { ar: 'محاضر الاجتماعات وقرارات الإدارة', en: 'Board Minutes & Corporate Resolutions' },
        items: [
          { ar: 'محاضر اجتماعات الجمعيات العامة العادية وغير العادية المعتمدة من الاستثمار', en: 'General assembly minutes approved by GAFI investment authority' },
          { ar: 'قرارات مجالس الإدارة وتفويضات التوقيع والتمثيل البنكي والقانوني', en: 'Board resolutions, signing authorities, and corporate powers of attorney' },
          { ar: 'اتفاقيات التنازل عن الحصص وتعديل هياكل الملكية والشركاء', en: 'Share transfer deeds and ownership restructuring agreements' }
        ]
      },
      {
        title: { ar: 'المناقصات والعقود التجارية الدولية', en: 'Tenders & International Trade Records' },
        items: [
          { ar: 'كراسات الشروط والعطاءات والمواصفات الفنية للمناقصات', en: 'Tender dossiers, terms of reference, and project technical specifications' },
          { ar: 'عقود الوكالات التجارية، التوزيع، والامتياز التجاري (Franchise)', en: 'Commercial agency, distribution, and international franchise pacts' },
          { ar: 'الفواتير الجمركية المعتمدة، بوالص الشحن، وشهادات المنشأ', en: 'Certified customs invoices, bills of lading, and certificates of origin' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'فريق متخصص يجمع بين المحاسبين القانونيين والمترجمين المعتمدين لضمان التطابق الدقيق للأرقام والمصطلحات المحاسبية الدولية (IFRS)، مع تقديم باقات تسعير تفضيلية وعقود سنوية للشركات مع سرية تامة لاتفاقيات الأعمال.',
      en: 'A dedicated commercial linguistics desk delivering precise terminology concordance aligned with international IFRS standards, offering specialized corporate service level agreements (SLAs) and strict data protection.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'السجل التجاري والبطاقة الضريبية', en: 'Commercial Register & Tax Card' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '4 - 6 ساعات', en: '4 - 6 Hours' }
      },
      {
        docType: { ar: 'القوائم المالية والميزانيات (حتى 20 صفحة)', en: 'Audited Financial Statements (Up to 20 pages)' },
        standard: { ar: '48 ساعة عمل', en: '48 Business Hours' },
        rush: { ar: '24 ساعة عمل', en: '24 Business Hours' }
      },
      {
        docType: { ar: 'عقود التأسيس ومحاضر الجمعيات العمومية', en: 'Articles of Association & Board Minutes' },
        standard: { ar: '48 - 72 ساعة عمل', en: '48 - 72 Business Hours' },
        rush: { ar: '24 ساعة عمل', en: '24 Business Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل تقبل البنوك الأجنبية في الخارج ترجماتكم التجارية لفتح الحسابات؟', en: 'Do overseas banks accept your commercial translations for corporate accounts?' },
        a: {
          ar: 'نعم، ترجماتنا معتمدة وممهورة بالأختام الرسمية المعترف بها دولياً، ومطابقة لمتطلبات التحقق والامتثال (KYC / Due Diligence) لدى البنوك في الإمارات وأوروبا وأمريكا.',
          en: 'Yes. Our certified commercial translations are universally recognized by foreign corporate banking compliance and KYC desks across the GCC, Europe, and North America.'
        }
      },
      {
        q: { ar: 'كيف تتعاملون مع الأرقام والجداول المحاسبية المعقدة؟', en: 'How do you handle complex accounting ledger tables and balances?' },
        a: {
          ar: 'نستخدم نظام تنسيق مطابق للأصل (Mirror Formatting) يعيد بناء الجداول الحسابية سطراً بسطر ورسماً بيانياً، مع تدقيق حسابي مستقل للتأكد من مطابقة جميع الموازين والقوائم.',
          en: 'We implement mirror formatting methodologies reconstructing ledger tables line by line, backed by independent numerical audit to guarantee 100% financial concordance.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'معايير اعتماد وثائق الشركات المصرية دولياً',
          en: 'International Standards for Egyptian Corporate Documents'
        },
        body: {
          ar: 'يتم نقل البيانات الصادرة من الهيئة العامة للاستثمار (GAFI) ومصلحة السجل التجاري بدقة مصطلحية كاملة، بما في ذلك أسماء المفوضين بالتوقيع ونسب الشركاء ورأس المال المصدر والمدفوع، مع إقرار المطابقة المعتمد.',
          en: 'Corporate records issued by the General Authority for Investment (GAFI) and registry authorities are translated with rigorous adherence to authorized signatory clauses, capital allocations, and official accuracy statements.'
        }
      },
      embassiesCompliance: {
        title: {
          ar: 'الجهات التي تعتمد مستنداتنا التجارية',
          en: 'Institutions Recognizing Our Commercial Translations'
        },
        items: [
          {
            name: { ar: 'البنوك والمؤسسات المالية الدولية', en: 'International Banks & Financial Desks' },
            desc: {
              ar: 'فتح الحسابات الاستثمارية وتسهيلات الائتمان ومطالبات التدقيق الخارجي.',
              en: 'Corporate account opening, credit facilities, and statutory international audits.'
            }
          },
          {
            name: { ar: 'الغرف التجارية والسفارات لتأشيرات الأعمال', en: 'Embassies for Business & Investor Visas' },
            desc: {
              ar: 'إثبات الصفة التجارية للشركاء والمديرين لفيزا شنغن وأمريكا وبريطانيا.',
              en: 'Commercial standing verification for Schengen, US, and UK business visas.'
            }
          }
        ]
      },
      prepGuidelines: {
        title: {
          ar: 'إرشادات الشركات قبل تسليم الأوراق التجارية',
          en: 'Checklist for Corporate Officers Prior to Submission'
        },
        items: [
          {
            ar: 'تأكد من حداثة مستخرج السجل التجاري (يفضل ألا يتجاوز تاريخ إصداره 3 أشهر).',
            en: 'Verify that Commercial Register extracts are freshly issued within the last 3 months.'
          },
          {
            ar: 'إرفاق التهجئة الإنجليزية المعتمدة للشركة والشركاء لتطابق المعاملات المصرفية.',
            en: 'Provide official corporate English spelling matching your bank and tax registration records.'
          }
        ]
      }
    },
    relatedServices: ['legal-translation', 'embassy-translation', 'personal-documents', 'sworn-translation']
  },

  'academic-documents': {
    slug: 'academic-documents',
    metaTitle: {
      ar: 'ترجمة معتمدة للشهادات والمستندات الأكاديمية | هيرمس',
      en: 'Certified Academic Translation Egypt | Degrees & Transcripts | Hermes'
    },
    metaDesc: {
      ar: 'ترجمة معتمدة لشهادات التخرج، كشوف الدرجات، وبيان المواد للجامعات والمنح الدولية (WES, DAAD, Chevening). دقة أكاديمية معتمدة وتسليم سريع.',
      en: 'Certified academic document translation in Cairo & Giza for university admissions, transcripts & credential evaluation (WES, ECFMG, DAAD, Chevening).'
    },
    h1: {
      ar: 'ترجمة الشهادات والمستندات الأكاديمية المعتمدة | القبول الجامعي والمنح الدولية',
      en: 'Certified Academic Documents & Degree Translation | University Admissions & Scholarships'
    },
    opening: {
      ar: 'يمثل التقديم للجامعات الدولية، المنح الدراسية المرموقة، وبرامج الهجرة المهنية خطوة حاسمة في المسار المستقبلي للطلاب والباحثين. في هيرمس للترجمة المعتمدة، نضمن لك ترجمة أكاديمية معتمدة ومطابقة تماماً لأنظمة التقييم الدولية ومعادلة الشهادات (مثل WES في أمريكا وكندا، وuni-assist في ألمانيا، وECFMG للأطباء)، مع النقل الدقيق للمصطلحات العلمية وأنظمة الساعات المعتمدة وكشوف الدرجات.',
      en: 'Applying for international universities, prestigious scholarships, or cross-border professional licensures is a transformative milestone for students and scholars. At Hermes Certified Translations, we deliver accredited academic translations fully recognized by global credential evaluators (including WES, uni-assist, and ECFMG), ensuring exact terminology alignment for credit hours, grade point averages, and course syllabi.'
    },
    definitionTitle: {
      ar: 'ما هي معايير ترجمة الشهادات الأكاديمية المعتمدة؟',
      en: 'Standards of Certified Academic Translation'
    },
    definitionText: {
      ar: 'الترجمة الأكاديمية المعتمدة تتطلب صياغة دقيقة للمسميات العلمية والدرجات الجامعية، مع الحفاظ على التقديرات الأصلية والمعدل التراكمي (GPA) وساعات الاتصال الدراسي دون أي تعديل أو تحريف، ومهر الوثيقة بختم مكتب ترجمة معتمد وإقرار رسمي بالمطابقة يفي بمتطلبات مكاتب القبول الدولي وسفارات الدول المانحة.',
      en: 'Certified academic translation demands precise conversion of university credentials, exact preservation of cumulative GPA scores and semester credit allocations without subjective alteration, backed by official translation bureau seals and compliance declarations meeting global university admission standards.'
    },
    needTitle: {
      ar: 'متى تحتاج لترجمة مستنداتك الأكاديمية؟',
      en: 'When Do You Need Academic Document Translation?'
    },
    needText: {
      ar: 'تعد هذه الخدمة ضرورية عند: (1) التقديم للماجستير والدكتوراه والبكالوريوس في الجامعات الأجنبية، (2) المنافسة على المنح الدراسية الدولية (مثل Chevening, DAAD, Fulbright, Erasmus)، (3) معادلة الشهادات الطبية والهندسية واختبارات المعادلة (USMLE, PLAB, NCLEX)، و(4) التقديم لملفات الهجرة بنظام النقاط (WES Evaluation لكندا وأمريكا).',
      en: 'Academic translation is required when: (1) Applying for undergraduate, Master or PhD programs overseas, (2) Competing for prestigious scholarships (Chevening, DAAD, Fulbright, Erasmus), (3) Prosecuting medical and engineering licensure evaluations (USMLE, PLAB, WES), and (4) Submitting immigration credential assessments.'
    },
    documentsSectionTitle: {
      ar: 'المستندات الأكاديمية والدراسية التي نترجمها',
      en: 'Academic & Educational Documents Covered'
    },
    categories: [
      {
        title: { ar: 'الشهادات والمؤهلات الجامعية', en: 'Degrees & Higher Diplomas' },
        items: [
          { ar: 'شهادات البكالوريوس والليسانس المؤقتة والجدارية الرسمية', en: 'Bachelor degree certificates, provisional awards, and wall diplomas' },
          { ar: 'شهادات الماجستير والدكتوراه والدبلومات العليا التخصصية', en: 'Master, Doctorate (PhD), and postgraduate diploma certificates' },
          { ar: 'شهادات معادلة الدرجات العلمية الصادرة من المجلس الأعلى للجامعات', en: 'Equivalency certificates issued by the Supreme Council of Universities' }
        ]
      },
      {
        title: { ar: 'كشوف الدرجات والمحتوى العلمي', en: 'Transcripts & Course Descriptions' },
        items: [
          { ar: 'كشوف الدرجات التراكمية وسجلات الدرجات للسنوات الدراسية كاملة', en: 'Cumulative academic transcripts and semester grade ledger records' },
          { ar: 'بيانات الساعات المعتمدة (Credit Hours) والمعدل التراكمي (GPA)', en: 'Credit hour certificates, course load breakdowns, and GPA records' },
          { ar: 'المحتوى العلمي المفصل للمقررات الدراسية (Course Syllabi / Descriptions)', en: 'Detailed course syllabi and academic curriculum descriptions' }
        ]
      },
      {
        title: { ar: 'شهادات الثانوية العامة والمدرسية', en: 'Secondary & High School Records' },
        items: [
          { ar: 'شهادات إتمام مرحلة الثانوية العامة (المصرية والأزهرية)', en: 'General Secondary Education Certificates (Thanaweya Amma / Azhar)' },
          { ar: 'شهادات الدبلومة الأمريكية (American Diploma) والـ IGCSE والـ IB', en: 'American High School Diplomas, IGCSE certificates, and IB credentials' },
          { ar: 'بيانات النجاح والانتقال المدرسي الموثقة من الإدارات التعليمية', en: 'School transcript records and official educational zone certificates' }
        ]
      },
      {
        title: { ar: 'شهادات التدريب الطبي والامتياز', en: 'Medical Training & Clinical Internship' },
        items: [
          { ar: 'شهادات سنة الامتياز للأطباء البشريين وأطباء الأسنان والصيادلة والتمريض', en: 'Medical internship certificates (House Officer / Clinical Training)' },
          { ar: 'شهادات الخبرة الإكلينيكية وسجلات العمليات والتدريب بالمستشفيات الجامعية', en: 'Clinical logbooks, hospital training certificates, and residency records' },
          { ar: 'شهادات حسن السير والسلوك الصادرة من النقابات المهنية والجامعات', en: 'Good standing certificates issued by professional syndicates' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'دراية تامة باشتراطات مؤسسات تقييم الشهادات الدولية (WES, ECFMG, Josef Silny) وسفارات المنح، مع الحفاظ على سرية المستندات والالتزام الصارم بمواعيد إغلاق التقديم الجامعي.',
      en: 'Comprehensive familiarity with international credential evaluation criteria (WES, ECFMG, uni-assist), ensuring exact terminology fidelity and prompt delivery aligned with university deadlines.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات التخرج والثانوية العامة وبيانات النجاح', en: 'Graduation Certificates & High School Records' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '3 - 4 ساعات', en: '3 - 4 Hours' }
      },
      {
        docType: { ar: 'كشوف الدرجات وسجلات الدرجات (حتى 6 فصول دراسية)', en: 'Academic Transcripts (Up to 6 semesters)' },
        standard: { ar: '24 - 48 ساعة عمل', en: '24 - 48 Business Hours' },
        rush: { ar: 'نفس اليوم', en: 'Same-Day Delivery' }
      },
      {
        docType: { ar: 'المحتوى العلمي وسجلات التدريب الطبي المطولة', en: 'Course Syllabi & Extended Medical Logbooks' },
        standard: { ar: '3 - 5 أيام عمل', en: '3 - 5 Business Days' },
        rush: { ar: '48 ساعة عمل', en: '48 Business Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل تقبل مؤسسة WES لتقييم الشهادات ترجماتكم الأكاديمية؟', en: 'Does World Education Services (WES) accept your academic translations?' },
        a: {
          ar: 'نعم، تصدر ترجماتنا مستوفية لمتطلبات WES باللغتين الإنجليزية والفرنسية، شاملة إقرار المطابقة والختم الرسمي لكافة الصفحات وكشوف الدرجات.',
          en: 'Yes. Our translations fully comply with WES formal requirements in English and French, complete with precision transcripts and signed accuracy declarations.'
        }
      },
      {
        q: { ar: 'كيف تترجمون التقديرات مثل (جيد جداً / امتياز مع مرتبة الشرف)؟', en: 'How do you translate academic honors and Egyptian grade classifications?' },
        a: {
          ar: 'نستخدم المصطلحات الأكاديمية الدولية المعيارية (Very Good / Excellent with Honors / Magna Cum Laude) مع كتابة النسبة المئوية أو التقدير العددي الأصلي دون تغيير لضمان الشفافية.',
          en: 'We apply standardized international academic equivalents while strictly preserving the original numerical marks and percentages to ensure full admission committee transparency.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'متطلبات توثيق الشهادات قبل التقديم الدولي',
          en: 'Document Attestation Sequence for Academic Dossiers'
        },
        body: {
          ar: 'يجب أن تتوفر في الشهادة الأصلية أختام الكلية، وأمين عام الجامعة، وتصديق مكتب وزارة الخارجية المصرية (للدول التي تشترطه)، قبل إتمام الترجمة المعتمدة لضمان ظهور كافة الأختام الموثقة في النسخة المترجمة.',
          en: 'Original degrees should bear authentic faculty seals, University Secretary signatures, and Egyptian Ministry of Foreign Affairs stamps (where required) so all endorsements are mirrored in the certified translation.'
        }
      },
      embassiesCompliance: {
        title: {
          ar: 'المنح والجامعات التي تعتمد ترجماتنا الأكاديمية',
          en: 'Scholarships & Admissions Boards Accepting Our Translations'
        },
        items: [
          {
            name: { ar: 'المنح الدولية الكبرى (Chevening, DAAD, Fulbright)', en: 'Major International Scholarships' },
            desc: {
              ar: 'استيفاء الشروط اللغوية والأكاديمية للملفات التنافسية.',
              en: 'Full compliance with language benchmarks for prestigious scholarship programs.'
            }
          },
          {
            name: { ar: 'مؤسسات التقييم المهني والأكاديمي (WES, ECFMG)', en: 'Credential Evaluation Bodies' },
            desc: {
              ar: 'ملفات معادلة الشهادات لهجرة كندا وأمريكا والترخيص الطبي.',
              en: 'Credential assessments for Canadian immigration and US medical licensing.'
            }
          }
        ]
      },
      prepGuidelines: {
        title: {
          ar: 'إرشادات الطلاب والباحثين قبل إرسال أوراق التخرج',
          en: 'Checklist for Students and Scholars Before Submission'
        },
        items: [
          {
            ar: 'تأكد من وضوح كشوف الدرجات بالكامل دون اقتطاع أسماء المواد أو الساعات المعتمدة.',
            en: 'Provide full-page scans of transcripts ensuring course names and credit hours are unobstructed.'
          },
          {
            ar: 'أرفق صورة جواز السفر لضبط كتابة اسم الطالب والكلية والدرجة العلمية بدقة.',
            en: 'Attach your travel passport to ensure personal names match across all academic files.'
          }
        ]
      }
    },
    relatedServices: ['embassy-translation', 'personal-documents', 'legal-translation', 'technical-translation']
  },

  'medical-translation': {
    slug: 'medical-translation',
    metaTitle: {
      ar: 'ترجمة طبية معتمدة في مصر | تقارير، تحاليل، وعلاج بالخارج | هيرمس',
      en: 'Certified Medical Translation Egypt | Clinical Reports & Lab Tests | Hermes'
    },
    metaDesc: {
      ar: 'مكتب ترجمة طبية معتمد بإشراف أطباء ومترجمين متخصصين. ترجمة التقارير الطبية، ملخصات الخروج، الأشعة، ومطالبات التأمين الدولي. دقة وسرية مطلقة.',
      en: 'Accredited medical translation in Cairo & Giza directed by medical linguists. Clinical discharge summaries, lab tests, radiology & overseas treatment visas.'
    },
    h1: {
      ar: 'ترجمة طبية معتمدة للتقارير والتحاليل والعلاج بالخارج في مصر',
      en: 'Certified Medical Translation Services in Egypt | Clinical Reports & Lab Results'
    },
    opening: {
      ar: 'ترتبط الترجمة الطبية ارتباطاً مباشراً بحياة المرضى وصحتهم؛ لذا فإن الخطأ في ترجمة مصطلح تشخيصي أو جرعة علاجية أو قراءة فحص مخبري أمر غير مقبول على الإطلاق. في هيرمس للترجمة المعتمدة، نوفر وحدة ترجمة طبية متخصصة يشرف عليها مترجمون ذوو خلفية صيدلانية وطبية، لترجمة التقارير العلاجية، ملخصات الخروج من المستشفيات، الفحوصات التشخيصية، ومستندات تأشيرات العلاج بالخارج وشركات التأمين الدولية، مع الالتزام التام بالسرية والخصوصية الطبية.',
      en: 'Medical translation directly intersects with patient well-being, clinical diagnoses, and critical therapy decisions; precision is paramount. At Hermes Certified Translations, we maintain a dedicated medical linguistics unit staffed by professionals with clinical and pharmacological backgrounds. We translate diagnostic reports, hospital discharge summaries, laboratory panels, international medical insurance claims, and medical visa dossiers with uncompromising accuracy and patient confidentiality.'
    },
    definitionTitle: {
      ar: 'ما هي معايير الترجمة الطبية المعتمدة؟',
      en: 'Standards of Certified Medical Translation'
    },
    definitionText: {
      ar: 'الترجمة الطبية المعتمدة هي نقل دقيق للمصطلحات التشخيصية والسريرية وفقاً للتصنيف الدولي للأمراض (ICD-10) والمصطلحات الطبية المعيارية (MedDRA). تتضمن ترجمة الأدوية بأسمائها العلمية الدولية (INN)، توضيح القراءات المخبرية، واعتماد الوثيقة بختم رسمي وإقرار مطابقة يقبله الأطباء الاستشاريون والمستشفيات العالمية في ألمانيا وبريطانيا وأمريكا وسفارات السفر العلاجي.',
      en: 'Certified medical translation requires exact conversion of diagnostic terminology adhering to the International Classification of Diseases (ICD-10) and MedDRA standards. Medications are mapped to International Nonproprietary Names (INN), laboratory reference ranges are faithfully maintained, and files bear official accreditation seals recognized by international medical centers and consular visa sections.'
    },
    needTitle: {
      ar: 'متى تحتاج إلى ترجمة تقاريرك الطبية؟',
      en: 'When Do You Require Certified Medical Translation?'
    },
    needText: {
      ar: 'يحتاج المرضى والأطباء لخدماتنا عند: (1) السفر لتلقي العلاج أو إجراء جراحات متقدمة في الخارج (ألمانيا، بريطانيا، سويسرا، أمريكا)، (2) استخراج تأشيرات العلاج الطبي (Medical Treatment Visas) بالسفارات، (3) تقديم مطالبات استرداد النفقات لشركات التأمين الصحي الدولية (Allianz, Bupa, Cigna)، (4) الحصول على رأي طبي ثانٍ (Second Medical Opinion) من مراكز عالمية، و(5) استيراد الأجهزة والمستحضرات الصيدلانية وتسجيلها.',
      en: 'Patients, physicians, and organizations require certified medical translation when: (1) Traveling for specialized surgical interventions and oncology treatments overseas, (2) Securing medical treatment visas from foreign consulates, (3) Submitting reimbursement claims to international health insurers, (4) Seeking remote second medical opinions from global hospitals, and (5) Registering medical devices and pharmaceuticals.'
    },
    documentsSectionTitle: {
      ar: 'المستندات والتقارير الطبية التي نغطيها',
      en: 'Medical & Diagnostic Records Covered'
    },
    categories: [
      {
        title: { ar: 'التقارير السريرية وملخصات الخروج', en: 'Clinical Reports & Discharge Summaries' },
        items: [
          { ar: 'ملخصات الخروج من المستشفيات والتقارير السريرية الشاملة', en: 'Hospital discharge summaries and comprehensive clinical reports' },
          { ar: 'تقارير العمليات الجراحية والتدخلات التداخلية والقسطرة', en: 'Operative reports, surgical notes, and catheterization summaries' },
          { ar: 'بروتوكولات علاج الأورام وجرعات العلاج الكيماوي والإشعاعي', en: 'Oncology treatment protocols, chemotherapy, and radiotherapy regimens' }
        ]
      },
      {
        title: { ar: 'الفحوصات والأشعة والتحاليل', en: 'Radiology & Laboratory Tests' },
        items: [
          { ar: 'تقارير الأشعة المقطعية (CT) والرنين المغناطيسي (MRI) والموجات الصوتية', en: 'CT scans, MRI imaging, ultrasound, and PET-scan reports' },
          { ar: 'نتائج تحاليل الدم الشاملة، الهرمونات، والمؤشرات الحيوية', en: 'Comprehensive blood panels, metabolic profiles, and hormonal markers' },
          { ar: 'تقارير فحص الأنسجة والباثولوجي (Biopsy & Histopathology)', en: 'Histopathology, biopsy, and cytogenetic laboratory evaluations' }
        ]
      },
      {
        title: { ar: 'التأمين الطبي والوصفات الدوائية', en: 'Medical Insurance & Prescriptions' },
        items: [
          { ar: 'مطالبات شركات التأمين الصحي الدولية وفواتير العلاج بالمستشفيات', en: 'International health insurance claims and hospital invoices' },
          { ar: 'الروشتات والوصفات الطبية المعتمدة للجرعات الدوائية المقيدة', en: 'Certified prescriptions and physician orders for travel clearance' },
          { ar: 'التقارير الطبية الخاصة باللياقة الصحية للعمل والإقامة والسفر', en: 'Medical fitness certificates for overseas employment and residency' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'إشراف مباشر من أطباء وصيادلة متخصصين في الترجمة الطبية، صرامة تامة في الحفاظ على خصوصية وسرية التاريخ الطبي للمرضى، وإنجاز سريع للتقارير العاجلة لدعم خطط السفر العلاجي.',
      en: 'Direct oversight by healthcare linguists with clinical and pharmacological backgrounds, strict adherence to patient medical privacy, and rapid turnaround for emergency medical travel.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'تقارير الأشعة والتحاليل المخبرية الدورية', en: 'Radiology Reports & Standard Lab Panels' },
        standard: { ar: '24 ساعة عمل', en: '24 Business Hours' },
        rush: { ar: '2 - 3 ساعات (فوري)', en: '2 - 3 Hours (Urgent)' }
      },
      {
        docType: { ar: 'ملخصات الخروج والتقارير الجراحية (حتى 5 صفحات)', en: 'Discharge Summaries & Surgical Reports' },
        standard: { ar: '24 - 48 ساعة عمل', en: '24 - 48 Business Hours' },
        rush: { ar: 'نفس اليوم', en: 'Same-Day Service' }
      },
      {
        docType: { ar: 'الملفات الطبية الشاملة وسجلات الأورام المطولة', en: 'Comprehensive Medical Dossiers & Oncology Charts' },
        standard: { ar: '48 - 72 ساعة عمل', en: '48 - 72 Business Hours' },
        rush: { ar: '24 - 36 ساعة عمل', en: '24 - 36 Business Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل تقبل المستشفيات في ألمانيا وأوروبا ترجمتكم الطبية؟', en: 'Do European and German hospitals accept your medical translations?' },
        a: {
          ar: 'نعم، تعتمد ترجماتنا باللغات الإنجليزية والألمانية والفرنسية، وتستخدم الأسماء العلمية الدولية المعترف بها في المشافي الجامعية والمراكز التخصصية بالخارج.',
          en: 'Yes. Our medical translations in English, German, and French utilize internationally standardized terminology recognized across European university hospitals.'
        }
      },
      {
        q: { ar: 'كيف تضمنون دقة كتابة أسماء الأدوية والجرعات؟', en: 'How do you guarantee the precision of pharmaceutical names and dosages?' },
        a: {
          ar: 'نترجم أسماء الأدوية وفقاً لاسم المادة الفعالة الدولي (Generic INN Name) مع ذكر الاسم التجاري الأصلي ونظام الجرعات بدقة بالغة تحت تدقيق صيدلي معتمد.',
          en: 'Medications are mapped to International Nonproprietary Names (INN) alongside brand names and exact dosage regimens audited by clinical pharmacists.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'معايير الأمان والسرية في الترجمة الطبية',
          en: 'Patient Privacy & Clinical Accuracy Benchmarks'
        },
        body: {
          ar: 'تخضع الملفات الطبية لإجراءات أمان صارمة تعامل البيانات الصحية للمريض بسرية مطلقة، وتضمن النقل المعياري لقراءات التحاليل مع كتابة القيم المرجعية الطبيعية كما وردت في الأصل.',
          en: 'Medical files are processed under strict clinical confidentiality guidelines, ensuring exact preservation of laboratory values, reference ranges, and diagnostic notes.'
        }
      },
      embassiesCompliance: {
        title: {
          ar: 'تأشيرات العلاج الطبي والمراكز الصحية الدولية',
          en: 'Medical Visa Clearances & Global Healthcare Centers'
        },
        items: [
          {
            name: { ar: 'سفارات شنغن وبريطانيا وأمريكا لتأشيرات العلاج', en: 'Embassies for Medical Treatment Visas' },
            desc: {
              ar: 'استيفاء شروط القبول القنصلي للتقارير الطبية وخطابات المستشفيات.',
              en: 'Full compliance with visa guidelines for medical travel and hospital invites.'
            }
          },
          {
            name: { ar: 'شركات التأمين الصحي الدولي (Bupa, Allianz)', en: 'International Healthcare Insurers' },
            desc: {
              ar: 'ترجمة معتمدة معترف بها لمطالبات التعويض والموافقات المسبقة.',
              en: 'Certified translation for claims, prior authorizations, and reimbursements.'
            }
          }
        ]
      },
      prepGuidelines: {
        title: {
          ar: 'إرشادات المرضى قبل إرسال التقارير الطبية',
          en: 'Patient Checklist Prior to Report Submission'
        },
        items: [
          {
            ar: 'تأكد من وضوح ختم الطبيب واسم المستشفى وتاريخ التقرير وأرقام التحاليل.',
            en: 'Verify that the physician signature, hospital seal, and dates are clearly legible.'
          },
          {
            ar: 'أرفق جواز سفر المريض لضمان كتابة اسمه بالهجاء الرسمي المعتمد في السفر.',
            en: 'Provide patient passport biodata to match personal names accurately on medical charts.'
          }
        ]
      }
    },
    relatedServices: ['embassy-translation', 'personal-documents', 'technical-translation', 'sworn-translation']
  },

  'technical-translation': {
    slug: 'technical-translation',
    metaTitle: {
      ar: 'ترجمة تقنية وهندسية معتمدة في مصر | هيرمس',
      en: 'Certified Technical & Engineering Translation Egypt | Hermes'
    },
    metaDesc: {
      ar: 'مكتب ترجمة تقنية وهندسية معتمد لكتالوجات المعدات، مواصفات المشاريع، كراسات الشروط، وبراءات الاختراع. دقة صناعية متناهية في القاهرة والجيزة.',
      en: 'Accredited technical and engineering translation in Egypt. Operating manuals, technical specs, patents & industrial tenders with rigorous engineering terminology.'
    },
    h1: {
      ar: 'ترجمة تقنية وهندسية معتمدة في مصر | كتالوجات ومواصفات المشاريع الكبرى',
      en: 'Certified Technical & Engineering Translation | Manuals, Specifications & Patents'
    },
    opening: {
      ar: 'تتطلب الترجمة التقنية والهندسية فهماً عميقاً للعلوم التطبيقية، المعايير الصناعية الدولية (ISO / IEEE)، ومصطلحات التشغيل والميكانيكا والكهرباء والبرمجيات. في هيرمس للترجمة المعتمدة، نضع مشاريعك الهندسية بين أيدي مترجمين ومهندسين متخصصين، لترجمة كتالوجات الصيانة والتشغيل، كراسات شروط المشاريع الكبرى، براءات الاختراع، وأدلة السلامة والصحة المهنية (OSHA)، بأعلى درجات الدقة الفنية.',
      en: 'Technical and engineering translation demands rigorous command of applied sciences, international industrial standards (ISO/IEEE), and mechanical, electrical, and software terminology. At Hermes Certified Translations, your technical dossiers are managed by specialized engineers and technical linguists handling operational manuals, mega-project tender specifications, engineering patents, and industrial safety guidelines.'
    },
    definitionTitle: {
      ar: 'ما هي معايير الترجمة التقنية والهندسية المعتمدة؟',
      en: 'Standards of Certified Technical Translation'
    },
    definitionText: {
      ar: 'الترجمة التقنية هي نقل متخصص يلتزم بالدقة الحرفية للمصطلحات الصناعية والهندسية، المحافظة على الرسومات التوضيحية والمخططات والأبعاد القياسية، وضمان خلو أدلة التشغيل من أي لبس قد يؤدي لأعطال تشغيلية أو مخاطر مهنية، مع توفير الختم المعتمد اللازم لجهات الاعتماد الصناعية والرقابية.',
      en: 'Technical translation requires absolute terminological precision matching industrial standards, faithful preservation of engineering diagrams, blueprints, and metrics, ensuring user manuals prevent operational failures or safety hazards, complete with official certification.'
    },
    needTitle: {
      ar: 'متى تحتاج إلى الترجمة الهندسية والتقنية؟',
      en: 'When Do You Require Technical Translation?'
    },
    needText: {
      ar: 'تحتاج المصانع وشركات المقاولات والتكنولوجيا لخدماتنا عند: (1) استيراد خطوط الإنتاج والآلات وتشغيلها في المصانع، (2) التقديم للمناقصات والمشاريع القومية والعطاءات الحكومية، (3) تسجيل براءات الاختراع والحلول البرمجية دولياً، و(4) استيفاء متطلبات السلامة والبيئة ومطابقة معايير الآيزو.',
      en: 'Manufacturing plants, EPC contractors, and technology firms require technical translation when: (1) Commissioning imported production lines and industrial machinery, (2) Submitting bids for governmental infrastructure tenders, (3) Prosecuting engineering patents globally, and (4) Complying with ISO and environmental safety audits.'
    },
    documentsSectionTitle: {
      ar: 'الوثائق التقنية والهندسية التي نترجمها',
      en: 'Technical Documents & Engineering Dossiers'
    },
    categories: [
      {
        title: { ar: 'أدلة التشغيل والكتالوجات الصناعية', en: 'Operation & Maintenance Manuals' },
        items: [
          { ar: 'كتالوجات تشغيل الآلات والمعدات الثقيلة وخطوط الإنتاج', en: 'Heavy machinery, plant equipment, and assembly line manuals' },
          { ar: 'أدلة الصيانة الوقائية واستكشاف الأعطال وإصلاحها (Troubleshooting)', en: 'Preventive maintenance guides and troubleshooting handbooks' },
          { ar: 'نشرات الأمان الكيميائي (MSDS / SDS) وأدلة السلامة المهنية', en: 'Material Safety Data Sheets (MSDS/SDS) and OSHA manuals' }
        ]
      },
      {
        title: { ar: 'مواصفات المشاريع والمناقصات الهندسية', en: 'Project Specifications & Engineering Tenders' },
        items: [
          { ar: 'كراسات الشروط والمواصفات الفنية للمشاريع المعمارية والمدنية', en: 'Bills of quantities, terms of reference, and civil engineering specs' },
          { ar: 'المخططات الهندسية والرسومات الفنية وتوصيفات الأنظمة الكهروميكانيكية', en: 'Engineering blueprints, architectural drawings, and MEP specifications' },
          { ar: 'تقارير فحص الجودة ومطابقة معايير الآيزو (ISO Standards)', en: 'Quality inspection reports and ISO certification compliance dossiers' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'يقوم على ترجمة ملفاتك مهندسون ومترجمون تقنيون ذوو خبرة ميدانية في المصطلحات الصناعية الدقيقة، مع استخدام أحدث أدوات التوحيد المصطلحي لضمان التناسق التام في المشاريع الضخمة.',
      en: 'Executed by technical linguists with industrial backgrounds, utilizing advanced translation memory glossaries to guarantee perfect terminology consistency across thousands of pages.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'كتالوجات التشغيل والمواصفات الفنية القصيرة', en: 'Short Operating Manuals & Technical Specs' },
        standard: { ar: '48 ساعة عمل', en: '48 Business Hours' },
        rush: { ar: '24 ساعة عمل', en: '24 Business Hours' }
      },
      {
        docType: { ar: 'كراسات الشروط والمشاريع الهندسية الكبرى', en: 'Major Engineering Tenders & Detailed Specs' },
        standard: { ar: '3 - 7 أيام عمل', en: '3 - 7 Business Days' },
        rush: { ar: '48 - 72 ساعة عمل', en: '48 - 72 Business Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'كيف تحافظون على الرسومات الهندسية والمخططات في الملف المترجم؟', en: 'How do you preserve engineering drawings and blueprints during translation?' },
        a: {
          ar: 'يمتلك فريقنا برامج متقدمة لمعالجة النصوص داخل الرسومات الهندسية والمخططات (DTP) لإعادة إنتاج الكتالوج بتنسيقه الأصلي مع تعريب أو ترجمة المصطلحات بدقة متناهية.',
          en: 'Our desktop publishing (DTP) unit extracts and replaces text directly within blueprints and schematics, delivering an exact visual replica in the target language.'
        }
      }
    ],
    extendedContent: {
      legalStandards: {
        title: {
          ar: 'معايير الدقة والسلامة في الترجمة الهندسية',
          en: 'Safety & Industrial Precision Benchmarks'
        },
        body: {
          ar: 'تخضع كل ترجمة تقنية لتدقيق هندسي يضمن النقل الصحيح لوحدات القياس والأرقام وإرشادات التحذير من المخاطر لحماية المنشآت والمعدات.',
          en: 'Technical dossiers undergo engineering audits ensuring accurate conversion of metric units, electrical tolerances, and hazardous warning protocols.'
        }
      }
    },
    relatedServices: ['commercial-translation', 'legal-translation', 'academic-documents', 'medical-translation']
  },

  'sworn-translation': {
    slug: 'sworn-translation',
    metaTitle: {
      ar: 'الترجمة المحلفة في مصر | ضوابط الاعتماد القنصلي | هيرمس',
      en: 'Sworn Translation Services in Egypt | Legal Framework | Hermes'
    },
    metaDesc: {
      ar: 'دليلك للترجمة المحلفة في مصر. متى تحتاجها وكيف تستوفي شروط السفارات الأوروبية (ألمانيا، إسبانيا، فرنسا، إيطاليا) عبر مكاتب الترجمة المعتمدة الرسمية.',
      en: 'Comprehensive guide to sworn translation in Egypt. Fulfill requirements of European consulates (Germany, Spain, France, Italy) via certified translation bureaus.'
    },
    h1: {
      ar: 'الترجمة المحلفة في مصر | ضوابط الاعتماد القنصلي والجهات الأوروبية',
      en: 'Sworn Translation Services in Egypt | Legal Framework & Consular Attestation'
    },
    opening: {
      ar: 'يواجه الكثير من المواطنين الراغبين في السفر أو العمل أو الزواج في أوروبا مصطلح "الترجمة المحلفة" (Sworn Translation / Traduction Assermentée / Beglaubigte Übersetzung)، ويتساءلون عن كيفية استيفائها في مصر. في هيرمس للترجمة المعتمدة، نوضح لك الفروق القانونية بدقة ونوفر الترجمات المعتمدة المستوفية لكافة الضوابط التي تطلبها سفارات دول الاتحاد الأوروبي في القاهرة، بالتعاون مع المترجمين المعتمدين وتصديقات الخارجية والقنصليات.',
      en: 'Applicants pursuing employment, civil marriage, or academic programs in Europe frequently encounter requests for Sworn Translation (Traduction Assermentée / Beglaubigte Übersetzung). At Hermes Certified Translations, we demystify this civil-law concept and provide accredited translations fulfilling the rigorous standards mandated by European diplomatic missions in Cairo.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة المحلفة؟ وكيف تطبق في النظام القانوني المصري؟',
      en: 'What is Sworn Translation and How Does it Apply in Egypt?'
    },
    definitionText: {
      ar: 'في دول القانون المدني الأوروبي (مثل فرنسا وإسبانيا وألمانيا)، يُعد المترجم المحلف خبيراً قضائياً يؤدي اليمين القانونية أمام المحكمة. أما في جمهورية مصر العربية، فلا يوجد نظام للمترجم المحلف القضائي المماثل؛ وعوضاً عن ذلك، تقبل السفارات الأوروبية الترجمة الصادرة عن مكاتب الترجمة المعتمدة والمطابقة لإرشاداتها، أو المصدق عليها من وزارة الخارجية المصرية، وفي بعض الحالات قوائم المترجمين المعتمدين المنشورة لدى السفارة.',
      en: 'In European civil-law jurisdictions, a sworn translator is an official appointed by a court. In Egypt, no direct equivalent public notary translator registry exists; instead, European embassies accept certified translations issued by accredited translation bureaus adhering to their published consular criteria and supported by Ministry of Foreign Affairs attestations.'
    },
    needTitle: {
      ar: 'متى يطلب منك تقديم ترجمة محلفة؟',
      en: 'When Are You Required to Present Sworn Translations?'
    },
    needText: {
      ar: 'يطلب منك هذا الإجراء عند: (1) الزواج المدني في إسبانيا أو فرنسا أو ألمانيا أو إيطاليا، (2) معادلة الشهادات الجامعية والمهنية أمام الوزارات الأوروبية، (3) الترافع وتقديم قضايا الميراث والوصاية أمام المحاكم الأوروبية، و(4) طلبات الجنسية الأوروبية ولمّ الشمل العائلي الدائم.',
      en: 'Sworn translations are requested for: (1) Overseas civil marriages in Spain, France, Germany, or Italy, (2) Educational credential recognitions before European ministries, (3) Court litigation and probate proceedings abroad, and (4) European citizenship and long-term family reunification petitions.'
    },
    documentsSectionTitle: {
      ar: 'الوثائق التي يكثر طلب الترجمة المحلفة لها',
      en: 'Documents Commonly Requiring Sworn Certification'
    },
    categories: [
      {
        title: { ar: 'وثائق الحالة المدنية والزواج', en: 'Civil Status & Marriage Deeds' },
        items: [
          { ar: 'شهادات الميلاد والوفاة ووثائق وقسائم الزواج وإشهادات الطلاق', en: 'Birth, death, marriage, and divorce deeds' },
          { ar: 'شهادات العزوبية وعدم وجود مانع من الزواج (شهادة الأهلية للزواج)', en: 'Certificates of celibacy and non-impediment to marriage' },
          { ar: 'القيد العائلي المميكن المصدق من وزارة الخارجية المصرية', en: 'Family registration records attested by the Egyptian MFA' }
        ]
      },
      {
        title: { ar: 'المستندات الجنائية والقضائية', en: 'Criminal Records & Court Filings' },
        items: [
          { ar: 'صحيفة الحالة الجنائية (الفيش والتشبيه) المصدقة للخارج', en: 'Police clearance certificates attested for foreign use' },
          { ar: 'التوكيلات القضائية العامة والخاصة وأحكام إثبات النسب والطلاق', en: 'Judicial powers of attorney and civil status court rulings' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'دراية تامة بمتطلبات السفارات الأوروبية وتفادي أخطاء رد الملفات، مع تقديم التوجيه الإجرائي الكامل لترتيب التصديقات الحكومية والقنصلية.',
      en: 'Deep expertise in European consular mandates, preventing administrative rejections while guiding clients through complete governmental attestation workflows.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'الوثائق الشخصية والمدنية المعتمدة للسفارات الأوروبية', en: 'Civil Records for European Consular Use' },
        standard: { ar: '24 - 48 ساعة عمل', en: '24 - 48 Business Hours' },
        rush: { ar: 'نفس اليوم (خدمة عاجلة)', en: 'Same-Day Express Service' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل ترجمات هيرمس تقبلها السفارة الألمانية والفرنسية والإسبانية؟', en: 'Do German, French, and Spanish embassies accept Hermes translations?' },
        a: {
          ar: 'نعم، تصدر ترجماتنا وفقاً لأحدث الإرشادات المنشورة على مواقع هذه السفارات ومراكز التأشيرات المعتمدة، مع توجيه العميل لأي تصديق مطلوب على أصل الوثيقة قبل التقديم.',
          en: 'Yes. Our translations adhere strictly to updated embassy criteria and visa processing centers, with advisory support on required pre-attestation steps.'
        }
      }
    ],
    relatedServices: ['embassy-translation', 'legal-translation', 'personal-documents', 'notarization']
  },

  'notarization': {
    slug: 'notarization',
    metaTitle: {
      ar: 'خدمات التوثيق والتصديق والأبوستيل في مصر | هيرمس',
      en: 'Document Legalization, MFA Attestation & Apostille Egypt | Hermes'
    },
    metaDesc: {
      ar: 'دليلك ومساعدك في تصديق المستندات من وزارة الخارجية المصرية، الشهر العقاري، والسفارات. استشارات الأبوستيل (Apostille) وتجهيز الأوراق للسفر والعمل.',
      en: 'Guidance and advisory for Ministry of Foreign Affairs (MFA) attestation, Notary legalization & Hague Apostille compliance for Egyptian documents abroad.'
    },
    h1: {
      ar: 'خدمات المساعدة في التوثيق والتصديق والأبوستيل في مصر | دليلك خطوة بخطوة',
      en: 'Document Legalization, MFA Attestation & Apostille Services in Egypt'
    },
    opening: {
      ar: 'يعد مسار تصديق وتوثيق المستندات الرسمية أمام الجهات الحكومية المصرية والسفارات الأجنبية مساراً إجرائياً معقداً يتطلب تسلسلاً إدارياً دقيقاً (من الجهة المصدرة للمستند، مروراً بالوزارة المعنية، ثم مكاتب تصديقات وزارة الخارجية المصرية، وصولاً للتصديق القنصلي أو متطلبات الأبوستيل). في مكتب هيرمس للترجمة المعتمدة، نقدم لعملائنا الدعم الإرشادي والخدمي المتكامل لتجهيز وترجمة وتنسيق ملفاتهم الرسمية لتكون جاهزة ومعتمدة 100% دون إهدار للوقت أو الجهد.',
      en: 'Navigating governmental document authentication, Ministry of Foreign Affairs attestations, and consular legalizations in Egypt is an intricate procedural chain requiring strict sequential compliance. At Hermes Certified Translations, we provide comprehensive advisory and document preparation services ensuring your personal, academic, and corporate dossiers achieve flawless official recognition without wasted time or procedural friction.'
    },
    definitionTitle: {
      ar: 'ما هو الفرق بين التصديق والتوثيق والأبوستيل؟',
      en: 'Understanding Attestation, Legalization & Apostille'
    },
    definitionText: {
      ar: 'التوثيق (Notarization) هو إثبات صحة المحرر أو التوقيع لدى مكاتب الشهر العقاري والتوثيق. التصديق (Attestation / Legalization) هو شهادة تضعها وزارة الخارجية المصرية للتأكيد على صحة توقيع وخاتم الموظف الحكومي على المستند. أما الأبوستيل (Apostille) فهو شهادة تصديق موحدة تطبق بين الدول الموقعة على اتفاقية لاهاي لعام 1961؛ وبالنسبة لمصر، تخضع المستندات لمسار التصديق الدبلوماسي المتبادل (الخارجية المصرية ثم سفارة الدولة المعنية).',
      en: 'Notarization verifies signatures before notary offices (Shahr El-Aqary). Attestation/Legalization is a formal endorsement by the Egyptian Ministry of Foreign Affairs certifying the authenticity of governmental officers signatures. An Apostille is a streamlined certificate established under the 1961 Hague Convention; for non-member flows, documents follow traditional consular legalization (MFA stamp followed by foreign embassy attestation).'
    },
    needTitle: {
      ar: 'متى تحتاج لمساعدة في التصديق والتوثيق؟',
      en: 'When Do You Require Document Attestation Support?'
    },
    needText: {
      ar: 'تحتاج هذه الخدمة عند: (1) توثيق الشهادات الجامعية والمدرسية للسفر للعمل بدول الخليج، (2) تصديق التوكيلات والعقود التجارية والشركات لتقديمها للمحاكم أو البنوك بالخارج، (3) تصديق شهادات الميلاد والزواج والوفاة لاستخراج الإقامات العائلية، و(4) تجهيز أوراق الهجرة وتأشيرات السفر للسفارات الأجنبية.',
      en: 'Attestation support is required when: (1) Certifying university degrees for Gulf employment visas, (2) Legalizing corporate contracts and POAs for foreign courts and registries, (3) Authenticating vital records for overseas family residencies, and (4) Preparing immigration dossiers for foreign consular validation.'
    },
    documentsSectionTitle: {
      ar: 'أنواع المستندات التي نساعد في مسار توثيقها وترجمتها',
      en: 'Document Categories Coordinated for Attestation'
    },
    categories: [
      {
        title: { ar: 'الشهادات والمستندات التعليمية', en: 'Educational & University Credentials' },
        items: [
          { ar: 'توثيق شهادات التخرج وكشوف الدرجات من أمين عام الجامعة ووزارة التعليم العالي', en: 'University degree attestation from university registries and Ministry of Higher Education' },
          { ar: 'توثيق شهادات الثانوية العامة والمدرسية من الإدارات والمديريات التعليمية', en: 'High school diplomas authenticated through Ministry of Education directorates' }
        ]
      },
      {
        title: { ar: 'مستندات الأحوال المدنية والشخصية', en: 'Civil Status & Vital Certificates' },
        items: [
          { ar: 'شهادات الميلاد والزواج والطلاق والقيد العائلي الصادرة من مصلحة الأحوال المدنية', en: 'Civil registry records certified from Ministry of Interior Civil Status bureaus' },
          { ar: 'تصديق صحيفة الحالة الجنائية (الفيش والتشبيه) من الإدارة العامة للأدلة الجنائية', en: 'Police clearance records authenticated through Criminal Evidence Directorate' }
        ]
      },
      {
        title: { ar: 'مستندات الشركات والتوكيلات القانونية', en: 'Corporate Deeds & Powers of Attorney' },
        items: [
          { ar: 'تصديق السجلات التجارية من الغرفة التجارية ومصلحة السجل التجاري', en: 'Commercial registers attested by Chamber of Commerce and registry desks' },
          { ar: 'توثيق التوكيلات والعقود الرسمية من مكاتب الشهر العقاري والتوثيق النموذجية', en: 'Official POAs and deeds legalized by Notary Public registries' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'إرشاد قانوني دقيق يرتب لك مسار المعاملة الحكومية خطوة بخطوة، لضمان استيفاء الأختام الرسمية الصحيحة قبل وبعد الترجمة المعتمدة وتفادي مشقة الطوابير ورفض المعاملات.',
      en: 'Strategic procedural advisory mapping out the exact governmental certification path, guaranteeing proper sequence before and after certified translation.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'الاستشارة والترجمة المعتمدة المصاحبة لملفات التصديق', en: 'Certified Translation & Attestation Preparation' },
        standard: { ar: '24 - 48 ساعة عمل', en: '24 - 48 Business Hours' },
        rush: { ar: 'نفس اليوم', en: 'Same-Day Service' }
      }
    ],
    faqs: [
      {
        q: { ar: 'أين تقع مكاتب تصديقات وزارة الخارجية المصرية في القاهرة والجيزة؟', en: 'Where are Egyptian MFA attestation offices located in Cairo and Giza?' },
        a: {
          ar: 'تنتشر مكاتب تصديقات الخارجية في مقرات متعددة، منها: مكتب تصديقات أحمد عرابي بالمهندسين، مكتب تصديقات الميرلاند بمصر الجديدة، ومكتب تصديقات المعادي والقاهرة الجديدة، وفريقنا يوجهك لأقرب مكتب مناسب لنوع مستندك.',
          en: 'MFA attestation desks operate across key hubs: Ahmed Orabi in Mohandessin, Merryland in Heliopolis, Maadi, and New Cairo. Our team guides you to the nearest appropriate desk.'
        }
      }
    ],
    relatedServices: ['embassy-translation', 'legal-translation', 'sworn-translation', 'personal-documents']
  }
};
