import React from 'react';
import {
  ShieldCheck,
  FileCheck2,
  Award,
  Globe2,
  Lock,
  Download,
  Building2,
  CheckCircle2,
} from 'lucide-react';

interface SovereignAuditSectionProps {
  onOpenMandateModal: () => void;
  onExportCsv: () => void;
}

export const SovereignAuditSection: React.FC<SovereignAuditSectionProps> = ({
  onOpenMandateModal,
  onExportCsv,
}) => {
  const auditFirms = [
    { name: 'Deloitte Sovereign Advisory', scope: 'Financial & Concession Audits', period: 'Annual 2025/2026' },
    { name: 'PwC Institutional', scope: 'Asset-Level Operational Telemetry', period: 'Quarterly Reviews' },
    { name: 'DNV GL Marine & Offshore', scope: 'Subsea & Infrastructure Certification', period: 'Continuous Monitoring' },
    { name: 'TÜV Rheinland Sustainability', scope: 'Carbon & Biosphere Verification', period: 'EU Taxonomy Certified' },
  ];

  const complianceStandards = [
    {
      title: 'Basel III Sovereign Standards',
      desc: 'Risk-weighted asset ratios exceed 18.4% Tier-1 common equity equivalent buffers across all operating entities.',
    },
    {
      title: 'EU Taxonomy Article 9 Compliance',
      desc: '100% of sustainable agriculture and modern mining assets qualify under strict European sustainable finance mandates.',
    },
    {
      title: 'Sovereign Concession Ring-Fencing',
      desc: 'Independent legal trusts established under English and Swiss maritime law protecting physical concession title.',
    },
    {
      title: 'Zero Groundwater Draw Certification',
      desc: 'Direct lithium extraction processes in the Atacama strictly recycle brine with 0% drawdown from potable reservoirs.',
    },
  ];

  return (
    <section id="audit" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Fiduciary Governance & Sovereign Stability</span>
              <span aria-hidden="true">·</span>
              <span>Independent Verification</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight">
              Sovereign Audits, ESG & Risk Assurance
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onExportCsv}
              className="btn-outline-navy px-4 py-2 text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Full Audit Ledger</span>
            </button>
            <button
              onClick={onOpenMandateModal}
              className="btn-gold px-4 py-2 text-xs uppercase tracking-wider font-bold cursor-pointer"
            >
              Request Compliance Dossier
            </button>
          </div>
        </div>

        {/* 4 Pillars of Assurance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceStandards.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 hover:shadow-xs transition-shadow"
            >
              <div className="w-8 h-8 rounded-[0.25rem] bg-[#0f2c59] text-[#f9a825] flex items-center justify-center mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-display font-bold text-base text-[#0f2c59] mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit Registry Table */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-bold font-display text-[#0f2c59]">
                Independent Audit & Fiduciary Registry
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                External third-party verification bodies maintaining continuous oversight of physical assets
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0f2c59] font-mono">
              Status: UNQUALIFIED OPINIONS (CLEAN AUDIT)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {auditFirms.map((firm, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-md p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#0f2c59]" />
                  <span className="text-xs font-bold text-[#0f2c59]">{firm.name}</span>
                </div>
                <div className="text-xs text-slate-600 mb-3">{firm.scope}</div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Cadence:</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {firm.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
