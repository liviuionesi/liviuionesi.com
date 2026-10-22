import { Experience, Education, Project, LinkedInProfile, AboutData } from '@/types/data';

export const experience: Experience[] = [
  {
    id: 1,
    type: 'senior',
    role: 'Senior Software Developer',
    company: 'DAT Group',
    companySize: '501-1.000 Mitarbeiter',
    industry: 'Automotive Software',
    locationType: 'Remote / Hybrid',
    websiteUrl: 'https://www.dat.eu',
    period: 'Sep 2020 - Mär 2026',
    summary: `Branchenführender Anbieter von Fahrzeugdaten & Reparatursystemen. Entwickler im Kern-Team von SilverDAT 3 „calculate“ (Plattform zur Reparaturkostenkalkulation für über 70.000 Fahrzeugvarianten für Werkstätten, Versicherer, Banken, OEMs & Gutachter).`,
    description: `*   **Modernisierungsarchitektur (Projekt Renovatio):** Technische Mitgestaltung der schrittweisen Entflechtung des monolithischen Java-EE/SOA-Kernsystems in hochverfügbare Spring-Boot-Microservices mit sauberer N-Tier-Architektur, DTO-Mappings und zentralem Distributed Tracing (MDC) in einem 10-köpfigen Team.
*   **REST & Contract-First API Design:** Konzeption und Entwicklung HATEOAS-konformer REST-APIs (OpenAPI Standard), abgesichert durch Testcontainers, MockMvc-Integrationstests und automatisierte Postman-Collections.
*   **Polyglot Persistence & Migration:** Migration gewachsener relationaler Datenbanken (Oracle SQL) auf PostgreSQL (JPA/Hibernate) sowie erfolgreiche Einführung von MongoDB für dynamische Fahrzeughistorien und Kalkulationsdokumente.
*   **Frontend-Transformation & Cloud Deployment:** Ablösung veralteter Web-Oberflächen durch responsive React/TypeScript-Komponenten (Effector, PrimeReact); Bereitstellung auf Azure Kubernetes Service (AKS) via Helm Charts und NGINX Ingress.
*   **Continuous Delivery & Release-Beschleunigung:** Umstellung der Deployment-Prozesse von 6 starren Jahres-Releases auf Continuous Delivery für alle neuen Microservices bei 100 % SonarQube Quality Gates und verbindlichen TDD-Qualitätsstandards im gesamten Team.
*   **Toolchain-Modernisierung & KI-Workflows:** Modernisierung von Spring-Boot-Builds mit OpenRewrite und Renovate; datenschutzkonformer Einsatz von CodeGPT (an internem Azure-LLM) sowie Cursor und Windsurf zur beschleunigten Legacy-Code-Analyse und Extraktion von Geschäftslogik.
*   **Technical Leadership & Enablement:** Evaluierung zukunftsweisender Technologien (Spring Cloud Gateway) und Durchführung interner Workshops für das Team zu REST/API-First, React/TypeScript und automatisierten Framework-Upgrades.`,
    linkedinDescription: `Mitglied des Entwicklungsteams hinter SilverDAT „calculate“, einer der führenden Plattformen zur Kalkulation von Fahrzeugreparaturkosten für Werkstätten, Versicherungen, Hersteller, Banken und Sachverständige.

**Verantwortlichkeiten:**
* Entwicklung und Architektur moderner Spring-Boot-Microservices zur schrittweisen Ablösung bestehender Java-EE-Systeme
* Technische Mitgestaltung der Modernisierungsstrategie einer geschäftskritischen Enterprise-Plattform
* Entwicklung und Optimierung von React- und TypeScript-Anwendungen
* Weiterentwicklung von Datenbankarchitekturen und Migration bestehender Systeme
* Aufbau und Optimierung von CI/CD-Prozessen sowie Cloud-Deployments auf Azure Kubernetes Services (AKS)
* Evaluierung neuer Technologien und Durchführung technischer Workshops für das Entwicklungsteam
* Unterstützung bei Architekturentscheidungen und technischen Konzepten

**Ausgewählte Erfolge:**
* Erfolgreiche Mitwirkung an der Umstellung einer klassischen SOA-Landschaft auf moderne Microservice-Architekturen
* Einführung moderner Continuous-Delivery-Prozesse für neue Anwendungen und Services
* Einsatz KI-gestützter Entwicklungsprozesse zur Analyse und Modernisierung komplexer Legacy-Systeme
* Förderung von Architekturstandards, API-First-Ansätzen und moderner Softwareentwicklung im Team`,
    tech: [
      {
        category: 'Backend',
        skills: [
          'Java 17+',
          'Jakarta EE',
          'Spring Boot 3+',
          'Spring Cloud',
          'REST APIs',
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
        category: 'Datenbanken',
        skills: ['PostgreSQL', 'Oracle', 'MongoDB', 'H2', 'JPA', 'Hibernate', 'JDBC'],
      },
      {
        category: 'Testing',
        skills: ['TestNG', 'Mockito', 'JUnit 5', 'MockMvc', 'Testcontainers'],
      },
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
        category: 'Tools',
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
      { category: 'Methodik', skills: ['Agile', 'Kanban', 'Jira'] },
    ],
  },
  {
    id: 2,
    type: 'mid',
    role: 'Softwareentwickler',
    company: 'evia solutions GmbH',
    companySize: '51-200 Mitarbeiter',
    industry: 'IT Services & Consulting',
    locationType: 'Vor Ort',
    websiteUrl: 'https://www.evia.de',
    period: 'Feb 2016 - Aug 2020',
    summary: `IT-Systemhaus für Individual- und Standardsoftware im Banken-, Versicherungs- und Microsoft-Enterprise-Umfeld.`,
    description: `*   **Versicherungsplattform Webkis (Wüstenrot & Württembergische):** Wartung, Weiterentwicklung und Testen geschäftskritischer Maklerportale auf Basis von Java EE 8, JSF, Spring, Hibernate und JSP unter IBM WebSphere 7/8.5 mit IBM DB2 und LDAP-Anbindung; Durchführung von OWASP-Penetrationstests und automatisierter PDF-Generierung via RAD 9.1 und iText.
*   **Modernisierungsevaluation & Pega Integration:** Architektonische Konzeption und Evaluierung von Pega 7 als moderner BPM- und Ablöseplattform für Altsysteme sowie Erwerb der Zertifizierung als Pega Certified System Architect (CSA).
*   **Automotive Banking (Daimler DSS):** Entwicklung der „Digital Sales Solutions“ zur globalen Digitalisierung von Fahrzeugfinanzierungsanträgen; Implementierung von Micronaut / Java EE Microservices (Oracle SQL, PostgreSQL 12, Docker) mit REST/SOAP-Schnittstellen und Angular-Frontends.
*   **Enterprise Process Automation (Microsoft Delivery):** Entwicklung einer SharePoint Online Onboarding-Plattform für Mitarbeiter sowie Prozessautomatisierung mit Microsoft Flow und Logic Apps (Office 365, JSON).
*   **Quality Assurance & CI/CD:** Aufbau automatisierter Build- und Test-Pipelines mit Jenkins, Git, JUnit und SonarQube sowie E2E-Testautomatisierung (Protractor, Cucumber) in agilen Scrum- und SAFe-Frameworks; wichtiger Beitrag zum Firmenwachstum von ~16 auf >200 Mitarbeiter.
*   **Zertifizierungen:** Erwerb der Zertifizierungen als Pega Certified System Architect (CSA) und Microsoft Certified (Exam 70-480).`,
    linkedinDescription: `Entwicklung individueller Softwarelösungen für Kunden aus den Bereichen Versicherungen, Banking und Microsoft Enterprise Services.

**Verantwortlichkeiten:**
* Entwicklung und Wartung geschäftskritischer Versicherungsplattformen
* Mitarbeit an Digitalisierungs- und Modernisierungsprojekten im Microsoft-Umfeld
* Entwicklung moderner Banking-Lösungen für internationale Automobilfinanzierungsprozesse
* Aufbau und Betreuung automatisierter Test- und Deploymentprozesse
* Enge Zusammenarbeit mit Fachbereichen, Testmanagement und DevOps-Teams
* Mitarbeit in Scrum- und SAFe-Projekten

**Ausgewählte Erfolge:**
* Aktive Unterstützung beim Aufbau des neuen Geschäftsbereichs „Microsoft Delivery“
* Entwicklung von Automatisierungs- und Onboarding-Lösungen auf Basis von Microsoft-Technologien
* Mitarbeit an der Entwicklung internationaler Finanzierungsplattformen für die Automobilindustrie
* Einführung und Weiterentwicklung moderner Entwicklungs- und Qualitätsstandards`,
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
        category: 'Datenbanken',
        skills: ['Oracle SQL', 'PostgreSQL', 'IBM DB2', 'LDAP / Active Directory'],
      },
      {
        category: 'CI/CD & DevOps',
        skills: ['Git', 'SVN', 'Jenkins', 'Maven', 'Docker', 'IBM WebSphere (7 / 8.5)'],
      },
      {
        category: 'Testing & Qualität',
        skills: ['JUnit', 'SonarQube', 'Protractor', 'Cucumber', 'OWASP / Penetration Testing'],
      },
      {
        category: 'Tools',
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
      { category: 'Methodik', skills: ['Scrum', 'SAFe', 'BPM'] },
      { category: 'Zertifizierungen', skills: ['Pega CSA', 'Microsoft 70-480'] },
    ],
  },
  {
    id: 3,
    type: 'junior',
    role: 'Junior Softwareentwickler',
    company: 'PRODYNA AG',
    companySize: '201-500 Mitarbeiter',
    industry: 'IT Consulting',
    locationType: 'Vor Ort / Reisebereitschaft',
    websiteUrl: 'https://www.prodyna.com',
    period: 'Nov 2014 - Jan 2016',
    summary: `Schweizerisch-deutsche IT-Beratung für Enterprise-Webanwendungen.`,
    description: `*   **Enterprise-Portalentwicklung:** Konzeption und Entwicklung kundenspezifischer Portallösungen auf Basis von Liferay 6.0, Java EE, MySQL, JSP, HTML, CSS, JavaScript und AlloyUI im agilen Scrum-Team beim Großkunden.
*   **Deployment & Build-Management:** Konfiguration und Deployment auf Apache Tomcat sowie Aufbau standardisierter Maven-Build-Prozesse und CI-Pipelines mit Jenkins.
*   **Qualitätssicherung & Zertifizierungen:** Integration statischer Code-Analysen mit SonarQube und Etablierung automatisierter Komponententests mit JUnit; termingerechter Projektabschluss und Erwerb der Hersteller-Zertifizierungen Oracle Certified Professional (OCPJP) und Oracle Certified Expert (OCE WCD).`,
    linkedinDescription: `Softwareentwickler und Berater für Enterprise-Webanwendungen.

**Verantwortlichkeiten:**
* Konzeption und Entwicklung Java-basierter Portallösungen
* Analyse, Implementierung, Testing und Deployment von Anwendungen
* Mitarbeit in agilen Scrum-Teams
* Sicherstellung von Softwarequalität und Build-Automatisierung

**Ausgewählte Erfolge:**
* Erfolgreiche Umsetzung eines Portallösungsprojekts für einen Großkunden
* Einführung von Continuous-Integration- und Qualitätsprozessen
* Erwerb international anerkannter Oracle-Zertifizierungen`,
    tech: [
      { category: 'Backend', skills: ['Java 6 EE', 'Liferay 6.0', 'JSP'] },
      { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'AlloyUI'] },
      { category: 'Datenbanken', skills: ['MySQL'] },
      { category: 'CI/CD & DevOps', skills: ['Apache Tomcat', 'Jenkins', 'Maven'] },
      { category: 'Testing & Qualität', skills: ['SonarQube'] },
      { category: 'Tools', skills: ['Jira', 'Confluence'] },
      { category: 'Methodik', skills: ['Scrum'] },
      { category: 'Zertifizierungen', skills: ['OCPJP', 'OCE WCD'] },
    ],
  },
  {
    id: 4,
    type: 'intern',
    role: 'Praktikum in der Softwareentwicklung',
    company: 'Alpine Electronics R&D Europe',
    companySize: '1.000+ Mitarbeiter',
    industry: 'Automotive Electronics',
    locationType: 'Vor Ort',
    websiteUrl: 'https://www.alpine.de/',
    dualStudy: 'ADV Böblingen',
    period: 'Sep 2012 - Aug 2013',
    summary: `F&E-Zentrum für Automotive-Infotainment-, Navigations- und Bussysteme (im Rahmen der Ausbildung an der ADV Böblingen, Abschluss 09/2014).`,
    description: `*   **Automatisierte Testmodule:** Konzeption und Implementierung automatisierter Software-Testmodule für fahrzeugspezifische Hardwareschnittstellen (Bluetooth, RDS, CAN- und MOST-Bussysteme) in C# / .NET 4.0 mit WPF und MVVM-Architektur.
*   **Messdaten-Visualisierung & Abschlussarbeit:** Eigenverantwortliche Entwicklung eines grafischen Editors zur Analyse, Validierung und Aufbereitung von Bordnetz-Spannungskurven unter automobilen Testbedingungen; Auszeichnung der Abschlussarbeit **„Alpine Voltage Curve Editor“ mit der Bestnote 1,0 (sehr gut)**.`,
    linkedinDescription: `* Entwicklung automatisierter Testmodule für Hardwareschnittstellen
* Umsetzung von Desktop-Anwendungen mit C# und WPF
* Anwendung von UML und Design-Patterns zur Architekturverbesserung
* Abschlussarbeit mit Bestnote (1,0)`,
    tech: [
      {
        category: 'Backend',
        skills: ['C#', '.NET 4.0', 'UML', 'Design Patterns', 'SharpDevelop', 'StyleCop'],
      },
      { category: 'Frontend & Mobile', skills: ['WPF', 'MVVM', 'Android SDK'] },
      { category: 'Hardware & Protokolle', skills: ['Bluetooth', 'CAN', 'MOST', 'RDS'] },
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    type: 'ausbildung',
    studyField: 'Technische Systeme',
    degree: 'Staatlich geprüfter Informatiker',
    school: 'Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)',
    url: 'https://gds2.de',
    location: 'Böblingen, Deutschland',
    year: '2011 - 2014',
    description:
      '3-jähriges Berufskolleg. Beinhaltete ein einjähriges Betriebspraktikum bei der Alpine Electronics R&D Europe GmbH mit der Abschlussarbeit: "Alpine Voltage Curve Editor" (Note: sehr gut / 1,0).',
    grade: 'Abgeschlossen mit Belobigung',
  },
  {
    id: 2,
    type: 'master',
    studyField: 'Lehramt Mathematik',
    degree: 'Master',
    school: 'West-Universität Temeswar (Universitatea de Vest din Timișoara)',
    url: 'https://info.uvt.ro/en/',
    location: 'Temeswar, Rumänien',
    year: '2009 - 2011',
    description:
      'Weiterführendes akademisches Programm mit Fokus auf komplexe mathematische Modelle und Bildungsmethodik. Das erste Jahr des Masters wurde im Rahmen des Erasmus-Programms im Ausland an der Universität Stuttgart absolviert. Zu den Kernfächern gehörten: Vektoranalysis, Höhere Algebra und Geometrie, Iterative Methoden, statistische und probabilistische Methoden sowie Software für Bildungsmanagement.',
    grade: '7,70 / 10 (Jahr 1) & 7,66 / 10 (Jahr 2)',
  },
  {
    id: 3,
    type: 'bachelor',
    studyField: 'Mathematik und Informatik',
    degree: 'Bachelor',
    school: 'West-Universität Temeswar (Universitatea de Vest din Timișoara)',
    url: 'https://info.uvt.ro/en/',
    location: 'Temeswar, Rumänien',
    year: '2006 - 2009',
    description:
      'Curriculum mit doppeltem Schwerpunkt, das theoretische Mathematik mit angewandter Informatik und Software Engineering verbindet. Die Hauptfächer umfassten: Datenstrukturen, Künstliche Intelligenz, Datenbanksysteme, Computernetzwerke, algorithmische Geometrie, logische und funktionale Programmierung sowie mathematische Modellierung/Simulation.',
    grade: '10 / 10 (Abschlussprüfung) | 9,02 / 10 (Gesamtdurchschnitt)',
  },
  {
    id: 4,
    type: 'gymnasium',
    studyField: 'Mathematik und Informatik',
    degree: 'Abitur (Bacalaureat)',
    school: 'Nationalkolleg für Informatik „Spiru Haret“ Suceava',
    url: 'https://www.cni-sv.ro/',
    location: 'Suceava, Rumänien',
    year: '2002 - 2006',
    description: 'Profil: Mathematik & Informatik (Intensiv).',
    grade: '9,81 / 10',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'liviuionesi.com',
    description:
      'Diese Portfolio-Website. Sie sieht aus wie die Antigravity IDE, mit Activity Bar, Datei-Explorer, Suchpanel, Statusleiste und Command Palette. Sie läuft auf dem Next.js 16 App Router mit dem React Compiler. Sie hat 4 Sprachen (Englisch, Deutsch, Französisch, Rumänisch) und einen CV-Export als PDF. Das Kontaktformular nutzt Google-Anmeldung und Nodemailer und zeigt mit der Geolocation API die Entfernung zwischen Besucher und Büro. Unit-Tests decken etwa 97 % des Codes ab, und Husky, ESLint und Prettier prüfen jeden Commit. Die Seite erreicht in allen vier Lighthouse-Kategorien 100 Punkte.',
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
      'Die Website und Dokumentation von Brevier, einer PDF-Bibliothek nach der Formel HTML + CSS + JSON = PDF. Brevier hat Clients für Python, C#, TypeScript und Java und unterstützt deutsche Geschäftsdokumente: DIN 5008, Silbentrennung, mehrseitige Tabellen und E-Rechnungen (ZUGFeRD / Factur-X). Die Seite ist mit Nuxt 4 gebaut und als statisches HTML vorgerendert. Sie liefert im Produktivbetrieb keine Framework-Skripte aus, nutzt keine Cookies und kein Tracking und ist auf Englisch und Deutsch verfügbar. Sie erreicht in allen vier Lighthouse-Kategorien 100 Punkte.',
    tech: ['Nuxt 4', 'TypeScript', 'Vitest', 'Playwright', 'i18n (EN/DE)', 'Static prerendering'],
    githubUrl: '',
    deployUrl: 'https://www.brevier.dev',
  },
  {
    id: 3,
    title: 'karcher.liviuionesi.com',
    description:
      'Meine Lösung für eine Software-Architekt-Challenge von Kärcher: ein System für 1.000 Roboter und 100 Bediener. Teil 1 ist das Design für AWS (IoT Core, Kinesis, Valkey, EKS, Cognito, Terraform), als arc42-Dokument mit einem ADR für jede Entscheidung. Teil 2 ist ein lauffähiger Prototyp: ein MQTT-Broker mit TLS und einem Login pro Roboter, ein Python-Backend, ein Next.js-Dashboard und eine Android-App (Capacitor). Ein einziger docker-compose-Befehl startet alles. Die Demo ist mit simulierten Robotern live. Der Quellcode ist privat.',
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
      'LMDB (Live Movies Database) ist eine Microservices-Plattform, die die TMDB-v3-API nachbildet, sodass die React-App sie anstelle von api.themoviedb.org nutzen kann. Sie speichert Film- und Schauspielerdaten bei der ersten Anfrage und liefert sie danach aus der eigenen Datenbank. Sie besteht aus 8 Spring-Boot-Services auf Java 25 mit Spring Cloud und nutzt MongoDB, PostgreSQL 17 und Redis. Eine lokale KI-Schicht (Spring AI, Ollama, pgvector) bietet Chat, semantische Suche und Suche in natürlicher Sprache, Vosk liefert Offline-Sprachsteuerung. Es wird keine kostenpflichtige KI-API genutzt. Terraform deployt auf Azure AKS oder AWS k3s mit 0-$-Budget. Dazu kommen 1.157 automatisierte Tests, 24 ADRs und CI/CD mit GitHub Actions.',
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
  headline:
    'Lead Software Engineer (Full-Stack) | Java & Spring Boot · React & Next.js · Software-Modernisierung',
  location: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Deutschland',
  phone: '+49 1514 6966 832',
  address: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck',
  email: 'ionesiliviu@yahoo.com',
  connections: '500+',
  about:
    'Pragmatischer Lead Software Engineer (Full-Stack) mit über 12 Jahren Praxiserfahrung in der Architektur, Modernisierung und Entwicklung geschäftskritischer Unternehmensanwendungen in den Bereichen Automotive, Banking und Versicherungen.',
  fullBio: `Pragmatischer **Lead Software Engineer (Full-Stack)** mit über 12 Jahren Praxiserfahrung in der Architektur, Modernisierung und Entwicklung geschäftskritischer Unternehmensanwendungen in den Bereichen **Automotive, Banking und Versicherungen**.

Spezialisiert auf die schrittweise Transformation veralteter Monolithen und Java-EE-Landschaften in hochverfügbare, skalierbare Microservice-Plattformen auf Basis von Java, Spring Boot, React/TypeScript und Azure Kubernetes Services (AKS). Verbindet fundierte Architekturentscheidungen mit aktiver Hands-on-Entwicklung, etabliert verbindliche Qualitätsstandards sowie CI/CD-Quality-Gates (JaCoCo, SonarQube, E2E-Playwright, OpenRewrite) und begleitet Entwicklerteams durch gezielten Wissenstransfer.

* **7 Jahre Legacy-Modernisierung & Entflechtung:** Transformation gewachsener Java-EE- / SOA-Monolithen, WebSphere-Architekturen und relationaler Datenbanksysteme (Oracle SQL, IBM DB2) in zukunftssichere Microservice-Landschaften.
* **5 Jahre Cloud-Native & Full-Stack Platform Engineering:** Aufbau hochverfügbarer Microservice-Ökosysteme mit Spring Boot (4.1/3.5), Polyglot Persistence (PostgreSQL, MongoDB, Redis) und typsicheren React 19 / Next.js 16 / TypeScript Frontends.
* **3 Jahre AI-Driven SDLC Automation & Quality Gates:** Praktischer Einsatz moderner KI-gestützter Entwicklungswerkzeuge (Claude Code, Cursor, Spring AI), um den Entwicklungszyklus zu beschleunigen und technische Schulden nachhaltig zu eliminieren.`,
  linkedinBio: `Technical Lead und Senior Full-Stack Engineer mit über 10 Jahren Erfahrung in der Entwicklung, Modernisierung und Architektur geschäftskritischer Unternehmensanwendungen in den Bereichen Automotive, Banking und Versicherungen.

Umfassende Expertise in der Konzeption moderner Softwarearchitekturen, der Transformation von Legacy-Systemen zu Microservice-Plattformen sowie der technischen Führung von Entwicklungsinitiativen. Langjährige Erfahrung in der Entwicklung skalierbarer Backend- und Frontend-Lösungen mit Java, Spring Boot und React sowie im Aufbau moderner Cloud- und DevOps-Plattformen.

Verbindet technische Exzellenz mit pragmatischen Architekturentscheidungen und unterstützt Teams durch Wissenstransfer, Technologieevaluierung und die Einführung moderner Engineering-Praktiken.

### KERNKOMPETENZEN

#### Technical Leadership
* Technische Führung von Entwicklungsinitiativen und Modernisierungsprojekten
* Architekturentscheidungen und Technologieevaluierung
* Durchführung technischer Workshops und Wissenstransfer
* Mentoring und fachliche Unterstützung von Entwicklungsteams
* Übersetzung von Business-Anforderungen in tragfähige technische Lösungen`,
  avatarUrl: '/images/linkedin-profile.png',
  skills: [
    'Leadership & Transformation',
    'Backend & Microservices',
    'Datenbanken & Persistence',
    'Frontend & Web UI',
    'Cloud, IaC & DevOps',
    'Qualität & CI/CD Automation',
    'KI & LLM-Engineering',
  ],
  certifications: [
    {
      name: 'Oracle Certified Professional, Java SE 6 Programmer (OCPJP)',
      authority: 'Oracle',
      url: '',
    },
    {
      name: 'Oracle Certified Expert, Java EE 6 Web Components Developer (OCE WCD)',
      authority: 'Oracle',
      url: '',
    },
    {
      name: 'Pega 7.1 Certified System Architect (CSA)',
      authority: 'Pegasystems',
      url: 'https://pdn.pega.com/pega-academy/verify-certification?fname=Liviu-Lucian&lname=Ionesi',
    },
    {
      name: 'Microsoft Certified: Programming in HTML5 with JavaScript and CSS3 (Exam 70-480)',
      authority: 'Microsoft',
      url: '',
    },
    {
      name: 'Software Architecture, Microservices & Azure DevOps',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-52b76175-4ab7-464f-9117-baf905ac24c2/',
    },
    {
      name: 'Spring Boot Microservices and Spring Cloud',
      authority: 'Udemy',
      url: 'https://ude.my/UC-70ca993d-e60a-436f-8673-739a57fe54da',
    },
    {
      name: 'Azure DevOps Fundamentals for Beginners',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-1ced9814-91c6-4ebc-b656-af2fbeeba0f9/',
    },
  ],
  languages: [
    { language: 'Deutsch', proficiency: 'Verhandlungssicher (C1)' },
    { language: 'Englisch', proficiency: 'Verhandlungssicher (C1)' },
    { language: 'Rumänisch', proficiency: 'Muttersprache (C2)' },
    { language: 'Französisch', proficiency: 'Grundkenntnisse (A2)' },
  ],
};

export const about: AboutData = {
  greeting: '~/developer/portfolio',
  name: 'Liviu',
  suffix: '.io',
  lastName: 'NESI',
  description:
    'Pragmatischer Lead Software Engineer (Full-Stack) mit über 12 Jahren Praxiserfahrung in der Architektur, Modernisierung und Entwicklung geschäftskritischer Unternehmensanwendungen in den Bereichen Automotive, Banking und Versicherungen.',
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: 'Projekte, nicht nur Code',
  ctaSecondary: 'Kontaktieren Sie mich',
};
