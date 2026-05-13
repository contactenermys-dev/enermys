export type Service = {
  slug: string
  title: string
  shortDesc: string
  description: string
  icon: string
  features: string[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: "demantelement-gnc",
    title: "Démantèlement de stations GNC",
    shortDesc: "Opérations de démantèlement sécurisées et conformes, réalisées avec précision et exigence.",
    description:
      "ENERMYS est spécialisé dans le démantèlement complet ou partiel de stations GNC (Gaz Naturel Comprimé). Nous prenons en charge l'ensemble des opérations : retrait des équipements sous pression, dépose des compresseurs et tuyauteries, dépollution du site et remise en conformité. Chaque intervention est réalisée dans le strict respect des réglementations ICPE et des normes de sécurité en vigueur.",
    icon: "Settings",
    features: [
      "Démantèlement complet de stations GNC",
      "Dépose de compresseurs et équipements sous pression",
      "Retrait de tuyauteries et raccordements GNC",
      "Dépollution et décontamination de site",
      "Gestion et traçabilité des déchets industriels",
      "Remise en état conforme aux normes ICPE",
    ],
    metaTitle: "Démantèlement Stations GNC | ENERMYS — Spécialiste Oil & Gas",
    metaDescription:
      "ENERMYS réalise le démantèlement de stations GNC : dépose d'équipements, dépollution, remise en état. Conformité ICPE garantie. Devis gratuit.",
    keywords: ["démantèlement GNC", "station GNC", "décommissionnement", "dépollution site industriel", "ICPE"],
  },
  {
    slug: "terrassement-vrd",
    title: "Terrassement & VRD",
    shortDesc: "Des bases parfaitement préparées pour des projets fiables et pérennes.",
    description:
      "ENERMYS réalise vos travaux de terrassement et de voirie réseaux divers (VRD) sur des sites industriels, pétroliers et énergétiques. Tranchées, fouilles, compactage, réseaux enterrés… Nos équipes disposent du matériel adapté pour intervenir dans des environnements contraints, avec un niveau d'exigence technique conforme aux cahiers des charges les plus stricts.",
    icon: "Mountain",
    features: [
      "Terrassement et fouilles sur sites industriels",
      "Création et reprise de voirie industrielle",
      "Pose de réseaux enterrés (gaz, eau, électricité)",
      "Compactage et préparation de plateformes",
      "Tranchées et caniveaux techniques",
      "Remise en état des surfaces après travaux",
    ],
    metaTitle: "Terrassement & VRD Industriel | ENERMYS",
    metaDescription:
      "ENERMYS réalise vos travaux de terrassement et VRD sur sites industriels. Matériel adapté, équipes qualifiées. Devis gratuit.",
    keywords: ["terrassement industriel", "VRD", "fouilles", "réseaux enterrés", "voirie industrielle"],
  },
  {
    slug: "transport-industriel",
    title: "Transport d'équipements industriels",
    shortDesc: "Acheminement de matériels lourds et sensibles sur le territoire national et à l'international.",
    description:
      "ENERMYS assure le transport et la manutention d'équipements industriels lourds et encombrants : modules, compresseurs, cuves, transformateurs, structures métalliques. Nous coordonnons l'ensemble de la chaîne logistique, du levage à la livraison sur site, en France et à l'international, avec les autorisations de transport exceptionnel requises.",
    icon: "Truck",
    features: [
      "Transport d'équipements lourds et hors-gabarit",
      "Levage et manutention industrielle",
      "Convois exceptionnels nationaux et internationaux",
      "Arrimage et sécurisation des chargements",
      "Coordination logistique complète",
      "Suivi en temps réel des acheminements",
    ],
    metaTitle: "Transport Équipements Industriels | ENERMYS — Logistique Lourde",
    metaDescription:
      "Transport d'équipements industriels lourds par ENERMYS. Convois exceptionnels, levage, manutention. National et international. Devis gratuit.",
    keywords: ["transport industriel", "convoi exceptionnel", "levage industriel", "manutention lourde", "équipements Oil & Gas"],
  },
  {
    slug: "remise-en-etat",
    title: "Travaux de remise en état de site",
    shortDesc: "Sites industriels remis en état, nettoyés et rendus conformes après démantèlement.",
    description:
      "Après un démantèlement ou une intervention industrielle, ENERMYS prend en charge la remise en état complète de votre site : déblaiement, nettoyage, traitement des sols, nivellement et réhabilitation. Nous restituons des espaces propres, sécurisés et conformes aux exigences réglementaires, prêts pour une nouvelle affectation ou une restitution au propriétaire.",
    icon: "RefreshCw",
    features: [
      "Déblaiement et évacuation de gravats industriels",
      "Nettoyage et décontamination de surfaces",
      "Traitement et réhabilitation des sols pollués",
      "Nivellement et remise en forme de terrain",
      "Clôtures, accès et sécurisation de site",
      "Dossier de récolement et conformité réglementaire",
    ],
    metaTitle: "Remise en État de Site Industriel | ENERMYS",
    metaDescription:
      "ENERMYS remet en état vos sites industriels après démantèlement : nettoyage, décontamination, nivellement. Conformité garantie. Devis gratuit.",
    keywords: ["remise en état site", "réhabilitation industrielle", "décontamination sol", "nettoyage industriel"],
  },
  {
    slug: "accompagnement-coordination",
    title: "Accompagnement & Coordination",
    shortDesc: "Un suivi clair et structuré, du premier contact à la livraison.",
    description:
      "ENERMYS vous accompagne à chaque étape de vos projets industriels : analyse des contraintes, planification des interventions, coordination des prestataires, suivi HSE et reporting complet. Un chef de projet dédié coordonne toutes les parties prenantes pour garantir une exécution fluide, dans les délais et les budgets convenus.",
    icon: "Users",
    features: [
      "Chef de projet dédié sur toute la durée",
      "Analyse des contraintes techniques et réglementaires",
      "Planification et ordonnancement des travaux",
      "Coordination des sous-traitants et prestataires",
      "Suivi HSE et reporting documenté",
      "Réception et dossier de clôture de chantier",
    ],
    metaTitle: "Accompagnement & Coordination de Projets Industriels | ENERMYS",
    metaDescription:
      "ENERMYS coordonne vos projets industriels de A à Z : planification, HSE, reporting. Un interlocuteur unique du début à la fin.",
    keywords: ["coordination projet industriel", "HSE", "chef de projet", "suivi chantier industriel"],
  },
]

