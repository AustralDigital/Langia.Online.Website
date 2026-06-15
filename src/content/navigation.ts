import type { SiteLanguage } from "@/lib/language";

type NavigationItem = {
  title: string;
  description: string;
  href: string;
};

type NavigationContent = {
  logoAlt: string;
  programs: string;
  about: string;
  resources: string;
  contact: string;
  login: string;
  primaryCta: string;
  secondaryCta: string;
  mobileMenuLabel: string;
  closeMenuLabel: string;
  updates: string;
  emailPlaceholder: string;
  programsMenu: {
    heading: string;
    description: string;
    items: readonly NavigationItem[];
  };
  aboutMenu: {
    heading: string;
    description: string;
    items: readonly NavigationItem[];
  };
  footer: {
    brandLine: string;
    columns: readonly {
      title: string;
      links: readonly {
        label: string;
        href: string;
      }[];
    }[];
    languageLabel: string;
    copyright: string;
  };
};

export const navigationContent = {
  es: {
    logoAlt: "Langia",
    programs: "Programas",
    about: "Nosotros",
    resources: "Recursos",
    contact: "Contacto",
    login: "Iniciar sesión",
    primaryCta: "Empieza",
    secondaryCta: "Hablar con Langia",
    mobileMenuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
    updates: "Novedades",
    emailPlaceholder: "Correo electrónico",
    programsMenu: {
      heading: "Programas",
      description: "Elige la ruta que mejor se ajusta a tu momento.",
      items: [
        { title: "Langia Online", description: "Formación estructurada en vivo para adultos.", href: "/programs/langia-online" },
        { title: "Talkin’ Club", description: "Conversación privada para ganar fluidez y confianza.", href: "/programs/talkin-club" },
        { title: "Test Prep", description: "Preparación para exámenes y certificaciones.", href: "/programs/test-prep" },
        { title: "Langia 4 Kids n Teens", description: "Aprendizaje para niños y adolescentes.", href: "/programs/langia-4-kids-n-teens" },
        { title: "Ver todos los programas", description: "Compara las rutas disponibles.", href: "/programs" },
      ],
    },
    aboutMenu: {
      heading: "Nosotros",
      description: "Conoce Langia, nuestro método y nuestros servicios.",
      items: [
        { title: "Sobre Langia", description: "Quiénes somos y por qué existimos.", href: "/about" },
        { title: "Corporate", description: "Soluciones lingüísticas para compañías.", href: "/corporate" },
        { title: "Legal", description: "Políticas e información legal.", href: "/legal" },
        { title: "Trabaja con nosotros", description: "Oportunidades futuras para docentes.", href: "/work-with-us" },
      ],
    },
    footer: {
      brandLine: "Idiomas para personas que van más lejos.",
      columns: [
        {
          title: "Programas",
          links: [
            { label: "Langia Online", href: "/programs/langia-online" },
            { label: "Talkin’ Club", href: "/programs/talkin-club" },
            { label: "Test Prep", href: "/programs/test-prep" },
            { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
            { label: "Corporate", href: "/corporate" },
          ],
        },
        {
          title: "Compañía",
          links: [
            { label: "Sobre Langia", href: "/about" },
            { label: "Contacto", href: "/contact" },
            { label: "Trabaja con nosotros", href: "/work-with-us" },
            { label: "Legal", href: "/legal" },
          ],
        },
        {
          title: "Recursos",
          links: [
            { label: "Blog", href: "/blog" },
            { label: "Prueba de nivel", href: "/test-your-english-level" },
            { label: "Programas", href: "/programs" },
          ],
        },
      ],
      languageLabel: "Idioma",
      copyright: "Todos los derechos reservados.",
    },
  },
  pt: {
    logoAlt: "Langia",
    programs: "Programas",
    about: "Sobre nós",
    resources: "Recursos",
    contact: "Contato",
    login: "Entrar",
    primaryCta: "Começar",
    secondaryCta: "Falar com a Langia",
    mobileMenuLabel: "Abrir menu",
    closeMenuLabel: "Fechar menu",
    updates: "Novidades",
    emailPlaceholder: "E-mail",
    programsMenu: {
      heading: "Programas",
      description: "Escolha a rota que melhor combina com seu momento.",
      items: [
        { title: "Langia Online", description: "Formação estruturada ao vivo para adultos.", href: "/programs/langia-online" },
        { title: "Talkin’ Club", description: "Conversação privada para ganhar fluência e confiança.", href: "/programs/talkin-club" },
        { title: "Test Prep", description: "Preparação para exames e certificações.", href: "/programs/test-prep" },
        { title: "Langia 4 Kids n Teens", description: "Aprendizagem para crianças e adolescentes.", href: "/programs/langia-4-kids-n-teens" },
        { title: "Ver todos os programas", description: "Compare as rotas disponíveis.", href: "/programs" },
      ],
    },
    aboutMenu: {
      heading: "Sobre nós",
      description: "Conheça a Langia, nosso método e nossos serviços.",
      items: [
        { title: "Sobre a Langia", description: "Quem somos e por que existimos.", href: "/about" },
        { title: "Corporate", description: "Soluções linguísticas para empresas.", href: "/corporate" },
        { title: "Legal", description: "Políticas e informações legais.", href: "/legal" },
        { title: "Trabalhe conosco", description: "Oportunidades futuras para professores.", href: "/work-with-us" },
      ],
    },
    footer: {
      brandLine: "Idiomas para pessoas que vão mais longe.",
      columns: [
        {
          title: "Programas",
          links: [
            { label: "Langia Online", href: "/programs/langia-online" },
            { label: "Talkin’ Club", href: "/programs/talkin-club" },
            { label: "Test Prep", href: "/programs/test-prep" },
            { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
            { label: "Corporate", href: "/corporate" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Sobre a Langia", href: "/about" },
            { label: "Contato", href: "/contact" },
            { label: "Trabalhe conosco", href: "/work-with-us" },
            { label: "Legal", href: "/legal" },
          ],
        },
        {
          title: "Recursos",
          links: [
            { label: "Blog", href: "/blog" },
            { label: "Teste de nível", href: "/test-your-english-level" },
            { label: "Programas", href: "/programs" },
          ],
        },
      ],
      languageLabel: "Idioma",
      copyright: "Todos os direitos reservados.",
    },
  },
  en: {
    logoAlt: "Langia",
    programs: "Programs",
    about: "About us",
    resources: "Resources",
    contact: "Contact",
    login: "Log in",
    primaryCta: "Start",
    secondaryCta: "Talk to Langia",
    mobileMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    updates: "Updates",
    emailPlaceholder: "Email address",
    programsMenu: {
      heading: "Programs",
      description: "Choose the path that fits your moment.",
      items: [
        { title: "Langia Online", description: "Structured live training for adults.", href: "/programs/langia-online" },
        { title: "Talkin’ Club", description: "Private conversation practice for fluency and confidence.", href: "/programs/talkin-club" },
        { title: "Test Prep", description: "Preparation for exams and certifications.", href: "/programs/test-prep" },
        { title: "Langia 4 Kids n Teens", description: "Language learning for kids and teens.", href: "/programs/langia-4-kids-n-teens" },
        { title: "View all programs", description: "Compare available learning paths.", href: "/programs" },
      ],
    },
    aboutMenu: {
      heading: "About us",
      description: "Learn about Langia, our method, and our services.",
      items: [
        { title: "About Langia", description: "Who we are and why we exist.", href: "/about" },
        { title: "Corporate", description: "Language solutions for companies.", href: "/corporate" },
        { title: "Legal", description: "Policies and legal information.", href: "/legal" },
        { title: "Work with us", description: "Future opportunities for teachers.", href: "/work-with-us" },
      ],
    },
    footer: {
      brandLine: "Languages for people going places.",
      columns: [
        {
          title: "Programs",
          links: [
            { label: "Langia Online", href: "/programs/langia-online" },
            { label: "Talkin’ Club", href: "/programs/talkin-club" },
            { label: "Test Prep", href: "/programs/test-prep" },
            { label: "Langia 4 Kids n Teens", href: "/programs/langia-4-kids-n-teens" },
            { label: "Corporate", href: "/corporate" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About Langia", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Work with us", href: "/work-with-us" },
            { label: "Legal", href: "/legal" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Blog", href: "/blog" },
            { label: "Level test", href: "/test-your-english-level" },
            { label: "Programs", href: "/programs" },
          ],
        },
      ],
      languageLabel: "Language",
      copyright: "All rights reserved.",
    },
  },
} as const satisfies Record<SiteLanguage, NavigationContent>;
