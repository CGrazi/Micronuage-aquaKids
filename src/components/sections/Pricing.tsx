import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeading, type Tone } from "@/components/Section";
import { cn, toList } from "@/lib/utils";

type Plan = { name?: string; price?: string; period?: string; description?: string; badge?: string; features?: string | string[]; url?: string; secondaryText?: string; secondaryUrl?: string };

export function Pricing({ id, tone, title, intro, message, buttonText, items = [] }: { id?: string; tone?: Tone; title?: string; intro?: string; message?: string; buttonText?: string; columns?: string; items?: Plan[] }) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} intro={intro} />
      <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((plan, i) => (
          <article key={i} className={cn("flex flex-col rounded-site border p-7", plan.badge ? "border-primary shadow-xl" : "border-current/10")}>
            {plan.badge && <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">{plan.badge}</span>}
            {plan.name && <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>}
            {plan.description && <p className="mt-2 opacity-75">{plan.description}</p>}
            <p className="mt-6">
              <span className="font-heading text-4xl font-semibold">{plan.price}</span>
              {plan.period && <span className="ml-1 opacity-70">{plan.period}</span>}
            </p>
            <ul className="mt-6 flex-1 space-y-2">
              {toList(plan.features).map((feature, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {(buttonText || plan.url) && (
              <ButtonLink href={plan.url} variant={plan.badge ? "primary" : "outline"} className="mt-8">
                {buttonText || plan.name}
              </ButtonLink>
            )}
            {plan.secondaryText && <ButtonLink href={plan.secondaryUrl} variant="ghost" className="mt-2">{plan.secondaryText}</ButtonLink>}
          </article>
        ))}
      </div>
      {message && <p className="mt-8 text-center text-sm opacity-70">{message}</p>}
    </Section>
  );
}
