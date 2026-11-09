import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onNavigate,
}) => {
  const t = translations[currentLang].nav;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark & Official Emblem */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-slate-200 shadow-xs shrink-0 bg-white p-0.5 flex items-center justify-center">
              <img
                src="/assets/aistudio/gpi_2_ed004c56.png"
                alt="Global Precision Investment"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#0f2c59] whitespace-nowrap block">
                GLOBAL PRECISION INVESTMENT LTD
              </span>
              <span className="text-[10px] text-slate-500 font-medium italic block -mt-0.5">
                Invest Today... Grow Tomorrow · Kitwe & Ndola, Zambia
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('home')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activeSection === 'home'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.home}
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activeSection === 'about'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.about}
          </button>
          <button
            onClick={() => onNavigate('sectors')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activeSection === 'sectors'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.sectors}
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              activeSection === 'contact'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.contact}
          </button>
        </nav>

        {/* Zone 3: Language Selector & CTA Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle (FR / EN) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-[0.25rem] border border-slate-200">
            <button
              type="button"
              onClick={() => onLanguageChange('fr')}
              className={`px-2.5 py-1 text-xs font-bold rounded-[0.2rem] transition-all cursor-pointer ${
                currentLang === 'fr'
                  ? 'bg-[#0f2c59] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Passer en Français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 text-xs font-bold rounded-[0.2rem] transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[#0f2c59] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Primary Action */}
          <button
            onClick={() => onNavigate('contact')}
            className="btn-gold px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>{t.contactBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
