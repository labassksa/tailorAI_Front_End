'use client';
import { useState, useEffect } from 'react';
import { Theme, themes, themeNames, themeDescriptions } from '../lib/themes';

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('modernCraft');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('modernCraft');
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const colors = themes[theme];
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-accent2', colors.accent2);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-text', colors.text);
    root.style.setProperty('--color-text-light', colors.textLight);
    root.style.setProperty('--color-border', colors.border);
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem('theme', theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 theme-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-theme-surface shadow-lg rounded-full p-3 hover:shadow-xl transition-all border border-theme-border"
        aria-label="Theme switcher"
      >
        <svg className="w-6 h-6 text-theme-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-theme-surface rounded-lg shadow-xl p-4 min-w-[280px] max-w-[320px] border border-theme-border">
          <h3 className="text-sm font-semibold text-theme-text mb-4">Choose Theme</h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {(Object.keys(themes) as Theme[]).map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  currentTheme === theme 
                    ? 'bg-theme-primary/10 border-2 border-theme-primary font-medium' 
                    : 'hover:bg-theme-background border-2 border-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-theme-text">{themeNames[theme]}</h4>
                    <p className="text-xs text-theme-text-light mt-1 leading-relaxed">{themeDescriptions[theme]}</p>
                  </div>
                  {currentTheme === theme && (
                    <svg className="w-5 h-5 text-theme-primary flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="flex gap-1.5">
                  <div 
                    className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                    style={{ backgroundColor: themes[theme].primary }}
                  />
                  <div 
                    className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                    style={{ backgroundColor: themes[theme].secondary }}
                  />
                  <div 
                    className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                    style={{ backgroundColor: themes[theme].accent }}
                  />
                  <div 
                    className="w-5 h-5 rounded-full border-2 border-white shadow-sm" 
                    style={{ backgroundColor: themes[theme].accent2 }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}