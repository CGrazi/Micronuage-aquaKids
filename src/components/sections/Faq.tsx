import { Plus } from "lucide-react";
import { Section, SectionHeading, type Tone } from "@/components/Section";

export function Faq({ id, tone, title, intro, items = [] }: { id?: string; tone?: Tone; title?: string; intro?: string; items?: { question?: string; answer?: string }[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} intro={intro} />
      <div className="mx-auto max-w-3xl divide-y divide-current/10 border-y border-current/10">
        {items.map((item, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
              {item.question}
              <Plus className="h-5 w-5 shrink-0 text-primary transition group-open:rotate-45" />
            </summary>
            <p className="mt-3 opacity-75">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
