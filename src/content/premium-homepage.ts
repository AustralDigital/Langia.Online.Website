import type { SiteLanguage } from "@/lib/language";

const en = {
  skip: "Skip to content",
  hero: {
    label: "Langia Language Solutions",
    lines: ["English for people", "going places."],
    body: "Live language learning built around your goals, your industry, your level, and the way you actually communicate.",
    primary: "Start your journey",
    secondary: "Explore programs",
    note: "Exceptional teachers. Learning that adapts to you.",
    languages: "English · Spanish · French · Portuguese",
    alt: "A professional preparing for an international meeting in a city office at blue hour",
  },
  trust: {
    label: "For the conversations that move you forward",
    industries: [
      "Business & leadership",
      "Law & professional services",
      "Entrepreneurship",
      "Sales & international teams",
    ],
    note: "Learning shaped around your professional world.",
  },
  tailored: {
    label: "01 / Langia TailorED",
    title: "A great teacher.\nA path that knows you.",
    body: "Your teacher brings the insight. TailorED brings the context. Together, they make every lesson more relevant to where you are—and where you want to go.",
    cta: "See our approach",
    human: "Human-led. AI-assisted. Always personal.",
    humanBody:
      "AI helps your teacher prepare lessons, connect learning evidence, and personalize practice. Your teacher leads the conversation, gives feedback, and decides what comes next.",
    contextLabel: "Built around you",
    context: [
      "Your level & goals",
      "Profession & industry",
      "Vocabulary needs",
      "Previous performance",
      "Strengths & weaknesses",
      "Lesson history",
      "Practice & homework",
      "Progress over time",
    ],
    example: "Illustrative learning path",
    tabs: ["Live lesson", "Practice", "Progress"],
    profile: "Professional English",
    level: "B1 / Intermediate",
    industry: "Legal & business",
    goal: "Communicate a clear recommendation",
    panelTitles: [
      "Make your case.",
      "Keep the conversation going.",
      "The next lesson starts here.",
    ],
    panelBodies: [
      "Discuss a client scenario, weigh the options, and present your recommendation with your teacher.",
      "Revisit the language from your lesson. Listen, rehearse, and apply it to a new situation.",
      "Your teacher connects lesson history, strengths, and areas to develop to plan your next step.",
    ],
    panelLabels: ["Today’s focus", "Between classes", "Learning evidence"],
    vocabulary: "Useful language",
    terms: [
      "We recommend…",
      "The main consideration…",
      "An alternative would be…",
    ],
    teacher: "Teacher guidance at every step",
    previewNote:
      "A sample composition showing how learning connects; not a student record.",
  },
  programs: {
    label: "02 / Find your direction",
    title: "Different ambitions.\nThe same personal attention.",
    body: "A new role. A growing team. A first big opportunity. Choose the learning that fits your next chapter.",
    all: "Compare programs",
    items: [
      {
        title: "Adults",
        tag: "For your next move",
        body: "Personal live learning for the work, travel, and conversations ahead.",
        href: "/programs/langia-online",
      },
      {
        title: "Corporate",
        tag: "For teams crossing borders",
        body: "Language learning shaped around your people, your industry, and your business.",
        href: "/corporate",
      },
      {
        title: "Kids & Teens",
        tag: "A strong start",
        body: "Thoughtful teaching that builds confidence, curiosity, and a clear foundation.",
        href: "/programs/langia-4-kids-n-teens",
      },
      {
        title: "Test Prep",
        tag: "A goal in sight",
        body: "Focused preparation for the exam—and the opportunity on the other side.",
        href: "/programs/test-prep",
      },
      {
        title: "Talkin’ Club",
        tag: "Find your voice",
        body: "Private conversation practice for more natural, confident communication.",
        href: "/programs/talkin-club",
      },
    ],
    photoAlts: [
      "A business owner focused on a live lesson at her home workspace",
      "An international team discussing a business opportunity",
    ],
  },
  journey: {
    label: "03 / How Langia works",
    title: "A clear way forward.",
    body: "From your first conversation to your next milestone, each step informs the next.",
    steps: [
      {
        title: "Know your starting point",
        body: "Your placement, your goals, and the situations that matter to you.",
      },
      {
        title: "Make a personal plan",
        body: "A learning path shaped around your level and ambitions.",
      },
      {
        title: "Learn live",
        body: "Work with your teacher. Ask, speak, try, and refine.",
      },
      {
        title: "Put it into practice",
        body: "TailorED practice and homework keep your lessons working between classes.",
      },
      {
        title: "See what’s changing",
        body: "Review your progress and give the next lesson a sharper focus.",
      },
    ],
  },
  capabilities: {
    label: "04 / The learning system",
    title: "Personal is more\nthan a promise.",
    body: "A connected system that makes your context useful, your practice purposeful, and your progress visible.",
    groups: [
      {
        number: "01",
        title: "Built for your world",
        body: "An adaptive curriculum with CEFR-based progression, personalized lessons, and the vocabulary your work actually demands.",
        details: [
          "Adaptive curriculum",
          "CEFR-based progression",
          "Industry vocabulary",
          "Personalized lessons",
        ],
      },
      {
        number: "02",
        title: "Connected between classes",
        body: "AI-assisted lesson preparation, speaking practice, and personalized homework connect what happens in class with what comes next.",
        details: [
          "AI-assisted lesson generation",
          "Speaking practice",
          "Personalized homework",
          "Teacher guidance",
        ],
      },
      {
        number: "03",
        title: "Informed by your progress",
        body: "Student intelligence brings lesson history and learning evidence together. Your teacher can see what is working and where to focus.",
        details: [
          "Student intelligence",
          "Lesson history",
          "Progress tracking",
          "Multilingual interface",
        ],
      },
    ],
  },
  listening: {
    label: "05 / English in the real world",
    title: "The world doesn’t\nspeak in one accent.",
    body: "Your next conversation could be with someone from London, São Paulo, Mumbai, or New York. Learn to listen for meaning across the English you’ll actually hear.",
    accents: [
      "American",
      "British",
      "Indian",
      "Latin American",
      "European",
      "And beyond",
    ],
    foot: "International listening practice, with difficulty and pacing adjusted to your level.",
    caption: "One language. Many ways to sound like yourself.",
    alt: "Colleagues with different international backgrounds exchanging ideas",
    tags: [
      "Global accents",
      "Level-aware listening speed",
      "Real-world situations",
    ],
  },
  statement: {
    label: "Your next chapter",
    title: "Your English should move\nas fast as your career.",
    cta: "Tell us where you’re going",
    secondary: "Learning for your team",
  },
  outcomes: {
    label: "06 / What you’re working toward",
    title: "More than knowing.\nBeing ready.",
    body: "Build the language for the moments you want to handle with confidence.",
    items: [
      "A clear voice in the meeting.",
      "A stronger client conversation.",
      "A next chapter abroad.",
    ],
    cta: "Find your starting point",
    alt: "A learner making time for focused language practice",
  },
  resources: {
    label: "07 / A good place to begin",
    title: "Choose your next step.",
    items: [
      {
        title: "Find your level",
        body: "Start with placement and goals.",
        href: "/test-your-english-level",
      },
      {
        title: "How TailorED works",
        body: "Meet the system behind your learning.",
        href: "#tailored",
      },
      {
        title: "Our methodology",
        body: "Excellent teaching. Useful technology.",
        href: "/about",
      },
      {
        title: "Explore programs",
        body: "Find the path that fits your moment.",
        href: "/programs",
      },
      {
        title: "Corporate learning",
        body: "Build the language your team needs.",
        href: "/corporate",
      },
    ],
  },
  faq: {
    label: "Before you begin",
    title: "A few good questions.",
    items: [
      {
        question: "Are classes live?",
        answer:
          "Yes. You learn with a real teacher who guides practice, gives feedback, and keeps your learning focused on your goals.",
      },
      {
        question: "Does TailorED replace my teacher?",
        answer:
          "No. AI supports lesson preparation and personalized practice. Your teacher leads the learning experience and uses your progress to guide what comes next.",
      },
      {
        question: "Can I learn a language other than English?",
        answer:
          "Langia also offers Spanish, French, and Portuguese. We’ll confirm the available program and format when we discuss your goals.",
      },
      {
        question: "Can Langia work with my company?",
        answer:
          "Yes. Our Corporate program helps teams prepare for communication with clients, colleagues, and international markets.",
      },
    ],
  },
  footer: {
    title: "Where are you\ngoing next?",
    cta: "Let’s talk",
    brand: "English for people going places.",
    language: "Website language",
    copyright: "Langia Language Solutions LLC. All rights reserved.",
  },
};

