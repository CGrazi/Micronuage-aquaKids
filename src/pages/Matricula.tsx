import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, Clock, CreditCard, MapPin, Timer, XCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Faq } from "@/components/sections/Faq";
import { site } from "@/content/site";
import { aulaExperimental, programas } from "@/content/pages/Matricula";
import { submitLead } from "@/lib/micronuage";
import { auth, db, payments, useUser } from "@micronuage/sdk";

const input = "h-12 w-full rounded-site border border-current/20 bg-transparent px-4 outline-none focus:border-primary";

export default function MatriculaPage() {
  const { user } = useUser();
  const [params] = useSearchParams();
  const checkoutStatus = params.get("checkout"); // "success" | "cancelled" | null

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
    programa: "",
  });

  const [payStatus, setPayStatus] = useState<"idle" | "loading" | "error">("idle");
  const [payError, setPayError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitLead({
        name: form.nome,
        email: form.email,
        phone: form.telefone || undefined,
        message: `Idade da criança: ${form.idade} · Programa: ${form.programa}`,
        source: "matricula",
      });
      if (user) {
        await db.create("matriculas", {
          nome_responsavel: form.nome,
          email: form.email,
          telefone: form.telefone,
          idade_crianca: form.idade,
          programa_escolhido: form.programa,
          pai: user.id,
        });
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function handlePayment() {
    setPayStatus("loading");
    setPayError("");
    try {
      await payments.checkout({
        amountCents: site.integrations.stripeTrialAmountCents,
        currency: "brl",
        returnPath: "/matricula",
      });
    } catch (err: unknown) {
      setPayStatus("error");
      setPayError(err instanceof Error ? err.message : "Não foi possível iniciar o pagamento. Verifique se o Stripe está conectado.");
    }
  }

  return (
    <>
      <title>Matrícula · AquaKids — Natação para Crianças</title>
      <meta name="description" content="Agende a aula experimental gratuita e matricule seu filho na AquaKids. Sem taxa de matrícula, sem fidelidade." />

      {/* Mensagem de retorno do checkout Stripe */}
      {checkoutStatus === "success" && (
        <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
          <div className="flex items-center gap-3 rounded-site border border-green-200 bg-green-50 p-5">
            <CheckCircle className="h-6 w-6 shrink-0 text-green-600" aria-hidden="true" />
            <div>
              <p className="font-heading font-semibold text-green-800">Pagamento confirmado!</p>
              <p className="text-sm text-green-700">Sua aula experimental está paga e reservada. Enviaremos os detalhes por e-mail em breve.</p>
            </div>
          </div>
        </div>
      )}
      {checkoutStatus === "cancelled" && (
        <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
          <div className="flex items-center gap-3 rounded-site border border-amber-200 bg-amber-50 p-5">
            <XCircle className="h-6 w-6 shrink-0 text-amber-600" aria-hidden="true" />
            <div>
              <p className="font-heading font-semibold text-amber-800">Pagamento não realizado</p>
              <p className="text-sm text-amber-700">O pagamento foi cancelado. Você pode tentar novamente abaixo quando quiser.</p>
            </div>
          </div>
        </div>
      )}

      {/* Detalhes da aula experimental */}
      <Section id="aula-experimental" tone="soft">
        <SectionHeading
          title="Aula experimental gratuita"
          intro="Conheça a escola antes de se comprometer. A primeira aula é por nossa conta."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-site border border-current/10 p-6 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </span>
            <p className="font-heading text-sm font-semibold">Local</p>
            <p className="text-sm opacity-75">{aulaExperimental.local}</p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-site border border-current/10 p-6 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-5 w-5" />
            </span>
            <p className="font-heading text-sm font-semibold">Horários disponíveis</p>
            <p className="text-sm opacity-75">{aulaExperimental.horarios}</p>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-site border border-current/10 p-6 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Timer className="h-5 w-5" />
            </span>
            <p className="font-heading text-sm font-semibold">Duração</p>
            <p className="text-sm opacity-75">{aulaExperimental.duracao}</p>
          </div>
        </div>
      </Section>

      {/* Formulário de matrícula */}
      <Section id="formulario">
        <SectionHeading
          title="Agende a aula experimental gratuita"
          intro="Preencha o formulário e confirmamos o melhor horário em até 1 dia útil."
        />
        {status === "sent" ? (
          <div className="mx-auto max-w-lg rounded-site border border-primary/30 bg-primary/5 p-8 text-center">
            <p className="font-heading text-xl font-semibold text-primary">
              Sua vaga está reservada!
            </p>
            <p className="mt-2 opacity-75">
              Enviaremos detalhes por e-mail em 1h.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
            <input
              required
              className={input}
              placeholder="Nome do responsável"
              autoComplete="name"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            />
            <input
              required
              type="email"
              className={input}
              placeholder="Seu e-mail"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              required
              type="tel"
              className={input}
              placeholder="Telefone / WhatsApp"
              autoComplete="tel"
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            />
            <input
              required
              className={input}
              placeholder="Idade da criança (ex: 4 anos)"
              value={form.idade}
              onChange={(e) => setForm({ ...form, idade: e.target.value })}
            />
            <select
              required
              className={input + " appearance-none"}
              value={form.programa}
              onChange={(e) => setForm({ ...form, programa: e.target.value })}
            >
              <option value="" disabled>
                Programa desejado
              </option>
              {programas.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={status === "sending"}
              className="h-12 w-full rounded-site bg-primary font-medium text-white hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? site.ui.sending : "Quero agendar"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600">{site.ui.error}</p>
            )}
            {!user && (
              <p className="text-center text-xs opacity-60">
                Dica: crie uma conta para acompanhar sua solicitação de
                matrícula.
              </p>
            )}
          </form>
        )}
      </Section>

      {/* Pagamento da aula experimental via Stripe */}
      <Section id="pagamento" tone="soft">
        <div className="mx-auto max-w-lg text-center">
          <span className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CreditCard className="h-7 w-7" />
          </span>
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Pague sua aula experimental
          </h2>
          <p className="mt-3 opacity-75">
            Garanta a vaga do seu filho com o pagamento único de{" "}
            <span className="font-semibold text-foreground">R$ 29,90</span>.
            O valor é cobrado uma única vez, sem mensalidade ou fidelidade.
          </p>
          <button
            type="button"
            onClick={handlePayment}
            disabled={payStatus === "loading"}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-site bg-primary px-8 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {payStatus === "loading" ? "Redirecionando…" : "Pagar R$ 29,90"}
          </button>
          {payStatus === "error" && (
            <p className="mt-4 text-sm text-red-600">{payError}</p>
          )}
          <p className="mt-4 text-xs opacity-60">
            Pagamento seguro processado pelo Stripe. Você será redirecionado para concluir.
          </p>
        </div>
      </Section>

      {/* FAQ sobre matrícula */}
      <Faq
        id="faq"
        tone="default"
        title="Dúvidas sobre a matrícula"
        items={[
          {
            question: "A aula experimental é realmente gratuita?",
            answer:
              "Sim. A primeira aula é gratuita e sem compromisso. É a oportunidade de seu filho conhecer o professor, a turma e a piscina antes de decidir.",
          },
          {
            question: "Preciso agendar ou posso aparecer?",
            answer:
              "Pedimos que agende pelo formulário ou WhatsApp para garantir vaga na turma da idade correta e preparar a recepção.",
          },
          {
            question: "Existe taxa de matrícula?",
            answer:
              "Não cobramos taxa de matrícula. O pagamento é mensal, sem contrato de fidelidade. O cancelamento pode ser feito com 30 dias de aviso.",
          },
          {
            question: "Quais formas de pagamento são aceitas?",
            answer:
              "Aceitamos cartão de crédito, débito, PIX e boleto bancário.",
          },
        ]}
      />
    </>
  );
}
