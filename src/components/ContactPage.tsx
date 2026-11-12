import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  FileText,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { Language, translations } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface ContactPageProps {
  currentLang: Language;
  onBackToHome: () => void;
  presetSector?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  onBackToHome,
  presetSector = '',
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (presetSector) {
      if (presetSector.toLowerCase().includes('min')) setSectorInterest('mining');
      else if (presetSector.toLowerCase().includes('agr')) setSectorInterest('agriculture');
      else if (presetSector.toLowerCase().includes('four') || presetSector.toLowerCase().includes('sup'))
        setSectorInterest('supply');
      setMessage(
        currentLang === 'fr'
          ? `Bonjour, je vous contacte au sujet du secteur : ${presetSector}.`
          : `Hello, I am contacting you regarding the division: ${presetSector}.`
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
    <div className="bg-[#f8f9ff] min-h-screen text-[#0d1c2e]">
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-2xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <button
              onClick={onBackToHome}
              className="text-[#0f2c59] hover:underline font-bold flex items-center gap-1 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-semibold text-[#0f2c59]">
              {currentLang === 'fr' ? 'Contact & Demande de Devis' : 'Contact & Quotation'}
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="btn-outline-navy px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{currentLang === 'fr' ? 'Retour à l’accueil' : 'Back to Home'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header modeled like godafdrc.com */}
      <section className="bg-[#0f2c59] text-white pt-12 sm:pt-16 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f9a825] bg-white/10 border border-white/15 px-3 py-1 rounded-[0.25rem] mb-4">
              <Mail className="w-3.5 h-3.5 text-[#f9a825]" />
              <span>{currentLang === 'fr' ? 'Liaison Directe Kitwe & Ndola' : 'Direct Liaison Kitwe & Ndola'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight mb-4">
              {t.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Form & Direct Contact Details */}
      <section className="py-14 sm:py-18 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" delayMs={100}>
                <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs card-hover-lift">
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0f2c59] mb-2">
                    {currentLang === 'fr' ? 'Transmettre votre Demande ou Appel d’Offres' : 'Submit your Quotation or Partnership Request'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    {currentLang === 'fr'
                      ? 'Remplissez le formulaire ci-dessous. Notre direction et nos équipes techniques vous répondent sous 24 heures ouvrées.'
                      : 'Complete the form below. Our management and technical teams will respond within 24 business hours.'}
                  </p>

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
                          className="btn-outline-navy px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer active:scale-95 transition-transform"
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
                            className="w-full h-[44px] px-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                          />
                        </div>

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
                            className="w-full h-[44px] px-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            className="w-full h-[44px] px-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                            {t.form.sectorInterest}
                          </label>
                          <select
                            value={sectorInterest}
                            onChange={(e) => setSectorInterest(e.target.value)}
                            className="w-full h-[44px] px-3 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 font-medium focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 cursor-pointer"
                          >
                            <option value="all">{t.form.sectorOptions.all}</option>
                            <option value="mining">{t.form.sectorOptions.mining}</option>
                            <option value="agriculture">{t.form.sectorOptions.agriculture}</option>
                            <option value="supply">{t.form.sectorOptions.supply}</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1.5">
                          {t.form.message}
                        </label>
                        <textarea
                          rows={5}
                          required
                          placeholder={t.form.messagePlaceholder}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full p-3.5 text-base sm:text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto btn-gold px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-60 active:scale-95 transition-all"
                      >
                        <span>{isSubmitting ? t.form.submitting : t.form.submitBtn}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Official Coordinates & Registrations */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal direction="up" delayMs={200}>
                {/* Direct Contacts Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-5 card-hover-lift">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#0f2c59]">
                        {t.directContact.title}
                      </h3>
                      <span className="text-xs text-slate-500">
                        Kitwe & Ndola, Province du Copperbelt
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shadow-2xs">
                      <img
                        src="/assets/aistudio/gpi_2_ed004c56.png"
                        alt="Logo GPI"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Head Office Kitwe */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 bg-slate-100 text-[#0f2c59] rounded shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                          {currentLang === 'fr' ? 'Siège Statutaire (Kitwe)' : 'Registered Head Office (Kitwe)'}
                        </span>
                        <span className="font-bold text-[#0f2c59] block">
                          Euclid Road Industrial Area, Prime Copperbelt Drive
                        </span>
                        <span className="text-xs text-slate-500">
                          Kitwe, Copperbelt Province, Zambia
                        </span>
                      </div>
                    </div>

                    {/* Commercial Hub Ndola */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 bg-slate-100 text-[#0f2c59] rounded shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                          {currentLang === 'fr' ? 'Comptoir Commercial & Logistique (Ndola)' : 'Commercial & Logistics Hub (Ndola)'}
                        </span>
                        <span className="font-bold text-slate-800 block">
                          Ndola Commercial District
                        </span>
                        <span className="text-xs text-slate-500">
                          Copperbelt Province, Zambia
                        </span>
                      </div>
                    </div>

                    {/* Direct Phones & WhatsApp */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 bg-slate-100 text-[#0f2c59] rounded shrink-0 mt-0.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          {t.directContact.phoneTitle}
                        </span>
                        <div className="space-y-2 font-mono">
                          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded border border-slate-100 hover:bg-slate-100/70 transition-colors">
                            <a href="tel:+260960641318" className="font-bold text-slate-900 hover:text-[#0f2c59]">
                              +260 960 641 318
                            </a>
                            <a
                              href="https://wa.me/260960641318"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1 active:scale-95 transition-transform"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded border border-slate-100 hover:bg-slate-100/70 transition-colors">
                            <a href="tel:+260766557185" className="font-bold text-slate-900 hover:text-[#0f2c59]">
                              +260 766 557 185
                            </a>
                            <a
                              href="https://wa.me/260766557185"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1 active:scale-95 transition-transform"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 bg-slate-100 text-[#0f2c59] rounded shrink-0 mt-0.5">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                          {t.directContact.emailTitle}
                        </span>
                        <a
                          href="mailto:contact@globalprecisioninvest.com"
                          className="font-bold text-[#0f2c59] hover:underline"
                        >
                          contact@globalprecisioninvest.com
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 bg-slate-100 text-[#0f2c59] rounded shrink-0 mt-0.5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                          {t.directContact.hoursTitle}
                        </span>
                        <span className="text-slate-700">
                          {t.directContact.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Official Taxpayer & Legal Certificate Box */}
              <ScrollReveal direction="up" delayMs={280}>
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-xs card-hover-lift">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0f2c59] uppercase tracking-wider mb-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{currentLang === 'fr' ? 'Conformité Fiscale & Statutaire' : 'Tax & Statutory Compliance'}</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-slate-600">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>ZRA TPIN :</span>
                      <strong className="text-slate-900">2003677721</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>Identity / NRC :</span>
                      <strong className="text-slate-900">120261020624</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span>PACRA Reg. No :</span>
                      <strong className="text-slate-900">120251029624</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Tax Jurisdiction :</span>
                      <strong className="text-[#0f2c59]">ISHTO - Copperbelt</strong>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
