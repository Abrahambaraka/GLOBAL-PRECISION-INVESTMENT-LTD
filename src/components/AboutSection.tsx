import React from 'react';
import {
  Cpu,
  Leaf,
  Anchor,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface AboutSectionProps {
  currentLang: Language;
  onExploreAbout?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onExploreAbout }) => {
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header Block with Slogan */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="max-w-4xl mb-14">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              <span className="w-2 h-2 rounded-[0.25rem] bg-[#0f2c59]"></span>
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight leading-snug mb-6">
              {t.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              <div className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-5 card-hover-lift">
                <p>{t.desc1}</p>
              </div>
              <div className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-5 card-hover-lift">
                <p>{t.desc2}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid */}
        <div className="pt-4">
          <ScrollReveal direction="up" delayMs={100}>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-6">
              {t.pillarsTitle}
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <ScrollReveal direction="up" delayMs={100}>
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 card-hover-lift group h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-[0.25rem] bg-[#0f2c59] text-[#f9a825] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#0f2c59] mb-2 group-hover:text-[#f9a825] transition-colors">
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
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 card-hover-lift group h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-[0.25rem] bg-[#0f2c59] text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#0f2c59] mb-2 group-hover:text-emerald-600 transition-colors">
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
              <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 card-hover-lift group h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-[0.25rem] bg-[#0f2c59] text-[#6c95d8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Anchor className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#0f2c59] mb-2 group-hover:text-[#1e4d8c] transition-colors">
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
              <div className="mt-8 text-center sm:text-left">
                <button
                  onClick={onExploreAbout}
                  className="btn-outline-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer group active:scale-95 transition-all"
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
