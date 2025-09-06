'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import ImageModal from "./components/ImageModal";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; prompt?: string } | null>(null);
  const [selectedAbaya, setSelectedAbaya] = useState<{ src: string; alt: string; title: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);

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
    { icon: "✨", title: "AI-Powered", description: "Create unique designs with simple prompts" },
    { icon: "⚡", title: "Fast Delivery", description: "Get your custom abaya in 5-7 days" },
    { icon: "🎨", title: "Unlimited Designs", description: "From traditional to modern patterns" },
    { icon: "💎", title: "Premium Quality", description: "Hand-finished embroidery on luxury fabric" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-slow">Nonna</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#showcase" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">How It Works</a>
                <a href="#gallery" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">Gallery</a>
                <a href="#brands" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105">For Brands</a>
              </div>
            </div>
            <div>
              <a 
                href="/design"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl animate-float"
              >
                Start Creating →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 leading-tight">
                One Prompt.
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300%">Infinite Possibilities.</span>
              </h1>
              <p className="text-2xl text-gray-700 mb-4 max-w-3xl mx-auto font-light">
                Transform any garment into a personalized masterpiece with AI-powered embroidery
              </p>
              <p className="text-lg text-gray-500 mb-10">
                ✨ Type your idea → See it designed → Get it delivered
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a 
                  href="/design"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold transform transition-all hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10">Create Your Design Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full text-lg font-medium hover:border-purple-600 hover:text-purple-600 transition-all hover:scale-105">
                  Watch Demo →
                </button>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-500">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5-7</div>
                  <div className="text-sm text-gray-600">Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">∞</div>
                  <div className="text-sm text-gray-600">Design Options</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Before/After */}
      <section id="showcase" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">See The Magic</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">From Plain to Extraordinary</h2>
            <p className="text-xl text-gray-600">Watch how a simple prompt transforms ordinary garments</p>
          </div>
          
          {/* Before/After Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="text-center mb-2">
                    <span className="text-sm font-semibold text-gray-500 uppercase">Before</span>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="text-center mb-2">
                    <span className="text-sm font-semibold text-purple-600 uppercase">After</span>
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
              <div className="bg-white rounded-full p-3 shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-purple-50 transition-all hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">AI-Generated Masterpieces</h2>
            <p className="text-xl text-gray-600">Each design started with just a simple text prompt</p>
          </div>
          
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative break-inside-avoid cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium drop-shadow-lg">{image.alt}</p>
                  </div>
                  
                  {/* Hover overlay with view icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold transform transition-all hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              Create Your Own Design
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section id="brands" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider">For Brands</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">Grow Your Abaya Business</h2>
            <p className="text-xl text-purple-100">Partner with us to offer AI-powered customization</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Increase Revenue",
                description: "Add 30-50% premium on custom embroidered pieces"
              },
              {
                icon: "🚀",
                title: "Zero Investment",
                description: "We handle production, you focus on selling"
              },
              {
                icon: "🎯",
                title: "Stand Out",
                description: "Be the only brand offering AI-powered customization"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white text-purple-900 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl hover:shadow-white/25">
              Become a Partner →
            </button>
            <p className="mt-4 text-purple-200">Join 50+ brands already on Nonna</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Nonna</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-purple-600 mb-4">For Customers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Design Gallery</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Custom Orders</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-purple-600 mb-4">For Brands</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Partner with Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Brand Portal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-purple-600 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-purple-100 text-center text-gray-600">
            <p>&copy; 2024 Nonna. All rights reserved.</p>
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
