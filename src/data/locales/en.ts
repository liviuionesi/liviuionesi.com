import { Experience, Education, Project, LinkedInProfile, AboutData } from '@/types/data';

export const experience: Experience[] = [
  {
    id: 1,
    type: 'senior',
    role: 'Senior Software Developer',
    company: 'DAT Group',
    companySize: '501-1,000 employees',
    industry: 'Automotive Software',
    locationType: 'Remote / Hybrid',
    websiteUrl: 'https://www.dat.eu',
    period: 'Sep 2020 - Mar 2026',
    summary: `Senior full-stack developer on the Costing Applications team behind SilverDAT 3 "calculate", the insurer-recognized standard for vehicle repair-cost calculation. Used industry-wide by workshops, dealers, appraisers, insurers, banks, and manufacturers across 70,000+ vehicle variants.`,
    description: `*   Extended, maintained, and tested legacy Java EE services (SOA/SOAP monorepo with JavaScript/React frontends), adapting SoapUI and manual test suites as services evolved, and adding TestNG/Mockito coverage for changes.
*   Architected and owned new Spring Boot services end to end to replace legacy Java EE — clean N-Tier architecture with strict DTO-mapping, centralized error handling, and MDC-based distributed tracing — exposing contract-first, HATEOAS-compliant REST APIs (OpenAPI), backed by JUnit 5/MockMvc integration tests and Postman Collections with automated tests.
*   Managed the data layer with JPA/Hibernate: PostgreSQL replaced the legacy SQL databases (mainly Oracle SQL) and MongoDB introduced NoSQL to a previously SQL-only stack.
*   Rebuilt legacy JavaScript frontends as modern, responsive React/TypeScript components, optimizing the architecture with Effector (state management) and PrimeReact.
*   CI/CD: Built the legacy platform with Gradle on Jenkins and deployed to test and production; new services shipped via the Gradle Wrapper. Delivered to Azure Kubernetes (AKS) through build and release pipelines with Helm charts and NGINX ingress. Used Docker Compose for local development. Migrated source control from GitLab to Azure Repos. Legacy runs 6 releases/year on a Kanban board in Jira, while new services moved to continuous delivery.
*   Modernized the inherited Spring Boot parent build (OpenRewrite for automated version bumps past the BOM ceiling, a Renovate bot on Azure for dependency updates) and moved configuration from folder-based properties to Spring profiles.
*   Built an AI-augmented workflow across IntelliJ IDEA (CodeGPT on a local Azure LLM), Cursor, and Windsurf to document and analyze legacy code, extract requirements, and implement new services kept 100% SonarQube-clean.
*   Drove technical direction by prototyping and evaluating better approaches whenever I found one — proving them out in working code and running team workshops (REST/API-first design, modern React and Next.js, OpenRewrite for automated upgrades, Dependabot, and a Spring Cloud Gateway assessment to replace the custom DAT gateway).`,
    linkedinDescription: `Member of the development team behind SilverDAT "calculate", one of the leading platforms for calculating vehicle repair costs for workshops, insurance companies, manufacturers, banks, and appraisers.

**Responsibilities:**
* Development and architecture of modern Spring Boot microservices for the gradual replacement of existing Java EE systems
* Technical co-design of the modernization strategy for a mission-critical enterprise platform
* Development and optimization of React and TypeScript applications
* Further development of database architectures and migration of existing systems
* Setup and optimization of CI/CD processes as well as cloud deployments on Azure Kubernetes Services (AKS)
* Evaluation of new technologies and conducting technical workshops for the development team
* Support in architectural decisions and technical concepts

**Selected Achievements:**
* Successful participation in the transition of a classic SOA landscape to modern microservice architectures
* Introduction of modern continuous delivery processes for new applications and services
* Use of AI-supported development processes for the analysis and modernization of complex legacy systems
* Promotion of architecture standards, API-first approaches, and modern software development within the team`,
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
        category: 'Databases',
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
      { category: 'Methodology', skills: ['Agile', 'Kanban', 'Jira'] },
    ],
  },
  {
    id: 2,
    type: 'mid',
    role: 'Software Developer',
    company: 'evia solutions GmbH',
    companySize: '51-200 employees',
    industry: 'IT Services & Consulting',
    locationType: 'On-site',
    websiteUrl: 'https://www.evia.de',
    period: 'Feb 2016 - Aug 2020',
    summary: `Developer and consultant at a cross-industry IT system house, delivering custom and standard software across the Banking, Insurance, and enterprise Microsoft domains. Worked in cross-functional Scrum and SAFe teams, from legacy Java EE maintenance to a greenfield microservices migration.`,
    description: `*   Maintained, extended, deployed, and tested insurance-broker portals for Wüstenrot & Württembergische — business-critical Java EE 8 applications (JSF/Spring/Hibernate, JSP) on IBM WebSphere 7 and 8.5 with IBM DB2 and LDAP/Active Directory, the stable revenue base that funded the company's growth from ~16 to 200+ employees — hardening them with penetration testing to OWASP standards and using Rational Application Developer 9.1 and iText for document and PDF generation (Apache Directory Studio, Postman, Eclipse, SVN, Cherwell).
*   Helped establish the new "Microsoft Delivery" practice as primary developer, building an employee-onboarding solution on SharePoint Online (digital contract creation, onboarding journey, task management) and automating enterprise business processes with Microsoft Flow and Logic Apps (Office 365, JSON).
*   Earned the Pega Certified System Architect (CSA) certification in BPM-oriented development and Microsoft 70-480 (HTML5, JavaScript & CSS3, incl. jQuery and AJAX) along the way.
*   Built Daimler DSS "Digital Sales Solutions" — a greenfield banking application digitizing automobile-credit applications across multiple countries — developing modern Micronaut / JEE 11 microservices (Oracle SQL, PostgreSQL 12, Docker) behind an Angular frontend, with REST/SOAP integration services (OpenAPI) for B2B data exchange.
*   Owned developer testing and QA (JUnit, SonarQube) and CI/CD to test and integration environments (Git, Jenkins), supported the test team's automated end-to-end suites (Protractor, Cucumber), and delivered in Scrum and then SAFe across frontend, test, and DevOps sub-teams (Jira, Confluence, MS Teams).`,
    linkedinDescription: `Development of custom software solutions for clients in the insurance, banking, and Microsoft Enterprise Services sectors.

**Responsibilities:**
* Development and maintenance of mission-critical insurance platforms
* Participation in digitization and modernization projects in the Microsoft environment
* Development of modern banking solutions for international automotive financing processes
* Setup and support of automated test and deployment processes
* Close collaboration with business departments, test management, and DevOps teams
* Participation in Scrum and SAFe projects

**Selected Achievements:**
* Active support in establishing the new "Microsoft Delivery" business area
* Development of automation and onboarding solutions based on Microsoft technologies
* Participation in the development of international financing platforms for the automotive industry
* Introduction and further development of modern development and quality standards`,
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
        category: 'Databases',
        skills: ['Oracle SQL', 'PostgreSQL', 'IBM DB2', 'LDAP / Active Directory'],
      },
      {
        category: 'CI/CD & DevOps',
        skills: ['Git', 'SVN', 'Jenkins', 'Maven', 'Docker', 'IBM WebSphere (7 / 8.5)'],
      },
      {
        category: 'Testing & Quality',
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
      { category: 'Methodology', skills: ['Scrum', 'SAFe', 'BPM'] },
      { category: 'Certifications', skills: ['Pega CSA', 'Microsoft 70-480'] },
    ],
  },
  {
    id: 3,
    type: 'junior',
    role: 'Junior Software Developer',
    company: 'PRODYNA AG',
    companySize: '201-500 employees',
    industry: 'IT Consulting',
    locationType: 'On-site / Travel',
    websiteUrl: 'https://www.prodyna.com',
    period: 'Nov 2014 - Jan 2016',
    summary: `Developer and consultant at an IT consultancy, embedded on-site with a major enterprise client to deliver their portal project end to end — from consulting and design through implementation and testing.`,
    description: `*   Developed and delivered a Liferay 6.0 portal solution, with a Java 6 EE and MySQL backend and a JSP, HTML, CSS, JavaScript, and AlloyUI frontend.
*   Deployed and tested the applications on Apache Tomcat, ran CI/CD with Jenkins and Maven, and integrated SonarQube into the build process to safeguard code quality.
*   Delivered in agile Scrum teams (Jira, Confluence), and earned the Oracle Certified Professional Java Programmer (OCPJP) and Oracle Certified Expert Java EE 6 Web Component Developer (OCE WCD) certifications during the role.`,
    linkedinDescription: `Software developer and consultant for enterprise web applications.

**Responsibilities:**
* Conception and development of Java-based portal solutions
* Analysis, implementation, testing, and deployment of applications
* Working in agile Scrum teams
* Ensuring software quality and build automation

**Selected Achievements:**
* Successful implementation of a portal solution project for a major client
* Introduction of continuous integration and quality processes
* Acquisition of internationally recognized Oracle certifications`,
    tech: [
      { category: 'Backend', skills: ['Java 6 EE', 'Liferay 6.0', 'JSP'] },
      { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'AlloyUI'] },
      { category: 'Databases', skills: ['MySQL'] },
      { category: 'CI/CD & DevOps', skills: ['Apache Tomcat', 'Jenkins', 'Maven'] },
      { category: 'Testing & Quality', skills: ['SonarQube'] },
      { category: 'Tools', skills: ['Jira', 'Confluence'] },
      { category: 'Methodology', skills: ['Scrum'] },
      { category: 'Certifications', skills: ['OCPJP', 'OCE WCD'] },
    ],
  },
  {
    id: 4,
    type: 'intern',
    role: 'Internship in Software Development',
    company: 'Alpine Electronics R&D Europe',
    companySize: '1,000+ employees',
    industry: 'Automotive Electronics',
    locationType: 'On-site',
    websiteUrl: 'https://www.alpine.de/',
    dualStudy: 'ADV Böblingen',
    period: 'Sep 2012 - Aug 2013',
    summary: `System Integration Intern in the OEM Car Infotainment division, developing software modules for the internal "Alpine Test Automation Framework".`,
    description: `*   Developed and extended the internal Alpine Test Automation Framework (C#, .NET 4.0) by building automated testing modules for hardware interfaces such as Bluetooth, RDS signal generators, MOST/CAN buses, climate chambers, and CD/DVD changer robots.
*   Designed and implemented the "Alpine Voltage Curve Editor" — which earned a top 1.0 grade as a final vocational thesis — and modernized the graphical user interfaces of multiple existing test modules using WPF and the MVVM pattern.
*   Ensured architectural robustness across the test framework by applying UML modeling and design patterns in SharpDevelop.`,
    linkedinDescription: `* Development of automated test modules for hardware interfaces
* Implementation of desktop applications with C# and WPF
* Application of UML and Design Patterns for architectural improvement
* Final thesis with top grade (1.0)`,
    tech: [
      {
        category: 'Backend',
        skills: ['C#', '.NET 4.0', 'UML', 'Design Patterns', 'SharpDevelop', 'StyleCop'],
      },
      { category: 'Frontend & Mobile', skills: ['WPF', 'MVVM', 'Android SDK'] },
      { category: 'Hardware & Protocols', skills: ['Bluetooth', 'CAN', 'MOST', 'RDS'] },
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    type: 'dual-study',
    studyField: 'Technical Systems',
    degree: 'State-Certified Computer Scientist',
    school: 'Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)',
    url: 'https://gds2.de',
    location: 'Böblingen, Germany',
    year: '2011 - 2014',
    description:
      '3-year vocational trainin. Included a one-year practical internship at Alpine Electronics R&D Europe GmbH with the thesis: "Alpine Voltage Curve Editor" (Graded: Excellent).',
    grade: 'Passed with Commendation',
  },
  {
    id: 2,
    type: 'master',
    studyField: 'Mathematics Teacher Education',
    degree: 'Master',
    school: 'West University of Timișoara (Universitatea de Vest din Timișoara)',
    url: 'https://info.uvt.ro/en/',
    location: 'Timisoara, Romania',
    year: '2009 - 2011',
    description:
      "Advanced academic program focusing on complex mathematical models and educational methodologies. The first year of this Master's was completed abroad at the University of Stuttgart via the Erasmus program. Core coursework included: Vectorial Analysis, Advanced Algebra and Geometry, Iterative Methods, Statistical and Probabilistic Methods, and Educational Management Software.",
    grade: '7.70 / 10 (Year 1) & 7.66 / 10 (Year 2)',
  },
  {
    id: 3,
    type: 'bachelor',
    studyField: 'Mathematics and Computer Science',
    degree: 'Bachelor',
    school: 'West University of Timișoara (Universitatea de Vest din Timișoara)',
    url: 'https://info.uvt.ro/en/',
    location: 'Timisoara, Romania',
    year: '2006 - 2009',
    description:
      'Dual-focus curriculum bridging theoretical mathematics with applied computer science and software engineering. Core coursework included: Data Structures, Artificial Intelligence, Database Systems, Computer Networks, Computational Geometry, Logical and Functional Programming, and Mathematical Modeling/Simulation.',
    grade: '10 / 10 (Final Exam) | 9.02 / 10 (Overall Average)',
  },
  {
    id: 4,
    type: 'college',
    studyField: 'Mathematics and Computer Science',
    degree: 'High School Diploma (Baccalaureate)',
    school: 'National College of Computer Science "Spiru Haret" Suceava',
    url: 'https://www.cni-sv.ro/',
    location: 'Suceava, Romania',
    year: '2002 - 2006',
    description: 'Intensive Computer Science and Mathematics curriculum.',
    grade: '9.81 / 10',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'liviuionesi.com',
    description:
      'This portfolio site. It looks like the Antigravity IDE, with an activity bar, file explorer, search panel, status bar and command palette. It runs on the Next.js 16 App Router with the React Compiler. It has 4 languages (English, German, French, Romanian) and CV export to PDF. The contact form uses Google sign-in and Nodemailer, and shows the distance between the visitor and the office with the Geolocation API. Unit tests cover about 97% of the code, and Husky, ESLint and Prettier check every commit. The site scores 100 in all four Lighthouse categories.',
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
      'The website and documentation of Brevier, a PDF library with the formula HTML + CSS + JSON = PDF. Brevier has clients for Python, C#, TypeScript and Java, and supports German business documents: DIN 5008, hyphenation, multi-page tables and e-invoices (ZUGFeRD / Factur-X). The site is built with Nuxt 4 and prerendered to static HTML. It ships no framework scripts in production, uses no cookies or tracking, and comes in English and German. It scores 100 in all four Lighthouse categories.',
    tech: ['Nuxt 4', 'TypeScript', 'Vitest', 'Playwright', 'i18n (EN/DE)', 'Static prerendering'],
    githubUrl: '',
    deployUrl: 'https://www.brevier.dev',
  },
  {
    id: 3,
    title: 'karcher.liviuionesi.com',
    description:
      'My answer to a software architect challenge from Kärcher: a system for 1,000 robots and 100 operators. Part 1 is the design for AWS (IoT Core, Kinesis, Valkey, EKS, Cognito, Terraform), written as an arc42 document with an ADR for each decision. Part 2 is a working prototype: an MQTT broker with TLS and a login per robot, a Python backend, a Next.js dashboard and an Android app (Capacitor). One docker compose command starts it. The demo is live with simulated robots. The source code is private.',
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
      'LMDB (Live Movies Database) is a microservices platform that copies the TMDB v3 API, so the React app can use it in place of api.themoviedb.org. It saves movie and actor data on the first request and then serves it from its own database. It has 8 Spring Boot services on Java 25 with Spring Cloud, and uses MongoDB, PostgreSQL 17 and Redis. A local AI layer (Spring AI, Ollama, pgvector) gives chat, semantic search and natural-language search, and Vosk gives offline voice control. No paid AI API is used. Terraform deploys it to Azure AKS or AWS k3s on a $0 budget. It has 1,157 automated tests, 24 ADRs and CI/CD on GitHub Actions.',
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
  headline: 'Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js',
  location: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Germany',
  phone: '+49 1514 6966 832',
  address: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck',
  email: 'ionesiliviu@yahoo.com',
  connections: '500+',
  about:
    'Technical Lead & Senior Full-Stack Engineer. Building the digital backbone of the Automotive and Fintech industries. With over 13 years of experience in engineering high-performance distributed systems, I specialize in technical leadership, modernizing legacy architectures, and delivering scalable, cloud-native solutions.',
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Automotive & FinTech Specialist**

With over 13 years of experience in engineering high-performance distributed systems, I specialize in technical leadership, modernizing legacy architectures, and delivering scalable, cloud-native solutions. My career spans from developing critical automation frameworks at **Alpine Electronics** to driving the digital transformation of enterprise data platforms at **DAT Group**. I excel at guiding cross-functional teams to build robust software using modern tech stacks.

I bridge the gap between complex backend logic, intuitive frontend experiences, and strategic business goals. My core competencies include:

  * **Technical Leadership & Architecture**: Driving system design and advocating for the migration of monolithic **Java EE** applications to scalable **Microservices** (Spring Boot, Azure) and modern frontends (React/Next.js), significantly improving system resilience.
  * **Full-Stack Engineering Excellence**: Architecting and developing responsive, user-centric interfaces with **React, Next.js, and TypeScript**, seamlessly integrated with robust, secure **Java 21 / Spring Boot** APIs.
  * **DevOps & Quality Culture**: Championing **TDD**, **Clean Code** principles, and establishing CI/CD automation (Azure, GitHub Actions) to ensure high-quality, predictable software delivery. Mentoring engineering teams to elevate their technical standards.
  * **AI-Augmented Engineering**: Pioneering high-velocity software delivery by fusing enterprise-grade rigor (Epics, Agile/Scrum, CI/CD) with advanced AI-integrated workflows (Cursor, Windsurf). This approach accelerates greenfield development and streamlines the refactoring of complex legacy monoliths, effectively reducing technical debt.

---
*Currently seeking a Technical Lead role in Spring Boot and React ecosystems. Open to hybrid opportunities in the Stuttgart area or fully remote positions within Germany.*`,
  linkedinBio: `Technical Lead and Senior Full-Stack Engineer with over 10 years of experience in the development, modernization, and architecture of mission-critical enterprise applications in the automotive, banking, and insurance sectors.

Comprehensive expertise in designing modern software architectures, transforming legacy systems to microservice platforms, and providing technical leadership for development initiatives. Extensive experience in building scalable backend and frontend solutions using Java, Spring Boot, and React, as well as establishing modern Cloud and DevOps platforms.

Combines technical excellence with pragmatic architectural decisions and supports teams through knowledge transfer, technology evaluation, and the introduction of modern engineering practices.

### CORE COMPETENCIES

#### Technical Leadership
* Technical leadership of development initiatives and modernization projects
* Architectural decisions and technology evaluation
* Conducting technical workshops and knowledge transfer
* Mentoring and providing technical support to development teams
* Translating business requirements into viable technical solutions`,
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
    'AI Tools (Cursor, Windsurf, Antigravity, MCP)',
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
      url: 'https://ude.my/UC-70ca993d-e60a-436f-8673-739a57fe54da',
    },
    {
      name: 'Azure DevOps Fundamentals for Beginners',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-1ced9814-91c6-4ebc-b656-af2fbeeba0f9/',
    },
  ],
  languages: [
    { language: 'German', proficiency: 'Professional Proficiency' },
    { language: 'English', proficiency: 'Professional Proficiency' },
    { language: 'Romanian', proficiency: 'Native or Bilingual Proficiency' },
    { language: 'French', proficiency: 'Elementary Proficiency' },
  ],
};

export const about: AboutData = {
  greeting: '~/developer/portfolio',
  name: 'Liviu',
  suffix: '.io',
  lastName: 'NESI',
  description:
    'Technical Lead & Senior Full-Stack Engineer. Building the digital backbone of the Automotive and Fintech industries. I specialize in Spring Boot microservices, React frontends, and driving high-velocity, enterprise-grade software delivery through AI-augmented workflows.',
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: 'Projects, not just code',
  ctaSecondary: 'Contact Me',
};
