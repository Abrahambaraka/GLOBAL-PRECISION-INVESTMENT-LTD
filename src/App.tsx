import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SectorsShowcase } from './components/SectorsShowcase';
import { SectorDetailPage } from './components/SectorDetailPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './i18n/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [currentView, setCurrentView] = useState<'home' | 'sector'>('home');
  const [activeSectorId, setActiveSectorId] = useState<'mining' | 'agriculture' | 'supply'>('mining');
  const [activeSection, setActiveSection] = useState('home');
  const [contactPresetSector, setContactPresetSector] = useState<string>('');

  // Handle URL hash changes for direct linking and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('min')) {
        setActiveSectorId('mining');
        setCurrentView('sector');
      } else if (hash.includes('agr')) {
        setActiveSectorId('agriculture');
        setCurrentView('sector');
      } else if (hash.includes('sup') || hash.includes('fourn')) {
        setActiveSectorId('supply');
        setCurrentView('sector');
      } else if (hash.includes('about')) {
        setCurrentView('home');
        setActiveSection('about');
        setTimeout(() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else if (hash.includes('contact')) {
        setCurrentView('home');
        setActiveSection('contact');
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else if (hash.includes('sectors')) {
        setCurrentView('home');
        setActiveSection('sectors');
        setTimeout(() => {
          document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      setCurrentView('home');
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = sectionId;
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSectorPage = (sectorId: 'mining' | 'agriculture' | 'supply') => {
    setActiveSectorId(sectorId);
    setCurrentView('sector');
    window.location.hash = `#/sector/${sectorId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSector = (sectorName: string) => {
    setContactPresetSector(sectorName);
    setCurrentView('home');
    window.location.hash = '#contact';
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0d1c2e] selection:bg-[#f9a825]/30">
      {/* Top Bar Header with Mobile Drawer & Language Toggle */}
      <Header
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onSelectSector={handleOpenSectorPage}
        currentView={currentView}
        currentSectorId={activeSectorId}
      />

      <main className="flex-1">
        {currentView === 'sector' ? (
          /* Dedicated Sector Page View */
          <SectorDetailPage
            sectorId={activeSectorId}
            currentLang={currentLang}
            onBackToHome={handleBackToHome}
            onSelectSector={handleOpenSectorPage}
            onContactSector={handleContactSector}
          />
        ) : (
          /* Showcase Home View */
          <>
            {/* Showcase Hero with the 3 Sectors Fast Cards */}
            <HeroSection
              currentLang={currentLang}
              onExploreSectors={(sectorId) => {
                if (sectorId) {
                  handleOpenSectorPage(sectorId);
                } else {
                  handleNavigate('sectors');
                }
              }}
              onContactClick={() => handleNavigate('contact')}
            />

            {/* About / Vision of the Conglomerate */}
            <AboutSection currentLang={currentLang} />

            {/* The 3 Core Pillars Showcase */}
            <SectorsShowcase
              currentLang={currentLang}
              selectedSectorId={activeSectorId}
              onSectorSelect={(id) => setActiveSectorId(id)}
              onOpenSectorPage={handleOpenSectorPage}
              onContactSector={handleContactSector}
            />

            {/* Direct Contact & Partnership Form */}
            <ContactSection
              currentLang={currentLang}
              presetSector={contactPresetSector}
            />
          </>
        )}
      </main>

      {/* Corporate Bilingual Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onSectorSelect={(id) => handleOpenSectorPage(id)}
      />
    </div>
  );
}
