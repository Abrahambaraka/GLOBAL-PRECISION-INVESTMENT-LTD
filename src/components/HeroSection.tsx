import React from 'react';
import { ArrowRight, ArrowUpRight, Pickaxe, Sprout, Ship, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

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

  return (
    <section id="home" className="bg-[#0f2c59] text-white pt-16 pb-20 relative overflow-hidden border-b border-[#1e4d8c]/40">
      {/* Background architectural pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f9a825] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-[0.25rem] mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#f9a825]" />
          <span>{t.badge}</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold font-display leading-[1.12] tracking-tight text-white mb-6">
            {t.title} <span className="text-[#f9a825]">{t.titleHighlight}</span>.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
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

        {/* 3 Sector Fast-Access Cards with Realistic Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Sector 1: Mine */}
          <div
            onClick={() => onExploreSectors('mining')}
            className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg overflow-hidden transition-all cursor-pointer group border-t-[4px] border-t-[#f9a825] flex flex-col justify-between"
          >
            <div className="relative h-36 w-full overflow-hidden bg-slate-800">
              <img
                src="/assets/images/copperbelt_mining_operations_1794206552344.jpg"
                alt="Mines & Métaux Stratégiques"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59] via-transparent to-black/30" />
              <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded-[0.25rem] text-[#f9a825] backdrop-blur-xs">
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
              <div className="mt-4 flex items-center justify-between text-xs text-[#f9a825] font-semibold">
                <span>{currentLang === 'fr' ? 'Explorer le pôle minier' : 'Explore mining division'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Sector 2: Agriculture */}
          <div
            onClick={() => onExploreSectors('agriculture')}
            className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg overflow-hidden transition-all cursor-pointer group border-t-[4px] border-t-[#10b981] flex flex-col justify-between"
          >
            <div className="relative h-36 w-full overflow-hidden bg-slate-800">
              <img
                src="/assets/images/sustainable_agriculture_mechanization_1794206552875.jpg"
                alt="Agriculture Durable"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59] via-transparent to-black/30" />
              <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded-[0.25rem] text-emerald-400 backdrop-blur-xs">
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
              <div className="mt-4 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>{currentLang === 'fr' ? 'Explorer l’agriculture' : 'Explore agriculture'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Sector 3: Fourniture */}
          <div
            onClick={() => onExploreSectors('supply')}
            className="bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg overflow-hidden transition-all cursor-pointer group border-t-[4px] border-t-[#6c95d8] flex flex-col justify-between"
          >
            <div className="relative h-36 w-full overflow-hidden bg-slate-800">
              <img
                src="/assets/images/industrial_supply_warehouse_1794206554120.jpg"
                alt="Fourniture Industrielle & Commerce de Gros"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59] via-transparent to-black/30" />
              <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded-[0.25rem] text-[#6c95d8] backdrop-blur-xs">
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
              <div className="mt-4 flex items-center justify-between text-xs text-[#6c95d8] font-semibold">
                <span>{currentLang === 'fr' ? 'Explorer la fourniture' : 'Explore industrial supply'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom KPI Rollups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/10 p-4 rounded-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              {t.kpis.aum.label}
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              {t.kpis.aum.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">{t.kpis.aum.desc}</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              {t.kpis.countries.label}
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              {t.kpis.countries.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">{t.kpis.countries.desc}</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              {t.kpis.yield.label}
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-[#f9a825] tabular-nums">
              {t.kpis.yield.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">{t.kpis.yield.desc}</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-md">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              {t.kpis.reliability.label}
            </span>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums">
              {t.kpis.reliability.value}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">{t.kpis.reliability.desc}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
