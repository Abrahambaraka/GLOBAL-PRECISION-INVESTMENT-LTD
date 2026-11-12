import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Pickaxe,
  Sprout,
  Ship,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  currentLang: Language;
  onExploreSectors: (sectorId?: 'mining' | 'agriculture' | 'supply') => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onExploreSectors,
  onContactClick,
}) => {
  const t = translations[currentLang].hero;

  // Sector presentation modes (fixed, no auto-scrolling)
  const headlineModes = {
    fr: [
      {
        id: 'mining',
        tabLabel: 'Pôle Mines',
        highlight: "l’Extraction Minière & Métaux",
        sub: "Fourniture certifiée, pièces d’usure et équipements d'extraction lourds",
        badge: "Pôle Mines · Copperbelt",
        icon: "⛏️",
      },
      {
        id: 'agriculture',
        tabLabel: 'Agriculture',
        highlight: "l’Agriculture & l’Agro-Technologie",
        sub: "Mécanisation agricole, pompage solaire profond et silos étanches",
        badge: "Pôle Agro · Mécanisation",
        icon: "🌾",
      },
      {
        id: 'supply',
        tabLabel: 'Fourniture de Gros',
        highlight: "la Fourniture Industrielle de Gros",
        sub: "Dépôt central Plot 4017 Euclid Rd Kitwe et pièces détachées",
        badge: "Pôle Gros · ISIC 4690",
        icon: "⚙️",
      },
      {
        id: 'all',
        tabLabel: '3 Pôles Réunis',
        highlight: "des Mines, de l’Agriculture & du Commerce de Gros",
        sub: "Présence opérationnelle continue à Kitwe et Ndola",
        badge: "3 Pôles Stratégiques · Copperbelt",
        icon: "⚡",
      },
    ],
    en: [
      {
        id: 'mining',
        tabLabel: 'Mining',
        highlight: "Copperbelt Mining & Critical Metals",
        sub: "Certified procurement, wear plates, and heavy extraction machinery",
        badge: "Mining Division · Copperbelt",
        icon: "⛏️",
      },
      {
        id: 'agriculture',
        tabLabel: 'Agriculture',
        highlight: "Sustainable Agriculture & Mechanization",
        sub: "Farm tractors, solar deep-well irrigation, and hermetic crop silos",
        badge: "Agro-Supply · High Yield",
        icon: "🌾",
      },
      {
        id: 'supply',
        tabLabel: 'Wholesale',
        highlight: "Industrial Wholesale & Spares Trade",
        sub: "Central warehouse Plot 4017 Euclid Rd Kitwe and fleet spares",
        badge: "Wholesale · ISIC 4690",
        icon: "⚙️",
      },
      {
        id: 'all',
        tabLabel: 'All 3 Pillars',
        highlight: "Mining, Agriculture & Industrial Wholesale",
        sub: "Established operational facilities across Kitwe & Ndola",
        badge: "Regional Expansion · Copperbelt",
        icon: "⚡",
      },
    ],
  };

  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const currentPhrase = headlineModes[currentLang][activeModeIndex];

  return (
    <section id="home" className="bg-[#0f2c59] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 relative overflow-hidden border-b border-[#1e4d8c]/40">
      {/* Background architectural pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Fixed, Stable Headline (No auto-scrolling) */}
        <div className="max-w-4xl mb-6 pt-2">
          {/* Discrete manual tabs for user control without any auto-rotation */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {headlineModes[currentLang].map((mode, idx) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveModeIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                  activeModeIndex === idx
                    ? 'bg-[#f9a825] text-[#0f2c59] shadow-sm font-bold scale-102'
                    : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                <span>{mode.icon} {mode.tabLabel}</span>
              </button>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold font-display leading-[1.14] tracking-tight text-white mb-4">
            {currentLang === 'fr' ? (
              <>
                L’Excellence Industrielle au service de{' '}
                <span className="shimmer-gold inline-block drop-shadow-sm">
                  {currentPhrase.highlight}
                </span>
                .
              </>
            ) : (
              <>
                Strategic Industrial Excellence in{' '}
                <span className="shimmer-gold inline-block drop-shadow-sm">
                  {currentPhrase.highlight}
                </span>
                .
              </>
            )}
          </h1>

          {/* Static subtitle badge */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full mb-4 shadow-2xs backdrop-blur-xs">
            <span className="text-sm">{currentPhrase.icon}</span>
            <span className="font-semibold text-[#f9a825]">{currentPhrase.badge} :</span>
            <span className="text-slate-200">{currentPhrase.sub}</span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={() => onExploreSectors()}
            className="btn-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>{t.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onContactClick}
            className="btn-outline-navy !text-white !border-white/30 hover:!bg-white/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>{t.contactBtn}</span>
            <ArrowUpRight className="w-4 h-4 text-[#f9a825]" />
          </button>
        </div>

        {/* 3 Sector Fast-Access Cards with Realistic Photos & Micro-interactions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Sector 1: Mine */}
          <ScrollReveal delayMs={80} direction="up">
            <div
              onClick={() => onExploreSectors('mining')}
              className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#f9a825]/60 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group border-t-[4px] border-t-[#f9a825] flex flex-col justify-between card-hover-lift shadow-md hover:shadow-2xl"
            >
              <div className="relative h-36 w-full overflow-hidden bg-slate-800">
                <img
                  src="/assets/images/copperbelt_mining_operations_1794206552344.jpg"
                  alt="Mines & Métaux Stratégiques"
                  className="w-full h-full object-cover img-hover-zoom transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59] via-transparent to-black/30 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded-[0.25rem] text-[#f9a825] backdrop-blur-xs group-hover:scale-110 transition-transform">
                  <Pickaxe className="w-4 h-4" />
                </div>
                <span className="absolute top-2.5 right-2.5 text-[10px] font-mono font-bold text-[#f9a825] bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded uppercase tracking-wider">
                  01 · Copperbelt
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-[#f9a825] transition-colors">
                    {currentLang === 'fr' ? 'Mines & Métaux Stratégiques' : 'Modern Mining & Critical Metals'}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Équipements lourds, pièces de rechange et logistique d’extraction pour le cuivre et le cobalt.'
                      : 'Heavy machinery, spare parts, and extraction logistics for Copperbelt copper and cobalt.'}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-[#f9a825] font-semibold pt-2 border-t border-white/10">
                  <span>{currentLang === 'fr' ? 'Accéder à la page Mines' : 'Open Mining Page'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Sector 2: Agriculture */}
          <ScrollReveal delayMs={160} direction="up">
            <div
              onClick={() => onExploreSectors('agriculture')}
              className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-emerald-400/60 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group border-t-[4px] border-t-[#10b981] flex flex-col justify-between card-hover-lift shadow-md hover:shadow-2xl"
            >
              <div className="relative h-36 w-full overflow-hidden bg-slate-800">
                <img
                  src="/assets/images/sustainable_agriculture_mechanization_1794206552875.jpg"
                  alt="Agriculture Durable"
                  className="w-full h-full object-cover img-hover-zoom transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59] via-transparent to-black/30 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded-[0.25rem] text-emerald-400 backdrop-blur-xs group-hover:scale-110 transition-transform">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="absolute top-2.5 right-2.5 text-[10px] font-mono font-bold text-emerald-400 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded uppercase tracking-wider">
                  02 · Agro-Supply
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {currentLang === 'fr' ? 'Agriculture Durable & Mécanisation' : 'Sustainable Agriculture & Yield'}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Tracteurs, semences sélectionnées, pompage solaire et silos étanches de préservation.'
                      : 'Tractors, certified inputs, solar-powered drip irrigation, and hermetic crop storage.'}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-emerald-400 font-semibold pt-2 border-t border-white/10">
                  <span>{currentLang === 'fr' ? 'Accéder à la page Agriculture' : 'Open Agriculture Page'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Sector 3: Fourniture */}
          <ScrollReveal delayMs={240} direction="up">
            <div
              onClick={() => onExploreSectors('supply')}
              className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#6c95d8]/60 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group border-t-[4px] border-t-[#6c95d8] flex flex-col justify-between card-hover-lift shadow-md hover:shadow-2xl"
            >
              <div className="relative h-36 w-full overflow-hidden bg-slate-800">
                <img
                  src="/assets/images/industrial_supply_warehouse_1794206554120.jpg"
                  alt="Fourniture Industrielle & Commerce de Gros"
                  className="w-full h-full object-cover img-hover-zoom transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59] via-transparent to-black/30 group-hover:opacity-80 transition-opacity" />
                <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded-[0.25rem] text-[#6c95d8] backdrop-blur-xs group-hover:scale-110 transition-transform">
                  <Ship className="w-4 h-4" />
                </div>
                <span className="absolute top-2.5 right-2.5 text-[10px] font-mono font-bold text-[#6c95d8] bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded uppercase tracking-wider">
                  03 · ISIC 4690
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5 group-hover:text-[#6c95d8] transition-colors">
                    {currentLang === 'fr' ? 'Fourniture Industrielle & Gros' : 'Industrial Supply & Wholesale'}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Commerce de gros, pièces de véhicules automobiles, quincaillerie d’usine et outillage.'
                      : 'Non-specialized wholesale trade, motor vehicle spares, factory tooling & bearings.'}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-[#6c95d8] font-semibold pt-2 border-t border-white/10">
                  <span>{currentLang === 'fr' ? 'Accéder à la page Fourniture' : 'Open Supply Page'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Bottom KPI Rollups with Progressive Reveal */}
        <ScrollReveal delayMs={120} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 hover:border-white/20 p-4 rounded-md transition-all duration-300 hover:bg-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                {t.kpis.aum.label}
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                {t.kpis.aum.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{t.kpis.aum.desc}</div>
            </div>

            <div className="bg-white/5 border border-white/10 hover:border-white/20 p-4 rounded-md transition-all duration-300 hover:bg-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                {t.kpis.countries.label}
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                {t.kpis.countries.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{t.kpis.countries.desc}</div>
            </div>

            <div className="bg-white/5 border border-white/10 hover:border-[#f9a825]/40 p-4 rounded-md transition-all duration-300 hover:bg-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                {t.kpis.yield.label}
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-display text-[#f9a825] tabular-nums">
                {t.kpis.yield.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{t.kpis.yield.desc}</div>
            </div>

            <div className="bg-white/5 border border-white/10 hover:border-white/20 p-4 rounded-md transition-all duration-300 hover:bg-white/10">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
                {t.kpis.reliability.label}
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
                {t.kpis.reliability.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{t.kpis.reliability.desc}</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
