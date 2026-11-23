import { Camera, Mail, MapPin, Phone, Users, Waves } from "lucide-react";
import { SmartLink } from "@/components/SmartLink";
import { site } from "@/content/site";

const heading = "text-xs font-semibold uppercase tracking-[0.08em] text-footer-muted";
const link = "text-sm text-footer-text transition hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();
  const contact = [
    { icon: Phone, label: "WhatsApp", href: "https://wa.me/" + site.contact.whatsapp },
    { icon: Camera, label: "Instagram", href: site.social.instagram || "/" },
    { icon: Users, label: "Facebook", href: site.social.facebook || "/" },
    { icon: Mail, label: site.contact.email, href: "mailto:" + site.contact.email },
  ];

  return (
    <footer className="bg-footer text-footer-text">
      {/* Área principal: marca, colunas de links, contato e horários */}
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] lg:gap-8">
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            {site.logo ? (
              <img src={site.logo} alt={site.name} className="h-8 w-8 rounded-md object-cover" />
            ) : (
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white" aria-hidden="true">
                <Waves className="h-4 w-4" />
              </span>
            )}
            <p className="font-heading text-xl font-bold text-white">{site.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.footer.tagline}</p>
          <p className="mt-4 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-footer-muted" aria-hidden="true" />
            {site.contact.address}
          </p>
        </div>

        {site.footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className={heading}>{column.title}</p>
            <ul className="mt-4 space-y-3">
              {column.links.map((item) => (
                <li key={item.label + item.url}>
                  <SmartLink href={item.url} className={link}>
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className={heading}>Contato</p>
          <ul className="mt-4 space-y-3">
            {contact.map((row) => (
              <li key={row.label}>
                <SmartLink href={row.href} className={"flex items-center gap-2 " + link}>
                  <row.icon className="h-4 w-4 shrink-0 text-footer-muted" aria-hidden="true" />
                  {row.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={heading}>Horários</p>
          <ul className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            {site.footer.hours.map((row) => (
              <li key={row.label} className="contents">
                <span>{row.label}</span>
                <span className="whitespace-nowrap font-bold text-white">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barra inferior: copyright e links legais */}
      <div className="border-t border-footer-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-[13px] text-footer-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{site.footer.bottomText || "© " + year + " " + site.name + ". Todos os direitos reservados."}</p>
          <div className="flex flex-wrap gap-6">
            {site.footer.legal.map((item) => (
              <SmartLink key={item.label} href={item.url} className="underline transition hover:text-white">
                {item.label}
              </SmartLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