export type Testimonial = {
  name: string
  city: string
  rating: number
  comment: string
  service: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Responsable Exploitation",
    city: "ENGIE",
    rating: 5,
    comment:
      "Nous avons fait appel à ENERMYS pour des opérations de démantèlement de stations GNC, et le résultat a été à la hauteur de nos attentes. Le chantier a été mené avec rigueur, une excellente organisation et un vrai souci du détail. Une entreprise fiable, professionnelle et engagée, que je recommande sans hésitation.",
    service: "Démantèlement GNC",
    date: "Janvier 2025",
  },
  {
    name: "Directeur Travaux",
    city: "Groupe pétrolier — Normandie",
    rating: 5,
    comment:
      "Intervention rapide et très professionnelle pour la remise en état de notre site après démantèlement. ENERMYS a respecté à la lettre notre cahier des charges HSE et a livré un site parfaitement propre et conforme. Excellent partenaire pour nos projets industriels.",
    service: "Remise en état de site",
    date: "Novembre 2024",
  },
  {
    name: "Responsable Logistique",
    city: "Groupe industriel — Île-de-France",
    rating: 5,
    comment:
      "Transport d'équipements lourds géré avec une précision remarquable. Le convoi exceptionnel a été parfaitement coordonné, les délais respectés et la communication irréprochable tout au long de l'opération. Je referai appel à ENERMYS sans hésitation.",
    service: "Transport industriel",
    date: "Septembre 2024",
  },
  {
    name: "Chef de Projet",
    city: "Bureau d'études énergie — Lyon",
    rating: 5,
    comment:
      "Terrassement et VRD réalisés sur un site contraignant, avec des délais serrés. L'équipe ENERMYS a fait preuve d'un professionnalisme exemplaire : organisation solide, matériel adapté, communication proactive. Le chantier a été livré dans les temps et dans les règles de l'art.",
    service: "Terrassement & VRD",
    date: "Juillet 2024",
  },
]

