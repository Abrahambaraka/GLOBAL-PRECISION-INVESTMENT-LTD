import React from 'react';
import { Briefcase, MapPin, ShieldCheck, Globe } from 'lucide-react';
import { Language } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface CeoMessageSectionProps {
  currentLang: Language;
}

export const CeoMessageSection: React.FC<CeoMessageSectionProps> = ({ currentLang }) => {
  const isFr = currentLang === 'fr';

  const infoCards = [
    {
      icon: Briefcase,
      label: isFr ? 'FONCTION' : 'ROLE',
      value: isFr ? 'Présidente-Directrice Générale' : 'Chief Executive Officer',
    },
    {
      icon: MapPin,
      label: isFr ? 'SIÈGE' : 'HEADQUARTERS',
      value: isFr ? 'Kitwe & Ndola, Zambie' : 'Kitwe & Ndola, Zambia',
    },
    {
      icon: ShieldCheck,
      label: isFr ? 'CONFORMITÉ' : 'COMPLIANCE',
      value: 'PACRA 120251029624 · ZRA',
    },
    {
      icon: Globe,
      label: isFr ? 'COUVERTURE' : 'COVERAGE',
      value: isFr ? 'Copperbelt & Corridors Régionaux' : 'Copperbelt & Regional Corridors',
    },
  ];

  const tags = isFr
    ? ['Mines & Métaux', 'Agriculture Durable', 'Fourniture Industrielle ISIC 4690']
    : ['Mining & Metals', 'Sustainable Agriculture', 'Industrial Supply ISIC 4690'];

  return (
    <ScrollReveal direction="up" delayMs={80}>
      <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 card-hover-lift">
        {/* Left Colored Panel: Portrait Photo + CEO Name */}
        <div className="lg:col-span-4 bg-[#0f2c59] p-4 sm:p-8 flex flex-col justify-between text-white">
          <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md aspect-[4/3.6] sm:aspect-[4/4.3] w-full max-w-[260px] sm:max-w-none mx-auto group">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_ssgetssgetssgets_4d44031f.jpg"
              alt="Gracia SALANGA - CEO Global Precision Investment Ltd"
              className="w-full h-full object-cover object-top img-hover-zoom"
            />
          </div>

          <div className="pt-4 sm:pt-6 text-center sm:text-left">
            <div className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white leading-none mb-1">
              CEO
            </div>
            <div className="text-base sm:text-xl font-bold font-display text-[#f9a825]">
              Gracia SALANGA
            </div>
          </div>
        </div>

        {/* Right White Panel: Executive Bio, Quote & 4 Info Cards */}
        <div className="lg:col-span-8 p-4 sm:p-10 lg:p-12 flex flex-col justify-center">
          {/* Eyebrow with horizontal bar */}
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span className="w-5 sm:w-7 h-0.5 bg-[#f9a825] inline-block shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b45309]">
              {isFr
                ? 'MOT DE LA PRÉSIDENTE-DIRECTRICE GÉNÉRALE'
                : 'WORD FROM THE CHIEF EXECUTIVE OFFICER'}
            </span>
          </div>

          {/* CEO Name */}
          <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-bold font-display text-[#0f2c59] tracking-tight leading-tight mb-1">
            Gracia SALANGA
          </h3>

          {/* Role Subtitle */}
          <p className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 sm:mb-6">
            {isFr
              ? 'PRÉSIDENTE-DIRECTRICE GÉNÉRALE — GLOBAL PRECISION INVESTMENT LTD'
              : 'CHIEF EXECUTIVE OFFICER — GLOBAL PRECISION INVESTMENT LTD'}
          </p>

          {/* Shaded Quote Block with Left Bar */}
          <div className="bg-slate-50 border-l-4 border-[#f9a825] px-3.5 sm:px-5 py-2.5 sm:py-3.5 mb-4 sm:mb-6">
            <p className="text-xs sm:text-base italic text-slate-700 leading-relaxed">
              {isFr
                ? '« Invest Today... Grow Tomorrow — Bâtir des chaînes d’approvisionnement fiables et durables au cœur de l’Afrique. »'
                : '“Invest Today... Grow Tomorrow — Building dependable, sustainable industrial supply chains at the heart of Africa.”'}
            </p>
          </div>

          {/* Executive Bio */}
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed mb-5 sm:mb-7">
            {isFr
              ? 'À la tête de GLOBAL PRECISION INVESTMENT LIMITED depuis la province du Copperbelt (Kitwe et Ndola), Gracia SALANGA pilote le développement stratégique de nos trois pôles opérationnels : soutien aux exploitations minières, mécanisation agricole durable et commerce de gros de fournitures industrielles et pièces détachées (ISIC 4690).'
              : 'Leading GLOBAL PRECISION INVESTMENT LIMITED from Zambia’s Copperbelt Province (Kitwe and Ndola), Gracia SALANGA oversees the strategic growth of our three core pillars: mining operations support, sustainable agro-mechanization, and industrial wholesale supply & spare parts trade (ISIC 4690).'}
          </p>

          {/* 2x2 Grid of 4 Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            {infoCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8fafc] border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-3.5 hover:border-[#f9a825]/60 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-[#f9a825] text-[#0f2c59] flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0f2c59] block leading-snug">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom 3 Domain Chips */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] sm:text-xs font-semibold text-[#0f2c59] bg-amber-50 border border-amber-200/80 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
