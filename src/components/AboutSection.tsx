import React from 'react';
import {
  Cpu,
  Leaf,
  Anchor,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';
import { CeoMessageSection } from './CeoMessageSection';

interface AboutSectionProps {
  currentLang: Language;
  onExploreAbout?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onExploreAbout }) => {
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-10 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">
        {/* CEO Gracia SALANGA Feature Block (Modeled after reference layout) */}
        <div className="mb-10 sm:mb-16">
          <CeoMessageSection currentLang={currentLang} />
        </div>

        {/* Header Block with Slogan */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="max-w-4xl mb-8 sm:mb-14">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-[0.25rem] bg-[#0f2c59]"></span>
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight leading-snug mb-4 sm:mb-6">
              {t.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 text-xs sm:text-base text-slate-600 leading-relaxed">
              <div className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-3.5 sm:p-5 card-hover-lift">
                <p>{t.desc1}</p>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-3.5 sm:p-5 card-hover-lift">
                <p>{t.desc2}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid */}
        <div className="pt-2 sm:pt-4">
          <ScrollReveal direction="up" delayMs={100}>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-4 sm:mb-6">
              {t.pillarsTitle}
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {/* Pillar 1 */}
            <ScrollReveal direction="up" delayMs={100}>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-4 sm:p-6 card-hover-lift group h-full flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[0.25rem] bg-[#0f2c59] text-[#f9a825] flex items-center justify-center mb-3.5 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-1.5 sm:mb-2 group-hover:text-[#f9a825] transition-colors">
                    {t.pillar1.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.pillar1.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2 */}
            <ScrollReveal direction="up" delayMs={200}>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-4 sm:p-6 card-hover-lift group h-full flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[0.25rem] bg-[#0f2c59] text-emerald-400 flex items-center justify-center mb-3.5 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Leaf className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-1.5 sm:mb-2 group-hover:text-emerald-600 transition-colors">
                    {t.pillar2.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.pillar2.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 3 */}
            <ScrollReveal direction="up" delayMs={300}>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-4 sm:p-6 card-hover-lift group h-full flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[0.25rem] bg-[#0f2c59] text-[#6c95d8] flex items-center justify-center mb-3.5 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-1.5 sm:mb-2 group-hover:text-[#1e4d8c] transition-colors">
                    {t.pillar3.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t.pillar3.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {onExploreAbout && (
            <ScrollReveal direction="up" delayMs={200}>
              <div className="mt-6 sm:mt-8 text-center sm:text-left">
                <button
                  onClick={onExploreAbout}
                  className="btn-outline-navy px-4 sm:px-5 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer group active:scale-95 transition-all"
                >
                  <span>{currentLang === 'fr' ? 'Découvrir toute notre gouvernance & statut légal' : 'Explore full governance & corporate profile'}</span>
                  <span className="text-[#f9a825] group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
};
