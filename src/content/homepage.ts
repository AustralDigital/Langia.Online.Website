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
    imageAlt: string;
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
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    reasons: string[];
    image: string;
    imageAlt: string;
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
  reveal: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    body: string;
    interfaceTitle: string;
    signals: Array<{ label: string; detail: string }>;
    directionLabel: string;
    directionValue: string;
  };
  conversion: {
    title: string;
    body: string;
    imageAlt: string;
    primary: string;
    secondary: string;
    details: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{ title: string; body: string }>;
  };
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
      imageAlt: "Profesional preparándose para una nueva oportunidad",
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
    intro: {
      eyebrow: "Tu motivo importa",
      title: "Cada persona aprende por una razón distinta.",
      body: "Antes del nivel, el programa o la plataforma, está la vida que quieres construir. Tu aprendizaje debe empezar ahí.",
      reasons: ["Un nuevo país.", "Un rol más grande.", "Una conversación.", "Un examen.", "Un nuevo capítulo."],
      image: "/images/marketing-2026/home/family-travel-independence.webp",
      imageAlt: "Familia comunicándose con confianza al llegar a un nuevo destino",
    },
    signature: {
      eyebrow: "Nuestro método",
      titlePrefix: "Langia TailorED: ",
      title: "Más que clases: una ruta hecha para avanzar contigo.",
      body: "Langia TailorED combina diagnóstico, clases en vivo, objetivos personales y seguimiento inteligente para que cada etapa tenga dirección.",
      image: "/images/marketing-2026/editorial/ai-assisted-human-outcome.webp",
      imageAlt: "Persona practicando una presentación con apoyo humano y tecnología discreta",
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
        { title: "Langia Online", body: "Formación estructurada en vivo para adultos que quieren avanzar con claridad.", href: "/programs/langia-online", icon: "globe", image: "/images/marketing-2026/programs/langia-online-global-presentation.webp", imageAlt: "Profesional presentando con confianza ante un equipo internacional" },
        { title: "Talkin' Club", body: "Práctica conversacional para ganar fluidez, confianza y naturalidad.", href: "/programs/talkin-club", icon: "message", image: "/images/marketing-2026/programs/talkin-club-natural-connection.webp", imageAlt: "Profesionales conversando con naturalidad en un encuentro internacional" },
        { title: "Test Prep", body: "Preparación enfocada para exámenes, certificaciones y metas académicas.", href: "/programs/test-prep", icon: "target", image: "/images/marketing-2026/programs/test-prep-campus-readiness.webp", imageAlt: "Estudiante llegando con confianza a un campus internacional" },
        { title: "Langia 4 Kids n Teens", body: "Aprendizaje de idiomas para niños y adolescentes con estructura y acompañamiento.", href: "/programs/langia-4-kids-n-teens", icon: "users", image: "/images/marketing-2026/programs/kids-family-discovery-desktop.webp", imageAlt: "Familia explorando un nuevo destino mientras una adolescente se comunica con confianza" },
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
          imageAlt: "Persona descubriendo su punto de partida para aprender un idioma",
          linkLabel: "Conocer más",
        },
        {
          step: "Paso 2",
          title: "Elige tu camino",
          body: "Conecta tus objetivos con el programa y el ritmo que mejor se ajustan a ti.",
          href: "/programs",
          image: "/images/Home/Home4.png",
          imageAlt: "Persona eligiendo su ruta de aprendizaje de idiomas",
          linkLabel: "Conocer más",
        },
        {
          step: "Paso 3",
          title: "Empieza con apoyo",
          body: "Avanza con clases en vivo, estructura y seguimiento cercano.",
          href: "/contact",
          image: "/images/Home/Home5.png",
          imageAlt: "Persona iniciando una práctica de idioma con guía",
          linkLabel: "Conocer más",
        },
      ],
      stepLinkLabel: "Conocer más",
    },
    reveal: {
      eyebrow: "La inteligencia detrás del camino",
      title: "Ningún recorrido de aprendizaje es igual.",
      titleAccent: "Ninguna lección debería serlo.",
      body: "Langia TailorED conecta el contexto, el nivel actual, la meta comunicativa y el progreso de cada estudiante para dar dirección a las clases en vivo y al seguimiento docente.",
      interfaceTitle: "Dirección de aprendizaje",
      signals: [
        { label: "Contexto", detail: "El punto de partida y la realidad del estudiante." },
        { label: "Nivel actual", detail: "Una referencia clara para decidir qué sigue." },
        { label: "Meta comunicativa", detail: "El uso real del idioma que necesita dominar." },
        { label: "Guía docente", detail: "Práctica en vivo con dirección humana." },
        { label: "Progreso", detail: "Seguimiento para orientar el siguiente paso." },
      ],
      directionLabel: "Próxima dirección",
      directionValue: "Una lección conectada con el momento del estudiante",
    },
    conversion: {
      title: "Cuéntanos hacia dónde vas.",
      body: "Empecemos por tu contexto, tu meta y la comunicación que ese futuro va a exigir.",
      imageAlt: "Profesional preparándose para una nueva oportunidad internacional",
      primary: "Empezar",
      secondary: "Contactar equipo",
      details: ["Contacto inicial", "Opción de ingreso", "Consulta de programa"],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Antes de comenzar.",
      body: "Lo esencial para elegir tu siguiente paso con claridad.",
      items: [
        { title: "¿Qué programa de Langia es para mí?", body: "Langia Online ofrece una formación completa y estructurada; Talkin’ Club se enfoca en conversación; Test Prep prepara para exámenes y certificaciones; y Langia 4 Kids n Teens está diseñado para niños y adolescentes." },
        { title: "¿Las clases son en vivo?", body: "Sí. La experiencia combina clases en vivo, guía docente y una ruta organizada alrededor de tus objetivos." },
        { title: "¿Langia ofrece idiomas además del inglés?", body: "Sí. Langia trabaja con inglés, francés, español y portugués. La disponibilidad y el programa adecuado se confirman en el contacto inicial." },
        { title: "¿Cómo funciona Langia TailorED?", body: "El método conecta tu punto de partida, objetivos personales, ritmo y progreso para dar más dirección a las clases y al seguimiento." },
        { title: "¿También trabajan con empresas?", body: "Sí. Langia cuenta con una ruta Corporate para organizaciones que necesitan soluciones de formación lingüística." },
      ],
    },
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
      imageAlt: "Profissional se preparando para uma nova oportunidade",
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
    intro: {
      eyebrow: "Seu motivo importa",
      title: "Cada pessoa aprende por um motivo diferente.",
      body: "Antes do nível, do programa ou da plataforma, está a vida que você quer construir. Sua aprendizagem deve começar por aí.",
      reasons: ["Um novo país.", "Um cargo maior.", "Uma conversa.", "Uma prova.", "Um novo capítulo."],
      image: "/images/marketing-2026/home/family-travel-independence.webp",
      imageAlt: "Família se comunicando com confiança ao chegar a um novo destino",
    },
    signature: {
      eyebrow: "Nosso método",
      titlePrefix: "Langia TailorED: ",
      title: "Mais que aulas: uma rota feita para avançar com você.",
      body: "Langia TailorED combina diagnóstico, aulas ao vivo, objetivos pessoais e acompanhamento inteligente para que cada etapa tenha direção.",
      image: "/images/marketing-2026/editorial/ai-assisted-human-outcome.webp",
      imageAlt: "Pessoa praticando uma apresentação com apoio humano e tecnologia discreta",
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
        { title: "Langia Online", body: "Formação estruturada ao vivo para adultos que querem avançar com clareza.", href: "/programs/langia-online", icon: "globe", image: "/images/marketing-2026/programs/langia-online-global-presentation.webp", imageAlt: "Profissional apresentando com confiança para uma equipe internacional" },
        { title: "Talkin' Club", body: "Prática de conversação para ganhar fluência, confiança e naturalidade.", href: "/programs/talkin-club", icon: "message", image: "/images/marketing-2026/programs/talkin-club-natural-connection.webp", imageAlt: "Profissionais conversando com naturalidade em um encontro internacional" },
        { title: "Test Prep", body: "Preparação focada para exames, certificações e objetivos acadêmicos.", href: "/programs/test-prep", icon: "target", image: "/images/marketing-2026/programs/test-prep-campus-readiness.webp", imageAlt: "Estudante chegando com confiança a um campus internacional" },
        { title: "Langia 4 Kids n Teens", body: "Aprendizagem de idiomas para crianças e adolescentes com estrutura e acompanhamento.", href: "/programs/langia-4-kids-n-teens", icon: "users", image: "/images/marketing-2026/programs/kids-family-discovery-desktop.webp", imageAlt: "Família explorando um novo destino enquanto uma adolescente se comunica com confiança" },
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
          imageAlt: "Pessoa descobrindo seu ponto de partida para aprender um idioma",
          linkLabel: "Saiba mais",
        },
        {
          step: "Passo 2",
          title: "Escolha seu caminho",
          body: "Conecte seus objetivos ao programa e ao ritmo que melhor combinam com você.",
          href: "/programs",
          image: "/images/Home/Home4.png",
          imageAlt: "Pessoa escolhendo sua rota de aprendizagem de idiomas",
          linkLabel: "Saiba mais",
        },
        {
          step: "Passo 3",
          title: "Comece com apoio",
          body: "Avance com aulas ao vivo, estrutura e acompanhamento próximo.",
          href: "/contact",
          image: "/images/Home/Home5.png",
          imageAlt: "Pessoa iniciando uma prática de idioma com orientação",
          linkLabel: "Saiba mais",
        },
      ],
      stepLinkLabel: "Saiba mais",
    },
    reveal: {
      eyebrow: "A inteligência por trás do caminho",
      title: "Nenhuma jornada de aprendizagem é igual.",
      titleAccent: "Nenhuma aula deveria ser.",
      body: "Langia TailorED conecta o contexto, o nível atual, a meta comunicativa e o progresso de cada estudante para dar direção às aulas ao vivo e ao acompanhamento docente.",
      interfaceTitle: "Direção de aprendizagem",
      signals: [
        { label: "Contexto", detail: "O ponto de partida e a realidade do estudante." },
        { label: "Nível atual", detail: "Uma referência clara para decidir o que vem depois." },
        { label: "Meta comunicativa", detail: "O uso real do idioma que precisa dominar." },
        { label: "Orientação docente", detail: "Prática ao vivo com direção humana." },
        { label: "Progresso", detail: "Acompanhamento para orientar o próximo passo." },
      ],
      directionLabel: "Próxima direção",
      directionValue: "Uma aula conectada ao momento do estudante",
    },
    conversion: {
      title: "Conte para nós aonde você quer chegar.",
      body: "Vamos começar pelo seu contexto, sua meta e a comunicação que esse futuro vai exigir.",
      imageAlt: "Profissional se preparando para uma nova oportunidade internacional",
      primary: "Começar",
      secondary: "Falar com a equipe",
      details: ["Contato inicial", "Opção de entrada", "Consulta de programa"],
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      title: "Antes de começar.",
      body: "O essencial para escolher seu próximo passo com clareza.",
      items: [
        { title: "Qual programa da Langia é ideal para mim?", body: "Langia Online oferece uma formação completa e estruturada; Talkin’ Club foca em conversação; Test Prep prepara para exames e certificações; e Langia 4 Kids n Teens foi criado para crianças e adolescentes." },
        { title: "As aulas são ao vivo?", body: "Sim. A experiência combina aulas ao vivo, orientação docente e uma rota organizada em torno dos seus objetivos." },
        { title: "A Langia oferece outros idiomas além do inglês?", body: "Sim. A Langia trabalha com inglês, francês, espanhol e português. A disponibilidade e o programa adequado são confirmados no contato inicial." },
        { title: "Como funciona o Langia TailorED?", body: "O método conecta seu ponto de partida, objetivos pessoais, ritmo e progresso para dar mais direção às aulas e ao acompanhamento." },
        { title: "Vocês também trabalham com empresas?", body: "Sim. A Langia tem uma rota Corporate para organizações que precisam de soluções de formação linguística." },
      ],
    },
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
      imageAlt: "Professional preparing for a new opportunity",
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
    intro: {
      eyebrow: "Your reason matters",
      title: "Everyone learns for a different reason.",
      body: "Before the level, the program, or the platform, there is the life you want to build. Your learning should start there.",
      reasons: ["A new country.", "A bigger role.", "A conversation.", "A test.", "A new chapter."],
      image: "/images/marketing-2026/home/family-travel-independence.webp",
      imageAlt: "Family communicating confidently as they arrive at a new destination",
    },
    signature: {
      eyebrow: "Our method",
      titlePrefix: "Langia TailorED: ",
      title: "More than classes: a path built to move with you.",
      body: "Langia TailorED combines diagnostics, live classes, personal goals, and intelligent follow-up so every stage has direction.",
      image: "/images/marketing-2026/editorial/ai-assisted-human-outcome.webp",
      imageAlt: "Learner rehearsing a presentation with human support and subtle technology",
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
        { title: "Langia Online", body: "Structured live training for adults who want clear progress.", href: "/programs/langia-online", icon: "globe", image: "/images/marketing-2026/programs/langia-online-global-presentation.webp", imageAlt: "Professional presenting confidently to an international team" },
        { title: "Talkin' Club", body: "Conversation practice for fluency, confidence, and natural speaking.", href: "/programs/talkin-club", icon: "message", image: "/images/marketing-2026/programs/talkin-club-natural-connection.webp", imageAlt: "Professionals speaking naturally at an international gathering" },
        { title: "Test Prep", body: "Focused preparation for exams, certifications, and academic goals.", href: "/programs/test-prep", icon: "target", image: "/images/marketing-2026/programs/test-prep-campus-readiness.webp", imageAlt: "Learner arriving confidently at an international campus" },
        { title: "Langia 4 Kids n Teens", body: "Language learning for children and teens with structure and support.", href: "/programs/langia-4-kids-n-teens", icon: "users", image: "/images/marketing-2026/programs/kids-family-discovery-desktop.webp", imageAlt: "Family exploring a new destination while a teenager communicates confidently" },
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
    reveal: {
      eyebrow: "The intelligence behind the path",
      title: "No two learning journeys are identical.",
      titleAccent: "Neither should two lessons be.",
      body: "Langia TailorED connects each learner’s context, current level, communicative goal, and progress to give direction to live classes and teacher follow-up.",
      interfaceTitle: "Learning direction",
      signals: [
        { label: "Context", detail: "The learner’s starting point and real-world situation." },
        { label: "Current level", detail: "A clear reference for deciding what comes next." },
        { label: "Communicative goal", detail: "The real use of language they need to master." },
        { label: "Teacher guidance", detail: "Live practice with human direction." },
        { label: "Progress", detail: "Follow-up that informs the next step." },
      ],
      directionLabel: "Next direction",
      directionValue: "A lesson connected to the learner’s current moment",
    },
    conversion: {
      title: "Tell us where you’re going.",
      body: "Let’s begin with your context, your goal, and the communication that future will require.",
      imageAlt: "Professional preparing for a new international opportunity",
      primary: "Get started",
      secondary: "Contact team",
      details: ["Initial contact", "Entry option", "Program consultation"],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Before you begin.",
      body: "The essentials for choosing your next step with clarity.",
      items: [
        { title: "Which Langia program is right for me?", body: "Langia Online offers complete, structured training; Talkin’ Club focuses on conversation; Test Prep prepares you for exams and certifications; and Langia 4 Kids n Teens is designed for children and teenagers." },
        { title: "Are classes live?", body: "Yes. The experience combines live classes, teacher guidance, and a path organized around your goals." },
        { title: "Does Langia offer languages besides English?", body: "Yes. Langia works with English, French, Spanish, and Portuguese. Availability and the right program are confirmed during the initial contact." },
        { title: "How does Langia TailorED work?", body: "The method connects your starting point, personal goals, rhythm, and progress to give more direction to classes and follow-up." },
        { title: "Do you also work with companies?", body: "Yes. Langia has a Corporate path for organizations that need language training solutions." },
      ],
    },
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
