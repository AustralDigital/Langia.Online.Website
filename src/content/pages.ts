export type PageLanguage = "es" | "pt" | "en";

export type PageKey =
  | "programs"
  | "langiaOnline"
  | "talkinClub"
  | "testPrep"
  | "kidsTeens"
  | "corporate"
  | "about"
  | "legal"
  | "workWithUs"
  | "contact"
  | "levelTest"
  | "blog";

export type PageBlock = {
  title: string;
  body: string;
};

export type PageLink = {
  label: string;
  href: string;
};

export type MarketingPageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: readonly PageBlock[];
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  links?: readonly PageLink[];
  overview?: ProgramsOverviewContent;
  langiaOnlinePage?: LangiaOnlinePageContent;
  talkinClubPage?: TalkinClubPageContent;
  testPrepPage?: TestPrepPageContent;
  kidsTeensPage?: KidsTeensPageContent;
  corporatePage?: CorporatePageContent;
  contactPage?: ContactPageContent;
  aboutPage?: AboutPageContent;
  legalPage?: LegalPageContent;
  workWithUsPage?: WorkWithUsPageContent;
};

export type ProgramCardContent = {
  audience: string;
  name: string;
  description: string;
  highlights: readonly string[];
  href: string;
  imagePath: string;
};

export type ProgramComparisonItem = {
  program: string;
  bestFor: string;
  format: string;
  focus: string;
  practice: string;
  nextStep: string;
  href: string;
};

export type ProgramsOverviewContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  programCards: readonly ProgramCardContent[];
  cardCtaLabel: string;
  comparison: {
    eyebrow: string;
    title: string;
    body: string;
    headers: {
      program: string;
      bestFor: string;
      format: string;
      focus: string;
      practice: string;
      nextStep: string;
    };
    rows: readonly ProgramComparisonItem[];
  };
  finder: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    href: string;
  };
  corporate: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    href: string;
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

export type LangiaOnlinePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  who: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  formats: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly (PageBlock & { bestFor: string })[];
  };
  includes: {
    eyebrow: string;
    title: string;
    features: readonly PageBlock[];
  };
  tailored: {
    eyebrow: string;
    title: string;
    body: string;
  };
  levels: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  schedule: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: readonly string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    studentCreditTitle: string;
    studentCreditBody: string;
    payFullTitle: string;
    payFullBody: string;
    labels: {
      base: string;
      total: string;
      installments: string;
      payFull: string;
      highlight: string;
    };
    cards: readonly {
      title: string;
      studentCreditPerLesson: string;
      studentCreditTotal: string;
      installments: string;
      payFull: string;
    }[];
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type TalkinClubPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  who: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly PageBlock[];
  };
  topics: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  includes: {
    eyebrow: string;
    title: string;
    features: readonly PageBlock[];
  };
  tailored: {
    eyebrow: string;
    title: string;
    body: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly {
      title: string;
      price: string;
      unit: string;
      badge?: string;
      details: readonly string[];
      cta: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type TestPrepPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  exams: {
    eyebrow: string;
    title: string;
    body: string;
    groups: readonly {
      title: string;
      items: readonly string[];
    }[];
  };
  who: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly PageBlock[];
  };
  includes: {
    eyebrow: string;
    title: string;
    features: readonly PageBlock[];
  };
  skills: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  tailored: {
    eyebrow: string;
    title: string;
    body: string;
  };
  mocks: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
    note: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    cta: string;
    cards: readonly {
      title: string;
      price: string;
      unit: string;
      total: string;
      body: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type KidsTeensPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  who: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  formats: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly (PageBlock & { bestFor: string })[];
  };
  includes: {
    eyebrow: string;
    title: string;
    features: readonly PageBlock[];
  };
  classFeel: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  parentSafety: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  tailored: {
    eyebrow: string;
    title: string;
    body: string;
  };
  levels: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  schedule: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: readonly string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    studentCreditTitle: string;
    studentCreditBody: string;
    payFullTitle: string;
    payFullBody: string;
    labels: {
      base: string;
      total: string;
      installments: string;
      payFull: string;
      personalized: string;
      value: string;
    };
    cards: readonly {
      title: string;
      studentCreditPerLesson: string;
      studentCreditTotal: string;
      installments: string;
      payFull: string;
      badge?: "personalized" | "value";
    }[];
    cta: string;
  };
  schools: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type CorporatePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  overview: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  who: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  training: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  tailored: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: readonly string[];
  };
  tracking: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly PageBlock[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    body: string;
    useCases: readonly string[];
    industries: readonly string[];
  };
  formats: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
    delivery: readonly string[];
  };
  proposal: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type ContactPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    quickPoints: readonly string[];
  };
  form: {
    title: string;
    body: string;
    fields: {
      name: string;
      email: string;
      whatsapp: string;
      country: string;
      preferredLanguage: string;
      company: string;
      interest: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      whatsapp: string;
      country: string;
      company: string;
      message: string;
    };
    preferredLanguageOptions: readonly string[];
    interestOptions: readonly string[];
    submit: string;
    requiredError: string;
    configWarning: string;
    companyFallback: string;
  };
  contactCards: readonly PageBlock[];
  next: {
    eyebrow: string;
    title: string;
    steps: readonly string[];
  };
  presence: {
    eyebrow: string;
    title: string;
    body: string;
    addressLabel: string;
    address: string;
    socialLabel: string;
  };
  finalCta: {
    title: string;
    body: string;
    cta: string;
  };
  whatsappMessage: {
    intro: string;
    name: string;
    email: string;
    whatsapp: string;
    country: string;
    preferredLanguage: string;
    company: string;
    interest: string;
    message: string;
  };
};

export type AboutPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  origin: {
    eyebrow: string;
    title: string;
    body: string;
    timeline: readonly {
      year: string;
      label: string;
    }[];
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  difference: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  ai: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: readonly string[];
  };
  values: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  presence: {
    eyebrow: string;
    title: string;
    body: string;
    languages: readonly string[];
    locationNote: string;
  };
  not: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export type LegalSectionContent = {
  id: string;
  title: string;
  body: readonly string[];
};

export type LegalPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    quickFacts: readonly string[];
    note: string;
  };
  nav: readonly {
    label: string;
    href: string;
  }[];
  sections: readonly LegalSectionContent[];
  contact: {
    title: string;
    body: string;
    companyLabel: string;
    addressLabel: string;
    jurisdictionLabel: string;
    company: string;
    address: string;
    jurisdiction: string;
    cta: string;
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
  };
};

export type WorkWithUsPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    quickFacts: readonly string[];
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  profile: {
    eyebrow: string;
    title: string;
    body: string;
    cards: readonly PageBlock[];
  };
  languages: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  requirements: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly PageBlock[];
    deviceNote: string;
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: readonly PageBlock[];
  };
  form: {
    title: string;
    body: string;
    note: string;
    fields: {
      name: string;
      email: string;
      whatsapp: string;
      country: string;
      teachingLanguages: string;
      spokenLanguages: string;
      experience: string;
      audience: string;
      technicalConfirmation: string;
      message: string;
      link: string;
      availability: string;
      notes: string;
    };
    placeholders: {
      name: string;
      email: string;
      whatsapp: string;
      country: string;
      spokenLanguages: string;
      message: string;
      link: string;
      availability: string;
      notes: string;
    };
    teachingLanguageOptions: readonly string[];
    experienceOptions: readonly string[];
    audienceOptions: readonly string[];
    technicalConfirmation: string;
    submit: string;
    requiredError: string;
    configWarning: string;
    selectPlaceholder: string;
    fallbackNotProvided: string;
    yes: string;
    no: string;
  };
  whatsappMessage: {
    intro: string;
    name: string;
    email: string;
    whatsapp: string;
    country: string;
    teachingLanguages: string;
    spokenLanguages: string;
    experience: string;
    audience: string;
    availability: string;
    link: string;
    technicalConfirmation: string;
    message: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly PageBlock[];
  };
  finalCta: {
    title: string;
    body: string;
    primaryCta: string;
  };
};

const programBlocks = {
  es: [
    { title: "Para quién es", body: "Un espacio para describir el perfil de estudiante, sus metas y el ritmo ideal." },
    { title: "Qué incluye la experiencia", body: "Aquí se resumirán clases, acompañamiento, práctica y recursos clave del programa." },
    { title: "Cómo funciona el progreso", body: "Esta sección explicará niveles, seguimiento y próximos pasos de aprendizaje." },
  ],
  pt: [
    { title: "Para quem é", body: "Um espaço para descrever o perfil do estudante, seus objetivos e o ritmo ideal." },
    { title: "O que a experiência inclui", body: "Aqui serão resumidos aulas, acompanhamento, prática e recursos principais do programa." },
    { title: "Como o progresso funciona", body: "Esta seção explicará níveis, acompanhamento e próximos passos de aprendizagem." },
  ],
  en: [
    { title: "Who it is for", body: "A place to describe the learner profile, goals, and ideal rhythm." },
    { title: "What the experience includes", body: "This will summarize classes, guidance, practice, and key program resources." },
    { title: "How progress works", body: "This section will explain levels, follow-up, and next learning steps." },
  ],
} as const;

const cta = {
  es: {
    title: "¿Listo para conversar?",
    body: "Cuéntanos tus metas y te ayudaremos a elegir el siguiente paso.",
    primaryLabel: "Contactar Langia",
    primaryHref: "/contact",
    secondaryLabel: "Ver programas",
    secondaryHref: "/programs",
  },
  pt: {
    title: "Pronto para conversar?",
    body: "Conte seus objetivos e ajudaremos você a escolher o próximo passo.",
    primaryLabel: "Falar com a Langia",
    primaryHref: "/contact",
    secondaryLabel: "Ver programas",
    secondaryHref: "/programs",
  },
  en: {
    title: "Ready to talk?",
    body: "Tell us your goals and we will help you choose the next step.",
    primaryLabel: "Contact Langia",
    primaryHref: "/contact",
    secondaryLabel: "View programs",
    secondaryHref: "/programs",
  },
} as const;

const programImagePaths = {
  langiaOnline: "/images/programs/langia-online.webp",
  talkinClub: "/images/programs/talkin-club.webp",
  testPrep: "/images/programs/test-prep.webp",
  kidsTeens: "/images/programs/kids-teens.webp",
  corporate: "/images/programs/corporate.webp",
} as const;

const aboutPageContent: Record<PageLanguage, AboutPageContent> = {
  es: {
    hero: {
      eyebrow: "Sobre Langia",
      title: "Una compañía creada para aprender idiomas con más claridad.",
      body: "Desde 2020, Langia combina clases en vivo, guía humana y tecnología útil para crear rutas de aprendizaje más flexibles, seguras y personales.",
      primaryCta: "Hablar con Langia",
      secondaryCta: "Explorar programas",
      quickFacts: ["Fundada en 2020", "Compañía internacional", "Human-led, AI-assisted", "4 idiomas"],
    },
    origin: {
      eyebrow: "Origen",
      title: "Nacimos escuchando a estudiantes y docentes.",
      body: "Langia fue creada con la mirada de clientes y profesores de idiomas de distintas partes del mundo. Esa conversación nos ayudó a entender una idea simple: aprender un idioma funciona mejor cuando la experiencia se adapta a la persona, al contexto y al objetivo.",
      timeline: [
        { year: "2020", label: "Fundada" },
        { year: "Hoy", label: "Aprendizaje online internacional" },
      ],
    },
    why: {
      eyebrow: "Por qué existimos",
      title: "Había un espacio entre lo que los estudiantes necesitaban y lo que el mercado ofrecía.",
      body: "Muchas personas necesitaban aprender idiomas de una forma más flexible, más cercana y más accesible. Muchos docentes también necesitaban mejores herramientas para adaptar sus clases a cada caso. Langia existe para cerrar esa brecha.",
      cards: [
        { title: "Para estudiantes", body: "Rutas más claras, clases en vivo y aprendizaje que se ajusta a metas reales." },
        { title: "Para familias", body: "Acompañamiento, seguimiento y una experiencia educativa más confiable." },
        { title: "Para compañías", body: "Soluciones lingüísticas diseñadas alrededor de equipos, roles y objetivos operativos." },
        { title: "Para docentes", body: "Herramientas y estructura para enseñar con más contexto y dirección." },
      ],
    },
    difference: {
      eyebrow: "Diferencia",
      title: "Aprendizaje humano, con estructura y personalización.",
      body: "Langia no busca reemplazar al docente ni convertir el aprendizaje en una experiencia automática. Usamos tecnología para apoyar mejores decisiones, pero la experiencia sigue siendo humana, cercana y guiada.",
      cards: [
        { title: "Clases en vivo", body: "La interacción humana sigue en el centro." },
        { title: "Rutas claras", body: "Cada programa tiene estructura, seguimiento y dirección." },
        { title: "Personalización real", body: "Los objetivos, ritmos y contextos importan." },
        { title: "Tecnología útil", body: "La IA apoya el proceso sin reemplazar la relación educativa." },
      ],
    },
    ai: {
      eyebrow: "Human-led, AI-assisted",
      title: "La tecnología ayuda. El aprendizaje sigue siendo humano.",
      body: "Langia usa herramientas personalizables de IA para apoyar cada caso y cada estudiante: diagnóstico, objetivos, contexto, ritmo, feedback y seguimiento. Pero las clases, la guía y la relación educativa siguen siendo lideradas por personas.",
      bullets: ["Docentes expertos", "Herramientas personalizables", "Feedback humano", "Seguimiento con más contexto", "Aprendizaje orientado a metas"],
    },
    values: {
      eyebrow: "Valores",
      title: "Lo que guía nuestra forma de enseñar.",
      items: [
        { title: "Claridad", body: "Aprender mejor empieza por entender hacia dónde vas y qué viene después." },
        { title: "Flexibilidad", body: "La vida cambia; la ruta de aprendizaje debe poder adaptarse." },
        { title: "Humanidad", body: "La confianza crece cuando hay guía, escucha y feedback real." },
        { title: "Cercanía", body: "La educación funciona mejor cuando se siente acompañada, no distante." },
      ],
    },
    presence: {
      eyebrow: "Presencia internacional",
      title: "Cuatro idiomas para personas y equipos que se mueven entre culturas.",
      body: "Langia trabaja con estudiantes, familias y compañías en distintos países. Somos una compañía internacional legalmente ubicada en Estados Unidos, con una operación online pensada para comunicación global.",
      languages: ["Inglés", "Francés", "Español", "Portugués"],
      locationNote: "Langia está legalmente ubicada en Estados Unidos.",
    },
    not: {
      eyebrow: "Lo que no somos",
      title: "No somos una plataforma más.",
      body: "Langia no es una app, un catálogo masivo de cursos grabados ni una experiencia automática sin acompañamiento. Nuestro trabajo está en combinar estructura, tecnología útil y guía humana para crear aprendizaje con dirección.",
      items: ["No somos solo una app", "No somos cursos masivos pregrabados", "No somos clases genéricas de talla única", "No somos una experiencia automática sin guía humana"],
    },
    finalCta: {
      title: "Hablemos de la ruta que necesitas.",
      body: "Ya sea para ti, tu familia o tu equipo, Langia puede ayudarte a encontrar una forma más clara de avanzar.",
      primaryCta: "Hablar con Langia",
      secondaryCta: "Ver programas",
    },
  },
  pt: {
    hero: {
      eyebrow: "Sobre a Langia",
      title: "Uma empresa criada para aprender idiomas com mais clareza.",
      body: "Desde 2020, a Langia combina aulas ao vivo, orientação humana e tecnologia útil para criar rotas de aprendizagem mais flexíveis, seguras e pessoais.",
      primaryCta: "Falar com a Langia",
      secondaryCta: "Explorar programas",
      quickFacts: ["Fundada em 2020", "Empresa internacional", "Human-led, AI-assisted", "4 idiomas"],
    },
    origin: {
      eyebrow: "Origem",
      title: "Nascemos ouvindo alunos e professores.",
      body: "A Langia foi criada com a visão de clientes e professores de idiomas de diferentes partes do mundo. Essa conversa nos ajudou a entender uma ideia simples: aprender um idioma funciona melhor quando a experiência se adapta à pessoa, ao contexto e ao objetivo.",
      timeline: [
        { year: "2020", label: "Fundada" },
        { year: "Hoje", label: "Aprendizagem online internacional" },
      ],
    },
    why: {
      eyebrow: "Por que existimos",
      title: "Havia um espaço entre o que os alunos precisavam e o que o mercado oferecia.",
      body: "Muitas pessoas precisavam aprender idiomas de uma forma mais flexível, próxima e acessível. Muitos professores também precisavam de melhores ferramentas para adaptar suas aulas a cada caso. A Langia existe para fechar essa lacuna.",
      cards: [
        { title: "Para alunos", body: "Rotas mais claras, aulas ao vivo e aprendizagem ajustada a objetivos reais." },
        { title: "Para famílias", body: "Acompanhamento, relatórios e uma experiência educativa mais confiável." },
        { title: "Para empresas", body: "Soluções linguísticas desenhadas ao redor de equipes, funções e objetivos operacionais." },
        { title: "Para professores", body: "Ferramentas e estrutura para ensinar com mais contexto e direção." },
      ],
    },
    difference: {
      eyebrow: "Diferença",
      title: "Aprendizagem humana, com estrutura e personalização.",
      body: "A Langia não busca substituir o professor nem transformar a aprendizagem em uma experiência automática. Usamos tecnologia para apoiar melhores decisões, mas a experiência continua humana, próxima e guiada.",
      cards: [
        { title: "Aulas ao vivo", body: "A interação humana continua no centro." },
        { title: "Rotas claras", body: "Cada programa tem estrutura, acompanhamento e direção." },
        { title: "Personalização real", body: "Objetivos, ritmos e contextos importam." },
        { title: "Tecnologia útil", body: "A IA apoia o processo sem substituir a relação educativa." },
      ],
    },
    ai: {
      eyebrow: "Human-led, AI-assisted",
      title: "A tecnologia ajuda. A aprendizagem continua humana.",
      body: "A Langia usa ferramentas personalizáveis de IA para apoiar cada caso e cada aluno: diagnóstico, objetivos, contexto, ritmo, feedback e acompanhamento. Mas as aulas, a orientação e a relação educativa continuam lideradas por pessoas.",
      bullets: ["Professores especialistas", "Ferramentas personalizáveis", "Feedback humano", "Acompanhamento com mais contexto", "Aprendizagem orientada a objetivos"],
    },
    values: {
      eyebrow: "Valores",
      title: "O que guia nossa forma de ensinar.",
      items: [
        { title: "Clareza", body: "Aprender melhor começa por entender para onde você vai e o que vem depois." },
        { title: "Flexibilidade", body: "A vida muda; a rota de aprendizagem precisa poder se adaptar." },
        { title: "Humanidade", body: "A confiança cresce quando há orientação, escuta e feedback real." },
        { title: "Proximidade", body: "A educação funciona melhor quando se sente acompanhada, não distante." },
      ],
    },
    presence: {
      eyebrow: "Presença internacional",
      title: "Quatro idiomas para pessoas e equipes que se movem entre culturas.",
      body: "A Langia trabalha com alunos, famílias e empresas em diferentes países. Somos uma empresa internacional legalmente localizada nos Estados Unidos, com uma operação online pensada para comunicação global.",
      languages: ["Inglês", "Francês", "Espanhol", "Português"],
      locationNote: "A Langia está legalmente localizada nos Estados Unidos.",
    },
    not: {
      eyebrow: "O que não somos",
      title: "Não somos mais uma plataforma.",
      body: "A Langia não é um app, um catálogo massivo de cursos gravados nem uma experiência automática sem acompanhamento. Nosso trabalho está em combinar estrutura, tecnologia útil e orientação humana para criar aprendizagem com direção.",
      items: ["Não somos apenas um app", "Não somos cursos massivos gravados", "Não somos aulas genéricas iguais para todos", "Não somos uma experiência automática sem orientação humana"],
    },
    finalCta: {
      title: "Vamos falar sobre a rota que você precisa.",
      body: "Seja para você, sua família ou sua equipe, a Langia pode ajudar a encontrar uma forma mais clara de avançar.",
      primaryCta: "Falar com a Langia",
      secondaryCta: "Ver programas",
    },
  },
  en: {
    hero: {
      eyebrow: "About Langia",
      title: "A company built for clearer language learning.",
      body: "Since 2020, Langia has combined live classes, human guidance, and useful technology to create more flexible, safe, and personal learning paths.",
      primaryCta: "Talk to Langia",
      secondaryCta: "Explore programs",
      quickFacts: ["Founded in 2020", "International company", "Human-led, AI-assisted", "4 languages"],
    },
    origin: {
      eyebrow: "Origin",
      title: "We were built by listening to learners and teachers.",
      body: "Langia was created with input from customers and language teachers from different parts of the world. That conversation helped us understand a simple idea: language learning works better when the experience adapts to the person, the context, and the goal.",
      timeline: [
        { year: "2020", label: "Founded" },
        { year: "Today", label: "International online language learning" },
      ],
    },
    why: {
      eyebrow: "Why we exist",
      title: "There was a gap between what learners needed and what the market offered.",
      body: "Many people needed language learning that was more flexible, closer, and more accessible. Many teachers also needed better tools to adapt their classes to each case. Langia exists to close that gap.",
      cards: [
        { title: "For learners", body: "Clearer paths, live classes, and learning aligned with real goals." },
        { title: "For families", body: "Guidance, follow-up, and a more trustworthy educational experience." },
        { title: "For companies", body: "Language solutions designed around teams, roles, and operational goals." },
        { title: "For teachers", body: "Tools and structure to teach with more context and direction." },
      ],
    },
    difference: {
      eyebrow: "Difference",
      title: "Human learning, with structure and personalization.",
      body: "Langia does not try to replace the teacher or turn learning into an automated experience. We use technology to support better decisions, but the experience remains human, close, and guided.",
      cards: [
        { title: "Live classes", body: "Human interaction stays at the center." },
        { title: "Clear paths", body: "Every program has structure, follow-up, and direction." },
        { title: "Real personalization", body: "Goals, rhythms, and contexts matter." },
        { title: "Useful technology", body: "AI supports the process without replacing the educational relationship." },
      ],
    },
    ai: {
      eyebrow: "Human-led, AI-assisted",
      title: "Technology helps. Learning stays human.",
      body: "Langia uses customizable AI tools to support every case and every student: diagnostics, goals, context, rhythm, feedback, and follow-up. But classes, guidance, and the educational relationship remain led by people.",
      bullets: ["Expert teachers", "Customizable tools", "Human feedback", "More contextual follow-up", "Goal-oriented learning"],
    },
    values: {
      eyebrow: "Values",
      title: "What guides the way we teach.",
      items: [
        { title: "Clarity", body: "Better learning begins with understanding where you are going and what comes next." },
        { title: "Flexibility", body: "Life changes; the learning path should be able to adapt." },
        { title: "Humanity", body: "Confidence grows when there is guidance, listening, and real feedback." },
        { title: "Closeness", body: "Education works better when it feels supported, not distant." },
      ],
    },
    presence: {
      eyebrow: "International presence",
      title: "Four languages for people and teams moving between cultures.",
      body: "Langia works with learners, families, and companies across countries. We are an international company legally located in the United States, with an online operation designed for global communication.",
      languages: ["English", "French", "Spanish", "Portuguese"],
      locationNote: "Langia is legally located in the United States.",
    },
    not: {
      eyebrow: "What we are not",
      title: "We are not just another platform.",
      body: "Langia is not an app, a massive catalog of recorded courses, or an automated experience without support. Our work is to combine structure, useful technology, and human guidance to create learning with direction.",
      items: ["We are not just an app", "We are not massive pre-recorded courses", "We are not generic one-size-fits-all classes", "We are not an automated experience without human guidance"],
    },
    finalCta: {
      title: "Let's talk about the path you need.",
      body: "Whether it is for you, your family, or your team, Langia can help you find a clearer way forward.",
      primaryCta: "Talk to Langia",
      secondaryCta: "View programs",
    },
  },
};

