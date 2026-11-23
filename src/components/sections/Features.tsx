import type { ComponentType } from "react";
import { Baby, Droplets, Heart, Shield, Star, Trophy, Users, Waves, Zap } from "lucide-react";
import { SmartLink } from "@/components/SmartLink";
import { Section, SectionHeading, type Tone } from "@/components/Section";
import { cn } from "@/lib/utils";

type Item = { icon?: string; title?: string; description?: string; image?: string; url?: string };

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  baby: Baby,
  droplets: Droplets,
  heart: Heart,
  shield: Shield,
  star: Star,
  trophy: Trophy,
  users: Users,
  waves: Waves,
  zap: Zap,
};

export function Features({ id, tone, eyebrow, title, intro, layout = "grid", linkText, items = [] }: { id?: string; tone?: Tone; eyebrow?: string; title?: string; intro?: string; layout?: string; linkText?: string; items?: Item[] }) {
  const rows = layout === "rows" || layout === "list";
  return (
    <Section id={id} tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <div className={cn("grid gap-6", rows ? "mx-auto max-w-3xl" : "sm:grid-cols-2 lg:grid-cols-3")}>
        {items.map((item, i) => {
          const Icon = item.icon ? iconMap[item.icon] : undefined;
          return (
            <article key={i} className={cn("rounded-site border border-current/10 p-7", rows && "flex flex-col gap-6 lg:flex-row")}>
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className={cn(
                    "rounded-site object-cover",
                    rows
                      ? "aspect-[16/10] w-full shrink-0 lg:aspect-[4/3] lg:w-56 xl:w-64"
                      : "mb-5 aspect-[16/10] w-full",
                  )}
                />
              ) : (
                Icon && (
                  <span className={cn("inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-site bg-primary/10 text-primary", rows && "mb-0 lg:mb-0", !rows && "mb-4")}>
                    <Icon className="h-5 w-5" />
                  </span>
                )
              )}
              <div className={cn(rows && "min-w-0 flex-1")}>
                {item.title && <h3 className="font-heading text-lg font-semibold">{item.title}</h3>}
                {item.description && <p className="mt-2 opacity-75">{item.description}</p>}
                {item.url && (
                  <SmartLink href={item.url} className="mt-4 inline-block text-sm font-medium text-primary">
                    {linkText || item.title}
                  </SmartLink>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
