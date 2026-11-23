import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Section, SectionHeading } from "@/components/Section";
import { featuresItems, pricingItems, faqItems } from "@/content/pages/Programas";

const comparisonRows = [
  { label: "Idade", baby: "6 meses a 3 anos", kids: "4 a 6 anos", junior: "7 a 10 anos", teen: "11 a 14 anos" },
  { label: "Duração da aula", baby: "30 min", kids: "45 min", junior: "45 min", teen: "50 min" },
  { label: "Frequência", baby: "2x/semana", kids: "2x/semana", junior: "2x/semana", teen: "2x/semana" },
  { label: "Turma", baby: "Até 5 duplas", kids: "Até 6 alunos", junior: "Até 6 alunos", teen: "Até 6 alunos" },
  { label: "Responsável na água", baby: "Sim", kids: "Não", junior: "Não", teen: "Não" },
  { label: "Foco principal", baby: "Adaptação e confiança", kids: "Flutuação e respiração", junior: "4 nados e técnica", teen: "Condicionamento e competição" },
];

export default function ProgramasPage() {
  return (
    <>
      <title>Programas · AquaKids — Natação para Crianças</title>
      <meta name="description" content="Programas de natação por faixa etária: Baby, Kids, Junior e Teen. Turmas pequenas e professores especializados." />
      <Features
        id="features"
        title="Programas por faixa etária"
        intro="Cada idade tem seu ritmo. Nossos programas respeitam o desenvolvimento de cada criança."
        layout="grid"
        items={featuresItems}
      />
      {/* Tabela comparativa */}
      <Section id="comparativo" tone="soft">
        <SectionHeading
          title="Compare os programas"
          intro="Veja as diferenças entre cada faixa etária e escolha o programa ideal para seu filho."
        />
        <div className="overflow-x-auto rounded-site border border-current/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-current/10 bg-primary/5">
                <th className="px-4 py-3 font-heading font-semibold">Característica</th>
                <th className="px-4 py-3 font-heading font-semibold">Baby</th>
                <th className="px-4 py-3 font-heading font-semibold">Kids</th>
                <th className="px-4 py-3 font-heading font-semibold">Junior</th>
                <th className="px-4 py-3 font-heading font-semibold">Teen</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-current/5 last:border-0">
                  <td className="px-4 py-3 font-medium">{row.label}</td>
                  <td className="px-4 py-3">{row.baby}</td>
                  <td className="px-4 py-3">{row.kids}</td>
                  <td className="px-4 py-3">{row.junior}</td>
                  <td className="px-4 py-3">{row.teen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Pricing
        id="pricing"
        tone="default"
        title="Valores por programa"
        buttonText="Agendar aula experimental"
        items={pricingItems}
      />
      <Faq
        id="faq"
        tone="soft"
        title="Perguntas sobre a metodologia"
        intro="Como ensinamos, como seu filho evolui e o que esperar das aulas."
        items={faqItems}
      />
    </>
  );
}