const legalPageContent: Record<PageLanguage, LegalPageContent> = {
  es: {
    hero: {
      eyebrow: "Legal",
      title: "Políticas e información legal.",
      body: "Consulta las políticas generales de Langia Language Solutions LLC sobre servicios, privacidad, pagos, reprogramaciones y comunicación.",
      quickFacts: ["Langia Language Solutions LLC", "Wyoming, Estados Unidos", "Servicios online e internacionales", "Políticas generales"],
      note: "Esta página resume políticas generales de Langia Language Solutions LLC. La versión final puede ser actualizada o complementada por acuerdos específicos de servicio.",
    },
    nav: [
      { label: "Términos de servicio", href: "#terms" },
      { label: "Privacidad", href: "#privacy" },
      { label: "WhatsApp", href: "#whatsapp" },
      { label: "Pagos y reembolsos", href: "#payments" },
      { label: "Reprogramaciones", href: "#rescheduling" },
      { label: "Menores", href: "#minors" },
      { label: "Exámenes y resultados", href: "#results" },
      { label: "Propiedad intelectual", href: "#intellectual-property" },
      { label: "Servicios corporativos", href: "#corporate" },
      { label: "Cookies y analítica", href: "#cookies" },
    ],
    sections: [
      { id: "terms", title: "Términos de servicio", body: ["Al contratar o utilizar servicios de Langia Language Solutions LLC, el usuario acepta participar de forma respetuosa, proporcionar información veraz y cumplir con las condiciones acordadas para el servicio elegido. Los servicios de Langia pueden incluir clases en vivo, programas de idiomas, preparación de exámenes, servicios corporativos, traducción, localización e interpretación.", "Los detalles específicos de cada servicio, incluyendo alcance, duración, frecuencia, modalidad, precio y condiciones adicionales, pueden ser definidos en una propuesta, conversación comercial, confirmación escrita o acuerdo específico."] },
      { id: "privacy", title: "Privacidad y datos personales", body: ["Langia puede recopilar información personal cuando una persona completa formularios, escribe por WhatsApp, solicita información, participa en entrevistas de diagnóstico o contrata un servicio.", "Esta información puede incluir nombre, correo electrónico, número de WhatsApp, país, idioma de interés, empresa, programa de interés, mensaje, objetivos de aprendizaje, nivel aproximado, disponibilidad, necesidades educativas y otra información compartida voluntariamente durante el proceso.", "Langia utiliza esta información para responder solicitudes, orientar al usuario, personalizar programas, coordinar servicios, dar seguimiento académico, preparar propuestas y mejorar la experiencia educativa.", "Langia no debe vender información personal a terceros. La información puede ser compartida internamente con personal autorizado, docentes, coordinadores o proveedores necesarios para prestar el servicio."] },
      { id: "whatsapp", title: "Comunicación por WhatsApp", body: ["Al enviar el formulario de contacto o comunicarse con Langia por WhatsApp, el usuario acepta continuar la conversación a través de este canal. WhatsApp puede estar sujeto a sus propias políticas de privacidad y condiciones de uso.", "Langia puede utilizar WhatsApp para responder solicitudes, coordinar entrevistas, compartir información de programas, confirmar detalles de servicio, dar seguimiento y atender preguntas relacionadas con la experiencia contratada."] },
      { id: "payments", title: "Pagos y reembolsos", body: ["Los precios, formas de pago, cuotas, descuentos y condiciones específicas pueden variar según el programa o servicio contratado. Los detalles aplicables se confirmarán durante el proceso comercial o en la propuesta correspondiente.", "Un reembolso completo puede estar disponible antes de que el usuario haya tomado el 10% del programa contratado. Después de ese punto, cualquier reembolso, crédito, ajuste o solución alternativa podrá ser evaluado según el caso, el servicio contratado, el avance del programa y las condiciones acordadas.", "Los servicios corporativos, traducción, localización e interpretación pueden estar sujetos a condiciones de pago, cancelación y alcance definidas en propuestas o acuerdos específicos."] },
      { id: "rescheduling", title: "Reprogramaciones", body: ["Langia busca ser flexible con la agenda de sus estudiantes y clientes. Como regla general, las solicitudes de reprogramación deben realizarse con al menos 6 horas de anticipación para que puedan aplicar plenamente.", "Las solicitudes realizadas con menos de 6 horas de anticipación podrán ser aceptadas, reprogramadas o movidas a otro momento a discreción de la compañía y según la disponibilidad del docente, proveedor o equipo correspondiente.", "La disponibilidad de horarios, docentes y proveedores puede variar según el programa, idioma, modalidad y zona horaria."] },
      { id: "minors", title: "Menores y consentimiento de padres", body: ["Los programas para niños y adolescentes requieren la participación o autorización de un padre, madre, acudiente o representante legal. Al contratar un servicio para un menor, el adulto responsable confirma que tiene autoridad para hacerlo y acepta participar en la comunicación necesaria para coordinar el programa.", "Langia puede compartir reportes, observaciones y actualizaciones con el adulto responsable del menor, especialmente en programas como Langia 4 Kids n Teens."] },
      { id: "results", title: "Exámenes, resultados y garantías", body: ["Langia puede ofrecer preparación para exámenes, certificaciones y metas académicas o profesionales. Sin embargo, Langia no garantiza resultados oficiales, puntajes específicos, aprobación de exámenes, visas, admisiones, empleos, ascensos ni resultados externos.", "El progreso y desempeño del estudiante pueden depender de factores como nivel inicial, asistencia, frecuencia, dedicación, práctica, condiciones del examen y circunstancias personales. Los reportes de desempeño de Langia sirven como referencia educativa, no como garantía de resultado oficial."] },
      { id: "intellectual-property", title: "Propiedad intelectual", body: ["Los materiales, diseños, textos, imágenes, recursos, metodologías, contenidos de clase, documentos, actividades, estructuras de programas, materiales de marca y elementos digitales creados o proporcionados por Langia pueden estar protegidos por derechos de propiedad intelectual.", "El usuario no debe copiar, distribuir, revender, publicar, modificar o utilizar materiales de Langia con fines comerciales o no autorizados sin permiso escrito."] },
      { id: "corporate", title: "Servicios corporativos y propuestas", body: ["Los servicios corporativos, incluyendo capacitación, traducción, localización e interpretación, pueden estar sujetos a propuestas, alcances, precios, cronogramas, entregables y condiciones particulares.", "En servicios corporativos, los objetivos definidos por la compañía pueden guiar el diseño del programa o servicio. Los acuerdos corporativos específicos pueden complementar o reemplazar ciertas condiciones generales de esta página."] },
      { id: "cookies", title: "Cookies y analítica", body: ["Langia puede utilizar cookies, herramientas de analítica o tecnologías similares para entender el uso del sitio web, mejorar la experiencia del usuario y evaluar el desempeño de sus páginas. Esta sección podrá actualizarse cuando se implementen herramientas específicas."] },
      { id: "updates", title: "Actualizaciones", body: ["Langia puede actualizar estas políticas para reflejar cambios en servicios, procesos, requisitos legales o decisiones operativas. La versión publicada en esta página será la referencia general disponible para los usuarios."] },
    ],
    contact: { title: "Contacto legal", body: "Para preguntas relacionadas con estas políticas, puedes contactar a Langia a través de la página de contacto.", companyLabel: "Compañía", addressLabel: "Dirección", jurisdictionLabel: "Jurisdicción", company: "Langia Language Solutions LLC", address: "1309 Coffeen Avenue, Sheridan, Wyoming", jurisdiction: "Wyoming, Estados Unidos", cta: "Contactar a Langia" },
    finalCta: { title: "¿Tienes preguntas sobre nuestras políticas?", body: "Escríbenos y te orientaremos sobre el servicio, programa o proceso correspondiente.", primaryCta: "Contactar a Langia" },
  },
  pt: {
    hero: { eyebrow: "Legal", title: "Políticas e informações legais.", body: "Consulte as políticas gerais da Langia Language Solutions LLC sobre serviços, privacidade, pagamentos, remarcações e comunicação.", quickFacts: ["Langia Language Solutions LLC", "Wyoming, Estados Unidos", "Serviços online e internacionais", "Políticas gerais"], note: "Esta página resume políticas gerais da Langia Language Solutions LLC. A versão final pode ser atualizada ou complementada por acordos específicos de serviço." },
    nav: [{ label: "Termos de serviço", href: "#terms" }, { label: "Privacidade", href: "#privacy" }, { label: "WhatsApp", href: "#whatsapp" }, { label: "Pagamentos e reembolsos", href: "#payments" }, { label: "Remarcações", href: "#rescheduling" }, { label: "Menores", href: "#minors" }, { label: "Exames e resultados", href: "#results" }, { label: "Propriedade intelectual", href: "#intellectual-property" }, { label: "Serviços corporativos", href: "#corporate" }, { label: "Cookies e análise", href: "#cookies" }],
    sections: [
      { id: "terms", title: "Termos de serviço", body: ["Ao contratar ou utilizar serviços da Langia Language Solutions LLC, o usuário aceita participar de forma respeitosa, fornecer informações verdadeiras e cumprir as condições acordadas para o serviço escolhido. Os serviços da Langia podem incluir aulas ao vivo, programas de idiomas, preparação para exames, serviços corporativos, tradução, localização e interpretação.", "Os detalhes específicos de cada serviço, incluindo escopo, duração, frequência, modalidade, preço e condições adicionais, podem ser definidos em uma proposta, conversa comercial, confirmação escrita ou acordo específico."] },
      { id: "privacy", title: "Privacidade e dados pessoais", body: ["A Langia pode coletar informações pessoais quando uma pessoa preenche formulários, escreve pelo WhatsApp, solicita informações, participa de entrevistas de diagnóstico ou contrata um serviço.", "Essas informações podem incluir nome, e-mail, número de WhatsApp, país, idioma de interesse, empresa, programa de interesse, mensagem, objetivos de aprendizagem, nível aproximado, disponibilidade, necessidades educacionais e outras informações compartilhadas voluntariamente durante o processo.", "A Langia utiliza essas informações para responder solicitações, orientar o usuário, personalizar programas, coordenar serviços, acompanhar o progresso acadêmico, preparar propostas e melhorar a experiência educativa.", "A Langia não deve vender informações pessoais a terceiros. As informações podem ser compartilhadas internamente com pessoal autorizado, professores, coordenadores ou fornecedores necessários para prestar o serviço."] },
      { id: "whatsapp", title: "Comunicação pelo WhatsApp", body: ["Ao enviar o formulário de contato ou se comunicar com a Langia pelo WhatsApp, o usuário aceita continuar a conversa por esse canal. O WhatsApp pode estar sujeito às suas próprias políticas de privacidade e condições de uso.", "A Langia pode utilizar o WhatsApp para responder solicitações, coordenar entrevistas, compartilhar informações de programas, confirmar detalhes de serviço, acompanhar processos e responder perguntas relacionadas à experiência contratada."] },
      { id: "payments", title: "Pagamentos e reembolsos", body: ["Preços, formas de pagamento, parcelas, descontos e condições específicas podem variar conforme o programa ou serviço contratado. Os detalhes aplicáveis serão confirmados durante o processo comercial ou na proposta correspondente.", "Um reembolso completo pode estar disponível antes de o usuário ter realizado 10% do programa contratado. Após esse ponto, qualquer reembolso, crédito, ajuste ou solução alternativa poderá ser avaliado conforme o caso, o serviço contratado, o avanço do programa e as condições acordadas.", "Serviços corporativos, tradução, localização e interpretação podem estar sujeitos a condições de pagamento, cancelamento e escopo definidas em propostas ou acordos específicos."] },
      { id: "rescheduling", title: "Remarcações", body: ["A Langia busca ser flexível com a agenda de seus alunos e clientes. Como regra geral, as solicitações de remarcação devem ser feitas com pelo menos 6 horas de antecedência para que possam ser aplicadas plenamente.", "Solicitações feitas com menos de 6 horas de antecedência poderão ser aceitas, remarcadas ou transferidas para outro momento a critério da empresa e conforme a disponibilidade do professor, fornecedor ou equipe correspondente.", "A disponibilidade de horários, professores e fornecedores pode variar conforme o programa, idioma, modalidade e fuso horário."] },
      { id: "minors", title: "Menores e consentimento dos pais", body: ["Programas para crianças e adolescentes exigem a participação ou autorização de um pai, mãe, responsável ou representante legal. Ao contratar um serviço para um menor, o adulto responsável confirma que tem autoridade para fazê-lo e aceita participar da comunicação necessária para coordenar o programa.", "A Langia pode compartilhar relatórios, observações e atualizações com o adulto responsável pelo menor, especialmente em programas como Langia 4 Kids n Teens."] },
      { id: "results", title: "Exames, resultados e garantias", body: ["A Langia pode oferecer preparação para exames, certificações e objetivos acadêmicos ou profissionais. No entanto, a Langia não garante resultados oficiais, pontuações específicas, aprovação em exames, vistos, admissões, empregos, promoções ou resultados externos.", "O progresso e desempenho do aluno podem depender de fatores como nível inicial, presença, frequência, dedicação, prática, condições do exame e circunstâncias pessoais. Os relatórios de desempenho da Langia servem como referência educativa, não como garantia de resultado oficial."] },
      { id: "intellectual-property", title: "Propriedade intelectual", body: ["Materiais, designs, textos, imagens, recursos, metodologias, conteúdos de aula, documentos, atividades, estruturas de programas, materiais de marca e elementos digitais criados ou fornecidos pela Langia podem estar protegidos por direitos de propriedade intelectual.", "O usuário não deve copiar, distribuir, revender, publicar, modificar ou utilizar materiais da Langia para fins comerciais ou não autorizados sem permissão escrita."] },
      { id: "corporate", title: "Serviços corporativos e propostas", body: ["Serviços corporativos, incluindo treinamento, tradução, localização e interpretação, podem estar sujeitos a propostas, escopos, preços, cronogramas, entregáveis e condições particulares.", "Em serviços corporativos, os objetivos definidos pela empresa podem orientar o desenho do programa ou serviço. Acordos corporativos específicos podem complementar ou substituir certas condições gerais desta página."] },
      { id: "cookies", title: "Cookies e análise", body: ["A Langia pode utilizar cookies, ferramentas de análise ou tecnologias semelhantes para entender o uso do site, melhorar a experiência do usuário e avaliar o desempenho de suas páginas. Esta seção poderá ser atualizada quando ferramentas específicas forem implementadas."] },
      { id: "updates", title: "Atualizações", body: ["A Langia pode atualizar estas políticas para refletir mudanças em serviços, processos, requisitos legais ou decisões operacionais. A versão publicada nesta página será a referência geral disponível para os usuários."] },
    ],
    contact: { title: "Contato legal", body: "Para perguntas relacionadas a estas políticas, você pode entrar em contato com a Langia pela página de contato.", companyLabel: "Empresa", addressLabel: "Endereço", jurisdictionLabel: "Jurisdição", company: "Langia Language Solutions LLC", address: "1309 Coffeen Avenue, Sheridan, Wyoming", jurisdiction: "Wyoming, Estados Unidos", cta: "Falar com a Langia" },
    finalCta: { title: "Tem perguntas sobre nossas políticas?", body: "Escreva para nós e orientaremos você sobre o serviço, programa ou processo correspondente.", primaryCta: "Falar com a Langia" },
  },
  en: {
    hero: { eyebrow: "Legal", title: "Policies and legal information.", body: "Review the general policies of Langia Language Solutions LLC regarding services, privacy, payments, rescheduling, and communication.", quickFacts: ["Langia Language Solutions LLC", "Wyoming, United States", "Online and international services", "General policies"], note: "This page summarizes general policies for Langia Language Solutions LLC. The final version may be updated or supplemented by specific service agreements." },
    nav: [{ label: "Terms of service", href: "#terms" }, { label: "Privacy", href: "#privacy" }, { label: "WhatsApp", href: "#whatsapp" }, { label: "Payments and refunds", href: "#payments" }, { label: "Rescheduling", href: "#rescheduling" }, { label: "Minors", href: "#minors" }, { label: "Exams and results", href: "#results" }, { label: "Intellectual property", href: "#intellectual-property" }, { label: "Corporate services", href: "#corporate" }, { label: "Cookies and analytics", href: "#cookies" }],
    sections: [
      { id: "terms", title: "Terms of service", body: ["By purchasing or using services from Langia Language Solutions LLC, the user agrees to participate respectfully, provide truthful information, and follow the conditions agreed for the selected service. Langia services may include live classes, language programs, exam preparation, corporate services, translation, localization, and interpretation.", "The specific details of each service, including scope, duration, frequency, format, price, and additional conditions, may be defined in a proposal, commercial conversation, written confirmation, or specific agreement."] },
      { id: "privacy", title: "Privacy and personal data", body: ["Langia may collect personal information when a person completes forms, contacts us through WhatsApp, requests information, participates in diagnostic interviews, or purchases a service.", "This information may include name, email address, WhatsApp number, country, language of interest, company, program of interest, message, learning goals, approximate level, availability, educational needs, and other information voluntarily shared during the process.", "Langia uses this information to respond to requests, guide the user, personalize programs, coordinate services, provide academic follow-up, prepare proposals, and improve the educational experience.", "Langia should not sell personal information to third parties. Information may be shared internally with authorized staff, teachers, coordinators, or providers necessary to deliver the service."] },
      { id: "whatsapp", title: "WhatsApp communication", body: ["By submitting the contact form or communicating with Langia through WhatsApp, the user agrees to continue the conversation through this channel. WhatsApp may be subject to its own privacy policies and terms of use.", "Langia may use WhatsApp to respond to requests, coordinate interviews, share program information, confirm service details, provide follow-up, and answer questions related to the contracted experience."] },
      { id: "payments", title: "Payments and refunds", body: ["Prices, payment methods, installments, discounts, and specific conditions may vary depending on the program or service purchased. Applicable details will be confirmed during the commercial process or in the relevant proposal.", "A full refund may be available before the user has completed 10% of the contracted program. After that point, any refund, credit, adjustment, or alternative solution may be evaluated according to the case, the contracted service, program progress, and agreed conditions.", "Corporate services, translation, localization, and interpretation may be subject to payment, cancellation, and scope conditions defined in specific proposals or agreements."] },
      { id: "rescheduling", title: "Rescheduling", body: ["Langia aims to be flexible with student and client schedules. As a general rule, rescheduling requests should be made at least 6 hours in advance for them to fully apply.", "Requests made with less than 6 hours' notice may be accepted, rescheduled, or moved to another time at the company's discretion and according to the availability of the teacher, provider, or relevant team.", "Availability of schedules, teachers, and providers may vary depending on the program, language, format, and time zone."] },
      { id: "minors", title: "Minors and parental consent", body: ["Programs for children and teenagers require the participation or authorization of a parent, guardian, or legal representative. By purchasing a service for a minor, the responsible adult confirms that they have authority to do so and agrees to participate in the communication necessary to coordinate the program.", "Langia may share reports, observations, and updates with the responsible adult, especially in programs such as Langia 4 Kids n Teens."] },
      { id: "results", title: "Exams, results, and guarantees", body: ["Langia may offer preparation for exams, certifications, and academic or professional goals. However, Langia does not guarantee official results, specific scores, exam approval, visas, admissions, jobs, promotions, or external outcomes.", "Student progress and performance may depend on factors such as initial level, attendance, frequency, dedication, practice, exam conditions, and personal circumstances. Langia performance reports serve as educational references, not as guarantees of official results."] },
      { id: "intellectual-property", title: "Intellectual property", body: ["Materials, designs, texts, images, resources, methodologies, class content, documents, activities, program structures, brand materials, and digital elements created or provided by Langia may be protected by intellectual property rights.", "The user must not copy, distribute, resell, publish, modify, or use Langia materials for commercial or unauthorized purposes without written permission."] },
      { id: "corporate", title: "Corporate services and proposals", body: ["Corporate services, including training, translation, localization, and interpretation, may be subject to specific proposals, scopes, prices, timelines, deliverables, and conditions.", "In corporate services, company-defined objectives may guide the design of the program or service. Specific corporate agreements may supplement or replace certain general conditions on this page."] },
      { id: "cookies", title: "Cookies and analytics", body: ["Langia may use cookies, analytics tools, or similar technologies to understand website usage, improve user experience, and evaluate page performance. This section may be updated when specific tools are implemented."] },
      { id: "updates", title: "Updates", body: ["Langia may update these policies to reflect changes in services, processes, legal requirements, or operational decisions. The version published on this page will serve as the general reference available to users."] },
    ],
    contact: { title: "Legal contact", body: "For questions related to these policies, you can contact Langia through the contact page.", companyLabel: "Company", addressLabel: "Address", jurisdictionLabel: "Jurisdiction", company: "Langia Language Solutions LLC", address: "1309 Coffeen Avenue, Sheridan, Wyoming", jurisdiction: "Wyoming, United States", cta: "Contact Langia" },
    finalCta: { title: "Have questions about our policies?", body: "Contact us and we'll guide you regarding the relevant service, program, or process.", primaryCta: "Contact Langia" },
  },
};

