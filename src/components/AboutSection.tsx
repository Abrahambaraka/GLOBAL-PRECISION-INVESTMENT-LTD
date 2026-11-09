import React from 'react';
import {
  Cpu,
  Leaf,
  Anchor,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].about;

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header Block with Slogan */}
        <div className="max-w-4xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span className="w-2 h-2 rounded-[0.25rem] bg-[#0f2c59]"></span>
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight leading-snug mb-6">
            {t.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-600 leading-relaxed">
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-5">
              <p>{t.desc1}</p>
            </div>
            <div className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-5">
              <p>{t.desc2}</p>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="pt-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-6">
            {t.pillarsTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 hover:shadow-xs transition-shadow">
              <div className="w-10 h-10 rounded-[0.25rem] bg-[#0f2c59] text-[#f9a825] flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#0f2c59] mb-2">
                {t.pillar1.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.pillar1.desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 hover:shadow-xs transition-shadow">
              <div className="w-10 h-10 rounded-[0.25rem] bg-[#0f2c59] text-emerald-400 flex items-center justify-center mb-5">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#0f2c59] mb-2">
                {t.pillar2.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.pillar2.desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 hover:shadow-xs transition-shadow">
              <div className="w-10 h-10 rounded-[0.25rem] bg-[#0f2c59] text-[#6c95d8] flex items-center justify-center mb-5">
                <Anchor className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-[#0f2c59] mb-2">
                {t.pillar3.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.pillar3.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
