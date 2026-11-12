import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AboutPage } from './components/AboutPage';
import { SectorsShowcase } from './components/SectorsShowcase';
import { SectorDetailPage } from './components/SectorDetailPage';
import { ContactPage } from './components/ContactPage';
import { ContactSection } from './components/ContactSection';
import { ProcessStepsSection } from './components/ProcessStepsSection';
import { Footer } from './components/Footer';
import { Language } from './i18n/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'sector'>('home');
  const [activeSectorId, setActiveSectorId] = useState<'mining' | 'agriculture' | 'supply'>('mining');
  const [contactPresetSector, setContactPresetSector] = useState<string>('');

  // Handle URL hash changes for true multi-page navigation and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('min')) {
        setActiveSectorId('mining');
        setCurrentPage('sector');
      } else if (hash.includes('agr')) {
        setActiveSectorId('agriculture');
        setCurrentPage('sector');
      } else if (hash.includes('sup') || hash.includes('fourn')) {
        setActiveSectorId('supply');
        setCurrentPage('sector');
      } else if (hash.includes('about') || hash.includes('propos')) {
        setCurrentPage('about');
      } else if (hash.includes('contact') || hash.includes('devis')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Page navigation handlers
  const handleNavigatePage = (page: 'home' | 'about' | 'contact') => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
    } else if (page === 'about') {
      window.location.hash = '#/about';
    } else if (page === 'contact') {
      window.location.hash = '#/contact';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSectorPage = (sectorId: 'mining' | 'agriculture' | 'supply') => {
    setActiveSectorId(sectorId);
    setCurrentPage('sector');
    window.location.hash = `#/sector/${sectorId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSector = (sectorName: string) => {
    setContactPresetSector(sectorName);
    setCurrentPage('contact');
    window.location.hash = '#/contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0d1c2e] selection:bg-[#f9a825]/30">
      {/* Top Bar Header with Mobile Drawer & Language Toggle */}
      <Header
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        currentPage={currentPage}
        currentSectorId={activeSectorId}
        onNavigatePage={handleNavigatePage}
        onSelectSector={handleOpenSectorPage}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          /* Separate Dedicated About Page */
          <AboutPage
            currentLang={currentLang}
            onBackToHome={handleBackToHome}
            onSelectSector={handleOpenSectorPage}
            onNavigateContact={() => handleNavigatePage('contact')}
          />
        ) : currentPage === 'contact' ? (
          /* Separate Dedicated Contact & RFQ Page */
          <ContactPage
            currentLang={currentLang}
            onBackToHome={handleBackToHome}
            presetSector={contactPresetSector}
          />
        ) : currentPage === 'sector' ? (
          /* Separate Dedicated Sector Detail Page (Mining, Agriculture, or Supply) */
          <SectorDetailPage
            sectorId={activeSectorId}
            currentLang={currentLang}
            onBackToHome={handleBackToHome}
            onSelectSector={handleOpenSectorPage}
            onContactSector={handleContactSector}
          />
        ) : (
          /* Home View: Hero + About Overview + Sectors Showcase + Contact Preview */
          <>
            {/* Showcase Hero with the 3 Sectors Fast Cards */}
            <HeroSection
              currentLang={currentLang}
              onExploreSectors={(sectorId) => {
                if (sectorId) {
                  handleOpenSectorPage(sectorId);
                } else {
                  const elem = document.getElementById('sectors');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onContactClick={() => handleNavigatePage('contact')}
            />

            {/* About / Vision of the Conglomerate */}
            <AboutSection
              currentLang={currentLang}
              onExploreAbout={() => handleNavigatePage('about')}
            />

            {/* The 3 Core Pillars Showcase with buttons to open each separate page */}
            <SectorsShowcase
              currentLang={currentLang}
              selectedSectorId={activeSectorId}
              onSectorSelect={(id) => setActiveSectorId(id)}
              onOpenSectorPage={handleOpenSectorPage}
              onContactSector={handleContactSector}
            />

            {/* How It Works: 4-Step Operational Process */}
            <ProcessStepsSection
              currentLang={currentLang}
              onNavigateContact={() => handleNavigatePage('contact')}
            />

            {/* Direct Contact & Partnership Form */}
            <ContactSection
              currentLang={currentLang}
              presetSector={contactPresetSector}
            />
          </>
        )}
      </main>

      {/* Corporate Bilingual Footer modeled after godafdrc.com */}
      <Footer
        currentLang={currentLang}
        onNavigatePage={handleNavigatePage}
        onSelectSector={handleOpenSectorPage}
      />
    </div>
  );
}
