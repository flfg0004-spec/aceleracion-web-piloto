# T-07 — Decisión de backend: Supabase vs Convex vs Hono+Drizzle

Ticket Sun: `sun-76d214836139` · Fase P03 · Gate `NG-ACEL-03`

## Matriz por tipo de app

| Contexto | Elección | Rationale (informe §4.10-4.12) |
|---|---|---|
| MVP / CRUD / panel con Postgres | **Supabase** | SQL real + auth/storage/realtime incluidos, self-hostable (escape hatch) |
| App colaborativa real-time intensiva | **Convex** | Queries reactivas <50ms a 5k conexiones, sin race conditions por diseño; lock-in propietario |
| Dominio complejo / control total / coste predecible | **Hono + Drizzle** | Edge multi-runtime, tipos E2E, migraciones SQL explícitas; sin vendor |

## Reglas
1. ¿Validar producto rápido? → Supabase.
2. ¿El core ES la colaboración en vivo? → Convex.
3. ¿Lógica de negocio como ventaja competitiva? → Hono+Drizzle.

## Para este piloto
Backend propio ligero **Hono + Drizzle** sobre el baseline TS — máxima
trazabilidad con los gates Nova y cero dependencia externa.

## Trazabilidad
Informe §4.10-4.12 · Roadmap P03 · Gate `NG-ACEL-03` · Trial Nemesis `NT-ACEL-03`