const workWithUsPageContent: Record<PageLanguage, WorkWithUsPageContent> = {
  es: {
    hero: { eyebrow: "Trabaja con nosotros", title: "Enseña idiomas desde cualquier lugar con Langia.", body: "Estamos construyendo una red internacional de docentes freelance para futuras oportunidades de colaboración en inglés, francés, español y portugués.", primaryCta: "Trabaja con Langia", secondaryCta: "Ver requisitos", quickFacts: ["Remoto", "Freelance", "Todas las lenguas Langia", "Docentes con experiencia"] },
    why: { eyebrow: "Por qué Langia", title: "Una forma más humana y organizada de enseñar online.", body: "Langia combina clases en vivo, acompañamiento académico y herramientas personalizables para ayudar a los docentes a trabajar con más contexto y dirección.", cards: [{ title: "Trabajo remoto", body: "Enseña desde donde estés, con una dinámica online profesional." }, { title: "Freelance", body: "Colabora por servicios y disponibilidad, sin prometer una posición fija." }, { title: "Buen pago", body: "Buscamos ofrecer una compensación freelance competitiva para docentes preparados." }, { title: "Mejor contexto", body: "Langia TailorED ayuda a conectar objetivos, estudiantes y seguimiento." }] },
    profile: { eyebrow: "Perfil docente", title: "Buscamos docentes confiables, cercanos y preparados.", body: "El docente Langia debe combinar conocimiento, puntualidad, empatía y capacidad de guiar al estudiante en un entorno online.", cards: [{ title: "Experiencia enseñando", body: "Personas que ya han trabajado enseñando idiomas." }, { title: "Comunicación clara", body: "Docentes capaces de explicar, corregir y acompañar con tacto." }, { title: "Empatía", body: "Profesores que entienden que aprender un idioma requiere confianza." }, { title: "Puntualidad", body: "La confiabilidad es parte esencial de la experiencia Langia." }] },
    languages: { eyebrow: "Idiomas", title: "Buscamos docentes para todas nuestras lenguas.", body: "Trabajamos con inglés, francés, español y portugués. Si puedes enseñar más de un idioma, eso suma mucho.", items: ["Inglés", "Francés", "Español", "Portugués"] },
    requirements: { eyebrow: "Requisitos", title: "Lo básico para enseñar bien en Langia.", body: "La experiencia online depende de la preparación del docente, su conexión, su puntualidad y su capacidad de acompañar al estudiante.", items: [{ title: "Hablar inglés", body: "El inglés es un requisito indispensable para colaborar con Langia." }, { title: "Experiencia docente", body: "Experiencia previa enseñando idiomas." }, { title: "Dominio del idioma que enseñas", body: "Conocimiento sólido y capacidad de corregir con claridad." }, { title: "Computador confiable", body: "Laptop o desktop que ejecute Microsoft Teams y/o Zoom de forma nativa." }, { title: "Buena conexión a internet", body: "Conexión estable para clases en vivo." }, { title: "Puntualidad", body: "Respeto por horarios y compromisos." }, { title: "Empatía", body: "Capacidad de acompañar al estudiante con paciencia y cercanía." }, { title: "Profesionalismo remoto", body: "Comunicación clara y presentación adecuada en clases online." }], deviceNote: "No exigimos una marca específica de equipo. Puede ser macOS, Windows o Linux, siempre que funcione de forma confiable y ejecute Teams y/o Zoom nativamente." },
    process: { eyebrow: "Proceso", title: "Expresa tu interés y revisaremos si hay una oportunidad adecuada.", body: "Esta página no garantiza una posición abierta. Nos ayuda a conocer docentes que podrían encajar con futuras necesidades de Langia.", steps: [{ title: "Completa el formulario", body: "Cuéntanos tu perfil, idiomas y experiencia." }, { title: "Revisamos tu información", body: "Evaluamos si tu perfil coincide con futuras necesidades." }, { title: "Conversamos si hay ajuste", body: "Si existe una oportunidad compatible, el equipo podrá contactarte." }, { title: "Definimos colaboración", body: "Cuando haya fit, coordinamos disponibilidad, condiciones y proceso." }] },
    form: { title: "Expresa tu interés docente", body: "Completa este formulario para compartir tu perfil con Langia.", note: "Enviar este formulario no garantiza una posición abierta. Nos permite conocer tu perfil para futuras oportunidades de colaboración.", fields: { name: "Nombre completo", email: "Email", whatsapp: "WhatsApp", country: "País", teachingLanguages: "Idiomas que enseñas", spokenLanguages: "Idiomas que hablas", experience: "Experiencia docente", audience: "Audiencia principal", technicalConfirmation: "Confirmación técnica", message: "Mensaje", link: "LinkedIn / portafolio / sitio web", availability: "Disponibilidad", notes: "Notas adicionales" }, placeholders: { name: "Tu nombre completo", email: "tu@email.com", whatsapp: "Código de país + número", country: "País donde estás", spokenLanguages: "Ej. inglés, español, portugués", message: "Cuéntanos sobre tu experiencia y por qué quieres colaborar con Langia.", link: "Opcional", availability: "Opcional", notes: "Opcional" }, teachingLanguageOptions: ["Inglés", "Francés", "Español", "Portugués", "Más de uno"], experienceOptions: ["Menos de 1 año", "1-2 años", "3-5 años", "5+ años"], audienceOptions: ["Adultos", "Kids/Teens", "Test Prep", "Corporate", "Mixto"], technicalConfirmation: "Confirmo que tengo un computador confiable, buena conexión a internet y puedo usar Microsoft Teams y/o Zoom de forma nativa.", submit: "Enviar interés por WhatsApp", requiredError: "Completa este campo para continuar.", configWarning: "WhatsApp aún no está configurado. Agrega NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER para activar el envío.", selectPlaceholder: "Selecciona una opción", fallbackNotProvided: "No indicado", yes: "Sí", no: "No" },
    whatsappMessage: { intro: "Hola Langia, quiero expresar mi interés en colaborar como docente.", name: "Nombre", email: "Email", whatsapp: "WhatsApp", country: "País", teachingLanguages: "Idiomas que enseño", spokenLanguages: "Idiomas que hablo", experience: "Experiencia docente", audience: "Audiencia principal", availability: "Disponibilidad", link: "LinkedIn/Portafolio", technicalConfirmation: "Confirmación técnica", message: "Mensaje" },
    faq: { eyebrow: "Preguntas frecuentes", title: "Antes de compartir tu perfil.", items: [{ title: "¿Langia está contratando ahora?", body: "Este formulario permite expresar interés para futuras oportunidades. No garantiza una posición abierta." }, { title: "¿El trabajo es remoto?", body: "Sí. La colaboración docente con Langia es remota." }, { title: "¿Es freelance?", body: "Sí. Las colaboraciones docentes son freelance." }, { title: "¿Qué idiomas buscan?", body: "Buscamos docentes de inglés, francés, español y portugués." }, { title: "¿Debo hablar inglés?", body: "Sí. Hablar inglés es un requisito indispensable para colaborar con Langia." }, { title: "¿Necesito un computador?", body: "Sí. Necesitas un computador confiable que ejecute Microsoft Teams y/o Zoom nativamente." }] },
    finalCta: { title: "¿Te gustaría enseñar con Langia?", body: "Comparte tu perfil y podremos considerarte para futuras oportunidades de colaboración docente.", primaryCta: "Trabaja con Langia" },
  },
  pt: {
    hero: { eyebrow: "Trabalhe conosco", title: "Ensine idiomas de qualquer lugar com a Langia.", body: "Estamos construindo uma rede internacional de professores freelance para futuras oportunidades de colaboração em inglês, francês, espanhol e português.", primaryCta: "Trabalhe com a Langia", secondaryCta: "Ver requisitos", quickFacts: ["Remoto", "Freelance", "Todos os idiomas Langia", "Professores com experiência"] },
    why: { eyebrow: "Por que a Langia", title: "Uma forma mais humana e organizada de ensinar online.", body: "A Langia combina aulas ao vivo, acompanhamento acadêmico e ferramentas personalizáveis para ajudar professores a trabalhar com mais contexto e direção.", cards: [{ title: "Trabalho remoto", body: "Ensine de onde estiver, com uma dinâmica online profissional." }, { title: "Freelance", body: "Colabore por serviços e disponibilidade, sem promessa de posição fixa." }, { title: "Boa remuneração", body: "Buscamos oferecer uma compensação freelance competitiva para professores preparados." }, { title: "Mais contexto", body: "Langia TailorED ajuda a conectar objetivos, alunos e acompanhamento." }] },
    profile: { eyebrow: "Perfil docente", title: "Buscamos professores confiáveis, próximos e preparados.", body: "O professor Langia deve combinar conhecimento, pontualidade, empatia e capacidade de guiar o aluno em um ambiente online.", cards: [{ title: "Experiência ensinando", body: "Pessoas que já trabalharam ensinando idiomas." }, { title: "Comunicação clara", body: "Professores capazes de explicar, corrigir e acompanhar com cuidado." }, { title: "Empatia", body: "Professores que entendem que aprender um idioma exige confiança." }, { title: "Pontualidade", body: "A confiabilidade é parte essencial da experiência Langia." }] },
    languages: { eyebrow: "Idiomas", title: "Buscamos professores para todos os nossos idiomas.", body: "Trabalhamos com inglês, francês, espanhol e português. Se você pode ensinar mais de um idioma, isso é um grande diferencial.", items: ["Inglês", "Francês", "Espanhol", "Português"] },
    requirements: { eyebrow: "Requisitos", title: "O básico para ensinar bem na Langia.", body: "A experiência online depende da preparação do professor, conexão, pontualidade e capacidade de acompanhar o aluno.", items: [{ title: "Falar inglês", body: "O inglês é um requisito indispensável para colaborar com a Langia." }, { title: "Experiência docente", body: "Experiência prévia ensinando idiomas." }, { title: "Domínio do idioma que ensina", body: "Conhecimento sólido e capacidade de corrigir com clareza." }, { title: "Computador confiável", body: "Laptop ou desktop que execute Microsoft Teams e/ou Zoom de forma nativa." }, { title: "Boa conexão à internet", body: "Conexão estável para aulas ao vivo." }, { title: "Pontualidade", body: "Respeito por horários e compromissos." }, { title: "Empatia", body: "Capacidade de acompanhar o aluno com paciência e proximidade." }, { title: "Profissionalismo remoto", body: "Comunicação clara e apresentação adequada em aulas online." }], deviceNote: "Não exigimos uma marca específica de equipamento. Pode ser macOS, Windows ou Linux, desde que funcione de forma confiável e execute Teams e/ou Zoom nativamente." },
    process: { eyebrow: "Processo", title: "Expresse seu interesse e avaliaremos se há uma oportunidade adequada.", body: "Esta página não garante uma vaga aberta. Ela nos ajuda a conhecer professores que podem combinar com futuras necessidades da Langia.", steps: [{ title: "Complete o formulário", body: "Conte seu perfil, idiomas e experiência." }, { title: "Revisamos suas informações", body: "Avaliamos se seu perfil combina com futuras necessidades." }, { title: "Conversamos se houver fit", body: "Se existir uma oportunidade compatível, a equipe poderá entrar em contato." }, { title: "Definimos colaboração", body: "Quando houver fit, coordenamos disponibilidade, condições e processo." }] },
    form: { title: "Expresse seu interesse docente", body: "Complete este formulário para compartilhar seu perfil com a Langia.", note: "Enviar este formulário não garante uma vaga aberta. Ele nos permite conhecer seu perfil para futuras oportunidades de colaboração.", fields: { name: "Nome completo", email: "Email", whatsapp: "WhatsApp", country: "País", teachingLanguages: "Idiomas que ensino", spokenLanguages: "Idiomas que falo", experience: "Experiência docente", audience: "Público principal", technicalConfirmation: "Confirmação técnica", message: "Mensagem", link: "LinkedIn / portfólio / site", availability: "Disponibilidade", notes: "Notas adicionais" }, placeholders: { name: "Seu nome completo", email: "voce@email.com", whatsapp: "Código do país + número", country: "País onde você está", spokenLanguages: "Ex. inglês, espanhol, português", message: "Conte sobre sua experiência e por que quer colaborar com a Langia.", link: "Opcional", availability: "Opcional", notes: "Opcional" }, teachingLanguageOptions: ["Inglês", "Francês", "Espanhol", "Português", "Mais de um"], experienceOptions: ["Menos de 1 ano", "1-2 anos", "3-5 anos", "5+ anos"], audienceOptions: ["Adultos", "Kids/Teens", "Test Prep", "Corporate", "Misto"], technicalConfirmation: "Confirmo que tenho um computador confiável, boa conexão à internet e posso usar Microsoft Teams e/ou Zoom de forma nativa.", submit: "Enviar interesse pelo WhatsApp", requiredError: "Complete este campo para continuar.", configWarning: "WhatsApp ainda não está configurado. Adicione NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER para ativar o envio.", selectPlaceholder: "Selecione uma opção", fallbackNotProvided: "Não indicado", yes: "Sim", no: "Não" },
    whatsappMessage: { intro: "Olá Langia, quero expressar meu interesse em colaborar como professor(a).", name: "Nome", email: "Email", whatsapp: "WhatsApp", country: "País", teachingLanguages: "Idiomas que ensino", spokenLanguages: "Idiomas que falo", experience: "Experiência docente", audience: "Público principal", availability: "Disponibilidade", link: "LinkedIn/Portfólio", technicalConfirmation: "Confirmação técnica", message: "Mensagem" },
    faq: { eyebrow: "Perguntas frequentes", title: "Antes de compartilhar seu perfil.", items: [{ title: "A Langia está contratando agora?", body: "Este formulário permite expressar interesse para futuras oportunidades. Não garante uma vaga aberta." }, { title: "O trabalho é remoto?", body: "Sim. A colaboração docente com a Langia é remota." }, { title: "É freelance?", body: "Sim. As colaborações docentes são freelance." }, { title: "Quais idiomas vocês buscam?", body: "Buscamos professores de inglês, francês, espanhol e português." }, { title: "Preciso falar inglês?", body: "Sim. Falar inglês é um requisito indispensável para colaborar com a Langia." }, { title: "Preciso de um computador?", body: "Sim. Você precisa de um computador confiável que execute Microsoft Teams e/ou Zoom nativamente." }] },
    finalCta: { title: "Gostaria de ensinar com a Langia?", body: "Compartilhe seu perfil e poderemos considerar você para futuras oportunidades de colaboração docente.", primaryCta: "Trabalhe com a Langia" },
  },
  en: {
    hero: { eyebrow: "Work with us", title: "Teach languages from anywhere with Langia.", body: "We are building an international network of freelance teachers for future collaboration opportunities in English, French, Spanish, and Portuguese.", primaryCta: "Work with Langia", secondaryCta: "View requirements", quickFacts: ["Remote", "Freelance", "All Langia languages", "Experienced teachers"] },
    why: { eyebrow: "Why Langia", title: "A more human and organized way to teach online.", body: "Langia combines live classes, academic support, and customizable tools to help teachers work with more context and direction.", cards: [{ title: "Remote work", body: "Teach from wherever you are through a professional online dynamic." }, { title: "Freelance", body: "Collaborate based on services and availability, without a fixed-position promise." }, { title: "Strong compensation", body: "We aim to offer competitive freelance compensation for prepared teachers." }, { title: "Better context", body: "Langia TailorED helps connect goals, learners, and follow-up." }] },
    profile: { eyebrow: "Teacher profile", title: "We look for reliable, prepared, and human teachers.", body: "A Langia teacher should combine knowledge, punctuality, empathy, and the ability to guide learners in an online environment.", cards: [{ title: "Teaching experience", body: "People who have already worked teaching languages." }, { title: "Clear communication", body: "Teachers who can explain, correct, and support with care." }, { title: "Empathy", body: "Teachers who understand that language learning requires confidence." }, { title: "Punctuality", body: "Reliability is an essential part of the Langia experience." }] },
    languages: { eyebrow: "Languages", title: "We look for teachers across all Langia languages.", body: "We work with English, French, Spanish, and Portuguese. If you can teach more than one language, that is a strong plus.", items: ["English", "French", "Spanish", "Portuguese"] },
    requirements: { eyebrow: "Requirements", title: "The basics for teaching well at Langia.", body: "The online experience depends on teacher preparation, connection quality, punctuality, and the ability to support learners.", items: [{ title: "Speak English", body: "English is a must-have requirement to collaborate with Langia." }, { title: "Teaching experience", body: "Previous experience teaching languages." }, { title: "Proficiency in the language you teach", body: "Strong command and the ability to correct clearly." }, { title: "Reliable computer", body: "Laptop or desktop that runs Microsoft Teams and/or Zoom natively." }, { title: "Good internet connection", body: "Stable connection for live classes." }, { title: "Punctuality", body: "Respect for schedules and commitments." }, { title: "Empathy", body: "Ability to support learners with patience and closeness." }, { title: "Remote professionalism", body: "Clear communication and appropriate presentation in online classes." }], deviceNote: "We do not require a specific device brand. macOS, Windows, or Linux is fine as long as it works reliably and runs Teams and/or Zoom natively." },
    process: { eyebrow: "Process", title: "Express your interest and we'll review if there is a fit.", body: "This page does not guarantee an open position. It helps us learn about teachers who may fit future Langia needs.", steps: [{ title: "Complete the form", body: "Tell us about your profile, languages, and experience." }, { title: "We review your information", body: "We evaluate whether your profile matches future needs." }, { title: "We talk if there is a fit", body: "If there is a compatible opportunity, the team may contact you." }, { title: "We define collaboration", body: "When there is a fit, we coordinate availability, conditions, and process." }] },
    form: { title: "Express teacher interest", body: "Complete this form to share your profile with Langia.", note: "Submitting this form does not guarantee an open position. It helps us learn about your profile for future collaboration opportunities.", fields: { name: "Full name", email: "Email", whatsapp: "WhatsApp", country: "Country", teachingLanguages: "Languages you teach", spokenLanguages: "Languages you speak", experience: "Teaching experience", audience: "Main teaching audience", technicalConfirmation: "Technical confirmation", message: "Message", link: "LinkedIn / portfolio / website", availability: "Availability", notes: "Additional notes" }, placeholders: { name: "Your full name", email: "you@email.com", whatsapp: "Country code + number", country: "Country where you are", spokenLanguages: "Ex. English, Spanish, Portuguese", message: "Tell us about your experience and why you want to collaborate with Langia.", link: "Optional", availability: "Optional", notes: "Optional" }, teachingLanguageOptions: ["English", "French", "Spanish", "Portuguese", "More than one"], experienceOptions: ["Less than 1 year", "1-2 years", "3-5 years", "5+ years"], audienceOptions: ["Adults", "Kids/Teens", "Test Prep", "Corporate", "Mixed"], technicalConfirmation: "I confirm that I have a reliable computer, a good internet connection, and can use Microsoft Teams and/or Zoom natively.", submit: "Send interest through WhatsApp", requiredError: "Complete this field to continue.", configWarning: "WhatsApp is not configured yet. Add NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER to enable submission.", selectPlaceholder: "Select an option", fallbackNotProvided: "Not provided", yes: "Yes", no: "No" },
    whatsappMessage: { intro: "Hello Langia, I would like to express my interest in collaborating as a teacher.", name: "Name", email: "Email", whatsapp: "WhatsApp", country: "Country", teachingLanguages: "Languages I teach", spokenLanguages: "Languages I speak", experience: "Teaching experience", audience: "Main teaching audience", availability: "Availability", link: "LinkedIn/Portfolio", technicalConfirmation: "Technical confirmation", message: "Message" },
    faq: { eyebrow: "FAQ", title: "Before sharing your profile.", items: [{ title: "Is Langia hiring right now?", body: "This form allows you to express interest for future opportunities. It does not guarantee an open position." }, { title: "Is the work remote?", body: "Yes. Teaching collaboration with Langia is remote." }, { title: "Is it freelance?", body: "Yes. Teaching collaborations are freelance." }, { title: "Which languages are you looking for?", body: "We look for teachers of English, French, Spanish, and Portuguese." }, { title: "Do I need to speak English?", body: "Yes. Speaking English is a must-have requirement to collaborate with Langia." }, { title: "Do I need a computer?", body: "Yes. You need a reliable computer that runs Microsoft Teams and/or Zoom natively." }] },
    finalCta: { title: "Would you like to teach with Langia?", body: "Share your profile and we may consider you for future teaching collaboration opportunities.", primaryCta: "Work with Langia" },
  },
};

const programsOverview = {
  es: {
    hero: {
      eyebrow: "Programas",
      title: "Elige el camino que va con tu próximo capítulo.",
      body: "Explora las rutas de Langia para avanzar con estructura, práctica y acompañamiento según tu momento.",
      primaryCta: "Comparar programas",
      secondaryCta: "Encontrar mi ruta",
      secondaryHref: "/test-your-english-level",
    },
    programCards: [
      {
        audience: "Adultos",
        name: "Langia Online",
        description: "Formación estructurada en vivo para adultos que quieren avanzar con claridad.",
        highlights: ["Ruta por nivel", "Clases en vivo", "Seguimiento claro"],
        href: "/programs/langia-online",
        imagePath: programImagePaths.langiaOnline,
      },
      {
        audience: "Conversación privada",
        name: "Talkin' Club",
        description: "Práctica conversacional privada para ganar fluidez, confianza y naturalidad.",
        highlights: ["Sesiones privadas", "Fluidez real", "Corrección útil"],
        href: "/programs/talkin-club",
        imagePath: programImagePaths.talkinClub,
      },
      {
        audience: "Exámenes",
        name: "Test Prep",
        description: "Preparación enfocada para exámenes, certificaciones y metas académicas.",
        highlights: ["Estrategia de examen", "Práctica guiada", "Feedback específico"],
        href: "/programs/test-prep",
        imagePath: programImagePaths.testPrep,
      },
      {
        audience: "Familias",
        name: "Langia 4 Kids n Teens",
        description:
          "Aprendizaje de idiomas para niños y adolescentes con estructura, acompañamiento y una experiencia amable para las familias.",
        highlights: ["Para niños y teens", "Seguimiento para padres", "Clases dinámicas"],
        href: "/programs/langia-4-kids-n-teens",
        imagePath: programImagePaths.kidsTeens,
      },
      {
        audience: "Empresas",
        name: "Corporate",
        description:
          "Programas para equipos que necesitan comunicarse mejor con clientes, mercados y culturas internacionales.",
        highlights: ["Diseño por equipo", "Objetivos laborales", "Reportes de progreso"],
        href: "/corporate",
        imagePath: programImagePaths.corporate,
      },
    ],
    cardCtaLabel: "Explorar programa",
    comparison: {
      eyebrow: "Comparación",
      title: "Compara las rutas antes de elegir.",
      body: "Una vista rápida para entender qué programa se ajusta mejor a tu objetivo.",
      headers: {
        program: "Programa",
        bestFor: "Ideal para",
        format: "Formato",
        focus: "Enfoque",
        practice: "Tarea / práctica",
        nextStep: "Siguiente paso",
      },
      rows: [
        {
          program: "Langia Online",
          bestFor: "Adultos que quieren formación completa",
          format: "Clases privadas o personalizadas en vivo",
          focus: "Progreso general por nivel",
          practice: "Sí",
          nextStep: "Ver Langia Online",
          href: "/programs/langia-online",
        },
        {
          program: "Talkin' Club",
          bestFor: "Personas que quieren hablar con más naturalidad",
          format: "Sesiones privadas de conversación",
          focus: "Fluidez y confianza",
          practice: "Ligera",
          nextStep: "Ver Talkin' Club",
          href: "/programs/talkin-club",
        },
        {
          program: "Test Prep",
          bestFor: "Estudiantes con exámenes o certificaciones",
          format: "Preparación enfocada",
          focus: "Estrategia, práctica y feedback",
          practice: "Sí",
          nextStep: "Ver Test Prep",
          href: "/programs/test-prep",
        },
        {
          program: "Langia 4 Kids n Teens",
          bestFor: "Familias con niños o adolescentes",
          format: "Clases en vivo adaptadas a la edad",
          focus: "Base, confianza y continuidad",
          practice: "Según edad",
          nextStep: "Ver Kids n Teens",
          href: "/programs/langia-4-kids-n-teens",
        },
        {
          program: "Corporate",
          bestFor: "Equipos y empresas",
          format: "Programas diseñados por necesidad",
          focus: "Comunicación profesional",
          practice: "Según programa",
          nextStep: "Ver Corporate",
          href: "/corporate",
        },
      ],
    },
    finder: {
      eyebrow: "Encuentra tu punto de partida",
      title: "¿No sabes qué programa elegir?",
      body: "Pronto podrás usar una experiencia guiada para entender tu nivel y encontrar la ruta más adecuada.",
      cta: "Ir a la prueba de nivel",
      href: "/test-your-english-level",
    },
    corporate: {
      eyebrow: "Para empresas",
      title: "Idiomas para equipos que cruzan fronteras.",
      body: "Diseñamos programas para compañías que necesitan mejorar la comunicación con clientes, mercados y equipos internacionales.",
      cta: "Explorar Corporate",
      href: "/corporate",
    },
    finalCta: {
      title: "Tu próxima ruta puede empezar con una conversación.",
      body: "Explora el programa que más se ajusta a tu momento o cuéntanos qué quieres lograr.",
      primaryCta: "Contactar a Langia",
      secondaryCta: "Volver a programas",
      primaryHref: "/contact",
      secondaryHref: "/programs",
    },
  },
  pt: {
    hero: {
      eyebrow: "Programas",
      title: "Escolha o caminho que combina com o seu próximo capítulo.",
      body: "Explore as rotas da Langia para avançar com estrutura, prática e acompanhamento conforme seu momento.",
      primaryCta: "Comparar programas",
      secondaryCta: "Encontrar minha rota",
      secondaryHref: "/test-your-english-level",
    },
    programCards: [
      {
        audience: "Adultos",
        name: "Langia Online",
        description: "Formação estruturada ao vivo para adultos que querem avançar com clareza.",
        highlights: ["Rota por nível", "Aulas ao vivo", "Acompanhamento claro"],
        href: "/programs/langia-online",
        imagePath: programImagePaths.langiaOnline,
      },
      {
        audience: "Conversação privada",
        name: "Talkin' Club",
        description: "Prática de conversação privada para ganhar fluência, confiança e naturalidade.",
        highlights: ["Sessões privadas", "Fluência real", "Correção útil"],
        href: "/programs/talkin-club",
        imagePath: programImagePaths.talkinClub,
      },
      {
        audience: "Exames",
        name: "Test Prep",
        description: "Preparação focada para exames, certificações e objetivos acadêmicos.",
        highlights: ["Estratégia de exame", "Prática guiada", "Feedback específico"],
        href: "/programs/test-prep",
        imagePath: programImagePaths.testPrep,
      },
      {
        audience: "Famílias",
        name: "Langia 4 Kids n Teens",
        description:
          "Aprendizagem de idiomas para crianças e adolescentes com estrutura, acompanhamento e uma experiência acolhedora para as famílias.",
        highlights: ["Para crianças e teens", "Acompanhamento para pais", "Aulas dinâmicas"],
        href: "/programs/langia-4-kids-n-teens",
        imagePath: programImagePaths.kidsTeens,
      },
      {
        audience: "Empresas",
        name: "Corporate",
        description:
          "Programas para equipes que precisam se comunicar melhor com clientes, mercados e culturas internacionais.",
        highlights: ["Desenho por equipe", "Objetivos profissionais", "Relatórios de progresso"],
        href: "/corporate",
        imagePath: programImagePaths.corporate,
      },
    ],
    cardCtaLabel: "Explorar programa",
    comparison: {
      eyebrow: "Comparação",
      title: "Compare as rotas antes de escolher.",
      body: "Uma visão rápida para entender qual programa combina melhor com seu objetivo.",
      headers: {
        program: "Programa",
        bestFor: "Ideal para",
        format: "Formato",
        focus: "Foco",
        practice: "Tarefa / prática",
        nextStep: "Próximo passo",
      },
      rows: [
        {
          program: "Langia Online",
          bestFor: "Adultos que querem formação completa",
          format: "Aulas privadas ou personalizadas ao vivo",
          focus: "Progresso geral por nível",
          practice: "Sim",
          nextStep: "Ver Langia Online",
          href: "/programs/langia-online",
        },
        {
          program: "Talkin' Club",
          bestFor: "Pessoas que querem falar com mais naturalidade",
          format: "Sessões privadas de conversação",
          focus: "Fluência e confiança",
          practice: "Leve",
          nextStep: "Ver Talkin' Club",
          href: "/programs/talkin-club",
        },
        {
          program: "Test Prep",
          bestFor: "Estudantes com exames ou certificações",
          format: "Preparação focada",
          focus: "Estratégia, prática e feedback",
          practice: "Sim",
          nextStep: "Ver Test Prep",
          href: "/programs/test-prep",
        },
        {
          program: "Langia 4 Kids n Teens",
          bestFor: "Famílias com crianças ou adolescentes",
          format: "Aulas ao vivo adaptadas à idade",
          focus: "Base, confiança e continuidade",
          practice: "Conforme a idade",
          nextStep: "Ver Kids n Teens",
          href: "/programs/langia-4-kids-n-teens",
        },
        {
          program: "Corporate",
          bestFor: "Equipes e empresas",
          format: "Programas desenhados por necessidade",
          focus: "Comunicação profissional",
          practice: "Conforme o programa",
          nextStep: "Ver Corporate",
          href: "/corporate",
        },
      ],
    },
    finder: {
      eyebrow: "Encontre seu ponto de partida",
      title: "Não sabe qual programa escolher?",
      body: "Em breve, você poderá usar uma experiência guiada para entender seu nível e encontrar a rota mais adequada.",
      cta: "Ir para o teste de nível",
      href: "/test-your-english-level",
    },
    corporate: {
      eyebrow: "Para empresas",
      title: "Idiomas para equipes que cruzam fronteiras.",
      body: "Desenhamos programas para empresas que precisam melhorar a comunicação com clientes, mercados e equipes internacionais.",
      cta: "Explorar Corporate",
      href: "/corporate",
    },
    finalCta: {
      title: "Sua próxima rota pode começar com uma conversa.",
      body: "Explore o programa que mais combina com seu momento ou conte para nós o que você quer alcançar.",
      primaryCta: "Falar com a Langia",
      secondaryCta: "Voltar aos programas",
      primaryHref: "/contact",
      secondaryHref: "/programs",
    },
  },
  en: {
    hero: {
      eyebrow: "Programs",
      title: "Choose the path that fits your next chapter.",
      body: "Explore Langia's paths for moving forward with structure, practice, and support based on your moment.",
      primaryCta: "Compare programs",
      secondaryCta: "Find your path",
      secondaryHref: "/test-your-english-level",
    },
    programCards: [
      {
        audience: "Adults",
        name: "Langia Online",
        description: "Structured live training for adults who want clear progress.",
        highlights: ["Level-based path", "Live classes", "Clear follow-up"],
        href: "/programs/langia-online",
        imagePath: programImagePaths.langiaOnline,
      },
      {
        audience: "Private conversation",
        name: "Talkin' Club",
        description: "Private conversation practice for fluency, confidence, and natural speaking.",
        highlights: ["Private sessions", "Real fluency", "Useful correction"],
        href: "/programs/talkin-club",
        imagePath: programImagePaths.talkinClub,
      },
      {
        audience: "Exams",
        name: "Test Prep",
        description: "Focused preparation for exams, certifications, and academic goals.",
        highlights: ["Exam strategy", "Guided practice", "Targeted feedback"],
        href: "/programs/test-prep",
        imagePath: programImagePaths.testPrep,
      },
      {
        audience: "Families",
        name: "Langia 4 Kids n Teens",
        description:
          "Language learning for children and teens with structure, support, and a family-friendly experience.",
        highlights: ["For kids and teens", "Parent updates", "Dynamic classes"],
        href: "/programs/langia-4-kids-n-teens",
        imagePath: programImagePaths.kidsTeens,
      },
      {
        audience: "Companies",
        name: "Corporate",
        description:
          "Programs for teams that need to communicate better with clients, markets, and international cultures.",
        highlights: ["Team-based design", "Workplace goals", "Progress reporting"],
        href: "/corporate",
        imagePath: programImagePaths.corporate,
      },
    ],
    cardCtaLabel: "Explore program",
    comparison: {
      eyebrow: "Comparison",
      title: "Compare paths before choosing.",
      body: "A quick view to understand which program fits your goal best.",
      headers: {
        program: "Program",
        bestFor: "Best for",
        format: "Format",
        focus: "Focus",
        practice: "Homework / practice",
        nextStep: "Ideal next step",
      },
      rows: [
        {
          program: "Langia Online",
          bestFor: "Adults who want complete training",
          format: "Private or customized live classes",
          focus: "General progress by level",
          practice: "Yes",
          nextStep: "View Langia Online",
          href: "/programs/langia-online",
        },
        {
          program: "Talkin' Club",
          bestFor: "People who want to speak more naturally",
          format: "Private conversation sessions",
          focus: "Fluency and confidence",
          practice: "Light",
          nextStep: "View Talkin' Club",
          href: "/programs/talkin-club",
        },
        {
          program: "Test Prep",
          bestFor: "Students with exams or certifications",
          format: "Focused preparation",
          focus: "Strategy, practice, and feedback",
          practice: "Yes",
          nextStep: "View Test Prep",
          href: "/programs/test-prep",
        },
        {
          program: "Langia 4 Kids n Teens",
          bestFor: "Families with children or teenagers",
          format: "Live classes adapted by age",
          focus: "Foundation, confidence, and continuity",
          practice: "Age-based",
          nextStep: "View Kids n Teens",
          href: "/programs/langia-4-kids-n-teens",
        },
        {
          program: "Corporate",
          bestFor: "Teams and companies",
          format: "Programs designed around needs",
          focus: "Professional communication",
          practice: "Program-based",
          nextStep: "View Corporate",
          href: "/corporate",
        },
      ],
    },
    finder: {
      eyebrow: "Find your starting point",
      title: "Not sure which program to choose?",
      body: "Soon, you'll be able to use a guided experience to understand your level and find the most suitable path.",
      cta: "Go to level test",
      href: "/test-your-english-level",
    },
    corporate: {
      eyebrow: "For companies",
      title: "Languages for teams crossing borders.",
      body: "We design programs for companies that need stronger communication with clients, markets, and international teams.",
      cta: "Explore Corporate",
      href: "/corporate",
    },
    finalCta: {
      title: "Your next path can begin with a conversation.",
      body: "Explore the program that fits your moment or tell us what you want to achieve.",
      primaryCta: "Contact Langia",
      secondaryCta: "Back to programs",
      primaryHref: "/contact",
      secondaryHref: "/programs",
    },
  },
} as const satisfies Record<PageLanguage, ProgramsOverviewContent>;

