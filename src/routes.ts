import type { ComponentType } from "react";
import IndexPage from "@/pages/Index";
import ProgramasPage from "@/pages/Programas";
import MatriculaPage from "@/pages/Matricula";
import ResetPasswordPage from "@/pages/ResetPassword";

/** Todas as páginas do site. O menu (src/content/site.ts) aponta para estes caminhos. */
export const routes: { path: string; name: string; Page: ComponentType }[] = [
  { path: "/", name: "AquaKids", Page: IndexPage },
  { path: "/programas", name: "Programas", Page: ProgramasPage },
  { path: "/matricula", name: "Matrícula", Page: MatriculaPage },
  { path: "/reset-password", name: "Redefinir senha", Page: ResetPasswordPage },
];
