# AquaKids — Natação para Crianças — regras do projeto

Regras que toda mudança deste projeto mantém. A IA da Micronuage lê este arquivo a cada pedido e acrescenta as decisões que tomar.

- Os dados do negócio (nome, contatos, menu, rodapé) ficam em `src/content/site.ts`.
- As listas de cada página (programas, preços, perguntas) ficam em `src/content/pages/<Página>.ts`, tipadas pela seção que as mostra; a página guarda os títulos e textos.
- Formulários enviam com `submitLead()` de `src/lib/micronuage.ts` (as mensagens chegam na caixa de Leads da Micronuage); contas e dados salvos usam `@micronuage/sdk` e `data/model.json`.
- Cores, fontes e cantos vêm dos tokens de `src/index.css` (`@theme`): primary #2A9DF4 (azul-confiança), accent #FFD700 (amarelo-energia), background #f0fdfa, foreground #1e293b, fontes Montserrat (títulos) e Open Sans (texto), cantos 1.25rem. Nenhum componente fixa uma cor fora dos tokens.
- A coleção "matriculas" em `data/model.json` salva os dados do formulário de matrícula; pais (role "pai") veem apenas seus registros.
- Ícones são do `lucide-react`; nunca emoji no lugar de ícone.
- Cada página tem sua rota em `src/routes.ts`; `npm test` confere que o menu só leva a páginas que existem.
- Número de registro profissional, CNPJ, anos de escola e contagens de alunos só entram quando o cliente informar.
- Preços exibidos são de exemplo até o cliente confirmar os reais.
- Fotos são de exemplo (piscinas genéricas) até o cliente enviar as da escola.
- O site nunca fica sem foto: enquanto o cliente não envia as dele, usa fotos de exemplo do banco verificado da Micronuage, do assunto do negócio.
- Pagamento da aula experimental (R$ 29,90, único) via Stripe na página de Matrícula; valor em `site.integrations.stripeTrialAmountCents`.
