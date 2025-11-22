export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    howItWorks: string;
    gallery: string;
    forBrands: string;
    startCreating: string;
    create: string;
    designOrder: string;
  };
  hero: {
    title1: string;
    title2: string;
    subtitle: string;
    process: string;
    cta: string;
    stats: {
      customers: string;
      customersLabel: string;
      delivery: string;
      deliveryLabel: string;
      designs: string;
      designsLabel: string;
    };
  };
  showcase: {
    badge: string;
    title: string;
    subtitle: string;
    before: string;
    after: string;
    features: {
      aiPowered: string;
      aiPoweredDesc: string;
      fastDelivery: string;
      fastDeliveryDesc: string;
      unlimited: string;
      unlimitedDesc: string;
      premium: string;
      premiumDesc: string;
    };
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  brands: {
    badge: string;
    title: string;
    subtitle: string;
    revenue: string;
    revenueDesc: string;
    investment: string;
    investmentDesc: string;
    standOut: string;
    standOutDesc: string;
    cta: string;
    joinText: string;
  };
  footer: {
    forCustomers: string;
    howItWorks: string;
    designGallery: string;
    customOrders: string;
    forBrands: string;
    partnerWithUs: string;
    brandPortal: string;
    successStories: string;
    support: string;
    helpCenter: string;
    contactUs: string;
    sizeGuide: string;
    rights: string;
  };
  design: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    prompt: string;
    selectAbaya: string;
    classicAbaya: string;
    premiumFabric: string;
    describeDesign: string;
    placeholder: string;
    generate: string;
    customizePosition: string;
    frontLeft: string;
    frontRight: string;
    backCenter: string;
    custom: string;
    designWillAppear: string;
    previewOnAbaya: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: 'How It Works',
      gallery: 'Gallery',
      forBrands: 'For Brands',
      startCreating: 'Start Creating →',
      create: 'Create →',
      designOrder: 'Design & Order'
    },
    hero: {
      title1: 'Stay Unique.',
      title2: 'By you, For you.',
      subtitle: 'Describe what you want, and we\'ll make it happen.',
      process: '✨ Type your idea → See it designed → Get it delivered',
      cta: 'Create Your Design Now',
      stats: {
        customers: '1000+',
        customersLabel: 'Happy Customers',
        delivery: '5-7',
        deliveryLabel: 'Days Delivery',
        designs: '∞',
        designsLabel: 'Design Options'
      }
    },
    showcase: {
      badge: 'See The Magic',
      title: 'From Plain to Extraordinary',
      subtitle: 'Watch how a simple prompt transforms ordinary garments',
      before: 'Before',
      after: 'After',
      features: {
        aiPowered: 'AI-Powered',
        aiPoweredDesc: 'Create unique designs with simple prompts',
        fastDelivery: 'Fast Delivery',
        fastDeliveryDesc: 'Get your custom abaya in 5-7 days',
        unlimited: 'Unlimited Designs',
        unlimitedDesc: 'From traditional to modern patterns',
        premium: 'Premium Quality',
        premiumDesc: 'Hand-finished embroidery on luxury fabric'
      }
    },
    gallery: {
      badge: 'Gallery',
      title: 'AI-Generated Masterpieces',
      subtitle: 'Each design started with just a simple text prompt',
      cta: 'Create Your Own Design'
    },
    howItWorks: {
      badge: 'How It Works',
      title: 'Three Simple Steps',
      subtitle: 'From idea to delivery in just a few clicks',
      step1Title: 'Select a Product',
      step1Desc: 'Browse our collection and choose your favorite garment',
      step2Title: 'Design with AI',
      step2Desc: 'Describe your vision and let our AI create the perfect embroidery design',
      step3Title: 'Buy & Receive',
      step3Desc: 'Place your order and get your custom embroidered product delivered to your door'
    },
    brands: {
      badge: 'For Brands',
      title: 'Grow Your Fashion Business',
      subtitle: 'Partner with us to offer AI-powered embroidery customization',
      revenue: 'Increase Revenue',
      revenueDesc: 'Add 30-50% premium on custom embroidered pieces',
      investment: 'Zero Investment',
      investmentDesc: 'We handle production, you focus on selling',
      standOut: 'Stand Out',
      standOutDesc: 'Be the only brand offering AI-powered customization',
      cta: 'Become a Partner →',
      joinText: 'Join 50+ brands already on Tailor AI'
    },
    footer: {
      forCustomers: 'For Customers',
      howItWorks: 'How It Works',
      designGallery: 'Design Gallery',
      customOrders: 'Custom Orders',
      forBrands: 'For Brands',
      partnerWithUs: 'Partner with Us',
      brandPortal: 'Brand Portal',
      successStories: 'Success Stories',
      support: 'Support',
      helpCenter: 'Help Center',
      contactUs: 'Contact Us',
      sizeGuide: 'Size Guide',
      rights: '© 2024 Tailor AI. All rights reserved.'
    },
    design: {
      title: 'Design Your Custom Abaya',
      subtitle: 'Follow these simple steps to create your unique piece',
      step1: 'Step 1: Choose Your Abaya',
      step2: 'Step 2: Design Your Embroidery',
      prompt: 'Prompt: "a horse"',
      selectAbaya: 'Please select an Abaya from Step 1 to continue',
      classicAbaya: 'Classic Abaya Style',
      premiumFabric: 'Premium fabric with elegant finish',
      describeDesign: '1. Describe Your Design',
      placeholder: "e.g., 'A palm tree'",
      generate: 'Generate',
      customizePosition: '2. Customize Position',
      frontLeft: 'Front Left',
      frontRight: 'Front Right',
      backCenter: 'Back Center',
      custom: 'Custom',
      designWillAppear: 'Your design will appear here',
      previewOnAbaya: 'Preview on Abaya'
    }
  },
  ar: {
    nav: {
      howItWorks: 'كيف يعمل',
      gallery: 'معرض التصاميم',
      forBrands: 'للعلامات التجارية',
      startCreating: 'ابدأ التصميم ←',
      create: 'صمم ←',
      designOrder: 'صمم واطلب'
    },
    hero: {
      title1: 'كوني مميزة.',
      title2: 'منك وإليك.',
      subtitle: 'اوصفي ما تريدين ونحن سنحققه لك.',
      process: 'اكتبي فكرتك → شاهدي التصميم → اشتري الآن',
      cta: 'ابدأي التصميم الآن',
      stats: {
        customers: '١٠٠٠+',
        customersLabel: 'عميلة سعيدة',
        delivery: '٥-٧',
        deliveryLabel: 'أيام فقط',
        designs: '∞',
        designsLabel: 'خيار متاح'
      }
    },
    showcase: {
      badge: 'شاهدي النتائج',
      title: 'اختاري فكرتك واحصلي على عباءة مميزة',
      subtitle: 'رأي بعينيك كيف تتحول فكرتك إلى تطريز جميل على عباءتك',
      before: 'قبل',
      after: 'بعد',
      features: {
        aiPowered: 'بسيط وسريع',
        aiPoweredDesc: 'فقط اكتبي ما تريدين واتركي الباقي علينا',
        fastDelivery: 'توصيل سريع',
        fastDeliveryDesc: 'احصلي على عباءتك خلال أسبوع واحد',
        unlimited: 'تصاميم متنوعة',
        unlimitedDesc: 'اختاري بين الطراز التراثي أو العصري',
        premium: 'جودة عالية',
        premiumDesc: 'تطريز يدوي فاخر على أجود الأقمشة'
      }
    },
    gallery: {
      badge: 'نماذج من أعمالنا',
      title: 'أعمال عميلاتنا السابقة',
      subtitle: 'كل تصميم بدأ بفكرة بسيطة من عميلة مثلك - والآن دورك!',
      cta: 'صممي عباءتك الآن'
    },
    howItWorks: {
      badge: 'كيف يعمل',
      title: 'ثلاث خطوات بسيطة',
      subtitle: 'من الفكرة إلى التوصيل في دقائق',
      step1Title: 'اختاري المنتج',
      step1Desc: 'تصفحي مجموعتنا واختاري القطعة المفضلة لديك',
      step2Title: 'صممي بالذكاء الاصطناعي',
      step2Desc: 'صفي رؤيتك ودعي الذكاء الاصطناعي يصمم التطريز المثالي',
      step3Title: 'اشتري واستلمي',
      step3Desc: 'اطلبي الآن واحصلي على منتجك المطرز حسب الطلب حتى باب منزلك'
    },
    brands: {
      badge: 'للعلامات التجارية',
      title: 'نمي أعمال الأزياء الخاصة بك',
      subtitle: 'اشتركي معنا لتقديم خدمة التطريز المخصص بالذكاء الاصطناعي',
      revenue: 'زيادة الأرباح',
      revenueDesc: 'ربح إضافي ٣٠-٥٠٪ من القطع المطرزة',
      investment: 'بلا تكاليف إضافية',
      investmentDesc: 'نحن ننتج، أنت تبيعين وتربحين',
      standOut: 'تميزي عن المنافسين',
      standOutDesc: 'كوني الوحيدة التي تقدم هذه الخدمة المميزة',
      cta: 'انضمي إلينا ←',
      joinText: 'انضمي لأكثر من ٥٠ متجر يثق بنا'
    },
    footer: {
      forCustomers: 'للعملاء',
      howItWorks: 'كيف يعمل',
      designGallery: 'معرض التصاميم',
      customOrders: 'طلبات مخصصة',
      forBrands: 'للعلامات التجارية',
      partnerWithUs: 'كن شريكاً',
      brandPortal: 'بوابة العلامات',
      successStories: 'قصص النجاح',
      support: 'الدعم',
      helpCenter: 'مركز المساعدة',
      contactUs: 'اتصل بنا',
      sizeGuide: 'دليل المقاسات',
      rights: '© ٢٠٢٤ Tailor AI. جميع الحقوق محفوظة.'
    },
    design: {
      title: 'صمم عباءتك المخصصة',
      subtitle: 'اتبع هذه الخطوات البسيطة لإنشاء قطعتك الفريدة',
      step1: 'الخطوة ١: اختر عباءتك',
      step2: 'الخطوة ٢: صمم التطريز',
      prompt: 'الأمر: "حصان"',
      selectAbaya: 'الرجاء اختيار عباءة من الخطوة ١ للمتابعة',
      classicAbaya: 'عباءة كلاسيكية',
      premiumFabric: 'قماش فاخر بلمسة أنيقة',
      describeDesign: '١. صف تصميمك',
      placeholder: "مثال: 'نخلة'",
      generate: 'أنشئ',
      customizePosition: '٢. حدد الموضع',
      frontLeft: 'الأمام يسار',
      frontRight: 'الأمام يمين',
      backCenter: 'الخلف وسط',
      custom: 'مخصص',
      designWillAppear: 'سيظهر تصميمك هنا',
      previewOnAbaya: 'معاينة على العباءة'
    }
  }
};