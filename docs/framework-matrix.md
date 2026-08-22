# T-08 — Matriz de frameworks por tipo de proyecto

Ticket Sun: `sun-17cae8925063` · Fase P03 · Gate `NG-ACEL-03`

| Tipo de proyecto | Framework | Por qué (evidencia informe §4) |
|---|---|---|
| **App full-stack interactiva** | **Next.js** (default) | Mayor ecosistema, RSC+server actions, hiring |
| App edge-first / portabilidad multi-runtime | Remix / React Router v7 | TTFB ~30% mejor en Cloudflare/Deno; modelo limpio; OpenAI/Shopify |
| Sitio de contenido / marketing / docs | **Astro 5** | LCP líder, islands, JS mínimo; satisfacción alta |
| Exploración / proyectos personales TS | TanStack Start (beta) | Vite-native + type-safe; "breakthrough 2026"; riesgo beta |

## Reglas de decisión
1. ¿Contenido > interacción? → Astro.
2. ¿Deploy edge multi-cloud y sin lock-in? → Remix/RRv7.
3. Resto full-stack React → Next.js.
4. TanStack Start solo greenfield personal hasta stable.

## Compatibilidad con el stack adoptado
Todos corren sobre el baseline P01/P02: pnpm+Bun(dev), Vite 8 (o Turbopack en
Next), Playwright E2E, Sentry/OTel, previews por PR.

## Trazabilidad
Informe §4.1-4.4 · Roadmap P03 · Gate `NG-ACEL-03` · Trial Nemesis `NT-ACEL-03`
