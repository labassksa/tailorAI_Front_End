'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, Star, ShoppingBag, Sparkles, Package } from "lucide-react";
import ImageModal from "./components/ImageModal";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; prompt?: string } | null>(null);
  const [selectedAbaya, setSelectedAbaya] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBeforeAfter((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    {
      src: "/designGallery/yazeedsaad_A_simple_continuous_line_sketch_of_a_detailed_palm_e_a06aa02b-14d7-4096-9608-78e560d97017.png",
      alt: "Continuous line palm sketch embroidery"
    },
    {
      src: "/designGallery/yazeedsaad_simple_palms_stitched_out_as_running_stitch_on_t_shi_c26513e6-d99f-4584-9fd7-fa74946a9421.png",
      alt: "Palm running stitch embroidery"
    },
    {
      src: "/designGallery/yazeedsaad_a_continuous_line_sketch_of_a_flying_falcon_embroi_e2f0859d-29f8-4e8e-a4a9-14103b41d568_1.png",
      alt: "Flying falcon continuous line embroidery"
    },
    {
      src: "/designGallery/yazeedsaad_a_continuous_line_sketch_of_a_jungle_falcon_spreadin_7b15646b-f5ce-4422-b5f7-4180c36ba7aa.png",
      alt: "Jungle falcon spreading wings embroidery"
    },
    {
      src: "/designGallery/yazeedsaad_a_continuous_line_sketch_of_a_horse_embroidered_as_b4ef51e5-bbda-45e6-8dd4-3f562eb03a54_3.png",
      alt: "Horse continuous line embroidery 1"
    },
    {
      src: "/designGallery/yazeedsaad_a_continuous_line_sketch_of_a_horse_embroidered_on_a_fa0b3542-18b2-44ad-9f41-20a81e774942.png",
      alt: "Horse continuous line embroidery 2"
    },
    {
      src: "/designGallery/yazeedsaad_a_continuous_line_sketch_of_isolated_5_stars_embroid_28e1df8a-f042-47e4-a2e2-8ef26caaadd0.png",
      alt: "Five stars continuous line embroidery"
    },
    // Colereel Images
    {
      src: "/designGallery/colereel/colereel1.jpg.avif",
      alt: "Colereel embroidery design 1"
    },
    {
      src: "/designGallery/colereel/colereel2.jpg.avif",
      alt: "Colereel embroidery design 2"
    },
    {
      src: "/designGallery/colereel/colereel3.jpg.avif",
      alt: "Colereel embroidery design 3"
    },
    {
      src: "/designGallery/colereel/colereel4.jpg.avif",
      alt: "Colereel embroidery design 4"
    },
    {
      src: "/designGallery/colereel/colereel5.jpg.avif",
      alt: "Colereel embroidery design 5"
    },
    {
      src: "/designGallery/colereel/colereel6.jpg.avif",
      alt: "Colereel embroidery design 6"
    }
  ];

  const showcaseImages = [
    {
      before: "/beforeafter/before embroidery-t-shirt.png",
      after: "/beforeafter/after embroidery-t-shirt.png",
      title: "T-Shirt Embroidery",
      description: "Simple prompt, stunning result"
    }
  ];


  return (
    <div className="min-h-screen bg-theme-background overflow-x-hidden">
      <ThemeSwitcher />
      <LanguageSwitcher />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-theme-surface/95 backdrop-blur-md z-40 border-b border-theme-border animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent animate-pulse-slow">Tailor AI</span>
            </div>
            <div className="hidden md:block">
              <div className={`${isRTL ? 'mr-10 space-x-reverse' : 'ml-10'} flex items-baseline space-x-4 nav-items`}>
                <a href="#how-it-works" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.nav.howItWorks}</a>
                <a href="#gallery" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.nav.gallery}</a>
                <a href="#brands" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.nav.forBrands}</a>
                <a href="#contact" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.footer.contactUs}</a>
              </div>
            </div>
            <div>
              <a 
                href="/design"
                className="bg-gradient-to-r from-theme-primary to-theme-accent text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl animate-float"
              >
                <span className="hidden sm:inline">{t.nav.startCreating}</span>
                <span className="sm:hidden">{t.nav.create}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Redesigned with Emphasis */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-theme-surface via-white to-theme-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-theme-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Text Content */}
          <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-theme-primary/10 to-theme-accent/10 border border-theme-primary/20 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fadeInUp">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-theme-primary" />
              <span className="text-xs sm:text-sm font-semibold text-theme-primary uppercase tracking-wide">
                {t.howItWorks.badge}
              </span>
            </div>

            {/* Main Headlines */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-theme-text mb-4 sm:mb-6 leading-tight tracking-tight hero-title bg-gradient-to-r from-theme-text via-theme-primary to-theme-accent bg-clip-text ${isRTL ? 'text-center' : 'text-center'}`}>
              {t.hero.title1}
            </h1>
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-theme-text-light mb-6 sm:mb-8 leading-tight tracking-tight ${isRTL ? 'text-center' : 'text-center'}`}>
              {t.hero.title2}
            </h2>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-theme-text-light mb-10 sm:mb-12 max-w-4xl mx-auto font-normal leading-relaxed ${isRTL ? 'leading-loose' : ''}`}>
              {t.hero.subtitle}
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-16 sm:mb-20">
              <a
                href="/design"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-theme-primary to-theme-accent text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-theme-primary/50 hover:scale-105 animate-float"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>{t.hero.cta}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Before/After Images - Featured Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text mb-3 sm:mb-4">
                See The Magic
              </h3>
              <p className="text-base sm:text-lg text-theme-text-light max-w-2xl mx-auto">
                Transform ordinary garments into extraordinary pieces with AI-powered embroidery
              </p>
            </div>

            {/* Before/After Comparison */}
            <div className="relative max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16">
                {/* Before Image */}
                <div className="group relative animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-1 shadow-2xl transition-all duration-500 hover:shadow-theme-primary/20 hover:scale-[1.02]">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white">
                      <Image
                        src="/beforeafter/before embroidery-t-shirt.png"
                        alt="Before embroidery"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay label */}
                      <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-200/50 rounded-full blur-2xl -z-10"></div>
                </div>

                {/* Arrow/VS Indicator - Desktop */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-gradient-to-r from-theme-primary to-theme-accent text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-2xl animate-pulse-slow border-4 border-white">
                    →
                  </div>
                </div>

                {/* VS Indicator - Mobile */}
                <div className="md:hidden flex justify-center -my-3 z-20">
                  <div className="bg-gradient-to-r from-theme-primary to-theme-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shadow-xl animate-pulse-slow border-4 border-white">
                    ↓
                  </div>
                </div>

                {/* After Image */}
                <div className="group relative animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-theme-primary/20 to-theme-accent/20 p-1 shadow-2xl transition-all duration-500 hover:shadow-theme-accent/30 hover:scale-[1.02]">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white">
                      <Image
                        src="/beforeafter/after embroidery-t-shirt.png"
                        alt="After embroidery"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay label */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-theme-primary to-theme-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        After
                      </div>
                      {/* Corner badge */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs sm:text-sm font-semibold text-theme-primary text-center">
                          ✨ AI-Generated Embroidery Design
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-theme-primary/20 rounded-full blur-2xl -z-10"></div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 sm:p-8 bg-theme-surface/50 backdrop-blur-sm rounded-2xl border border-theme-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
                <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent mb-2 ${isRTL ? 'arabic-numbers' : ''}`}>
                  {t.hero.stats.designs}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-theme-text-light font-semibold">{t.hero.stats.designsLabel}</div>
              </div>

              <div className="text-center p-6 sm:p-8 bg-theme-surface/50 backdrop-blur-sm rounded-2xl border border-theme-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fadeInUp" style={{ animationDelay: '900ms' }}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-theme-text-light font-semibold">Instant Generation</div>
              </div>

              <div className="text-center p-6 sm:p-8 bg-theme-surface/50 backdrop-blur-sm rounded-2xl border border-theme-border shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fadeInUp" style={{ animationDelay: '1000ms' }}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-theme-text-light font-semibold">Unique Designs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-theme-surface to-theme-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className={`text-theme-primary font-semibold text-xs sm:text-sm uppercase tracking-wider ${isRTL ? 'tracking-wide' : ''}`}>{t.howItWorks.badge}</span>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-text mt-2 mb-3 sm:mb-4 ${isRTL ? 'leading-normal' : ''}`}>{t.howItWorks.title}</h2>
            <p className={`text-base sm:text-lg lg:text-xl text-theme-text-light max-w-2xl mx-auto ${isRTL ? 'leading-relaxed' : ''}`}>{t.howItWorks.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Step 1 */}
            <div className="relative group animate-fadeInUp" style={{ animationDelay: '0ms' }}>
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {isRTL ? '١' : '1'}
                </div>

                {/* Icon container */}
                <div className="w-full bg-theme-surface rounded-2xl p-8 sm:p-10 pt-12 sm:pt-14 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-theme-border">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-theme-primary to-theme-accent rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold text-theme-text mb-3 ${isRTL ? 'leading-normal' : ''}`}>{t.howItWorks.step1Title}</h3>
                  <p className={`text-theme-text-light text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t.howItWorks.step1Desc}</p>
                </div>
              </div>

              {/* Arrow connector - hidden on mobile, visible on md+ */}
              <div className={`hidden md:block absolute top-24 ${isRTL ? 'right-0' : 'left-full'} w-12 text-theme-primary`}>
                <svg className={`w-12 h-12 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group animate-fadeInUp" style={{ animationDelay: '100ms' }}>
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {isRTL ? '٢' : '2'}
                </div>

                {/* Icon container */}
                <div className="w-full bg-theme-surface rounded-2xl p-8 sm:p-10 pt-12 sm:pt-14 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-theme-border">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-theme-primary to-theme-accent rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold text-theme-text mb-3 ${isRTL ? 'leading-normal' : ''}`}>{t.howItWorks.step2Title}</h3>
                  <p className={`text-theme-text-light text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t.howItWorks.step2Desc}</p>
                </div>
              </div>

              {/* Arrow connector */}
              <div className={`hidden md:block absolute top-24 ${isRTL ? 'right-0' : 'left-full'} w-12 text-theme-primary`}>
                <svg className={`w-12 h-12 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-theme-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {isRTL ? '٣' : '3'}
                </div>

                {/* Icon container */}
                <div className="w-full bg-theme-surface rounded-2xl p-8 sm:p-10 pt-12 sm:pt-14 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-theme-border">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-gradient-to-br from-theme-primary to-theme-accent rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold text-theme-text mb-3 ${isRTL ? 'leading-normal' : ''}`}>{t.howItWorks.step3Title}</h3>
                  <p className={`text-theme-text-light text-sm sm:text-base ${isRTL ? 'leading-relaxed' : ''}`}>{t.howItWorks.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="/design"
              className="inline-block bg-gradient-to-r from-theme-primary to-theme-accent text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-20 bg-gradient-to-b from-theme-background to-theme-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <span className={`text-theme-primary font-semibold text-xs sm:text-sm uppercase tracking-wider ${isRTL ? 'tracking-wide' : ''}`}>{t.gallery.badge}</span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text mt-2 mb-3 sm:mb-4 ${isRTL ? 'leading-normal' : ''}`}>{t.gallery.title}</h2>
            <p className={`text-base sm:text-lg lg:text-xl text-theme-text-light ${isRTL ? 'leading-relaxed' : ''}`}>{t.gallery.subtitle}</p>
          </div>
          
          {/* Masonry Grid */}
          <div className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 masonry-grid ${isRTL ? 'text-right' : ''}`}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative break-inside-avoid cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-theme-background">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-secondary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium drop-shadow-lg">{image.alt}</p>
                  </div>
                  
                  {/* Hover overlay with view icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-theme-surface/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* For Brands Section */}
      <section id="brands" className="py-20 bg-theme-primary text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`text-theme-surface/80 font-semibold text-sm uppercase tracking-wider ${isRTL ? 'tracking-wide' : ''}`}>{t.brands.badge}</span>
            <h2 className={`text-4xl font-bold text-white mt-2 mb-4 ${isRTL ? 'leading-normal' : ''}`}>{t.brands.title}</h2>
            <p className={`text-xl text-theme-surface/90 ${isRTL ? 'leading-relaxed' : ''}`}>{t.brands.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: t.brands.revenue,
                description: t.brands.revenueDesc
              },
              {
                icon: DollarSign,
                title: t.brands.investment,
                description: t.brands.investmentDesc
              },
              {
                icon: Star,
                title: t.brands.standOut,
                description: t.brands.standOutDesc
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-theme-surface/10 backdrop-blur-sm rounded-2xl p-8 border border-theme-surface/20 hover:bg-theme-surface/20 transition-all hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-theme-surface/90">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-theme-surface text-theme-secondary rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl hover:shadow-theme-surface/25">
              {t.brands.cta}
            </button>
            <p className="mt-4 text-theme-surface/80">{t.brands.joinText}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-theme-background to-theme-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent2 bg-clip-text text-transparent">Tailor AI</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-theme-primary mb-4">{t.footer.forCustomers}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.howItWorks}</a></li>
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.designGallery}</a></li>
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.customOrders}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-theme-primary mb-4">{t.footer.forBrands}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.partnerWithUs}</a></li>
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.brandPortal}</a></li>
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.successStories}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-theme-primary mb-4">{t.footer.support}</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.helpCenter}</a></li>
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.contactUs}</a></li>
                <li><a href="#" className="text-theme-text-light hover:text-theme-primary transition-colors">{t.footer.sizeGuide}</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-theme-border text-center text-theme-text-light">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
        prompt={selectedImage?.prompt}
      />
    </div>
  );
}
