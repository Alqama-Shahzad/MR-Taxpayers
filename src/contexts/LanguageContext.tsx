import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'cta.consultation': 'Free Consultation',
    
    // Hero
    'hero.title': 'Smooth FBR, NTN & Tax Compliance with Muhammad Rafay',
    'hero.subtitle': 'Expert tax consultant providing end-to-end FBR, NTN, STRN registration, e-invoicing, and compliance services for individuals, freelancers, and businesses across Pakistan.',
    'hero.cta.primary': 'Get Started Today',
    'hero.cta.secondary': 'Learn More',
    
    // Services
    'services.title': 'Comprehensive Tax & Compliance Services',
    'services.subtitle': 'From registration to filing, I handle all your tax compliance needs with expertise and precision.',
    'services.ntn.title': 'NTN Registration',
    'services.ntn.desc': 'Quick and hassle-free National Tax Number registration for individuals and businesses.',
    'services.strn.title': 'STRN & Sales Tax',
    'services.strn.desc': 'Sales Tax Registration Number filing and monthly compliance services.',
    'services.income.title': 'Income Tax Returns',
    'services.income.desc': 'Professional income tax return filing for all taxpayer categories.',
    'services.einvoicing.title': 'E-Invoicing System',
    'services.einvoicing.desc': 'Complete e-invoicing setup and track-and-trace system implementation.',
    'services.audit.title': 'FBR Audit Support',
    'services.audit.desc': 'Expert assistance with FBR audits, notices, and compliance issues.',
    'services.verification.title': 'Invoice Verification',
    'services.verification.desc': 'Receipt and invoice verification services for accurate record keeping.',
    
    // How It Works
    'howItWorks.title': 'Simple 4-Step Process',
    'howItWorks.step1.title': 'Consultation',
    'howItWorks.step1.desc': 'Free consultation to understand your tax compliance needs.',
    'howItWorks.step2.title': 'Documentation',
    'howItWorks.step2.desc': 'Gather required documents and information for processing.',
    'howItWorks.step3.title': 'Processing',
    'howItWorks.step3.desc': 'Expert handling of your tax registration and filing requirements.',
    'howItWorks.step4.title': 'Completion',
    'howItWorks.step4.desc': 'Receive your certificates and ongoing compliance support.',
    
    // About
    'about.title': 'About Muhammad Rafay',
    'about.subtitle': 'Your Trusted Tax Compliance Partner',
    'about.description': 'With over 5 years of experience in Pakistan\'s taxation system, I specialize in FBR regulations, digital tax systems, and comprehensive compliance solutions. I help individuals and businesses navigate complex tax requirements with confidence and ease.',
    'about.experience': '5+ Years Experience',
    'about.clients': '100+ Happy Clients',
    'about.success': '99% Success Rate',
    
    // Testimonials
    'testimonials.title': 'What My Clients Say',
    'testimonials.subtitle': 'Real experiences from satisfied clients across Pakistan',
    
    // Blog
    'blog.title': 'Latest Tax Updates & Insights',
    'blog.subtitle': 'Stay informed with the latest FBR updates, tax regulations, and compliance tips.',
    'blog.readMore': 'Read More',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions about tax compliance and our services',
    
    // Pricing  
    'pricing.title': 'Transparent Pricing Plans',
    'pricing.subtitle': 'Choose the perfect plan for your tax compliance needs. All plans include expert guidance and peace of mind.',
    'pricing.most_popular': 'Most Popular',
    'pricing.get_quote': 'Get Quote',
    'pricing.choose_plan': 'Choose Plan',
    
    // Contact
    'contact.title': 'Get Your Free Tax Consultation',
    'contact.subtitle': 'Ready to simplify your tax compliance? Let\'s discuss your specific needs and find the perfect solution.',
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.service': 'Service Interest',
    'form.message': 'Tell me about your needs',
    'form.submit': 'Send Message',
    'contact.whatsapp': 'WhatsApp',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact Info',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.social': 'Follow Us',
    'footer.copyright': '© 2024 MR Taxpayers. All rights reserved.',
    
    // Consequences
    'consequences.title': 'Consequences of Not Paying Taxes',
    'consequences.subtitle': 'Not paying or filing taxes in Pakistan can lead to serious financial, legal, and personal restrictions. Here\'s what\'s at stake.',
    'consequences.financial.title': 'Financial Penalties & Surcharges',
    'consequences.financial.content': 'Heavy fines and mounting interest charges',
    'consequences.financial.items': [
      'Daily fine: PKR 1,000 or 0.1% of unpaid tax (max 50%)',
      'Interest (~12% annually) on unpaid tax',
      'Higher Withholding Tax (e.g., 0.6% vs. 0.3% on banking/withdrawals)'
    ],
    'consequences.restrictions.title': 'Service & Access Restrictions',
    'consequences.restrictions.content': 'Blocked access to essential services',
    'consequences.restrictions.items': [
      'SIM cards suspended; electricity/gas may be disconnected',
      'Bar on opening bank accounts, loans, or property/vehicle purchases',
      'Travel bans; blocked visas or flight ticket issuance'
    ],
    'consequences.legal.title': 'Legal Actions & Asset Seizure',
    'consequences.legal.content': 'Government enforcement and prosecution',
    'consequences.legal.items': [
      'Forcible registration, bank account freezing under Finance Bill 2025',
      'Prosecution under Income Tax Ordinance; up to 2 years jail + fines'
    ],
    'consequences.opportunities.title': 'Lost Opportunities',
    'consequences.opportunities.content': 'Missed business and financial opportunities',
    'consequences.opportunities.items': [
      'Banned from government tenders/contracts',
      'Ineligibility for tax refunds, credit, and subsidies'
    ],
    'consequences.cta.title': 'Don\'t Wait Until It\'s Too Late',
    'consequences.cta.subtitle': 'Become compliant today with Muhammad Rafay — your trusted FBR & NTN expert.',
    'consequences.cta.button': 'Secure My Tax Status',

    // Language Selector
    'language.tooltip': 'Change language to Urdu',
    'language.current': 'ENG'
  },
  ur: {
    // Header - Urdu
    'nav.home': 'ہوم',
    'nav.services': 'خدمات',
    'nav.about': 'تعارف',
    'nav.pricing': 'قیمتیں',
    'nav.contact': 'رابطہ',
    'nav.blog': 'بلاگ',
    'nav.faq': 'سوالات',
    'cta.consultation': 'مفت مشاورت',
    
    // Hero - Urdu
    'hero.title': 'محمد رفیع کے ساتھ آسان FBR، NTN اور ٹیکس کمپلائنس',
    'hero.subtitle': 'ماہر ٹیکس کنسلٹنٹ جو پاکستان بھر میں افراد، فری لانسرز اور کاروبار کے لیے FBR، NTN، STRN رجسٹریشن، ای انوائسنگ اور کمپلائنس کی مکمل خدمات فراہم کرتا ہے۔',
    'hero.cta.primary': 'آج ہی شروع کریں',
    'hero.cta.secondary': 'مزید جانیں',
    
    // Services - Urdu
    'services.title': 'مکمل ٹیکس اور کمپلائنس خدمات',
    'services.subtitle': 'رجسٹریشن سے لے کر فائلنگ تک، میں آپ کی تمام ٹیکس کمپلائنس ضروریات کو مہارت اور درستگی کے ساتھ سنبھالتا ہوں۔',
    'services.ntn.title': 'NTN رجسٹریشن',
    'services.ntn.desc': 'افراد اور کاروبار کے لیے فوری اور آسان نیشنل ٹیکس نمبر رجسٹریشن۔',
    'services.strn.title': 'STRN اور سیلز ٹیکس',
    'services.strn.desc': 'سیلز ٹیکس رجسٹریشن نمبر فائلنگ اور ماہانہ کمپلائنس خدمات۔',
    'services.income.title': 'انکم ٹیکس ریٹرن',
    'services.income.desc': 'تمام ٹیکس دہندگان کے لیے پیشہ ورانہ انکم ٹیکس ریٹرن فائلنگ۔',
    'services.einvoicing.title': 'ای انوائسنگ سسٹم',
    'services.einvoicing.desc': 'مکمل ای انوائسنگ سیٹ اپ اور ٹریک اینڈ ٹریس سسٹم کا نفاذ۔',
    'services.audit.title': 'FBR آڈٹ سپورٹ',
    'services.audit.desc': 'FBR آڈٹ، نوٹسز اور کمپلائنس مسائل میں ماہرانہ مدد۔',
    'services.verification.title': 'انوائس تصدیق',
    'services.verification.desc': 'درست ریکارڈ رکھنے کے لیے رسید اور انوائس کی تصدیقی خدمات۔',
    
    // How It Works
    'howItWorks.title': 'آسان 4 مرحلہ عمل',
    'howItWorks.step1.title': 'مشاورت',
    'howItWorks.step1.desc': 'آپ کی ٹیکس کمپلائنس ضروریات سمجھنے کے لیے مفت مشاورت۔',
    'howItWorks.step2.title': 'دستاویزات',
    'howItWorks.step2.desc': 'پروسیسنگ کے لیے مطلوبہ دستاویزات اور معلومات جمع کرنا۔',
    'howItWorks.step3.title': 'پروسیسنگ',
    'howItWorks.step3.desc': 'آپ کی ٹیکس رجسٹریشن اور فائلنگ ضروریات کا ماہرانہ انتظام۔',
    'howItWorks.step4.title': 'تکمیل',
    'howItWorks.step4.desc': 'آپ کے سرٹیفکیٹس اور مسلسل کمپلائنس سپورٹ حاصل کریں۔',
    
    // About
    'about.title': 'محمد رفیع کا تعارف',
    'about.subtitle': 'آپ کا قابل اعتماد ٹیکس کمپلائنس پارٹنر',
    'about.description': 'پاکستان کے ٹیکسیشن سسٹم میں 5 سال سے زیادہ تجربے کے ساتھ، میں FBR ضوابط، ڈیجیٹل ٹیکس سسٹم، اور جامع کمپلائنس حل میں مہارت رکھتا ہوں۔ میں افراد اور کاروبار کو پیچیدہ ٹیکس ضروریات میں اعتماد اور آسانی کے ساتھ رہنمائی کرتا ہوں۔',
    'about.experience': '5+ سال تجربہ',
    'about.clients': '500+ خوش کلائنٹس',
    'about.success': '99% کامیابی کی شرح',
    
    // Testimonials
    'testimonials.title': 'میرے کلائنٹس کا کہنا',
    'testimonials.subtitle': 'پاکستان بھر کے مطمئن کلائنٹس کے حقیقی تجربات',
    
    // Blog
    'blog.title': 'تازہ ترین ٹیکس اپڈیٹس اور بصیرت',
    'blog.subtitle': 'تازہ ترین FBR اپڈیٹس، ٹیکس ضوابط، اور کمپلائنس ٹپس سے باخبر رہیں۔',
    'blog.readMore': 'مزید پڑھیں',
    
    // FAQ
    'faq.title': 'اکثر پوچھے جانے والے سوالات',
    'faq.subtitle': 'ٹیکس کمپلائنس اور ہماری خدمات کے بارے میں عام سوالات',
    
    // Pricing - Urdu
    'pricing.title': 'شفاف قیمتی منصوبے',
    'pricing.subtitle': 'اپنی ٹیکس کمپلائنس کی ضروریات کے لیے بہترین منصوبہ منتخب کریں۔ تمام منصوبوں میں ماہرانہ رہنمائی اور ذہنی سکون شامل ہے۔',
    'pricing.most_popular': 'سب سے مقبول',
    'pricing.get_quote': 'قیمت معلوم کریں',
    'pricing.choose_plan': 'منصوبہ منتخب کریں',
   
    
    // Contact - Urdu
    'contact.title': 'اپنی مفت ٹیکس مشاورت حاصل کریں',
    'contact.subtitle': 'اپنی ٹیکس کمپلائنس کو آسان بنانے کے لیے تیار ہیں؟ آئیں آپ کی مخصوص ضروریات پر بات کرتے ہیں اور بہترین حل تلاش کرتے ہیں۔',
    'form.name': 'مکمل نام',
    'form.email': 'ای میل ایڈریس',
    'form.phone': 'فون نمبر',
    'form.service': 'خدمت میں دلچسپی',
    'form.message': 'اپنی ضروریات کے بارے میں بتائیں',
    'form.submit': 'پیغام بھیجیں',
    'contact.whatsapp': 'واٹس ایپ',
    
    // Footer
    'footer.quickLinks': 'فوری لنکس',
    'footer.services': 'خدمات',
    'footer.resources': 'وسائل',
    'footer.contact': 'رابطہ کی معلومات',
    'footer.phone': 'فون',
    'footer.email': 'ای میل',
    'footer.social': 'ہمیں فالو کریں',
    'footer.copyright': '© 2024 MR Taxpayers۔ تمام حقوق محفوظ ہیں۔',
    
    // Consequences - Urdu
    'consequences.title': 'ٹیکس نہ دینے کے نتائج',
    'consequences.subtitle': 'پاکستان میں ٹیکس نہ دینا یا فائل نہ کرنا سنگین مالی، قانونی اور ذاتی پابندیوں کا باعث بن سکتا ہے۔ یہاں خطرات درج ہیں۔',
    'consequences.financial.title': 'مالی جرمانے اور اضافی فیسیں',
    'consequences.financial.content': 'بھاری جرمانے اور بڑھتے ہوئے سودی الزامات',
    'consequences.financial.items': [
      'یومیہ جرمانہ: PKR 1,000 یا غیر ادا شدہ ٹیکس کا 0.1% (زیادہ سے زیادہ 50%)',
      'غیر ادا شدہ ٹیکس پر سود (~12% سالانہ)',
      'زیادہ وِتھ ہولڈنگ ٹیکس (جیسے بینکنگ/نکلوانے پر 0.6% بمقابلہ 0.3%)'
    ],
    'consequences.restrictions.title': 'خدمات اور رسائی کی پابندیاں',
    'consequences.restrictions.content': 'بنیادی خدمات تک رسائی میں رکاوٹ',
    'consequences.restrictions.items': [
      'سم کارڈز معطل؛ بجلی/گیس کنکشن کاٹے جا سکتے ہیں',
      'بینک اکاؤنٹ کھولنے، قرض، یا املاک/گاڑی خریدنے پر پابندی',
      'سفری پابندیاں؛ ویزا یا فلائٹ ٹکٹ جاری کرنے میں رکاوٹ'
    ],
    'consequences.legal.title': 'قانونی کارروائی اور اثاثوں کی ضبطی',
    'consequences.legal.content': 'حکومتی نفاذ اور مقدمہ سازی',
    'consequences.legal.items': [
      'فنانس بل 2025 کے تحت زبردستی رجسٹریشن، بینک اکاؤنٹ منجمد کرنا',
      'انکم ٹیکس آرڈیننس کے تحت مقدمہ؛ 2 سال تک جیل + جرمانہ'
    ],
    'consequences.opportunities.title': 'ضائع شدہ مواقع',
    'consequences.opportunities.content': 'کاروباری اور مالی مواقع کا چھن جانا',
    'consequences.opportunities.items': [
      'سرکاری ٹینڈرز/کنٹریکٹس سے پابندی',
      'ٹیکس واپسی، کریڈٹ، اور سبسڈیز سے محرومی'
    ],
    'consequences.cta.title': 'بہت دیر ہونے تک انتظار نہ کریں',
    'consequences.cta.subtitle': 'آج ہی محمد رفیع کے ساتھ کمپلائنٹ بنیں — آپ کے قابل اعتماد FBR اور NTN ماہر۔',
    'consequences.cta.button': 'میری ٹیکس کی صورتحال محفوظ کریں',

    // Language Selector
    'language.tooltip': 'زبان انگریزی میں تبدیل کریں',
    'language.current': 'اردو'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string | string[] => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Set body data-lang attribute for font switching
  React.useEffect(() => {
    document.body.setAttribute('data-lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};