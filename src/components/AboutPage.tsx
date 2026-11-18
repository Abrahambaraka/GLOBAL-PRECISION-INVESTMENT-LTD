import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  FileText,
  MapPin,
  ChevronRight,
  Pickaxe,
  Sprout,
  Ship,
  TrendingUp,
  Scale,
  Building,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';
import { CeoMessageSection } from './CeoMessageSection';

interface AboutPageProps {
  currentLang: Language;
  onBackToHome: () => void;
  onSelectSector: (sectorId: 'mining' | 'agriculture' | 'supply') => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentLang,
  onBackToHome,
  onSelectSector,
  onNavigateContact,
}) => {
  const t = translations[currentLang].about;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#f8f9ff] min-h-screen text-[#0d1c2e]">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-14 sm:top-20 z-30 shadow-2xs">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <button
              onClick={onBackToHome}
              className="text-[#0f2c59] hover:underline font-bold flex items-center gap-1 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-semibold text-[#0f2c59] truncate">
              {currentLang === 'fr' ? 'À Propos de l’Entreprise' : 'About the Company'}
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="btn-outline-navy px-2.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{currentLang === 'fr' ? 'Retour à l’accueil' : 'Back to Home'}</span>
            <span className="sm:hidden">{currentLang === 'fr' ? 'Retour' : 'Back'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header modeled like godafdrc.com */}
      <section className="bg-[#0f2c59] text-white pt-7 sm:pt-16 pb-8 sm:pb-20 relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#f9a825] bg-white/10 border border-white/15 px-2.5 sm:px-3 py-1 rounded-[0.25rem] mb-3 sm:mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f9a825]" />
              <span>{currentLang === 'fr' ? 'Présentation Institutionnelle' : 'Corporate Identity'}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight mb-3 sm:mb-5">
              {t.title}
            </h1>

            <p className="text-sm sm:text-lg text-[#f9a825] font-medium mb-2 sm:mb-3 italic">
              « Invest Today... Grow Tomorrow »
            </p>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              {currentLang === 'fr'
                ? 'GLOBAL PRECISION INVESTMENT LIMITED est un conglomérat industriel et commercial privé enregistré conformément à la loi zambienne sur les sociétés de 2017. Nous opérons au cœur de la province du Copperbelt avec des infrastructures à Kitwe et Ndola.'
                : 'GLOBAL PRECISION INVESTMENT LIMITED is a private industrial and wholesale conglomerate incorporated under the Zambian Companies Act of 2017, operating at the heart of the Copperbelt Province with hubs in Kitwe and Ndola.'}
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Philosophy */}
      <section className="py-8 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-5">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-0.5 rounded-[0.25rem] inline-block">
                {currentLang === 'fr' ? 'Notre Histoire & Raison d’Être' : 'Our Background & Purpose'}
              </span>
              <h2 className="text-xl sm:text-3xl font-bold font-display text-[#0f2c59] tracking-tight">
                {currentLang === 'fr'
                  ? 'Bâtir des chaînes d’approvisionnement pérennes et fiables'
                  : 'Building resilient and dependable supply chains'}
              </h2>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                {t.desc1}
              </p>
              <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                {t.desc2}
              </p>

              <div className="pt-1 sm:pt-2 flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={onNavigateContact}
                  className="btn-gold w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  {currentLang === 'fr' ? 'Nous contacter' : 'Contact Leadership'}
                </button>
              </div>
            </div>

            {/* Official Certification Card with ZRA & PACRA */}
            <div className="lg:col-span-6 bg-[#f8fafc] border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-slate-200 mb-4 sm:mb-5">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src="/assets/aistudio/gpi_2_ed004c56.png"
                      alt="Logo GPI"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs sm:text-base text-[#0f2c59]">
                      GLOBAL PRECISION INVESTMENT LTD
                    </h3>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-mono">
                      Republic of Zambia · Copperbelt Province
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Active & Compliant
                </span>
              </div>

              {/* Legal Credentials List */}
              <div className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-xs">
                <div className="flex flex-wrap justify-between items-center gap-1.5 py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {currentLang === 'fr' ? 'Numéro ZRA (TPIN) :' : 'ZRA Taxpayer No (TPIN) :'}
                  </span>
                  <span className="font-mono font-bold text-[#0f2c59] bg-white px-2 py-0.5 rounded border border-slate-200">
                    2003677721
                  </span>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-1.5 py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {currentLang === 'fr' ? 'Identifiant ZRA / NRC :' : 'Identity No / NRC :'}
                  </span>
                  <span className="font-mono font-bold text-slate-800">
                    120261020624
                  </span>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-1.5 py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {currentLang === 'fr' ? 'Enregistrement PACRA :' : 'PACRA Registration :'}
                  </span>
                  <span className="font-mono font-bold text-slate-800">
                    120251029624
                  </span>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-1.5 py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {currentLang === 'fr' ? 'Juridiction Fiscale :' : 'Tax Jurisdiction :'}
                  </span>
                  <span className="text-slate-800 font-medium">
                    ISHTO - Copperbelt
                  </span>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-1.5 py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {currentLang === 'fr' ? 'Législation :' : 'Governing Law :'}
                  </span>
                  <span className="text-slate-800 font-medium">
                    The Companies Act, 2017 (Act No. 10)
                  </span>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-1.5 py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">
                    {currentLang === 'fr' ? 'Activité Principale :' : 'Main Activity :'}
                  </span>
                  <span className="font-medium text-[#0f2c59]">
                    Non-specialized wholesale trade (ISIC 4690)
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start gap-1 py-1.5">
                  <span className="text-slate-500 font-medium shrink-0">
                    {currentLang === 'fr' ? 'Siège Statutaire :' : 'Registered Office :'}
                  </span>
                  <span className="text-slate-800 sm:text-right font-medium max-w-full sm:max-w-[260px]">
                    Euclid Road Industrial Area, Prime Copperbelt Drive, Kitwe, Copperbelt Province
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section: CEO Gracia SALANGA */}
      <section className="py-8 sm:py-18 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">
          <CeoMessageSection currentLang={currentLang} />
        </div>
      </section>

      {/* Our Values (Modeled after godafdrc.com) */}
      <section className="py-8 sm:py-18 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">
          <ScrollReveal direction="up" delayMs={50}>
            <div className="max-w-2xl mb-6 sm:mb-12">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0f2c59] bg-white px-2.5 py-0.5 rounded-[0.25rem] border border-slate-200 inline-block mb-2">
                {currentLang === 'fr' ? 'Nos Valeurs Fondatrices' : 'Our Guiding Principles'}
              </span>
              <h2 className="text-xl sm:text-3xl font-bold font-display text-[#0f2c59] tracking-tight">
                {currentLang === 'fr'
                  ? 'L’Excellence Opérationnelle au Cœur de Notre Démarche'
                  : 'Operational Excellence at the Heart of Every Mission'}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            <ScrollReveal direction="up" delayMs={100}>
              <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 card-hover-lift h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0f2c59] text-[#f9a825] flex items-center justify-center mb-3.5 sm:mb-5">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-1.5 sm:mb-2">
                    {currentLang === 'fr' ? '1. Précision & Fiabilité' : '1. Precision & Reliability'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Fourniture de pièces et équipements certifiés aux spécifications d’origine. Respect rigoureux des délais de livraison pour garantir la continuité des chantiers.'
                      : 'Delivering parts and equipment certified to OEM specifications, with zero-delay delivery guarantees for production sites.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={200}>
              <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 card-hover-lift h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0f2c59] text-emerald-400 flex items-center justify-center mb-3.5 sm:mb-5">
                    <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-1.5 sm:mb-2">
                    {currentLang === 'fr' ? '2. Conformité Fiscale & Intégrité' : '2. Tax Compliance & Integrity'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Enregistrement complet auprès de la Zambia Revenue Authority (ZRA TPIN 2003677721) et du registre commercial PACRA. Transparence totale dans toutes nos transactions.'
                      : 'Fully compliant with Zambia Revenue Authority (ZRA TPIN 2003677721) and PACRA. Transparent invoicing and audit-ready practices.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={300}>
              <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 card-hover-lift h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0f2c59] text-[#6c95d8] flex items-center justify-center mb-3.5 sm:mb-5">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-1.5 sm:mb-2">
                    {currentLang === 'fr' ? '3. Ancrage Territorial Fort' : '3. Strong Regional Presence'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Présence physique avec des entrepôts et comptoirs à Kitwe (Euclid Rd Industrial Area) et Ndola, permettant une réactivité immédiate sur l’ensemble du Copperbelt.'
                      : 'Physical warehouses and dispatch counters in Kitwe (Euclid Rd) and Ndola for rapid turnaround across the Copperbelt.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The 3 Dedicated Sectors Gateway */}
      <section className="py-8 sm:py-18 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-0.5 rounded-[0.25rem] inline-block mb-2">
              {currentLang === 'fr' ? 'Nos Pôles Métiers' : 'Our Operating Sectors'}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold font-display text-[#0f2c59] tracking-tight">
              {currentLang === 'fr' ? 'Consulter les Pages Dédiées de Nos Secteurs' : 'Explore Each Dedicated Sector Page'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            <ScrollReveal direction="up" delayMs={100}>
              <div
                onClick={() => onSelectSector('mining')}
                className="border border-slate-200 rounded-lg overflow-hidden p-4 sm:p-6 hover:border-[#f9a825] hover:shadow-md transition-all cursor-pointer group bg-[#f8fafc] flex flex-col justify-between card-hover-lift h-full"
              >
                <div>
                  <div className="p-2 sm:p-2.5 bg-[#f9a825]/15 text-[#f9a825] rounded-md w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Pickaxe className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] group-hover:text-[#f9a825] transition-colors mb-1.5 sm:mb-2">
                    {currentLang === 'fr' ? 'Mines & Métaux Stratégiques' : 'Modern Mining & Critical Metals'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Équipements lourds, pièces de rechange et logistique d’extraction pour les gisements de cuivre et cobalt.'
                      : 'Heavy extraction equipment, wear plates, and logistics for Copperbelt copper and cobalt mining.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0f2c59] group-hover:text-[#f9a825]">
                  <span>{currentLang === 'fr' ? 'Ouvrir la page Mines' : 'Open Mining Page'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={200}>
              <div
                onClick={() => onSelectSector('agriculture')}
                className="border border-slate-200 rounded-lg overflow-hidden p-4 sm:p-6 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group bg-[#f8fafc] flex flex-col justify-between card-hover-lift h-full"
              >
                <div>
                  <div className="p-2 sm:p-2.5 bg-emerald-500/15 text-emerald-600 rounded-md w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] group-hover:text-emerald-600 transition-colors mb-1.5 sm:mb-2">
                    {currentLang === 'fr' ? 'Agriculture Durable & Agro-Fourniture' : 'Sustainable Agriculture & Agro-Supply'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Tracteurs, pompage solaire pour forages, semences certifiées et silos étanches de conservation.'
                      : 'Tractors, off-grid solar irrigation arrays, certified inputs, and hermetic grain silos.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0f2c59] group-hover:text-emerald-600">
                  <span>{currentLang === 'fr' ? 'Ouvrir la page Agriculture' : 'Open Agriculture Page'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delayMs={300}>
              <div
                onClick={() => onSelectSector('supply')}
                className="border border-slate-200 rounded-lg overflow-hidden p-4 sm:p-6 hover:border-[#0f2c59] hover:shadow-md transition-all cursor-pointer group bg-[#f8fafc] flex flex-col justify-between card-hover-lift h-full"
              >
                <div>
                  <div className="p-2 sm:p-2.5 bg-[#0f2c59]/10 text-[#0f2c59] rounded-md w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Ship className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] group-hover:text-[#1e4d8c] transition-colors mb-1.5 sm:mb-2">
                    {currentLang === 'fr' ? 'Fourniture Industrielle & Commerce de Gros' : 'Industrial Supply & Wholesale Trade'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentLang === 'fr'
                      ? 'Commerce de gros ISIC 4690, pièces détachées automobiles et camions, roulements et quincaillerie d’usine.'
                      : 'ISIC 4690 wholesale trade, automotive and truck spares, workshop hardware, and scheduled freight.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#0f2c59] group-hover:text-[#1e4d8c]">
                  <span>{currentLang === 'fr' ? 'Ouvrir la page Fourniture' : 'Open Supply Page'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
