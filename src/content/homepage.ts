export type HomepageIconName =
  | "arrow"
  | "briefcase"
  | "check"
  | "chevron"
  | "close"
  | "globe"
  | "menu"
  | "message"
  | "spark"
  | "target"
  | "users";

type HomepageCard = {
  title: string;
  body: string;
  href?: string;
  icon?: HomepageIconName;
  image?: string;
  imageAlt?: string;
  linkLabel?: string;
  step?: string;
};

type HomepageTestimonial = {
  quote: string;
  name: string;
  role?: string;
  location?: string;
  image?: string;
};

export type HomepageCopy = {
  nav: {
    programs: string;
    programsMenu: Array<{ label: string; href: string }>;
    about: string;
    aboutMenu: Array<{ label: string; href: string }>;
    contact: string;
    login: string;
    cta: string;
    mobileMenuLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    rotating: string[];
    line2: string;
    line3: string;
    body: string;
    primary: string;
    secondary: string;
    bullets: string[];
  };
  support: {
    eyebrow: string;
    title: string;
    body: string;
    logos: Array<{
      name: string;
      src: string | null;
    }>;
  };
  signature: {
    eyebrow: string;
    titlePrefix: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    benefits: HomepageCard[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    ctaHref: string;
    cards: HomepageCard[];
  };
  how: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    steps: HomepageCard[];
    stepLinkLabel: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomepageCard[];
  };
  conversion: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
    details: string[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    items: HomepageTestimonial[];
  };
  resources: {
    eyebrow: string;
    title: string;
    body: string;
    articles: HomepageCard[];
    newsletterTitle: string;
    newsletterBody: string;
    newsletterImage: string;
    newsletterImageAlt: string;
    placeholder: string;
  };
  footer: {
    tagline: string;
    programs: string;
    company: string;
    resources: string;
    newsletter: string;
    newsletterPlaceholder: string;
    structuralLabel: string;
    columns: Array<{
      title: string;
      links: string[];
    }>;
  };
  footerLanguageLabel: string;
  logo: {
    homeLabel: string;
    mark: string;
    name: string;
  };
};

const homeCompanyLogos = [
  { name: "Bancoldex", src: "/images/Home/Home-Companies/Bancoldex.png" },
  { name: "Cummins", src: "/images/Home/Home-Companies/Cummins.png" },
  { name: "FMC", src: "/images/Home/Home-Companies/FMC.png" },
  { name: "Hospital Angeles", src: "/images/Home/Home-Companies/HospitalAngeles.png" },
  { name: "Lululemon", src: "/images/Home/Home-Companies/Lululemon.png" },
  { name: "Microsoft", src: "/images/Home/Home-Companies/Microsoft.png" },
  { name: "Pepsico", src: "/images/Home/Home-Companies/Pepsico.png" },
  { name: "Turnitin", src: "/images/Home/Home-Companies/Turnitin.png" },
];