export type Stat = {
  value: number
  suffix: string
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Projets industriels",
    description: "Stations GNC, terrassement et transports réalisés en France et à l'international",
  },
  {
    value: 10,
    suffix: " ans",
    label: "D'expertise",
    description: "Une maîtrise technique forgée sur des chantiers industriels exigeants",
  },
  {
    value: 98,
    suffix: "%",
    label: "Délais respectés",
    description: "Une planification rigoureuse pour des chantiers livrés dans les temps",
  },
  {
    value: 100,
    suffix: "%",
    label: "Conformité garantie",
    description: "Interventions conformes aux réglementations et normes industrielles en vigueur",
  },
]

export type Project = {
  id: number
  index?: string
  title: string
  category: string
  location: string
  year: number
  description: string
  shortDesc?: string
  paragraph1?: string
  paragraph2?: string
  tags?: string[]
  cards?: Array<{ subtitle: string; gradient: string }>
}

export const projects: Project[] = [
  {
    id: 1,
    index: '(01)',
    title: 'Démantèlement station GNC — Dépôt Paris Propreté',
    category: 'Démantèlement GNC',
    location: 'Ivry-sur-Seine — 39 rue Bruneseau (94)',
    year: 2026,
    shortDesc: 'Démantèlement complet de la station GNC du dépôt de véhicules de collecte Paris Propreté à Ivry-sur-Seine — pour le compte de la Ville de Paris.',
    paragraph1: "En avril 2026, ENERMYS est intervenu au 39 rue Bruneseau à Ivry-sur-Seine, sur le dépôt de la Direction de la Propreté et de l\'Eau de la Ville de Paris. Ce site abrite la flotte de camions de collecte GNC de Paris Propreté. ENERMYS a réalisé le démantèlement complet de la station de compression GNC : déconnexion, dépose des compresseurs haute pression et évacuation de l\'ensemble des équipements par camion grue, en site pleinement occupé par les véhicules en rotation.",
    paragraph2: "Le chantier s\'est déroulé avec une contrainte forte : le dépôt restait en activité pendant l\'intervention, avec des camions benne entrant et sortant en continu. ENERMYS a assuré la sécurisation du périmètre, la coordination des accès et le respect strict des horaires pour ne pas perturber l\'exploitation. Résultat : une opération menée dans les temps, sans incident, pour le compte d\'un donneur d\'ordre public exigeant.",
    tags: ['Démantèlement', 'GNC', 'Ville de Paris', '#2026'],
    cards: [
      { subtitle: 'Dépose compresseur GNC haute pression', gradient: 'from-slate-700 via-slate-600 to-slate-700' },
      { subtitle: 'Levage et chargement sur camion plateau', gradient: 'from-slate-600 via-slate-700 to-slate-600' },
      { subtitle: 'Évacuation du site — vue générale', gradient: 'from-slate-700 to-slate-600' },
    ],
  },
  {
    id: 2,
    index: '(02)',
    title: 'Démantèlement & Transport — Marché MIN Strasbourg',
    category: 'Démantèlement GNC',
    location: 'Strasbourg (67) → Paris',
    year: 2025,
    shortDesc: 'Dépose d\'un compresseur GNC de 19 tonnes et transport d\'équipements — Marché d\'Intérêt National de Strasbourg, convoi exceptionnel.',
    paragraph1: "ENERMYS est intervenu sur le site du Marché d\'Intérêt National (MIN) de Strasbourg pour réaliser le démantèlement d\'une station GNC. La mission comprenait la dépose d\'un compresseur de 19 tonnes, le démontage des aéroréfrigérants et des équipements associés. L\'opération a nécessité la mobilisation d\'une grue mobile pour le levage et le chargement des équipements sur camion plateau, avec classement en convoi exceptionnel pour l\'acheminement.",
    paragraph2: "Une partie des équipements a été transportée jusqu\'à Paris dans le cadre d\'une logistique multi-sites coordonnée par ENERMYS. L\'ensemble du chantier — de la déconnexion à la livraison finale — a été mené avec rigueur, dans le respect des délais et des contraintes propres à un site alimentaire en exploitation.",
    tags: ['Démantèlement', 'GNC', 'Convoi exceptionnel', '#2025'],
    cards: [
      { subtitle: 'Convoi exceptionnel — compresseur 19T en transit', gradient: 'from-zinc-700 via-zinc-600 to-zinc-700' },
      { subtitle: 'Levage par grue mobile', gradient: 'from-zinc-600 via-zinc-700 to-zinc-600' },
      { subtitle: 'Station GNC MIN Strasbourg avant dépose', gradient: 'from-zinc-700 to-zinc-600' },
    ],
  },
  {
    id: 3,
    title: "Terrassement plateforme industrielle",
    category: "Terrassement & VRD",
    location: "Hauts-de-France",
    year: 2024,
    description: "Terrassement et création d'une plateforme de 5 000 m² pour installation d'équipements lourds. Compactage et réseaux VRD.",
  },
  {
    id: 4,
    title: "Remise en état site pétrolier",
    category: "Remise en état de site",
    location: "Île-de-France",
    year: 2024,
    description: "Réhabilitation complète d'un site pétrolier après démantèlement : décontamination des sols, nivellement et clôtures.",
  },
  {
    id: 5,
    title: "Coordination multi-chantiers GNC",
    category: "Accompagnement & Coordination",
    location: "France nationale",
    year: 2023,
    description: "Coordination simultanée de 4 chantiers de démantèlement GNC sur le territoire national pour un grand compte énergétique.",
  },
  {
    id: 6,
    title: "Démantèlement partiel station GNV",
    category: "Démantèlement GNC",
    location: "Occitanie",
    year: 2023,
    description: "Retrait partiel d'équipements sur station GNV en activité : intervention sécurisée sans interruption de service.",
  },
]

