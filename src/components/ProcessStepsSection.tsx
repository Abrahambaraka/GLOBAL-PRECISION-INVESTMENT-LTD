import React from 'react';
import {
  FileText,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
} from 'lucide-react';
import { Language } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface ProcessStepsSectionProps {
  currentLang: Language;
  onNavigateContact: () => void;
}

export const ProcessStepsSection: React.FC<ProcessStepsSectionProps> = ({
  currentLang,
  onNavigateContact,
}) => {
  const steps = [
    {
      number: '01',
      title:
        currentLang === 'fr'
          ? 'Expression du Besoin & Spécifications'
          : 'Requirement Analysis & OEM Specs',
      desc:
        currentLang === 'fr'
          ? 'Analyse détaillée de vos références constructeurs (CAT, Komatsu, Volvo, semences certifiées, outillages d’ateliers ou roulements) et validation des normes techniques.'
          : 'Thorough evaluation of OEM equipment codes (CAT, Komatsu, Volvo, certified seeds, workshop machinery, bearings) and strict technical validation.',
      badge: currentLang === 'fr' ? 'Étape Initiale' : 'Step 1',
      icon: FileText,
      accentColor: 'text-[#f9a825]',
      bgAccent: 'bg-[#f9a825]/10',
      borderColor: 'group-hover:border-[#f9a825]',
    },
    {
      number: '02',
      title:
        currentLang === 'fr'
          ? 'Devis Structuré & Conformité ZRA / PACRA'
          : 'Transparent Quoting & Full Compliance',
      desc:
        currentLang === 'fr'
          ? 'Proposition commerciale claire avec prix fermes, conformité fiscale ZRA TPIN 2003677721, bordereaux légaux et garanties contractuelles de délais.'
          : 'Clear quotation with competitive pricing, audited ZRA TPIN 2003677721 tax transparency, official bill of lading, and delivery timeframes.',
      badge: currentLang === 'fr' ? 'Conformité Fiscale' : 'Step 2',
      icon: ShieldCheck,
      accentColor: 'text-emerald-600',
      bgAccent: 'bg-emerald-500/10',
      borderColor: 'group-hover:border-emerald-500',
    },
    {
      number: '03',
      title:
        currentLang === 'fr'
          ? 'Préparation & Dispatch Express depuis nos Hubs'
          : 'Hub Preparation & Direct Overland Dispatch',
      desc:
        currentLang === 'fr'
          ? 'Conditionnement immédiat depuis nos entrepôts de Kitwe (Euclid Rd Industrial Area) et Ndola. Suivi en temps réel de vos expéditions sur le Copperbelt.'
          : 'Fast preparation from our primary warehouses in Kitwe (Euclid Rd Industrial Area) and Ndola. Proactive logistics dispatch across the Copperbelt.',
      badge: currentLang === 'fr' ? 'Kitwe & Ndola' : 'Step 3',
      icon: Truck,
      accentColor: 'text-[#0f2c59]',
      bgAccent: 'bg-[#0f2c59]/10',
      borderColor: 'group-hover:border-[#0f2c59]',
    },
    {
      number: '04',
      title:
        currentLang === 'fr'
          ? 'Livraison sur Site & Support Opérationnel'
          : 'On-Site Delivery & Dedicated Technical Support',
      desc:
        currentLang === 'fr'
          ? 'Réception sécurisée à quai ou directement sur exploitation, contrôle de conformité contradictoire et assistance continue pour vos renouvellements de stocks.'
          : 'Safe site reception, joint quality inspection at dock or mine site, and dependable continuous re-supply agreements with zero downtime.',
      badge: currentLang === 'fr' ? 'Disponibilité 99,4%' : 'Step 4',
      icon: CheckCircle2,
      accentColor: 'text-[#1e4d8c]',
      bgAccent: 'bg-[#1e4d8c]/10',
      borderColor: 'group-hover:border-[#1e4d8c]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0f2c59 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-1 rounded-[0.25rem] mb-3">
                <Clock className="w-3.5 h-3.5 text-[#f9a825]" />
                <span>
                  {currentLang === 'fr'
                    ? 'Méthodologie Opérationnelle'
                    : 'Operational Workflow'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight">
                {currentLang === 'fr'
                  ? 'Comment ça marche : Notre Processus en 4 Étapes'
                  : 'How it Works: Our 4-Step Strategic Process'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              {currentLang === 'fr'
                ? 'Une organisation logistique rodée pour répondre avec célérité aux exigences critiques des compagnies minières, fermes agricoles et ateliers industriels.'
                : 'A battle-tested logistics pipeline built to deliver zero-latency solutions for Copperbelt mining enterprises, commercial farms, and workshops.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} direction="up" delayMs={idx * 100}>
                <div
                  className={`bg-[#f8fafc] border border-slate-200 rounded-xl p-6 card-hover-lift group h-full flex flex-col justify-between transition-all duration-300 ${step.borderColor}`}
                >
                  <div>
                    {/* Top Step Number & Badge */}
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/80">
                      <span className="font-display font-black text-2xl sm:text-3xl text-slate-300 group-hover:text-[#0f2c59] transition-colors tabular-nums">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">
                        {step.badge}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg ${step.bgAccent} ${step.accentColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Title */}
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-2 leading-snug group-hover:text-[#1e4d8c] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#0f2c59] transition-colors">
                    <span>{currentLang === 'fr' ? 'Étape validée' : 'Standard milestone'}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#f9a825] transition-colors" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick CTA banner for on-the-move professionals */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="mt-10 sm:mt-12 bg-[#0f2c59] rounded-xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#f9a825] mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>
                  {currentLang === 'fr'
                    ? 'Disponibilité Rapide · Chauffeurs & Responsables Logistiques'
                    : 'Rapid Availability · Drivers & Logistics Leads'}
                </span>
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                {currentLang === 'fr'
                  ? 'Un besoin urgent de pièces ou un appel d’offres en cours ?'
                  : 'Urgent parts requirement or ongoing tender submission?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {currentLang === 'fr'
                  ? 'Notre centrale de dispatching traite les demandes sous 24h avec traçabilité complète ZRA TPIN 2003677721.'
                  : 'Our dispatch hub processes orders within 24h with complete ZRA TPIN 2003677721 compliance.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onNavigateContact}
                className="btn-gold px-5 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md active:scale-95 transition-transform"
              >
                <span>{currentLang === 'fr' ? 'Demander un devis' : 'Request Quotation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+260960641318"
                className="btn-outline-navy !text-white !border-white/30 hover:!bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 active:scale-95 transition-transform"
              >
                <PhoneCall className="w-4 h-4 text-[#f9a825]" />
                <span className="font-mono">+260 960 641 318</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
