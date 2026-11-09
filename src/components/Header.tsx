import React, { useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Pickaxe,
  Sprout,
  Ship,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onSelectSector: (sectorId: 'mining' | 'agriculture' | 'supply') => void;
  currentView?: 'home' | 'sector';
  currentSectorId?: 'mining' | 'agriculture' | 'supply';
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onNavigate,
  onSelectSector,
  currentView = 'home',
  currentSectorId,
}) => {
  const t = translations[currentLang].nav;
  const sectors = translations[currentLang].sectors;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);

  const handleSectorClick = (id: 'mining' | 'agriculture' | 'supply') => {
    onSelectSector(id);
    setMobileMenuOpen(false);
    setSectorsDropdownOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setSectorsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-hidden min-w-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 bg-white p-0.5 flex items-center justify-center">
              <img
                src="/assets/aistudio/gpi_2_ed004c56.png"
                alt="Global Precision Investment"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <span className="font-display text-xs sm:text-base lg:text-xl font-bold tracking-tight text-[#0f2c59] whitespace-nowrap block truncate max-w-[170px] xs:max-w-[240px] sm:max-w-none">
                GLOBAL PRECISION INVESTMENT LTD
              </span>
              <span className="hidden sm:block text-[10px] text-slate-500 font-medium italic -mt-0.5 truncate">
                Invest Today... Grow Tomorrow · Kitwe & Ndola, Zambia
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentView === 'home' && activeSection === 'home'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.home}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentView === 'home' && activeSection === 'about'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.about}
          </button>

          {/* Desktop Sectors Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setSectorsDropdownOpen(true)}
            onMouseLeave={() => setSectorsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('sectors')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 flex items-center gap-1.5 ${
                currentView === 'sector' || (currentView === 'home' && activeSection === 'sectors')
                  ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                  : 'border-transparent hover:text-[#0f2c59]'
              }`}
            >
              <span>{t.sectors}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sectorsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            {sectorsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  {currentLang === 'fr' ? 'Nos Pages Dédiées' : 'Dedicated Sector Pages'}
                </div>
                <button
                  onClick={() => handleSectorClick('mining')}
                  className={`w-full text-left px-3.5 py-2.5 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer ${
                    currentView === 'sector' && currentSectorId === 'mining' ? 'bg-amber-50/60 font-semibold' : ''
                  }`}
                >
                  <div className="p-1.5 bg-[#f9a825]/15 text-[#f9a825] rounded-[0.25rem]">
                    <Pickaxe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f2c59] block">
                      {sectors.mining.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[200px]">
                      {sectors.mining.tagline}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => handleSectorClick('agriculture')}
                  className={`w-full text-left px-3.5 py-2.5 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer ${
                    currentView === 'sector' && currentSectorId === 'agriculture' ? 'bg-emerald-50/60 font-semibold' : ''
                  }`}
                >
                  <div className="p-1.5 bg-emerald-500/15 text-emerald-600 rounded-[0.25rem]">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f2c59] block">
                      {sectors.agriculture.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[200px]">
                      {sectors.agriculture.tagline}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => handleSectorClick('supply')}
                  className={`w-full text-left px-3.5 py-2.5 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer ${
                    currentView === 'sector' && currentSectorId === 'supply' ? 'bg-blue-50/60 font-semibold' : ''
                  }`}
                >
                  <div className="p-1.5 bg-[#0f2c59]/10 text-[#0f2c59] rounded-[0.25rem]">
                    <Ship className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f2c59] block">
                      {sectors.supply.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate max-w-[200px]">
                      {sectors.supply.tagline}
                    </span>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
              currentView === 'home' && activeSection === 'contact'
                ? 'text-[#0f2c59] font-semibold border-[#f9a825]'
                : 'border-transparent hover:text-[#0f2c59]'
            }`}
          >
            {t.contact}
          </button>
        </nav>

        {/* Zone 3: Language Selector & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Toggle (FR / EN) */}
          <div className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-[0.25rem] border border-slate-200">
            <button
              type="button"
              onClick={() => onLanguageChange('fr')}
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-[0.2rem] transition-all cursor-pointer ${
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
              className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-[0.2rem] transition-all cursor-pointer ${
                currentLang === 'en'
                  ? 'bg-[#0f2c59] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Primary Action Button (Desktop & Tablet) */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex btn-gold px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>{t.contactBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md border border-slate-200 bg-white text-slate-700 hover:text-[#0f2c59] hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Main Navigation Links */}
          <div className="space-y-1 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentView === 'home' && activeSection === 'home'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentView === 'home' && activeSection === 'about'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                currentView === 'home' && activeSection === 'contact'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.contact}
            </button>
          </div>

          {/* Dedicated Sector Pages Section */}
          <div className="space-y-2">
            <div className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {currentLang === 'fr' ? 'Nos Pages Dédiées par Secteur' : 'Dedicated Sector Pages'}
            </div>

            <div className="space-y-1.5">
              <button
                onClick={() => handleSectorClick('mining')}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  currentView === 'sector' && currentSectorId === 'mining'
                    ? 'border-[#f9a825] bg-amber-50/50 shadow-2xs'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#f9a825]/15 text-[#f9a825]">
                    <Pickaxe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f2c59] block">
                      {sectors.mining.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Copperbelt · {currentLang === 'fr' ? 'Afficher la page' : 'Open Page'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#f9a825]" />
              </button>

              <button
                onClick={() => handleSectorClick('agriculture')}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  currentView === 'sector' && currentSectorId === 'agriculture'
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-2xs'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-emerald-500/15 text-emerald-600">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f2c59] block">
                      {sectors.agriculture.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      Agro-Supply · {currentLang === 'fr' ? 'Afficher la page' : 'Open Page'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </button>

              <button
                onClick={() => handleSectorClick('supply')}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  currentView === 'sector' && currentSectorId === 'supply'
                    ? 'border-[#0f2c59] bg-blue-50/50 shadow-2xs'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0f2c59]/10 text-[#0f2c59]">
                    <Ship className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0f2c59] block">
                      {sectors.supply.name}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      ISIC 4690 · {currentLang === 'fr' ? 'Afficher la page' : 'Open Page'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#0f2c59]" />
              </button>
            </div>
          </div>

          {/* Quick Contact & WhatsApp Action on Mobile */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <a
              href="https://wa.me/260960641318"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp : +260 960 641 318</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="btn-gold w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>{t.contactBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