export type FeaturedProject = {
  id: number
  index: string
  title: string
  category: string
  location: string
  year: number
  shortDesc: string
  paragraph1: string
  paragraph2: string
  tags: string[]
  cards: Array<{ subtitle: string; gradient: string }>
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    index: '(01)',
    title: 'Démantèlement station GNC — Ivry-sur-Seine',
    category: 'Démantèlement GNC',
    location: 'Ivry-sur-Seine (94)',
    year: 2026,
    shortDesc: 'Démantèlement complet de la station GNC du 39 rue Bruneseau, mandaté par la Mairie de Paris — dépose des compresseurs, levage et évacuation des équipements.',
    paragraph1: "En avril 2026, ENERMYS a réalisé le démantèlement complet de la station GNC située au 39 rue Bruneseau à Ivry-sur-Seine, pour le compte de la Mairie de Paris. Le chantier comprenait la déconnexion et la dépose des compresseurs haute pression, le démontage des équipements associés et leur évacuation par camion grue depuis le site, en milieu urbain contraint.",
    paragraph2: "L'ensemble de l'opération a été conduit avec rigueur : sécurisation du périmètre, intervention en horaires adaptés pour minimiser les nuisances, et coordination avec les équipes de la Ville de Paris. Le matériel a été chargé et acheminé dans les délais convenus, sans incident. Une réalisation qui illustre notre capacité à intervenir en environnement urbain sensible, pour des donneurs d'ordre publics.",
    tags: ['Démantèlement', 'GNC', 'Mairie de Paris', '#2026'],
    cards: [
      { subtitle: 'Dépose compresseur GNC haute pression', gradient: 'from-slate-700 via-slate-600 to-slate-700' },
      { subtitle: 'Levage et chargement sur camion plateau', gradient: 'from-slate-600 via-slate-700 to-slate-600' },
      { subtitle: 'Évacuation du site — vue générale chantier', gradient: 'from-slate-700 to-slate-600' },
    ],
  },
  {
    id: 2,
    index: '(02)',
    title: 'Transport convoi exceptionnel — module 180 t',
    category: 'Transport industriel',
    location: 'Pays-Bas → France',
    year: 2024,
    shortDesc: 'Acheminement d\'un module process de 180 tonnes depuis Rotterdam jusqu\'au site client — coordination douanière et escorte complète.',
    paragraph1: "ENERMYS a coordonné le transport international d'un module process de 180 tonnes depuis le port de Rotterdam jusqu'au site d'installation en France. L'opération a nécessité la mise en place d'un convoi exceptionnel de catégorie 3, avec escorte de sécurité, autorisations douanières et coordination avec les autorités routières françaises et néerlandaises.",
    paragraph2: "Le levage et le positionnement précis du module sur sa fondation ont été réalisés par nos équipes à l'arrivée sur site, avec une grue de 500 tonnes. L'ensemble de l'opération, de la préparation documentaire à la mise en place finale, a été géré par un chef de projet ENERMYS dédié. Livraison dans les délais, sans dommage.",
    tags: ['Transport', 'Convoi exceptionnel', 'International', '#2024'],
    cards: [
      { subtitle: 'Module en cours de chargement — Rotterdam', gradient: 'from-zinc-700 via-zinc-600 to-zinc-700' },
      { subtitle: 'Convoi exceptionnel en transit', gradient: 'from-zinc-600 via-zinc-700 to-zinc-600' },
      { subtitle: 'Mise en place sur fondation — site client', gradient: 'from-zinc-700 to-zinc-600' },
    ],
  },
  {
    id: 3,
    index: '(03)',
    title: 'Terrassement plateforme industrielle 5 000 m²',
    category: 'Terrassement & VRD',
    location: 'Hauts-de-France',
    year: 2024,
    shortDesc: 'Terrassement et création d\'une plateforme industrielle de 5 000 m² avec réseaux VRD — livraison clé en main.',
    paragraph1: "Ce chantier de terrassement dans les Hauts-de-France consistait en la création d'une plateforme industrielle de 5 000 m² destinée à accueillir de nouveaux équipements lourds. ENERMYS a réalisé les travaux de décapage, d'excavation et de compactage en plusieurs phases, en respectant les contraintes géotechniques identifiées lors de l'étude de sol préalable.",
    paragraph2: "Les réseaux VRD (gaz, eau industrielle, électricité, eaux pluviales) ont été créés et raccordés simultanément aux travaux de plateforme pour optimiser les délais. La livraison a été effectuée clé en main, avec la mise à disposition du dossier de récolement complet. Le chantier a été réalisé en site occupé, sans perturbation des activités voisines.",
    tags: ['Terrassement', 'VRD', 'Plateforme industrielle', '#2024'],
    cards: [
      { subtitle: 'Phase décapage — vue aérienne', gradient: 'from-amber-900 via-stone-700 to-stone-700' },
      { subtitle: 'Pose réseaux VRD enterrés', gradient: 'from-stone-700 via-amber-900 to-stone-700' },
      { subtitle: 'Plateforme compactée — livraison finale', gradient: 'from-stone-700 to-amber-900' },
    ],
  },
  {
    id: 4,
    index: '(04)',
    title: 'Remise en état site pétrolier — Île-de-France',
    category: 'Remise en état de site',
    location: 'Île-de-France',
    year: 2024,
    shortDesc: 'Réhabilitation complète d\'un site pétrolier post-démantèlement — décontamination des sols, nivellement et clôtures.',
    paragraph1: "À l'issue d'un chantier de démantèlement, ENERMYS a pris en charge la réhabilitation complète d'un site pétrolier en Île-de-France. Les travaux ont inclus le traitement des terres contaminées aux hydrocarbures, le déblaiement des structures résiduelles et l'évacuation de l'ensemble des déchets classés, avec suivi analytique complet et bordereaux de suivi de déchets (BSD).",
    paragraph2: "Le site a ensuite été nivelé, clôturé et sécurisé conformément aux exigences du propriétaire et aux arrêtés préfectoraux applicables. Un plan de gestion des sols a été établi et validé par un bureau d'études environnementales indépendant. La restitution du site au donneur d'ordre a été effectuée avec remise du dossier de fin de travaux complet.",
    tags: ['Remise en état', 'Dépollution', 'Hydrocarbures', '#2024'],
    cards: [
      { subtitle: 'Site avant intervention — état initial', gradient: 'from-neutral-700 via-neutral-600 to-neutral-700' },
      { subtitle: 'Traitement terres contaminées', gradient: 'from-neutral-600 via-neutral-700 to-neutral-600' },
      { subtitle: 'Site réhabilité — vue finale', gradient: 'from-neutral-700 to-neutral-600' },
    ],
  },
  {
    id: 5,
    index: '(05)',
    title: 'Coordination multi-chantiers GNC — grand compte',
    category: 'Accompagnement & Coordination',
    location: 'France nationale',
    year: 2023,
    shortDesc: 'Pilotage simultané de 4 chantiers de démantèlement GNC pour un grand compte énergétique — 12 mois de coordination.',
    paragraph1: "ENERMYS a assuré pendant 12 mois la coordination de 4 chantiers de démantèlement de stations GNC simultanés pour un grand compte énergétique national. Un chef de projet senior a été dédié à cette mission, en charge de la planification globale, de la coordination des équipes terrain, du suivi HSE et du reporting mensuel au client.",
    paragraph2: "Chaque chantier présentait des contraintes spécifiques : sites en zone ATEX, délais imposés par les autorités, co-activité avec des exploitants en service. La réussite de ce programme multi-sites a démontré la capacité d'ENERMYS à gérer des opérations complexes à grande échelle, avec des équipes mobiles et une organisation structurée.",
    tags: ['Coordination', 'Multi-sites', 'Grand compte', '#2023'],
    cards: [
      { subtitle: 'Réunion de coordination — équipes terrain', gradient: 'from-emerald-900 via-slate-700 to-slate-700' },
      { subtitle: 'Chantier GNC — intervention en zone ATEX', gradient: 'from-slate-700 via-emerald-900 to-slate-700' },
      { subtitle: 'Tableau de bord de suivi multi-sites', gradient: 'from-slate-700 to-emerald-900' },
    ],
  },
]

