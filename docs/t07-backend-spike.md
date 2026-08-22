# T-07 — Spike backend propio: Hono + Drizzle

Ticket Sun: `sun-76d214836139` · Fase P03 · Gate `NG-ACEL-03`

Decisión completa en `docs/decision-baas.md`. Este spike materializa la vía
elegida para el piloto:

- `src/api/app.ts` — Hono con `/health`.
- `src/db/schema.ts` — Drizzle schema (tipos E2E, SQL-first).
- `src/db/index.ts` — Drizzle sobre SQLite Bun (swap a Postgres en prod).

## Por qué backend propio aquí
Control total para los gates Nova (oracles locales), cero vendor y coste
predecible. Supabase queda como vía rápida para MVPs; Convex para real-time
intensivo — criterios en la matriz.

## Trazabilidad
Informe §4.10-4.12 · Roadmap P03 · Gate `NG-ACEL-03` · Trial `NT-ACEL-03`
