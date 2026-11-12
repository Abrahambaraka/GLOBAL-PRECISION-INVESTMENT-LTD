import React, { useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Pickaxe,
  Sprout,
  Ship,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Camera,
  Phone,
  MessageCircle,
  Package,
  Wrench,
  Layers,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { Language, translations, SectorItem } from '../i18n/translations';
import { ScrollReveal } from './ScrollReveal';

interface SectorDetailPageProps {
  sectorId: 'mining' | 'agriculture' | 'supply';
  currentLang: Language;
  onBackToHome: () => void;
  onSelectSector: (id: 'mining' | 'agriculture' | 'supply') => void;
  onContactSector: (sectorName: string) => void;
}

export const SectorDetailPage: React.FC<SectorDetailPageProps> = ({
  sectorId,
  currentLang,
  onBackToHome,
  onSelectSector,
  onContactSector,
}) => {
  const sectors = translations[currentLang].sectors;
  const currentSector: SectorItem = sectors[sectorId];

  // Scroll to top when sector changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [sectorId]);

  const getSectorIcon = (id: 'mining' | 'agriculture' | 'supply') => {
    switch (id) {
      case 'mining':
        return <Pickaxe className="w-5 h-5 text-[#f9a825]" />;
      case 'agriculture':
        return <Sprout className="w-5 h-5 text-emerald-500" />;
      case 'supply':
        return <Ship className="w-5 h-5 text-[#0f2c59]" />;
    }
  };

  const getAccentColor = (id: 'mining' | 'agriculture' | 'supply') => {
    switch (id) {
      case 'mining':
        return '#f9a825';
      case 'agriculture':
        return '#10b981';
      case 'supply':
        return '#0f2c59';
    }
  };

  // Detailed catalog items specific to each sector
  const getCatalogData = () => {
    if (sectorId === 'mining') {
      return {
        title: currentLang === 'fr' ? 'Lignes de Fourniture & Équipements Miniers' : 'Mining Equipment & Supply Lines',
        subtitle:
          currentLang === 'fr'
            ? 'Approvisionnement certifié pour les mines de cuivre et cobalt du Copperbelt'
            : 'Certified procurement for Copperbelt copper and cobalt extraction complexes',
        categories: [
          {
            icon: <Wrench className="w-5 h-5 text-[#f9a825]" />,
            name: currentLang === 'fr' ? 'Pièces d’Usure & Roulage Lourd' : 'Wear Parts & Heavy Haulage',
            items: [
              currentLang === 'fr' ? 'Composants pour camions de transport minier 100t+' : 'Components for 100-ton+ mining haul trucks',
              currentLang === 'fr' ? 'Dents de godets, lames et blindages anti-abrasion' : 'Bucket teeth, cutting edges, and wear plates',
              currentLang === 'fr' ? 'Pneumatiques industriels pour tombereaux' : 'Heavy-duty OTR industrial haul tires',
            ],
          },
          {
            icon: <Layers className="w-5 h-5 text-[#f9a825]" />,
            name: currentLang === 'fr' ? 'Systèmes d’Extraction & Forage' : 'Drilling & Extraction Hardware',
            items: [
              currentLang === 'fr' ? 'Tiges et têtes de forage diamanté' : 'Diamond core drilling rods & drill bits',
              currentLang === 'fr' ? 'Flexibles et pompes hydrauliques haute pression' : 'High-pressure hydraulic hoses & slurry pumps',
              currentLang === 'fr' ? 'Compresseurs et groupes électrogènes de chantier' : 'Stationary site compressors & generator sets',
            ],
          },
          {
            icon: <Package className="w-5 h-5 text-[#f9a825]" />,
            name: currentLang === 'fr' ? 'Réactifs & Logistique d’Usine' : 'Process Reagents & Site Supplies',
            items: [
              currentLang === 'fr' ? 'Produits chimiques de flottation et lixiviation' : 'Solvent extraction and flotation reagents',
              currentLang === 'fr' ? 'Toiles filtrantes et garnitures d’étanchéité' : 'Filter press cloths and industrial gaskets',
              currentLang === 'fr' ? 'Équipements de protection individuelle (EPI) miniers' : 'Certified heavy industrial PPE & safety gear',
            ],
          },
        ],
      };
    } else if (sectorId === 'agriculture') {
      return {
        title: currentLang === 'fr' ? 'Catalogue Agro-Technologique & Mécanisation' : 'Agro-Tech & Mechanization Catalogue',
        subtitle:
          currentLang === 'fr'
            ? 'Solutions intégrées pour maximiser les rendements et sécuriser les récoltes en Zambie'
            : 'Integrated solutions to optimize crop yields and preserve harvested food in Zambia',
        categories: [
          {
            icon: <Wrench className="w-5 h-5 text-emerald-500" />,
            name: currentLang === 'fr' ? 'Tracteurs & Outillage Aratoire' : 'Tractors & Farm Implements',
            items: [
              currentLang === 'fr' ? 'Tracteurs polyvalents et motoculteurs diesel' : 'Multipurpose agricultural tractors & diesel power tillers',
              currentLang === 'fr' ? 'Semoirs de précision, charrues et herses rotatives' : 'Precision seed drills, disc ploughs, and harrows',
              currentLang === 'fr' ? 'Pièces détachées moteur et kits de maintenance' : 'Engine maintenance parts & tractor service kits',
            ],
          },
          {
            icon: <Layers className="w-5 h-5 text-emerald-500" />,
            name: currentLang === 'fr' ? 'Pompage Solaire & Irrigation' : 'Solar Pumping & Drip Irrigation',
            items: [
              currentLang === 'fr' ? 'Pompes submersibles solaires pour forages' : 'Deep-well solar submersible pumping systems',
              currentLang === 'fr' ? 'Kits d’irrigation goutte-à-goutte basse pression' : 'Low-pressure gravity & pressurized drip kits',
              currentLang === 'fr' ? 'Réservoirs de stockage et vannes de distribution' : 'Water storage bladders and control valves',
            ],
          },
          {
            icon: <Package className="w-5 h-5 text-emerald-500" />,
            name: currentLang === 'fr' ? 'Stockage Hermétique & Intrants' : 'Hermetic Storage & Quality Inputs',
            items: [
              currentLang === 'fr' ? 'Silos étanches préservant le maïs et céréales' : 'Hermetic grain storage silos preventing insect loss',
              currentLang === 'fr' ? 'Sacs de stockage hermétiques anti-humidité' : 'Multi-layer hermetic bags (chemical-free preservation)',
              currentLang === 'fr' ? 'Engrais NPK sélectionnés et semences certifiées' : 'Certified high-yield hybrid seeds and organic inputs',
            ],
          },
        ],
      };
    } else {
      return {
        title: currentLang === 'fr' ? 'Pôle Commerce de Gros & Pièces Détachées (ISIC 4690)' : 'Wholesale Distribution & Spare Parts Hub (ISIC 4690)',
        subtitle:
          currentLang === 'fr'
            ? 'Dépôt central Plot 4017 Euclid Rd Kitwe et comptoir de Ndola pour flottes et industries'
            : 'Central depot at Plot 4017 Euclid Rd Kitwe and Ndola counter for industrial fleets',
        categories: [
          {
            icon: <Wrench className="w-5 h-5 text-[#0f2c59]" />,
            name: currentLang === 'fr' ? 'Pièces Détachées Véhicules & Poids Lourds' : 'Motor Vehicle & Truck Spare Parts',
            items: [
              currentLang === 'fr' ? 'Kits d’embrayage, freins et suspensions pour 4x4 et camions' : 'Clutch kits, brake assemblies, and suspension units',
              currentLang === 'fr' ? 'Filtres à huile, carburant et air pour moteurs industriels' : 'OEM oil, fuel, and air filtration systems',
              currentLang === 'fr' ? 'Courroies trapézoïdales, alternateurs et démarreurs' : 'Drive belts, alternators, and heavy-duty starters',
            ],
          },
          {
            icon: <Layers className="w-5 h-5 text-[#0f2c59]" />,
            name: currentLang === 'fr' ? 'Quincaillerie Industrielle & Fixations' : 'Industrial Hardware & Fasteners',
            items: [
              currentLang === 'fr' ? 'Roulements à billes et rouleaux coniques (toutes séries)' : 'Precision ball bearings & tapered roller bearings',
              currentLang === 'fr' ? 'Boulonnerie haute résistance classe 8.8 et 10.9' : 'High-tensile bolts, nuts, studs, and anchor bolts',
              currentLang === 'fr' ? 'Outillage à main, électroportatif et matériel d’atelier' : 'Professional power tools, sockets, and torque wrenches',
            ],
          },
          {
            icon: <Package className="w-5 h-5 text-[#0f2c59]" />,
            name: currentLang === 'fr' ? 'Consommables & Logistique d’Entreprise' : 'Shop Consumables & Freight Delivery',
            items: [
              currentLang === 'fr' ? 'Lubrifiants haute performance, huiles de pont et graisses' : 'Heavy-duty engine oils, gear lubes, and greases',
              currentLang === 'fr' ? 'Produits d’étanchéité, colles industrielles et joints' : 'Industrial sealants, silicone gaskets, and epoxies',
              currentLang === 'fr' ? 'Service de livraison express aux chantiers du Copperbelt' : 'Scheduled route delivery across Copperbelt sites',
            ],
          },
        ],
      };
    }
  };

  const catalog = getCatalogData();
  const otherSectorIds = (['mining', 'agriculture', 'supply'] as const).filter((id) => id !== sectorId);

  return (
    <div className="bg-[#f8f9ff] min-h-screen text-[#0d1c2e]">
      {/* Top Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-2xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap py-0.5">
            <button
              onClick={onBackToHome}
              className="text-[#0f2c59] hover:underline font-bold flex items-center gap-1 cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentLang === 'fr' ? 'Accueil' : 'Home'}</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-500 shrink-0">
              {currentLang === 'fr' ? 'Secteurs d’Activité' : 'Business Sectors'}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="font-semibold text-[#0f2c59] truncate max-w-[200px] sm:max-w-none">
              {currentSector.name}
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="btn-outline-navy px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{currentLang === 'fr' ? 'Retour au site' : 'Back to Home'}</span>
            <span className="sm:hidden">{currentLang === 'fr' ? 'Retour' : 'Back'}</span>
          </button>
        </div>
      </div>

      {/* Main Sector Header & Panoramic Realistic Hero */}
      <section className="bg-[#0f2c59] text-white pt-10 sm:pt-14 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f9a825] bg-white/10 px-3 py-1 rounded-[0.25rem] border border-white/15">
              {currentSector.badge}
            </span>
            <span className="text-xs font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-[0.25rem] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentLang === 'fr' ? 'Opérations Actives & Certifiées' : 'Active & Certified Division'}</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            <div className="lg:col-span-8">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4 leading-tight">
                {currentSector.name}
              </h1>
              <p className="text-base sm:text-lg text-[#f9a825] font-medium mb-4">
                {currentSector.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {currentSector.description}
              </p>
            </div>

            {/* Direct Action Box */}
            <div className="lg:col-span-4 bg-white/10 border border-white/20 rounded-lg p-5 sm:p-6 backdrop-blur-xs flex flex-col gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#f9a825] font-bold block mb-1">
                  {currentLang === 'fr' ? 'Besoins opérationnels immédiats ?' : 'Immediate operational inquiry?'}
                </span>
                <p className="text-xs text-slate-200">
                  {currentLang === 'fr'
                    ? 'Nos équipes à Kitwe et Ndola traitent vos commandes et cahiers des charges.'
                    : 'Our Kitwe and Ndola operations teams process orders and industrial specifications.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <button
                  onClick={() => onContactSector(currentSector.name)}
                  className="btn-gold w-full py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{currentLang === 'fr' ? 'Demander un devis / catalogue' : 'Request Quotation / Catalogue'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/260960641318?text=${encodeURIComponent(
                    `Bonjour GLOBAL PRECISION INVESTMENT, je vous contacte au sujet du secteur : ${currentSector.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-[0.25rem] bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp : +260 960 641 318</span>
                </a>
              </div>
            </div>
          </div>

          {/* Panoramic Realistic Image Showcase */}
          <div className="relative rounded-lg overflow-hidden border border-white/20 shadow-xl group">
            <div className="relative h-64 sm:h-96 md:h-[460px] w-full bg-slate-900 overflow-hidden">
              <img
                src={currentSector.coverImage}
                alt={currentSector.name}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Top Verified Tag */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="bg-[#0f2c59]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-[0.25rem] flex items-center gap-1.5 shadow-sm border border-white/20">
                  <Camera className="w-3.5 h-3.5 text-[#f9a825]" />
                  <span>{currentLang === 'fr' ? 'Photographie Réelle du Secteur' : 'Real Sector Photography'}</span>
                </span>
                <span className="bg-[#f9a825] text-[#0f2c59] text-xs font-bold px-2.5 py-1 rounded-[0.25rem] shadow-sm uppercase tracking-wider">
                  Copperbelt Province
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/75 to-transparent text-white">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#f9a825] font-semibold mb-1">
                      {currentLang === 'fr' ? 'Infrastructures & Matériels de Terrain' : 'Field Infrastructure & Assets'}
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-100 max-w-2xl leading-snug">
                      {currentSector.coverImageCaption}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/10 backdrop-blur-xs px-3 py-1.5 rounded border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#f9a825]" />
                    <span>Kitwe & Ndola, Zambia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Indicators Strip */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentSector.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-200/80 rounded-lg p-4 sm:p-5">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  {stat.label}
                </span>
                <span className="text-lg sm:text-2xl font-bold font-display text-[#0f2c59] tabular-nums font-mono block">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Strengths & Specifications */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-0.5 rounded-[0.25rem] mb-2 inline-block">
              {currentLang === 'fr' ? 'Normes & Capacités Techniques' : 'Technical Specifications & Standards'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0f2c59] tracking-tight">
              {currentLang === 'fr' ? 'Avantages Opérationnels & Engagements de Qualité' : 'Operational Strengths & Quality Standards'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {currentSector.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-2xs hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="p-2 bg-emerald-50 rounded-[0.25rem] text-emerald-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Standard 0{idx + 1}
                    </span>
                    <p className="text-sm text-slate-800 font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-mono flex items-center justify-between">
                  <span>Conformité PACRA & Zambie</span>
                  <span className="text-emerald-700 font-bold">✓ Validé</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment and Supply Lines Catalog */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-0.5 rounded-[0.25rem] mb-2 inline-block">
                {currentLang === 'fr' ? 'Matériel & Produits' : 'Hardware & Supplies'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0f2c59] tracking-tight">
                {catalog.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              {catalog.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {catalog.categories.map((cat, idx) => (
              <ScrollReveal key={idx} direction="up" delayMs={idx * 100}>
                <div
                  className="bg-[#f8fafc] border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 card-hover-lift h-full"
                >
                  <div>
                    <div className="w-10 h-10 rounded-[0.25rem] bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-4">
                      {cat.name}
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f9a825] shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button
                      onClick={() => onContactSector(`${currentSector.name} - ${cat.name}`)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-[#0f2c59] bg-white border border-slate-200 rounded-[0.25rem] hover:bg-[#0f2c59] hover:text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-98"
                    >
                      <span>{currentLang === 'fr' ? 'Demander disponibilité' : 'Check Availability'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#f9a825]" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Active Operational Facilities & Sites */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2.5 py-0.5 rounded-[0.25rem] mb-2 inline-block">
                {currentLang === 'fr' ? 'Installations & Réseau' : 'Facilities & Sites'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0f2c59] tracking-tight">
                {currentLang === 'fr' ? 'Bases Opérationnelles & Hubs de Distribution' : 'Operational Hubs & Distribution Depots'}
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              Province du Copperbelt & Corridors Régionaux
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentSector.projects.map((proj, idx) => (
              <ScrollReveal key={idx} direction="up" delayMs={idx * 120}>
                <div
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden group card-hover-lift transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                      <img
                        src={proj.imageUrl}
                        alt={proj.name}
                        className="w-full h-full object-cover img-hover-zoom transition-transform duration-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none group-hover:opacity-80 transition-opacity" />
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-medium text-white bg-[#0f2c59]/90 px-2.5 py-0.5 rounded-[0.25rem] flex items-center gap-1.5 backdrop-blur-xs group-hover:scale-105 transition-transform">
                          <MapPin className="w-3 h-3 text-[#f9a825]" />
                          {proj.location}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display font-bold text-base sm:text-lg text-[#0f2c59] mb-2 group-hover:text-[#1e4d8c] transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {proj.highlight}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1">
                    <button
                      onClick={() => onContactSector(`${currentSector.name} - ${proj.name}`)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-[#0f2c59] bg-slate-50 hover:bg-[#0f2c59] hover:text-white rounded-[0.25rem] border border-slate-200 flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-98"
                    >
                      <span>{currentLang === 'fr' ? 'Consulter ce pôle' : 'Inquire on this Facility'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Direct Contact Card */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#0f2c59] text-white rounded-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f9a825] block mb-2">
                  {currentLang === 'fr' ? 'Collaboration & Partenariat' : 'Partnership & Supply Mandates'}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white mb-3 tracking-tight">
                  {currentLang === 'fr'
                    ? `Collaborer avec le pôle ${currentSector.name}`
                    : `Partner with ${currentSector.name}`}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-6">
                  {currentLang === 'fr'
                    ? 'Transmettez vos besoins d’approvisionnement, bons de commande ou demandes de consultation. Nos équipes de Kitwe et Ndola vous répondent avec réactivité.'
                    : 'Submit your procurement requests, bulk orders, or technical queries. Our Kitwe and Ndola operations teams will assist promptly.'}
                </p>

                {/* Direct Contacts Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href="tel:+260960641318"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 rounded-[0.25rem] text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f9a825]" />
                    <span>+260 960 641 318</span>
                  </a>
                  <a
                    href="tel:+260766557185"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 rounded-[0.25rem] text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f9a825]" />
                    <span>+260 766 557 185</span>
                  </a>
                  <span className="text-slate-300">
                    contact@globalprecisioninvest.com
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <button
                  onClick={() => onContactSector(currentSector.name)}
                  className="btn-gold w-full py-3.5 px-5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>{currentLang === 'fr' ? 'Formulaire de demande' : 'Submit Direct Inquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/260960641318?text=${encodeURIComponent(
                    `Bonjour GLOBAL PRECISION INVESTMENT, je vous contacte depuis la page : ${currentSector.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-[0.25rem] bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{currentLang === 'fr' ? 'Échanger sur WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switcher to Other Sectors */}
      <section className="py-12 sm:py-16 bg-[#f8f9ff]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#0f2c59]">
              {currentLang === 'fr' ? 'Explorer les autres secteurs' : 'Explore other divisions'}
            </h2>
            <button
              onClick={onBackToHome}
              className="text-xs font-bold text-[#0f2c59] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{currentLang === 'fr' ? 'Retourner à l’accueil' : 'Return to Home'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherSectorIds.map((id) => {
              const other = sectors[id];
              return (
                <div
                  key={id}
                  onClick={() => onSelectSector(id)}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all group flex flex-col sm:flex-row"
                >
                  <div className="sm:w-48 h-36 sm:h-auto shrink-0 relative overflow-hidden bg-slate-200">
                    <img
                      src={other.coverImage}
                      alt={other.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-2.5 left-2.5 p-1.5 bg-[#0f2c59]/90 rounded text-white">
                      {getSectorIcon(id)}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-2 py-0.5 rounded block w-fit mb-1.5">
                        {other.badge}
                      </span>
                      <h3 className="font-display font-bold text-base text-[#0f2c59] group-hover:text-[#f9a825] transition-colors mb-1">
                        {other.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {other.tagline}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0f2c59]">
                      <span>{currentLang === 'fr' ? 'Accéder à la page' : 'Open Page'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#f9a825]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
