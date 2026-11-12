import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface ContactSectionProps {
  currentLang: Language;
  presetSector?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  presetSector,
}) => {
  const t = translations[currentLang].contact;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [sectorInterest, setSectorInterest] = useState('all');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (presetSector) {
      if (presetSector.toLowerCase().includes('min')) setSectorInterest('mining');
      else if (presetSector.toLowerCase().includes('agr')) setSectorInterest('agriculture');
      else if (presetSector.toLowerCase().includes('four') || presetSector.toLowerCase().includes('sup'))
        setSectorInterest('supply');
      setMessage(
        currentLang === 'fr'
          ? `Bonjour, nous souhaitons échanger au sujet de votre division : ${presetSector}.`
          : `Hello, we would like to discuss opportunities regarding your division: ${presetSector}.`
      );
    }
  }, [presetSector, currentLang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !company.trim() || !message.trim()) {
      setErrorMessage(
        currentLang === 'fr'
          ? 'Veuillez remplir tous les champs obligatoires (*).'
          : 'Please complete all required fields (*).'
      );
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage(
        currentLang === 'fr'
          ? 'Veuillez saisir une adresse e-mail professionnelle valide.'
          : 'Please enter a valid corporate email address.'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setCompany('');
    setSectorInterest('all');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#f8f9ff] border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              <span className="w-2 h-2 rounded-[0.25rem] bg-[#f9a825]"></span>
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delayMs={100}>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 sm:p-8 shadow-xs card-hover-lift">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#0f2c59]">
                  {t.form.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.form.successMsg}
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="btn-outline-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {t.form.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-[0.25rem]">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.namePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-[44px] sm:h-[42px] px-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.form.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[44px] sm:h-[42px] px-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                      {t.form.company}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.form.companyPlaceholder}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full h-[44px] sm:h-[42px] px-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                    />
                  </div>

                  {/* Sector of interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                      {t.form.sectorInterest}
                    </label>
                    <select
                      value={sectorInterest}
                      onChange={(e) => setSectorInterest(e.target.value)}
                      className="w-full h-[44px] sm:h-[42px] px-3 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 font-medium focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 cursor-pointer"
                    >
                      <option value="all">{t.form.sectorOptions.all}</option>
                      <option value="mining">{t.form.sectorOptions.mining}</option>
                      <option value="agriculture">{t.form.sectorOptions.agriculture}</option>
                      <option value="supply">{t.form.sectorOptions.supply}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.form.messagePlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto btn-gold px-8 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
                  >
                    <span>{isSubmitting ? t.form.submitting : t.form.submitBtn}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Direct Corporate Contacts with ScrollReveal */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delayMs={200}>
              <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 sm:p-8 shadow-xs space-y-6 card-hover-lift">
            <div className="pb-4 border-b border-slate-100 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg text-[#0f2c59]">
                  {t.directContact.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {currentLang === 'fr'
                    ? 'Bureaux exécutifs et relations investisseurs'
                    : 'Executive headquarters and partner relations'}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-slate-200 bg-white p-1 shrink-0 flex items-center justify-center shadow-2xs">
                <img
                  src="/assets/aistudio/gpi_2_ed004c56.png"
                  alt="Global Precision Investment"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-5 text-xs sm:text-sm">
              {/* Locations: Kitwe Registered Office & Ndola Operations */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-slate-100 text-[#0f2c59] rounded-[0.25rem] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                      {currentLang === 'fr' ? 'Siège Statutaire (Kitwe)' : 'Registered Corporate Office (Kitwe)'}
                    </span>
                    <span className="font-bold text-[#0f2c59] text-sm leading-relaxed block">
                      Plot No 4017, Euclid Road, Industrial Area, Kitwe
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Copperbelt Province, Zambia · PACRA No. 120251029624
                    </span>
                  </div>

                  <div className="pt-1 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                      {currentLang === 'fr' ? 'Centre Opérationnel & Commercial' : 'Operations & Commercial Hub'}
                    </span>
                    <span className="font-bold text-slate-800 text-sm leading-relaxed block">
                      Ndola, Copperbelt Province, Zambia
                    </span>
                  </div>
                </div>
              </div>

              {/* Phones with direct click-to-call and WhatsApp links */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-slate-100 text-[#0f2c59] rounded-[0.25rem] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    {t.directContact.phoneTitle}
                  </span>
                  <div className="space-y-1.5 pt-0.5 font-mono">
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+260960641318"
                        className="font-bold text-slate-900 hover:text-[#0f2c59] text-sm"
                      >
                        +260 960 641 318
                      </a>
                      <a
                        href="https://wa.me/260960641318"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-[0.2rem] transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+260766557185"
                        className="font-bold text-slate-900 hover:text-[#0f2c59] text-sm"
                      >
                        +260 766 557 185
                      </a>
                      <a
                        href="https://wa.me/260766557185"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-[0.2rem] transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-slate-100 text-[#0f2c59] rounded-[0.25rem] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    {t.directContact.emailTitle}
                  </span>
                  <a
                    href={`mailto:${t.directContact.email}`}
                    className="font-semibold text-[#0f2c59] hover:underline"
                  >
                    {t.directContact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-slate-100 text-[#0f2c59] rounded-[0.25rem] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    {t.directContact.hoursTitle}
                  </span>
                  <span className="text-slate-600">{t.directContact.hours}</span>
                </div>
              </div>
            </div>

            {/* Slogan Banner Card & Brand Badge */}
            <div className="p-4 bg-gradient-to-r from-[#00173b] to-[#0f2c59] text-white rounded-md border border-[#0f2c59] relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#f9a825] block mb-0.5">
                    Global Precision Investment
                  </span>
                  <span className="font-display font-bold text-sm tracking-wide text-white italic">
                    "{t.directContact.slogan}"
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#f9a825]/20 border border-[#f9a825]/40 flex items-center justify-center text-[#f9a825] font-bold text-xs shrink-0 font-display">
                  GPI
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {currentLang === 'fr'
                  ? 'Siège opérationnel à Ndola, Zambie. Partenariats et accords bilatéraux certifiés.'
                  : 'Operational headquarters in Ndola, Zambia. Certified bilateral partnerships and concessions.'}
              </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
        </div>
      </div>
    </section>
  );
};
