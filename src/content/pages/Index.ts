import type { ComponentProps } from "react";
import type { Features } from "@/components/sections/Features";
import type { Hero } from "@/components/sections/Hero";
import type { Steps } from "@/components/sections/Steps";

/** As listas que a página inicial mostra. Edite aqui: src/pages/Index.tsx as lê. */
export const heroCards: NonNullable<ComponentProps<typeof Hero>["cards"]> = [
  {
    "title": "Baby (6 meses a 3 anos)",
    "description": "Adaptação ao meio aquático com acompanhamento dos pais.",
    "url": "/programas"
  },
  {
    "title": "Kids (4 a 6 anos)",
    "description": "Primeiros movimentos, flutuação e respiração.",
    "url": "/programas"
  },
  {
    "title": "Junior e Teen (7 a 14 anos)",
    "description": "Aperfeiçoamento de nados e resistência.",
    "url": "/programas"
  }
];

export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  {
    "icon": "waves",
    "title": "Piscina aquecida e segura",
    "description": "Água a temperatura ideal para crianças, com profundidade adequada a cada faixa etária e sistema de filtragem contínuo.",
    "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80"
  },
  {
    "icon": "users",
    "title": "Turmas pequenas",
    "description": "Máximo de 6 alunos por turma, garantindo atenção individual e progresso mais rápido para cada criança.",
    "image": "https://micronuage.com.br/api/projects/7cd0189a-c701-4289-9815-5745846b5717/assets/195d9bdc-f4cb-4105-bd4d-9383d947ff93"
  },
  {
    "icon": "heart",
    "title": "Professores especializados",
    "description": "Equipe formada em Educação Física com especialização em natação infantil e primeiros socorros.",
    "image": "https://micronuage.com.br/api/projects/7cd0189a-c701-4289-9815-5745846b5717/assets/75d01e27-fb50-4f7d-9dc4-01a807e5e697"
  }
];

/** Vídeos de depoimento dos pais (YouTube). Preencha com os links reais. */
export type TestimonialVideo = {
  title: string;
  url: string;
  parent: string;
};

export const testimonialVideos: TestimonialVideo[] = [];

export const stepsItems: NonNullable<ComponentProps<typeof Steps>["items"]> = [
  {
    "title": "Agende a aula experimental",
    "description": "Escolha o melhor dia e horário. A primeira aula é gratuita e sem compromisso."
  },
  {
    "title": "Conheça a turma",
    "description": "Seu filho participa de uma aula com a turma da idade dele e conhece o professor."
  },
  {
    "title": "Matricule e comece",
    "description": "Gostou? Faça a matrícula na hora e comece na semana seguinte."
  }
];
