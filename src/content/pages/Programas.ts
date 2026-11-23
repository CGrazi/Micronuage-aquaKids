import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";
import type { Features } from "@/components/sections/Features";
import type { Pricing } from "@/components/sections/Pricing";

/** As listas que a página "Programas" mostra. Edite aqui: src/pages/Programas.tsx as lê. */
export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  {
    "icon": "baby",
    "title": "Baby — 6 meses a 3 anos",
    "description": "Adaptação ao meio aquático com um responsável na água. Trabalhamos confiança, equilíbrio e estímulo sensorial com brincadeiras e músicas. Aulas de 30 minutos.",
    "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "icon": "waves",
    "title": "Kids — 4 a 6 anos",
    "description": "Primeiros movimentos de natação: flutuação, propulsão e respiração. Atividades lúdicas que desenvolvem coordenação e autonomia na água. Aulas de 45 minutos.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    "icon": "trophy",
    "title": "Junior — 7 a 10 anos",
    "description": "Aprendizado e aperfeiçoamento dos quatro nados (crawl, costas, peito e borboleta). Trabalho de resistência e técnica. Aulas de 45 minutos.",
    "image": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
  },
  {
    "icon": "zap",
    "title": "Teen — 11 a 14 anos",
    "description": "Aperfeiçoamento técnico, condicionamento físico e preparação para competições, se desejado. Aulas de 50 minutos.",
    "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
  }
];

export const pricingItems: NonNullable<ComponentProps<typeof Pricing>["items"]> = [
  {
    "name": "Baby",
    "price": "R$ 199",
    "period": "/mês",
    "description": "6 meses a 3 anos · 2x/semana · 30 min",
    "features": [
      "1 responsável na água",
      "Turma de até 5 duplas",
      "Material lúdico incluso"
    ],
    "url": "/matricula"
  },
  {
    "name": "Kids",
    "price": "R$ 249",
    "period": "/mês",
    "description": "4 a 6 anos · 2x/semana · 45 min",
    "badge": "Mais procurado",
    "features": [
      "Turma de até 6 alunos",
      "Material didático incluso",
      "Relatório de progresso trimestral"
    ],
    "url": "/matricula"
  },
  {
    "name": "Junior / Teen",
    "price": "R$ 279",
    "period": "/mês",
    "description": "7 a 14 anos · 2x/semana · 45–50 min",
    "features": [
      "Turma de até 6 alunos",
      "Avaliação técnica trimestral",
      "Preparação para competições (Teen)"
    ],
    "url": "/matricula"
  }
];

export const faqItems: NonNullable<ComponentProps<typeof Faq>["items"]> = [
  {
    "question": "Qual é a metodologia de ensino da AquaKids?",
    "answer": "Utilizamos uma abordagem lúdica e progressiva. Cada aula é planejada por faixa etária com atividades que respeitam o ritmo de desenvolvimento da criança. O objetivo é construir confiança na água antes de introduzir técnicas formais de nado."
  },
  {
    "question": "Como funciona a progressão entre os níveis?",
    "answer": "A cada trimestre, o professor avalia o desenvolvimento da criança e indica quando ela está pronta para o próximo nível. A transição é gradual: a criança participa de uma aula na nova turma antes de mudar definitivamente."
  },
  {
    "question": "Os professores têm formação específica em natação infantil?",
    "answer": "Sim. Todos os professores são formados em Educação Física com especialização em natação infantil e certificação em primeiros socorros. A equipe passa por treinamentos internos regulares sobre desenvolvimento infantil e segurança aquática."
  },
  {
    "question": "Como vocês lidam com crianças que têm medo de água?",
    "answer": "A adaptação é sempre gradual e sem pressão. Usamos brinquedos, músicas e jogos para criar associações positivas com a água. O professor respeita o tempo de cada criança e nunca força uma atividade. A maioria supera o medo nas primeiras semanas."
  },
  {
    "question": "Qual a proporção de alunos por professor?",
    "answer": "No máximo 6 alunos por professor nas turmas Kids, Junior e Teen. Na turma Baby, são até 5 duplas (criança + responsável) por professor. Isso garante atenção individual e segurança."
  }
];
