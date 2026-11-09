import React from 'react';
import { Asset } from '../types';
import {
  X,
  ShieldCheck,
  Building,
  TrendingUp,
  Cpu,
  Leaf,
  Globe,
  Download,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface AssetDetailModalProps {
  asset: Asset | null;
  onClose: () => void;
  onOpenMandateModalWithAsset: (assetName: string) => void;
}

export const AssetDetailModal: React.FC<AssetDetailModalProps> = ({
  asset,
  onClose,
  onOpenMandateModalWithAsset,
}) => {
  if (!asset) return null;

  const handleDownloadDossier = () => {
    const text = `GLOBAL PRECISION INVESTMENT - CONCESSION AUDIT DOSSIER
Asset Code: ${asset.code}
Facility Name: ${asset.name}
Division: ${asset.division.toUpperCase()}
Location: ${asset.location}
Jurisdiction: ${asset.jurisdiction}
Counterparty: ${asset.counterparty}
Sovereign Guarantee: ${asset.sovereignGuarantee ? 'YES (Bilateral Sovereign Protection)' : 'Corporate Title'}

FINANCIAL SPECIFICATIONS:
- Capital Deployed: $${asset.capitalDeployed.toLocaleString()} Million USD
- Current Valuation: $${asset.currentValuation.toLocaleString()} Million USD
- Net IRR: ${asset.irr.toFixed(1)}%
- Annualized Cash Yield: ${asset.annualizedYield.toFixed(1)}%
- Operational Status: ${asset.status}
- Sovereign Risk Grade: ${asset.riskGrade}

OPERATIONAL METRICS:
- Throughput / Output: ${asset.outputMetric}
- Autonomous Operation Ratio: ${asset.autonomousRatio}%
- ESG Integrity Score: ${asset.esgScore}/100
- Last Certified Audit: ${asset.lastAudited}

KEY HIGHLIGHTS:
${asset.keyHighlights.map((h, i) => `${i + 1}. ${h}`).join('\n')}

CERTIFICATION:
Basel III Sovereign Asset Tier-1 Eligible. Audited by independent regulatory monitors.`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GPI-Audit-${asset.code}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00173b]/60 backdrop-blur-xs overflow-y-auto">
      {/* Tier 3 Elevation Modal Container */}
      <div
        className="bg-white rounded-lg border border-[#cbd5e1] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative my-8"
        style={{
          boxShadow:
            '0 12px 32px -4px rgba(15, 44, 89, 0.14), 0 4px 12px -2px rgba(15, 44, 89, 0.06)',
        }}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-white bg-[#0f2c59] px-2.5 py-1 rounded-[0.25rem]">
              {asset.code}
            </span>
            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Concession Audit Dossier
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-[0.25rem] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 lg:p-8 space-y-6">
          {/* Header & Photo */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#0f2c59] uppercase tracking-wider">
                {asset.division === 'mining'
                  ? 'Modern Mining & Battery Extraction'
                  : asset.division === 'infrastructure'
                  ? 'Industrial Supply & Logistics'
                  : 'Sustainable Agriculture & Yield'}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-xs text-slate-500">{asset.location}</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold font-display text-[#0f2c59] mb-3">
              {asset.name}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              {asset.summary}
            </p>
          </div>

          {/* Asset Image */}
          <div className="relative h-64 lg:h-72 w-full rounded-md overflow-hidden border border-slate-200 bg-slate-100">
            <img
              src={asset.imageUrl}
              alt={asset.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#f9a825]" />
                <span className="font-medium">{asset.jurisdiction}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>Audited: {asset.lastAudited}</span>
              </div>
            </div>
          </div>

          {/* Key Financial & Operating Stat Cards in Space Grotesk */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-md">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                Current Valuation
              </span>
              <span className="text-2xl font-bold font-display text-[#0f2c59] tabular-nums block font-mono">
                ${asset.currentValuation.toLocaleString()}M
              </span>
              <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                Deployed: ${asset.capitalDeployed.toLocaleString()}M
              </span>
            </div>

            <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-md">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                Target Realized IRR
              </span>
              <span className="text-2xl font-bold font-display text-[#f9a825] tabular-nums block font-mono">
                {asset.irr.toFixed(1)}%
              </span>
              <span className="text-[11px] text-emerald-600 font-mono mt-1 block">
                Cash Yield: {asset.annualizedYield.toFixed(1)}%
              </span>
            </div>

            <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-md">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                Autonomous Metric
              </span>
              <span className="text-2xl font-bold font-display text-[#0f2c59] tabular-nums block font-mono">
                {asset.autonomousRatio}%
              </span>
              <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                Robotic / Electrified
              </span>
            </div>

            <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-md">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                ESG Quality Score
              </span>
              <span className="text-2xl font-bold font-display text-emerald-700 tabular-nums block font-mono">
                {asset.esgScore} / 100
              </span>
              <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                Risk Grade: {asset.riskGrade}
              </span>
            </div>
          </div>

          {/* Operational Capacity & Concession Counterparty */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-md p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
              <span className="text-slate-500 font-medium">Throughput & Production Capacity:</span>
              <span className="font-semibold text-slate-900 font-mono">{asset.outputMetric}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 border-t border-slate-200/60 pt-2.5">
              <span className="text-slate-500 font-medium">Sovereign / State Counterparty:</span>
              <span className="font-semibold text-[#0f2c59]">{asset.counterparty}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 border-t border-slate-200/60 pt-2.5">
              <span className="text-slate-500 font-medium">Sovereign Concession Status:</span>
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {asset.sovereignGuarantee
                  ? 'Bilateral Sovereign Concession (Enforceable Title)'
                  : 'Freehold Special Concession Title'}
              </span>
            </div>
          </div>

          {/* Strategic Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-3">
              Fiduciary & Operational Highlights
            </h4>
            <div className="space-y-2">
              {asset.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-white border border-slate-200 rounded-[0.25rem] p-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={handleDownloadDossier}
              className="btn-outline-navy px-4 py-2.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Audit Dossier (TXT)</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="btn-ghost px-4 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenMandateModalWithAsset(asset.name);
                }}
                className="btn-gold px-5 py-2.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Allocate Capital to This Facility</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
