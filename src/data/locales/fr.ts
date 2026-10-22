import { Experience, Education, Project, LinkedInProfile, AboutData } from '@/types/data';

export const experience: Experience[] = [
  {
    id: 1,
    type: 'senior',
    role: 'Senior Software Developer',
    company: 'DAT Group',
    companySize: '501-1 000 employés',
    industry: 'Logiciels Automobiles',
    locationType: 'Télétravail / Hybride',
    websiteUrl: 'https://www.dat.eu',
    period: 'Sep 2020 - Mar 2026',
    summary: `Développeur Full-Stack Senior au sein de l'équipe "Costing Applications" responsable de SilverDAT 3 "calculate", le standard reconnu par l'industrie pour l'estimation des coûts de réparation automobile. L'application est utilisée à l'échelle du secteur par les garages, concessionnaires, experts, assureurs, banques et constructeurs pour plus de 70 000 variantes de véhicules.`,
    description: `*   Maintenance, extension et tests des anciens services Java EE (monorepo SOA/SOAP avec frontends JavaScript/React). Adaptation de SoapUI et des suites de tests manuels pour suivre l'évolution des services, ainsi que l'ajout d'une couverture TestNG/Mockito pour les nouvelles modifications.
*   Conception de l'architecture et développement complet de nouveaux services Spring Boot visant à remplacer l'application Java EE vieillissante — avec une architecture N-Tier propre, un mapping DTO strict, une gestion centralisée des erreurs et un traçage distribué basé sur MDC. Mise en place d'API REST "contract-first", conformes HATEOAS (OpenAPI), sécurisées par des tests d'intégration JUnit 5/MockMvc et des collections Postman automatisées.
*   Gestion de la couche de données avec JPA/Hibernate : Remplacement des anciennes bases de données SQL (principalement Oracle SQL) par PostgreSQL et introduction de MongoDB comme première solution NoSQL dans une pile technologique auparavant exclusivement SQL.
*   Refonte des anciens frontends JavaScript en composants React/TypeScript modernes et réactifs. Optimisation de l'architecture en intégrant Effector (gestion d'état) et PrimeReact.
*   CI/CD : Compilation de la plateforme existante via Gradle sur Jenkins et déploiement vers les environnements de test et de production ; les nouveaux services sont livrés via Gradle Wrapper. Déploiement sur Azure Kubernetes (AKS) à l'aide de pipelines de build et de release utilisant des charts Helm et NGINX Ingress. Utilisation de Docker Compose pour le développement local. Migration du contrôle de code source de GitLab vers Azure Repos. L'ancienne application suit un cycle de 6 versions par an (via Kanban sur Jira), tandis que les nouveaux services ont adopté une livraison continue (Continuous Delivery).
*   Modernisation de la configuration de build parent Spring Boot héritée (utilisation d'OpenRewrite pour des mises à jour de version automatisées au-delà de la limite BOM, Renovate Bot sur Azure pour les mises à jour de dépendances) et migration de la configuration classique des propriétés vers les profils Spring.
*   Mise en place d'un flux de travail augmenté par l'IA combinant IntelliJ IDEA (CodeGPT avec LLM Azure local), Cursor et Windsurf pour documenter et analyser le code hérité, extraire les exigences métier et développer de nouveaux services atteignant 100 % de conformité aux critères de qualité SonarQube.
*   Orientation de la stratégie technique à travers le prototypage et l'évaluation de nouvelles approches — vérification directe dans le code et animation d'ateliers d'équipe (par exemple sur le design REST/API-first, React moderne et Next.js, OpenRewrite, Dependabot, ainsi que l'évaluation de Spring Cloud Gateway comme remplacement de la passerelle sur mesure de DAT).`,
    linkedinDescription: `Membre de l'équipe de développement derrière SilverDAT « calculate », l'une des plateformes de pointe pour le calcul des coûts de réparation de véhicules pour les ateliers, les compagnies d'assurance, les constructeurs, les banques et les experts.

**Responsabilités :**
* Développement et architecture de microservices Spring Boot modernes pour le remplacement progressif des systèmes Java EE existants
* Co-conception technique de la stratégie de modernisation d'une plateforme d'entreprise critique
* Développement et optimisation d'applications React et TypeScript
* Poursuite du développement d'architectures de bases de données et migration de systèmes existants
* Configuration et optimisation des processus CI/CD ainsi que des déploiements cloud sur Azure Kubernetes Services (AKS)
* Évaluation de nouvelles technologies et animation d'ateliers techniques pour l'équipe de développement
* Soutien aux décisions architecturales et aux concepts techniques

**Réalisations sélectionnées :**
* Participation réussie à la transition d'un paysage SOA classique vers des architectures microservices modernes
* Introduction de processus de livraison continue modernes pour de nouvelles applications et services
* Utilisation de processus de développement assistés par l'IA pour l'analyse et la modernisation de systèmes existants complexes
* Promotion des standards d'architecture, des approches API-first et du développement logiciel moderne au sein de l'équipe`,
    tech: [
      {
        category: 'Backend',
        skills: [
          'Java 17+',
          'Jakarta EE',
          'Spring Boot 3+',
          'Spring Cloud',
          'API REST',
          'OpenAPI',
          'Microservices',
          'SOA / SOAP',
          'WSDL',
        ],
      },
      {
        category: 'Frontend',
        skills: ['JavaScript', 'HTML', 'CSS', 'React', 'TypeScript', 'Effector', 'PrimeReact'],
      },
      {
        category: 'Bases de Données',
        skills: ['PostgreSQL', 'Oracle', 'MongoDB', 'H2', 'JPA', 'Hibernate', 'JDBC'],
      },
      { category: 'Tests', skills: ['TestNG', 'Mockito', 'JUnit 5', 'MockMvc', 'Testcontainers'] },
      {
        category: 'CI/CD & DevOps',
        skills: [
          'Jenkins',
          'GitLab CI/CD',
          'Gradle',
          'Node.js',
          'npm',
          'Docker',
          'Azure',
          'Kubernetes (AKS)',
          'Helm',
          'NGINX Ingress',
          'OpenRewrite',
          'Renovate',
          'Dependabot',
        ],
      },
      {
        category: 'Outils',
        skills: [
          'IntelliJ IDEA',
          'Postman',
          'SoapUI',
          'SQL Developer',
          'Cursor',
          'Windsurf',
          'Azure OpenAI',
        ],
      },
      { category: 'Méthodologie', skills: ['Agile', 'Kanban', 'Jira'] },
    ],
  },
  {
    id: 2,
    type: 'mid',
    role: 'Software Developer',
    company: 'evia solutions GmbH',
    companySize: '51-200 employés',
    industry: 'Services et Conseils IT',
    locationType: 'Sur site',
    websiteUrl: 'https://www.evia.de',
    period: 'Fév 2016 - Aoû 2020',
    summary: `Développeur et consultant au sein d'une entreprise de services informatiques multi-secteurs pour la fourniture de logiciels standards et sur mesure dans les domaines de la banque, de l'assurance et des environnements Microsoft Enterprise. Activité au sein d'équipes agiles Scrum et SAFe — allant de la maintenance d'applications Java EE classiques à la création ex nihilo d'une architecture microservices.`,
    description: `*   Maintenance, extension, livraison et tests de portails pour courtiers en assurance pour Wüstenrot & Württembergische — des applications Java EE 8 critiques (JSF/Spring/Hibernate, JSP) fonctionnant sur IBM WebSphere 7 et 8.5 avec IBM DB2 et LDAP/Active Directory. Ces systèmes ont constitué la base financière solide ayant permis à l'entreprise de croître d'environ 16 à plus de 200 employés. Les systèmes ont été renforcés par des tests de pénétration selon les standards OWASP. Rational Application Developer 9.1 et iText ont été utilisés pour la génération de documents et de PDF (ainsi que Apache Directory Studio, Postman, Eclipse, SVN, Cherwell).
*   Contribution au développement du nouveau département "Microsoft Delivery" en tant que développeur principal. Création d'une solution d'intégration des employés (onboarding) sur SharePoint Online (génération numérique de contrats, processus d'accueil, gestion des tâches) et automatisation des processus d'entreprise avec Microsoft Flow et Logic Apps (Office 365, JSON).
*   Obtention des certifications "Pega Certified System Architect (CSA)" axée sur le développement BPM, et "Microsoft 70-480" (HTML5, JavaScript & CSS3, incluant jQuery et AJAX).
*   Développement des "Digital Sales Solutions" (DSS) pour Daimler — une application bancaire innovante permettant de numériser les demandes de crédit automobile dans plusieurs pays. Implémentation de microservices modernes Micronaut / JEE 11 (Oracle SQL, PostgreSQL 12, Docker) derrière un frontend Angular, complétés par des services d'intégration REST/SOAP (OpenAPI) pour les échanges B2B.
*   Responsable des tests développeurs, de l'Assurance Qualité (JUnit, SonarQube) et des pipelines CI/CD pour les environnements de test et d'intégration (Git, Jenkins). Accompagnement de l'équipe de test pour les suites de bout en bout automatisées (Protractor, Cucumber) au sein d'équipes Scrum puis SAFe, en étroite collaboration avec les départements Frontend, Test et DevOps (Jira, Confluence, MS Teams).`,
    linkedinDescription: `Développement de solutions logicielles sur mesure pour des clients dans les secteurs de l'assurance, de la banque et des services d'entreprise Microsoft.

**Responsabilités :**
* Développement et maintenance de plateformes d'assurance critiques
* Participation à des projets de numérisation et de modernisation dans l'environnement Microsoft
* Développement de solutions bancaires modernes pour les processus de financement automobile internationaux
* Configuration et support de processus de test et de déploiement automatisés
* Étroite collaboration avec les services métier, la gestion des tests et les équipes DevOps
* Participation à des projets Scrum et SAFe

**Réalisations sélectionnées :**
* Soutien actif à la création de la nouvelle branche d'activité "Microsoft Delivery"
* Développement de solutions d'automatisation et d'intégration basées sur les technologies Microsoft
* Participation au développement de plateformes de financement internationales pour l'industrie automobile
* Introduction et développement de standards modernes de développement et de qualité`,
    tech: [
      {
        category: 'Backend',
        skills: [
          'Java EE (JEE 8 / 11)',
          'Micronaut',
          'Spring',
          'Hibernate',
          'JSF',
          'JSP',
          'iText',
          'REST',
          'SOAP',
          'OpenAPI',
        ],
      },
      {
        category: 'Frontend',
        skills: ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX'],
      },
      {
        category: 'Bases de Données',
        skills: ['Oracle SQL', 'PostgreSQL', 'IBM DB2', 'LDAP / Active Directory'],
      },
      {
        category: 'CI/CD & DevOps',
        skills: ['Git', 'SVN', 'Jenkins', 'Maven', 'Docker', 'IBM WebSphere (7 / 8.5)'],
      },
      {
        category: 'Tests et Qualité',
        skills: ['JUnit', 'SonarQube', 'Protractor', 'Cucumber', 'OWASP / Tests de Pénétration'],
      },
      {
        category: 'Outils',
        skills: [
          'IntelliJ IDEA',
          'Eclipse',
          'Rational Application Developer',
          'SharePoint',
          'Microsoft Flow',
          'Logic Apps',
          'Office 365',
          'Apache Directory Studio',
          'Postman',
          'Jira',
          'Confluence',
          'Cherwell',
          'MS Teams',
        ],
      },
      { category: 'Méthodologie', skills: ['Scrum', 'SAFe', 'BPM'] },
      { category: 'Certifications', skills: ['Pega CSA', 'Microsoft 70-480'] },
    ],
  },
  {
    id: 3,
    type: 'junior',
    role: 'Junior Software Developer',
    company: 'PRODYNA AG',
    companySize: '201-500 employés',
    industry: 'Conseil IT',
    locationType: 'Sur site / Déplacements',
    websiteUrl: 'https://www.prodyna.com',
    period: 'Nov 2014 - Jan 2016',
    summary: `Développeur et consultant dans une société de conseil en informatique, déployé sur site chez un grand compte pour réaliser un projet de portail web couvrant le conseil métier, la conception, l'implémentation et les tests.`,
    description: `*   Développement et livraison d'une solution portail Liferay 6.0 avec un backend en Java 6 EE et MySQL, ainsi qu'un frontend associant JSP, HTML, CSS, JavaScript et AlloyUI.
*   Déploiement et tests des applications sur Apache Tomcat, gestion des processus CI/CD avec Jenkins et Maven, et intégration de SonarQube dans la chaîne de compilation pour garantir la qualité du code.
*   Travail au sein d'équipes agiles Scrum (Jira, Confluence) et obtention des certifications "Oracle Certified Professional Java Programmer (OCPJP)" et "Oracle Certified Expert Java EE 6 Web Component Developer (OCE WCD)".`,
    linkedinDescription: `Développeur de logiciels et consultant pour des applications web d'entreprise.

**Responsabilités :**
* Conception et développement de solutions portail basées sur Java
* Analyse, implémentation, test et déploiement d'applications
* Travail au sein d'équipes Scrum agiles
* Assurance qualité logicielle et automatisation des builds

**Réalisations sélectionnées :**
* Mise en œuvre réussie d'un projet de solution portail pour un client majeur
* Introduction de l'intégration continue et des processus de qualité
* Acquisition de certifications Oracle internationalement reconnues`,
    tech: [
      { category: 'Backend', skills: ['Java 6 EE', 'Liferay 6.0', 'JSP'] },
      { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'AlloyUI'] },
      { category: 'Bases de Données', skills: ['MySQL'] },
      { category: 'CI/CD & DevOps', skills: ['Apache Tomcat', 'Jenkins', 'Maven'] },
      { category: 'Tests et Qualité', skills: ['SonarQube'] },
      { category: 'Outils', skills: ['Jira', 'Confluence'] },
      { category: 'Méthodologie', skills: ['Scrum'] },
      { category: 'Certifications', skills: ['OCPJP', 'OCE WCD'] },
    ],
  },
  {
    id: 4,
    type: 'intern',
    role: 'Stage en Développement Logiciel',
    company: 'Alpine Electronics R&D Europe',
    companySize: '1 000+ employés',
    industry: 'Électronique Automobile',
    locationType: 'Sur site',
    websiteUrl: 'https://www.alpine.de/',
    dualStudy: 'ADV Böblingen',
    period: 'Sep 2012 - Aoû 2013',
    summary: `Stagiaire en intégration de systèmes (Car Infotainment / OEM) pour le développement de modules logiciels destinés au "Alpine Test Automation Framework" interne.`,
    description: `*   Développement et extension de l'Alpine Test Automation Framework interne (C#, .NET 4.0) en créant des modules de test automatisés pour des interfaces matérielles telles que Bluetooth, les générateurs de signaux RDS, les bus MOST/CAN, les chambres climatiques et les robots changeurs de CD/DVD.
*   Conception et implémentation de l'"Alpine Voltage Curve Editor" — récompensé par la note maximale (1.0) en tant que mémoire de fin d'études — et modernisation des interfaces utilisateur de plusieurs modules de test existants en utilisant WPF et le modèle MVVM.
*   Garantie de la robustesse architecturale sur l'ensemble du framework de test en appliquant la modélisation UML et les modèles de conception du "Gang of Four" (Singleton, Composite, Factory Method, Memento) dans SharpDevelop.`,
    linkedinDescription: `* Développement de modules de test automatisés pour des interfaces matérielles
* Implémentation d'applications de bureau avec C# et WPF
* Application de l'UML et des modèles de conception (Design Patterns) pour améliorer l'architecture
* Thèse de fin d'études avec la meilleure note (1.0)`,
    tech: [
      {
        category: 'Backend',
        skills: ['C#', '.NET 4.0', 'UML', 'Design Patterns', 'SharpDevelop', 'StyleCop'],
      },
      { category: 'Frontend & Mobile', skills: ['WPF', 'MVVM', 'Android SDK'] },
      { category: 'Matériel et Protocoles', skills: ['Bluetooth', 'CAN', 'MOST', 'RDS'] },
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    type: 'études-en-alternance',
    studyField: 'Systèmes techniques',
    degree: "Informaticien Diplômé d'État (Staatlich geprüfter Informatiker)",
    school: 'Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)',
    url: 'https://gds2.de',
    location: 'Böblingen, Allemagne',
    year: '2011 - 2014',
    description:
      'Formation professionnelle de 3 ans (Berufskolleg). Inclut un an de stage pratique chez Alpine Electronics R&D Europe GmbH, validé par le mémoire : « Alpine Voltage Curve Editor » (Note : Excellent / 1,0).',
    grade: 'Obtenu avec Mention (Belobigung)',
  },
  {
    id: 2,
    type: 'master',
    studyField: 'Didactique des mathématiques',
    degree: 'Master',
    school: "Université de l'Ouest de Timișoara (Universitatea de Vest din Timișoara)",
    url: 'https://info.uvt.ro/en/',
    location: 'Timișoara, Roumanie',
    year: '2009 - 2011',
    description:
      "Programme universitaire avancé axé sur les modèles mathématiques complexes et les méthodologies pédagogiques. La première année de ce Master a été effectuée à l'étranger, à l'Université de Stuttgart, via le programme Erasmus. Les matières principales comprenaient : Analyse Vectorielle, Algèbre et Géométrie Supérieures, Méthodes Itératives, Méthodes Statistiques et Probabilistes, ainsi que Logiciels pour la Gestion Éducative.",
    grade: '7,70 / 10 (Année 1) & 7,66 / 10 (Année 2)',
  },
  {
    id: 3,
    type: 'licence',
    studyField: 'Mathématiques et informatique',
    degree: 'Licence',
    school: "Université de l'Ouest de Timișoara (Universitatea de Vest din Timișoara)",
    url: 'https://info.uvt.ro/en/',
    location: 'Timișoara, Roumanie',
    year: '2006 - 2009',
    description:
      'Cursus à double spécialisation qui allie mathématiques théoriques, informatique appliquée et génie logiciel. Les matières principales englobaient : Structures de Données, Intelligence Artificielle, Bases de Données, Réseaux Informatiques, Géométrie Algorithmique, Programmation Logique et Fonctionnelle, et Modélisation/Simulation Mathématique.',
    grade: '10 / 10 (Examen final) | 9,02 / 10 (Moyenne générale)',
  },
  {
    id: 4,
    type: 'lycée',
    studyField: 'Mathématiques et informatique',
    degree: "Diplôme de Fin d'Études Secondaires (Baccalauréat)",
    school: "Collège National d'Informatique « Spiru Haret » Suceava",
    url: 'https://www.cni-sv.ro/',
    location: 'Suceava, Roumanie',
    year: '2002 - 2006',
    description: 'Profil : Mathématiques et Informatique (Intensif).',
    grade: '9,81 / 10',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'liviuionesi.com',
    description:
      "Ce site portfolio. Il ressemble à l'IDE Antigravity, avec barre d'activité, explorateur de fichiers, panneau de recherche, barre d'état et palette de commandes. Il tourne sur le App Router de Next.js 16 avec le React Compiler. Il a 4 langues (anglais, allemand, français, roumain) et un export du CV en PDF. Le formulaire de contact utilise la connexion Google et Nodemailer, et affiche la distance entre le visiteur et le bureau avec l'API Geolocation. Les tests unitaires couvrent environ 97 % du code, et Husky, ESLint et Prettier vérifient chaque commit. Le site obtient 100 dans les quatre catégories Lighthouse.",
    tech: [
      'Next.js 16',
      'React Compiler',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion',
      'NextAuth.js',
      'Jest',
      'Vercel',
    ],
    githubUrl: 'https://github.com/liviuionesi/liviuionesi.com',
    deployUrl: 'https://liviuionesi.com',
  },
  {
    id: 2,
    title: 'brevier.dev',
    description:
      "Le site web et la documentation de Brevier, une bibliothèque PDF selon la formule HTML + CSS + JSON = PDF. Brevier a des clients pour Python, C#, TypeScript et Java, et gère les documents commerciaux allemands : DIN 5008, césure, tableaux sur plusieurs pages et factures électroniques (ZUGFeRD / Factur-X). Le site est construit avec Nuxt 4 et prérendu en HTML statique. Il n'envoie aucun script de framework en production, n'utilise ni cookies ni suivi, et existe en anglais et en allemand. Il obtient 100 dans les quatre catégories Lighthouse.",
    tech: ['Nuxt 4', 'TypeScript', 'Vitest', 'Playwright', 'i18n (EN/DE)', 'Static prerendering'],
    githubUrl: '',
    deployUrl: 'https://www.brevier.dev',
  },
  {
    id: 3,
    title: 'karcher.liviuionesi.com',
    description:
      "Ma réponse à un défi d'architecte logiciel de Kärcher : un système pour 1 000 robots et 100 opérateurs. La partie 1 est la conception pour AWS (IoT Core, Kinesis, Valkey, EKS, Cognito, Terraform), écrite en document arc42 avec un ADR pour chaque décision. La partie 2 est un prototype fonctionnel : un broker MQTT avec TLS et un identifiant par robot, un backend Python, un tableau de bord Next.js et une application Android (Capacitor). Une seule commande docker compose le démarre. La démo est en ligne avec des robots simulés. Le code source est privé.",
    tech: [
      'Python',
      'MQTT (Mosquitto)',
      'Next.js',
      'Capacitor (Android)',
      'InfluxDB',
      'Docker Compose',
      'Terraform',
      'AWS',
      'Playwright',
    ],
    githubUrl: '',
    deployUrl: 'https://karcher.liviuionesi.com',
  },
  {
    id: 4,
    title: 'lmdb.dev',
    description:
      "LMDB (Live Movies Database) est une plateforme de microservices qui reproduit l'API TMDB v3, pour que l'application React l'utilise à la place de api.themoviedb.org. Elle enregistre les données de films et d'acteurs à la première requête, puis les sert depuis sa propre base. Elle compte 8 services Spring Boot sur Java 25 avec Spring Cloud, et utilise MongoDB, PostgreSQL 17 et Redis. Une couche d'IA locale (Spring AI, Ollama, pgvector) apporte le chat, la recherche sémantique et la recherche en langage naturel, et Vosk apporte la commande vocale hors ligne. Aucune API d'IA payante n'est utilisée. Terraform la déploie sur Azure AKS ou AWS k3s avec un budget de 0 $. Elle a 1 157 tests automatisés, 24 ADR et un CI/CD sur GitHub Actions.",
    tech: [
      'Java 25',
      'Spring Boot 4.1',
      'Spring Cloud',
      'Spring AI',
      'Ollama',
      'pgvector',
      'PostgreSQL 17',
      'MongoDB 8',
      'Redis',
      'React 19',
      'Terraform',
      'Kubernetes',
      'GitHub Actions',
    ],
    githubUrl: 'https://github.com/liviuionesi/lmdb.dev',
    deployUrl: 'https://lmdb.dev',
  },
];

