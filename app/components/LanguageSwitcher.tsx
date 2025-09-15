'use client';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className={`fixed top-4 ${isRTL ? 'left-4' : 'right-4'} z-50 bg-theme-surface/95 backdrop-blur-sm shadow-lg rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-xl transition-all hover:scale-105 border border-theme-border`}
      aria-label="Switch language"
    >
      <svg className="w-5 h-5 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span className="text-sm font-medium text-theme-text">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
}