import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../i18n/translations';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const phoneNumber = '260960641318';
  const defaultMessage =
    currentLang === 'fr'
      ? 'Bonjour GLOBAL PRECISION INVESTMENT, je souhaite échanger au sujet de vos services.'
      : 'Hello GLOBAL PRECISION INVESTMENT, I would like to inquire about your services.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label={currentLang === 'fr' ? 'Contact WhatsApp direct' : 'Direct WhatsApp chat'}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-hidden ring-4 ring-white/50"
        aria-label="WhatsApp Chat"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>

      {/* Floating tooltip label on hover/desktop */}
      <span className="hidden md:inline-block pointer-events-none absolute right-16 bg-[#0f2c59] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 border border-white/10">
        {currentLang === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
      </span>
    </aside>
  );
};
