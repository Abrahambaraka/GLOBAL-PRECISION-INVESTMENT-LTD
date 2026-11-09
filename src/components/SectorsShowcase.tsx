import React, { useState } from 'react';
import {
  Pickaxe,
  Sprout,
  Ship,
  CheckCircle2,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Camera,
  ShieldCheck,
} from 'lucide-react';
import { Language, translations, SectorItem } from '../i18n/translations';

interface SectorsShowcaseProps {
  currentLang: Language;
  selectedSectorId: 'mining' | 'agriculture' | 'supply';
  onSectorSelect: (id: 'mining' | 'agriculture' | 'supply') => void;
  onContactSector: (sectorName: string) => void;
}

export const SectorsShowcase: React.FC<SectorsShowcaseProps> = ({
  currentLang,
  selectedSectorId,
  onSectorSelect,
  onContactSector,
}) => {
  const t = translations[currentLang].sectorsSection;
  const sectors = translations[currentLang].sectors;

  const currentSector: SectorItem = sectors[selectedSectorId];

  const getSectorIcon = (id: 'mining' | 'agriculture' | 'supply') => {
    switch (id) {
      case 'mining':
        return <Pickaxe className="w-5 h-5 text-[#f9a825]" />;
      case 'agriculture':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'supply':
        return <Ship className="w-5 h-5 text-[#0f2c59]" />;
    }
  };

  const getBorderTopColor = (id: 'mining' | 'agriculture' | 'supply') => {
    switch (id) {
      case 'mining':
        return 'border-t-[#f9a825]';
      case 'agriculture':
        return 'border-t-[#10b981]';
      case 'supply':
        return 'border-t-[#0f2c59]';
    }
  };

  return (
    <section id="sectors" className="py-20 bg-[#f8f9ff] border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span className="w-2 h-2 rounded-[0.25rem] bg-[#f9a825]"></span>
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">{t.subtitle}</p>
        </div>

        {/* 3 Sector Switcher Tabs with Realistic Photo Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {(['mining', 'agriculture', 'supply'] as const).map((id) => {
            const isSelected = selectedSectorId === id;
            const sectorData = sectors[id];

            return (
              <button
                key={id}
                type="button"
                onClick={() => onSectorSelect(id)}
                className={`bg-white border text-left rounded-lg overflow-hidden cursor-pointer transition-all border-t-[4px] ${getBorderTopColor(
                  id
                )} ${
                  isSelected
                    ? 'shadow-lg border-[#cbd5e1] ring-2 ring-[#0f2c59]/20'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Realistic Sector Photo Header in tab */}
                <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                  <img
                    src={sectorData.coverImage}
                    alt={sectorData.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-[#0f2c59]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[0.25rem] backdrop-blur-xs">
                    <Camera className="w-3 h-3 text-[#f9a825]" />
                    <span>
                      {id === 'mining'
                        ? 'Mine Copperbelt'
                        : id === 'agriculture'
                        ? 'Agro-Mécanisation'
                        : 'Dépôt Wholesale'}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f9a825]">
                      {id === 'mining'
                        ? 'Pôle 01'
                        : id === 'agriculture'
                        ? 'Pôle 02'
                        : 'Pôle 03'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-200 bg-white/10 px-1.5 py-0.5 rounded">
                      Zambia
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1.5 bg-slate-50 rounded-[0.25rem] border border-slate-100">
                      {getSectorIcon(id)}
                    </div>
                    <h3 className="font-display font-bold text-base text-[#0f2c59] truncate">
                      {sectorData.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1">{sectorData.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Sector Detailed Display Panel */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 lg:p-10 shadow-xs">
          {/* Header Bar of the Selected Sector */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-0.5 rounded-[0.25rem]">
                  {currentSector.badge}
                </span>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-[0.25rem] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentLang === 'fr' ? 'Opérations Vérifiées' : 'Verified Operations'}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-display text-[#0f2c59] mb-3">
                {currentSector.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentSector.description}
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onContactSector(currentSector.name)}
                className="btn-gold px-5 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>
                  {currentLang === 'fr'
                    ? `Partenariat ${currentSector.name.split('&')[0]}`
                    : `Inquire on ${currentSector.name.split('&')[0]}`}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Prominent High-Resolution Realistic Sector Showcase Visual Banner */}
          <div className="my-8">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
              <div className="relative h-64 sm:h-80 md:h-[400px] w-full bg-slate-900 overflow-hidden">
                <img
                  src={currentSector.coverImage}
                  alt={currentSector.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="bg-[#0f2c59]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-[0.25rem] flex items-center gap-1.5 shadow-sm border border-white/20">
                    <Camera className="w-3.5 h-3.5 text-[#f9a825]" />
                    {currentLang === 'fr'
                      ? 'Photographie Réelle des Opérations'
                      : 'Real Operational Photography'}
                  </span>
                  <span className="bg-[#f9a825] text-[#0f2c59] text-xs font-bold px-2.5 py-1 rounded-[0.25rem] shadow-sm uppercase tracking-wider">
                    {currentSector.badge}
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#f9a825] font-semibold mb-1">
                        {currentLang === 'fr' ? 'Activité de Terrain · Province du Copperbelt' : 'Field Activity · Copperbelt Province'}
                      </div>
                      <p className="text-sm sm:text-base font-medium text-slate-100 max-w-2xl leading-snug">
                        {currentSector.coverImageCaption}
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#f9a825]" />
                      <span>Kitwe & Ndola, Zambia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Sector Key Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-slate-100">
            {currentSector.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-100 rounded-md p-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                  {stat.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold font-display text-[#0f2c59] tabular-nums font-mono">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Key Technical Strengths */}
          <div className="py-8 border-b border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-4">
              {currentLang === 'fr' ? 'Avantages & Technologies Clés' : 'Key Technological Capabilities'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentSector.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-slate-50/70 border border-slate-200/80 rounded-md p-4"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Real-World Flagship Projects / Facilities */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-bold font-display text-[#0f2c59] uppercase tracking-wider">
                {currentSector.name} — {t.viewProjects}
              </h4>
              <span className="text-xs text-slate-400 font-mono">3 Installations Actives</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentSector.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden group hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Facility Photo */}
                    <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                      <img
                        src={proj.imageUrl}
                        alt={proj.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-medium text-white bg-[#0f2c59]/90 px-2 py-0.5 rounded-[0.25rem] flex items-center gap-1 backdrop-blur-xs">
                          <MapPin className="w-3 h-3 text-[#f9a825]" />
                          {proj.location}
                        </span>
                      </div>
                    </div>

                    {/* Facility Details */}
                    <div className="p-5">
                      <h5 className="font-display font-bold text-base text-[#0f2c59] mb-2 group-hover:text-[#1e4d8c] transition-colors">
                        {proj.name}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {proj.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1">
                    <button
                      onClick={() => onContactSector(`${currentSector.name} - ${proj.name}`)}
                      className="text-xs font-semibold text-[#0f2c59] group-hover:text-[#f9a825] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>
                        {currentLang === 'fr' ? 'Consulter le dossier' : 'Request Brief'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
