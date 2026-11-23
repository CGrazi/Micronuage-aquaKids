import type { ComponentType } from "react";
import { Calendar, Rocket, Users } from "lucide-react";
import { Section, SectionHeading, type Tone } from "@/components/Section";
import { cn } from "@/lib/utils";

const columns = ["lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4"];

const stepIcons: ComponentType<{ className?: string }>[] = [Calendar, Users, Rocket];

export function Steps({ id, tone, title, intro, layout = "horizontal", items = [] }: { id?: string; tone?: Tone; title?: string; intro?: string; layout?: string; items?: { title?: string; description?: string }[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} intro={intro} />
      <ol className={cn("grid gap-8", layout === "vertical" ? "mx-auto max-w-2xl" : cn("sm:grid-cols-2", columns[Math.min(Math.max(items.length, 1), 4) - 1]))}>
        {items.map((item, i) => {
          const Icon = stepIcons[i % stepIcons.length];
          return (
            <li key={i} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                {item.title && <h3 className="font-heading text-lg font-semibold">{item.title}</h3>}
                {item.description && <p className="mt-1 opacity-75">{item.description}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