export const linkedInProfile: LinkedInProfile = {
  name: 'Liviu Ionesi',
  headline: 'Tech Lead | Ingénieur Full-Stack Senior | Java, Spring Boot, React, Next.js',
  location: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Allemagne',
  phone: '+49 1514 6966 832',
  address: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck',
  email: 'ionesiliviu@yahoo.com',
  connections: '500+',
  about:
    "Tech Lead et Ingénieur Full-Stack Senior. Je construis l'épine dorsale numérique pour les secteurs de l'Automobile et de la Fintech. Avec plus de 13 ans d'expérience dans le développement de systèmes distribués très performants, je me concentre sur la direction technique, la modernisation d'architectures héritées et la livraison de solutions cloud-natives et évolutives.",
  fullBio: `### **Tech Lead et Ingénieur Full-Stack Senior | Spécialiste Automobile & FinTech**

Avec plus de 13 ans d'expérience dans l'ingénierie de systèmes distribués à haute performance, je me spécialise dans le leadership technique, la modernisation d'architectures vieillissantes et le déploiement de solutions cloud-natives évolutives. Mon parcours professionnel va du développement de frameworks d'automatisation critiques chez **Alpine Electronics** jusqu'à l'impulsion de la transformation numérique des plateformes de données d'entreprise chez **DAT Group**. J'excelle à guider des équipes pluridisciplinaires pour concevoir des logiciels robustes en utilisant des piles technologiques modernes.

Je fais le lien entre une logique backend complexe, des expériences frontend intuitives et des objectifs commerciaux stratégiques. Mes compétences clés incluent :

  * **Leadership Technique & Architecture** : Piloter la conception des systèmes et défendre la migration des applications monolithiques **Java EE** vers des **Microservices** évolutifs (Spring Boot, Azure) et des frontends modernes (React/Next.js), améliorant ainsi considérablement la résilience du système.
  * **Excellence en Ingénierie Full-Stack** : Concevoir et développer des interfaces réactives et centrées sur l'utilisateur avec **React, Next.js et TypeScript**, intégrées de manière fluide avec des API **Java 21 / Spring Boot** robustes et sécurisées.
  * **Culture DevOps & Qualité** : Promouvoir le **TDD**, les principes du **Clean Code** et instaurer l'automatisation CI/CD (Azure, GitHub Actions) pour assurer une livraison logicielle de haute qualité et prévisible. Mentorer les équipes de développement pour élever leurs standards techniques.
  * **Ingénierie assistée par l'IA** : Pionnier d'une livraison logicielle à grande vitesse en fusionnant la rigueur d'entreprise (Epics, Agile/Scrum, CI/CD) avec des flux de travail avancés intégrant l'IA (Cursor, Windsurf). Cette approche accélère le développement de nouveaux projets et rationalise le refactoring de monolithes hérités complexes, réduisant efficacement la dette technique.

---
*Actuellement à la recherche d'un poste de Tech Lead dans l'écosystème Spring Boot et React. Ouvert à des rôles hybrides dans la région de Stuttgart ou à des postes 100 % en télétravail depuis l'Allemagne.*`,
  linkedinBio: `Technical Lead et Senior Full-Stack Engineer avec plus de 10 ans d'expérience dans le développement, la modernisation et l'architecture d'applications d'entreprise critiques dans les secteurs de l'automobile, de la banque et de l'assurance.

Vaste expertise dans la conception d'architectures logicielles modernes, la transformation de systèmes hérités en plateformes de microservices, et le leadership technique pour des initiatives de développement. Solide expérience dans la création de solutions backend et frontend évolutives avec Java, Spring Boot et React, ainsi que dans la mise en place de plateformes Cloud et DevOps modernes.

Allie excellence technique et décisions architecturales pragmatiques, et soutient les équipes par le transfert de connaissances, l'évaluation technologique et l'introduction de pratiques d'ingénierie modernes.

### COMPÉTENCES CLÉS

#### Technical Leadership
* Direction technique des initiatives de développement et projets de modernisation
* Décisions architecturales et évaluation technologique
* Animation d'ateliers techniques et transfert de connaissances
* Mentorat et soutien technique aux équipes de développement
* Traduction des exigences métier en solutions techniques viables`,
  avatarUrl: '/images/linkedin-profile.png',
  skills: [
    'Java',
    'Spring Boot',
    'Spring Cloud',
    'React',
    'Next.js',
    'Azure',
    'Docker',
    'Kubernetes',
    'SQL/NoSQL',
    'IntelliJ IDEA',
    'Outils IA (Cursor, Windsurf, Antigravity, MCP)',
  ],
  certifications: [
    { name: 'Oracle Certified Professional, Java SE 6 Programmer', authority: 'Oracle', url: '' },
    {
      name: 'Oracle Certified Expert Java EE 6 Web Components Developer',
      authority: 'Oracle',
      url: '',
    },
    {
      name: 'Pega 7.1 Certified System Architect',
      authority: 'Pegasystems',
      url: 'https://pdn.pega.com/pega-academy/verify-certification?fname=Liviu-Lucian&lname=Ionesi',
    },
    {
      name: 'The Complete Guide to Becoming a Software Architect',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-5a84800c-8893-4d20-97ec-fa513267d795/',
    },
    {
      name: 'Microservices Architecture - The Complete Guide',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-52b76175-4ab7-464f-9117-baf905ac24c2/',
    },
    {
      name: 'Spring Boot Microservices and Spring Cloud',
      authority: 'Udemy',
      url: 'http://ude.my/UC-70ca993d-e60a-436f-8673-739a57fe54da',
    },
    {
      name: 'Azure DevOps Fundamentals for Beginners',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-1ced9814-91c6-4ebc-b656-af2fbeeba0f9/',
    },
  ],
  languages: [
    { language: 'Allemand', proficiency: 'Niveau Courant Professionnel' },
    { language: 'Anglais', proficiency: 'Niveau Courant Professionnel' },
    { language: 'Roumain', proficiency: 'Langue Maternelle' },
    { language: 'Français', proficiency: 'Notions de Base' },
  ],
};

export const about: AboutData = {
  greeting: '~/developer/portfolio',
  name: 'Liviu',
  suffix: '.io',
  lastName: 'NESI',
  description:
    "Tech Lead & Ingénieur Full-Stack Senior. Je bâtis l'épine dorsale numérique pour les secteurs de l'automobile et de la fintech. Spécialisé dans les microservices Spring Boot, les frontends React, et l'accélération de la livraison logicielle en entreprise grâce à des processus assistés par l'IA.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: 'Des Projets, pas juste du Code',
  ctaSecondary: 'Me Contacter',
};
