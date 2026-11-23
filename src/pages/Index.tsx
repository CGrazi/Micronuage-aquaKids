import { PlayCircle, Video } from "lucide-react";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeading } from "@/components/Section";
import { Steps } from "@/components/sections/Steps";
import { ButtonLink } from "@/components/ui/button";
import { heroCards, featuresItems, stepsItems, testimonialVideos } from "@/content/pages/Index";

export default function IndexPage() {
  return (
    <>
      <title>AquaKids — Natação para Crianças</title>
      <meta name="description" content="Escola de natação para crianças com turmas por faixa etária, piscina aquecida e professores especializados. Agende uma aula experimental gratuita." />
      <Hero
        id="hero"
        eyebrow="Natação infantil"
        title="Natação Segura e Divertida para Seu Filho"
        subtitle="Turmas pequenas, piscina aquecida e professores certificados"
        buttonText="Agendar aula grátis"
        buttonUrl="/matricula"
        buttonSecondaryText="Conhecer programas"
        buttonSecondaryUrl="/programas"
        image="https://micronuage.com.br/api/projects/7cd0189a-c701-4289-9815-5745846b5717/assets/c102620a-94c2-4fe7-8244-c40bd3cfa58d"
        alignment="center"
        variant="cards"
        cards={heroCards}
      />
      <Features
        id="features"
        title="Por que a AquaKids?"
        layout="rows"
        items={featuresItems}
      />
      {/* Depoimentos em vídeo dos pais */}
      <Section id="depoimentos" tone="soft">
        <SectionHeading
          title="Depoimentos dos pais"
          intro="Veja o que as famílias dizem sobre a experiência na AquaKids."
        />
        {testimonialVideos.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialVideos.map((video, i) => {
              const videoId = video.url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)?.[1] ?? "";
              return (
                <figure key={i} className="overflow-hidden rounded-site border border-current/10 bg-background">
                  <div className="aspect-video w-full">
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={video.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <PlayCircle className="h-10 w-10 text-primary/50" />
                      </div>
                    )}
                  </div>
                  <figcaption className="p-4">
                    <p className="font-heading text-sm font-semibold">{video.title}</p>
                    <p className="mt-1 text-xs opacity-70">{video.parent}</p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-site border border-current/10 p-10 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Video className="h-7 w-7" />
            </span>
            <p className="text-lg font-medium">Vídeos em breve</p>
            <p className="opacity-70">
              Estamos preparando depoimentos em vídeo dos pais. Em breve você verá
              aqui as histórias reais de quem já confia na AquaKids.
            </p>
          </div>
        )}
      </Section>
      <Steps
        id="steps"
        title="Como começar em 3 passos"
        layout="horizontal"
        items={stepsItems}
      />
      {/* Chamada final */}
      <Section id="cta-final" tone="dark">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto para ver seu filho nadar com confiança?
          </h2>
          <p className="mt-4 text-lg opacity-80">
            Agende uma aula experimental gratuita e descubra por que famílias
            escolhem a AquaKids.
          </p>
          <div className="mt-8">
            <ButtonLink href="/matricula" variant="light">
              Agendar aula grátis
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