export type PremiumHomeCopy = typeof en;

const es: PremiumHomeCopy = {
  skip: "Ir al contenido",
  hero: {
    label: "Langia Language Solutions",
    lines: ["Inglés para quienes", "van más allá."],
    body: "Aprendizaje de idiomas en vivo, pensado para tus metas, tu sector, tu nivel y tu manera de comunicarte.",
    primary: "Empieza tu camino",
    secondary: "Explora los programas",
    note: "Excelentes profesores. Aprendizaje que se adapta a ti.",
    languages: "Inglés · Español · Francés · Portugués",
    alt: "Una profesional preparando una reunión internacional en una oficina al anochecer",
  },
  trust: {
    label: "Para las conversaciones que te hacen avanzar",
    industries: [
      "Negocios y liderazgo",
      "Derecho y servicios profesionales",
      "Emprendimiento",
      "Ventas y equipos internacionales",
    ],
    note: "Aprendizaje pensado para tu mundo profesional.",
  },
  tailored: {
    label: "01 / Langia TailorED",
    title: "Un gran profesor.\nUna ruta que te conoce.",
    body: "Tu profesor aporta el criterio. TailorED aporta el contexto. Juntos hacen que cada clase sea más relevante para tu presente y para lo que quieres lograr.",
    cta: "Conoce nuestro enfoque",
    human: "Guiado por personas. Apoyado por IA. Siempre personal.",
    humanBody:
      "La IA ayuda a tu profesor a preparar clases, conectar evidencias de aprendizaje y personalizar la práctica. Tu profesor dirige la conversación, da retroalimentación y decide el siguiente paso.",
    contextLabel: "Pensado para ti",
    context: [
      "Tu nivel y tus metas",
      "Profesión y sector",
      "Vocabulario necesario",
      "Desempeño anterior",
      "Fortalezas y dificultades",
      "Historial de clases",
      "Práctica y tareas",
      "Progreso en el tiempo",
    ],
    example: "Ruta de aprendizaje ilustrativa",
    tabs: ["Clase en vivo", "Práctica", "Progreso"],
    profile: "Inglés profesional",
    level: "B1 / Intermedio",
    industry: "Derecho y negocios",
    goal: "Comunicar una recomendación clara",
    panelTitles: [
      "Presenta tu argumento.",
      "Continúa la conversación.",
      "La próxima clase empieza aquí.",
    ],
    panelBodies: [
      "Analiza el caso de un cliente, compara opciones y presenta tu recomendación con tu profesor.",
      "Retoma el lenguaje de tu clase. Escucha, ensaya y aplícalo a una situación nueva.",
      "Tu profesor conecta el historial de clases, tus fortalezas y lo que necesitas trabajar para planear el siguiente paso.",
    ],
    panelLabels: [
      "El enfoque de hoy",
      "Entre clases",
      "Evidencias de aprendizaje",
    ],
    vocabulary: "Lenguaje útil",
    terms: [
      "We recommend…",
      "The main consideration…",
      "An alternative would be…",
    ],
    teacher: "Orientación docente en cada paso",
    previewNote:
      "Ejemplo de cómo se conecta el aprendizaje; no es el registro de un estudiante.",
  },
  programs: {
    label: "02 / Encuentra tu dirección",
    title: "Distintas ambiciones.\nLa misma atención personal.",
    body: "Un nuevo cargo. Un equipo que crece. Una gran primera oportunidad. Elige el aprendizaje para tu próximo capítulo.",
    all: "Compara los programas",
    items: [
      {
        title: "Adultos",
        tag: "Para tu próximo paso",
        body: "Aprendizaje personal en vivo para el trabajo, los viajes y las conversaciones que vienen.",
        href: "/programs/langia-online",
      },
      {
        title: "Corporate",
        tag: "Para equipos que cruzan fronteras",
        body: "Aprendizaje de idiomas pensado para tu gente, tu sector y tu empresa.",
        href: "/corporate",
      },
      {
        title: "Kids & Teens",
        tag: "Un buen comienzo",
        body: "Enseñanza que construye confianza, curiosidad y una base sólida.",
        href: "/programs/langia-4-kids-n-teens",
      },
      {
        title: "Test Prep",
        tag: "Una meta a la vista",
        body: "Preparación enfocada en el examen y en la oportunidad que viene después.",
        href: "/programs/test-prep",
      },
      {
        title: "Talkin’ Club",
        tag: "Encuentra tu voz",
        body: "Práctica privada de conversación para comunicarte con más naturalidad y confianza.",
        href: "/programs/talkin-club",
      },
    ],
    photoAlts: [
      "Una emprendedora concentrada en una clase en vivo desde su casa",
      "Un equipo internacional conversando sobre una oportunidad de negocio",
    ],
  },
  journey: {
    label: "03 / Cómo funciona Langia",
    title: "Una ruta clara para avanzar.",
    body: "Desde tu primera conversación hasta tu próxima meta, cada paso orienta el siguiente.",
    steps: [
      {
        title: "Conoce tu punto de partida",
        body: "Tu nivel, tus metas y las situaciones que te importan.",
      },
      {
        title: "Define tu plan personal",
        body: "Una ruta de aprendizaje pensada para tu nivel y tus ambiciones.",
      },
      {
        title: "Aprende en vivo",
        body: "Trabaja con tu profesor. Pregunta, habla, prueba y mejora.",
      },
      {
        title: "Llévalo a la práctica",
        body: "La práctica y las tareas de TailorED dan continuidad a tus clases.",
      },
      {
        title: "Observa lo que cambia",
        body: "Revisa tu progreso y enfoca mejor la próxima clase.",
      },
    ],
  },
  capabilities: {
    label: "04 / El sistema de aprendizaje",
    title: "Personal es más\nque una promesa.",
    body: "Un sistema conectado que hace útil tu contexto, enfoca tu práctica y muestra tu progreso.",
    groups: [
      {
        number: "01",
        title: "Pensado para tu mundo",
        body: "Un currículo adaptativo con progresión basada en el MCER, clases personalizadas y el vocabulario que tu trabajo necesita.",
        details: [
          "Currículo adaptativo",
          "Progresión MCER",
          "Vocabulario del sector",
          "Clases personalizadas",
        ],
      },
      {
        number: "02",
        title: "Conectado entre clases",
        body: "La preparación de clases con apoyo de IA, la práctica oral y las tareas personalizadas conectan lo que aprendes con lo que viene.",
        details: [
          "Generación de clases con IA",
          "Práctica oral",
          "Tareas personalizadas",
          "Orientación docente",
        ],
      },
      {
        number: "03",
        title: "Guiado por tu progreso",
        body: "La inteligencia del estudiante reúne el historial y las evidencias de aprendizaje. Tu profesor puede ver qué funciona y dónde enfocar.",
        details: [
          "Inteligencia del estudiante",
          "Historial de clases",
          "Seguimiento del progreso",
          "Interfaz multilingüe",
        ],
      },
    ],
  },
  listening: {
    label: "05 / Inglés en el mundo real",
    title: "El mundo no habla\ncon un solo acento.",
    body: "Tu próxima conversación puede ser con alguien de Londres, São Paulo, Mumbai o Nueva York. Aprende a comprender el inglés que realmente vas a escuchar.",
    accents: [
      "Estadounidense",
      "Británico",
      "Indio",
      "Latinoamericano",
      "Europeo",
      "Y muchos más",
    ],
    foot: "Práctica de escucha internacional, con dificultad y ritmo ajustados a tu nivel.",
    caption: "Un idioma. Muchas formas de sonar como tú.",
    alt: "Profesionales de distintos orígenes internacionales intercambiando ideas",
    tags: [
      "Acentos globales",
      "Velocidad según tu nivel",
      "Situaciones reales",
    ],
  },
  statement: {
    label: "Tu próximo capítulo",
    title: "Que tu inglés avance\nal ritmo de tu carrera.",
    cta: "Cuéntanos a dónde vas",
    secondary: "Aprendizaje para tu equipo",
  },
  outcomes: {
    label: "06 / Lo que quieres lograr",
    title: "Más que saber.\nEstar preparado.",
    body: "Construye el lenguaje para los momentos que quieres manejar con confianza.",
    items: [
      "Una voz clara en la reunión.",
      "Una mejor conversación con clientes.",
      "Un nuevo capítulo en otro país.",
    ],
    cta: "Encuentra tu punto de partida",
    alt: "Una estudiante dedicando tiempo a la práctica de idiomas",
  },
  resources: {
    label: "07 / Un buen comienzo",
    title: "Elige tu próximo paso.",
    items: [
      {
        title: "Conoce tu nivel",
        body: "Empieza con tu nivel y tus metas.",
        href: "/test-your-english-level",
      },
      {
        title: "Cómo funciona TailorED",
        body: "Conoce el sistema detrás de tu aprendizaje.",
        href: "#tailored",
      },
      {
        title: "Nuestra metodología",
        body: "Excelentes profesores. Tecnología útil.",
        href: "/about",
      },
      {
        title: "Explora los programas",
        body: "Encuentra la ruta para tu momento.",
        href: "/programs",
      },
      {
        title: "Aprendizaje corporativo",
        body: "El lenguaje que tu equipo necesita.",
        href: "/corporate",
      },
    ],
  },
  faq: {
    label: "Antes de empezar",
    title: "Buenas preguntas.",
    items: [
      {
        question: "¿Las clases son en vivo?",
        answer:
          "Sí. Aprendes con un profesor que dirige la práctica, da retroalimentación y mantiene el enfoque en tus metas.",
      },
      {
        question: "¿TailorED reemplaza a mi profesor?",
        answer:
          "No. La IA apoya la preparación de clases y la práctica personalizada. Tu profesor dirige el aprendizaje y usa tu progreso para decidir el siguiente paso.",
      },
      {
        question: "¿Puedo aprender otro idioma además de inglés?",
        answer:
          "Langia también ofrece español, francés y portugués. Confirmamos el programa y el formato disponibles al conversar sobre tus metas.",
      },
      {
        question: "¿Langia puede trabajar con mi empresa?",
        answer:
          "Sí. El programa Corporate prepara a los equipos para comunicarse con clientes, colegas y mercados internacionales.",
      },
    ],
  },
  footer: {
    title: "¿A dónde vas\nahora?",
    cta: "Conversemos",
    brand: "Inglés para quienes van más allá.",
    language: "Idioma del sitio",
    copyright: "Langia Language Solutions LLC. Todos los derechos reservados.",
  },
};

