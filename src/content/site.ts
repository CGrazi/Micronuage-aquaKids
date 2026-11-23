export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };
export type FooterLink = { label: string; url: string };

export type Site = {
  name: string;
  tagline: string;
  logo: string;
  language: string;
  contact: { email: string; phone: string; whatsapp: string; address: string };
  social: Record<string, string>;
  header: { ctaText: string; ctaUrl: string; sticky: boolean };
  navigation: NavItem[];
  footer: { tagline: string; variant: string; showSocial: boolean; bottomText: string; links: FooterLink[]; columns: { title: string; links: FooterLink[] }[]; ctaTitle: string; ctaText: string; ctaUrl: string; ctaButtonText: string; hours: { label: string; value: string }[]; legal: FooterLink[] };
  seo: { title: string; description: string };
  /** Textos que os componentes mostram por conta própria (botões, mensagens de formulário). */
  ui: Record<"send" | "sending" | "sent" | "error" | "name" | "email" | "phone" | "message" | "select" | "field" | "yes" | "challenge" | "result", string>;
  /** O projeto Micronuage a que este site pertence: leads vão para a caixa dele. */
  micronuage: { apiBase: string; slug: string };
  /** Constantes das integrações conectadas. */
  integrations: { stripeTrialAmountCents: number };
};

export const site: Site = {
  "name": "AquaKids",
  "tagline": "Natação para crianças com segurança e diversão.",
  "logo": "",
  "language": "pt-BR",
  "contact": {
    "email": "contato@aquakids.com.br",
    "phone": "(11) 99000-0000",
    "whatsapp": "5511990000000",
    "address": "Rua Exemplo, 456, Jardim Aquático, São Paulo/SP"
  },
  "social": {
    "instagram": "",
    "facebook": "",
    "youtube": ""
  },
  "header": {
    "ctaText": "Aula experimental grátis",
    "ctaUrl": "/matricula",
    "sticky": true
  },
  "navigation": [
    {
      "label": "Início",
      "href": "/"
    },
    {
      "label": "Programas",
      "href": "/programas"
    },
    {
      "label": "Matrícula",
      "href": "/matricula"
    }
  ],
  "footer": {
    "tagline": "AquaKids — natação para crianças com turmas pequenas, piscina aquecida e professores especializados.",
    "variant": "columns",
    "showSocial": true,
    "bottomText": "",
    "links": [],
    "ctaTitle": "Pronto para ver seu filho nadar com confiança?",
    "ctaText": "Agende uma aula experimental gratuita e descubra por que famílias escolhem a AquaKids.",
    "ctaUrl": "/matricula",
    "ctaButtonText": "Agendar aula experimental",
    "hours": [
      { "label": "Segunda a sexta", "value": "10h às 21h" },
      { "label": "Sábado", "value": "10h às 22h" },
      { "label": "Domingo e feriados", "value": "11h às 20h" }
    ],
    "legal": [
      { "label": "Termos de Uso", "url": "/" },
      { "label": "Política de Privacidade", "url": "/" }
    ],
    "columns": [
      {
        "title": "Programas",
        "links": [
          { "label": "Baby (6 meses a 3 anos)", "url": "/programas" },
          { "label": "Kids (4 a 6 anos)", "url": "/programas" },
          { "label": "Junior (7 a 10 anos)", "url": "/programas" },
          { "label": "Teen (11 a 14 anos)", "url": "/programas" }
        ]
      },
      {
        "title": "Institucional",
        "links": [
          { "label": "Matrícula", "url": "/matricula" },
          { "label": "Início", "url": "/" }
        ]
      }
    ]
  },
  "seo": {
    "title": "AquaKids — Natação para Crianças",
    "description": "Escola de natação para crianças com turmas por faixa etária, piscina aquecida e professores especializados. Agende uma aula experimental gratuita."
  },
  "ui": {
    "send": "Enviar",
    "sending": "Enviando…",
    "sent": "Mensagem enviada. Obrigado! Entraremos em contato em breve.",
    "error": "Não foi possível enviar. Tente de novo.",
    "name": "Nome do responsável",
    "email": "E-mail",
    "phone": "Telefone / WhatsApp",
    "message": "Mensagem",
    "select": "Selecione",
    "field": "Campo",
    "yes": "Sim",
    "challenge": "Desafio",
    "result": "Resultado"
  },
  "micronuage": {
    "apiBase": "https://micronuage.com.br",
    "slug": "novo-projeto-2"
  },
  "integrations": {
    "stripeTrialAmountCents": 2990
  }
};