const langiaOnlinePageContent = {
  es: {
    hero: {
      eyebrow: "Langia Online",
      title: "Comunica tus ideas con claridad.",
      body: "Un programa de 60 clases en vivo para avanzar desde tu nivel actual hacia conversaciones más claras, seguras y naturales.",
      primaryCta: "Empieza tu nuevo capítulo",
      secondaryCta: "Ver precios",
      quickFacts: [
        "60 clases en vivo",
        "Private, Duo o Trio",
        "Inglés, francés, español o portugués",
        "Frecuencia flexible",
      ],
    },
    who: {
      eyebrow: "Para quién es",
      title: "Para adultos y adolescentes mayores que quieren avanzar con estructura.",
      body: "Langia Online está diseñado para personas que quieren desarrollar comunicación real para trabajo, estudio, viajes, reubicación o crecimiento personal.",
      cards: [
        { title: "Profesionales", body: "Comunica ideas, participa en reuniones y gana confianza en contextos laborales." },
        { title: "Adultos con metas personales", body: "Aprende con una ruta clara para viajar, vivir nuevas experiencias o abrir oportunidades." },
        { title: "Adolescentes mayores", body: "Una opción estructurada para adolescentes mayores que necesitan avanzar con acompañamiento serio." },
      ],
    },
    formats: {
      eyebrow: "Formatos",
      title: "Elige cómo quieres avanzar.",
      body: "Cada formato mantiene la misma ruta de 60 clases, pero cambia la dinámica de aprendizaje y el precio por estudiante.",
      cards: [
        { title: "Private", body: "Una experiencia individual con atención completa del docente.", bestFor: "Ideal para metas específicas, ritmo personalizado y máxima flexibilidad." },
        { title: "Duo", body: "Aprende con otra persona en una dinámica cercana y colaborativa.", bestFor: "Ideal para parejas, amigos, familiares o compañeros con objetivos compatibles." },
        { title: "Trio", body: "Un formato pequeño para avanzar con interacción y estructura.", bestFor: "Ideal para grupos reducidos que quieren practicar juntos sin perder acompañamiento." },
      ],
    },
    includes: {
      eyebrow: "Qué incluye",
      title: "Una experiencia completa, clara y acompañada.",
      features: [
        { title: "Clases en vivo", body: "Clases en vivo de 60 minutos con docentes expertos." },
        { title: "Ruta por nivel", body: "Una ruta organizada desde tu nivel actual hacia objetivos más avanzados." },
        { title: "Feedback docente en vivo", body: "Corrección, orientación y feedback en tiempo real." },
        { title: "Personalización con Langia TailorED", body: "Personalización del programa según tus metas, ritmo y contexto." },
        { title: "Posibilidad de reprogramar", body: "Flexibilidad para ajustar tu agenda dentro de las condiciones del programa." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "El método que adapta la ruta a tu vida.",
      body: "Langia TailorED ayuda a conectar tu nivel, tus metas, tu ritmo y el feedback de tus clases para que el programa avance con más dirección.",
    },
    levels: {
      eyebrow: "Ruta por nivel",
      title: "De principiante a avanzado, con pasos claros.",
      body: "Langia Online organiza el progreso en una ruta de niveles que ayuda a entender dónde estás, qué sigue y cómo avanzar.",
      items: [
        "Foundation Pre-A1",
        "Initiate A1.1",
        "Essentials A1.2",
        "Momentum A2.1",
        "Fluency A2.2",
        "Confidence B1.1",
        "Clarity B1.2",
        "Precision B2.1",
        "Impact B2.2",
        "Mastery C1.1",
      ],
    },
    schedule: {
      eyebrow: "Frecuencia",
      title: "Un programa de 60 clases con ritmo flexible.",
      body: "La frecuencia mínima es de 12 clases al mes, lo que normalmente lleva el programa a unos 5 meses. Si quieres avanzar más rápido, también puedes elegir una frecuencia intensiva.",
      bullets: [
        "60 clases de 60 minutos",
        "Mínimo 12 clases al mes",
        "Duración estándar aproximada: 5 meses",
        "Frecuencia intensiva disponible",
        "Agenda ajustable según disponibilidad",
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Elige tu formato y forma de pago.",
      body: "Los precios son por estudiante para el programa completo de 60 clases.",
      studentCreditTitle: "Langia Student Credit",
      studentCreditBody: "Paga mes a mes según el ritmo de tu programa. Máximo 5 cuotas.",
      payFullTitle: "Pago completo",
      payFullBody: "Paga el programa completo y recibe 15% de descuento sobre el precio de Langia Student Credit.",
      labels: {
        base: "Precio base",
        total: "Total Langia Student Credit",
        installments: "Cuotas",
        payFull: "Pago completo con 15% OFF",
        highlight: "Más personalizado",
      },
      cards: [
        { title: "Private", studentCreditPerLesson: "$16 USD por clase", studentCreditTotal: "$960 USD total", installments: "Hasta 5 cuotas de $192 USD", payFull: "$816 USD" },
        { title: "Duo", studentCreditPerLesson: "$13 USD por clase", studentCreditTotal: "$780 USD total por estudiante", installments: "Hasta 5 cuotas de $156 USD por estudiante", payFull: "$663 USD por estudiante" },
        { title: "Trio", studentCreditPerLesson: "$10 USD por clase", studentCreditTotal: "$600 USD total por estudiante", installments: "Hasta 5 cuotas de $120 USD por estudiante", payFull: "$510 USD por estudiante" },
      ],
      cta: "Empieza tu nuevo capítulo",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { title: "¿Langia Online es solo para inglés?", body: "No. Está disponible para inglés, francés, español y portugués." },
        { title: "¿Las clases son privadas?", body: "Pueden ser Private, Duo o Trio, según el formato que elijas." },
        { title: "¿Cuánto dura el programa?", body: "El programa tiene 60 clases de 60 minutos. Con la frecuencia mínima de 12 clases al mes, suele durar aproximadamente 5 meses." },
        { title: "¿Puedo tomar más clases por semana?", body: "Sí. La frecuencia puede ajustarse según tu disponibilidad y la disponibilidad académica." },
        { title: "¿Qué es Langia Student Credit?", body: "Es una forma de pago mes a mes según el ritmo de tu programa, con un máximo de 5 cuotas." },
        { title: "¿Qué pasa si pago completo?", body: "Recibes un 15% de descuento sobre el precio de Langia Student Credit." },
      ],
    },
    finalCta: {
      title: "Tu nuevo capítulo puede empezar con 60 clases.",
      body: "Elige tu formato, define tu ritmo y empieza a construir más confianza para comunicar tus ideas.",
      primaryCta: "Empieza tu nuevo capítulo",
      secondaryCta: "Comparar programas",
    },
  },
  pt: {
    hero: {
      eyebrow: "Langia Online",
      title: "Comunique suas ideias com clareza.",
      body: "Um programa de 60 aulas ao vivo para avançar do seu nível atual para conversas mais claras, seguras e naturais.",
      primaryCta: "Comece seu novo capítulo",
      secondaryCta: "Ver preços",
      quickFacts: [
        "60 aulas ao vivo",
        "Private, Duo ou Trio",
        "Inglês, francês, espanhol ou português",
        "Frequência flexível",
      ],
    },
    who: {
      eyebrow: "Para quem é",
      title: "Para adultos e adolescentes mais velhos que querem avançar com estrutura.",
      body: "Langia Online foi criado para pessoas que querem desenvolver comunicação real para trabalho, estudo, viagens, mudança de país ou crescimento pessoal.",
      cards: [
        { title: "Profissionais", body: "Comunique ideias, participe de reuniões e ganhe confiança em contextos profissionais." },
        { title: "Adultos com objetivos pessoais", body: "Aprenda com uma rota clara para viajar, viver novas experiências ou abrir oportunidades." },
        { title: "Adolescentes mais velhos", body: "Uma opção estruturada para adolescentes mais velhos que precisam avançar com acompanhamento sério." },
      ],
    },
    formats: {
      eyebrow: "Formatos",
      title: "Escolha como você quer avançar.",
      body: "Cada formato mantém a mesma rota de 60 aulas, mas muda a dinâmica de aprendizagem e o preço por aluno.",
      cards: [
        { title: "Private", body: "Uma experiência individual com atenção completa do professor.", bestFor: "Ideal para objetivos específicos, ritmo personalizado e máxima flexibilidade." },
        { title: "Duo", body: "Aprenda com outra pessoa em uma dinâmica próxima e colaborativa.", bestFor: "Ideal para casais, amigos, familiares ou colegas com objetivos compatíveis." },
        { title: "Trio", body: "Um formato pequeno para avançar com interação e estrutura.", bestFor: "Ideal para grupos reduzidos que querem praticar juntos sem perder acompanhamento." },
      ],
    },
    includes: {
      eyebrow: "O que inclui",
      title: "Uma experiência completa, clara e acompanhada.",
      features: [
        { title: "Aulas ao vivo", body: "Aulas ao vivo de 60 minutos com professores especialistas." },
        { title: "Rota por nível", body: "Uma rota organizada do seu nível atual para objetivos mais avançados." },
        { title: "Feedback docente ao vivo", body: "Correção, orientação e feedback em tempo real." },
        { title: "Personalização com Langia TailorED", body: "Personalização do programa conforme seus objetivos, ritmo e contexto." },
        { title: "Possibilidade de remarcação", body: "Flexibilidade para ajustar sua agenda dentro das condições do programa." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "O método que adapta a rota à sua vida.",
      body: "Langia TailorED ajuda a conectar seu nível, seus objetivos, seu ritmo e o feedback das aulas para que o programa avance com mais direção.",
    },
    levels: {
      eyebrow: "Rota por nível",
      title: "Do iniciante ao avançado, com passos claros.",
      body: "Langia Online organiza o progresso em uma rota de níveis que ajuda você a entender onde está, o que vem depois e como avançar.",
      items: [
        "Foundation Pre-A1",
        "Initiate A1.1",
        "Essentials A1.2",
        "Momentum A2.1",
        "Fluency A2.2",
        "Confidence B1.1",
        "Clarity B1.2",
        "Precision B2.1",
        "Impact B2.2",
        "Mastery C1.1",
      ],
    },
    schedule: {
      eyebrow: "Frequência",
      title: "Um programa de 60 aulas com ritmo flexível.",
      body: "A frequência mínima é de 12 aulas por mês, o que normalmente leva o programa a cerca de 5 meses. Se você quiser avançar mais rápido, também pode escolher uma frequência intensiva.",
      bullets: [
        "60 aulas de 60 minutos",
        "Mínimo de 12 aulas por mês",
        "Duração padrão aproximada: 5 meses",
        "Frequência intensiva disponível",
        "Agenda ajustável conforme disponibilidade",
      ],
    },
    pricing: {
      eyebrow: "Preços",
      title: "Escolha seu formato e forma de pagamento.",
      body: "Os preços são por aluno para o programa completo de 60 aulas.",
      studentCreditTitle: "Langia Student Credit",
      studentCreditBody: "Pague mês a mês conforme o ritmo do seu programa. Máximo de 5 parcelas.",
      payFullTitle: "Pagamento completo",
      payFullBody: "Pague o programa completo e receba 15% de desconto sobre o preço do Langia Student Credit.",
      labels: {
        base: "Preço base",
        total: "Total Langia Student Credit",
        installments: "Parcelas",
        payFull: "Pagamento completo com 15% OFF",
        highlight: "Mais personalizado",
      },
      cards: [
        { title: "Private", studentCreditPerLesson: "$16 USD por aula", studentCreditTotal: "$960 USD total", installments: "Até 5 parcelas de $192 USD", payFull: "$816 USD" },
        { title: "Duo", studentCreditPerLesson: "$13 USD por aula", studentCreditTotal: "$780 USD total por aluno", installments: "Até 5 parcelas de $156 USD por aluno", payFull: "$663 USD por aluno" },
        { title: "Trio", studentCreditPerLesson: "$10 USD por aula", studentCreditTotal: "$600 USD total por aluno", installments: "Até 5 parcelas de $120 USD por aluno", payFull: "$510 USD por aluno" },
      ],
      cta: "Comece seu novo capítulo",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        { title: "Langia Online é apenas para inglês?", body: "Não. Está disponível para inglês, francês, espanhol e português." },
        { title: "As aulas são privadas?", body: "Podem ser Private, Duo ou Trio, conforme o formato escolhido." },
        { title: "Quanto tempo dura o programa?", body: "O programa tem 60 aulas de 60 minutos. Com a frequência mínima de 12 aulas por mês, normalmente dura cerca de 5 meses." },
        { title: "Posso fazer mais aulas por semana?", body: "Sim. A frequência pode ser ajustada conforme sua disponibilidade e a disponibilidade acadêmica." },
        { title: "O que é Langia Student Credit?", body: "É uma forma de pagamento mês a mês conforme o ritmo do seu programa, com máximo de 5 parcelas." },
        { title: "O que acontece se eu pagar tudo de uma vez?", body: "Você recebe 15% de desconto sobre o preço do Langia Student Credit." },
      ],
    },
    finalCta: {
      title: "Seu novo capítulo pode começar com 60 aulas.",
      body: "Escolha seu formato, defina seu ritmo e comece a construir mais confiança para comunicar suas ideias.",
      primaryCta: "Comece seu novo capítulo",
      secondaryCta: "Comparar programas",
    },
  },
  en: {
    hero: {
      eyebrow: "Langia Online",
      title: "Communicate your ideas with clarity.",
      body: "A 60-lesson live program to move from your current level toward clearer, more confident, and more natural conversations.",
      primaryCta: "Start your new chapter",
      secondaryCta: "View pricing",
      quickFacts: [
        "60 live lessons",
        "Private, Duo, or Trio",
        "English, French, Spanish, or Portuguese",
        "Flexible frequency",
      ],
    },
    who: {
      eyebrow: "Who it is for",
      title: "For adults and older teens who want structure.",
      body: "Langia Online is designed for people who want real communication for work, study, travel, relocation, or personal growth.",
      cards: [
        { title: "Professionals", body: "Communicate ideas, participate in meetings, and build confidence in work contexts." },
        { title: "Adults with personal goals", body: "Learn through a clear route for travel, new experiences, and life opportunities." },
        { title: "Older teens", body: "A structured option for older teenagers who need serious support and guidance." },
      ],
    },
    formats: {
      eyebrow: "Formats",
      title: "Choose how you want to move forward.",
      body: "Each format follows the same 60-lesson route, but changes the learning dynamic and price per student.",
      cards: [
        { title: "Private", body: "An individual experience with full teacher attention.", bestFor: "Ideal for specific goals, personalized pacing, and maximum flexibility." },
        { title: "Duo", body: "Learn with one other person in a close, collaborative dynamic.", bestFor: "Ideal for couples, friends, relatives, or peers with compatible goals." },
        { title: "Trio", body: "A small-group format for interaction, structure, and guided practice.", bestFor: "Ideal for small groups that want to practice together while keeping close support." },
      ],
    },
    includes: {
      eyebrow: "What is included",
      title: "A complete, clear, and supported experience.",
      features: [
        { title: "Live classes", body: "60-minute live classes with expert teachers." },
        { title: "Level-based route", body: "An organized path from your current level toward more advanced goals." },
        { title: "Live teacher feedback", body: "Correction, guidance, and feedback in real time." },
        { title: "Langia TailorED customization", body: "Program personalization based on your goals, rhythm, and context." },
        { title: "Rescheduling ability", body: "Flexibility to adjust your schedule within program conditions." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "The method that adapts the path to your life.",
      body: "Langia TailorED helps connect your level, goals, rhythm, and class feedback so the program moves forward with more direction.",
    },
    levels: {
      eyebrow: "Level-based route",
      title: "From beginner to advanced, with clear steps.",
      body: "Langia Online organizes progress through a level route that helps you understand where you are, what comes next, and how to move forward.",
      items: [
        "Foundation Pre-A1",
        "Initiate A1.1",
        "Essentials A1.2",
        "Momentum A2.1",
        "Fluency A2.2",
        "Confidence B1.1",
        "Clarity B1.2",
        "Precision B2.1",
        "Impact B2.2",
        "Mastery C1.1",
      ],
    },
    schedule: {
      eyebrow: "Frequency",
      title: "A 60-lesson program with flexible pacing.",
      body: "The minimum frequency is 12 lessons per month, which usually brings the program to about 5 months. If you want to move faster, you can also choose an intensive pace.",
      bullets: [
        "60 lessons of 60 minutes",
        "Minimum 12 lessons per month",
        "Standard duration: about 5 months",
        "Intensive frequency available",
        "Schedule adjustable based on availability",
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Choose your format and payment option.",
      body: "Prices are per student for the full 60-lesson program.",
      studentCreditTitle: "Langia Student Credit",
      studentCreditBody: "Pay month by month according to your program pace. Maximum 5 installments.",
      payFullTitle: "Pay in full",
      payFullBody: "Pay for the full program upfront and receive 15% off the Langia Student Credit price.",
      labels: {
        base: "Base price",
        total: "Langia Student Credit total",
        installments: "Installments",
        payFull: "Pay in full with 15% OFF",
        highlight: "Most personalized",
      },
      cards: [
        { title: "Private", studentCreditPerLesson: "$16 USD / lesson", studentCreditTotal: "$960 USD total", installments: "Up to 5 installments of $192 USD", payFull: "$816 USD" },
        { title: "Duo", studentCreditPerLesson: "$13 USD / lesson", studentCreditTotal: "$780 USD total per student", installments: "Up to 5 installments of $156 USD per student", payFull: "$663 USD per student" },
        { title: "Trio", studentCreditPerLesson: "$10 USD / lesson", studentCreditTotal: "$600 USD total per student", installments: "Up to 5 installments of $120 USD per student", payFull: "$510 USD per student" },
      ],
      cta: "Start your new chapter",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { title: "Is Langia Online only for English?", body: "No. It is available for English, French, Spanish, and Portuguese." },
        { title: "Are the classes private?", body: "They can be Private, Duo, or Trio, depending on the format you choose." },
        { title: "How long does the program take?", body: "The program includes 60 lessons of 60 minutes. At the minimum frequency of 12 lessons per month, it usually takes about 5 months." },
        { title: "Can I take more lessons per week?", body: "Yes. Frequency can be adjusted based on your availability and academic availability." },
        { title: "What is Langia Student Credit?", body: "It is a month-by-month payment option based on your program pace, with a maximum of 5 installments." },
        { title: "What happens if I pay in full?", body: "You receive 15% off the Langia Student Credit price." },
      ],
    },
    finalCta: {
      title: "Your next chapter can start with 60 lessons.",
      body: "Choose your format, define your pace, and start building more confidence to communicate your ideas.",
      primaryCta: "Start your new chapter",
      secondaryCta: "Compare programs",
    },
  },
} as const satisfies Record<PageLanguage, LangiaOnlinePageContent>;

const talkinClubPageContent = {
  es: {
    hero: {
      eyebrow: "Langia Talkin' Club",
      title: "Practica las conversaciones que tu vida realmente necesita.",
      body: "Sesiones privadas de conversación para ganar fluidez, confianza y naturalidad sin miedo a equivocarte.",
      primaryCta: "Empieza a hablar",
      secondaryCta: "Ver precios",
      quickFacts: [
        "Sesiones privadas",
        "45 minutos",
        "Desde 10 clases",
        "Inglés, francés, español o portugués",
      ],
    },
    who: {
      eyebrow: "Para quién es",
      title: "Para personas que quieren hablar con más seguridad.",
      body: "Talkin' Club está diseñado para quienes necesitan practicar, perder el miedo y preparar conversaciones importantes.",
      cards: [
        { title: "Personas que sienten inseguridad al hablar", body: "Para quienes entienden más de lo que se atreven a decir." },
        { title: "Presentaciones y conferencias", body: "Para preparar ideas, practicar mensajes y llegar con más seguridad." },
        { title: "Conversaciones reales", body: "Para practicar temas de trabajo, viajes, entrevistas, vida social o metas personales." },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Simple, privado y enfocado en hablar.",
      body: "Cada sesión se construye alrededor de tus objetivos y las conversaciones que necesitas practicar.",
      steps: [
        { title: "Define tu objetivo", body: "Cuéntanos qué conversación, situación o meta quieres preparar." },
        { title: "Practica en vivo", body: "Habla con un docente en sesiones privadas de 45 minutos." },
        { title: "Recibe corrección útil", body: "Tu docente te corrige durante la sesión y te da feedback después." },
        { title: "Vuelve a intentarlo", body: "Repites, mejoras y ganas naturalidad con cada clase." },
      ],
    },
    topics: {
      eyebrow: "Temas posibles",
      title: "Tu práctica se adapta a lo que necesitas decir.",
      body: "No seguimos una lista rígida de temas. Practicamos lo que tiene sentido para tu vida.",
      items: ["Presentaciones", "Conferencias", "Reuniones", "Entrevistas", "Viajes", "Vida social", "Trabajo", "Relocación"],
    },
    includes: {
      eyebrow: "Qué incluye",
      title: "Conversación privada con dirección.",
      features: [
        { title: "Sesiones privadas en vivo", body: "Sesiones uno a uno con un docente." },
        { title: "Formato de 45 minutos", body: "Un formato ágil para practicar sin saturarte." },
        { title: "Práctica por temas", body: "Práctica basada en tus metas, situaciones y necesidades reales." },
        { title: "Corrección en vivo", body: "Corrección durante la conversación para mejorar en el momento." },
        { title: "Feedback después de la sesión", body: "Observaciones después de la sesión para seguir avanzando." },
        { title: "Personalización con Langia TailorED", body: "Personalización de temas y práctica según tu contexto." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "La práctica se adapta a tu conversación real.",
      body: "Langia TailorED ayuda a conectar tus metas, tus temas, tus errores frecuentes y el feedback docente para que cada sesión tenga más intención.",
    },
    pricing: {
      eyebrow: "Precios",
      title: "Empieza con 10 sesiones privadas.",
      body: "Talkin' Club es flexible: compras desde 10 sesiones y puedes añadir más cuando quieras. Los precios son por estudiante.",
      cards: [
        {
          title: "Pack inicial",
          price: "$10 USD",
          unit: "por sesión",
          details: ["Desde 10 sesiones", "Sesiones privadas", "45 minutos por sesión"],
          cta: "Empezar a hablar",
        },
        {
          title: "Pack 20+",
          price: "$8.50 USD",
          unit: "por sesión",
          badge: "Mejor valor",
          details: ["Desde 20 sesiones", "Sesiones privadas", "45 minutos por sesión"],
          cta: "Empezar a hablar",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { title: "¿Talkin' Club es privado?", body: "Sí. Langia Talkin' Club es exclusivamente privado." },
        { title: "¿Cuánto dura cada sesión?", body: "Cada sesión dura 45 minutos." },
        { title: "¿Cuántas sesiones debo comprar?", body: "Puedes empezar desde 10 sesiones y añadir más cuando quieras." },
        { title: "¿Sigue niveles?", body: "No como Langia Online. Talkin' Club se enfoca en temas, metas y conversaciones reales." },
        { title: "¿Me corrigen mientras hablo?", body: "Sí. El docente puede corregirte durante la sesión y también darte feedback al finalizar." },
        { title: "¿Puedo preparar una presentación o conferencia?", body: "Sí. Es uno de los usos ideales del programa." },
      ],
    },
    finalCta: {
      title: "Hablar con más confianza empieza practicando.",
      body: "Elige tus temas, agenda tus sesiones y empieza a perder el miedo a expresarte.",
      primaryCta: "Empieza a hablar",
      secondaryCta: "Comparar programas",
    },
  },
  pt: {
    hero: {
      eyebrow: "Langia Talkin' Club",
      title: "Pratique as conversas que sua vida realmente precisa.",
      body: "Sessões privadas de conversação para ganhar fluência, confiança e naturalidade sem medo de errar.",
      primaryCta: "Comece a falar",
      secondaryCta: "Ver preços",
      quickFacts: [
        "Sessões privadas",
        "45 minutos",
        "A partir de 10 aulas",
        "Inglês, francês, espanhol ou português",
      ],
    },
    who: {
      eyebrow: "Para quem é",
      title: "Para pessoas que querem falar com mais segurança.",
      body: "Talkin' Club foi criado para quem precisa praticar, perder o medo e preparar conversas importantes.",
      cards: [
        { title: "Pessoas que sentem insegurança ao falar", body: "Para quem entende mais do que consegue dizer." },
        { title: "Apresentações e conferências", body: "Para preparar ideias, praticar mensagens e chegar com mais segurança." },
        { title: "Conversas reais", body: "Para praticar temas de trabalho, viagens, entrevistas, vida social ou objetivos pessoais." },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      title: "Simples, privado e focado em falar.",
      body: "Cada sessão é construída ao redor dos seus objetivos e das conversas que você precisa praticar.",
      steps: [
        { title: "Defina seu objetivo", body: "Conte qual conversa, situação ou meta você quer preparar." },
        { title: "Pratique ao vivo", body: "Fale com um professor em sessões privadas de 45 minutos." },
        { title: "Receba correção útil", body: "Seu professor corrige durante a sessão e dá feedback depois." },
        { title: "Tente novamente", body: "Você repete, melhora e ganha naturalidade a cada aula." },
      ],
    },
    topics: {
      eyebrow: "Temas possíveis",
      title: "Sua prática se adapta ao que você precisa dizer.",
      body: "Não seguimos uma lista rígida de temas. Praticamos o que faz sentido para sua vida.",
      items: ["Apresentações", "Conferências", "Reuniões", "Entrevistas", "Viagens", "Vida social", "Trabalho", "Mudança de país"],
    },
    includes: {
      eyebrow: "O que inclui",
      title: "Conversação privada com direção.",
      features: [
        { title: "Sessões privadas ao vivo", body: "Sessões individuais com um professor." },
        { title: "Formato de 45 minutos", body: "Um formato ágil para praticar sem se sobrecarregar." },
        { title: "Prática por temas", body: "Prática baseada nos seus objetivos, situações e necessidades reais." },
        { title: "Correção ao vivo", body: "Correção durante a conversa para melhorar no momento." },
        { title: "Feedback depois da sessão", body: "Observações depois da sessão para continuar avançando." },
        { title: "Personalização com Langia TailorED", body: "Personalização de temas e prática conforme seu contexto." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "A prática se adapta à sua conversa real.",
      body: "Langia TailorED ajuda a conectar seus objetivos, seus temas, seus erros frequentes e o feedback do professor para que cada sessão tenha mais intenção.",
    },
    pricing: {
      eyebrow: "Preços",
      title: "Comece com 10 sessões privadas.",
      body: "Talkin' Club é flexível: você compra a partir de 10 sessões e pode adicionar mais quando quiser. Os preços são por aluno.",
      cards: [
        {
          title: "Pack inicial",
          price: "$10 USD",
          unit: "por sessão",
          details: ["A partir de 10 sessões", "Sessões privadas", "45 minutos por sessão"],
          cta: "Começar a falar",
        },
        {
          title: "Pack 20+",
          price: "$8.50 USD",
          unit: "por sessão",
          badge: "Melhor valor",
          details: ["A partir de 20 sessões", "Sessões privadas", "45 minutos por sessão"],
          cta: "Começar a falar",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        { title: "Talkin' Club é privado?", body: "Sim. Langia Talkin' Club é exclusivamente privado." },
        { title: "Quanto tempo dura cada sessão?", body: "Cada sessão dura 45 minutos." },
        { title: "Quantas sessões devo comprar?", body: "Você pode começar a partir de 10 sessões e adicionar mais quando quiser." },
        { title: "Segue níveis?", body: "Não como Langia Online. Talkin' Club foca em temas, objetivos e conversas reais." },
        { title: "Recebo correção enquanto falo?", body: "Sim. O professor pode corrigir durante a sessão e também dar feedback ao final." },
        { title: "Posso preparar uma apresentação ou conferência?", body: "Sim. Esse é um dos usos ideais do programa." },
      ],
    },
    finalCta: {
      title: "Falar com mais confiança começa praticando.",
      body: "Escolha seus temas, agende suas sessões e comece a perder o medo de se expressar.",
      primaryCta: "Comece a falar",
      secondaryCta: "Comparar programas",
    },
  },
  en: {
    hero: {
      eyebrow: "Langia Talkin' Club",
      title: "Practice the conversations your life actually needs.",
      body: "Private conversation sessions to build fluency, confidence, and natural speaking without fear of making mistakes.",
      primaryCta: "Start speaking",
      secondaryCta: "View pricing",
      quickFacts: [
        "Private sessions",
        "45 minutes",
        "Starts at 10 lessons",
        "English, French, Spanish, or Portuguese",
      ],
    },
    who: {
      eyebrow: "Who it is for",
      title: "For people who want to speak with more confidence.",
      body: "Talkin' Club is designed for learners who need practice, less fear, and preparation for important conversations.",
      cards: [
        { title: "Shy speakers", body: "For people who understand more than they feel ready to say." },
        { title: "Presentations and conferences", body: "Prepare ideas, rehearse your message, and show up with more confidence." },
        { title: "Real conversations", body: "Practice work, travel, interviews, social life, or personal goals." },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Simple, private, and focused on speaking.",
      body: "Each session is built around your goals and the conversations you need to practice.",
      steps: [
        { title: "Define your goal", body: "Tell us which conversation, situation, or speaking goal you want to prepare." },
        { title: "Practice live", body: "Speak with a teacher in private 45-minute sessions." },
        { title: "Get useful correction", body: "Your teacher corrects you during the session and gives feedback afterward." },
        { title: "Try again", body: "Repeat, improve, and build natural speaking with every class." },
      ],
    },
    topics: {
      eyebrow: "Possible topics",
      title: "Your practice adapts to what you need to say.",
      body: "We do not follow a rigid topic list. We practice what makes sense for your life.",
      items: ["Presentations", "Conferences", "Meetings", "Interviews", "Travel", "Social life", "Work", "Relocation"],
    },
    includes: {
      eyebrow: "What is included",
      title: "Private conversation with direction.",
      features: [
        { title: "Private live sessions", body: "One-on-one sessions with a teacher." },
        { title: "45-minute format", body: "A focused format for practice without overload." },
        { title: "Topic-based practice", body: "Practice based on your goals, situations, and real needs." },
        { title: "Live correction", body: "Correction during the conversation so you improve in the moment." },
        { title: "Post-session feedback", body: "Notes after the session to help you keep moving forward." },
        { title: "Langia TailorED personalization", body: "Topics and practice personalized around your context." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "Practice adapts to your real conversations.",
      body: "Langia TailorED helps connect your goals, topics, recurring mistakes, and teacher feedback so each session has more intention.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Start with 10 private sessions.",
      body: "Talkin' Club is flexible: start with 10 sessions and add more whenever you want. Prices are per student.",
      cards: [
        {
          title: "Starter pack",
          price: "$10 USD",
          unit: "per session",
          details: ["Starts at 10 sessions", "Private sessions", "45 minutes per session"],
          cta: "Start speaking",
        },
        {
          title: "20+ pack",
          price: "$8.50 USD",
          unit: "per session",
          badge: "Best value",
          details: ["Starts at 20 sessions", "Private sessions", "45 minutes per session"],
          cta: "Start speaking",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { title: "Is Talkin' Club private?", body: "Yes. Langia Talkin' Club is exclusively private." },
        { title: "How long is each session?", body: "Each session lasts 45 minutes." },
        { title: "How many sessions do I need to buy?", body: "You can start with 10 sessions and add more whenever you want." },
        { title: "Does it follow levels?", body: "Not like Langia Online. Talkin' Club focuses on topics, goals, and real conversations." },
        { title: "Will I be corrected while speaking?", body: "Yes. Your teacher can correct you during the session and also give feedback afterward." },
        { title: "Can I prepare a presentation or conference?", body: "Yes. That is one of the ideal uses of the program." },
      ],
    },
    finalCta: {
      title: "Speaking with more confidence starts with practice.",
      body: "Choose your topics, schedule your sessions, and start losing the fear of expressing yourself.",
      primaryCta: "Start speaking",
      secondaryCta: "Compare programs",
    },
  },
} as const satisfies Record<PageLanguage, TalkinClubPageContent>;

const testPrepPageContent = {
  es: {
    hero: {
      eyebrow: "Langia Test Prep",
      title: "Prepárate para el resultado que necesitas.",
      body: "Un programa privado de preparación para exámenes, con diagnóstico, práctica guiada, feedback docente y reportes de desempeño.",
      primaryCta: "Prepárate para tu examen",
      secondaryCta: "Ver precios",
      quickFacts: ["Private only", "45 minutos", "Mínimo 40 clases", "3 mock tests"],
    },
    exams: {
      eyebrow: "Exámenes",
      title: "Preparación para certificaciones internacionales.",
      body: "Trabajamos con exámenes de inglés, español, portugués y francés, adaptando la preparación al formato, habilidades y criterios de cada prueba.",
      groups: [
        { title: "English exams", items: ["IELTS", "TOEFL", "Cambridge C1/C2", "PTE Academic", "Duolingo English Test", "CELPIP"] },
        { title: "Spanish exams", items: ["DELE", "SIELE", "TELC Español", "CELU", "AP Spanish"] },
        { title: "Portuguese exams", items: ["CELPE-Bras", "CAPLE"] },
        { title: "French exams", items: ["DELF A1-B2", "DALF C1-C2", "TCF", "TEF"] },
      ],
    },
    who: {
      eyebrow: "Para quién es",
      title: "Para estudiantes con una meta concreta.",
      body: "Test Prep está diseñado para personas que necesitan prepararse con estrategia, estructura y feedback para una certificación o requisito específico.",
      cards: [
        { title: "Universidad y estudios", body: "Para quienes necesitan una certificación como parte de un proceso académico." },
        { title: "Migración y visas", body: "Para quienes deben demostrar nivel de idioma en procesos oficiales." },
        { title: "Trabajo y certificación", body: "Para profesionales que necesitan respaldar su nivel con un resultado oficial." },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Primero entendemos tu punto de partida.",
      body: "La preparación empieza con diagnóstico y se ajusta según tus resultados, habilidades débiles y fecha objetivo.",
      steps: [
        { title: "Mock diagnóstico", body: "En la primera clase, medimos tu punto de partida frente al formato del examen." },
        { title: "Plan de preparación", body: "Definimos habilidades prioritarias, ritmo y enfoque según tu meta." },
        { title: "Práctica guiada", body: "Trabajas lectura, escritura, escucha y habla con estrategia y feedback." },
        { title: "Mock final y reporte", body: "Cerramos con una medición final y un reporte de desempeño." },
      ],
    },
    includes: {
      eyebrow: "Qué incluye",
      title: "Preparación privada, estratégica y medible.",
      features: [
        { title: "Private 45-minute classes", body: "Clases privadas de 45 minutos enfocadas en tu examen." },
        { title: "Exam-specific strategy", body: "Trabajo guiado según el formato, tipo de preguntas y criterios de la prueba." },
        { title: "Reading, writing, listening, speaking", body: "Preparación integral en las habilidades que evalúa el examen." },
        { title: "Writing correction", body: "Corrección de respuestas escritas con orientación clara." },
        { title: "Speaking feedback", body: "Feedback para mejorar estructura, fluidez, precisión y seguridad." },
        { title: "Scoring rubrics", body: "Práctica alineada con criterios de evaluación." },
        { title: "Time management", body: "Estrategias para responder mejor bajo presión." },
        { title: "Performance reports", body: "Reportes para entender desempeño, progreso y áreas por reforzar." },
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Entrena cada habilidad con intención.",
      body: "El programa trabaja lectura, escritura, escucha y habla, pero la intensidad se ajusta según tus brechas y el examen que vas a presentar.",
      cards: [
        { title: "Reading", body: "Lectura estratégica, manejo del tiempo y tipos de pregunta." },
        { title: "Writing", body: "Estructura, precisión, coherencia y corrección." },
        { title: "Listening", body: "Comprensión, toma de notas y reconocimiento de información clave." },
        { title: "Speaking", body: "Fluidez, organización, precisión y seguridad." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "La preparación se adapta a tus brechas.",
      body: "Langia TailorED conecta tu examen, meta, línea de tiempo, mocks, habilidades débiles y feedback docente para orientar la preparación con más precisión.",
    },
    mocks: {
      eyebrow: "Medición",
      title: "Tres mocks para entender tu avance.",
      body: "Incluimos un mock diagnóstico, uno intermedio y uno final para dar seguimiento a tu desempeño. Los reportes ayudan a entender tu progreso, tus brechas y tu nivel de dedicación durante el programa.",
      cards: [
        { title: "Mock diagnóstico", body: "Primera clase" },
        { title: "Mock intermedio", body: "Mitad del programa" },
        { title: "Mock final", body: "Cierre del programa" },
      ],
      note: "Los reportes no garantizan un resultado oficial. Sirven como referencia de desempeño durante la preparación.",
    },
    pricing: {
      eyebrow: "Precios",
      title: "Preparación privada desde 40 clases.",
      body: "Los precios son por estudiante. El programa mínimo es de 40 clases de 45 minutos, con posibilidad de añadir más clases según tus metas.",
      note: "Las tarifas del examen oficial no están incluidas.",
      cta: "Prepárate para tu examen",
      cards: [
        { title: "Langia Student Credit", price: "$13 USD", unit: "por clase", total: "$520 USD por 40 clases", body: "Paga por cuotas según el ritmo del programa." },
        { title: "Pago completo", price: "$11 USD", unit: "por clase", total: "$440 USD por 40 clases", body: "Paga el programa completo por adelantado con tarifa reducida." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { title: "¿Qué exámenes prepara Langia?", body: "Preparamos IELTS, TOEFL, Cambridge C1/C2, PTE Academic, Duolingo English Test, CELPIP, DELE, SIELE, TELC Español, CELU, AP Spanish, CELPE-Bras, CAPLE, DELF, DALF, TCF y TEF." },
        { title: "¿Test Prep es privado?", body: "Sí. Langia Test Prep es exclusivamente privado." },
        { title: "¿Cuántas clases necesito?", body: "El programa mínimo es de 40 clases. Se pueden añadir más según tu nivel, meta, examen y fecha objetivo." },
        { title: "¿Incluye mocks?", body: "Sí. Incluye un mock diagnóstico, uno intermedio y uno final." },
        { title: "¿Garantizan un resultado?", body: "No garantizamos resultados oficiales. Proporcionamos preparación estratégica y reportes de desempeño para orientar el progreso." },
        { title: "¿Cuánto tiempo antes del examen debo empezar?", body: "Recomendamos empezar al menos 2 meses antes del examen." },
      ],
    },
    finalCta: {
      title: "Convierte la presión del examen en un plan claro.",
      body: "Cuéntanos qué examen necesitas, tu fecha objetivo y el resultado que buscas.",
      primaryCta: "Prepárate para tu examen",
      secondaryCta: "Comparar programas",
    },
  },
  pt: {
    hero: {
      eyebrow: "Langia Test Prep",
      title: "Prepare-se para o resultado que você precisa.",
      body: "Um programa privado de preparação para exames, com diagnóstico, prática guiada, feedback do professor e relatórios de desempenho.",
      primaryCta: "Prepare-se para seu exame",
      secondaryCta: "Ver preços",
      quickFacts: ["Private only", "45 minutos", "Mínimo de 40 aulas", "3 simulados"],
    },
    exams: {
      eyebrow: "Exames",
      title: "Preparação para certificações internacionais.",
      body: "Trabalhamos com exames de inglês, espanhol, português e francês, adaptando a preparação ao formato, habilidades e critérios de cada prova.",
      groups: [
        { title: "English exams", items: ["IELTS", "TOEFL", "Cambridge C1/C2", "PTE Academic", "Duolingo English Test", "CELPIP"] },
        { title: "Spanish exams", items: ["DELE", "SIELE", "TELC Español", "CELU", "AP Spanish"] },
        { title: "Portuguese exams", items: ["CELPE-Bras", "CAPLE"] },
        { title: "French exams", items: ["DELF A1-B2", "DALF C1-C2", "TCF", "TEF"] },
      ],
    },
    who: {
      eyebrow: "Para quem é",
      title: "Para alunos com um objetivo concreto.",
      body: "Test Prep foi criado para pessoas que precisam se preparar com estratégia, estrutura e feedback para uma certificação ou requisito específico.",
      cards: [
        { title: "Universidade e estudos", body: "Para quem precisa de uma certificação como parte de um processo acadêmico." },
        { title: "Migração e vistos", body: "Para quem precisa comprovar nível de idioma em processos oficiais." },
        { title: "Trabalho e certificação", body: "Para profissionais que precisam comprovar seu nível com um resultado oficial." },
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Primeiro entendemos seu ponto de partida.",
      body: "A preparação começa com diagnóstico e se ajusta conforme seus resultados, habilidades fracas e data objetivo.",
      steps: [
        { title: "Simulado diagnóstico", body: "Na primeira aula, medimos seu ponto de partida frente ao formato do exame." },
        { title: "Plano de preparação", body: "Definimos habilidades prioritárias, ritmo e foco conforme seu objetivo." },
        { title: "Prática guiada", body: "Você trabalha leitura, escrita, escuta e fala com estratégia e feedback." },
        { title: "Simulado final e relatório", body: "Encerramos com uma medição final e um relatório de desempenho." },
      ],
    },
    includes: {
      eyebrow: "O que inclui",
      title: "Preparação privada, estratégica e mensurável.",
      features: [
        { title: "Private 45-minute classes", body: "Aulas privadas de 45 minutos focadas no seu exame." },
        { title: "Exam-specific strategy", body: "Trabalho guiado conforme o formato, tipos de perguntas e critérios da prova." },
        { title: "Reading, writing, listening, speaking", body: "Preparação integral nas habilidades avaliadas pelo exame." },
        { title: "Writing correction", body: "Correção de respostas escritas com orientação clara." },
        { title: "Speaking feedback", body: "Feedback para melhorar estrutura, fluência, precisão e segurança." },
        { title: "Scoring rubrics", body: "Prática alinhada aos critérios de avaliação." },
        { title: "Time management", body: "Estratégias para responder melhor sob pressão." },
        { title: "Performance reports", body: "Relatórios para entender desempenho, progresso e áreas a reforçar." },
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Treine cada habilidade com intenção.",
      body: "O programa trabalha leitura, escrita, escuta e fala, mas a intensidade se ajusta conforme suas lacunas e o exame que você vai apresentar.",
      cards: [
        { title: "Reading", body: "Leitura estratégica, gestão do tempo e tipos de pergunta." },
        { title: "Writing", body: "Estrutura, precisão, coerência e correção." },
        { title: "Listening", body: "Compreensão, anotações e reconhecimento de informação-chave." },
        { title: "Speaking", body: "Fluência, organização, precisão e segurança." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "A preparação se adapta às suas lacunas.",
      body: "Langia TailorED conecta seu exame, objetivo, linha do tempo, simulados, habilidades fracas e feedback do professor para orientar a preparação com mais precisão.",
    },
    mocks: {
      eyebrow: "Medição",
      title: "Três simulados para entender seu avanço.",
      body: "Incluímos um simulado diagnóstico, um intermediário e um final para acompanhar seu desempenho. Os relatórios ajudam a entender seu progresso, lacunas e nível de dedicação durante o programa.",
      cards: [
        { title: "Simulado diagnóstico", body: "Primeira aula" },
        { title: "Simulado intermediário", body: "Metade do programa" },
        { title: "Simulado final", body: "Encerramento do programa" },
      ],
      note: "Os relatórios não garantem um resultado oficial. Servem como referência de desempenho durante a preparação.",
    },
    pricing: {
      eyebrow: "Preços",
      title: "Preparação privada a partir de 40 aulas.",
      body: "Os preços são por aluno. O programa mínimo é de 40 aulas de 45 minutos, com possibilidade de adicionar mais aulas conforme seus objetivos.",
      note: "As taxas do exame oficial não estão incluídas.",
      cta: "Prepare-se para seu exame",
      cards: [
        { title: "Langia Student Credit", price: "$13 USD", unit: "por aula", total: "$520 USD por 40 aulas", body: "Pague em parcelas conforme o ritmo do programa." },
        { title: "Pagamento completo", price: "$11 USD", unit: "por aula", total: "$440 USD por 40 aulas", body: "Pague o programa completo antecipadamente com tarifa reduzida." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        { title: "Quais exames a Langia prepara?", body: "Preparamos IELTS, TOEFL, Cambridge C1/C2, PTE Academic, Duolingo English Test, CELPIP, DELE, SIELE, TELC Español, CELU, AP Spanish, CELPE-Bras, CAPLE, DELF, DALF, TCF e TEF." },
        { title: "Test Prep é privado?", body: "Sim. Langia Test Prep é exclusivamente privado." },
        { title: "Quantas aulas eu preciso?", body: "O programa mínimo é de 40 aulas. É possível adicionar mais conforme seu nível, objetivo, exame e data alvo." },
        { title: "Inclui simulados?", body: "Sim. Inclui um simulado diagnóstico, um intermediário e um final." },
        { title: "Vocês garantem um resultado?", body: "Não garantimos resultados oficiais. Oferecemos preparação estratégica e relatórios de desempenho para orientar o progresso." },
        { title: "Quanto tempo antes do exame devo começar?", body: "Recomendamos começar pelo menos 2 meses antes do exame." },
      ],
    },
    finalCta: {
      title: "Transforme a pressão do exame em um plano claro.",
      body: "Conte qual exame você precisa, sua data objetivo e o resultado que busca.",
      primaryCta: "Prepare-se para seu exame",
      secondaryCta: "Comparar programas",
    },
  },
  en: {
    hero: {
      eyebrow: "Langia Test Prep",
      title: "Train for the score you need.",
      body: "A private exam preparation program with diagnostics, guided practice, teacher feedback, and performance reports.",
      primaryCta: "Prepare for your exam",
      secondaryCta: "View pricing",
      quickFacts: ["Private only", "45 minutes", "Minimum 40 lessons", "3 mock tests"],
    },
    exams: {
      eyebrow: "Exams",
      title: "Preparation for international certifications.",
      body: "We work with English, Spanish, Portuguese, and French exams, adapting preparation to each test's format, skills, and scoring criteria.",
      groups: [
        { title: "English exams", items: ["IELTS", "TOEFL", "Cambridge C1/C2", "PTE Academic", "Duolingo English Test", "CELPIP"] },
        { title: "Spanish exams", items: ["DELE", "SIELE", "TELC Español", "CELU", "AP Spanish"] },
        { title: "Portuguese exams", items: ["CELPE-Bras", "CAPLE"] },
        { title: "French exams", items: ["DELF A1-B2", "DALF C1-C2", "TCF", "TEF"] },
      ],
    },
    who: {
      eyebrow: "Who it is for",
      title: "For learners with a concrete goal.",
      body: "Test Prep is designed for people who need strategic preparation, structure, and feedback for a certification or specific requirement.",
      cards: [
        { title: "University and study", body: "For learners who need certification as part of an academic process." },
        { title: "Migration and visas", body: "For people who need to prove language level in official processes." },
        { title: "Work and certification", body: "For professionals who need to support their level with an official result." },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "First, we understand your starting point.",
      body: "Preparation begins with diagnostics and adapts to your results, weaker skills, and target date.",
      steps: [
        { title: "Diagnostic mock test", body: "In the first class, we measure your starting point against the exam format." },
        { title: "Preparation plan", body: "We define priority skills, pace, and focus based on your goal." },
        { title: "Guided practice", body: "You work on reading, writing, listening, and speaking with strategy and feedback." },
        { title: "Final mock and report", body: "We close with a final measurement and performance report." },
      ],
    },
    includes: {
      eyebrow: "What is included",
      title: "Private, strategic, and measurable preparation.",
      features: [
        { title: "Private 45-minute classes", body: "Private 45-minute classes focused on your exam." },
        { title: "Exam-specific strategy", body: "Guided work based on the test format, question types, and scoring criteria." },
        { title: "Reading, writing, listening, speaking", body: "Integrated preparation across the skills your exam evaluates." },
        { title: "Writing correction", body: "Correction of written responses with clear guidance." },
        { title: "Speaking feedback", body: "Feedback to improve structure, fluency, accuracy, and confidence." },
        { title: "Scoring rubrics", body: "Practice aligned with evaluation criteria." },
        { title: "Time management", body: "Strategies to respond better under pressure." },
        { title: "Performance reports", body: "Reports to understand performance, progress, and areas to reinforce." },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Train each skill with intention.",
      body: "The program works on reading, writing, listening, and speaking, but intensity adapts to your gaps and the exam you will take.",
      cards: [
        { title: "Reading", body: "Strategic reading, time management, and question types." },
        { title: "Writing", body: "Structure, accuracy, coherence, and correction." },
        { title: "Listening", body: "Comprehension, note-taking, and identifying key information." },
        { title: "Speaking", body: "Fluency, organization, accuracy, and confidence." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "Preparation adapts to your skill gaps.",
      body: "Langia TailorED connects your exam, target, timeline, mock tests, weaker skills, and teacher feedback to guide preparation with more precision.",
    },
    mocks: {
      eyebrow: "Measurement",
      title: "Three mock tests to understand progress.",
      body: "We include a diagnostic mock test, a mid-program mock, and a final mock to track performance. Reports help show progress, gaps, and dedication throughout the program.",
      cards: [
        { title: "Diagnostic mock", body: "First class" },
        { title: "Mid-program mock", body: "Program midpoint" },
        { title: "Final mock", body: "Program close" },
      ],
      note: "Reports do not guarantee an official score. They serve as a performance reference during preparation.",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Private preparation starting at 40 lessons.",
      body: "Prices are per student. The minimum program is 40 lessons of 45 minutes, with the option to add more lessons depending on your goals.",
      note: "Official exam fees are not included.",
      cta: "Prepare for your exam",
      cards: [
        { title: "Langia Student Credit", price: "$13 USD", unit: "per lesson", total: "$520 USD for 40 lessons", body: "Pay in installments according to your program pace." },
        { title: "Pay in full", price: "$11 USD", unit: "per lesson", total: "$440 USD for 40 lessons", body: "Pay for the full program upfront at a reduced rate." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { title: "Which exams does Langia prepare for?", body: "We prepare for IELTS, TOEFL, Cambridge C1/C2, PTE Academic, Duolingo English Test, CELPIP, DELE, SIELE, TELC Español, CELU, AP Spanish, CELPE-Bras, CAPLE, DELF, DALF, TCF, and TEF." },
        { title: "Is Test Prep private?", body: "Yes. Langia Test Prep is exclusively private." },
        { title: "How many lessons do I need?", body: "The minimum program is 40 lessons. More can be added depending on your level, goal, exam, and target date." },
        { title: "Does it include mock tests?", body: "Yes. It includes a diagnostic mock, a mid-program mock, and a final mock." },
        { title: "Do you guarantee a score?", body: "We do not guarantee official scores. We provide strategic preparation and performance reports to guide progress." },
        { title: "How early should I start before the exam?", body: "We recommend starting at least 2 months before your exam." },
      ],
    },
    finalCta: {
      title: "Turn exam pressure into a clear plan.",
      body: "Tell us which exam you need, your target date, and the result you are working toward.",
      primaryCta: "Prepare for your exam",
      secondaryCta: "Compare programs",
    },
  },
} as const satisfies Record<PageLanguage, TestPrepPageContent>;

const kidsTeensLevels = [
  "Foundation Pre-A1",
  "Initiate A1.1",
  "Essentials A1.2",
  "Momentum A2.1",
  "Fluency A2.2",
  "Confidence B1.1",
  "Clarity B1.2",
  "Precision B2.1",
  "Impact B2.2",
  "Mastery C1.1",
] as const;

const kidsTeensPageContent = {
  es: {
    hero: {
      eyebrow: "Langia 4 Kids n Teens",
      title: "Aprendizaje que los padres pueden confiar y los niños pueden disfrutar.",
      body: "Un programa de 60 clases en vivo para niños y adolescentes de 8 a 17 años, con estructura, juego, seguimiento y acompañamiento docente.",
      primaryCta: "Empieza el camino de tu hijo",
      secondaryCta: "Ver precios",
      quickFacts: ["Edades 8-17", "Duo, Trio o Squad", "45 minutos", "Reporte mensual para padres"],
    },
    who: {
      eyebrow: "Para quién es",
      title: "Para familias que quieren estructura sin perder la alegría de aprender.",
      body: "Langia 4 Kids n Teens está diseñado para padres que quieren apoyar el desarrollo lingüístico de sus hijos con clases en vivo, seguimiento y una experiencia amable.",
      cards: [
        { title: "Niños y teens de 8 a 17", body: "Una ruta para aprender con apoyo, práctica y actividades adaptadas a la edad." },
        { title: "Padres que quieren seguimiento", body: "Reportes mensuales y comunicación con el docente para entender el progreso." },
        { title: "Apoyo escolar y desarrollo general", body: "Refuerzo para el colegio y desarrollo de confianza en el idioma." },
      ],
    },
    formats: {
      eyebrow: "Formatos",
      title: "Aprender en grupos pequeños, con atención real.",
      body: "No ofrecemos formato privado en Kids n Teens. Los estudiantes aprenden en grupos pequeños que mantienen interacción, juego y acompañamiento.",
      cards: [
        { title: "Duo", body: "Dos estudiantes para una experiencia cercana y colaborativa.", bestFor: "Ideal para hermanos, amigos o estudiantes con ritmos compatibles." },
        { title: "Trio", body: "Tres estudiantes para más interacción sin perder seguimiento.", bestFor: "Ideal para grupos pequeños que disfrutan aprender juntos." },
        { title: "Squad", body: "Un formato reducido para practicar, jugar y participar con más dinámica.", bestFor: "Ideal para familias o escuelas que buscan una experiencia social y estructurada." },
      ],
    },
    includes: {
      eyebrow: "Qué incluye",
      title: "Una experiencia divertida, guiada y visible para los padres.",
      features: [
        { title: "Clases en vivo en grupos pequeños", body: "Clases en vivo en Duo, Trio o Squad." },
        { title: "Clases de 45 minutos", body: "Sesiones de 45 minutos pensadas para mantener atención y energía." },
        { title: "Ruta de 10 niveles", body: "Una ruta clara para entender el progreso del estudiante." },
        { title: "Aprendizaje jugando", body: "Actividades para aprender jugando y participar con confianza." },
        { title: "Reportes mensuales para padres", body: "Reporte mensual para que los padres entiendan el avance." },
        { title: "Comunicación con el docente", body: "Posibilidad de escribir al docente para feedback específico." },
        { title: "Apoyo escolar", body: "Apoyo para reforzar habilidades útiles en el colegio." },
        { title: "Personalización con Langia TailorED", body: "Personalización según edad, intereses, ritmo y necesidades." },
      ],
    },
    classFeel: {
      eyebrow: "Aprender jugando",
      title: "Clases con estructura, juego y participación.",
      body: "Los estudiantes aprenden mejor cuando se sienten seguros para participar. Por eso combinamos objetivos claros con actividades dinámicas, conversación, retos y práctica guiada.",
      cards: [
        { title: "Juego con intención", body: "Actividades divertidas conectadas a objetivos lingüísticos." },
        { title: "Participación constante", body: "Espacios para hablar, responder, crear y practicar." },
        { title: "Confianza poco a poco", body: "Un ambiente amable para atreverse a usar el idioma." },
      ],
    },
    parentSafety: {
      eyebrow: "Para padres",
      title: "Seguimiento claro y un entorno de aprendizaje cuidado.",
      body: "Los padres reciben reportes mensuales y pueden comunicarse con el docente para entender avances, necesidades o situaciones específicas.",
      cards: [
        { title: "Reportes mensuales", body: "Una vista clara del progreso y la participación." },
        { title: "Comunicación con el docente", body: "Canal para preguntas o feedback específico." },
        { title: "Materiales adecuados", body: "Actividades y recursos pensados para la edad del estudiante." },
        { title: "Docentes seleccionados", body: "Profesores preparados para trabajar con niños y adolescentes." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "La ruta se adapta al estudiante y a la familia.",
      body: "Langia TailorED ayuda a conectar edad, intereses, ritmo, necesidades escolares, confianza y feedback docente para personalizar mejor la experiencia.",
    },
    levels: {
      eyebrow: "Ruta por nivel",
      title: "Una ruta clara, adaptada a la edad.",
      body: "El programa usa una estructura de niveles para guiar el progreso, pero las actividades se adaptan al momento, edad e intereses del estudiante.",
      items: kidsTeensLevels,
    },
    schedule: {
      eyebrow: "Frecuencia",
      title: "60 clases con ritmo constante.",
      body: "La frecuencia mínima recomendada es de 3 clases por semana, aproximadamente 12 clases al mes. Esto permite avanzar con continuidad sin saturar al estudiante.",
      bullets: [
        "60 clases de 45 minutos",
        "Mínimo 3 clases por semana",
        "Aproximadamente 12 clases al mes",
        "Duración estándar aproximada: 5 meses",
        "Sin tareas obligatorias",
      ],
    },
    pricing: {
      eyebrow: "Precios",
      title: "Elige el formato que mejor se ajusta a tu familia.",
      body: "Los precios son por estudiante para el programa completo de 60 clases. Este programa no tiene formato privado.",
      studentCreditTitle: "Langia Student Credit",
      studentCreditBody: "Paga mes a mes según el ritmo del programa. Máximo 5 cuotas.",
      payFullTitle: "Pago completo",
      payFullBody: "Paga el programa completo y recibe 15% de descuento sobre el precio de Langia Student Credit.",
      labels: {
        base: "Precio base",
        total: "Total Langia Student Credit",
        installments: "Cuotas",
        payFull: "Pago completo con 15% OFF",
        personalized: "Más personalizado",
        value: "Mejor valor",
      },
      cards: [
        { title: "Duo", studentCreditPerLesson: "$16 USD por clase", studentCreditTotal: "$960 USD total por estudiante", installments: "Hasta 5 cuotas de $192 USD por estudiante", payFull: "$816 USD por estudiante", badge: "personalized" },
        { title: "Trio", studentCreditPerLesson: "$13 USD por clase", studentCreditTotal: "$780 USD total por estudiante", installments: "Hasta 5 cuotas de $156 USD por estudiante", payFull: "$663 USD por estudiante" },
        { title: "Squad", studentCreditPerLesson: "$10 USD por clase", studentCreditTotal: "$600 USD total por estudiante", installments: "Hasta 5 cuotas de $120 USD por estudiante", payFull: "$510 USD por estudiante", badge: "value" },
      ],
      cta: "Empieza el camino de tu hijo",
    },
    schools: {
      eyebrow: "Para colegios",
      title: "También podemos construir una ruta para tu institución.",
      body: "Langia 4 Kids n Teens puede adaptarse para colegios que buscan apoyo en idiomas, práctica comunicativa o programas complementarios para sus estudiantes.",
      cta: "Hablar con Langia",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { title: "¿Qué edades pueden tomar Langia 4 Kids n Teens?", body: "El programa está diseñado para niños y adolescentes de 8 a 17 años." },
        { title: "¿Hay clases privadas?", body: "No. Este programa se ofrece en Duo, Trio o Squad." },
        { title: "¿Cuánto dura cada clase?", body: "Cada clase dura 45 minutos." },
        { title: "¿Cuántas clases tiene el programa?", body: "El programa tiene 60 clases." },
        { title: "¿Hay tareas?", body: "No hay tareas obligatorias. La práctica ocurre principalmente durante las clases." },
        { title: "¿Los padres reciben reportes?", body: "Sí. Los padres reciben un reporte mensual y pueden escribir al docente para feedback específico." },
        { title: "¿Se puede ofrecer a colegios?", body: "Sí. También podemos adaptar el programa para instituciones educativas." },
      ],
    },
    finalCta: {
      title: "El camino de tu hijo puede empezar con una clase mejor guiada.",
      body: "Elige un formato pequeño, recibe seguimiento y acompaña su progreso con más claridad.",
      primaryCta: "Empieza el camino de tu hijo",
      secondaryCta: "Comparar programas",
    },
  },
  pt: {
    hero: {
      eyebrow: "Langia 4 Kids n Teens",
      title: "Aprendizagem que os pais podem confiar e os filhos podem aproveitar.",
      body: "Um programa de 60 aulas ao vivo para crianças e adolescentes de 8 a 17 anos, com estrutura, jogo, acompanhamento e orientação docente.",
      primaryCta: "Comece o caminho do seu filho",
      secondaryCta: "Ver preços",
      quickFacts: ["Idades 8-17", "Duo, Trio ou Squad", "45 minutos", "Relatório mensal para pais"],
    },
    who: {
      eyebrow: "Para quem é",
      title: "Para famílias que querem estrutura sem perder a alegria de aprender.",
      body: "Langia 4 Kids n Teens foi criado para pais que querem apoiar o desenvolvimento linguístico dos filhos com aulas ao vivo, acompanhamento e uma experiência acolhedora.",
      cards: [
        { title: "Crianças e teens de 8 a 17", body: "Uma rota para aprender com apoio, prática e atividades adaptadas à idade." },
        { title: "Pais que querem acompanhamento", body: "Relatórios mensais e comunicação com o professor para entender o progresso." },
        { title: "Apoio escolar e desenvolvimento geral", body: "Reforço para a escola e desenvolvimento de confiança no idioma." },
      ],
    },
    formats: {
      eyebrow: "Formatos",
      title: "Aprender em grupos pequenos, com atenção real.",
      body: "Não oferecemos formato privado em Kids n Teens. Os alunos aprendem em grupos pequenos que mantêm interação, jogo e acompanhamento.",
      cards: [
        { title: "Duo", body: "Dois alunos para uma experiência próxima e colaborativa.", bestFor: "Ideal para irmãos, amigos ou alunos com ritmos compatíveis." },
        { title: "Trio", body: "Três alunos para mais interação sem perder acompanhamento.", bestFor: "Ideal para grupos pequenos que gostam de aprender juntos." },
        { title: "Squad", body: "Um formato reduzido para praticar, brincar e participar com mais dinâmica.", bestFor: "Ideal para famílias ou escolas que buscam uma experiência social e estruturada." },
      ],
    },
    includes: {
      eyebrow: "O que inclui",
      title: "Uma experiência divertida, guiada e visível para os pais.",
      features: [
        { title: "Aulas ao vivo em grupos pequenos", body: "Aulas ao vivo em Duo, Trio ou Squad." },
        { title: "Aulas de 45 minutos", body: "Sessões de 45 minutos pensadas para manter atenção e energia." },
        { title: "Rota de 10 níveis", body: "Uma rota clara para entender o progresso do aluno." },
        { title: "Aprendizagem brincando", body: "Atividades para aprender brincando e participar com confiança." },
        { title: "Relatórios mensais para pais", body: "Relatório mensal para que os pais entendam o avanço." },
        { title: "Comunicação com o professor", body: "Possibilidade de escrever ao professor para feedback específico." },
        { title: "Apoio escolar", body: "Apoio para reforçar habilidades úteis na escola." },
        { title: "Personalização com Langia TailorED", body: "Personalização conforme idade, interesses, ritmo e necessidades." },
      ],
    },
    classFeel: {
      eyebrow: "Aprender brincando",
      title: "Aulas com estrutura, jogo e participação.",
      body: "Os alunos aprendem melhor quando se sentem seguros para participar. Por isso combinamos objetivos claros com atividades dinâmicas, conversação, desafios e prática guiada.",
      cards: [
        { title: "Jogo com intenção", body: "Atividades divertidas conectadas a objetivos linguísticos." },
        { title: "Participação constante", body: "Espaços para falar, responder, criar e praticar." },
        { title: "Confiança aos poucos", body: "Um ambiente acolhedor para se arriscar a usar o idioma." },
      ],
    },
    parentSafety: {
      eyebrow: "Para pais",
      title: "Acompanhamento claro e um ambiente de aprendizagem cuidado.",
      body: "Os pais recebem relatórios mensais e podem se comunicar com o professor para entender avanços, necessidades ou situações específicas.",
      cards: [
        { title: "Relatórios mensais", body: "Uma visão clara do progresso e da participação." },
        { title: "Comunicação com o professor", body: "Canal para perguntas ou feedback específico." },
        { title: "Materiais adequados", body: "Atividades e recursos pensados para a idade do aluno." },
        { title: "Professores selecionados", body: "Professores preparados para trabalhar com crianças e adolescentes." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "A rota se adapta ao aluno e à família.",
      body: "Langia TailorED ajuda a conectar idade, interesses, ritmo, necessidades escolares, confiança e feedback do professor para personalizar melhor a experiência.",
    },
    levels: {
      eyebrow: "Rota por nível",
      title: "Uma rota clara, adaptada à idade.",
      body: "O programa usa uma estrutura de níveis para guiar o progresso, mas as atividades se adaptam ao momento, idade e interesses do aluno.",
      items: kidsTeensLevels,
    },
    schedule: {
      eyebrow: "Frequência",
      title: "60 aulas com ritmo constante.",
      body: "A frequência mínima recomendada é de 3 aulas por semana, aproximadamente 12 aulas por mês. Isso permite avançar com continuidade sem sobrecarregar o aluno.",
      bullets: [
        "60 aulas de 45 minutos",
        "Mínimo de 3 aulas por semana",
        "Aproximadamente 12 aulas por mês",
        "Duração padrão aproximada: 5 meses",
        "Sem tarefas obrigatórias",
      ],
    },
    pricing: {
      eyebrow: "Preços",
      title: "Escolha o formato que melhor combina com sua família.",
      body: "Os preços são por aluno para o programa completo de 60 aulas. Este programa não tem formato privado.",
      studentCreditTitle: "Langia Student Credit",
      studentCreditBody: "Pague mês a mês conforme o ritmo do programa. Máximo de 5 parcelas.",
      payFullTitle: "Pagamento completo",
      payFullBody: "Pague o programa completo e receba 15% de desconto sobre o preço do Langia Student Credit.",
      labels: {
        base: "Preço base",
        total: "Total Langia Student Credit",
        installments: "Parcelas",
        payFull: "Pagamento completo com 15% OFF",
        personalized: "Mais personalizado",
        value: "Melhor valor",
      },
      cards: [
        { title: "Duo", studentCreditPerLesson: "$16 USD por aula", studentCreditTotal: "$960 USD total por aluno", installments: "Até 5 parcelas de $192 USD por aluno", payFull: "$816 USD por aluno", badge: "personalized" },
        { title: "Trio", studentCreditPerLesson: "$13 USD por aula", studentCreditTotal: "$780 USD total por aluno", installments: "Até 5 parcelas de $156 USD por aluno", payFull: "$663 USD por aluno" },
        { title: "Squad", studentCreditPerLesson: "$10 USD por aula", studentCreditTotal: "$600 USD total por aluno", installments: "Até 5 parcelas de $120 USD por aluno", payFull: "$510 USD por aluno", badge: "value" },
      ],
      cta: "Comece o caminho do seu filho",
    },
    schools: {
      eyebrow: "Para escolas",
      title: "Também podemos construir uma rota para sua instituição.",
      body: "Langia 4 Kids n Teens pode se adaptar a escolas que buscam apoio em idiomas, prática comunicativa ou programas complementares para seus alunos.",
      cta: "Falar com a Langia",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        { title: "Quais idades podem fazer Langia 4 Kids n Teens?", body: "O programa foi criado para crianças e adolescentes de 8 a 17 anos." },
        { title: "Há aulas privadas?", body: "Não. Este programa é oferecido em Duo, Trio ou Squad." },
        { title: "Quanto tempo dura cada aula?", body: "Cada aula dura 45 minutos." },
        { title: "Quantas aulas tem o programa?", body: "O programa tem 60 aulas." },
        { title: "Há tarefas?", body: "Não há tarefas obrigatórias. A prática acontece principalmente durante as aulas." },
        { title: "Os pais recebem relatórios?", body: "Sim. Os pais recebem um relatório mensal e podem escrever ao professor para feedback específico." },
        { title: "Pode ser oferecido a escolas?", body: "Sim. Também podemos adaptar o programa para instituições educativas." },
      ],
    },
    finalCta: {
      title: "O caminho do seu filho pode começar com uma aula melhor guiada.",
      body: "Escolha um formato pequeno, receba acompanhamento e acompanhe o progresso com mais clareza.",
      primaryCta: "Comece o caminho do seu filho",
      secondaryCta: "Comparar programas",
    },
  },
  en: {
    hero: {
      eyebrow: "Langia 4 Kids n Teens",
      title: "Language learning parents can trust and kids can enjoy.",
      body: "A 60-lesson live program for kids and teens ages 8 to 17, with structure, play, progress reports, and teacher guidance.",
      primaryCta: "Start your child's path",
      secondaryCta: "View pricing",
      quickFacts: ["Ages 8-17", "Duo, Trio, or Squad", "45 minutes", "Monthly parent report"],
    },
    who: {
      eyebrow: "Who it is for",
      title: "For families who want structure without losing the joy of learning.",
      body: "Langia 4 Kids n Teens is designed for parents who want to support their child's language development with live classes, follow-up, and a welcoming experience.",
      cards: [
        { title: "Kids and teens ages 8-17", body: "A path to learn with support, practice, and age-appropriate activities." },
        { title: "Parents who want follow-up", body: "Monthly reports and teacher communication to understand progress." },
        { title: "School support and general development", body: "Support for school and broader confidence in the language." },
      ],
    },
    formats: {
      eyebrow: "Formats",
      title: "Small-group learning with real attention.",
      body: "Kids n Teens does not offer a private format. Students learn in small groups that keep interaction, play, and guidance at the center.",
      cards: [
        { title: "Duo", body: "Two students for a close, collaborative experience.", bestFor: "Ideal for siblings, friends, or learners with compatible rhythms." },
        { title: "Trio", body: "Three students for more interaction while keeping close support.", bestFor: "Ideal for small groups who enjoy learning together." },
        { title: "Squad", body: "A reduced group format for practice, play, and dynamic participation.", bestFor: "Ideal for families or schools looking for a social and structured experience." },
      ],
    },
    includes: {
      eyebrow: "What is included",
      title: "A fun, guided experience parents can actually follow.",
      features: [
        { title: "Live small-group classes", body: "Live classes in Duo, Trio, or Squad format." },
        { title: "45-minute lessons", body: "45-minute sessions designed to keep attention and energy." },
        { title: "10-level route", body: "A clear route to understand student progress." },
        { title: "Playful learning", body: "Activities that help students learn through play and participate with confidence." },
        { title: "Monthly parent reports", body: "Monthly reports so parents can understand progress." },
        { title: "Teacher communication", body: "Parents can message the teacher for specific feedback." },
        { title: "School support", body: "Support to reinforce skills useful at school." },
        { title: "Langia TailorED personalization", body: "Personalization based on age, interests, rhythm, and needs." },
      ],
    },
    classFeel: {
      eyebrow: "Learning through play",
      title: "Classes with structure, play, and participation.",
      body: "Students learn better when they feel safe to participate. That is why we combine clear goals with dynamic activities, conversation, challenges, and guided practice.",
      cards: [
        { title: "Play with purpose", body: "Fun activities connected to language goals." },
        { title: "Constant participation", body: "Space to speak, respond, create, and practice." },
        { title: "Confidence over time", body: "A welcoming environment to dare to use the language." },
      ],
    },
    parentSafety: {
      eyebrow: "For parents",
      title: "Clear follow-up and a cared-for learning environment.",
      body: "Parents receive monthly reports and can communicate with the teacher to understand progress, needs, or specific situations.",
      cards: [
        { title: "Monthly reports", body: "A clear view of progress and participation." },
        { title: "Teacher communication", body: "A channel for questions or specific feedback." },
        { title: "Age-appropriate materials", body: "Activities and resources designed for the student's age." },
        { title: "Selected teachers", body: "Teachers prepared to work with children and teenagers." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "The path adapts to the student and the family.",
      body: "Langia TailorED helps connect age, interests, rhythm, school needs, confidence, and teacher feedback to personalize the experience.",
    },
    levels: {
      eyebrow: "Level-based route",
      title: "A clear route, adapted to age.",
      body: "The program uses a level structure to guide progress, while activities adapt to the student's stage, age, and interests.",
      items: kidsTeensLevels,
    },
    schedule: {
      eyebrow: "Frequency",
      title: "60 lessons with a steady rhythm.",
      body: "The recommended minimum frequency is 3 lessons per week, about 12 lessons per month. This helps students progress consistently without overload.",
      bullets: [
        "60 lessons of 45 minutes",
        "Minimum 3 lessons per week",
        "About 12 lessons per month",
        "Standard duration: about 5 months",
        "No required homework",
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Choose the format that fits your family.",
      body: "Prices are per student for the full 60-lesson program. This program does not have a private format.",
      studentCreditTitle: "Langia Student Credit",
      studentCreditBody: "Pay month by month according to the program pace. Maximum 5 installments.",
      payFullTitle: "Pay in full",
      payFullBody: "Pay for the full program upfront and receive 15% off the Langia Student Credit price.",
      labels: {
        base: "Base price",
        total: "Langia Student Credit total",
        installments: "Installments",
        payFull: "Pay in full with 15% OFF",
        personalized: "Most personalized",
        value: "Best value",
      },
      cards: [
        { title: "Duo", studentCreditPerLesson: "$16 USD / lesson", studentCreditTotal: "$960 USD total per student", installments: "Up to 5 installments of $192 USD per student", payFull: "$816 USD per student", badge: "personalized" },
        { title: "Trio", studentCreditPerLesson: "$13 USD / lesson", studentCreditTotal: "$780 USD total per student", installments: "Up to 5 installments of $156 USD per student", payFull: "$663 USD per student" },
        { title: "Squad", studentCreditPerLesson: "$10 USD / lesson", studentCreditTotal: "$600 USD total per student", installments: "Up to 5 installments of $120 USD per student", payFull: "$510 USD per student", badge: "value" },
      ],
      cta: "Start your child's path",
    },
    schools: {
      eyebrow: "For schools",
      title: "We can also build a path for your institution.",
      body: "Langia 4 Kids n Teens can adapt for schools looking for language support, communicative practice, or complementary programs for students.",
      cta: "Talk to Langia",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { title: "What ages can take Langia 4 Kids n Teens?", body: "The program is designed for kids and teens ages 8 to 17." },
        { title: "Are there private classes?", body: "No. This program is offered in Duo, Trio, or Squad." },
        { title: "How long is each class?", body: "Each class lasts 45 minutes." },
        { title: "How many lessons are included?", body: "The program includes 60 lessons." },
        { title: "Is there homework?", body: "There is no required homework. Practice happens mainly during class." },
        { title: "Do parents receive reports?", body: "Yes. Parents receive a monthly report and can message the teacher for specific feedback." },
        { title: "Can this be offered to schools?", body: "Yes. We can also adapt the program for educational institutions." },
      ],
    },
    finalCta: {
      title: "Your child's path can start with better-guided learning.",
      body: "Choose a small-group format, receive follow-up, and support their progress with more clarity.",
      primaryCta: "Start your child's path",
      secondaryCta: "Compare programs",
    },
  },
} as const satisfies Record<PageLanguage, KidsTeensPageContent>;

const corporatePageContent = {
  es: {
    hero: {
      eyebrow: "Langia Corporate",
      title: "Idiomas para equipos que cruzan fronteras.",
      body: "Soluciones lingüísticas para compañías que necesitan comunicarse mejor con clientes, mercados y equipos internacionales.",
      primaryCta: "Solicitar propuesta",
      secondaryCta: "Ver servicios",
      quickFacts: ["Capacitación lingüística", "Traducción y localización", "Interpretación en vivo", "Reportes y seguimiento"],
    },
    overview: {
      eyebrow: "Soluciones corporativas",
      title: "Más que clases: un sistema lingüístico para tu operación.",
      body: "Langia Corporate adapta entrenamiento, traducción, localización e interpretación a las necesidades reales de cada compañía.",
      cards: [
        { title: "Language training", body: "Programas para empleados, líderes y equipos con objetivos profesionales." },
        { title: "Translation", body: "Traducción de documentos, materiales y comunicación institucional." },
        { title: "Localization", body: "Adaptación cultural y lingüística para mercados, clientes y audiencias." },
        { title: "Live interpretation", body: "Apoyo en reuniones, eventos, procesos comerciales o comunicación crítica." },
      ],
    },
    who: {
      eyebrow: "Para quién es",
      title: "Para compañías que necesitan comunicación más clara.",
      body: "Langia Corporate está pensado para equipos que trabajan con clientes, mercados, proveedores o compañeros en otros idiomas.",
      cards: [
        { title: "HR y L&D", body: "Diseña programas de formación medibles para empleados y equipos." },
        { title: "Operaciones y gerencia", body: "Alinea la capacitación con necesidades reales de la operación." },
        { title: "Equipos internacionales", body: "Mejora la comunicación entre áreas, países y culturas." },
        { title: "Líderes y ejecutivos", body: "Prepara presentaciones, reuniones y comunicación estratégica." },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Cuatro formas de apoyar la comunicación de tu compañía.",
      body: "Puedes contratar un solo servicio o combinar varios dentro de una solución corporativa.",
      cards: [
        { title: "Capacitación lingüística", body: "Programas online, presenciales o híbridos para empleados, líderes y equipos." },
        { title: "Traducción", body: "Documentos, presentaciones, materiales de formación, comunicaciones y contenido institucional." },
        { title: "Localización", body: "Adaptación del mensaje para mercados, culturas, tono de marca y audiencias específicas." },
        { title: "Interpretación en vivo", body: "Apoyo lingüístico para reuniones, eventos, entrenamientos, negociaciones o procesos sensibles." },
      ],
    },
    training: {
      eyebrow: "Capacitación",
      title: "Los programas de Langia, adaptados a tu compañía.",
      body: "Langia Corporate puede adaptar Langia Online, Talkin' Club, Test Prep y Kids n Teens a una estructura empresarial con reportes, seguimiento y objetivos definidos por la compañía.",
      cards: [
        { title: "Volumen y continuidad", body: "Precios y estructura se ajustan según número de participantes, duración y continuidad." },
        { title: "Objetivos de empresa", body: "Cuando la compañía define una necesidad específica, esa meta guía el diseño del programa." },
        { title: "Grupos y cohortes", body: "Organizamos empleados por nivel, rol, disponibilidad o necesidad comunicativa." },
        { title: "Seguimiento operativo", body: "La empresa recibe visibilidad sobre asistencia, progreso y desempeño." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "Un método para conectar objetivos de negocio con progreso lingüístico.",
      body: "Langia TailorED ayuda a diseñar programas corporativos conectando roles, niveles, metas, asistencia, feedback docente y desempeño para que la formación tenga más dirección.",
      bullets: ["Diagnóstico por nivel y rol", "Objetivos por equipo", "Feedback docente", "Reportes de avance", "Seguimiento de desempeño"],
    },
    tracking: {
      eyebrow: "Seguimiento",
      title: "Visibilidad para quienes lideran el programa.",
      body: "Los responsables pueden recibir reportes de asistencia, progreso, participación, desempeño y observaciones docentes para tomar decisiones con más claridad.",
      cards: [
        { title: "Asistencia", body: "Seguimiento de participación y continuidad." },
        { title: "Progreso", body: "Visibilidad sobre avance por nivel, habilidad o meta." },
        { title: "Desempeño", body: "Indicadores basados en clases, práctica y feedback." },
        { title: "Observaciones docentes", body: "Notas cualitativas para entender necesidades y próximos pasos." },
      ],
    },
    process: {
      eyebrow: "Implementación",
      title: "De la necesidad al programa en cuatro pasos.",
      body: "Diseñamos la solución antes de lanzar clases, para que la formación responda a la realidad de la compañía.",
      steps: [
        { title: "Diagnóstico", body: "Entendemos niveles, roles, necesidades y objetivos." },
        { title: "Diseño", body: "Definimos formatos, grupos, horarios, metas y servicios." },
        { title: "Lanzamiento", body: "Activamos clases, servicios o cohortes con coordinación operativa." },
        { title: "Seguimiento", body: "Entregamos reportes y ajustamos el programa según resultados." },
      ],
    },
    useCases: {
      eyebrow: "Casos de uso",
      title: "Comunicación para equipos reales.",
      body: "Adaptamos el contenido a los contextos donde el idioma realmente se usa.",
      useCases: ["Reuniones internacionales", "Presentaciones ejecutivas", "Atención al cliente", "Soporte técnico", "Ventas y cuentas", "Equipos remotos", "Relocación", "Expansión internacional"],
      industries: ["Energía", "Ingeniería", "Salud", "Logística", "Legal", "Finanzas", "Tecnología", "Educación"],
    },
    formats: {
      eyebrow: "Formatos",
      title: "Para líderes, equipos pequeños o programas de mayor escala.",
      body: "La solución puede adaptarse a ejecutivos, departamentos, áreas específicas o iniciativas transversales.",
      cards: [
        { title: "Ejecutivos", body: "Coaching o sesiones privadas para liderazgo y comunicación estratégica." },
        { title: "Equipos pequeños", body: "Cohortes por nivel, rol o necesidad comunicativa." },
        { title: "Departamentos", body: "Programas para áreas comerciales, técnicas, operativas o de servicio." },
        { title: "Compañía completa", body: "Implementaciones por fases con reportes y coordinación." },
      ],
      delivery: ["Online", "Presencial", "Híbrido"],
    },
    proposal: {
      eyebrow: "Propuesta personalizada",
      title: "El precio depende del alcance, volumen y continuidad.",
      body: "Cada compañía tiene una necesidad distinta. Por eso diseñamos una propuesta según servicios, número de participantes, duración, frecuencia, reportes y nivel de personalización.",
      cta: "Solicitar propuesta",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { title: "¿Langia Corporate solo ofrece clases?", body: "No. También ofrecemos traducción, localización e interpretación en vivo." },
        { title: "¿Los programas tienen precio fijo?", body: "No. Las propuestas se personalizan según volumen, continuidad, servicios y nivel de seguimiento." },
        { title: "¿Pueden evaluar el nivel de los empleados?", body: "Sí. Podemos realizar diagnósticos y organizar grupos según nivel, rol o necesidad." },
        { title: "¿La empresa recibe reportes?", body: "Sí. Podemos entregar reportes de asistencia, progreso, desempeño y observaciones docentes." },
        { title: "¿La capacitación puede alinearse a objetivos de la compañía?", body: "Sí. En Corporate, los objetivos de empresa pueden guiar el diseño del programa." },
        { title: "¿Ofrecen modalidad online, presencial o híbrida?", body: "Sí. La modalidad se define según alcance, ubicación y disponibilidad." },
      ],
    },
    finalCta: {
      title: "Construyamos una solución lingüística para tu equipo.",
      body: "Cuéntanos qué necesita tu compañía y diseñaremos una propuesta alineada al alcance, objetivos y continuidad del proyecto.",
      primaryCta: "Solicitar propuesta",
      secondaryCta: "Contactar a Langia",
    },
  },
  pt: {
    hero: {
      eyebrow: "Langia Corporate",
      title: "Idiomas para equipes que cruzam fronteiras.",
      body: "Soluções linguísticas para empresas que precisam se comunicar melhor com clientes, mercados e equipes internacionais.",
      primaryCta: "Solicitar proposta",
      secondaryCta: "Ver serviços",
      quickFacts: ["Treinamento linguístico", "Tradução e localização", "Interpretação ao vivo", "Relatórios e acompanhamento"],
    },
    overview: {
      eyebrow: "Soluções corporativas",
      title: "Mais que aulas: um sistema linguístico para sua operação.",
      body: "Langia Corporate adapta treinamento, tradução, localização e interpretação às necessidades reais de cada empresa.",
      cards: [
        { title: "Language training", body: "Programas para colaboradores, líderes e equipes com objetivos profissionais." },
        { title: "Translation", body: "Tradução de documentos, materiais e comunicação institucional." },
        { title: "Localization", body: "Adaptação cultural e linguística para mercados, clientes e públicos." },
        { title: "Live interpretation", body: "Apoio em reuniões, eventos, processos comerciais ou comunicação crítica." },
      ],
    },
    who: {
      eyebrow: "Para quem é",
      title: "Para empresas que precisam de comunicação mais clara.",
      body: "Langia Corporate foi pensado para equipes que trabalham com clientes, mercados, fornecedores ou colegas em outros idiomas.",
      cards: [
        { title: "RH e L&D", body: "Desenhe programas de formação mensuráveis para colaboradores e equipes." },
        { title: "Operações e gestão", body: "Alinhe o treinamento às necessidades reais da operação." },
        { title: "Equipes internacionais", body: "Melhore a comunicação entre áreas, países e culturas." },
        { title: "Líderes e executivos", body: "Prepare apresentações, reuniões e comunicação estratégica." },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Quatro formas de apoiar a comunicação da sua empresa.",
      body: "Você pode contratar um serviço individual ou combinar vários dentro de uma solução corporativa.",
      cards: [
        { title: "Treinamento linguístico", body: "Programas online, presenciais ou híbridos para colaboradores, líderes e equipes." },
        { title: "Tradução", body: "Documentos, apresentações, materiais de formação, comunicações e conteúdo institucional." },
        { title: "Localização", body: "Adaptação da mensagem para mercados, culturas, tom de marca e públicos específicos." },
        { title: "Interpretação ao vivo", body: "Apoio linguístico para reuniões, eventos, treinamentos, negociações ou processos sensíveis." },
      ],
    },
    training: {
      eyebrow: "Treinamento",
      title: "Os programas da Langia, adaptados à sua empresa.",
      body: "Langia Corporate pode adaptar Langia Online, Talkin' Club, Test Prep e Kids n Teens a uma estrutura empresarial com relatórios, acompanhamento e objetivos definidos pela empresa.",
      cards: [
        { title: "Volume e continuidade", body: "Preços e estrutura se ajustam conforme número de participantes, duração e continuidade." },
        { title: "Objetivos da empresa", body: "Quando a empresa define uma necessidade específica, essa meta orienta o desenho do programa." },
        { title: "Grupos e cohorts", body: "Organizamos colaboradores por nível, função, disponibilidade ou necessidade comunicativa." },
        { title: "Acompanhamento operacional", body: "A empresa recebe visibilidade sobre presença, progresso e desempenho." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "Um método para conectar objetivos de negócio com progresso linguístico.",
      body: "Langia TailorED ajuda a desenhar programas corporativos conectando funções, níveis, metas, presença, feedback do professor e desempenho para que a formação tenha mais direção.",
      bullets: ["Diagnóstico por nível e função", "Objetivos por equipe", "Feedback do professor", "Relatórios de avanço", "Acompanhamento de desempenho"],
    },
    tracking: {
      eyebrow: "Acompanhamento",
      title: "Visibilidade para quem lidera o programa.",
      body: "Os responsáveis podem receber relatórios de presença, progresso, participação, desempenho e observações docentes para tomar decisões com mais clareza.",
      cards: [
        { title: "Presença", body: "Acompanhamento de participação e continuidade." },
        { title: "Progresso", body: "Visibilidade sobre avanço por nível, habilidade ou meta." },
        { title: "Desempenho", body: "Indicadores baseados em aulas, prática e feedback." },
        { title: "Observações docentes", body: "Notas qualitativas para entender necessidades e próximos passos." },
      ],
    },
    process: {
      eyebrow: "Implementação",
      title: "Da necessidade ao programa em quatro passos.",
      body: "Desenhamos a solução antes de iniciar as aulas, para que a formação responda à realidade da empresa.",
      steps: [
        { title: "Diagnóstico", body: "Entendemos níveis, funções, necessidades e objetivos." },
        { title: "Desenho", body: "Definimos formatos, grupos, horários, metas e serviços." },
        { title: "Lançamento", body: "Ativamos aulas, serviços ou cohorts com coordenação operacional." },
        { title: "Acompanhamento", body: "Entregamos relatórios e ajustamos o programa conforme resultados." },
      ],
    },
    useCases: {
      eyebrow: "Casos de uso",
      title: "Comunicação para equipes reais.",
      body: "Adaptamos o conteúdo aos contextos onde o idioma realmente é usado.",
      useCases: ["Reuniões internacionais", "Apresentações executivas", "Atendimento ao cliente", "Suporte técnico", "Vendas e contas", "Equipes remotas", "Mudança de país", "Expansão internacional"],
      industries: ["Energia", "Engenharia", "Saúde", "Logística", "Legal", "Finanças", "Tecnologia", "Educação"],
    },
    formats: {
      eyebrow: "Formatos",
      title: "Para líderes, equipes pequenas ou programas de maior escala.",
      body: "A solução pode se adaptar a executivos, departamentos, áreas específicas ou iniciativas transversais.",
      cards: [
        { title: "Executivos", body: "Coaching ou sessões privadas para liderança e comunicação estratégica." },
        { title: "Equipes pequenas", body: "Cohorts por nível, função ou necessidade comunicativa." },
        { title: "Departamentos", body: "Programas para áreas comerciais, técnicas, operacionais ou de serviço." },
        { title: "Empresa completa", body: "Implementações por fases com relatórios e coordenação." },
      ],
      delivery: ["Online", "Presencial", "Híbrido"],
    },
    proposal: {
      eyebrow: "Proposta personalizada",
      title: "O preço depende do escopo, volume e continuidade.",
      body: "Cada empresa tem uma necessidade diferente. Por isso desenhamos uma proposta conforme serviços, número de participantes, duração, frequência, relatórios e nível de personalização.",
      cta: "Solicitar proposta",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes",
      items: [
        { title: "Langia Corporate oferece apenas aulas?", body: "Não. Também oferecemos tradução, localização e interpretação ao vivo." },
        { title: "Os programas têm preço fixo?", body: "Não. As propostas são personalizadas conforme volume, continuidade, serviços e nível de acompanhamento." },
        { title: "Vocês podem avaliar o nível dos colaboradores?", body: "Sim. Podemos realizar diagnósticos e organizar grupos conforme nível, função ou necessidade." },
        { title: "A empresa recebe relatórios?", body: "Sim. Podemos entregar relatórios de presença, progresso, desempenho e observações docentes." },
        { title: "O treinamento pode se alinhar aos objetivos da empresa?", body: "Sim. Em Corporate, os objetivos da empresa podem orientar o desenho do programa." },
        { title: "Vocês oferecem modalidade online, presencial ou híbrida?", body: "Sim. A modalidade é definida conforme escopo, localização e disponibilidade." },
      ],
    },
    finalCta: {
      title: "Vamos construir uma solução linguística para sua equipe.",
      body: "Conte o que sua empresa precisa e desenharemos uma proposta alinhada ao escopo, objetivos e continuidade do projeto.",
      primaryCta: "Solicitar proposta",
      secondaryCta: "Falar com a Langia",
    },
  },
  en: {
    hero: {
      eyebrow: "Langia Corporate",
      title: "Languages for teams crossing borders.",
      body: "Language solutions for companies that need stronger communication with clients, markets, and international teams.",
      primaryCta: "Request a proposal",
      secondaryCta: "View services",
      quickFacts: ["Language training", "Translation and localization", "Live interpretation", "Reports and tracking"],
    },
    overview: {
      eyebrow: "Corporate solutions",
      title: "More than classes: a language system for your operation.",
      body: "Langia Corporate adapts training, translation, localization, and interpretation to each company's real needs.",
      cards: [
        { title: "Language training", body: "Programs for employees, leaders, and teams with professional goals." },
        { title: "Translation", body: "Translation of documents, materials, and institutional communication." },
        { title: "Localization", body: "Cultural and linguistic adaptation for markets, clients, and audiences." },
        { title: "Live interpretation", body: "Support for meetings, events, business processes, or critical communication." },
      ],
    },
    who: {
      eyebrow: "Who it is for",
      title: "For companies that need clearer communication.",
      body: "Langia Corporate is built for teams working with clients, markets, suppliers, or colleagues in other languages.",
      cards: [
        { title: "HR and L&D", body: "Design measurable training programs for employees and teams." },
        { title: "Operations and management", body: "Align training with real operational needs." },
        { title: "International teams", body: "Improve communication across departments, countries, and cultures." },
        { title: "Leaders and executives", body: "Prepare presentations, meetings, and strategic communication." },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Four ways to support your company's communication.",
      body: "You can request one service or combine several inside a corporate solution.",
      cards: [
        { title: "Language training", body: "Online, on-site, or hybrid programs for employees, leaders, and teams." },
        { title: "Translation", body: "Documents, presentations, training materials, communications, and institutional content." },
        { title: "Localization", body: "Message adaptation for markets, cultures, brand tone, and specific audiences." },
        { title: "Live interpretation", body: "Language support for meetings, events, trainings, negotiations, or sensitive processes." },
      ],
    },
    training: {
      eyebrow: "Training",
      title: "Langia programs, adapted to your company.",
      body: "Langia Corporate can adapt Langia Online, Talkin' Club, Test Prep, and Kids n Teens into a business structure with reports, tracking, and company-defined goals.",
      cards: [
        { title: "Volume and continuity", body: "Pricing and structure adapt to participant count, duration, and continuity." },
        { title: "Company goals", body: "When the company defines a specific need, that goal guides the program design." },
        { title: "Groups and cohorts", body: "We organize employees by level, role, availability, or communication need." },
        { title: "Operational tracking", body: "The company receives visibility into attendance, progress, and performance." },
      ],
    },
    tailored: {
      eyebrow: "Langia TailorED",
      title: "A method to connect business goals with language progress.",
      body: "Langia TailorED helps design corporate programs by connecting roles, levels, goals, attendance, teacher feedback, and performance so training has more direction.",
      bullets: ["Diagnostics by level and role", "Team-based objectives", "Teacher feedback", "Progress reports", "Performance tracking"],
    },
    tracking: {
      eyebrow: "Tracking",
      title: "Visibility for the people leading the program.",
      body: "Program leaders can receive attendance, progress, participation, performance, and teacher observation reports to make clearer decisions.",
      cards: [
        { title: "Attendance", body: "Tracking participation and continuity." },
        { title: "Progress", body: "Visibility into advancement by level, skill, or goal." },
        { title: "Performance", body: "Indicators based on classes, practice, and feedback." },
        { title: "Teacher observations", body: "Qualitative notes to understand needs and next steps." },
      ],
    },
    process: {
      eyebrow: "Implementation",
      title: "From need to program in four steps.",
      body: "We design the solution before launching classes, so training responds to the company's reality.",
      steps: [
        { title: "Diagnostic", body: "We understand levels, roles, needs, and goals." },
        { title: "Design", body: "We define formats, groups, schedules, goals, and services." },
        { title: "Launch", body: "We activate classes, services, or cohorts with operational coordination." },
        { title: "Follow-up", body: "We deliver reports and adjust the program based on results." },
      ],
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Communication for real teams.",
      body: "We adapt content to the contexts where language is actually used.",
      useCases: ["International meetings", "Executive presentations", "Customer support", "Technical support", "Sales and accounts", "Remote teams", "Relocation", "International expansion"],
      industries: ["Energy", "Engineering", "Healthcare", "Logistics", "Legal", "Finance", "Technology", "Education"],
    },
    formats: {
      eyebrow: "Formats",
      title: "For leaders, small teams, or larger-scale programs.",
      body: "The solution can adapt to executives, departments, specific areas, or cross-company initiatives.",
      cards: [
        { title: "Executives", body: "Coaching or private sessions for leadership and strategic communication." },
        { title: "Small teams", body: "Cohorts by level, role, or communication need." },
        { title: "Departments", body: "Programs for commercial, technical, operational, or service areas." },
        { title: "Full company", body: "Phased implementations with reports and coordination." },
      ],
      delivery: ["Online", "On-site", "Hybrid"],
    },
    proposal: {
      eyebrow: "Custom proposal",
      title: "Pricing depends on scope, volume, and continuity.",
      body: "Every company has a different need. That is why we design a proposal based on services, participant count, duration, frequency, reports, and level of customization.",
      cta: "Request a proposal",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { title: "Does Langia Corporate only offer classes?", body: "No. We also offer translation, localization, and live interpretation." },
        { title: "Do corporate programs have fixed pricing?", body: "No. Proposals are customized based on volume, continuity, services, and reporting level." },
        { title: "Can you evaluate employee levels?", body: "Yes. We can run diagnostics and organize groups by level, role, or need." },
        { title: "Does the company receive reports?", body: "Yes. We can provide attendance, progress, performance, and teacher observation reports." },
        { title: "Can training align with company objectives?", body: "Yes. In Corporate, company objectives can guide the program design." },
        { title: "Do you offer online, on-site, or hybrid delivery?", body: "Yes. Delivery format is defined according to scope, location, and availability." },
      ],
    },
    finalCta: {
      title: "Let's build a language solution for your team.",
      body: "Tell us what your company needs and we will design a proposal aligned with the project's scope, goals, and continuity.",
      primaryCta: "Request a proposal",
      secondaryCta: "Contact Langia",
    },
  },
} as const satisfies Record<PageLanguage, CorporatePageContent>;

const contactPageContent = {
  es: {
    hero: {
      eyebrow: "Contacto",
      title: "Tu próximo capítulo empieza con una conversación.",
      body: "Cuéntanos qué quieres lograr y te orientaremos hacia el programa o servicio que mejor se ajuste a tu momento.",
      quickPoints: ["Programas individuales", "Kids n Teens", "Test Prep", "Corporate"],
    },
    form: {
      title: "Empieza la conversación",
      body: "Comparte algunos detalles y abriremos WhatsApp con tu mensaje listo para enviar.",
      fields: {
        name: "Nombre",
        email: "Email",
        whatsapp: "WhatsApp",
        country: "País",
        preferredLanguage: "Idioma de interés",
        company: "Empresa",
        interest: "Interés / Programa",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        whatsapp: "Código de país + número",
        country: "País donde estás",
        company: "Opcional",
        message: "Cuéntanos brevemente qué quieres lograr.",
      },
      preferredLanguageOptions: ["Inglés", "Francés", "Español", "Portugués", "No estoy seguro/a"],
      interestOptions: ["Langia Online", "Langia Talkin' Club", "Langia Test Prep", "Langia 4 Kids n Teens", "Langia Corporate", "Traducción", "Localización", "Interpretación en vivo", "No estoy seguro/a", "Otro"],
      submit: "Enviar por WhatsApp",
      requiredError: "Completa este campo para continuar.",
      configWarning: "WhatsApp aún no está configurado. Agrega NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER para activar el envío.",
      companyFallback: "No aplica",
    },
    contactCards: [
      { title: "Para estudiantes", body: "Cuéntanos tu meta y te ayudaremos a elegir un programa." },
      { title: "Para padres", body: "Pregunta por Kids n Teens y el formato más adecuado para tu hijo." },
      { title: "Para empresas", body: "Solicita una propuesta corporativa para equipos, servicios lingüísticos o entrenamiento." },
      { title: "Respuesta directa", body: "El formulario abre WhatsApp para continuar la conversación de forma rápida." },
    ],
    next: {
      eyebrow: "Después de escribirnos",
      title: "Te orientamos hacia el siguiente paso.",
      steps: ["Revisamos tu mensaje", "Entendemos tu objetivo", "Te recomendamos una ruta", "Definimos el siguiente paso"],
    },
    presence: {
      eyebrow: "Presencia",
      title: "Una compañía online con alcance internacional.",
      body: "Langia atiende estudiantes, familias y compañías en distintos países, con una operación pensada para comunicación global.",
      addressLabel: "Dirección",
      address: "1309 Coffeen Avenue, Sheridan, Wyoming",
      socialLabel: "Redes sociales",
    },
    finalCta: {
      title: "Hablemos de tu próximo capítulo.",
      body: "Ya sea para ti, tu hijo o tu equipo, Langia puede ayudarte a encontrar una ruta más clara.",
      cta: "Enviar mensaje",
    },
    whatsappMessage: {
      intro: "Hola Langia, quiero recibir información.",
      name: "Nombre",
      email: "Email",
      whatsapp: "WhatsApp",
      country: "País",
      preferredLanguage: "Idioma de interés",
      company: "Empresa",
      interest: "Interés",
      message: "Mensaje",
    },
  },
  pt: {
    hero: {
      eyebrow: "Contato",
      title: "Seu próximo capítulo começa com uma conversa.",
      body: "Conte o que você quer alcançar e vamos orientar você para o programa ou serviço que melhor combina com seu momento.",
      quickPoints: ["Programas individuais", "Kids n Teens", "Test Prep", "Corporate"],
    },
    form: {
      title: "Comece a conversa",
      body: "Compartilhe alguns detalhes e abriremos o WhatsApp com sua mensagem pronta para enviar.",
      fields: {
        name: "Nome",
        email: "Email",
        whatsapp: "WhatsApp",
        country: "País",
        preferredLanguage: "Idioma de interesse",
        company: "Empresa",
        interest: "Interesse / Programa",
        message: "Mensagem",
      },
      placeholders: {
        name: "Seu nome",
        email: "voce@email.com",
        whatsapp: "Código do país + número",
        country: "País onde você está",
        company: "Opcional",
        message: "Conte brevemente o que você quer alcançar.",
      },
      preferredLanguageOptions: ["Inglês", "Francês", "Espanhol", "Português", "Não tenho certeza"],
      interestOptions: ["Langia Online", "Langia Talkin' Club", "Langia Test Prep", "Langia 4 Kids n Teens", "Langia Corporate", "Tradução", "Localização", "Interpretação ao vivo", "Não tenho certeza", "Outro"],
      submit: "Enviar pelo WhatsApp",
      requiredError: "Preencha este campo para continuar.",
      configWarning: "O WhatsApp ainda não está configurado. Adicione NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER para ativar o envio.",
      companyFallback: "Não se aplica",
    },
    contactCards: [
      { title: "Para alunos", body: "Conte sua meta e ajudaremos você a escolher um programa." },
      { title: "Para pais", body: "Pergunte sobre Kids n Teens e o formato mais adequado para seu filho." },
      { title: "Para empresas", body: "Solicite uma proposta corporativa para equipes, serviços linguísticos ou treinamento." },
      { title: "Resposta direta", body: "O formulário abre o WhatsApp para continuar a conversa rapidamente." },
    ],
    next: {
      eyebrow: "Depois de falar conosco",
      title: "Orientamos você para o próximo passo.",
      steps: ["Revisamos sua mensagem", "Entendemos seu objetivo", "Recomendamos uma rota", "Definimos o próximo passo"],
    },
    presence: {
      eyebrow: "Presença",
      title: "Uma empresa online com alcance internacional.",
      body: "A Langia atende alunos, famílias e empresas em diferentes países, com uma operação pensada para comunicação global.",
      addressLabel: "Endereço",
      address: "1309 Coffeen Avenue, Sheridan, Wyoming",
      socialLabel: "Redes sociais",
    },
    finalCta: {
      title: "Vamos falar sobre seu próximo capítulo.",
      body: "Seja para você, seu filho ou sua equipe, a Langia pode ajudar a encontrar uma rota mais clara.",
      cta: "Enviar mensagem",
    },
    whatsappMessage: {
      intro: "Olá Langia, quero receber informações.",
      name: "Nome",
      email: "Email",
      whatsapp: "WhatsApp",
      country: "País",
      preferredLanguage: "Idioma de interesse",
      company: "Empresa",
      interest: "Interesse",
      message: "Mensagem",
    },
  },
  en: {
    hero: {
      eyebrow: "Contact",
      title: "Your next chapter starts with a conversation.",
      body: "Tell us what you want to achieve and we'll guide you toward the program or service that best fits your moment.",
      quickPoints: ["Individual programs", "Kids n Teens", "Test Prep", "Corporate"],
    },
    form: {
      title: "Start the conversation",
      body: "Share a few details and we'll open WhatsApp with your message ready to send.",
      fields: {
        name: "Name",
        email: "Email",
        whatsapp: "WhatsApp",
        country: "Country",
        preferredLanguage: "Preferred Language",
        company: "Company",
        interest: "Interest / Program",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        whatsapp: "Country code + number",
        country: "Where you are based",
        company: "Optional",
        message: "Tell us briefly what you want to achieve.",
      },
      preferredLanguageOptions: ["English", "French", "Spanish", "Portuguese", "Not sure yet"],
      interestOptions: ["Langia Online", "Langia Talkin' Club", "Langia Test Prep", "Langia 4 Kids n Teens", "Langia Corporate", "Translation", "Localization", "Live interpretation", "Not sure yet", "Other"],
      submit: "Send through WhatsApp",
      requiredError: "Complete this field to continue.",
      configWarning: "WhatsApp is not configured yet. Add NEXT_PUBLIC_LANGIA_WHATSAPP_NUMBER to activate sending.",
      companyFallback: "Not applicable",
    },
    contactCards: [
      { title: "For learners", body: "Tell us your goal and we'll help you choose a program." },
      { title: "For parents", body: "Ask about Kids n Teens and the best format for your child." },
      { title: "For companies", body: "Request a corporate proposal for teams, language services, or training." },
      { title: "Direct response", body: "The form opens WhatsApp so the conversation can continue quickly." },
    ],
    next: {
      eyebrow: "After you contact us",
      title: "We guide you toward the next step.",
      steps: ["We review your message", "We understand your goal", "We recommend a path", "We define the next step"],
    },
    presence: {
      eyebrow: "Presence",
      title: "An online company with international reach.",
      body: "Langia supports learners, families, and companies across countries, with an operation designed for global communication.",
      addressLabel: "Address",
      address: "1309 Coffeen Avenue, Sheridan, Wyoming",
      socialLabel: "Social links",
    },
    finalCta: {
      title: "Let's talk about your next chapter.",
      body: "Whether it's for you, your child, or your team, Langia can help you find a clearer path.",
      cta: "Send message",
    },
    whatsappMessage: {
      intro: "Hello Langia, I would like to receive information.",
      name: "Name",
      email: "Email",
      whatsapp: "WhatsApp",
      country: "Country",
      preferredLanguage: "Language of interest",
      company: "Company",
      interest: "Interest",
      message: "Message",
    },
  },
} as const satisfies Record<PageLanguage, ContactPageContent>;

export const pagesContent: Record<PageLanguage, Record<PageKey, MarketingPageContent>> = {
  es: {
    programs: {
      eyebrow: "Programas",
      title: "Elige una ruta de aprendizaje hecha para tu momento.",
      subtitle: "Explora las opciones de Langia para adultos, conversación, exámenes y niños o adolescentes.",
      overview: programsOverview.es,
      blocks: [
        { title: "Adultos", body: "Formación estructurada para avanzar con claridad y acompañamiento." },
        { title: "Conversación", body: "Práctica guiada para ganar fluidez, confianza y naturalidad." },
        { title: "Exámenes", body: "Preparación enfocada para certificaciones y metas académicas." },
        { title: "Kids n Teens", body: "Aprendizaje para niños y adolescentes con estructura y cuidado." },
      ],
      cta: cta.es,
      links: [
        { label: "Langia Online", href: "/programs/langia-online" },
        { label: "Talkin' Club", href: "/programs/talkin-club" },
        { label: "Test Prep", href: "/programs/test-prep" },
        { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
      ],
    },
    langiaOnline: {
      eyebrow: "Programas",
      title: "Langia Online",
      subtitle: "Formación estructurada en vivo para adultos que quieren avanzar con claridad.",
      blocks: programBlocks.es,
      cta: cta.es,
      langiaOnlinePage: langiaOnlinePageContent.es,
    },
    talkinClub: {
      eyebrow: "Programas",
      title: "Talkin' Club",
      subtitle: "Práctica conversacional para ganar fluidez, confianza y naturalidad.",
      blocks: programBlocks.es,
      cta: cta.es,
      talkinClubPage: talkinClubPageContent.es,
    },
    testPrep: {
      eyebrow: "Programas",
      title: "Test Prep",
      subtitle: "Preparación enfocada para exámenes, certificaciones y metas académicas.",
      blocks: programBlocks.es,
      cta: cta.es,
      testPrepPage: testPrepPageContent.es,
    },
    kidsTeens: {
      eyebrow: "Programas",
      title: "Langia 4 Kids n Teens",
      subtitle: "Aprendizaje de idiomas para niños y adolescentes con estructura y acompañamiento.",
      blocks: programBlocks.es,
      cta: cta.es,
      kidsTeensPage: kidsTeensPageContent.es,
    },
    corporate: {
      eyebrow: "Corporativo",
      title: "Idiomas para equipos que cruzan fronteras.",
      subtitle: "Programas en vivo para compañías que necesitan comunicarse mejor con clientes, mercados y equipos internacionales.",
      blocks: [
        { title: "Necesidades del equipo", body: "Un espacio para mapear situaciones, niveles y objetivos de comunicación." },
        { title: "Diseño del programa", body: "Aquí se presentará la estructura académica para cada organización." },
        { title: "Formato de entrega", body: "Esta sección alojará modalidades, seguimiento y coordinación operativa." },
      ],
      cta: cta.es,
      corporatePage: corporatePageContent.es,
    },
    about: {
      eyebrow: "Sobre Langia",
      title: "Una academia online para personas que van más lejos.",
      subtitle: "Langia combina clases en vivo, acompañamiento humano y tecnología útil para crear rutas de aprendizaje más claras.",
      blocks: [
        { title: "Lo que creemos", body: "El aprendizaje debe sentirse claro, humano y orientado a metas reales." },
        { title: "Guía humana", body: "Los docentes y el acompañamiento sostienen el progreso en cada etapa." },
        { title: "Método asistido por IA", body: "La tecnología ayuda a organizar objetivos, práctica y seguimiento." },
        { title: "Comunicación global", body: "Langia existe para abrir conversaciones entre personas, culturas y mercados." },
      ],
      cta: cta.es,
      aboutPage: aboutPageContent.es,
    },
    legal: {
      eyebrow: "Legal",
      title: "Información legal y políticas.",
      subtitle: "Un espacio para políticas, términos, privacidad y documentación institucional.",
      blocks: [
        { title: "Términos y condiciones", body: "Placeholder para los términos de uso y condiciones del servicio." },
        { title: "Política de privacidad", body: "Placeholder para información de privacidad y manejo de datos." },
        { title: "Políticas de servicio", body: "Placeholder para políticas académicas, operativas y comerciales." },
      ],
      cta: cta.es,
      legalPage: legalPageContent.es,
    },
    workWithUs: {
      eyebrow: "Trabaja con nosotros",
      title: "Construye el futuro del aprendizaje con Langia.",
      subtitle: "Un espacio para futuras oportunidades docentes, operativas y colaborativas.",
      blocks: [
        { title: "Oportunidades docentes", body: "Un lugar para futuras convocatorias de profesores y mentores." },
        { title: "Operaciones y crecimiento", body: "Un espacio para roles de coordinación, soporte y expansión." },
        { title: "Futuras aperturas", body: "Aquí se publicarán oportunidades cuando estén disponibles." },
      ],
      cta: cta.es,
      workWithUsPage: workWithUsPageContent.es,
    },
    contact: {
      eyebrow: "Contacto",
      title: "Tu próximo capítulo empieza con una conversación.",
      subtitle: "Cuéntanos qué quieres lograr y te orientaremos hacia el programa o servicio que mejor se ajuste a tu momento.",
      blocks: contactPageContent.es.contactCards,
      cta: {
        title: contactPageContent.es.finalCta.title,
        body: contactPageContent.es.finalCta.body,
        primaryLabel: contactPageContent.es.finalCta.cta,
        primaryHref: "/contact#contact-form",
      },
      contactPage: contactPageContent.es,
    },
    levelTest: {
      eyebrow: "Prueba de nivel",
      title: "Empieza entendiendo tu punto de partida.",
      subtitle: "Esta página alojará la experiencia de prueba de nivel y recomendación de programa.",
      blocks: [
        { title: "Diagnóstico inicial", body: "Aquí vivirá la evaluación de referencia para orientar el punto de partida." },
        { title: "Recomendación de programa", body: "La experiencia conectará resultados con una ruta sugerida." },
        { title: "Próximamente", body: "La experiencia de prueba de nivel estará disponible pronto." },
      ],
      cta: cta.es,
    },
    blog: {
      eyebrow: "Recursos",
      title: "Lecturas breves para decidir mejor.",
      subtitle: "Guías, ideas y recursos para aprender idiomas con más claridad.",
      blocks: [
        { title: "Guías de decisión", body: "Recursos para comparar programas, ritmos y próximos pasos." },
        { title: "Ideas de aprendizaje", body: "Lecturas para estudiar con más estructura y confianza." },
      ],
      cta: cta.es,
    },
  },
  pt: {
    programs: {
      eyebrow: "Programas",
      title: "Escolha uma rota de aprendizagem feita para o seu momento.",
      subtitle: "Explore as opções da Langia para adultos, conversação, exames e crianças ou adolescentes.",
      overview: programsOverview.pt,
      blocks: [
        { title: "Adultos", body: "Formação estruturada para avançar com clareza e acompanhamento." },
        { title: "Conversação", body: "Prática guiada para ganhar fluência, confiança e naturalidade." },
        { title: "Exames", body: "Preparação focada para certificações e objetivos acadêmicos." },
        { title: "Kids n Teens", body: "Aprendizagem para crianças e adolescentes com estrutura e cuidado." },
      ],
      cta: cta.pt,
      links: [
        { label: "Langia Online", href: "/programs/langia-online" },
        { label: "Talkin' Club", href: "/programs/talkin-club" },
        { label: "Test Prep", href: "/programs/test-prep" },
        { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
      ],
    },
    langiaOnline: { eyebrow: "Programas", title: "Langia Online", subtitle: "Formação estruturada ao vivo para adultos que querem avançar com clareza.", blocks: programBlocks.pt, cta: cta.pt, langiaOnlinePage: langiaOnlinePageContent.pt },
    talkinClub: { eyebrow: "Programas", title: "Talkin' Club", subtitle: "Prática de conversação para ganhar fluência, confiança e naturalidade.", blocks: programBlocks.pt, cta: cta.pt, talkinClubPage: talkinClubPageContent.pt },
    testPrep: { eyebrow: "Programas", title: "Test Prep", subtitle: "Preparação focada para exames, certificações e objetivos acadêmicos.", blocks: programBlocks.pt, cta: cta.pt, testPrepPage: testPrepPageContent.pt },
    kidsTeens: { eyebrow: "Programas", title: "Langia 4 Kids n Teens", subtitle: "Aprendizagem de idiomas para crianças e adolescentes com estrutura e acompanhamento.", blocks: programBlocks.pt, cta: cta.pt, kidsTeensPage: kidsTeensPageContent.pt },
    corporate: { eyebrow: "Corporativo", title: "Idiomas para equipes que cruzam fronteiras.", subtitle: "Programas ao vivo para empresas que precisam se comunicar melhor com clientes, mercados e equipes internacionais.", blocks: [{ title: "Necessidades da equipe", body: "Um espaço para mapear situações, níveis e objetivos de comunicação." }, { title: "Desenho do programa", body: "Aqui será apresentada a estrutura acadêmica para cada organização." }, { title: "Formato de entrega", body: "Esta seção receberá modalidades, acompanhamento e coordenação operacional." }], cta: cta.pt, corporatePage: corporatePageContent.pt },
    about: { eyebrow: "Sobre a Langia", title: "Uma academia online para pessoas que vão mais longe.", subtitle: "A Langia combina aulas ao vivo, acompanhamento humano e tecnologia útil para criar rotas de aprendizagem mais claras.", blocks: [{ title: "O que acreditamos", body: "A aprendizagem deve ser clara, humana e orientada a objetivos reais." }, { title: "Orientação humana", body: "Professores e acompanhamento sustentam o progresso em cada etapa." }, { title: "Método assistido por IA", body: "A tecnologia ajuda a organizar objetivos, prática e acompanhamento." }, { title: "Comunicação global", body: "A Langia existe para abrir conversas entre pessoas, culturas e mercados." }], cta: cta.pt, aboutPage: aboutPageContent.pt },
    legal: { eyebrow: "Legal", title: "Informações legais e políticas.", subtitle: "Um espaço para políticas, termos, privacidade e documentação institucional.", blocks: [{ title: "Termos e condições", body: "Placeholder para termos de uso e condições do serviço." }, { title: "Política de privacidade", body: "Placeholder para informações de privacidade e uso de dados." }, { title: "Políticas de serviço", body: "Placeholder para políticas acadêmicas, operacionais e comerciais." }], cta: cta.pt, legalPage: legalPageContent.pt },
    workWithUs: { eyebrow: "Trabalhe conosco", title: "Construa o futuro da aprendizagem com a Langia.", subtitle: "Um espaço para futuras oportunidades docentes, operacionais e colaborativas.", blocks: [{ title: "Oportunidades docentes", body: "Um lugar para futuras chamadas de professores e mentores." }, { title: "Operações e crescimento", body: "Um espaço para funções de coordenação, suporte e expansão." }, { title: "Futuras vagas", body: "Aqui serão publicadas oportunidades quando estiverem disponíveis." }], cta: cta.pt, workWithUsPage: workWithUsPageContent.pt },
    contact: { eyebrow: "Contato", title: "Seu próximo capítulo começa com uma conversa.", subtitle: "Conte o que você quer alcançar e vamos orientar você para o programa ou serviço que melhor combina com seu momento.", blocks: contactPageContent.pt.contactCards, cta: { title: contactPageContent.pt.finalCta.title, body: contactPageContent.pt.finalCta.body, primaryLabel: contactPageContent.pt.finalCta.cta, primaryHref: "/contact#contact-form" }, contactPage: contactPageContent.pt },
    levelTest: { eyebrow: "Teste de nível", title: "Comece entendendo seu ponto de partida.", subtitle: "Esta página receberá a experiência de teste de nível e recomendação de programa.", blocks: [{ title: "Diagnóstico inicial", body: "Aqui ficará a avaliação de referência para orientar o ponto de partida." }, { title: "Recomendação de programa", body: "A experiência conectará resultados com uma rota sugerida." }, { title: "Em breve", body: "A experiência de teste de nível estará disponível em breve." }], cta: cta.pt },
    blog: { eyebrow: "Recursos", title: "Leituras breves para decidir melhor.", subtitle: "Guias, ideias e recursos para aprender idiomas com mais clareza.", blocks: [{ title: "Guias de decisão", body: "Recursos para comparar programas, ritmos e próximos passos." }, { title: "Ideias de aprendizagem", body: "Leituras para estudar com mais estrutura e confiança." }], cta: cta.pt },
  },
  en: {
    programs: {
      eyebrow: "Programs",
      title: "Choose a learning path built for your moment.",
      subtitle: "Explore Langia's options for adults, conversation, exams, and kids or teens.",
      overview: programsOverview.en,
      blocks: [
        { title: "Adults", body: "Structured training for clearer progress and guidance." },
        { title: "Conversation", body: "Guided practice for fluency, confidence, and natural speaking." },
        { title: "Exams", body: "Focused preparation for certifications and academic goals." },
        { title: "Kids n Teens", body: "Learning for children and teens with structure and care." },
      ],
      cta: cta.en,
      links: [
        { label: "Langia Online", href: "/programs/langia-online" },
        { label: "Talkin' Club", href: "/programs/talkin-club" },
        { label: "Test Prep", href: "/programs/test-prep" },
        { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
      ],
    },
    langiaOnline: { eyebrow: "Programs", title: "Langia Online", subtitle: "Structured live training for adults who want clear progress.", blocks: programBlocks.en, cta: cta.en, langiaOnlinePage: langiaOnlinePageContent.en },
    talkinClub: { eyebrow: "Programs", title: "Talkin' Club", subtitle: "Conversation practice for fluency, confidence, and natural speaking.", blocks: programBlocks.en, cta: cta.en, talkinClubPage: talkinClubPageContent.en },
    testPrep: { eyebrow: "Programs", title: "Test Prep", subtitle: "Focused preparation for exams, certifications, and academic goals.", blocks: programBlocks.en, cta: cta.en, testPrepPage: testPrepPageContent.en },
    kidsTeens: { eyebrow: "Programs", title: "Langia 4 Kids n Teens", subtitle: "Language learning for children and teens with structure and support.", blocks: programBlocks.en, cta: cta.en, kidsTeensPage: kidsTeensPageContent.en },
    corporate: { eyebrow: "Corporate", title: "Languages for teams crossing borders.", subtitle: "Live programs for companies that need to communicate better with clients, markets, and international teams.", blocks: [{ title: "Team needs", body: "A space to map situations, levels, and communication goals." }, { title: "Program design", body: "This will present the academic structure for each organization." }, { title: "Delivery format", body: "This section will host formats, follow-up, and operating details." }], cta: cta.en, corporatePage: corporatePageContent.en },
    about: { eyebrow: "About Langia", title: "An online academy for people going places.", subtitle: "Langia combines live classes, human guidance, and useful technology to create clearer learning paths.", blocks: [{ title: "What Langia believes", body: "Learning should feel clear, human, and connected to real goals." }, { title: "Human guidance", body: "Teachers and support keep progress grounded at every stage." }, { title: "AI-assisted method", body: "Technology helps organize goals, practice, and follow-up." }, { title: "Global communication", body: "Langia exists to open conversations across people, cultures, and markets." }], cta: cta.en, aboutPage: aboutPageContent.en },
    legal: { eyebrow: "Legal", title: "Legal information and policies.", subtitle: "A place for policies, terms, privacy, and institutional documentation.", blocks: [{ title: "Terms and conditions", body: "Placeholder for terms of use and service conditions." }, { title: "Privacy policy", body: "Placeholder for privacy information and data handling." }, { title: "Service policies", body: "Placeholder for academic, operational, and commercial policies." }], cta: cta.en, legalPage: legalPageContent.en },
    workWithUs: { eyebrow: "Work with us", title: "Build the future of learning with Langia.", subtitle: "A place for future teaching, operations, and collaboration opportunities.", blocks: [{ title: "Teaching opportunities", body: "A place for future teacher and mentor openings." }, { title: "Operations and growth", body: "A space for coordination, support, and growth roles." }, { title: "Future openings", body: "Opportunities will be published here when available." }], cta: cta.en, workWithUsPage: workWithUsPageContent.en },
    contact: { eyebrow: "Contact", title: "Your next chapter starts with a conversation.", subtitle: "Tell us what you want to achieve and we'll guide you toward the program or service that best fits your moment.", blocks: contactPageContent.en.contactCards, cta: { title: contactPageContent.en.finalCta.title, body: contactPageContent.en.finalCta.body, primaryLabel: contactPageContent.en.finalCta.cta, primaryHref: "/contact#contact-form" }, contactPage: contactPageContent.en },
    levelTest: { eyebrow: "Level test", title: "Start by understanding your baseline.", subtitle: "This page will host the level test and program recommendation experience.", blocks: [{ title: "Initial diagnosis", body: "The reference assessment will live here to orient the starting point." }, { title: "Program recommendation", body: "The experience will connect results with a suggested route." }, { title: "Coming soon", body: "The level test experience is coming soon." }], cta: cta.en },
    blog: { eyebrow: "Resources", title: "Short reads to make better decisions.", subtitle: "Guides, ideas, and resources for clearer language learning.", blocks: [{ title: "Decision guides", body: "Resources for comparing programs, rhythms, and next steps." }, { title: "Learning ideas", body: "Reads for studying with more structure and confidence." }], cta: cta.en },
  },
};

export const defaultPageLanguage: PageLanguage = "es";
