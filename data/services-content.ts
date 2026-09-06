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
}

export const servicesContent: Record<string, ServiceContent> = {
  'embassy-translation': {
    slug: 'embassy-translation',
    metaTitle: {
      ar: 'ترجمة معتمدة للسفارات والهجرة | القاهرة والجيزة | هيرميس',
      en: 'Embassy Certified Translation Services | Cairo & Giza'
    },
    metaDesc: {
      ar: 'ترجمة معتمدة ومقبولة لدى جميع السفارات (الأمريكية، البريطانية، الكندية، شنغن) والهيئات الحكومية. تسليم سريع ودقة متناهية. اطلب عرض سعر الآن.',
      en: 'Accredited translations accepted by all embassies (US, UK, Canada, Schengen) and governmental bodies. Fast delivery and high accuracy. Get a free quote.'
    },
    h1: {
      ar: 'الترجمة المعتمدة للسفارات والجهات الحكومية',
      en: 'Certified Translation for Embassies & Governments'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تقدم خدمات الترجمة المعتمدة المقبولة لدى جميع السفارات والقنصليات والجهات الحكومية والخاصة داخل مصر وخارجها، بدقة متناهية ومطابقة تامة للمستندات الأصلية وبأعلى معايير الجودة والسرية.',
      en: 'Hermes Certified Translations provides certified translation services accepted by all embassies, consulates, and government or private bodies inside and outside Egypt, with absolute accuracy, full compliance with original documents, and the highest standards of quality and confidentiality.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة المعتمدة؟',
      en: 'What is Certified Translation?'
    },
    definitionText: {
      ar: 'الترجمة المعتمدة هي ترجمة مطابقة تماماً للمستند الأصلي، ومختومة بختم مكتب ترجمة معتمد، وتتضمن إقراراً رسمياً من المترجم بمسؤوليته عن صحة الترجمة ومطابقتها للأصل، مع كتابة تاريخ الترجمة وبيانات الاتصال بالمكتب لتسهيل التحقق منها.',
      en: 'Certified translation is an exact translation of the original document, stamped with the seal of an accredited translation office. It includes a formal declaration of accuracy signed by the translator, along with the date and office contact details for verification.'
    },
    needTitle: {
      ar: 'متى تحتاج الترجمة المعتمدة؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاج هذه الخدمة عند تقديم مستندات رسمية صادرة بلغة غير لغة الجهة المستقبلة، مثل تقديم طلبات التأشيرات والهجرة لدى السفارات، أو التقديم للجامعات الأجنبية، أو توثيق الزواج المدني وتأسيس الشركات وفروعها بالخارج.',
      en: 'You need this service when presenting official documents issued in a language other than that of the receiving authority, such as visa and immigration applications at embassies, foreign university admissions, civil marriages, or setting up foreign company branches.'
    },
    documentsSectionTitle: {
      ar: 'المستندات التي نغطيها للجهات الرسمية',
      en: 'Documents We Cover for Official Bodies'
    },
    categories: [
      {
        title: { ar: 'وثائق السفارات الأوروبية (شنغن)', en: 'European (Schengen) Embassy Documents' },
        items: [
          { ar: 'شهادات الميلاد والوفاة وقسيمة الزواج والطلاق', en: 'Birth, death, marriage, and divorce certificates' },
          { ar: 'كشوف الحسابات البنكية للحركة المالية والقيد المالي', en: 'Bank statements showing financial movement and status' },
          { ar: 'خطابات العمل والموارد البشرية (HR Letters)', en: 'HR letters and employment verification documents' },
          { ar: 'السجل التجاري والبطاقة الضريبية لأصحاب الأعمال', en: 'Commercial registers and tax cards for business owners' }
        ]
      },
      {
        title: { ar: 'وثائق السفارة الأمريكية والكندية', en: 'US & Canadian Embassy Documents' },
        items: [
          { ar: 'عقود الملكية للأراضي والعقارات والسيارات', en: 'Property, land, and vehicle deeds' },
          { ar: 'شهادات الخدمة العسكرية وإثبات الموقف التجنيدي', en: 'Military service certificates and enlistment status' },
          { ar: 'الفيش الجنائي المترجم (صحيفة الحالة الجنائية)', en: 'Translated police clearance certificates (criminal records)' },
          { ar: 'شهادات التخرج وكشوف الدرجات الدراسية الموثقة', en: 'Degrees, diplomas, and official academic transcripts' }
        ]
      },
      {
        title: { ar: 'وثائق سفارة بريطانيا والدول الناطقة بالإنجليزية', en: 'UK & English-Speaking Embassy Documents' },
        items: [
          { ar: 'جوازات السفر وبطاقات الرقم القومي', en: 'Passports and national identity cards' },
          { ar: 'شهادات التحركات الصادرة من الجوازات والهجرة', en: 'Travel movement certificates issued by passport authorities' },
          { ar: 'عقود التأسيس للشركات واللوائح الداخلية', en: 'Articles of association and corporate bylaws' },
          { ar: 'كافة الأوراق الثبوتية والمدنية المترجمة', en: 'All other translated civil and identification records' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'خبرة تزيد عن 10 سنوات في التعامل مع متطلبات كافة السفارات وتحديثاتها المستمرة، لضمان قبول ملفاتك من المرة الأولى دون تأخير.',
      en: 'Over 10 years of experience aligning translations with the specific guidelines of foreign embassies to guarantee file acceptance on the first submission.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات أحوال مدنية (ميلاد/زواج)', en: 'Civil Certificates (Birth/Marriage)' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '3-4 ساعات', en: '3-4 Hours' }
      },
      {
        docType: { ar: 'كشوف حسابات بنكية وخطابات عمل', en: 'Bank Statements & HR Letters' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      },
      {
        docType: { ar: 'مستندات شركات (سجل تجاري وبطاقة ضريبية)', en: 'Corporate Documents (Trade Register & Tax Card)' },
        standard: { ar: '48 ساعة', en: '48 Hours' },
        rush: { ar: 'يوم واحد', en: 'Same Day' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل الترجمة مقبولة لدى كل السفارات؟', en: 'Are your translations accepted by all embassies?' },
        a: {
          ar: 'نعم، نحن مكتب ترجمة معتمد تقبل ترجماته كافة السفارات والقنصليات والممثليات الدبلوماسية والجهات الحكومية داخل مصر وخارجها.',
          en: 'Yes, we are an accredited translation office whose stamped translations are recognized by all embassies, consulates, and governmental bodies inside and outside Egypt.'
        }
      },
      {
        q: { ar: 'هل تشترط السفارات ترجمة أوراق معينة؟', en: 'Do embassies require specific documents to be translated?' },
        a: {
          ar: 'نعم، تطلب السفارات ترجمة معتمدة لكافة المستندات المكتوبة بغير لغة بلدها أو لغة الطلب (الإنجليزية في الغالب) لمطابقتها والتأكد من صحتها.',
          en: 'Yes, embassies require certified translation for any documents written in a language other than their official language or the application language (mostly English).'
        }
      },
      {
        q: { ar: 'ما الفرق بين الترجمة المعتمدة والترجمة العادية؟', en: 'What is the difference between certified and regular translation?' },
        a: {
          ar: 'الترجمة المعتمدة تحمل الختم الرسمي وإقرار مطابقة موقع من المترجم، وتلتزم بالصياغة القانونية وتتحمل المسؤولية القانونية عن دقة البيانات المكتوبة.',
          en: 'Certified translation bears the official stamp and signed declaration of accuracy, adheres to formal legal formats, and carries legal liability for data accuracy.'
        }
      }
    ],
    relatedServices: ['legal-translation', 'personal-documents', 'academic-documents', 'sworn-translation']
  },
  'legal-translation': {
    slug: 'legal-translation',
    metaTitle: {
      ar: 'ترجمة قانونية معتمدة في القاهرة والجيزة | هيرميس',
      en: 'Certified Legal Translation in Cairo & Giza | Hermes'
    },
    metaDesc: {
      ar: 'ترجمة قانونية معتمدة للعقود والأحكام والتوكيلات ومستندات المحاكم بصياغة قانونية دقيقة. مترجمون معتمدون من وزارة العدل. تسليم سريع — اطلب عرض سعر.',
      en: 'Certified legal translation of contracts, court rulings, POAs, and litigation documents with precise legal drafting. Ministry of Justice certified translators. Get a quote.'
    },
    h1: {
      ar: 'ترجمة قانونية معتمدة في مصر',
      en: 'Certified Legal Translation in Egypt'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تقدم ترجمة قانونية معتمدة للعقود والأحكام القضائية والتوكيلات ومستندات المحاكم، بصياغة قانونية دقيقة ينفذها مترجمون قانونيون معتمدون من وزارة العدل المصرية. ترجماتنا مقبولة أمام المحاكم والجهات الرسمية في مصر والخارج، مع مراجعة مصطلحية متخصصة وسرية كاملة.',
      en: 'Hermes Certified Translations provides certified legal translation of contracts, court rulings, powers of attorney, and litigation documents, drafted with legal precision by legal translators certified by the Egyptian Ministry of Justice. Our translations are accepted by courts and official authorities in Egypt and abroad, with specialist terminology review and full confidentiality.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة القانونية؟',
      en: 'What is Legal Translation?'
    },
    definitionText: {
      ar: 'الترجمة القانونية هي فرع متخصص من الترجمة يتعامل مع النصوص والمستندات ذات الطابع القانوني. تتطلب فهماً عميقاً للنظامين القانونيين للغة المصدر والهدف، حيث أن الخطأ في ترجمة مصطلح واحد قد يغير الأثر القانوني للمستند أو يبطل الاتفاقية بالكامل.',
      en: 'Legal translation is a specialized field dealing with texts and documents of a legal nature. It requires a deep understanding of both the source and target legal systems, since a single mistranslated term can alter the legal effect of a document or invalidate an agreement.'
    },
    needTitle: {
      ar: 'متى تحتاج الترجمة القانونية؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها عند الدخول في تقاضٍ دولي، أو تنفيذ الأحكام الأجنبية داخل مصر، أو تأسيس الشركات المشتركة، أو إبرام التعاقدات والاتفاقيات التجارية العابرة للحدود، وكذلك عند تقديم مستندات قانونية للسفارات والجهات الرسمية الخارجية.',
      en: 'You need it when involved in international litigation, executing foreign judgments in Egypt, forming joint venture corporations, executing cross-border commercial agreements, or submitting legal files to foreign embassies and authorities.'
    },
    documentsSectionTitle: {
      ar: 'المستندات القانونية التي نغطيها',
      en: 'Legal Documents We Cover'
    },
    categories: [
      {
        title: { ar: 'العقود والاتفاقيات', en: 'Contracts & Agreements' },
        items: [
          { ar: 'عقود العمل، عقود الإيجار والبيع والرهن', en: 'Employment, lease, sale, and mortgage contracts' },
          { ar: 'اتفاقيات الشراكة والتعاون الاستراتيجي', en: 'Partnership and strategic cooperation agreements' },
          { ar: 'اتفاقيات سرية البيانات وعدم الإفصاح (NDAs)', en: 'Non-disclosure and data confidentiality agreements (NDAs)' },
          { ar: 'شروط وأحكام الخدمات وسياسات الخصوصية', en: 'Terms of service and privacy policies' }
        ]
      },
      {
        title: { ar: 'مستندات المحاكم والتقاضي', en: 'Court & Litigation Documents' },
        items: [
          { ar: 'الأحكام القضائية والقرارات والتحكيم الدولي', en: 'Court rulings, judicial orders, and arbitration awards' },
          { ar: 'صحف الدعاوى والإنذارات والمذكرات القانونية', en: 'Statements of claim, legal warnings, and briefs' },
          { ar: 'محاضر جلسات المحاكم وتحقيقات النيابة', en: 'Court hearing minutes and prosecution investigation files' },
          { ar: 'مستندات الأدلة الثبوتية والشهادات القانونية', en: 'Evidentiary documents and legal affidavits' }
        ]
      },
      {
        title: { ar: 'التوكيلات والوثائق المؤسسية', en: 'Powers of Attorney & Corporate Documents' },
        items: [
          { ar: 'التوكيلات العامة والتوكيلات الخاصة بالقضايا والبيع', en: 'General and special powers of attorney' },
          { ar: 'عقود تأسيس الشركات والأنظمة الأساسية لها', en: 'Articles of incorporation and corporate bylaws' },
          { ar: 'محاضر اجتماعات مجالس الإدارة والجمعيات العمومية', en: 'Board of directors and general assembly minutes' },
          { ar: 'الإقرارات والتعهدات والشهادات الرسمية', en: 'Official declarations, pledges, and affidavits' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'خلفية قانونية حقيقية — نحرص على التطابق المصطلحي مع القانون المصري والأنظمة القانونية المقارنة، ومراجعة ثنائية لكل مستند قانوني.',
      en: 'Genuine legal grounding — terminology aligned with Egyptian law and comparative legal systems, with dual review of every legal document.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'عقود واتفاقيات قصيرة (حتى 5 صفحات)', en: 'Short Contracts (up to 5 pages)' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      },
      {
        docType: { ar: 'أحكام قضائية ومذكرات تقاضي معقدة', en: 'Court Rulings & Complex Memoranda' },
        standard: { ar: '48-72 ساعة', en: '48-72 Hours' },
        rush: { ar: '24 ساعة', en: '24 Hours' }
      },
      {
        docType: { ar: 'توكيلات وإقرارات رسمية', en: 'Powers of Attorney & Declarations' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '3-4 ساعات', en: '3-4 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل الترجمة القانونية مقبولة أمام المحاكم؟', en: 'Are legal translations accepted by courts?' },
        a: {
          ar: 'نعم، ترجماتنا مختومة بختم اعتماد رسمي وينفذها مترجمون معتمدون من وزارة العدل، وهي مقبولة أمام المحاكم المصرية والجهات الرسمية، وكذلك الجهات الأجنبية عند استيفاء التصديقات المطلوبة.',
          en: 'Yes, our translations are stamped with an official certification seal and translated by Ministry of Justice-certified translators, making them accepted by Egyptian courts, government authorities, and foreign bodies upon acquiring the necessary attestations.'
        }
      },
      {
        q: { ar: 'هل تترجمون الأحكام الأجنبية لتنفيذها في مصر؟', en: 'Do you translate foreign judgments for enforcement in Egypt?' },
        a: {
          ar: 'نعم، نترجم الأحكام والقرارات القضائية الأجنبية ترجمة معتمدة تصلح لإجراءات الأمر بالتنفيذ، ونرشدك لخطوات التصديق المطلوبة قبل التقديم.',
          en: 'Yes, we translate foreign judgments and court orders into certified translation suitable for enforcement proceedings, and we guide you through the required attestation steps before submission.'
        }
      },
      {
        q: { ar: 'كيف تضمنون دقة المصطلحات القانونية؟', en: 'How do you guarantee the accuracy of legal terminology?' },
        a: {
          ar: 'يتولى الترجمة مترجم قانوني متخصص ثم تُراجع مراجعة ثانية للتحقق المصطلحي، مع الالتزام بالصياغة القانونية المعتمدة في اللغة الهدف.',
          en: 'Translations are handled by specialized legal translators and then undergo a secondary review for terminology verification, ensuring compliance with the standard legal drafting of the target language.'
        }
      },
      {
        q: { ar: 'هل تتعاملون مع مكاتب المحاماة والشركات؟', en: 'Do you work with law firms and corporations?' },
        a: {
          ar: 'نعم، نخدم مكاتب محاماة وإدارات قانونية بعقود إطارية وأسعار خاصة للتعاملات المستمرة وسرية تعاقدية كاملة.',
          en: 'Yes, we serve law firms and corporate legal departments under framework agreements with special pricing for ongoing volume and full contractual confidentiality.'
        }
      },
      {
        q: { ar: 'كم تستغرق ترجمة عقد؟', en: 'How long does it take to translate a contract?' },
        a: {
          ar: 'العقود القصيرة خلال 24-48 ساعة، والمستندات الطويلة أو المعقدة 48-72 ساعة، مع خدمة عاجلة عند الحاجة.',
          en: 'Short contracts take 24-48 hours, while longer or complex documents take 48-72 hours, with same-day express service available if needed.'
        }
      },
      {
        q: { ar: 'هل تحتاج الترجمة القانونية توثيقاً إضافياً؟', en: 'Does legal translation require additional attestation?' },
        a: {
          ar: 'حسب الجهة: بعض الجهات تكتفي بختم الاعتماد الخاص بمكتبنا، وأخرى تطلب تصديق الخارجية أو الشهر العقاري — أخبرنا بالجهة وسنوضح المطلوب.',
          en: 'It depends on the receiving entity: some accept our office certification stamp, while others require Ministry of Foreign Affairs or Notary Public attestation — tell us who you are submitting to and we will clarify the path.'
        }
      }
    ],
    relatedServices: ['sworn-translation', 'notarization', 'commercial-translation', 'embassy-translation']
  },
  'personal-documents': {
    slug: 'personal-documents',
    metaTitle: {
      ar: 'ترجمة معتمدة للوثائق الشخصية | شهادات وفيش جنائي | هيرميس',
      en: 'Certified Personal Document Translation | Hermes Egypt'
    },
    metaDesc: {
      ar: 'ترجمة معتمدة لشهادات الميلاد والزواج والقيد العائلي والفيش الجنائي وجوازات السفر — مقبولة لدى السفارات والجهات الرسمية. تسليم خلال 24 ساعة.',
      en: 'Certified translation of birth, marriage, and family record certificates, criminal records, and passports — accepted by embassies and authorities. 24-hour delivery.'
    },
    h1: {
      ar: 'ترجمة معتمدة للوثائق الشخصية والمدنية',
      en: 'Certified Translation of Personal & Civil Documents'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تترجم وثائقك الشخصية — شهادات الميلاد والزواج والطلاق والقيد العائلي والفيش الجنائي وجوازات السفر — ترجمة معتمدة مختومة تقبلها السفارات والجهات الرسمية في مصر والخارج، مع تسليم خلال 24 ساعة في معظم المستندات.',
      en: 'Hermes Certified Translations translates your personal documents — birth, marriage, and divorce certificates, family records, criminal record certificates, and passports — as stamped certified translations accepted by embassies and official authorities in Egypt and abroad, with 24-hour delivery for most documents.'
    },
    definitionTitle: {
      ar: 'ما هي ترجمة الوثائق الشخصية؟',
      en: 'What is Personal Document Translation?'
    },
    definitionText: {
      ar: 'ترجمة الوثائق الشخصية هي عملية نقل المستندات المدنية والهوية من لغتها الأصلية إلى لغة أخرى ترجمة مطابقة تماماً ومعتمدة رسمياً. تُعنى هذه الخدمة بمطابقة التواريخ، الأرقام التسلسلية، الأسماء الرسمية، وأختام الدولة دون أي تغيير لتكون صالحة للاستخدام القانوني في بلد آخر.',
      en: 'Personal document translation involves translating civil and identity records from their original language into a target language with exact accuracy and official certification. This service ensures dates, serial numbers, official names, and state seals are translated without alteration to be legally valid abroad.'
    },
    needTitle: {
      ar: 'متى تحتاج ترجمة الوثائق الشخصية؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها عند استكمال ملفات الهجرة أو تقديم طلبات التأشيرات للسفارات، أو عند إتمام إجراءات الزواج المدني في الخارج، أو لتسجيل المواليد بالخارج، أو لاستخراج رخص القيادة الدولية وتصاريح العمل الدراسية أو المهنية.',
      en: 'You need it when compiling immigration files, applying for visas at embassies, completing civil marriage procedures abroad, registering births of children born overseas, or issuing international driving licenses and student or work permits.'
    },
    documentsSectionTitle: {
      ar: 'المستندات الشخصية والمدنية التي نغطيها',
      en: 'Personal & Civil Documents We Cover'
    },
    categories: [
      {
        title: { ar: 'شهادات الأحوال المدنية', en: 'Civil Status Certificates' },
        items: [
          { ar: 'شهادات الميلاد وشهادات الوفاة الرسمية', en: 'Official birth certificates and death certificates' },
          { ar: 'عقود وقسائم الزواج الرسمية والطلاق بجميع أنواعها', en: 'Marriage certificates and divorce decrees' },
          { ar: 'شهادات القيد العائلي المجمع والقيد الفردي', en: 'Bilingual family records and individual status records' },
          { ar: 'إثباتات صلة القرابة والنسب والوصاية الشرعية', en: 'Affidavits of kinship, descent, and legal guardianship' }
        ]
      },
      {
        title: { ar: 'وثائق الهوية والأمن', en: 'Identity & Security Documents' },
        items: [
          { ar: 'جوازات السفر وبطاقات الرقم القومي الشخصية', en: 'Passports and national identity cards' },
          { ar: 'صحيفة الحالة الجنائية (الفيش والتشبيه)', en: 'Police clearance certificates (criminal record checks)' },
          { ar: 'شهادات التحركات لتوضيح سجل السفر للخارج', en: 'Travel movement records detailing entry and exit logs' },
          { ar: 'بطاقات التجنيد وشهادات الإعفاء من الخدمة العسكرية', en: 'Military conscription cards and service exemption certificates' }
        ]
      },
      {
        title: { ar: 'وثائق شخصية أخرى', en: 'Other Personal Documents' },
        items: [
          { ar: 'رخص القيادة المحلية والدولية', en: 'Domestic and international driving licenses' },
          { ar: 'شهادات التطعيم والشهادات الصحية والطبية الشخصية', en: 'Vaccination cards, health certificates, and medical records' },
          { ar: 'إيصالات المرافق (كهرباء، مياه، غاز) كإثبات سكن', en: 'Utility bills (electricity, water, gas) for proof of residence' },
          { ar: 'شهادات الخبرة المهنية والسير الذاتية المعتمدة', en: 'Employment certificates and certified CVs' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'مطابقة الأسماء بالإنجليزية مع جواز السفر حرفياً — أهم سبب لرفض الملفات، ونتحقق منه في كل وثيقة.',
      en: 'Exact passport-matched name spelling — the top reason files get rejected, verified on every document.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات الميلاد والوفاة والزواج والطلاق', en: 'Birth, Death, Marriage & Divorce Certificates' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '2-3 ساعات', en: '2-3 Hours' }
      },
      {
        docType: { ar: 'الفيش الجنائي وبطاقات الرقم القومي وجوازات السفر', en: 'Police Clearance, National IDs & Passports' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '2-3 ساعات', en: '2-3 Hours' }
      },
      {
        docType: { ar: 'القيد العائلي المجمع وشهادات التحركات الطويلة', en: 'Family Records & Travel Movement Logs' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'كم تستغرق ترجمة شهادة ميلاد أو فيش جنائي؟', en: 'How long does it take to translate a birth certificate or police clearance?' },
        a: {
          ar: 'خلال 24 ساعة في المعتاد، ومتاح التسليم في نفس اليوم عند وجود موعد سفارة قريب أو في الحالات العاجلة خلال ساعات معدودة.',
          en: 'Usually within 24 hours. Same-day delivery is available for urgent cases and near embassy appointments, completed in just a few hours.'
        }
      },
      {
        q: { ar: 'كيف تُكتب الأسماء في الترجمة؟', en: 'How are names written in the translation?' },
        a: {
          ar: 'نطابق كتابة الأسماء حرفياً مع جواز السفر أو أي مستند رسمي سابق بالإنجليزية تزودنا به، لضمان اتساق ملفك بالكامل وتفادي الرفض.',
          en: 'We match the spelling of names letter-for-letter with your passport or any previous English official documents you provide, ensuring consistency throughout your application.'
        }
      },
      {
        q: { ar: 'هل تكفي صورة الوثيقة من الموبايل؟', en: 'Is a mobile photo of the document sufficient?' },
        a: {
          ar: 'نعم بشرط وضوح كل البيانات والأختام بشكل كامل ودون انعكاس للضوء، وبعض الجهات تطلب الاطلاع على أصل المستند عند التقديم فقط.',
          en: 'Yes, provided all details and stamps are fully clear and legible. Note that some authorities might request to see the original document during submission.'
        }
      },
      {
        q: { ar: 'هل الترجمة مقبولة لدى السفارات؟', en: 'Are your translations accepted by embassies?' },
        a: {
          ar: 'نعم، مختومة بختم اعتماد رسمي مقبول لدى السفارات والقنصليات، ونجهزها وفق متطلبات كل سفارة محددة.',
          en: 'Yes, they are stamped with an official certification seal accepted by embassies and consulates, and we format them according to specific embassy rules.'
        }
      },
      {
        q: { ar: 'هل تترجمون القيد العائلي المجمع؟', en: 'Do you translate joint family records?' },
        a: {
          ar: 'نعم، نترجم القيد الفردي والعائلي المجمع بكل تفاصيله وبتنسيق يطابق شكل وتخطيط المستند الأصلي.',
          en: 'Yes, we translate both individual and collective family records with all detailed entries, maintaining the exact format of the original document.'
        }
      },
      {
        q: { ar: 'كيف أستلم الترجمة؟', en: 'How do I receive the translation?' },
        a: {
          ar: 'نسخة PDF معتمدة فوراً على واتساب أو البريد الإلكتروني، وتتوفر نسخة مطبوعة مختومة يمكنك استلامها من الفرع أو نرسلها لك بالشحن لباب البيت.',
          en: 'An approved PDF copy will be sent to your WhatsApp or email instantly. Stamped hard copies can be collected from our branch or delivered to your doorstep.'
        }
      }
    ],
    relatedServices: ['embassy-translation', 'academic-documents', 'sworn-translation', 'notarization']
  },
  'academic-documents': {
    slug: 'academic-documents',
    metaTitle: {
      ar: 'ترجمة معتمدة للشهادات والوثائق الأكاديمية | هيرميس',
      en: 'Certified Academic Document & Transcript Translation | Hermes'
    },
    metaDesc: {
      ar: 'ترجمة معتمدة لشهادات التخرج وبيانات الدرجات وخطابات القبول وملفات المنح — مقبولة لدى الجامعات والسفارات وجهات معادلة الشهادات. اطلب عرض سعر.',
      en: 'Certified translation of graduation certificates, transcripts, admission letters, and scholarship files — accepted by universities, embassies, and credential evaluators like WES. Get a quote.'
    },
    h1: {
      ar: 'ترجمة معتمدة للوثائق الأكاديمية والشهادات الدراسية',
      en: 'Certified Translation of Academic Documents & Degrees'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تترجم وثائقك الأكاديمية — شهادات التخرج وبيانات الدرجات وخطابات القبول وملفات المنح — ترجمة معتمدة تقبلها الجامعات الأجنبية والسفارات وجهات معادلة الشهادات مثل WES وأنابين، مع دقة كاملة في المقررات والتقديرات والساعات المعتمدة.',
      en: 'Hermes Certified Translations translates your academic documents — graduation certificates, transcripts, admission letters, and scholarship files — as certified translations accepted by foreign universities, embassies, and credential evaluators such as WES and Anabin, with full accuracy in course names, grades, and credit hours.'
    },
    definitionTitle: {
      ar: 'ما هي ترجمة الوثائق الأكاديمية؟',
      en: 'What is Academic Document Translation?'
    },
    definitionText: {
      ar: 'ترجمة الوثائق الأكاديمية هي عملية نقل الشهادات والدرجات والمستندات التعليمية من لغة الدراسة إلى لغة أخرى. تتطلب الترجمة دقة متناهية في مطابقة المسميات الأكاديمية للمقررات، وسياق التقديرات الدراسية، وحساب الساعات المعتمدة لتلائم نظام التعليم في الدولة الهدف.',
      en: 'Academic document translation is the process of translating certificates, transcripts, and educational records. It requires extreme precision in matching academic subject names, grade descriptions, and credit hours to fit the educational system of the destination country.'
    },
    needTitle: {
      ar: 'متى تحتاج ترجمة الوثائق الأكاديمية؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها للتقديم على المنح الدراسية الدولية (مثل تشيفنينج، فولبرايت، DAAD)، أو استكمال القبول في الجامعات الأجنبية، أو إجراءات معادلة الشهادات لدى الهيئات الدولية (مثل WES في أمريكا وكندا، أو Anabin في ألمانيا)، أو كجزء من ملف تأشيرة الدراسة والسفر.',
      en: 'You need it when applying for international scholarships (such as Chevening, Fulbright, DAAD), securing foreign university admissions, pursuing credential evaluation (like WES in the US/Canada, or Anabin in Germany), or as part of student visa applications.'
    },
    documentsSectionTitle: {
      ar: 'الشهادات والوثائق الأكاديمية التي نترجمها',
      en: 'Academic Degrees & Documents We Translate'
    },
    categories: [
      {
        title: { ar: 'الشهادات والوثائق الأساسية', en: 'Degrees & Core Certificates' },
        items: [
          { ar: 'شهادات التخرج الجامعية والمؤهلات العليا (بكالوريوس، ليسانس)', en: 'University graduation certificates and undergraduate degrees' },
          { ar: 'شهادات الماجستير والدكتوراه والدراسات العليا', en: 'Master’s degrees, PhD diplomas, and postgraduate certificates' },
          { ar: 'شهادات الثانوية العامة والدبلومات الفنية والمعاهد', en: 'High school certificates, vocational diplomas, and institutes' },
          { ar: 'شهادات إتمام الدورات التدريبية والكورسات المهنية', en: 'Training course certificates and professional certifications' }
        ]
      },
      {
        title: { ar: 'بيانات التقدير والدرجات', en: 'Transcripts & Grade Records' },
        items: [
          { ar: 'بيانات وبيانات الدرجات التفصيلية (Transcripts)', en: 'Detailed transcripts and academic grade reports' },
          { ar: 'توصيف المقررات الدراسية والمناهج للسنوات الكاملة', en: 'Course descriptions and complete syllabus profiles' },
          { ar: 'شهادات الساعات المعتمدة ونسب الحضور', en: 'Credit hour summaries and attendance records' },
          { ar: 'شهادات التقدير الشرفي والتخرج بتميز', en: 'Certificates of honor and academic excellence' }
        ]
      },
      {
        title: { ar: 'خطابات القبول والمنح والدافع', en: 'Scholarship & Admission Files' },
        items: [
          { ar: 'خطابات القبول المبدئي والنهائي من الجامعات', en: 'Conditional and unconditional university acceptance letters' },
          { ar: 'خطابات التوصية الأكاديمية من الأساتذة (Recommendation Letters)', en: 'Academic recommendation letters from professors' },
          { ar: 'خطابات الدافع والخطابات الشخصية للتقديم (Motivation Letters)', en: 'Motivation letters and personal statements' },
          { ar: 'وثائق ومراسلات المنح الدراسية وملفات المعادلة', en: 'Scholarship applications, correspondences, and evaluation folders' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'خبرة بمتطلبات جهات المعادلة الدولية وأنظمة التقديرات المختلفة (GPA، النسبة المئوية، التقديرات اللفظية) وتحويلها بشكل صحيح.',
      en: 'Expertise in international evaluators’ requirements and grading systems (GPA, percentage, verbal grades) handled correctly.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات التخرج والمؤهلات الأكاديمية (صفحة واحدة)', en: 'Degrees & Graduation Certificates (1 page)' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '3-4 ساعات', en: '3-4 Hours' }
      },
      {
        docType: { ar: 'بيانات درجات وكشوف تقديرات (حتى 3 صفحات)', en: 'Academic Transcripts (up to 3 pages)' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      },
      {
        docType: { ar: 'توصيف المقررات والمناهج الدراسية الطويلة', en: 'Detailed Course Descriptions & Syllabus Books' },
        standard: { ar: '3-5 أيام', en: '3-5 Days' },
        rush: { ar: '48 ساعة', en: '48 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل الترجمة مقبولة لدى الجامعات الأجنبية وجهات المعادلة؟', en: 'Are your translations accepted by foreign universities and evaluators?' },
        a: {
          ar: 'نعم، ترجماتنا المختومة مقبولة لدى الجامعات والسفارات وجهات المعادلة مثل WES وأنابين، ونجهزها وفق متطلبات الجهة المحددة.',
          en: 'Yes, our stamped translations are accepted by universities, embassies, and evaluation agencies like WES and Anabin, prepared strictly according to their guidelines.'
        }
      },
      {
        q: { ar: 'كيف تترجمون التقديرات والدرجات؟', en: 'How do you translate grades and GPA?' },
        a: {
          ar: 'ننقل التقديرات والدرجات حرفياً كما هي في الأصل دون تغيير أو معادلة ذاتية (سواء نسبة مئوية أو GPA أو تقدير لفظي)، لأن جهة المعادلة هي الوحيدة المسؤولة عن احتساب المعادلة.',
          en: 'We translate grades and GPAs exactly as they appear in the original document without performing manual conversions, as the credential evaluation agency handles conversions.'
        }
      },
      {
        q: { ar: 'هل تترجمون توصيف المقررات الطويل؟', en: 'Do you translate long course descriptions?' },
        a: {
          ar: 'نعم، نترجم توصيف المقررات والمناهج الكامل مهما كان حجمه، وهو مطلوب بكثرة في معادلات تخصصات الهندسة، الطب، والصيدلة بالخارج.',
          en: 'Yes, we translate full course descriptions and syllabi of any volume, which is frequently required for engineering, medicine, and pharmacy credentials evaluation.'
        }
      },
      {
        q: { ar: 'كم تستغرق ترجمة بيان درجات؟', en: 'How long does a transcript translation take?' },
        a: {
          ar: 'بيان الدرجات المعتاد يستغرق 24-48 ساعة، بينما كشوف الدرجات الطويلة أو توصيف المقررات الضخمة تستغرق 3-5 أيام عمل حسب عدد الكلمات.',
          en: 'A standard transcript takes 24-48 hours. Comprehensive multi-page transcripts or large syllabus books take 3-5 working days depending on word count.'
        }
      },
      {
        q: { ar: 'هل أحتاج ختم الجامعة قبل الترجمة؟', en: 'Do I need to stamp my documents from the university before translation?' },
        a: {
          ar: 'يفضل أن تكون وثائقك مختومة من الجامعة أولاً أو موثقة حسب شروط الجهة الموجه إليها، وسنرشدك للترتيب المطلوب بناءً على وجهتك.',
          en: 'It is highly recommended to have your documents stamped by your university or legalized as requested by the destination. We will guide you on the proper order.'
        }
      },
      {
        q: { ar: 'هل تجهزون الملف كاملاً لمنحة أو جامعة؟', en: 'Do you prepare the complete file for a university or scholarship application?' },
        a: {
          ar: 'نعم، نترجم الملف كاملاً (شهادات + بيان درجات + خطابات التوصية والدافع) بتنسيق أكاديمي موحد وأسعار مخفضة للباقات التعليمية المتكاملة.',
          en: 'Yes, we translate the entire package (diplomas, transcripts, recommendation letters, and motivation letters) in a unified format with package discounts.'
        }
      }
    ],
    relatedServices: ['embassy-translation', 'personal-documents', 'sworn-translation']
  },
  'commercial-translation': {
    slug: 'commercial-translation',
    metaTitle: {
      ar: 'ترجمة تجارية معتمدة للشركات | سجلات وعقود وميزانيات | هيرميس',
      en: 'Certified Commercial & Business Translation | Hermes Egypt'
    },
    metaDesc: {
      ar: 'ترجمة تجارية معتمدة للسجلات التجارية وعقود الشركات والميزانيات والقوائم المالية ومراسلات الأعمال — دقة مالية وقانونية وسرية تعاقدية. اطلب عرض سعر.',
      en: 'Certified commercial translation of trade registers, corporate contracts, balance sheets, financial statements, and business correspondence — financial and legal precision with full confidentiality.'
    },
    h1: {
      ar: 'ترجمة تجارية معتمدة للشركات والأعمال',
      en: 'Certified Commercial Translation for Companies & Business'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تقدم ترجمة تجارية معتمدة للسجلات التجارية وعقود الشركات والميزانيات والقوائم المالية ومستندات المناقصات، بدقة مالية وقانونية وسرية تعاقدية كاملة. نخدم الشركات المصرية المتوسعة خارجياً والشركات الأجنبية العاملة في مصر.',
      en: 'Hermes Certified Translations provides certified commercial translation of trade registers, corporate contracts, balance sheets, financial statements, and tender documents, with financial and legal precision and full contractual confidentiality. We serve Egyptian companies expanding abroad and foreign companies operating in Egypt.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة التجارية؟',
      en: 'What is Commercial Translation?'
    },
    definitionText: {
      ar: 'الترجمة التجارية هي ترجمة المستندات المالية، القانونية، والإدارية الخاصة بالشركات والمؤسسات. تتطلب معرفة بمصطلحات المحاسبة وإدارة الأعمال وأنظمة الضرائب الدولية، بالإضافة للالتزام الكامل بنقل البيانات المالية والأرقام بدقة بالغة دون أي خطأ.',
      en: 'Commercial translation covers financial, legal, and administrative documents for businesses and corporations. It requires expertise in accounting, business administration, and international tax terms, alongside an absolute commitment to copying financial data and figures without errors.'
    },
    needTitle: {
      ar: 'متى تحتاج الترجمة التجارية؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها شركتك لفتح حسابات بنكية دولية، أو الدخول في مناقصات عالمية، أو تأسيس فروع وشركات تابعة خارج مصر، أو تقديم الميزانيات السنوية لمصلحة الضرائب أو الشركاء الأجانب والمراجعين الدوليين.',
      en: 'Your company needs it to open international bank accounts, participate in global tenders, establish subsidiaries and branches abroad, or submit annual financials to tax authorities, foreign partners, and international auditors.'
    },
    documentsSectionTitle: {
      ar: 'المستندات التجارية والمالية التي نغطيها',
      en: 'Commercial & Financial Documents We Cover'
    },
    categories: [
      {
        title: { ar: 'وثائق تأسيس وتراخيص الشركات', en: 'Incorporation & Licensing Documents' },
        items: [
          { ar: 'السجلات التجارية للشركات والشركاء الموصين', en: 'Trade registers and commercial certificates' },
          { ar: 'البطاقات الضريبية والشهادات والتسجيل في القيمة المضافة', en: 'Tax cards, registrations, and VAT certificates' },
          { ar: 'عقود تأسيس الشركات وعقود تعديل الشركاء', en: 'Articles of incorporation and partnership amendment deeds' },
          { ar: 'الأنظمة الأساسية للشركات واللوائح الداخلية للعمل', en: 'Corporate bylaws and internal labor regulations' }
        ]
      },
      {
        title: { ar: 'التقارير المالية والميزانيات', en: 'Financial Reports & Balance Sheets' },
        items: [
          { ar: 'الميزانيات العمومية السنوية والدورية وقوائم المركز المالي', en: 'Annual and periodic balance sheets and statements of financial position' },
          { ar: 'قوائم الدخل وقوائم التدفقات النقدية والأرباح والخسائر', en: 'Income statements, cash flow statements, and profit & loss sheets' },
          { ar: 'تقارير مراقبي الحسابات والمراجعين الماليين الخارجيين', en: 'Auditors’ reports and external financial audits' },
          { ar: 'الإقرارات الضريبية والتقارير المالية للبنوك', en: 'Tax returns and financial disclosures for banks' }
        ]
      },
      {
        title: { ar: 'عقود ومراسلات الأعمال', en: 'Corporate Contracts & Correspondence' },
        items: [
          { ar: 'عقود التوريد والإنتاج والتوزيع والوكالات التجارية', en: 'Supply, manufacturing, distribution, and commercial agency contracts' },
          { ar: 'كراسات الشروط والمواصفات ومستندات المناقصات', en: 'Tender books, specifications, and bidding documents' },
          { ar: 'الملفات التعريفية بالشركات والعروض المالية (Profiles)', en: 'Company profiles and commercial/financial proposals' },
          { ar: 'مراسلات مجلس الإدارة والمراسلات التجارية الرسمية', en: 'Board resolutions and formal business correspondence' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'تدقيق مزدوج للأرقام والجداول المالية، والحفاظ على تنسيق القوائم المالية كما في الأصل — وخبرة سابقة في ترجمة قوائم مالية ولوائح اتحادات.',
      en: 'Double verification of figures and financial tables, original formatting preserved — with proven experience translating financial statements and federation regulations.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'سجل تجاري وبطاقة ضريبية (2-4 صفحات)', en: 'Trade Register & Tax Card (2-4 pages)' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      },
      {
        docType: { ar: 'قوائم مالية وميزانيات بجداول معقدة', en: 'Financial Statements & Complex Balance Sheets' },
        standard: { ar: '48-72 ساعة', en: '48-72 Hours' },
        rush: { ar: '24 ساعة', en: '24 Hours' }
      },
      {
        docType: { ar: 'عقود تأسيس وكتيبات لوائح داخلية', en: 'Articles of Association & Internal Regulations' },
        standard: { ar: '3-5 أيام', en: '3-5 Days' },
        rush: { ar: '48 ساعة', en: '48 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل الترجمة مقبولة لدى البنوك والجهات الرسمية؟', en: 'Are commercial translations accepted by banks and official bodies?' },
        a: {
          ar: 'نعم، ترجماتنا المختومة مقبولة لدى كافة البنوك والوزارات وهيئة الاستثمار والسفارات والجهات الرسمية في مصر والخارج لتسهيل كافة المعاملات.',
          en: 'Yes, our certified translations are recognized by banks, ministries, GAFI, embassies, and regulatory authorities in Egypt and abroad.'
        }
      },
      {
        q: { ar: 'كيف تضمنون سرية مستندات الشركة؟', en: 'How do you guarantee the confidentiality of company documents?' },
        a: {
          ar: 'نلتزم بسرية تعاقدية كاملة ونظام حماية صارم، ويمكننا توقيع اتفاقية عدم إفصاح (NDA) متبادلة مع شركتك قبل استلام أو البدء في أي مستندات.',
          en: 'We maintain strict security and confidentiality protocols. We can sign a non-disclosure agreement (NDA) with your company before receiving or translating any files.'
        }
      },
      {
        q: { ar: 'هل تترجمون القوائم المالية بجداولها؟', en: 'Do you translate financial statements with their tables?' },
        a: {
          ar: 'نعم، نترجم القوائم المالية والميزانيات بجداولها كاملة مع الحفاظ على التخطيط والتنسيق والتدقيق المزدوج لكافة الأرقام.',
          en: 'Yes, we translate financial statements and balance sheets with their layout and tabular format completely preserved, alongside double verification of all figures.'
        }
      },
      {
        q: { ar: 'هل تقدمون أسعاراً خاصة للشركات؟', en: 'Do you offer special corporate rates?' },
        a: {
          ar: 'نعم، نقدم عقوداً إطارية وأسعاراً تفضيلية مخصصة للشركات ذات التعامل المستمر ومكاتب المحاماة والمكاتب المحاسبية والاستشارية.',
          en: 'Yes, we offer custom framework contracts and volume discounts for corporate accounts, law firms, accounting agencies, and consultancies.'
        }
      },
      {
        q: { ar: 'كم تستغرق ترجمة ملف مناقصة؟', en: 'How long does a tender translation take?' },
        a: {
          ar: 'حسب الحجم — الملفات المعتادة تستغرق 3-5 أيام عمل، مع إمكانية تقسيم التسليم على دفعات للمشاريع الضخمة ذات المواعيد الضيقة.',
          en: 'Depending on volume, standard files take 3-5 business days. We can provide phased delivery for large bids with tight deadlines.'
        }
      },
      {
        q: { ar: 'هل تترجمون من وإلى لغات غير الإنجليزية؟', en: 'Do you translate to/from languages other than English?' },
        a: {
          ar: 'نعم، نغطي لغات متعددة تشمل الألمانية، الفرنسية، الإيطالية، الإسبانية، الصينية، والروسية بما يتلاءم مع طبيعة أسواق شركائك في الخارج.',
          en: 'Yes, we support multiple languages including German, French, Italian, Spanish, Chinese, and Russian to suit your global target markets.'
        }
      }
    ],
    relatedServices: ['legal-translation', 'technical-translation', 'sworn-translation', 'notarization']
  },
  'medical-translation': {
    slug: 'medical-translation',
    metaTitle: {
      ar: 'ترجمة طبية معتمدة | تقارير وتحاليل وملفات علاجية | هيرميس',
      en: 'Certified Medical Translation | Reports, Labs & Treatment Files | Hermes'
    },
    metaDesc: {
      ar: 'ترجمة طبية معتمدة للتقارير والتحاليل والأشعة والملفات العلاجية بمصطلحات طبية دقيقة وسرية كاملة — للعلاج بالخارج والتأمين والسفارات. اطلب عرض سعر.',
      en: 'Certified medical translation of reports, lab results, imaging, and treatment files with precise medical terminology and full confidentiality — for treatment abroad, insurance, and embassies.'
    },
    h1: {
      ar: 'ترجمة طبية معتمدة في مصر',
      en: 'Certified Medical Translation in Egypt'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تقدم ترجمة طبية معتمدة للتقارير الطبية والتحاليل والأشعة والملفات العلاجية، ينفذها مترجمون متخصصون في المصطلحات الطبية وبسرية كاملة. ترجماتنا مقبولة لدى المستشفيات الدولية وشركات التأمين والسفارات لملفات العلاج بالخارج.',
      en: 'Hermes Certified Translations provides certified medical translation of medical reports, lab results, imaging, and treatment files, produced by translators specialized in medical terminology under full confidentiality. Our translations are accepted by international hospitals, insurance companies, and embassies for treatment-abroad files.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة الطبية؟',
      en: 'What is Medical Translation?'
    },
    definitionText: {
      ar: 'الترجمة الطبية هي نقل المستندات الصحية والدوائية الحساسة من لغة إلى أخرى بدقة تامة. يتولاها مترجمون ذوو خلفية علمية أو طبية لضمان المطابقة الكاملة للمصطلحات اللاتينية والطبية المعقدة، والجرعات، وتسميات الأمراض والتحاليل.',
      en: 'Medical translation involves translating highly sensitive healthcare, medical, and pharmaceutical documents. It is handled by translators with scientific or clinical backgrounds to guarantee absolute accuracy in Latin terms, drug dosages, and disease names.'
    },
    needTitle: {
      ar: 'متى تحتاج الترجمة الطبية؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها عند ترتيب السفر للعلاج بالخارج، أو الحصول على رأي طبي ثانٍ من استشاري دولي، أو تقديم مطالبات استرداد التكاليف لشركات التأمين الصحي الأجنبية، أو لاستكمال إجراءات السفر والتأشيرات الطبية.',
      en: 'You need it when organizing treatment overseas, requesting a second medical opinion from international specialists, submitting medical expense claims to foreign insurance agencies, or completing medical visa files.'
    },
    documentsSectionTitle: {
      ar: 'الوثائق الطبية والصحية التي نغطيها',
      en: 'Medical & Health Documents We Cover'
    },
    categories: [
      {
        title: { ar: 'التقارير والملفات الطبية', en: 'Medical Reports & Files' },
        items: [
          { ar: 'التقارير الطبية العامة وتقارير الأخصائيين والاستشاريين', en: 'General medical reports, specialist assessments, and doctor reviews' },
          { ar: 'ملخصات الخروج من المستشفيات وتقارير العمليات الجراحية', en: 'Hospital discharge summaries and surgical reports' },
          { ar: 'الروشتات والوصفات الطبية وأدلة استخدام الأدوية', en: 'Doctor prescriptions and pharmaceutical instructions' },
          { ar: 'التاريخ المرضي الشامل وبطاقات المتابعة الصحية', en: 'Complete patient history files and health tracking logs' }
        ]
      },
      {
        title: { ar: 'الفحوصات والتحاليل المخبرية', en: 'Diagnostics & Lab Results' },
        items: [
          { ar: 'تقارير التحاليل الطبية المخبرية بكافة تصنيفاتها', en: 'All categories of clinical laboratory test results' },
          { ar: 'تقارير الأشعة السينية (X-Ray)، الرنين المغناطيسي (MRI)، والمقطعية (CT)', en: 'Radiology reports including X-ray, MRI, and CT scan logs' },
          { ar: 'تقارير الموجات فوق الصوتية (Ultrasound) وتخطيط القلب (ECG)', en: 'Ultrasound summaries and electrocardiogram (ECG) readouts' },
          { ar: 'تقارير فحص الأنسجة والخزعات الطبية', en: 'Biopsy and histopathology diagnostic reports' }
        ]
      },
      {
        title: { ar: 'وثائق السفر والتأمين الطبي', en: 'Medical Travel & Insurance' },
        items: [
          { ar: 'الشهادات الصحية العامة وشهادات اللياقة البدنية للسفر والعمل', en: 'General health clearance certificates and physical fitness reports' },
          { ar: 'تقارير اللجان الطبية الرسمية للمطالبات والتأمينات', en: 'Official medical board reports for insurance and disability claims' },
          { ar: 'فواتير العلاج بالمستشفيات للمطالبات المالية', en: 'Hospital bills and medical expense invoices' },
          { ar: 'كروت ووثائق التأمين الصحي الدولي ورسائل الضغط المالي', en: 'International health insurance certificates and letters of guarantee' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'مترجم طبي معتمد بخبرة في التقارير الصادرة من المستشفيات المصرية والمصطلحات المستخدمة فيها، وأولوية قصوى للسرية في البيانات الصحية.',
      en: 'Certified medical translators experienced with Egyptian hospital reports and their terminology, with top-priority confidentiality for health data.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'تقارير طبية وروشتات (صفحة إلى صفحتين)', en: 'Medical Reports & Prescriptions (1-2 pages)' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '2-3 ساعات', en: '2-3 Hours' }
      },
      {
        docType: { ar: 'تقارير تحاليل وأشعة معقدة المصطلحات', en: 'Lab Results & Complex Imaging Reports' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '4-6 ساعات', en: '4-6 Hours' }
      },
      {
        docType: { ar: 'ملفات علاجية كاملة وتقارير جراحات طويلة', en: 'Complete Treatment Files & Surgical Summaries' },
        standard: { ar: '48-72 ساعة', en: '48-72 Hours' },
        rush: { ar: '24 ساعة', en: '24 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'هل الترجمة مقبولة لدى المستشفيات الأجنبية وشركات التأمين؟', en: 'Are your translations accepted by foreign hospitals and insurance companies?' },
        a: {
          ar: 'نعم، ترجماتنا المختومة مقبولة لدى المستشفيات الدولية وشركات التأمين والسفارات لملفات العلاج بالخارج والمطالبات المالية.',
          en: 'Yes, our certified translations are accepted by international hospitals, insurance agencies, and embassies for overseas treatment and financial claims.'
        }
      },
      {
        q: { ar: 'من يترجم التقارير الطبية؟', en: 'Who translates the medical reports?' },
        a: {
          ar: 'مترجمون متخصصون في الترجمة الطبية بمرجعية مصطلحية معتمدة وخلفية علمية، مع مراجعة ثانية لكل تقرير قبل الختم.',
          en: 'Specialized medical translators with clinical terminology resources and scientific backgrounds, followed by a secondary review before stamping.'
        }
      },
      {
        q: { ar: 'هل بياناتي الصحية سرية؟', en: 'Is my health data kept confidential?' },
        a: {
          ar: 'سرية تامة — الملفات الطبية تُعامل بأعلى مستوى خصوصية ولا يطلع عليها سوى فريق الترجمة المسؤول ولا يتم مشاركتها مطلقاً.',
          en: '100% confidential. Medical files are treated with the highest degree of privacy, restricted only to the translation team, and never shared.'
        }
      },
      {
        q: { ar: 'كم تستغرق ترجمة تقرير طبي؟', en: 'How long does a medical report translation take?' },
        a: {
          ar: 'التقارير المعتادة 24-48 ساعة، والملفات العلاجية الكاملة 2-4 أيام، مع خدمة عاجلة لحالات السفر العلاجي القريب.',
          en: 'Standard reports take 24-48 hours. Comprehensive medical histories take 2-4 days. Urgent same-day services are available for sudden medical travel.'
        }
      },
      {
        q: { ar: 'هل تترجمون خط اليد في الروشتات والتقارير؟', en: 'Do you translate handwritten prescriptions and reports?' },
        a: {
          ar: 'نعم عندما يكون خط اليد مقروءاً، وإذا تعذرت قراءة جزء نحدده بوضوح ونطلب توضيحه من جهة الإصدار لضمان الدقة وتفادي التخمين.',
          en: 'Yes, if it is legible. If any part is unreadable, we label it clearly and ask you to clarify it with the issuing doctor to avoid guessing.'
        }
      },
      {
        q: { ar: 'هل تجهزون الملف الطبي كاملاً للعلاج بالخارج؟', en: 'Do you prepare the complete medical file for treatment abroad?' },
        a: {
          ar: 'نعم، نترجم الملف كاملاً (تقارير + تحاليل + أشعة) بتنسيق موحد جاهز للإرسال للمستشفى، وبسعر أفضل للملف الكامل.',
          en: 'Yes, we translate the entire package (reports, labs, scan records) in a unified format ready to send to your target clinic, with package discounts.'
        }
      }
    ],
    relatedServices: ['personal-documents', 'embassy-translation', 'sworn-translation']
  },
  'technical-translation': {
    slug: 'technical-translation',
    metaTitle: {
      ar: 'ترجمة تقنية وهندسية معتمدة | كتالوجات ومواصفات | هيرميس',
      en: 'Certified Technical & Engineering Translation | Hermes Egypt'
    },
    metaDesc: {
      ar: 'ترجمة تقنية معتمدة للكتالوجات والمواصفات الفنية والمستندات الهندسية وأدلة التشغيل بمصطلحات هندسية دقيقة — للمصانع وشركات المقاولات والاستيراد. اطلب عرض سعر.',
      en: 'Certified technical translation of catalogs, specifications, engineering documents, and operation manuals with precise engineering terminology — for factories, contractors, and importers.'
    },
    h1: {
      ar: 'ترجمة تقنية وهندسية معتمدة',
      en: 'Certified Technical & Engineering Translation'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة تقدم ترجمة تقنية معتمدة للكتالوجات والمواصفات الفنية والمستندات الهندسية وأدلة التشغيل، بمصطلحات هندسية دقيقة ومسارد مصطلحات ثابتة لكل مشروع. نخدم المصانع وشركات المقاولات والاستيراد والتصدير والطاقة.',
      en: 'Hermes Certified Translations provides certified technical translation of catalogs, technical specifications, engineering documents, and operation manuals, with precise engineering terminology and a consistent project glossary. We serve factories, contracting companies, importers/exporters, and the energy sector.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة التقنية؟',
      en: 'What is Technical Translation?'
    },
    definitionText: {
      ar: 'الترجمة التقنية هي نقل النصوص ذات المحتوى العلمي أو التكنولوجي أو الهندسي المتخصص. تتطلب مترجمين على دراية بالأنظمة الهندسية ومفاهيم التصنيع، لضمان الصياغة الصحيحة لمصطلحات الآلات والدوائر الإلكترونية ومواصفات الخامات دون أي تحريف.',
      en: 'Technical translation is the translation of scientific, technological, and engineering texts. It requires linguists with engineering knowledge and industrial terminology to accurately convey parameters for machinery, electronics, and materials.'
    },
    needTitle: {
      ar: 'متى تحتاج الترجمة التقنية؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها عند استيراد خطوط الإنتاج والآلات الجديدة لتزويد الفنيين بأدلة تشغيل بلغتهم، أو عند التقدم لمناقصات المقاولات والإنشاءات الكبرى، أو لتسجيل براءات الاختراع الهندسية والحصول على شهادات الجودة الدولية (ISO).',
      en: 'You need it when importing new machinery and production lines to provide manuals for technicians, bidding on civil construction tenders, registering technical patents, or securing international quality marks (ISO).'
    },
    documentsSectionTitle: {
      ar: 'المستندات الهندسية والتقنية التي نغطيها',
      en: 'Engineering & Technical Documents We Cover'
    },
    categories: [
      {
        title: { ar: 'أدلة التشغيل والصيانة', en: 'Operation & Maintenance Manuals' },
        items: [
          { ar: 'أدلة تشغيل الماكينات والمعدات الصناعية والطبية', en: 'Operation manuals for industrial, clinical, and heavy machinery' },
          { ar: 'كتالوجات الاستخدام وكتيبات الصيانة الدورية', en: 'User catalogs and routine maintenance handbooks' },
          { ar: 'إرشادات السلامة والوقاية المهنية في مواقع العمل', en: 'Safety guidelines and occupational hazard protocols' },
          { ar: 'وثائق التركيب والربط الكهربائي والميكانيكي', en: 'Installation manuals and electrical/mechanical layouts' }
        ]
      },
      {
        title: { ar: 'المواصفات الفنية والمخططات', en: 'Specifications & Blueprints' },
        items: [
          { ar: 'جداول الكميات ومواصفات خامات التشييد والمناقصات', en: 'Bills of quantities (BOQs) and construction specifications' },
          { ar: 'الرسومات الهندسية وتسميات مخططات CAD والدوائر الكهربية', en: 'Engineering drawings and labels on CAD and circuit blueprints' },
          { ar: 'تقارير دراسات الجدوى الفنية وتقارير فحص المواقع', en: 'Technical feasibility studies and site inspection reports' },
          { ar: 'مستندات المقارنات والتحليلات الفنية للمعدات', en: 'Technical analysis and equipment evaluation reports' }
        ]
      },
      {
        title: { ar: 'الجودة والشهادات القياسية', en: 'Quality & Standardization' },
        items: [
          { ar: 'شهادات المنشأ وفواتير الشحن الخارجي للمعدات', en: 'Certificates of origin and customs invoices for machinery' },
          { ar: 'شهادات الجودة والمطابقة الدولية (ISO, CE, UL)', en: 'Quality assurance (ISO) and conformity (CE, UL) certificates' },
          { ar: 'تقارير فحص ومعايرة الأجهزة وتدقيق الجودة', en: 'Calibration audits and quality control inspection reports' },
          { ar: 'براءات الاختراع الفنية وكتيبات الملكية الفكرية', en: 'Technical patent applications and IP documentation' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'مسرد مصطلحات خاص بكل عميل + الحفاظ على تنسيق الجداول والرسومات كما في الأصل.',
      en: 'Client-specific glossary + original formatting of tables and drawings preserved.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'شهادات جودة ومنشأ ومطابقة', en: 'Quality & Origin Certificates' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '3-4 ساعات', en: '3-4 Hours' }
      },
      {
        docType: { ar: 'جداول كميات ومواصفات فنية مناقصة', en: 'Tender BOQs & Tech Specifications' },
        standard: { ar: '48-72 ساعة', en: '48-72 Hours' },
        rush: { ar: '24 ساعة', en: '24 Hours' }
      },
      {
        docType: { ar: 'أدلة صيانة وتشغيل ماكينات ضخمة', en: 'Heavy Machinery O&M Manuals' },
        standard: { ar: '4-7 أيام', en: '4-7 Days' },
        rush: { ar: '48-72 ساعة', en: '48-72 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'ما المجالات التقنية التي تغطونها؟', en: 'What technical fields do you cover?' },
        a: {
          ar: 'الهندسة المدنية والميكانيكية والكهربائية، الطاقة، البترول، التصنيع، تكنولوجيا المعلومات، والمعدات الطبية، وغيرها حسب احتياج المشروع.',
          en: 'Civil, mechanical, electrical, and energy engineering, petroleum, manufacturing, IT, and medical devices, tailored to your project.'
        }
      },
      {
        q: { ar: 'كيف تضمنون اتساق المصطلحات في المستندات الكبيرة؟', en: 'How do you ensure terminology consistency in large documents?' },
        a: {
          ar: 'نبني مسرد مصطلحات معتمداً من العميل في بداية المشروع ونلتزم به عبر كل الملفات والدفعات لضمان الاتساق الكامل للمشروع.',
          en: 'We build an approved glossary in collaboration with the client at the project’s start, enforcing it across all files and batches.'
        }
      },
      {
        q: { ar: 'هل تحافظون على تنسيق الجداول والرسومات؟', en: 'Do you preserve the formatting of tables and drawings?' },
        a: {
          ar: 'نعم، نسلم الترجمة بنفس تنسيق الأصل تماماً — جداول كميات، مواصفات، ومخططات بتسمياتها مع الحفاظ على التصميم العام.',
          en: 'Yes, we deliver the translation in the exact layout of the original — BOQs, specifications, and drawings with corresponding labels.'
        }
      },
      {
        q: { ar: 'هل تترجمون ملفات المناقصات الفنية الكبيرة؟', en: 'Do you translate large technical tender packages?' },
        a: {
          ar: 'نعم، مع إمكانية تقسيم التسليم على دفعات متفق عليها وفريق موسع للمواعيد الضيقة لضمان تسليم العرض الفني في وقته.',
          en: 'Yes, utilizing split deliveries and dedicated translator teams for tight deadlines to ensure your bid is ready on time.'
        }
      },
      {
        q: { ar: 'كم تستغرق ترجمة كتالوج أو دليل تشغيل؟', en: 'How long does it take to translate a catalog or user manual?' },
        a: {
          ar: 'حسب الحجم — المستندات المعتادة تستغرق 2-4 أيام، والمشاريع الكبيرة بجدول زمني متفق عليه مسبقاً بما يناسب خطة العمل.',
          en: 'Depending on volume, standard files take 2-4 days. Large-scale manuals are scheduled according to pre-agreed timelines.'
        }
      },
      {
        q: { ar: 'هل الترجمة التقنية معتمدة أيضاً؟', en: 'Is technical translation certified as well?' },
        a: {
          ar: 'نعم عند الحاجة — نختمها بختم الاعتماد لتقديمها للجهات الرسمية والمناقصات الحكومية والهيئات الرقابية للحصول على التراخيص.',
          en: 'Yes, if required. We stamp technical translations with our official seal for governmental tenders, state authorities, and regulatory boards.'
        }
      }
    ],
    relatedServices: ['commercial-translation', 'legal-translation', 'sworn-translation']
  },
  'sworn-translation': {
    slug: 'sworn-translation',
    metaTitle: {
      ar: 'ترجمة محلفة معتمدة في مصر | هيرميس للترجمة المعتمدة',
      en: 'Sworn Translation in Egypt | Hermes Certified Translations'
    },
    metaDesc: {
      ar: 'ترجمة محلفة موثوقة للجهات التي تشترط مترجماً محلفاً أو معتمداً — للمحاكم والسفارات والجهات الأجنبية. مترجمون معتمدون من وزارة العدل. اطلب عرض سعر.',
      en: 'Reliable sworn translation for authorities that require a sworn or certified translator — for courts, embassies, and foreign authorities. Ministry of Justice certified translators.'
    },
    h1: {
      ar: 'الترجمة المحلفة في مصر — متى تحتاجها وكيف نقدمها',
      en: 'Sworn Translation in Egypt — When You Need It & How We Deliver It'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة توفر ترجمة محلفة موثوقة للجهات التي تشترط مترجماً محلفاً أو معتمداً، بمترجمين معتمدين من وزارة العدل المصرية وإقرار رسمي بصحة الترجمة. نجهز ترجمتك بالصيغة التي تقبلها المحاكم والسفارات والجهات الأجنبية التي تطلب Sworn Translation.',
      en: 'Hermes Certified Translations provides reliable sworn translation for authorities that require a sworn or certified translator, delivered by translators certified by the Egyptian Ministry of Justice with a formal declaration of accuracy. We prepare your translation in the exact format accepted by courts, embassies, and foreign authorities requesting a sworn translation.'
    },
    definitionTitle: {
      ar: 'ما هي الترجمة المحلفة؟',
      en: 'What is Sworn Translation?'
    },
    definitionText: {
      ar: 'الترجمة المحلفة (Sworn Translation) هي ترجمة معترف بها رسمياً يؤديها مترجم أقسم اليمين القانونية أمام جهة قضائية معتمدة في بعض البلدان. في مصر، يقوم مقامها المترجم المعتمد من وزارة العدل مع ختم مكتب الترجمة المعتمد وتوقيع إقرار الصحة الرسمي (Translator’s Declaration) ومطابقتها للمستندات الأصلية.',
      en: 'Sworn translation is a legally recognized translation completed by a translator who has taken an official oath before a judicial body. In Egypt, the equivalent is translation by a Ministry of Justice-certified translator, bound with the accredited office seal and a signed Declaration of Accuracy.'
    },
    needTitle: {
      ar: 'متى تحتاج الترجمة المحلفة؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها عند التعامل مع المحاكم الأجنبية مباشرة، أو تقديم وثائق لبلدان تتبع نظام المترجم المحلف حصرياً مثل فرنسا وإسبانيا وإيطاليا وألمانيا، أو لإتمام معاملات الزواج المدني وتأسيس العقارات والمعاملات الرسمية بالخارج.',
      en: 'You need it when dealing directly with foreign courts, presenting records to European countries operating strict sworn systems (e.g. France, Spain, Italy, Germany), or for overseas civil marriages and property registrations.'
    },
    documentsSectionTitle: {
      ar: 'متى وكيف تُطلب الترجمة المحلفة؟',
      en: 'When and How is Sworn Translation Handled?'
    },
    categories: [
      {
        title: { ar: 'متى تُطلب الترجمة المحلفة؟', en: 'When is Sworn Translation Required?' },
        items: [
          { ar: 'المحاكم القضائية وهيئات التحكيم الأجنبية بالخارج', en: 'Foreign courts and international arbitration panels' },
          { ar: 'سفارات وقنصليات دول معينة في أوروبا (ألمانيا، إسبانيا، إيطاليا)', en: 'Embassies of specific European countries (Germany, Spain, Italy)' },
          { ar: 'إجراءات الزواج المدني والإقامة في الخارج لدى البلديات', en: 'Civil marriages and residence registrations at foreign municipalities' },
          { ar: 'الجهات التعليمية والهيئات الأكاديمية للحصول على تراخيص المهن', en: 'Educational bodies and professional licensing boards abroad' }
        ]
      },
      {
        title: { ar: 'الفرق بين المحلفة والمعتمدة والموثقة', en: 'Sworn vs. Certified vs. Notarized' },
        items: [
          { ar: 'الترجمة المعتمدة: يختمها مكتب معتمد بموجب ترخيص رسمي وإقرار صحة', en: 'Certified: Stamped by an accredited translation office with an accuracy statement' },
          { ar: 'الترجمة المحلفة: ينفذها مترجم محلف مسجل ومؤدي لليمن أمام المحاكم', en: 'Sworn: Executed by a registered sworn translator who took a judicial oath' },
          { ar: 'الترجمة الموثقة: تتطلب تصديق الشهر العقاري والخارجية على الأختام', en: 'Notarized: Requires Notary Public or Foreign Ministry authentication of stamps' }
        ]
      },
      {
        title: { ar: 'كيف نجهز الترجمة بصيغة مقبولة لدى جهتك؟', en: 'How We Format Your Sworn File' },
        items: [
          { ar: 'صياغة إقرار المترجم (Translator’s Declaration) بلغة الجهة المستقبلة', en: 'Formulating the Translator’s Declaration in the receiver’s language' },
          { ar: 'مقارنة الأسماء والأرقام والتواريخ وضبطها بمطابقة كاملة للنسخ الأصلية', en: 'Verifying names, numbers, and dates to strictly match original copies' },
          { ar: 'التواصل المباشر لإرشادك في حال الحاجة لتصديق الخارجية أو السفارة', en: 'Direct guidance if Ministry of Foreign Affairs or embassy legalization is required' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'معرفة دقيقة بمتطلبات كل دولة — نجهز صيغة الإقرار حسب الجهة المستقبلة بدل صيغة واحدة للجميع.',
      en: 'Precise knowledge of each country’s requirements — we tailor the declaration to the receiving authority rather than using one generic format.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'أحكام قضائية وتوكيلات للمحاكم', en: 'Court Rulings & Powers of Attorney' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      },
      {
        docType: { ar: 'شهادات أحوال مدنية للزواج بالخارج', en: 'Civil Certificates for Marriage Abroad' },
        standard: { ar: '24 ساعة', en: '24 Hours' },
        rush: { ar: '2-3 ساعات', en: '2-3 Hours' }
      },
      {
        docType: { ar: 'مستندات تأسيس وسجلات تجارية مترجمة', en: 'Company Bylaws & Trade Registers' },
        standard: { ar: '48 ساعة', en: '48 Hours' },
        rush: { ar: 'يوم واحد', en: 'Same Day' }
      }
    ],
    faqs: [
      {
        q: { ar: 'ما الفرق بين الترجمة المحلفة والمعتمدة؟', en: 'What is the difference between sworn and certified translation?' },
        a: {
          ar: 'المحلفة ينفذها مترجم أدى يميناً أمام جهة قضائية (نظام معمول به في دول أوروبية)، والمعتمدة يختمها مكتب معتمد ومترجمون معتمدون من وزارة العدل — وفي مصر تقوم المعتمدة مقام المحلفة لدى أغلب الجهات.',
          en: 'Sworn translation is done by a translator who took a judicial oath (European system), while certified translation is stamped by an accredited office and Ministry of Justice-certified translators. In Egypt, certified translation serves as the equivalent for most overseas bodies.'
        }
      },
      {
        q: { ar: 'هل الترجمة المعتمدة في مصر تُقبل كترجمة محلفة بالخارج؟', en: 'Are certified translations from Egypt accepted as sworn translations abroad?' },
        a: {
          ar: 'في كثير من الحالات نعم مع التصديقات المناسبة (الخارجية/الأبوستيل حسب الدولة)، وبعض الجهات تشترط مترجماً محلفاً محلياً في بلدها — نوضح لك الموقف حسب جهتك قبل البدء.',
          en: 'In many cases, yes, given the proper attestations (MFA/Apostille). However, some foreign authorities require a locally registered sworn translator in their country — we will clarify the status for you before starting.'
        }
      },
      {
        q: { ar: 'ما التصديقات المطلوبة بعد الترجمة؟', en: 'What attestations are required after translation?' },
        a: {
          ar: 'حسب الدولة المستهدفة: تصديق وزارة الخارجية المصرية، وأحياناً تصديق سفارة الدولة المستقبلة — نرشدك للمسار كاملاً لتفادي ارتباك الإجراءات.',
          en: 'Depends on the destination: Egyptian Ministry of Foreign Affairs attestation, and sometimes attestation by the destination country’s embassy. We guide you through the entire path.'
        }
      },
      {
        q: { ar: 'هل تجهزون إقرار المترجم بصيغة الجهة الأجنبية؟', en: 'Do you prepare the translator’s declaration in the foreign authority’s format?' },
        a: {
          ar: 'نعم، نصيغ إقرار الصحة (Translator’s Declaration) بالشكل القانوني والصياغة اللغوية التي تشترطها الجهة المستقبلة.',
          en: 'Yes, we draft the formal Translator’s Declaration in the exact legal format and language required by the receiving authority.'
        }
      },
      {
        q: { ar: 'كم تستغرق الترجمة المحلفة؟', en: 'How long does sworn translation take?' },
        a: {
          ar: 'نفس مدد الترجمة المعتمدة (24-72 ساعة حسب المستند وحجمه)، ويضاف إليها وقت إنهاء التصديقات الحكومية إن طُلبت.',
          en: 'The same timeframe as certified translations (24-72 hours depending on document length), plus the time needed to finalize government attestations if requested.'
        }
      },
      {
        q: { ar: 'ما المستندات الأكثر طلباً للترجمة المحلفة؟', en: 'What are the most requested documents for sworn translation?' },
        a: {
          ar: 'الأحكام القضائية والقرارات، شهادات الأحوال المدنية للزواج والإقامة بالخارج، التوكيلات القانونية، ومستندات المحاكم الأجنبية.',
          en: 'Court rulings, civil status records for foreign marriage/residency, legal powers of attorney, and litigation files.'
        }
      }
    ],
    relatedServices: ['legal-translation', 'notarization', 'embassy-translation', 'personal-documents']
  },
  'notarization': {
    slug: 'notarization',
    metaTitle: {
      ar: 'التوثيق والتصديق والأبوستيل في مصر | إرشاد كامل | هيرميس',
      en: 'Document Legalization, Notarization & Apostille in Egypt | Hermes'
    },
    metaDesc: {
      ar: 'إرشاد ومساعدة كاملة في توثيق وتصديق المستندات: الخارجية المصرية، الشهر العقاري، تصديقات السفارات، والأبوستيل — مع ترجمتك المعتمدة في مكان واحد.',
      en: 'Comprehensive guidance and assistance for document legalization: Ministry of Foreign Affairs, Notary Public, embassy attestations, and Apostille — all alongside your certified translation.'
    },
    h1: {
      ar: 'التوثيق والتصديق والأبوستيل — دليلك ومساعدك خطوة بخطوة',
      en: 'Document Legalization, Notarization & Apostille in Egypt'
    },
    opening: {
      ar: 'هيرميس للترجمة المعتمدة ترشدك وتساعدك في مسار توثيق وتصديق مستنداتك بالكامل — من الشهر العقاري إلى وزارة الخارجية المصرية إلى تصديق سفارة الدولة المستقبلة — حتى يصلك مستندك مترجماً ومصدقاً جاهزاً للاستخدام في الخارج دون دوران بين الجهات.',
      en: 'Hermes Certified Translations guides and assists you through the entire document legalization process — from the Notary Public and Egyptian Ministry of Foreign Affairs to foreign embassy attestations — ensuring your translated and legalized documents are ready for international use without hassle.'
    },
    definitionTitle: {
      ar: 'ما هو التوثيق والتصديق؟',
      en: 'What is Document Legalization?'
    },
    definitionText: {
      ar: 'التوثيق والتصديق هو سلسلة من الإجراءات الإدارية والقانونية التي تصادق بها السلطات الرسمية على صحة الختم والتوقيع الموجودين على المستند الأصلي أو ترجمته. يضمن هذا الإجراء اعتراف حكومة دولة أخرى بالمستند كوثيقة رسمية صحيحة وصادرة عن جهة مخولة.',
      en: 'Legalization/attestation is a series of administrative and legal steps by which official authorities verify the authenticity of a seal and signature on an original document or its translation. This process ensures foreign governments recognize it as a valid official document.'
    },
    needTitle: {
      ar: 'متى تحتاج التصديق والتوثيق؟',
      en: 'When Do You Need It?'
    },
    needText: {
      ar: 'تحتاجها عندما تطلب منك الجهة الأجنبية أو السفارة أن يكون المستند "مصدقاً من الخارجية" أو "مختوماً من القنصلية" كشرط أساسي لقبول التأشيرات، المنح، العمل، أو تسجيل المعاملات التجارية وتأسيس فروع الشركات الدولية.',
      en: 'You need it when a foreign body or embassy requires your documents to be "legalized by the Ministry of Foreign Affairs" or "attested by the consulate" as a prerequisite for accepting visas, scholarships, employment, or registering corporate branches.'
    },
    documentsSectionTitle: {
      ar: 'مراحل ومسارات توثيق المستندات في مصر',
      en: 'Document Legalization Processes in Egypt'
    },
    categories: [
      {
        title: { ar: 'مسار التصديق في مصر خطوة بخطوة', en: 'Step-by-Step Legalization in Egypt' },
        items: [
          { ar: '1. استخراج المستند من جهة الإصدار الرسمية وختمه بختمها الدائري', en: '1. Issuing the document from the official body and stamping it' },
          { ar: '2. توثيق المستند من الشهر العقاري أو الإدارة العامة التابع لها إن لزم', en: '2. Notarizing the document at the Notary Public or its directorate if needed' },
          { ar: '3. التصديق الرسمي عليه من أحد مكاتب تصديقات وزارة الخارجية المصرية', en: '3. Attestation at one of the Egyptian Ministry of Foreign Affairs offices' },
          { ar: '4. تصديق القسم القنصلي بسفارة الدولة الأجنبية المستهدفة بالتقديم', en: '4. Legalization at the consular section of the target foreign embassy' }
        ]
      },
      {
        title: { ar: 'ماذا عن الأبوستيل (Apostille) في مصر؟', en: 'What About the Apostille in Egypt?' },
        items: [
          { ar: 'الأبوستيل هو ختم تصديق دولي مبسط ومعتمد لدى الدول الموقعة على اتفاقية لاهاي', en: 'The Apostille is a simplified international stamp for member states of the Hague Convention' },
          { ar: 'جمهورية مصر العربية ليست عضواً في اتفاقية الأبوستيل حتى الآن', en: 'The Arab Republic of Egypt is not a member of the Apostille Convention yet' },
          { ar: 'البديل في مصر هو مسار التصديق التقليدي متعدد المراحل (الخارجية ثم السفارة)', en: 'The alternative in Egypt is the traditional multi-stage attestation (Foreign Ministry then Embassy)' },
          { ar: 'نوفر إقرار مطابقة لتبسيط متطلبات الجهات الأجنبية بالخارج', en: 'We provide declarations of conformity to simplify foreign requirements abroad' }
        ]
      },
      {
        title: { ar: 'الترجمة أولاً أم التصديق أولاً؟', en: 'Translation First or Legalization First?' },
        items: [
          { ar: 'الترتيب يعتمد كلياً على الجهة المستقبلة وشروطها الخاصة بالمعاملة', en: 'The order depends entirely on the receiving body and their transaction rules' },
          { ar: 'المسار الشائع: تصديق الأصل من الخارجية المصرية أولاً ثم ترجمته مع الأختام', en: 'Common path: Attest the original at the MFA first, then translate it with all stamps' },
          { ar: 'بعض الجهات تطلب ترجمة المستند المعتمد وتصديق الترجمة نفسها لاحقاً', en: 'Some bodies require translating the certified file and attesting the translation itself later' }
        ]
      }
    ],
    specialistWhyPoint: {
      ar: 'معرفة دقيقة ومحدثة بمتطلبات التصديقات بوزارة الخارجية وسفارات الدول المختلفة، لتوجيهك للمسار الأسرع والأصح.',
      en: 'Up-to-date knowledge of Foreign Ministry attestation queues and embassy rules in Egypt, guiding you to the fastest and correct path.'
    },
    turnaroundTable: [
      {
        docType: { ar: 'تصديق شهادات مدنية (خارجية مصرية)', en: 'Civil Certificates Legalization (MFA)' },
        standard: { ar: 'يوم عمل واحد', en: '1 Business Day' },
        rush: { ar: 'نفس اليوم', en: 'Same Day' }
      },
      {
        docType: { ar: 'تصديقات السفارات والملحقيات الثقافية', en: 'Embassy & Cultural Attestations' },
        standard: { ar: '3-5 أيام عمل', en: '3-5 Business Days' },
        rush: { ar: '48 ساعة', en: '48 Hours' }
      },
      {
        docType: { ar: 'ترجمات معتمدة متضمنة أختام التصديق', en: 'Certified Translations Stamped with Attestations' },
        standard: { ar: '24-48 ساعة', en: '24-48 Hours' },
        rush: { ar: '6-8 ساعات', en: '6-8 Hours' }
      }
    ],
    faqs: [
      {
        q: { ar: 'ما هو تصديق وزارة الخارجية المصرية؟', en: 'What is Egyptian Foreign Ministry attestation?' },
        a: {
          ar: 'هو إجراء تصادق فيه الوزارة عبر مكاتب التصديقات التابعة لها على صحة ختم وتوقيع الجهات الحكومية أو الشهر العقاري على المستند الأصلي ليصبح معترفاً به بالخارج.',
          en: 'It is a process where the Ministry, via its attestation offices, verifies the authenticity of governmental or Notary Public signatures on your original document.'
        }
      },
      {
        q: { ar: 'ما هي اتفاقية الأبوستيل ولماذا لا تُطبق في مصر؟', en: 'What is an Apostille and why is it not applied in Egypt?' },
        a: {
          ar: 'الأبوستيل هو ختم تصديق دولي موحد يلغي الحاجة لتصديقات متعددة بين الدول الأعضاء باتفاقية لاهاي، وبما أن مصر ليست عضواً، فيجب المرور بمسار التصديق التقليدي.',
          en: 'The Apostille is a unified international stamp simplifying legalization between Hague Convention members. As Egypt is not a member, you must follow the traditional path.'
        }
      },
      {
        q: { ar: 'هل تقومون بإنهاء إجراءات التوثيق نيابة عني؟', en: 'Do you complete the legalization process on my behalf?' },
        a: {
          ar: 'نحن نوفر إرشاداً ومساعدة كاملة في توثيق المستندات، ونوضح لك الخطوات التفصيلية ومواقع المكاتب والسفارات لتوفير وقتك وجهدك.',
          en: 'We provide complete guidance and support services, detailing the exact steps, fees, and office/embassy locations to streamline the process for you.'
        }
      },
      {
        q: { ar: 'هل تترجمون الوثيقة أولاً أم نوثقها أولاً؟', en: 'Should I translate the document first or legalize it first?' },
        a: {
          ar: 'المسار المعتاد هو تصديق المستند الأصلي من الخارجية أولاً، ثم نقوم بالترجمة المعتمدة للمستند الأصلي مضافاً إليه كافة أختام وتواقيع التصديق لتوثيق الملف بالكامل.',
          en: 'Usually, you legalize the original document first. Then, we translate the entire page including all legalization stamps and sign-offs in our certified translation.'
        }
      },
      {
        q: { ar: 'كم يستغرق التوثيق والتصديق؟', en: 'How long does legalization take?' },
        a: {
          ar: 'مكاتب تصديقات الخارجية المصرية تنهي العمل في نفس اليوم (عادة في غضون دقائق)، بينما تتراوح تصديقات السفارات والقنصليات من يومين إلى أسبوع عمل.',
          en: 'Egyptian MFA offices finalize attestations on the spot (same day), while foreign embassies and consulates require between 2 and 7 business days.'
        }
      },
      {
        q: { ar: 'هل شهادة التخرج تحتاج تصديقاً من وزارة الخارجية؟', en: 'Does a graduation certificate require Foreign Ministry attestation?' },
        a: {
          ar: 'نعم، إذا كانت مقدمة لجهة دراسة أو عمل بالخارج تشترط ذلك، ويجب ختمها أولاً من الجامعة أو وزارة التعليم العالي قبل الذهاب للخارجية.',
          en: 'Yes, if requested by a foreign university or employer. It must first be stamped by the issuing university or Higher Education Ministry before Foreign Ministry attestation.'
        }
      }
    ],
    relatedServices: ['legal-translation', 'sworn-translation', 'embassy-translation', 'personal-documents']
  }
};
