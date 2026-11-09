import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SectorsShowcase } from './components/SectorsShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './i18n/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSectorId, setSelectedSectorId] = useState<'mining' | 'agriculture' | 'supply'>('mining');
  const [contactPresetSector, setContactPresetSector] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreSectors = (sectorId?: 'mining' | 'agriculture' | 'supply') => {
    if (sectorId) {
      setSelectedSectorId(sectorId);
    }
    handleNavigate('sectors');
  };

  const handleContactSector = (sectorName: string) => {
    setContactPresetSector(sectorName);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0d1c2e]">
      {/* Top Bar Header with Language Selector */}
      <Header
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Showcase Hero with the 3 Sectors Presentation */}
        <HeroSection
          currentLang={currentLang}
          onExploreSectors={handleExploreSectors}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* About / Vision of the Conglomerate */}
        <AboutSection currentLang={currentLang} />

        {/* The 3 Core Pillars: Mine, Agriculture, Fourniture */}
        <SectorsShowcase
          currentLang={currentLang}
          selectedSectorId={selectedSectorId}
          onSectorSelect={(id) => setSelectedSectorId(id)}
          onContactSector={handleContactSector}
        />

        {/* Direct Contact & Partnership Form */}
        <ContactSection
          currentLang={currentLang}
          presetSector={contactPresetSector}
        />
      </main>

      {/* Corporate Bilingual Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onSectorSelect={(id) => setSelectedSectorId(id)}
      />
    </div>
  );
}