export type ProcessStep = {
  number: string
  title: string
  description: string
  icon: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Analyse du projet",
    description:
      "Comprendre avant d'intervenir. Nous étudions votre besoin, vos contraintes réglementaires et vos objectifs afin de proposer une solution adaptée, sécurisée et réaliste.",
    icon: "Phone",
  },
  {
    number: "02",
    title: "Planification des travaux",
    description:
      "Anticiper pour mieux avancer. Chaque intervention est planifiée avec rigueur — planning détaillé, ressources, autorisations — pour garantir un déroulement fluide et des délais respectés.",
    icon: "FileText",
  },
  {
    number: "03",
    title: "Exécution maîtrisée",
    description:
      "Des travaux réalisés avec précision. Le chantier est conduit avec sérieux, dans le respect des normes HSE, des équipements et des engagements pris envers le client.",
    icon: "HardHat",
  },
  {
    number: "04",
    title: "Suivi & réception",
    description:
      "Un résultat conforme aux attentes. Nous assurons un suivi attentif jusqu'à la réception du chantier et la remise du dossier de clôture : certificats, BSD, plans de récolement.",
    icon: "CheckCircle2",
  },
]

export type Advantage = {
  icon: string
  title: string
  description: string
}

export const advantages: Advantage[] = [
  {
    icon: "Shield",
    title: "Conformité réglementaire",
    description:
      "Interventions conformes aux réglementations ICPE, ATEX et normes pétrolières. Nous gérons les autorisations et la documentation réglementaire.",
  },
  {
    icon: "MapPin",
    title: "Intervention nationale",
    description:
      "Mobilisation sur l'ensemble du territoire français et à l'international. Nos équipes se déplacent sur vos sites partout où vous avez besoin.",
  },
  {
    icon: "Users",
    title: "Accompagnement A à Z",
    description:
      "Un chef de projet dédié coordonne toutes les étapes : de l'analyse du besoin à la remise du dossier de clôture.",
  },
  {
    icon: "Clock",
    title: "Délais respectés",
    description:
      "Nous planifions chaque chantier avec rigueur et communiquons de manière transparente en cas d'aléas. 98% de nos chantiers sont livrés dans les temps.",
  },
  {
    icon: "Banknote",
    title: "Devis transparent",
    description:
      "Détail poste par poste, prix fermes et sans mauvaises surprises. Notre devis est établi après analyse complète de vos contraintes.",
  },
  {
    icon: "Wrench",
    title: "Équipes spécialisées",
    description:
      "Intervenants formés aux métiers du démantèlement industriel, du transport lourd et du terrassement en milieu contraignant.",
  },
]
