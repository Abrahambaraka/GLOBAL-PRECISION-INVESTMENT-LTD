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
  Mail,
  MapPin,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentPage: 'home' | 'about' | 'contact' | 'sector';
  currentSectorId?: 'mining' | 'agriculture' | 'supply';
  onNavigatePage: (page: 'home' | 'about' | 'contact') => void;
  onSelectSector: (sectorId: 'mining' | 'agriculture' | 'supply') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  currentPage,
  currentSectorId,
  onNavigatePage,
  onSelectSector,
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

  const handlePageClick = (page: 'home' | 'about' | 'contact') => {
    onNavigatePage(page);
    setMobileMenuOpen(false);
    setSectorsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Utility Bar modeled after godafdrc.com */}
      <div className="bg-[#00173b] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-12 border-b border-white/10 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          {/* Left contact info */}
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#f9a825]" />
              <a href="tel:+260960641318" className="hover:text-white transition-colors">
                +260 960 641 318
              </a>
              <span className="text-slate-500">/</span>
              <a href="tel:+260766557185" className="hover:text-white transition-colors">
                +260 766 557 185
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#f9a825]" />
              <a href="mailto:contact@globalprecisioninvest.com" className="hover:text-white transition-colors">
                contact@globalprecisioninvest.com
              </a>
            </div>

            <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#f9a825]" />
              <span>Plot 4017 Euclid Rd, Kitwe & Ndola, Zambia</span>
            </div>
          </div>

          {/* Right Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 p-0.5 rounded border border-white/10 text-[11px]">
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 font-bold rounded transition-colors cursor-pointer ${
                  currentLang === 'fr' ? 'bg-[#f9a825] text-[#0f2c59]' : 'text-slate-300 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 font-bold rounded transition-colors cursor-pointer ${
                  currentLang === 'en' ? 'bg-[#f9a825] text-[#0f2c59]' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo & Brand Wordmark */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <button
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-hidden min-w-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-slate-200 shadow-2xs shrink-0 bg-white p-0.5 flex items-center justify-center">
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handlePageClick('home')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'home'
                  ? 'text-[#0f2c59] border-[#f9a825]'
                  : 'border-transparent hover:text-[#0f2c59]'
              }`}
            >
              {t.home}
            </button>

            <button
              onClick={() => handlePageClick('about')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'about'
                  ? 'text-[#0f2c59] border-[#f9a825]'
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
                className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 flex items-center gap-1.5 ${
                  currentPage === 'sector'
                    ? 'text-[#0f2c59] border-[#f9a825]'
                    : 'border-transparent hover:text-[#0f2c59]'
                }`}
              >
                <span>{t.sectors}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sectorsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              {sectorsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {currentLang === 'fr' ? 'Nos 3 Pages Dédiées' : 'Dedicated Sector Pages'}
                  </div>

                  <button
                    onClick={() => handleSectorClick('mining')}
                    className={`w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer ${
                      currentPage === 'sector' && currentSectorId === 'mining' ? 'bg-amber-50/70 font-semibold' : ''
                    }`}
                  >
                    <div className="p-2 bg-[#f9a825]/15 text-[#f9a825] rounded-md shrink-0">
                      <Pickaxe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0f2c59] block">
                        {sectors.mining.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block truncate max-w-[210px]">
                        {sectors.mining.tagline}
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSectorClick('agriculture')}
                    className={`w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer ${
                      currentPage === 'sector' && currentSectorId === 'agriculture' ? 'bg-emerald-50/70 font-semibold' : ''
                    }`}
                  >
                    <div className="p-2 bg-emerald-500/15 text-emerald-600 rounded-md shrink-0">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0f2c59] block">
                        {sectors.agriculture.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block truncate max-w-[210px]">
                        {sectors.agriculture.tagline}
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => handleSectorClick('supply')}
                    className={`w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer ${
                      currentPage === 'sector' && currentSectorId === 'supply' ? 'bg-blue-50/70 font-semibold' : ''
                    }`}
                  >
                    <div className="p-2 bg-[#0f2c59]/10 text-[#0f2c59] rounded-md shrink-0">
                      <Ship className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0f2c59] block">
                        {sectors.supply.name}
                      </span>
                      <span className="text-[11px] text-slate-500 block truncate max-w-[210px]">
                        {sectors.supply.tagline}
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handlePageClick('contact')}
              className={`whitespace-nowrap shrink-0 transition-colors cursor-pointer py-1 border-b-2 ${
                currentPage === 'contact'
                  ? 'text-[#0f2c59] border-[#f9a825]'
                  : 'border-transparent hover:text-[#0f2c59]'
              }`}
            >
              {t.contact}
            </button>
          </nav>

          {/* Action Button & Mobile Burger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Language switch */}
            <div className="flex md:hidden items-center bg-slate-100 p-0.5 rounded border border-slate-200 text-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2 py-0.5 font-bold rounded ${
                  currentLang === 'fr' ? 'bg-[#0f2c59] text-white' : 'text-slate-600'
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 font-bold rounded ${
                  currentLang === 'en' ? 'bg-[#0f2c59] text-white' : 'text-slate-600'
                }`}
              >
                EN
              </button>
            </div>

            {/* Demander un devis (desktop) */}
            <button
              onClick={() => handlePageClick('contact')}
              className="hidden sm:flex btn-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wider items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs active:scale-95 transition-all"
            >
              <span>{currentLang === 'fr' ? 'Demander un devis' : 'Request Quote'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Animated Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center gap-1.5 text-slate-700 hover:text-[#0f2c59] hover:bg-slate-50 transition-all cursor-pointer focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              <span
                className={`w-5 h-0.5 bg-[#0f2c59] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#0f2c59] rounded-full transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-[#0f2c59] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Main Pages */}
          <div className="space-y-1 pb-3 border-b border-slate-100 text-sm">
            <button
              onClick={() => handlePageClick('home')}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                currentPage === 'home' ? 'bg-[#0f2c59] text-white' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => handlePageClick('about')}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                currentPage === 'about' ? 'bg-[#0f2c59] text-white' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.about}
            </button>
            <button
              onClick={() => handlePageClick('contact')}
              className={`w-full text-left py-2.5 px-3 rounded-lg font-semibold transition-colors cursor-pointer ${
                currentPage === 'contact' ? 'bg-[#0f2c59] text-white' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.contact}
            </button>
          </div>

          {/* Dedicated Sector Pages */}
          <div className="space-y-2">
            <div className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {currentLang === 'fr' ? 'Nos Pages Dédiées par Secteur' : 'Dedicated Sector Pages'}
            </div>

            <div className="space-y-1.5">
              <button
                onClick={() => handleSectorClick('mining')}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'sector' && currentSectorId === 'mining'
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
                      Copperbelt · {currentLang === 'fr' ? 'Ouvrir la page' : 'Open Page'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#f9a825]" />
              </button>

              <button
                onClick={() => handleSectorClick('agriculture')}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'sector' && currentSectorId === 'agriculture'
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
                      Agro-Supply · {currentLang === 'fr' ? 'Ouvrir la page' : 'Open Page'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </button>

              <button
                onClick={() => handleSectorClick('supply')}
                className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                  currentPage === 'sector' && currentSectorId === 'supply'
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
                      ISIC 4690 · {currentLang === 'fr' ? 'Ouvrir la page' : 'Open Page'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#0f2c59]" />
              </button>
            </div>
          </div>

          {/* Quick Contact & Emergency Reachout for mobile professionals */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
              {currentLang === 'fr' ? 'Liaison Directe de Terrain' : 'Direct Field Contact'}
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href="tel:+260960641318"
                className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-[#0f2c59] text-slate-800 hover:text-white flex items-center justify-center gap-1.5 transition-all text-[11px] active:scale-95 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#f9a825]" />
                <span>+260 960 641 318</span>
              </a>

              <a
                href="https://wa.me/260960641318"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition-all text-[11px] active:scale-95 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => handlePageClick('contact')}
              className="btn-gold w-full py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-98 transition-all"
            >
              <span>{currentLang === 'fr' ? 'Demander un devis immédiat' : 'Request Immediate Quote'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
