import type { SiteLanguage } from "@/lib/language";

export type LearnerStory = {
  id: string;
  topic: string;
  quote: string;
  isPlaceholder: boolean;
  name?: string;
  role?: string;
  photo?: { src: string; alt: string };
};

type LearnerStoriesCopy = {
  eyebrow: string;
  title: string;
  body: string;
  selectorLabel: string;
  placeholderLabel: string;
  placeholderAttribution: string;
  stories: LearnerStory[];
};

// Replace each draft with an approved testimonial, add its permitted attribution
// and optional portrait, then set isPlaceholder to false. Keep all locales aligned.
export const learnerStoriesContent: Record<SiteLanguage, LearnerStoriesCopy> = {
  en: {
    eyebrow: "Learner stories",
    title: "A new language. A personal story.",
    body: "Behind every learning journey is something that matters to someone.",
    selectorLabel: "Choose a learner story",
    placeholderLabel: "Sample story — awaiting approved testimonial",
    placeholderAttribution: "Sample learner voice · attribution to follow",
    stories: [
      {
        id: "conversation",
        topic: "Everyday conversations",
        quote: "I wanted to stop rehearsing every sentence in my head and start enjoying the conversation.",
        isPlaceholder: true,
      },
      {
        id: "work",
        topic: "A voice at work",
        quote: "I have ideas I want to share. My goal is to feel as comfortable expressing them in another language as I do in my own.",
        isPlaceholder: true,
      },
      {
        id: "life-abroad",
        topic: "Feeling at home abroad",
        quote: "For me, learning a language is about the little things: meeting a neighbor, making a friend, and feeling part of a new place.",
        isPlaceholder: true,
      },
    ],
  },
  es: {
    eyebrow: "Historias de estudiantes",
    title: "Un nuevo idioma. Una historia personal.",
    body: "Detrás de cada camino de aprendizaje hay algo que le importa a alguien.",
    selectorLabel: "Elegir una historia de estudiante",
    placeholderLabel: "Historia de ejemplo — pendiente de un testimonio aprobado",
    placeholderAttribution: "Voz de estudiante de ejemplo · atribución pendiente",
    stories: [
      {
        id: "conversation",
        topic: "Conversaciones cotidianas",
        quote: "Quería dejar de ensayar cada frase en mi cabeza y empezar a disfrutar de la conversación.",
        isPlaceholder: true,
      },
      {
        id: "work",
        topic: "Una voz en el trabajo",
        quote: "Tengo ideas que quiero compartir. Mi meta es sentirme tan a gusto expresándolas en otro idioma como en el mío.",
        isPlaceholder: true,
      },
      {
        id: "life-abroad",
        topic: "Sentirse en casa en otro país",
        quote: "Para mí, aprender un idioma tiene que ver con las pequeñas cosas: conocer a un vecino, hacer una amistad y sentirme parte de un lugar nuevo.",
        isPlaceholder: true,
      },
    ],
  },
  pt: {
    eyebrow: "Histórias de alunos",
    title: "Um novo idioma. Uma história pessoal.",
    body: "Por trás de cada jornada de aprendizagem há algo que importa para alguém.",
    selectorLabel: "Escolher uma história de aluno",
    placeholderLabel: "História de exemplo — aguardando depoimento aprovado",
    placeholderAttribution: "Voz de aluno de exemplo · identificação pendente",
    stories: [
      {
        id: "conversation",
        topic: "Conversas do dia a dia",
        quote: "Eu queria parar de ensaiar cada frase na cabeça e começar a aproveitar a conversa.",
        isPlaceholder: true,
      },
      {
        id: "work",
        topic: "Uma voz no trabalho",
        quote: "Tenho ideias que quero compartilhar. Minha meta é me sentir tão à vontade para expressá-las em outro idioma quanto no meu.",
        isPlaceholder: true,
      },
      {
        id: "life-abroad",
        topic: "Sentir-se em casa em outro país",
        quote: "Para mim, aprender um idioma tem a ver com as pequenas coisas: conhecer um vizinho, fazer uma amizade e me sentir parte de um lugar novo.",
        isPlaceholder: true,
      },
    ],
  },
};
