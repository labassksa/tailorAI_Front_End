'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import ImageModal from "../components/ImageModal";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export default function DesignPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; prompt?: string } | null>(null);
  const [selectedAbaya, setSelectedAbaya] = useState<{ src: string; alt: string; title: string } | null>(null);
  const { t, isRTL } = useLanguage();

  const beforeAfterImages = [
    {
      before: '/beforeafter/before1.jpg',
      after: '/beforeafter/after1.jpg',
      title: 'Classic to Contemporary',
      description: 'Traditional Abaya transformed with modern geometric patterns'
    },
    {
      before: '/beforeafter/before2.jpg',
      after: '/beforeafter/after2.jpg',
      title: 'Simple to Stunning',
      description: 'Minimalist design enhanced with intricate floral embroidery'
    },
    {
      before: '/beforeafter/before3.jpg',
      after: '/beforeafter/after3.jpg',
      title: 'Plain to Personalized',
      description: 'Basic black Abaya customized with Arabic calligraphy'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-surface to-theme-background pt-16 sm:pt-20">
      <ThemeSwitcher />
      <LanguageSwitcher />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-theme-surface/80 backdrop-blur-sm z-40 border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-theme-primary to-theme-accent2 bg-clip-text text-transparent">
                Tailor AI
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Design Process Section */}
      <section className="py-8 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text mb-3 sm:mb-4">{t.design.title}</h1>
            <p className="text-base sm:text-lg lg:text-xl text-theme-text-light mb-8 sm:mb-16">{t.design.subtitle}</p>

            {/* Before/After Example */}
            <div className="relative mb-12 sm:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                <div 
                  className="group relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => setSelectedImage({ src: "/beforeafter/before embroidery-t-shirt.png", alt: "Before embroidery example" })}
                >
                  <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 z-10 bg-theme-surface px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium text-theme-text shadow-md whitespace-nowrap">
                    {t.showcase.before}
                  </div>
                  <Image
                    src="/beforeafter/before embroidery-t-shirt.png"
                    alt="Before embroidery example"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div 
                  className="group relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => setSelectedImage({ 
                    src: "/beforeafter/after embroidery-t-shirt.png", 
                    alt: "After embroidery example",
                    prompt: "a horse"
                  })}
                >
                  <div className="absolute -top-8 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 z-10 bg-theme-surface px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium text-theme-text shadow-md whitespace-nowrap">
                    {t.showcase.after}
                  </div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-10 bg-theme-primary/90 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-white shadow-md animate-[fadeInUp_0.5s_ease-out] hover:scale-105 transition-transform">
                    <span className="hidden sm:inline-block animate-[bounce_1s_ease-in-out_infinite]">✨</span> {t.design.prompt} <span className="hidden sm:inline-block animate-[bounce_1s_ease-in-out_infinite] delay-100">✨</span>
                  </div>
                  <Image
                    src="/beforeafter/after embroidery-t-shirt.png"
                    alt="After embroidery example"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              {/* Arrow connecting before and after */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-theme-surface rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-theme-primary rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: Choose Your Abaya */}
          <div className="mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-8 text-center">{t.design.step1}</h2>
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 sm:pb-8 -mx-4 px-4 space-x-3 sm:space-x-6 snap-x snap-mandatory scrollbar-hide">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex-none w-48 sm:w-64 md:w-72 snap-center">
                    <div 
                      className={`bg-theme-background rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group ${
                        selectedAbaya?.src === `/images/abaya-${item}.jpg` ? 'ring-2 ring-theme-primary' : ''
                      }`}
                      onClick={() => setSelectedAbaya({
                        src: `/images/abaya-${item}.jpg`,
                        alt: `Abaya style ${item}`,
                        title: `Classic Abaya Style ${item}`
                      })}
                    >
                      <div className="relative h-64 sm:h-80 md:h-96">
                        <Image
                          src={`/images/abaya-${item}.jpg`}
                          alt={`Abaya style ${item}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 sm:p-4">
                        <h4 className="font-semibold text-theme-text text-sm sm:text-base">{t.design.classicAbaya} {item}</h4>
                        <p className="text-theme-text-light text-xs sm:text-sm mt-1">{t.design.premiumFabric}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Scroll Arrows - Hidden on mobile */}
              <button className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 bg-theme-surface/80 p-2 rounded-full shadow-lg hover:bg-theme-surface transition-all">
                <svg className="w-6 h-6 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 bg-theme-surface/80 p-2 rounded-full shadow-lg hover:bg-theme-surface transition-all">
                <svg className="w-6 h-6 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Step 2: Customize Your Design */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-8 text-center">{t.design.step2}</h2>
            {!selectedAbaya ? (
              <div className="bg-theme-surface rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto text-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-theme-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <p className="text-theme-text-light text-sm sm:text-base">{t.design.selectAbaya}</p>
              </div>
            ) : (
              <div className="bg-theme-surface rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-theme-background rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-theme-text">{t.design.describeDesign}</h4>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder={t.design.placeholder}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-20 sm:pr-24 rounded-lg border border-theme-border focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 outline-none transition-all text-sm sm:text-base bg-theme-surface text-theme-text"
                        />
                        <button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-theme-primary text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm hover:bg-theme-primary-dark transition-colors">
                          {t.design.generate}
                        </button>
                      </div>
                    </div>
                    <div className="bg-theme-background rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-theme-text">{t.design.customizePosition}</h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-theme-border rounded-lg hover:bg-theme-primary/10 transition-colors text-xs sm:text-sm md:text-base text-theme-text">
                          {t.design.frontLeft}
                        </button>
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-theme-border rounded-lg hover:bg-theme-primary/10 transition-colors text-xs sm:text-sm md:text-base text-theme-text">
                          {t.design.frontRight}
                        </button>
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-theme-border rounded-lg hover:bg-theme-primary/10 transition-colors text-xs sm:text-sm md:text-base text-theme-text">
                          {t.design.backCenter}
                        </button>
                        <button className="px-3 sm:px-4 py-1.5 sm:py-2 border border-theme-border rounded-lg hover:bg-theme-primary/10 transition-colors text-xs sm:text-sm md:text-base text-theme-text">
                          {t.design.custom}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-theme-background order-first md:order-last">
                    <Image
                      src={selectedAbaya.src}
                      alt={selectedAbaya.alt}
                      fill
                      className="object-contain"
                    />
                    {/* Design Preview Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4 sm:p-6">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-theme-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <svg className="w-6 sm:w-8 h-6 sm:h-8 text-theme-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <p className="text-theme-text-light bg-theme-surface/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block text-xs sm:text-sm md:text-base">{t.design.designWillAppear}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 text-center">
                  <button className="bg-gradient-to-r from-theme-primary to-theme-accent2 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:from-theme-primary-dark hover:to-theme-accent2 transition-all shadow-lg hover:shadow-xl">
                    {t.design.previewOnAbaya}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

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