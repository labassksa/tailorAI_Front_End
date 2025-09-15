'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
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

  const features = [
    { icon: "✨", title: t.showcase.features.aiPowered, description: t.showcase.features.aiPoweredDesc },
    { icon: "⚡", title: t.showcase.features.fastDelivery, description: t.showcase.features.fastDeliveryDesc },
    { icon: "🎨", title: t.showcase.features.unlimited, description: t.showcase.features.unlimitedDesc },
    { icon: "💎", title: t.showcase.features.premium, description: t.showcase.features.premiumDesc }
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
                <a href="#showcase" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.nav.howItWorks}</a>
                <a href="#gallery" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.nav.gallery}</a>
                <a href="#brands" className="text-theme-text-light hover:text-theme-primary px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">{t.nav.forBrands}</a>
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

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-theme-surface via-theme-background to-theme-surface">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-theme-primary rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-theme-accent rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className={`text-3xl sm:text-5xl lg:text-7xl font-black text-theme-text mb-4 sm:mb-6 leading-tight hero-title ${isRTL ? 'text-center' : 'text-center'}`}>
                {t.hero.title1}
                <br />
                <span className="bg-gradient-to-r from-theme-primary via-theme-accent to-theme-accent2 bg-clip-text text-transparent animate-gradient bg-300%">{t.hero.title2}</span>
              </h1>
              <p className={`text-lg sm:text-xl lg:text-2xl text-theme-text mb-6 sm:mb-8 max-w-4xl mx-auto font-light hero-subtitle text-center ${isRTL ? 'leading-relaxed' : ''}`}>
                {t.hero.subtitle}
              </p>
              <p className={`text-sm sm:text-base lg:text-lg text-theme-text-light mb-8 sm:mb-12 text-center ${isRTL ? 'leading-relaxed' : ''}`}>
                {t.hero.process}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
                <a 
                  href="/design"
                  className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-theme-primary to-theme-accent2 text-white rounded-full text-lg sm:text-xl font-bold transform transition-all hover:scale-105 shadow-2xl hover:shadow-theme-primary/30"
                >
                  <span className="relative z-10">{t.hero.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-theme-primary-dark to-theme-accent2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-theme-border text-theme-text rounded-full text-base sm:text-lg font-medium hover:border-theme-primary hover:text-theme-primary transition-all hover:scale-105">
                  {t.hero.demo}
                </button>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-500">
                <div className="text-center">
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-bold text-theme-primary ${isRTL ? 'arabic-numbers' : ''}`}>{t.hero.stats.customers}</div>
                  <div className="text-xs sm:text-sm text-theme-text-light">{t.hero.stats.customersLabel}</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-bold text-theme-primary ${isRTL ? 'arabic-numbers' : ''}`}>{t.hero.stats.delivery}</div>
                  <div className="text-xs sm:text-sm text-theme-text-light">{t.hero.stats.deliveryLabel}</div>
                </div>
                <div className="text-center">
                  <div className={`text-xl sm:text-2xl lg:text-3xl font-bold text-theme-primary ${isRTL ? 'arabic-numbers' : ''}`}>{t.hero.stats.designs}</div>
                  <div className="text-xs sm:text-sm text-theme-text-light">{t.hero.stats.designsLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Before/After */}
      <section id="showcase" className="py-12 sm:py-20 bg-theme-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className={`text-theme-primary font-semibold text-xs sm:text-sm uppercase tracking-wider ${isRTL ? 'tracking-wide' : ''}`}>{t.showcase.badge}</span>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text mt-2 mb-3 sm:mb-4 ${isRTL ? 'leading-normal' : ''}`}>{t.showcase.title}</h2>
            <p className={`text-base sm:text-lg lg:text-xl text-theme-text-light ${isRTL ? 'leading-relaxed' : ''}`}>{t.showcase.subtitle}</p>
          </div>
          
          {/* Before/After Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-theme-primary to-theme-accent2 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="text-center mb-2">
                    <span className="text-sm font-semibold text-gray-500 uppercase">{t.showcase.before}</span>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={showcaseImages[currentBeforeAfter].before}
                      alt="Before embroidery"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-theme-accent2 to-theme-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="text-center mb-2">
                    <span className="text-sm font-semibold text-theme-primary uppercase">{t.showcase.after}</span>
                  </div>
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={showcaseImages[currentBeforeAfter].after}
                      alt="After embroidery"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg drop-shadow-lg">{showcaseImages[currentBeforeAfter].title}</p>
                      <p className="text-white/90 text-sm drop-shadow">{showcaseImages[currentBeforeAfter].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Animated arrow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-theme-surface rounded-full p-3 shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-3 sm:p-6 rounded-2xl hover:bg-theme-primary/10 transition-all hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-theme-text mb-1 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-theme-text-light">{feature.description}</p>
              </div>
            ))}
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
          
          <div className="text-center mt-12">
            <a 
              href="/design"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-theme-primary to-theme-accent2 text-white rounded-full text-lg font-semibold transform transition-all hover:scale-105 shadow-2xl hover:shadow-theme-primary/25"
            >
              {t.gallery.cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section id="brands" className="py-20 bg-gradient-to-br from-theme-secondary via-theme-primary to-theme-accent2 text-white relative overflow-hidden">
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
                icon: "📈",
                title: t.brands.revenue,
                description: t.brands.revenueDesc
              },
              {
                icon: "🚀",
                title: t.brands.investment,
                description: t.brands.investmentDesc
              },
              {
                icon: "🎯",
                title: t.brands.standOut,
                description: t.brands.standOutDesc
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-theme-surface/10 backdrop-blur-sm rounded-2xl p-8 border border-theme-surface/20 hover:bg-theme-surface/20 transition-all hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-theme-surface/90">{item.description}</p>
              </div>
            ))}
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