export const homepageContent = {
  es: {
    nav: {
      programs: "Programas",
      programsMenu: [
        { label: "Langia Online", href: "/programs/langia-online" },
        { label: "Talkin' Club", href: "/programs/talkin-club" },
        { label: "Test Prep", href: "/programs/test-prep" },
        { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
      ],
      about: "Nosotros",
      aboutMenu: [
        { label: "Sobre Langia", href: "/about" },
        { label: "Corporativo", href: "/corporate" },
        { label: "Legal", href: "/legal" },
        { label: "Trabaja con nosotros", href: "/work-with-us" },
      ],
      contact: "Contacto",
      login: "Ingresar",
      cta: "Empezar",
      mobileMenuLabel: "Abrir menú",
    },
    hero: {
      badge: "APRENDIZAJE ONLINE PREMIUM",
      title: "Inglés para personas que van más lejos.",
      rotating: ["Inglés", "Español", "Portugués", "Francés"],
      line2: "para personas",
      line3: "que van más lejos.",
      body: "Clases en vivo, acompañamiento experto y una ruta clara hacia tu próxima oportunidad.",
      primary: "Empezar ahora",
      secondary: "Ver programas",
      bullets: ["Clases en vivo", "Progreso guiado", "Formato online flexible"],
    },
    support: {
      eyebrow: "PRESENCIA GLOBAL",
      title: "Donde nuestros estudiantes trabajan, lideran y crecen.",
      body: "Los logotipos representan lugares donde estudiantes o egresados de Langia han desarrollado su vida profesional. No implican patrocinio, alianza o relación comercial.",
      logos: homeCompanyLogos,
    },
    signature: {
      eyebrow: "Nuestro método",
      titlePrefix: "Langia TailorED:",
      title: "Más que clases: una ruta hecha para avanzar contigo.",
      body: "Langia TailorED combina diagnóstico, clases en vivo, objetivos personales y seguimiento inteligente para que cada etapa tenga dirección.",
      image: "/images/Home/Home2.png",
      imageAlt: "Langia TailorED personalized learning system",
      benefits: [
        { title: "Ruta por nivel", body: "Un camino claro desde tu punto de partida hasta tu próximo objetivo.", icon: "target" },
        { title: "Guía humana", body: "Docentes expertos mantienen el aprendizaje cercano, práctico y enfocado.", icon: "users" },
        { title: "Seguimiento inteligente", body: "La tecnología ayuda a conectar tus metas, ritmo y progreso en una experiencia más personal.", icon: "spark" },
      ],
    },
    solutions: {
      eyebrow: "Programas",
      title: "Elige el camino que va contigo.",
      body: "Cuatro formas de avanzar según tu momento: formación completa, conversación, exámenes o aprendizaje para niños y teens.",
      cta: "Comparar programas",
      ctaHref: "/programs",
      cards: [
        { title: "Langia Online", body: "Formación estructurada en vivo para adultos que quieren avanzar con claridad.", href: "/programs/langia-online", icon: "globe" },
        { title: "Talkin' Club", body: "Práctica conversacional para ganar fluidez, confianza y naturalidad.", href: "/programs/talkin-club", icon: "message" },
        { title: "Test Prep", body: "Preparación enfocada para exámenes, certificaciones y metas académicas.", href: "/programs/test-prep", icon: "target" },
        { title: "Langia 4 Kids n Teens", body: "Aprendizaje de idiomas para niños y adolescentes con estructura y acompañamiento.", href: "/programs/langia-4-kids-n-teens", icon: "users" },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Una ruta simple desde el interés hasta la práctica guiada.",
      body: "El proceso ayuda a definir tu punto de partida, elegir un programa y empezar con un ritmo sostenible.",
      cta: "Empezar ahora",
      steps: [
        {
          step: "Paso 1",
          title: "Descubre tu punto de partida",
          body: "Empieza con una referencia clara de tu nivel, tus metas y tus necesidades.",
          href: "/test-your-english-level",
          image: "/images/Home/Home3.png",
          imageAlt: "Discover your starting point",
          linkLabel: "Conocer más",
        },
        {
          step: "Paso 2",
          title: "Elige tu camino",
          body: "Conecta tus objetivos con el programa y el ritmo que mejor se ajustan a ti.",
          href: "/programs",
          image: "/images/Home/Home4.png",
          imageAlt: "Choose your language learning path",
          linkLabel: "Conocer más",
        },
        {
          step: "Paso 3",
          title: "Empieza con apoyo",
          body: "Avanza con clases en vivo, estructura y seguimiento cercano.",
          href: "/contact",
          image: "/images/Home/Home5.png",
          imageAlt: "Begin guided language practice",
          linkLabel: "Conocer más",
        },
      ],
      stepLinkLabel: "Conocer más",
    },
    capabilities: {
      eyebrow: "Capacidades",
      title: "Una experiencia premium, organizada con claridad.",
      body: "Herramientas y acompañamiento para mantener el aprendizaje enfocado.",
      cards: [
        { title: "Soporte humano", body: "Orientación docente y retroalimentación en cada etapa.", icon: "users", image: "/images/Home/Home6.png", imageAlt: "Human support for language learning" },
        { title: "Seguimiento visual", body: "Un espacio central para ver progreso, objetivos y planificación.", icon: "target", image: "/images/Home/Home7.png", imageAlt: "Visual progress dashboard for language learning" },
        { title: "Flexibilidad online", body: "Un formato estructurado para distintas agendas.", icon: "globe", image: "/images/Home/Home8.png", imageAlt: "Online flexibility for language learning" },
      ],
    },
    conversion: {
      title: "Abre tu camino de aprendizaje con Langia.",
      body: "Un punto de entrada claro para estudiantes individuales y organizaciones.",
      primary: "Empezar",
      secondary: "Contactar equipo",
      details: ["Contacto inicial", "Opción de ingreso", "Consulta de programa"],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Historias reales de progreso.",
      body: "Personas, familias y equipos eligen Langia para avanzar con más claridad, confianza y acompañamiento.",
      cta: "Empezar ahora",
      items: [
        { quote: "Reemplaza este texto con un testimonio real aprobado.", name: "Testimonio real 1", role: "Nombre del estudiante", location: "Ubicación o contexto", image: "" },
        { quote: "Reemplaza este texto con un testimonio real aprobado.", name: "Testimonio real 2", role: "Nombre del estudiante", location: "Ubicación o contexto", image: "" },
        { quote: "Reemplaza este texto con un testimonio real aprobado.", name: "Testimonio real 3", role: "Nombre del estudiante", location: "Ubicación o contexto", image: "" },
        { quote: "Reemplaza este texto con un testimonio real aprobado.", name: "Testimonio real 4", role: "Nombre del estudiante", location: "Ubicación o contexto", image: "" },
        { quote: "Reemplaza este texto con un testimonio real aprobado.", name: "Testimonio real 5", role: "Nombre del estudiante", location: "Ubicación o contexto", image: "" },
        { quote: "Reemplaza este texto con un testimonio real aprobado.", name: "Testimonio real 6", role: "Nombre del estudiante", location: "Ubicación o contexto", image: "" },
      ],
    },
    resources: {
      eyebrow: "Centro de recursos",
      title: "Ideas y guías para aprender con más claridad.",
      body: "Un espacio editorial para orientar decisiones, rutinas y próximos pasos.",
      articles: [
        { title: "Cómo elegir un programa", body: "Una guía breve para comparar objetivos, horarios y soporte.", href: "/blog/how-to-choose-the-right-english-program" },
        { title: "Aprendizaje con apoyo de IA", body: "Ideas para usar tecnología sin perder guía humana.", href: "/blog/what-is-ai-assisted-language-learning" },
      ],
      newsletterTitle: "Recibe novedades",
      newsletterBody: "Un campo visual por ahora. La suscripción se conectará más adelante.",
      newsletterImage: "/images/Home/Newsletterimage.png",
      newsletterImageAlt: "Langia newsletter resource image",
      placeholder: "Correo electrónico",
    },
    footer: {
      tagline: "Idiomas con estructura para comunicación global.",
      programs: "Programas",
      company: "Empresa",
      resources: "Recursos",
      newsletter: "Novedades",
      newsletterPlaceholder: "Correo electrónico",
      structuralLabel: "Wireframe estructural en escala de grises de Langia",
      columns: [
        {
          title: "Programas",
          links: ["Langia Online", "Talkin' Club", "Test Prep", "Kids n Teens"],
        },
        {
          title: "Empresa",
          links: ["Nosotros", "Corporativo", "Legal", "Trabaja con nosotros"],
        },
        {
          title: "Recursos",
          links: ["Centro de recursos", "Prueba de nivel", "Contacto", "Ingresar"],
        },
      ],
    },
    footerLanguageLabel: "Idioma",
    logo: {
      homeLabel: "Inicio de Langia",
      mark: "L",
      name: "Langia",
    },
  },
  pt: {
    nav: {
      programs: "Programas",
      programsMenu: [
        { label: "Langia Online", href: "/programs/langia-online" },
        { label: "Talkin' Club", href: "/programs/talkin-club" },
        { label: "Test Prep", href: "/programs/test-prep" },
        { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
      ],
      about: "Sobre nós",
      aboutMenu: [
        { label: "Sobre a Langia", href: "/about" },
        { label: "Corporativo", href: "/corporate" },
        { label: "Legal", href: "/legal" },
        { label: "Trabalhe conosco", href: "/work-with-us" },
      ],
      contact: "Contato",
      login: "Entrar",
      cta: "Começar",
      mobileMenuLabel: "Abrir menu",
    },
    hero: {
      badge: "APRENDIZAGEM ONLINE PREMIUM",
      title: "Inglês para pessoas que vão mais longe.",
      rotating: ["Inglês", "Espanhol", "Português", "Francês"],
      line2: "para pessoas",
      line3: "que vão mais longe.",
      body: "Aulas ao vivo, orientação especializada e uma rota clara para sua próxima oportunidade.",
      primary: "Começar agora",
      secondary: "Ver programas",
      bullets: ["Aulas ao vivo", "Progresso guiado", "Formato online flexível"],
    },
    support: {
      eyebrow: "PRESENÇA GLOBAL",
      title: "Onde nossos alunos trabalham, lideram e crescem.",
      body: "Os logotipos representam lugares onde alunos ou ex-alunos da Langia desenvolveram sua vida profissional. Não implicam patrocínio, parceria ou relação comercial.",
      logos: homeCompanyLogos,
    },
    signature: {
      eyebrow: "Nosso método",
      titlePrefix: "Langia TailorED:",
      title: "Mais que aulas: uma rota feita para avançar com você.",
      body: "Langia TailorED combina diagnóstico, aulas ao vivo, objetivos pessoais e acompanhamento inteligente para que cada etapa tenha direção.",
      image: "/images/Home/Home2.png",
      imageAlt: "Langia TailorED personalized learning system",
      benefits: [
        { title: "Rota por nível", body: "Um caminho claro desde o seu ponto de partida até o próximo objetivo.", icon: "target" },
        { title: "Orientação humana", body: "Professores especialistas mantêm o aprendizado próximo, prático e focado.", icon: "users" },
        { title: "Acompanhamento inteligente", body: "A tecnologia ajuda a conectar seus objetivos, ritmo e progresso em uma experiência mais pessoal.", icon: "spark" },
      ],
    },
    solutions: {
      eyebrow: "Programas",
      title: "Escolha o caminho que combina com você.",
      body: "Quatro formas de avançar conforme seu momento: formação completa, conversação, exames ou aprendizagem para crianças e teens.",
      cta: "Comparar programas",
      ctaHref: "/programs",
      cards: [
        { title: "Langia Online", body: "Formação estruturada ao vivo para adultos que querem avançar com clareza.", href: "/programs/langia-online", icon: "globe" },
        { title: "Talkin' Club", body: "Prática de conversação para ganhar fluência, confiança e naturalidade.", href: "/programs/talkin-club", icon: "message" },
        { title: "Test Prep", body: "Preparação focada para exames, certificações e objetivos acadêmicos.", href: "/programs/test-prep", icon: "target" },
        { title: "Langia 4 Kids n Teens", body: "Aprendizagem de idiomas para crianças e adolescentes com estrutura e acompanhamento.", href: "/programs/langia-4-kids-n-teens", icon: "users" },
      ],
    },
    how: {
      eyebrow: "Como funciona",
      title: "Uma rota simples do interesse à prática guiada.",
      body: "O processo ajuda a definir seu ponto de partida, escolher um programa e começar com um ritmo sustentável.",
      cta: "Começar agora",
      steps: [
        {
          step: "Passo 1",
          title: "Descubra seu ponto de partida",
          body: "Comece com uma referência clara do seu nível, objetivos e necessidades.",
          href: "/test-your-english-level",
          image: "/images/Home/Home3.png",
          imageAlt: "Discover your starting point",
          linkLabel: "Saiba mais",
        },
        {
          step: "Passo 2",
          title: "Escolha seu caminho",
          body: "Conecte seus objetivos ao programa e ao ritmo que melhor combinam com você.",
          href: "/programs",
          image: "/images/Home/Home4.png",
          imageAlt: "Choose your language learning path",
          linkLabel: "Saiba mais",
        },
        {
          step: "Passo 3",
          title: "Comece com apoio",
          body: "Avance com aulas ao vivo, estrutura e acompanhamento próximo.",
          href: "/contact",
          image: "/images/Home/Home5.png",
          imageAlt: "Begin guided language practice",
          linkLabel: "Saiba mais",
        },
      ],
      stepLinkLabel: "Saiba mais",
    },
    capabilities: {
      eyebrow: "Recursos",
      title: "Uma experiência premium, organizada com clareza.",
      body: "Ferramentas e acompanhamento para manter o aprendizado em movimento.",
      cards: [
        { title: "Suporte humano", body: "Orientação docente e feedback em cada etapa.", icon: "users", image: "/images/Home/Home6.png", imageAlt: "Human support for language learning" },
        { title: "Acompanhamento visual", body: "Um espaço central para progresso, objetivos e planejamento.", icon: "target", image: "/images/Home/Home7.png", imageAlt: "Visual progress dashboard for language learning" },
        { title: "Flexibilidade online", body: "Um formato estruturado para diferentes agendas.", icon: "globe", image: "/images/Home/Home8.png", imageAlt: "Online flexibility for language learning" },
      ],
    },
    conversion: {
      title: "Abra seu caminho de aprendizagem com a Langia.",
      body: "Um ponto de entrada claro para alunos individuais e organizações.",
      primary: "Começar",
      secondary: "Falar com a equipe",
      details: ["Contato inicial", "Opção de entrada", "Consulta de programa"],
    },
    testimonials: {
      eyebrow: "Depoimentos",
      title: "Histórias reais de progresso.",
      body: "Pessoas, famílias e equipes escolhem a Langia para avançar com mais clareza, confiança e acompanhamento.",
      cta: "Começar agora",
      items: [
        { quote: "Substitua este texto por um depoimento real aprovado.", name: "Depoimento real 1", role: "Nome do aluno", location: "Localização ou contexto", image: "" },
        { quote: "Substitua este texto por um depoimento real aprovado.", name: "Depoimento real 2", role: "Nome do aluno", location: "Localização ou contexto", image: "" },
        { quote: "Substitua este texto por um depoimento real aprovado.", name: "Depoimento real 3", role: "Nome do aluno", location: "Localização ou contexto", image: "" },
        { quote: "Substitua este texto por um depoimento real aprovado.", name: "Depoimento real 4", role: "Nome do aluno", location: "Localização ou contexto", image: "" },
        { quote: "Substitua este texto por um depoimento real aprovado.", name: "Depoimento real 5", role: "Nome do aluno", location: "Localização ou contexto", image: "" },
        { quote: "Substitua este texto por um depoimento real aprovado.", name: "Depoimento real 6", role: "Nome do aluno", location: "Localização ou contexto", image: "" },
      ],
    },
    resources: {
      eyebrow: "Centro de recursos",
      title: "Ideias e guias para aprender com mais clareza.",
      body: "Um espaço editorial para orientar escolhas, rotinas e próximos passos.",
      articles: [
        { title: "Como escolher um programa", body: "Um guia breve para comparar objetivos, horários e suporte.", href: "/blog/how-to-choose-the-right-english-program" },
        { title: "Aprendizagem com apoio de IA", body: "Ideias para usar tecnologia sem perder orientação humana.", href: "/blog/what-is-ai-assisted-language-learning" },
      ],
      newsletterTitle: "Receba novidades",
      newsletterBody: "Um campo visual por enquanto. A assinatura será conectada mais adiante.",
      newsletterImage: "/images/Home/Newsletterimage.png",
      newsletterImageAlt: "Langia newsletter resource image",
      placeholder: "E-mail",
    },
    footer: {
      tagline: "Idiomas com estrutura para comunicação global.",
      programs: "Programas",
      company: "Empresa",
      resources: "Recursos",
      newsletter: "Novidades",
      newsletterPlaceholder: "E-mail",
      structuralLabel: "Wireframe estrutural em escala de cinza da Langia",
      columns: [
        {
          title: "Programas",
          links: ["Langia Online", "Talkin' Club", "Test Prep", "Kids n Teens"],
        },
        {
          title: "Empresa",
          links: ["Sobre nós", "Corporativo", "Legal", "Trabalhe conosco"],
        },
        {
          title: "Recursos",
          links: ["Centro de recursos", "Teste de nível", "Contato", "Entrar"],
        },
      ],
    },
    footerLanguageLabel: "Idioma",
    logo: {
      homeLabel: "Início da Langia",
      mark: "L",
      name: "Langia",
    },
  },
  en: {
    nav: {
      programs: "Programs",
      programsMenu: [
        { label: "Langia Online", href: "/programs/langia-online" },
        { label: "Talkin' Club", href: "/programs/talkin-club" },
        { label: "Test Prep", href: "/programs/test-prep" },
        { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
      ],
      about: "About",
      aboutMenu: [
        { label: "About Langia", href: "/about" },
        { label: "Corporate", href: "/corporate" },
        { label: "Legal", href: "/legal" },
        { label: "Work with Us", href: "/work-with-us" },
      ],
      contact: "Contact",
      login: "Login",
      cta: "Start",
      mobileMenuLabel: "Open menu",
    },
    hero: {
      badge: "PREMIUM ONLINE LEARNING",
      title: "English for people going places.",
      rotating: ["English", "Spanish", "Portuguese", "French"],
      line2: "for people",
      line3: "going places.",
      body: "Live classes, expert guidance, and a clear path toward your next opportunity.",
      primary: "Start now",
      secondary: "View programs",
      bullets: ["Live instruction", "Guided progress", "Flexible online format"],
    },
    support: {
      eyebrow: "GLOBAL PRESENCE",
      title: "Where our learners work, lead, and grow.",
      body: "Logos represent places where Langia learners or alumni have developed their professional lives. They do not imply sponsorship, partnership, or a commercial relationship.",
      logos: homeCompanyLogos,
    },
    signature: {
      eyebrow: "Our method",
      titlePrefix: "Langia TailorED:",
      title: "More than classes: a path built to move with you.",
      body: "Langia TailorED combines diagnostics, live classes, personal goals, and intelligent follow-up so every stage has direction.",
      image: "/images/Home/Home2.png",
      imageAlt: "Langia TailorED personalized learning system",
      benefits: [
        { title: "Level-based path", body: "A clear route from your starting point to your next goal.", icon: "target" },
        { title: "Human guidance", body: "Expert teachers keep learning practical, focused, and personal.", icon: "users" },
        { title: "Intelligent follow-up", body: "Technology helps connect your goals, rhythm, and progress into a more personal experience.", icon: "spark" },
      ],
    },
    solutions: {
      eyebrow: "Programs",
      title: "Choose the path that fits you.",
      body: "Four ways to move forward: complete training, conversation practice, exam preparation, or language learning for kids and teens.",
      cta: "Compare programs",
      ctaHref: "/programs",
      cards: [
        { title: "Langia Online", body: "Structured live training for adults who want clear progress.", href: "/programs/langia-online", icon: "globe" },
        { title: "Talkin' Club", body: "Conversation practice for fluency, confidence, and natural speaking.", href: "/programs/talkin-club", icon: "message" },
        { title: "Test Prep", body: "Focused preparation for exams, certifications, and academic goals.", href: "/programs/test-prep", icon: "target" },
        { title: "Langia 4 Kids n Teens", body: "Language learning for children and teens with structure and support.", href: "/programs/langia-4-kids-n-teens", icon: "users" },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "A simple flow from interest to guided practice.",
      body: "The process helps define your starting point, select a program, and begin with a sustainable rhythm.",
      cta: "Start now",
      steps: [
        {
          step: "Step 1",
          title: "Discover your starting point",
          body: "Start with a clear reference for your level, goals, and learning needs.",
          href: "/test-your-english-level",
          image: "/images/Home/Home3.png",
          imageAlt: "Discover your starting point",
          linkLabel: "Learn more",
        },
        {
          step: "Step 2",
          title: "Choose your path",
          body: "Match your goals with the program and rhythm that fits you best.",
          href: "/programs",
          image: "/images/Home/Home4.png",
          imageAlt: "Choose your language learning path",
          linkLabel: "Learn more",
        },
        {
          step: "Step 3",
          title: "Begin with support",
          body: "Move into live classes with structure, guidance, and close follow-up.",
          href: "/contact",
          image: "/images/Home/Home5.png",
          imageAlt: "Begin guided language practice",
          linkLabel: "Learn more",
        },
      ],
      stepLinkLabel: "Learn more",
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "A premium learning experience, organized with clarity.",
      body: "Tools and support designed to keep learning focused and moving.",
      cards: [
        { title: "Human support", body: "Teacher guidance and feedback throughout the path.", icon: "users", image: "/images/Home/Home6.png", imageAlt: "Human support for language learning" },
        { title: "Visual progress", body: "A central space for progress, goals, and planning.", icon: "target", image: "/images/Home/Home7.png", imageAlt: "Visual progress dashboard for language learning" },
        { title: "Online flexibility", body: "A structured format for different schedules.", icon: "globe", image: "/images/Home/Home8.png", imageAlt: "Online flexibility for language learning" },
      ],
    },
    conversion: {
      title: "Open a learning path with Langia.",
      body: "A clear entry point for individual learners and organizations.",
      primary: "Get started",
      secondary: "Contact team",
      details: ["Initial contact", "Entry option", "Program consultation"],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Real stories of progress.",
      body: "Learners, families, and teams choose Langia to move forward with more clarity, confidence, and support.",
      cta: "Start now",
      items: [
        { quote: "Replace this text with an approved real testimonial.", name: "Real testimonial 1", role: "Learner name", location: "Location or context", image: "" },
        { quote: "Replace this text with an approved real testimonial.", name: "Real testimonial 2", role: "Learner name", location: "Location or context", image: "" },
        { quote: "Replace this text with an approved real testimonial.", name: "Real testimonial 3", role: "Learner name", location: "Location or context", image: "" },
        { quote: "Replace this text with an approved real testimonial.", name: "Real testimonial 4", role: "Learner name", location: "Location or context", image: "" },
        { quote: "Replace this text with an approved real testimonial.", name: "Real testimonial 5", role: "Learner name", location: "Location or context", image: "" },
        { quote: "Replace this text with an approved real testimonial.", name: "Real testimonial 6", role: "Learner name", location: "Location or context", image: "" },
      ],
    },
    resources: {
      eyebrow: "Resource center",
      title: "Ideas and guides for clearer learning.",
      body: "An editorial space for decisions, routines, and next steps.",
      articles: [
        { title: "Choosing a learning path", body: "A short guide to compare goals, schedules, and support.", href: "/blog/how-to-choose-the-right-english-program" },
        { title: "AI-assisted learning", body: "Ideas for using technology without losing human guidance.", href: "/blog/what-is-ai-assisted-language-learning" },
      ],
      newsletterTitle: "Subscribe for updates",
      newsletterBody: "A visual field for now. Subscription behavior will be connected later.",
      newsletterImage: "/images/Home/Newsletterimage.png",
      newsletterImageAlt: "Langia newsletter resource image",
      placeholder: "Email address",
    },
    footer: {
      tagline: "Structured language learning for global communication.",
      programs: "Programs",
      company: "Company",
      resources: "Resources",
      newsletter: "Newsletter",
      newsletterPlaceholder: "Email address",
      structuralLabel: "Langia grayscale structural wireframe",
      columns: [
        {
          title: "Programs",
          links: ["Langia Online", "Talkin' Club", "Test Prep", "Kids n Teens"],
        },
        {
          title: "Company",
          links: ["About", "Corporate", "Legal", "Work with Us"],
        },
        {
          title: "Resources",
          links: ["Resource Center", "Level Test", "Contact", "Login"],
        },
      ],
    },
    footerLanguageLabel: "Language",
    logo: {
      homeLabel: "Langia home",
      mark: "L",
      name: "Langia",
    },
  },
} as const satisfies Record<string, HomepageCopy>;

export type HomepageLanguage = keyof typeof homepageContent;

export const defaultLanguage: HomepageLanguage = "es";

export function isHomepageLanguage(value: string): value is HomepageLanguage {
  return value in homepageContent;
}

export const homepageLanguageOptions: Array<{
  value: HomepageLanguage;
  label: string;
}> = [
  { value: "es", label: "ES" },
  { value: "pt", label: "PT-BR" },
  { value: "en", label: "EN" },
];
