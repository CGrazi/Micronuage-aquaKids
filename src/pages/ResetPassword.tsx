import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { auth } from "@micronuage/sdk";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const isInvite = params.get("invite") === "1";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password !== confirm) {
      setError("As senhas não conferem.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      await auth.resetPassword({ token, password });
      setStatus("done");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Não foi possível redefinir a senha.");
    }
  }

  return (
    <>
      <title>Redefinir senha · AquaKids</title>
      <meta name="description" content="Redefina sua senha de acesso à AquaKids." />
      <Section>
        <div className="mx-auto max-w-md">
          <h1 className="font-heading text-3xl font-semibold">
            {isInvite ? "Crie sua senha" : "Redefinir senha"}
          </h1>
          {status === "done" ? (
            <div className="mt-6 rounded-site border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="font-medium text-primary">Senha definida com sucesso!</p>
              <ButtonLink href="/matricula" className="mt-4">
                Ir para a matrícula
              </ButtonLink>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                required
                type="password"
                className="h-12 w-full rounded-site border border-current/20 bg-transparent px-4 outline-none focus:border-primary"
                placeholder="Nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                required
                type="password"
                className="h-12 w-full rounded-site border border-current/20 bg-transparent px-4 outline-none focus:border-primary"
                placeholder="Confirmar senha"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="h-12 w-full rounded-site bg-primary font-medium text-white hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? "Salvando…" : "Salvar senha"}
              </button>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
