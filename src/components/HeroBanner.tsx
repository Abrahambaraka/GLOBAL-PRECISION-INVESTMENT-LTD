import React, { useState } from 'react';
import { PORTFOLIO_KPIS } from '../data/mockData';
import { ArrowUpRight, Download, BarChart3, Globe, TrendingUp, Layers } from 'lucide-react';

interface HeroBannerProps {
  onExploreDivisions: () => void;
  onOpenSimulator: () => void;
  onExportCsv: () => void;
  onOpenMandateModal: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreDivisions,
  onOpenSimulator,
  onExportCsv,
  onOpenMandateModal,
}) => {
  const [selectedHorizon, setSelectedHorizon] = useState<'q1' | 'ytd' | '3y' | 'all'>('ytd');

  // Multiplier adjustments based on timeframe
  const horizonModifiers = {
    q1: { yield: 3.7, yieldLabel: '+0.35% QoQ', sharpe: 2.51, deployment: '$840M' },
    ytd: { yield: 14.8, yieldLabel: '+1.4% QoQ', sharpe: 2.44, deployment: '$1.42B' },
    '3y': { yield: 15.6, yieldLabel: '+18.2% 3Y Ann.', sharpe: 2.38, deployment: '$4.90B' },
    all: { yield: 16.2, yieldLabel: 'Since Inception', sharpe: 2.42, deployment: '$14.82B' },
  };

  const currentStats = horizonModifiers[selectedHorizon];

  return (
    <section className="bg-[#0f2c59] text-white pt-12 pb-16 border-b border-[#1e4d8c]/40 relative overflow-hidden">
      {/* Subtle structural background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Horizon selector strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-semibold text-white tracking-wide uppercase">
              Institutional Allocation Scope
            </span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Audited Basel III Sovereign Standard</span>
          </div>

          <div className="flex items-center gap-1 bg-[#00173b] p-1 rounded-xs border border-white/10">
            {(['q1', 'ytd', '3y', 'all'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedHorizon(period)}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer transition-colors ${
                  selectedHorizon === period
                    ? 'bg-[#f9a825] text-[#0f2c59]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {period === 'q1'
                  ? 'Q1 2026'
                  : period === 'ytd'
                  ? 'YTD 2026'
                  : period === '3y'
                  ? '3Y Horizon'
                  : 'Inception'}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Main Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f9a825] uppercase tracking-wider mb-3">
              <span>Sovereign & Enterprise Capital Conglomerate</span>
              <span aria-hidden="true">/</span>
              <span className="text-slate-300">Non-Correlated Industrial Yield</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold font-display leading-[1.12] tracking-tight text-white mb-6">
              Calculated Sovereign Capital for Modern Global Industry.
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Global Precision Investment deploys disciplined institutional balance sheets across
              closed-loop autonomous mining, strategic maritime infrastructure, and high-yield
              regenerative agricultural basins.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMandateModal}
                className="btn-gold px-6 py-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Initiate Mandate Allocation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSimulator}
                className="btn-outline-navy !text-white !border-white/30 hover:!bg-white/10 px-5 py-3 text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <BarChart3 className="w-4 h-4 text-[#f9a825]" />
                <span>Simulate Portfolio Allocation</span>
              </button>

              <button
                onClick={onExportCsv}
                className="btn-ghost !text-slate-300 hover:!text-white hover:!bg-white/5 px-4 py-3 text-sm font-medium flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export Audit Ledger (CSV)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Division Distribution Glance */}
          <div className="lg:col-span-4 bg-[#00173b]/70 border border-white/15 rounded-md p-6 backdrop-blur-xs">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 flex items-center justify-between">
              <span>Capital Weighting by Division</span>
              <span className="text-[#f9a825] font-mono tabular-nums">100.0% Deployed</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-xs bg-[#f9a825]"></span>
                    Modern Mining & Battery Metals
                  </span>
                  <span className="font-mono tabular-nums text-slate-300">$5.24B (35.4%)</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-xs overflow-hidden">
                  <div className="bg-[#f9a825] h-full" style={{ width: '35.4%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-xs bg-[#6c95d8]"></span>
                    Industrial Supply & Logistics
                  </span>
                  <span className="font-mono tabular-nums text-slate-300">$6.12B (41.3%)</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-xs overflow-hidden">
                  <div className="bg-[#6c95d8] h-full" style={{ width: '41.3%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-xs bg-[#10b981]"></span>
                    Sustainable Agriculture & Biospheres
                  </span>
                  <span className="font-mono tabular-nums text-slate-300">$3.46B (23.3%)</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-xs overflow-hidden">
                  <div className="bg-[#10b981] h-full" style={{ width: '23.3%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Primary Custodian:</span>
              <span className="text-white font-medium">Bank for International Settlements Trust</span>
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Strip (Tier 0 deep navy integration) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
          <div className="bg-white/5 border border-white/10 p-5 rounded-md hover:bg-white/8 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Total Assets Under Custody
            </span>
            <div className="text-3xl lg:text-4xl font-bold font-display text-white tabular-nums tracking-tight">
              ${PORTFOLIO_KPIS.totalAumBillions.toFixed(2)}B
            </div>
            <div className="text-xs text-slate-300 mt-2 flex items-center gap-1 font-mono">
              <span className="text-[#f9a825] font-semibold">{currentStats.deployment}</span>
              <span>capital committed</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-md hover:bg-white/8 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Net Annualized Realized Yield
            </span>
            <div className="text-3xl lg:text-4xl font-bold font-display text-[#f9a825] tabular-nums tracking-tight">
              {currentStats.yield.toFixed(1)}%
            </div>
            <div className="text-xs text-slate-300 mt-2 flex items-center gap-1 font-mono">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">{currentStats.yieldLabel}</span>
              <span>net of management</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-md hover:bg-white/8 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Sovereign Jurisdictions
            </span>
            <div className="text-3xl lg:text-4xl font-bold font-display text-white tabular-nums tracking-tight">
              {PORTFOLIO_KPIS.sovereignJurisdictionsCount}
            </div>
            <div className="text-xs text-slate-300 mt-2 flex items-center gap-1 font-mono">
              <Globe className="w-3.5 h-3.5 text-[#6c95d8]" />
              <span className="text-white font-medium">OECD & Investment-Grade</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-5 rounded-md hover:bg-white/8 transition-colors">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-1">
              Risk-Adjusted Sharpe Ratio
            </span>
            <div className="text-3xl lg:text-4xl font-bold font-display text-white tabular-nums tracking-tight">
              {currentStats.sharpe.toFixed(2)}
            </div>
            <div className="text-xs text-slate-300 mt-2 flex items-center gap-1 font-mono">
              <span className="text-[#f9a825] font-semibold">Tier 1</span>
              <span>volatility damping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
