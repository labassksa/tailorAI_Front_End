'use client';
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import ImageModal from "../components/ImageModal";

export default function DesignPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; prompt?: string } | null>(null);
  const [selectedAbaya, setSelectedAbaya] = useState<{ src: string; alt: string; title: string } | null>(null);

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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nonna
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Design Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-black mb-4">Design Your Custom Abaya</h1>
            <p className="text-xl text-gray-600 mb-16">Follow these simple steps to create your unique piece</p>

            {/* Before/After Example */}
            <div className="relative mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => setSelectedImage({ src: "/beforeafter/before embroidery-t-shirt.png", alt: "Before embroidery example" })}
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-white px-4 py-2 rounded-full text-sm md:text-base font-medium text-black shadow-md whitespace-nowrap">
                    Before
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
                  className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  onClick={() => setSelectedImage({ 
                    src: "/beforeafter/after embroidery-t-shirt.png", 
                    alt: "After embroidery example",
                    prompt: "a horse"
                  })}
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10 bg-white px-4 py-2 rounded-full text-sm md:text-base font-medium text-black shadow-md whitespace-nowrap">
                    After
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-purple-600/90 px-4 py-2 rounded-full text-sm md:text-base font-medium text-white shadow-md animate-[fadeInUp_0.5s_ease-out] hover:scale-105 transition-transform">
                    <span className="inline-block animate-[bounce_1s_ease-in-out_infinite]">✨</span> Prompt: "a horse" <span className="inline-block animate-[bounce_1s_ease-in-out_infinite] delay-100">✨</span>
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
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-600 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 1: Choose Your Abaya */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-600 mb-8 text-center">Step 1: Choose Your Abaya</h2>
            <div className="relative">
              <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 snap-x snap-mandatory scrollbar-hide">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex-none w-72 snap-center">
                    <div 
                      className={`bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group ${
                        selectedAbaya?.src === `/images/abaya-${item}.jpg` ? 'ring-2 ring-purple-600' : ''
                      }`}
                      onClick={() => setSelectedAbaya({
                        src: `/images/abaya-${item}.jpg`,
                        alt: `Abaya style ${item}`,
                        title: `Classic Abaya Style ${item}`
                      })}
                    >
                      <div className="relative h-96">
                        <Image
                          src={`/images/abaya-${item}.jpg`}
                          alt={`Abaya style ${item}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-800">Classic Abaya Style {item}</h4>
                        <p className="text-gray-600 text-sm mt-1">Premium fabric with elegant finish</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Scroll Arrows */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Step 2: Customize Your Design */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-8 text-center">Step 2: Design Your Embroidery</h2>
            {!selectedAbaya ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <p className="text-gray-600">Please select an Abaya from Step 1 to continue</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-4">1. Describe Your Design</h4>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="e.g., 'A continuous line drawing of a palm tree'"
                          className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-purple-700 transition-colors">
                          Generate
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-4">2. Customize Position</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <button className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                          Front Left
                        </button>
                        <button className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                          Front Right
                        </button>
                        <button className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                          Back Center
                        </button>
                        <button className="px-4 py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                          Custom
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[500px] rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={selectedAbaya.src}
                      alt={selectedAbaya.alt}
                      fill
                      className="object-contain"
                    />
                    {/* Design Preview Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-purple-100/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <p className="text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full inline-block">Your design will appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl">
                    Preview on Abaya
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