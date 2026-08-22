# T-01 — Stack 2026 por defecto adoptado

Ticket Sun: `sun-7b38785dac70` · Fase P01 · Gate `NG-ACEL-01` · Trial Nemesis `NT-ACEL-01`

## Decisiones adoptadas (veredicto del informe)

| Capa | Herramienta | Veredicto | Evidencia |
|---|---|---|---|
| Gestor | pnpm | Adoptar | installs ~2-3x, sin phantom deps |
| Lint+format | Biome 2.2 | Adoptar | 1 tool vs ESLint+Prettier, Rust |
| Runtime dev | Bun | Adoptar | 3-4x más rápido; híbrido Bun dev → Node prod |
| Bundler | Vite 8 + Rolldown | Adoptar | builds 10-30x, consistencia dev/prod |
| E2E | Playwright MCP + Codegen | Adoptar | tests agentic en minutos |
| Review IA | CodeRabbit | Adoptar | 51.2% F1, mínimo ruido |
| CI/CD | GitHub Actions | Adoptar | test+lint+build por PR |
| Scaffold | better-t-stack / T3 | Adoptar | arranque estándar type-safe |

## Estado por fase (actualizado al cierre de P03)
- P01: pnpm, Biome, Bun, Vite 8, Playwright MCP, CodeRabbit, CI/CD — integrado.
- P02: Sentry/OTel, previews, benchmark build — integrado (T-04/T-06/T-09).
- P03: Hono+Drizzle spike, matriz frameworks, Greptile/Qodo, prototipos — integrado.

Nota de corrección Nemesis (NT-ACEL-01 v1.0): la sección "Diferidas" original
quedó obsoleta cuando las fases posteriores se integraron al mismo árbol; este
documento refleja el estado real del repo.

## Trazabilidad
- Informe: `C:\dev\informe-aceleracion-web.md` §6 (plan de adopción)
- Roadmap: `.opencode/plans/sun-74daa0f5/roadmap.md`
