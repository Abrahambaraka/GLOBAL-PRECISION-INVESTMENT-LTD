import React, { useState } from 'react';
import { DIVISIONS_DATA, ASSETS_DATA } from '../data/mockData';
import { DivisionId, Asset } from '../types';
import {
  Pickaxe,
  Ship,
  Sprout,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface DivisionsSectionProps {
  onSelectDivisionFilter: (divisionId: DivisionId | 'all') => void;
  onSelectAsset: (asset: Asset) => void;
  onOpenMandateModal: () => void;
}

export const DivisionsSection: React.FC<DivisionsSectionProps> = ({
  onSelectDivisionFilter,
  onSelectAsset,
  onOpenMandateModal,
}) => {
  const [activeTab, setActiveTab] = useState<DivisionId>('mining');

  const selectedDivision =
    DIVISIONS_DATA.find((d) => d.id === activeTab) || DIVISIONS_DATA[0];

  const divisionAssets = ASSETS_DATA.filter((a) => a.division === activeTab);

  const getDivisionIcon = (id: DivisionId) => {
    switch (id) {
      case 'mining':
        return <Pickaxe className="w-5 h-5 text-[#f9a825]" />;
      case 'infrastructure':
        return <Ship className="w-5 h-5 text-[#0f2c59]" />;
      case 'agriculture':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getTopBorderClass = (id: DivisionId) => {
    switch (id) {
      case 'mining':
        return 'border-t-[#f9a825]';
      case 'infrastructure':
        return 'border-t-[#0f2c59]';
      case 'agriculture':
        return 'border-t-[#10b981]';
    }
  };

  return (
    <section id="divisions" className="py-16 bg-[#f8f9ff] border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Three Core Strategic Pillars</span>
              <span aria-hidden="true">·</span>
              <span>Asset-Backed Physical Monopolies</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight">
              Institutional Divisions & Operational Assets
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Direct ownership and long-term sovereign operating concessions in vital supply
            chains, closed-loop extraction, and climate-insulated agriculture.
          </p>
        </div>

        {/* 3 Pillar Summary Cards with 3px Accent Top-Border Rule */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {DIVISIONS_DATA.map((division) => {
            const isSelected = activeTab === division.id;
            return (
              <div
                key={division.id}
                onClick={() => setActiveTab(division.id)}
                className={`bg-white border border-[#e2e8f0] rounded-lg p-6 cursor-pointer transition-all border-t-[3px] ${getTopBorderClass(
                  division.id
                )} ${
                  isSelected
                    ? 'shadow-md ring-1 ring-[#0f2c59]/15'
                    : 'hover:shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-slate-50 rounded-xs border border-slate-100">
                    {getDivisionIcon(division.id)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xs">
                    {division.assetCount} Key Facilities
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#0f2c59] mb-1">
                  {division.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-4">{division.subtitle}</p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-2">
                  {division.description}
                </p>

                {/* Division Metrics in Space Grotesk */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 block">
                      Division AUM
                    </span>
                    <span className="text-2xl font-bold font-display text-[#0f2c59] tabular-nums">
                      ${division.totalAum.toFixed(2)}B
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 block">
                      Target IRR
                    </span>
                    <span className="text-2xl font-bold font-display text-[#f9a825] tabular-nums flex items-center gap-1">
                      {division.annualIrr.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#0f2c59] pt-2">
                  <span>View Division Assets</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1' : ''
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Division Deep Dive Area */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 lg:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Active Focus
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-xs font-semibold text-[#0f2c59]">
                  {selectedDivision.title}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-[#0f2c59]">
                {selectedDivision.subtitle}
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                {selectedDivision.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectDivisionFilter(selectedDivision.id)}
                className="btn-outline-navy px-4 py-2 text-xs uppercase tracking-wider font-bold cursor-pointer"
              >
                Filter Full Ledger ({selectedDivision.assetCount})
              </button>
              <button
                onClick={onOpenMandateModal}
                className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-bold cursor-pointer"
              >
                Deploy in this Division
              </button>
            </div>
          </div>

          {/* Operational Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-slate-100">
            {selectedDivision.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xs border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          {/* Featured Asset Showcase Cards */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-base font-bold font-display text-[#0f2c59] uppercase tracking-wide">
                Key Physical Facilities & Concessions
              </h4>
              <span className="text-xs text-slate-500">
                Click any asset card to open detailed engineering & audit sheet
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {divisionAssets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => onSelectAsset(asset)}
                  className="group bg-white border border-[#e2e8f0] hover:border-slate-300 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Asset Image Container with Fallback */}
                    <div className="relative h-44 w-full bg-slate-200 overflow-hidden">
                      <img
                        src={asset.imageUrl}
                        alt={asset.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to high quality solid corporate gradient
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#0f2c59]/90 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                          {asset.code}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            asset.status === 'Yielding'
                              ? 'bg-emerald-100 text-emerald-800'
                              : asset.status === 'Active'
                              ? 'bg-blue-100 text-[#0f2c59]'
                              : asset.status === 'Matured'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {asset.status}
                        </span>
                      </div>

                      <div className="absolute bottom-2 left-3 right-3 text-white">
                        <span className="text-[11px] text-slate-200 block truncate">
                          {asset.location}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h5 className="font-display font-bold text-sm text-[#0f2c59] line-clamp-1 mb-1 group-hover:text-[#1e4d8c] transition-colors">
                        {asset.name}
                      </h5>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {asset.summary}
                      </p>

                      <div className="space-y-1.5 text-xs pt-3 border-t border-slate-100">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Valuation:</span>
                          <span className="font-semibold text-slate-900 font-mono tabular-nums">
                            ${asset.currentValuation}M
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">IRR:</span>
                          <span className="font-bold text-[#f9a825] font-mono tabular-nums">
                            {asset.irr.toFixed(1)}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Sovereign Grade:</span>
                          <span className="font-semibold text-[#0f2c59] font-mono">
                            {asset.riskGrade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs font-semibold text-[#0f2c59] border-t border-slate-50">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400">
                      Audit Verified
                    </span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#f9a825]">
                      Review Sheet <ArrowRight className="w-3 h-3" />
                    </span>
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
