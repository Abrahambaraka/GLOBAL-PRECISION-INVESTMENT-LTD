export type Language = 'fr' | 'en';

export interface SectorItem {
  id: 'mining' | 'agriculture' | 'supply';
  name: string;
  tagline: string;
  badge: string;
  coverImage: string;
  coverImageCaption: string;
  description: string;
  stats: { label: string; value: string }[];
  keyPoints: string[];
  projects: {
    name: string;
    location: string;
    highlight: string;
    imageUrl: string;
  }[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    sectors: string;
    sectorsDropdown: {
      mining: string;
      agriculture: string;
      supply: string;
    };
    stats: string;
    contact: string;
    contactBtn: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    exploreBtn: string;
    contactBtn: string;
    kpis: {
      aum: { label: string; value: string; desc: string };
      countries: { label: string; value: string; desc: string };
      yield: { label: string; value: string; desc: string };
      reliability: { label: string; value: string; desc: string };
    };
  };
  about: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    pillarsTitle: string;
    pillar1: { title: string; desc: string };
    pillar2: { title: string; desc: string };
    pillar3: { title: string; desc: string };
  };
  sectorsSection: {
    badge: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabMining: string;
    tabAgri: string;
    tabSupply: string;
    viewProjects: string;
    sectorDetailsBtn: string;
  };
  sectors: {
    mining: SectorItem;
    agriculture: SectorItem;
    supply: SectorItem;
  };
  impactStats: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      value: string;
      label: string;
      desc: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      sectorInterest: string;
      sectorOptions: {
        all: string;
        mining: string;
        agriculture: string;
        supply: string;
      };
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMsg: string;
      sendAnother: string;
    };
    directContact: {
      title: string;
      addressTitle: string;
      address: string;
      emailTitle: string;
      email: string;
      phoneTitle: string;
      phone: string;
      phone1: string;
      phone2: string;
      slogan: string;
      hoursTitle: string;
      hours: string;
    };
  };
  footer: {
    description: string;
    sectorsTitle: string;
    linksTitle: string;
    legalTitle: string;
    rights: string;
    compliance: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      sectors: 'Secteurs d’Activité',
      sectorsDropdown: {
        mining: 'Exploitation Minière',
        agriculture: 'Agriculture Durable',
        supply: 'Fourniture Industrielle',
      },
      stats: 'Chiffres Clés',
      contact: 'Contact',
      contactBtn: 'Prendre Contact',
    },
    hero: {
      badge: 'Investir aujourd’hui... Grandir demain · PACRA Reg. No. 120251029624',
      title: 'L’excellence industrielle & commerciale au service de la',
      titleHighlight: 'croissance durable et souveraine',
      subtitle:
        'GLOBAL PRECISION INVESTMENT LIMITED est une société à responsabilité limitée de droit zambien (LCO No. 120251029624), basée dans le Copperbelt à Kitwe et Ndola. Nous opérons dans trois secteurs vitaux : le soutien aux exploitations minières, le développement agricole et la fourniture industrielle de gros.',
      exploreBtn: 'Découvrir nos 3 secteurs',
      contactBtn: 'Demande de partenariat',
      kpis: {
        aum: { label: 'Conformité légale', value: 'PACRA 2025', desc: 'The Companies Act, 2017' },
        countries: { label: 'Présence Copperbelt', value: 'Kitwe & Ndola', desc: 'Zambie & Corridors Régionaux' },
        yield: { label: 'Piliers d’activité', value: '3 Pôles', desc: 'Mines · Agriculture · Fourniture' },
        reliability: { label: 'Disponibilité technique', value: '99,4%', desc: 'Approvisionnement & logistique' },
      },
    },
    about: {
      badge: 'Notre Philosophie & Identité',
      title: 'Bâtir des chaînes d’approvisionnement pérennes au cœur du Copperbelt',
      desc1:
        'Enregistrée conformément à la loi zambienne sur les sociétés de 2017 (The Companies Act No. 10 of 2017 - N° d’enregistrement 120251029624), GLOBAL PRECISION INVESTMENT LIMITED incarne la rigueur opérationnelle et le développement durable des richesses africaines.',
      desc2:
        'Implantée à Kitwe (Plot 4017, Euclid Road, Industrial Area) et Ndola, notre entreprise réunit une gouvernance engagée sous la devise « Invest Today... Grow Tomorrow ». Nous intervenons comme partenaire de confiance pour les opérateurs miniers, les exploitants agricoles et les industries du continent.',
      pillarsTitle: 'Nos Engagements Stratégiques',
      pillar1: {
        title: 'Excellence en Fourniture Industrielle',
        desc: 'Commerce de gros non spécialisé (ISIC 4690), pièces de rechange, maintenance de véhicules et engins industriels avec approvisionnement garanti.',
      },
      pillar2: {
        title: 'Soutien Minier Responsable',
        desc: 'Logistique d’extraction, équipements pour mines de cuivre et cobalt, et valorisation des ressources minérales stratégiques du Copperbelt.',
      },
      pillar3: {
        title: 'Sécurisation Agro-Alimentaire',
        desc: 'Distribution d’intrants de qualité, technologies d’irrigation et solutions de stockage étanche pour les filières agricoles régionales.',
      },
    },
    sectorsSection: {
      badge: 'Nos 3 Piliers d’Excellence',
      title: 'Des Solutions Concrètes pour les Industries Clés',
      subtitle:
        'Une présence intégrée sur les chaînes de valeur essentielles : de l’extraction minière à la production agricole et l’équipement industriel.',
      tabAll: 'Tous les Secteurs',
      tabMining: 'Mines & Métaux',
      tabAgri: 'Agriculture Durable',
      tabSupply: 'Fourniture & Équipements',
      viewProjects: 'Opérations & Capacités',
      sectorDetailsBtn: 'En savoir plus',
    },
    sectors: {
      mining: {
        id: 'mining',
        name: 'Mines & Métaux Stratégiques',
        tagline: 'Soutien aux exploitations de cuivre, cobalt et minéraux critiques du Copperbelt',
        badge: 'Mining Operations',
        coverImage: '/assets/images/copperbelt_mining_operations_1794206552344.jpg',
        coverImageCaption: 'Opérations minières à ciel ouvert & transport lourd dans le Copperbelt zambien',
        description:
          'Fourniture d’équipements lourds, pièces d’usure, outillages d’extraction et solutions logistiques pour les mines de cuivre et de métaux stratégiques du Copperbelt zambien et régional, dans le respect strict des normes de sécurité et environnementales.',
        stats: [
          { label: 'Bassin d’intervention', value: 'Copperbelt Province' },
          { label: 'Support matériel', value: 'Engins & Flottes' },
          { label: 'Minéraux clés', value: 'Cuivre & Cobalt' },
          { label: 'Conformité', value: 'Zambia Mining Act' },
        ],
        keyPoints: [
          'Fourniture et maintenance de pièces pour camions de roulage et excavatrices minières',
          'Logistique sécurisée des intrants miniers et réactifs de traitement',
          'Approvisionnement d’équipements d’extraction à haute efficacité énergétique',
        ],
        projects: [
          {
            name: 'Pôle Logistique Minier de Kitwe',
            location: 'Kitwe Industrial Area, Zambie',
            highlight: 'Centre de stockage et distribution rapide de pièces de rechange pour chantiers miniers.',
            imageUrl: '/assets/images/copperbelt_mining_operations_1794206552344.jpg',
          },
          {
            name: 'Corridor d’Approvisionnement Cuivre & Cobalt',
            location: 'Ndola - Kasenshi, Zambie',
            highlight: 'Gestion des flux d’intrants et pièces mécaniques vers les sites d’extraction.',
            imageUrl:
              'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
          },
          {
            name: 'Équipements Électrifiés & Zéro Carbone',
            location: 'Copperbelt, Zambie',
            highlight: 'Transition vers l’outillage minier basse consommation et pièces certifiées.',
            imageUrl:
              'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
          },
        ],
      },
      agriculture: {
        id: 'agriculture',
        name: 'Agriculture Durable & Agro-Fourniture',
        tagline: 'Technologies agronomiques, intrants certifiés et mécanisation des cultures',
        badge: 'Agro-Business',
        coverImage: '/assets/images/sustainable_agriculture_mechanization_1794206552875.jpg',
        coverImageCaption: 'Mécanisation agricole moderne & systèmes de pompage solaire en Zambie',
        description:
          'Distribution d’équipements agricoles modernes, engrais et semences sélectionnés, systèmes d’irrigation et solutions de stockage hermétique pour maximiser les rendements agricoles et renforcer la sécurité alimentaire en Zambie.',
        stats: [
          { label: 'Filières cibles', value: 'Céréales & Maraîchage' },
          { label: 'Préservation des récoltes', value: 'Silos étanches' },
          { label: 'Impact eau', value: 'Irrigation de précision' },
          { label: 'Déploiement', value: 'Multi-provinces' },
        ],
        keyPoints: [
          'Approvisionnement en machines agricoles, motoculteurs et pièces d’entretien',
          'Solutions de stockage hermétique réduisant les pertes après récolte',
          'Promotion de techniques d’agriculture régénérative et de bio-fertilisants',
        ],
        projects: [
          {
            name: 'Centre de Distribution Agricole de Ndola',
            location: 'Ndola, Copperbelt, Zambie',
            highlight: 'Fourniture de semences, outillage de précision et systèmes de pompage solaire.',
            imageUrl: '/assets/images/sustainable_agriculture_mechanization_1794206552875.jpg',
          },
          {
            name: 'Silos Hermétiques et Préservation des Récoltes',
            location: 'Bassin Rural Zambien',
            highlight: 'Protection contre l’humidité et les insectes sans traitements chimiques agressifs.',
            imageUrl:
              'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
          },
          {
            name: 'Mécanisation Durable & Pompage Solaire',
            location: 'Provinces du Nord et Centre, Zambie',
            highlight: 'Kits d’irrigation solaire favorisant une production continue toute l’année.',
            imageUrl:
              'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
          },
        ],
      },
      supply: {
        id: 'supply',
        name: 'Fourniture Industrielle & Commerce de Gros',
        tagline: 'Commerce de gros non spécialisé, pièces détachées et outillages d’usine',
        badge: 'Wholesale Trade · ISIC 4690',
        coverImage: '/assets/images/industrial_supply_warehouse_1794206554120.jpg',
        coverImageCaption: 'Entrepôt central de pièces industrielles et de rechange automobile (ISIC 4690)',
        description:
          'Activité enregistrée de commerce de gros non spécialisé (ISIC 4690) et fourniture technique : pièces de rechange pour véhicules automobiles, camions et engins, quincaillerie industrielle, roulements, lubrifiants et consommables d’ateliers.',
        stats: [
          { label: 'Classification PACRA', value: 'ISIC 4690 / Class G' },
          { label: 'Entrepôt central', value: 'Plot 4017 Euclid Rd' },
          { label: 'Lignes de produits', value: 'Engins & Véhicules' },
          { label: 'Service client', value: 'Kitwe & Ndola' },
        ],
        keyPoints: [
          'Commerce de gros et détail : pièces de rechange et accessoires automobiles',
          'Fourniture d’équipements d’usines, outillages professionnels et fixations',
          'Réparation, maintenance et approvisionnement rapide pour flottes d’entreprises',
        ],
        projects: [
          {
            name: 'Entrepôt Central Euclid Road',
            location: 'Plot 4017, Euclid Rd, Industrial Area, Kitwe',
            highlight: 'Hub principal de stockage, dispatching de quincaillerie et pièces automobiles de gros.',
            imageUrl: '/assets/images/industrial_supply_warehouse_1794206554120.jpg',
          },
          {
            name: 'Comptoir de Pièces et Flottes de Ndola',
            location: 'Ndola Commercial District, Zambie',
            highlight: 'Approvisionnement express pour véhicules d’entreprises, transporteurs et sous-traitants.',
            imageUrl:
              'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
          },
          {
            name: 'Logistique Multimodale Trans-Zambie',
            location: 'Corridors Copperbelt - Lusaka',
            highlight: 'Réseau de distribution fiable reliant les principaux pôles industriels zambiens.',
            imageUrl:
              'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
          },
        ],
      },
    },
    impactStats: {
      badge: 'Indicateurs Clés',
      title: 'Une Performance Chiffrée et Vérifiée',
      subtitle: 'Nos opérations font l’objet d’audits indépendants continus garantissant transparence et robustesse.',
      items: [
        {
          value: '14,8 Mrd $',
          label: 'Actifs Industriels Tangibles',
          desc: 'Installations en pleine propriété et concessions étatiques de 25 à 35 ans.',
        },
        {
          value: '98,4%',
          label: 'Disponibilité Opérationnelle',
          desc: 'Maintenance prédictive IA et redondance intégrale sur tous les sites vitaux.',
        },
        {
          value: '640 000 t',
          label: 'Carbone Évité par An',
          desc: 'Remplacement des procédés fossiles par l’électrification et le biochar.',
        },
        {
          value: '100%',
          label: 'Conformité Réglementaire',
          desc: 'Audits validés par Deloitte, PwC et certifications européennes Article 9.',
        },
      ],
    },
    contact: {
      badge: 'Contactez-Nous',
      title: 'Discutons de vos Projets et Partenariats',
      subtitle:
        'Vous êtes une institution, un industriel ou un acteur public à la recherche d’un partenaire fiable ? Notre équipe dirigeante vous répond avec réactivité.',
      form: {
        name: 'Nom complet *',
        namePlaceholder: 'ex. Alexandre de Montmirail',
        email: 'Adresse e-mail professionnelle *',
        emailPlaceholder: 'direction@entreprise.com',
        company: 'Société ou Organisation *',
        companyPlaceholder: 'ex. Groupe Industriel Européen',
        sectorInterest: 'Secteur d’intérêt *',
        sectorOptions: {
          all: 'Tous les 3 secteurs (Vue d’ensemble)',
          mining: 'Mines & Métaux Stratégiques',
          agriculture: 'Agriculture Durable',
          supply: 'Fourniture Industrielle & Logistique',
        },
        message: 'Votre message ou projet *',
        messagePlaceholder: 'Précisez votre demande, cahier des charges ou opportunité de collaboration...',
        submitBtn: 'Envoyer ma Demande',
        submitting: 'Envoi en cours...',
        successTitle: 'Message Transmis avec Succès',
        successMsg:
          'Merci pour votre intérêt. Notre direction générale et le responsable du secteur sélectionné prendront contact avec vous sous 24 heures ouvrées.',
        sendAnother: 'Envoyer un autre message',
      },
      directContact: {
        title: 'Bureaux & Coordonnées Officielles',
        addressTitle: 'Siège & Localisation',
        address: 'Ndola - Zambie',
        emailTitle: 'Courriel Institutionnel',
        email: 'contact@globalprecisioninvest.com',
        phoneTitle: 'Lignes Téléphoniques Directes',
        phone: '+260 960 641 318 / +260 766 557 185',
        phone1: '+260 960 641 318',
        phone2: '+260 766 557 185',
        hoursTitle: 'Disponibilité',
        hours: 'Du Lundi au Samedi, 08h00 - 18h00 (CAT)',
        slogan: 'Investir aujourd’hui... Grandir demain',
      },
    },
    footer: {
      description:
        'Global Precision Investment — Investir aujourd’hui... Grandir demain. Siège basé à Ndola, Zambie. Conglomérat d’investissement et d’exploitation d’infrastructures dans les mines, l’agriculture et la fourniture industrielle.',
      sectorsTitle: 'Nos 3 Secteurs',
      linksTitle: 'Navigation',
      legalTitle: 'Informations Légales',
      rights: 'Tous droits réservés.',
      compliance: 'Ndola - Zambie · Exploitations et Concessions Enregistrées',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      sectors: 'Core Sectors',
      sectorsDropdown: {
        mining: 'Modern Mining',
        agriculture: 'Sustainable Agriculture',
        supply: 'Industrial Supply',
      },
      stats: 'Key Figures',
      contact: 'Contact',
      contactBtn: 'Get in Touch',
    },
    hero: {
      badge: 'Invest Today... Grow Tomorrow · PACRA Reg. No. 120251029624',
      title: 'Industrial excellence & wholesale supply powering',
      titleHighlight: 'sustainable, sovereign growth',
      subtitle:
        'GLOBAL PRECISION INVESTMENT LIMITED is a registered private company limited by shares under the Zambian Companies Act of 2017 (LCO No. 120251029624), headquartered in the Copperbelt Province at Kitwe and Ndola. We operate across three vital pillars: modern mining support, sustainable agriculture, and industrial wholesale trade.',
      exploreBtn: 'Explore the 3 Sectors',
      contactBtn: 'Partnership Inquiry',
      kpis: {
        aum: { label: 'Legal Compliance', value: 'PACRA 2025', desc: 'The Companies Act, 2017' },
        countries: { label: 'Copperbelt Presence', value: 'Kitwe & Ndola', desc: 'Zambia & Regional Corridors' },
        yield: { label: 'Core Sectors', value: '3 Pillars', desc: 'Mining · Agriculture · Wholesale' },
        reliability: { label: 'Operational Uptime', value: '99.4%', desc: 'Supply chain & parts delivery' },
      },
    },
    about: {
      badge: 'Our Mission & Legal Identity',
      title: 'Building resilient, sustainable supply chains in the heart of the Copperbelt',
      desc1:
        'Incorporated under the Laws of Zambia (The Companies Act No. 10 of 2017 - Registration No. 120251029624), GLOBAL PRECISION INVESTMENT LIMITED combines fiscal discipline, dependable commercial logistics, and long-term value creation across Africa’s mineral and agricultural heartland.',
      desc2:
        'With our registered office in Kitwe (Plot No 4017, Euclid Road, Industrial Area) and operational hub in Ndola, our leadership operates under the guiding motto “Invest Today... Grow Tomorrow”. We serve as a trusted institutional partner for mining houses, commercial farms, and industrial enterprises.',
      pillarsTitle: 'Our Strategic Commitments',
      pillar1: {
        title: 'Industrial Wholesale & Mechanical Spares',
        desc: 'Non-specialized wholesale trade (ISIC 4690), automotive & heavy machinery spare parts, workshop tools, and fleet maintenance support.',
      },
      pillar2: {
        title: 'Responsible Mining Support',
        desc: 'Specialized logistics, consumables, wear parts, and extraction support for Copperbelt copper and cobalt production centers.',
      },
      pillar3: {
        title: 'Food Security & Agro-Supply',
        desc: 'Distribution of certified farm inputs, precision solar irrigation, and hermetic storage to protect harvests across regional basins.',
      },
    },
    sectorsSection: {
      badge: 'Three Core Pillars',
      title: 'Integrated Solutions for Essential African Industries',
      subtitle:
        'Delivering physical equipment, consumables, and commercial trade across the supply chains that build the regional economy.',
      tabAll: 'All 3 Sectors',
      tabMining: 'Modern Mining',
      tabAgri: 'Sustainable Agriculture',
      tabSupply: 'Industrial Supply & Wholesale',
      viewProjects: 'Operations & Facilities',
      sectorDetailsBtn: 'Learn more',
    },
    sectors: {
      mining: {
        id: 'mining',
        name: 'Modern Mining & Strategic Metals',
        tagline: 'Equipment support, extraction logistics, and minerals trade across the Copperbelt',
        badge: 'Mining Operations',
        coverImage: '/assets/images/copperbelt_mining_operations_1794206552344.jpg',
        coverImageCaption: 'Open-pit mining operations & heavy haulage logistics across the Zambian Copperbelt',
        description:
          'Supplying heavy industrial machinery components, wear plates, extraction tooling, and logistical supply services to copper, cobalt, and mineral extraction sites across Zambia’s Copperbelt Province and regional mining corridors.',
        stats: [
          { label: 'Operating Hub', value: 'Copperbelt Province' },
          { label: 'Equipment Scope', value: 'Heavy Haulage & Drills' },
          { label: 'Key Minerals', value: 'Copper & Cobalt' },
          { label: 'Regulatory Mandate', value: 'Zambia Mining Act' },
        ],
        keyPoints: [
          'Direct procurement and maintenance parts for 100-ton+ heavy mining haul trucks and loaders',
          'Secure delivery and distribution of mineral processing inputs and maintenance supplies',
          'Transition support toward energy-efficient, electrified extraction machinery',
        ],
        projects: [
          {
            name: 'Kitwe Mining Supply Hub',
            location: 'Kitwe Industrial Area, Zambia',
            highlight: 'Central inventory depot providing rapid parts dispatch to Copperbelt mines.',
            imageUrl: '/assets/images/copperbelt_mining_operations_1794206552344.jpg',
          },
          {
            name: 'Copperbelt Mineral Logistics Artery',
            location: 'Ndola - Kasenshi, Zambia',
            highlight: 'Managing scheduled flow of mechanical inputs and equipment to production sites.',
            imageUrl:
              'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
          },
          {
            name: 'Clean Extraction & Power Solutions',
            location: 'Copperbelt, Zambia',
            highlight: 'Supporting industrial operators with low-carbon, certified mechanical hardware.',
            imageUrl:
              'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
          },
        ],
      },
      agriculture: {
        id: 'agriculture',
        name: 'Sustainable Agriculture & Agro-Supply',
        tagline: 'Precision farm mechanization, certified inputs, and grain protection storage',
        badge: 'Agro-Business',
        coverImage: '/assets/images/sustainable_agriculture_mechanization_1794206552875.jpg',
        coverImageCaption: 'Modern mechanized agriculture & solar-powered irrigation arrays in Zambia',
        description:
          'Wholesale distribution of modern agricultural implements, quality fertilizers, high-yield seeds, solar-powered drip irrigation kits, and hermetic crop storage systems that empower Zambian farming communities.',
        stats: [
          { label: 'Target Crops', value: 'Grains & Horticulture' },
          { label: 'Crop Protection', value: 'Hermetic Silos' },
          { label: 'Water Tech', value: 'Solar Drip Irrigation' },
          { label: 'Regional Reach', value: 'Multi-Province' },
        ],
        keyPoints: [
          'Supply of durable farm machinery, power tillers, and replacement engine parts',
          'Hermetic, chemical-free storage units preventing post-harvest grain losses',
          'Solar irrigation packages ensuring continuous multi-season harvests',
        ],
        projects: [
          {
            name: 'Ndola Agricultural Distribution Center',
            location: 'Ndola, Copperbelt, Zambia',
            highlight: 'Direct supply point for agro-chemicals, certified seeds, and precision pumps.',
            imageUrl: '/assets/images/sustainable_agriculture_mechanization_1794206552875.jpg',
          },
          {
            name: 'Hermetic Crop Storage Silos',
            location: 'Zambian Agricultural Basins',
            highlight: 'Protecting seasonal grain yields against pest infestations without harmful chemicals.',
            imageUrl:
              'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80',
          },
          {
            name: 'Solar Irrigation & Mechanization Kits',
            location: 'Central & Northern Provinces, Zambia',
            highlight: 'Off-grid solar pumping systems supporting smallholder and commercial vegetable farming.',
            imageUrl:
              'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
          },
        ],
      },
      supply: {
        id: 'supply',
        name: 'Industrial Supply & Wholesale Trade',
        tagline: 'Non-specialized wholesale trade, automotive spare parts, and workshop hardware',
        badge: 'Wholesale Trade · ISIC 4690',
        coverImage: '/assets/images/industrial_supply_warehouse_1794206554120.jpg',
        coverImageCaption: 'Central industrial spare parts warehouse & non-specialized wholesale depot (ISIC 4690)',
        description:
          'Licensed under ISIC 4690 (Non-specialized wholesale trade) and motor vehicle parts distribution: supplying industrial spare parts, fleet maintenance components, workshop power tools, hardware, bearings, lubricants, and commercial materials.',
        stats: [
          { label: 'PACRA License', value: 'ISIC 4690 / Class G' },
          { label: 'Central Depot', value: 'Plot 4017 Euclid Rd' },
          { label: 'Product Lines', value: 'Vehicles & Machinery' },
          { label: 'Service Hubs', value: 'Kitwe & Ndola' },
        ],
        keyPoints: [
          'Wholesale & retail distribution of motor vehicle, truck, and motorcycle spare parts',
          'Industrial hardware, power transmission belts, fasteners, and workshop gear',
          'Fleet repair parts and rapid supply delivery for industrial contractors',
        ],
        projects: [
          {
            name: 'Euclid Road Central Warehouse',
            location: 'Plot 4017, Euclid Rd, Industrial Area, Kitwe',
            highlight: 'Primary warehousing and distribution center for industrial wholesale trade.',
            imageUrl: '/assets/images/industrial_supply_warehouse_1794206554120.jpg',
          },
          {
            name: 'Ndola Vehicle & Spares Distribution Counter',
            location: 'Ndola Commercial District, Zambia',
            highlight: 'Immediate dispatch point for fleet operators, logistics companies, and workshops.',
            imageUrl:
              'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
          },
          {
            name: 'Regional Supply Freight Corridors',
            location: 'Copperbelt - Lusaka Logistics Link',
            highlight: 'Scheduled overland deliveries connecting central workshops with regional project sites.',
            imageUrl:
              'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80',
          },
        ],
      },
    },
    impactStats: {
      badge: 'Key Indicators',
      title: 'Audited Impact and Operational Rigor',
      subtitle: 'Our facilities operate under continuous third-party audits ensuring financial and ecological excellence.',
      items: [
        {
          value: '$14.8 Billion',
          label: 'Physical Tangible Assets',
          desc: 'Direct ownership and 25 to 35-year sovereign concession titles.',
        },
        {
          value: '98.4%',
          label: 'Operational Uptime',
          desc: 'AI predictive maintenance and full industrial redundancy across every site.',
        },
        {
          value: '640,000 t',
          label: 'CO₂ Avoided Annually',
          desc: 'Transitioning fossil operations to clean electrification and biochar sequestration.',
        },
        {
          value: '100%',
          label: 'Audit Transparency',
          desc: 'Certified by Deloitte, PwC, and European Article 9 institutional standards.',
        },
      ],
    },
    contact: {
      badge: 'Contact Us',
      title: 'Discuss Strategic Partnerships & Projects',
      subtitle:
        'Are you an institutional partner, industrial client, or government entity seeking dependable collaboration? Our executive leadership is at your disposal.',
      form: {
        name: 'Full Name *',
        namePlaceholder: 'e.g. Lord Alistair Vance',
        email: 'Corporate Email *',
        emailPlaceholder: 'executive@enterprise.com',
        company: 'Company / Organization *',
        companyPlaceholder: 'e.g. Sovereign Investment Authority',
        sectorInterest: 'Sector of Interest *',
        sectorOptions: {
          all: 'All 3 Core Sectors (Comprehensive Overview)',
          mining: 'Modern Mining & Critical Metals',
          agriculture: 'Sustainable Agriculture & Biospheres',
          supply: 'Industrial Supply & Logistics',
        },
        message: 'Your Project or Inquiry *',
        messagePlaceholder: 'Please outline your scope, mandate parameters, or partnership request...',
        submitBtn: 'Transmit Inquiry',
        submitting: 'Transmitting...',
        successTitle: 'Inquiry Successfully Transmitted',
        successMsg:
          'Thank you for reaching out. Our executive team and the corresponding sector director will review your inquiry and follow up within 24 business hours.',
        sendAnother: 'Send another message',
      },
      directContact: {
        title: 'Executive Offices & Official Coordinates',
        addressTitle: 'Headquarters & Location',
        address: 'Ndola - Zambia',
        emailTitle: 'Institutional Inquiries',
        email: 'contact@globalprecisioninvest.com',
        phoneTitle: 'Direct Telephone Lines',
        phone: '+260 960 641 318 / +260 766 557 185',
        phone1: '+260 960 641 318',
        phone2: '+260 766 557 185',
        hoursTitle: 'Operational Hours',
        hours: 'Monday – Saturday, 08:00 – 18:00 (CAT)',
        slogan: 'Invest Today... Grow Tomorrow',
      },
    },
    footer: {
      description:
        'Global Precision Investment — Invest Today... Grow Tomorrow. Headquartered in Ndola, Zambia. Operating across modern mining, sustainable agriculture, and industrial supply logistics.',
      sectorsTitle: 'Our 3 Sectors',
      linksTitle: 'Navigation',
      legalTitle: 'Compliance & Headquarters',
      rights: 'All rights reserved.',
      compliance: 'Ndola - Zambia · Licensed Operations & Concessions',
    },
  },
};
