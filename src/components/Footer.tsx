import React from 'react';
import { Language, translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
  onSectorSelect: (id: 'mining' | 'agriculture' | 'supply') => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onSectorSelect,
}) => {
  const t = translations[currentLang].footer;
  const nav = translations[currentLang].nav;

  return (
    <footer className="bg-[#00173b] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-white/20 shrink-0 bg-white p-0.5 flex items-center justify-center">
                <img
                  src="/assets/aistudio/gpi_2_ed004c56.png"
                  alt="Global Precision Investment"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white block">
                  GLOBAL PRECISION INVESTMENT LIMITED
                </span>
                <span className="text-[10px] text-[#f9a825] font-medium italic block">
                  Invest Today... Grow Tomorrow · PACRA No. 120251029624
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {t.description}
            </p>
            <div className="pt-2 text-[11px] text-slate-400 font-mono space-y-1">
              <div className="text-white font-semibold">
                📍 Siège : Plot 4017, Euclid Rd, Industrial Area, Kitwe
              </div>
              <div className="text-slate-300">
                🏢 Hub Commercial : Ndola, Copperbelt Province, Zambia
              </div>
              <div>
                📞 Tel :{' '}
                <a href="tel:+260960641318" className="hover:text-[#f9a825] text-slate-300">
                  +260 960 641 318
                </a>{' '}
                ·{' '}
                <a href="tel:+260766557185" className="hover:text-[#f9a825] text-slate-300">
                  +260 766 557 185
                </a>
              </div>
              <div>
                ✉️ Email :{' '}
                <a href="mailto:contact@globalprecisioninvest.com" className="hover:text-[#f9a825] text-slate-300">
                  contact@globalprecisioninvest.com
                </a>
              </div>
            </div>
          </div>

          {/* The 3 Core Sectors Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
              {t.sectorsTitle}
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSectorSelect('mining');
                    onNavigate('sectors');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'fr' ? '01. Mines & Métaux Stratégiques' : '01. Modern Mining & Metals'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSectorSelect('agriculture');
                    onNavigate('sectors');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'fr' ? '02. Agriculture Durable & Biosphères' : '02. Sustainable Agriculture'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onSectorSelect('supply');
                    onNavigate('sectors');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {currentLang === 'fr' ? '03. Fourniture Industrielle & Logistique' : '03. Industrial Supply & Logistics'}
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
              {t.linksTitle}
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sectors')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {nav.sectors}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
              {t.legalTitle}
            </span>
            <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <p>{t.compliance}</p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-gold px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider cursor-pointer inline-block"
                >
                  {nav.contactBtn}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>
            &copy; {new Date().getFullYear()} Global Precision Investment. {t.rights}
          </span>
          <div className="flex items-center gap-4">
            <span>ISO 14001 / 9001</span>
            <span>·</span>
            <span>Article 9 SFDR</span>
            <span>·</span>
            <span>FINMA Sovereign Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
