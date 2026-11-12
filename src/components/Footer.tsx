import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  MessageCircle,
  FileText,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onNavigatePage: (page: 'home' | 'about' | 'contact') => void;
  onSelectSector: (id: 'mining' | 'agriculture' | 'supply') => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigatePage,
  onSelectSector,
}) => {
  const t = translations[currentLang].footer;
  const nav = translations[currentLang].nav;

  return (
    <footer className="bg-[#00173b] text-slate-300 pt-16 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background architectural pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Presentation (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/20 shrink-0 bg-white p-1 flex items-center justify-center shadow-md">
                <img
                  src="/assets/aistudio/gpi_2_ed004c56.png"
                  alt="Global Precision Investment"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white block">
                  GLOBAL PRECISION INVESTMENT LTD
                </span>
                <span className="text-[10px] text-[#f9a825] font-semibold italic block">
                  « Invest Today... Grow Tomorrow »
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {currentLang === 'fr'
                ? 'Conglomérat d’investissement et d’exploitation d’infrastructures dans la province du Copperbelt en Zambie. Solutions pour les mines, l’agriculture durable et le commerce de gros industriel.'
                : 'Zambian industrial conglomerate providing extraction support, sustainable agro-mechanization, and wholesale supply across the Copperbelt Province.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <a
                href="https://wa.me/260960641318"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600/90 hover:bg-emerald-600 text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp : +260 960 641 318</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Separated Pages (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block pb-1 border-b border-white/10">
              {currentLang === 'fr' ? 'Pages du Site' : 'Site Pages'}
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigatePage('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#f9a825] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  <span>{nav.home}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#f9a825] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  <span>{nav.about}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePage('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#f9a825] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  <span>{nav.contact}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: ZRA Taxpayer Registration & Compliance (from official certificate) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                {currentLang === 'fr' ? 'Enregistrement Fiscal ZRA' : 'ZRA Tax Registration'}
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-3.5 space-y-2.5 text-xs card-hover-lift">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f9a825]">
                  Zambia Revenue Authority
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                  ACTIVE & COMPLIANT
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">TPIN :</span>
                  <span className="font-bold text-[#f9a825] bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    2003677721
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Identity / NRC :</span>
                  <span className="font-bold text-slate-200">120261020624</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Taxpayer Name :</span>
                  <span className="font-semibold text-slate-200 text-right truncate max-w-[150px]">
                    GLOBAL PRECISION INVESTMENT LTD
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Jurisdiction :</span>
                  <span className="text-slate-300">ISHTO - Copperbelt</span>
                </div>

                <div className="pt-1.5 border-t border-white/10 flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">Turnover Tax :</span>
                  <span className="text-emerald-400 font-bold">Effective 30 Jul 2025</span>
                </div>
              </div>

              <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 italic">
                <span>« My Tax · Your Tax · Our Destiny »</span>
                <span className="font-mono not-italic text-emerald-400 text-[9px]">ZRA Verified</span>
              </div>
            </div>
          </div>

          {/* Column 4: Operational Coordinates & Physical Presence */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f9a825] block pb-1 border-b border-white/10">
              {currentLang === 'fr' ? 'Sièges & Comptoirs Directs' : 'Headquarters & Operating Hubs'}
            </span>

            {/* Physical Addresses & Direct Communication */}
            <div className="text-xs space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f9a825] shrink-0 mt-0.5" />
                <div className="text-[11px] leading-snug">
                  <strong className="text-white block mb-0.5">
                    {currentLang === 'fr' ? 'Siège Statutaire (Kitwe) :' : 'Registered Office (Kitwe) :'}
                  </strong>
                  <span>Euclid Road Industrial Area, Prime Copperbelt Drive, Kitwe, Zambia</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f9a825] shrink-0 mt-0.5" />
                <div className="text-[11px] leading-snug">
                  <strong className="text-white block mb-0.5">
                    {currentLang === 'fr' ? 'Pôle Commercial & Logistique (Ndola) :' : 'Commercial Hub (Ndola) :'}
                  </strong>
                  <span>Ndola Commercial Hub, Copperbelt Province, Zambia</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-[#f9a825] shrink-0" />
                  <a href="tel:+260960641318" className="hover:text-white transition-colors">
                    +260 960 641 318
                  </a>
                  <span>/</span>
                  <a href="tel:+260766557185" className="hover:text-white transition-colors">
                    +260 766 557 185
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-[#f9a825] shrink-0" />
                  <a href="mailto:contact@globalprecisioninvest.com" className="hover:text-white truncate transition-colors">
                    contact@globalprecisioninvest.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} GLOBAL PRECISION INVESTMENT LIMITED. {t.rights}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="text-emerald-400 font-bold">✓ Entité Opérationnelle Enregistrée</span>
            <span>·</span>
            <span className="text-white">PACRA LCO No. 120251029624</span>
            <span>·</span>
            <span>ISIC 4690 Wholesale Trade</span>
            <span>·</span>
            <span>Kitwe & Ndola, Zambia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