const pt: PremiumHomeCopy = {
  skip: "Ir para o conteúdo",
  hero: {
    label: "Langia Language Solutions",
    lines: ["Inglês para quem", "vai mais longe."],
    body: "Aprendizagem de idiomas ao vivo, pensada para suas metas, seu setor, seu nível e sua maneira de se comunicar.",
    primary: "Comece seu caminho",
    secondary: "Explore os programas",
    note: "Excelentes professores. Aprendizagem que se adapta a você.",
    languages: "Inglês · Espanhol · Francês · Português",
    alt: "Uma profissional preparando uma reunião internacional em um escritório ao anoitecer",
  },
  trust: {
    label: "Para as conversas que fazem você avançar",
    industries: [
      "Negócios e liderança",
      "Direito e serviços profissionais",
      "Empreendedorismo",
      "Vendas e equipes internacionais",
    ],
    note: "Aprendizagem pensada para seu mundo profissional.",
  },
  tailored: {
    label: "01 / Langia TailorED",
    title: "Um grande professor.\nUm caminho que conhece você.",
    body: "Seu professor traz o discernimento. TailorED traz o contexto. Juntos, tornam cada aula mais relevante para onde você está e aonde quer chegar.",
    cta: "Conheça nossa abordagem",
    human: "Guiado por pessoas. Apoiado por IA. Sempre pessoal.",
    humanBody:
      "A IA ajuda seu professor a preparar aulas, conectar evidências de aprendizagem e personalizar a prática. Seu professor conduz a conversa, dá feedback e decide o próximo passo.",
    contextLabel: "Pensado para você",
    context: [
      "Seu nível e suas metas",
      "Profissão e setor",
      "Vocabulário necessário",
      "Desempenho anterior",
      "Pontos fortes e dificuldades",
      "Histórico de aulas",
      "Prática e tarefas",
      "Progresso ao longo do tempo",
    ],
    example: "Percurso de aprendizagem ilustrativo",
    tabs: ["Aula ao vivo", "Prática", "Progresso"],
    profile: "Inglês profissional",
    level: "B1 / Intermediário",
    industry: "Direito e negócios",
    goal: "Comunicar uma recomendação clara",
    panelTitles: [
      "Apresente seu argumento.",
      "Continue a conversa.",
      "A próxima aula começa aqui.",
    ],
    panelBodies: [
      "Discuta o caso de um cliente, compare opções e apresente sua recomendação com seu professor.",
      "Retome a linguagem da sua aula. Ouça, ensaie e aplique em uma nova situação.",
      "Seu professor conecta o histórico de aulas, seus pontos fortes e o que precisa desenvolver para planejar o próximo passo.",
    ],
    panelLabels: [
      "O foco de hoje",
      "Entre as aulas",
      "Evidências de aprendizagem",
    ],
    vocabulary: "Linguagem útil",
    terms: [
      "We recommend…",
      "The main consideration…",
      "An alternative would be…",
    ],
    teacher: "Orientação do professor em cada passo",
    previewNote:
      "Exemplo de como a aprendizagem se conecta; não é o registro de um aluno.",
  },
  programs: {
    label: "02 / Encontre sua direção",
    title: "Ambições diferentes.\nA mesma atenção pessoal.",
    body: "Um novo cargo. Uma equipe que cresce. Uma grande primeira oportunidade. Escolha a aprendizagem para seu próximo capítulo.",
    all: "Compare os programas",
    items: [
      {
        title: "Adultos",
        tag: "Para seu próximo passo",
        body: "Aprendizagem pessoal ao vivo para o trabalho, as viagens e as conversas que vêm pela frente.",
        href: "/programs/langia-online",
      },
      {
        title: "Corporate",
        tag: "Para equipes que cruzam fronteiras",
        body: "Aprendizagem de idiomas pensada para sua equipe, seu setor e sua empresa.",
        href: "/corporate",
      },
      {
        title: "Kids & Teens",
        tag: "Um bom começo",
        body: "Ensino que constrói confiança, curiosidade e uma base sólida.",
        href: "/programs/langia-4-kids-n-teens",
      },
      {
        title: "Test Prep",
        tag: "Uma meta à vista",
        body: "Preparação focada no exame e na oportunidade que vem depois.",
        href: "/programs/test-prep",
      },
      {
        title: "Talkin’ Club",
        tag: "Encontre sua voz",
        body: "Prática particular de conversação para se comunicar com mais naturalidade e confiança.",
        href: "/programs/talkin-club",
      },
    ],
    photoAlts: [
      "Uma empreendedora concentrada em uma aula ao vivo em casa",
      "Uma equipe internacional discutindo uma oportunidade de negócios",
    ],
  },
  journey: {
    label: "03 / Como funciona a Langia",
    title: "Um caminho claro para avançar.",
    body: "Da primeira conversa à próxima meta, cada passo orienta o seguinte.",
    steps: [
      {
        title: "Conheça seu ponto de partida",
        body: "Seu nível, suas metas e as situações que importam para você.",
      },
      {
        title: "Defina seu plano pessoal",
        body: "Um percurso de aprendizagem pensado para seu nível e suas ambições.",
      },
      {
        title: "Aprenda ao vivo",
        body: "Trabalhe com seu professor. Pergunte, fale, tente e melhore.",
      },
      {
        title: "Coloque em prática",
        body: "A prática e as tarefas do TailorED dão continuidade às suas aulas.",
      },
      {
        title: "Veja o que está mudando",
        body: "Revise seu progresso e dê mais foco à próxima aula.",
      },
    ],
  },
  capabilities: {
    label: "04 / O sistema de aprendizagem",
    title: "Pessoal é mais\nque uma promessa.",
    body: "Um sistema conectado que torna seu contexto útil, sua prática focada e seu progresso visível.",
    groups: [
      {
        number: "01",
        title: "Pensado para seu mundo",
        body: "Um currículo adaptativo com progressão baseada no CEFR, aulas personalizadas e o vocabulário que seu trabalho exige.",
        details: [
          "Currículo adaptativo",
          "Progressão CEFR",
          "Vocabulário do setor",
          "Aulas personalizadas",
        ],
      },
      {
        number: "02",
        title: "Conectado entre as aulas",
        body: "Preparação de aulas com apoio de IA, prática oral e tarefas personalizadas conectam o que acontece na aula com o próximo passo.",
        details: [
          "Geração de aulas com IA",
          "Prática oral",
          "Tarefas personalizadas",
          "Orientação docente",
        ],
      },
      {
        number: "03",
        title: "Guiado por seu progresso",
        body: "A inteligência do aluno reúne o histórico e as evidências de aprendizagem. Seu professor pode ver o que funciona e onde focar.",
        details: [
          "Inteligência do aluno",
          "Histórico de aulas",
          "Acompanhamento do progresso",
          "Interface multilíngue",
        ],
      },
    ],
  },
  listening: {
    label: "05 / Inglês no mundo real",
    title: "O mundo não fala\ncom um só sotaque.",
    body: "Sua próxima conversa pode ser com alguém de Londres, São Paulo, Mumbai ou Nova York. Aprenda a compreender o inglês que você realmente vai ouvir.",
    accents: [
      "Americano",
      "Britânico",
      "Indiano",
      "Latino-americano",
      "Europeu",
      "E muitos outros",
    ],
    foot: "Prática de escuta internacional, com dificuldade e ritmo ajustados ao seu nível.",
    caption: "Um idioma. Muitas maneiras de soar como você.",
    alt: "Profissionais de diferentes origens internacionais trocando ideias",
    tags: [
      "Sotaques globais",
      "Velocidade conforme seu nível",
      "Situações reais",
    ],
  },
  statement: {
    label: "Seu próximo capítulo",
    title: "Que seu inglês avance\nno ritmo da sua carreira.",
    cta: "Conte aonde você vai",
    secondary: "Aprendizagem para sua equipe",
  },
  outcomes: {
    label: "06 / O que você quer alcançar",
    title: "Mais que saber.\nEstar preparado.",
    body: "Construa a linguagem para os momentos que quer enfrentar com confiança.",
    items: [
      "Uma voz clara na reunião.",
      "Uma conversa melhor com clientes.",
      "Um novo capítulo em outro país.",
    ],
    cta: "Encontre seu ponto de partida",
    alt: "Uma aluna dedicando tempo à prática de idiomas",
  },
  resources: {
    label: "07 / Um bom começo",
    title: "Escolha seu próximo passo.",
    items: [
      {
        title: "Conheça seu nível",
        body: "Comece com seu nível e suas metas.",
        href: "/test-your-english-level",
      },
      {
        title: "Como funciona o TailorED",
        body: "Conheça o sistema por trás da aprendizagem.",
        href: "#tailored",
      },
      {
        title: "Nossa metodologia",
        body: "Excelentes professores. Tecnologia útil.",
        href: "/about",
      },
      {
        title: "Explore os programas",
        body: "Encontre o caminho para seu momento.",
        href: "/programs",
      },
      {
        title: "Aprendizagem corporativa",
        body: "A linguagem que sua equipe precisa.",
        href: "/corporate",
      },
    ],
  },
  faq: {
    label: "Antes de começar",
    title: "Boas perguntas.",
    items: [
      {
        question: "As aulas são ao vivo?",
        answer:
          "Sim. Você aprende com um professor que conduz a prática, dá feedback e mantém o foco em suas metas.",
      },
      {
        question: "O TailorED substitui meu professor?",
        answer:
          "Não. A IA apoia a preparação das aulas e a prática personalizada. Seu professor conduz a aprendizagem e usa seu progresso para decidir o próximo passo.",
      },
      {
        question: "Posso aprender outro idioma além do inglês?",
        answer:
          "A Langia também oferece espanhol, francês e português. Confirmamos o programa e o formato disponíveis ao conversar sobre suas metas.",
      },
      {
        question: "A Langia pode trabalhar com minha empresa?",
        answer:
          "Sim. O programa Corporate prepara equipes para se comunicar com clientes, colegas e mercados internacionais.",
      },
    ],
  },
  footer: {
    title: "Aonde você vai\nagora?",
    cta: "Vamos conversar",
    brand: "Inglês para quem vai mais longe.",
    language: "Idioma do site",
    copyright: "Langia Language Solutions LLC. Todos os direitos reservados.",
  },
};

export const premiumHomepageContent: Record<SiteLanguage, PremiumHomeCopy> = {
  en,
  es,
  pt,
};
