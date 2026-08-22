# T-04 — Decisión de build: Vite 8 + Rolldown

Ticket Sun: `sun-17d4b07ffb0f` · Fase P02 · Gate `NG-ACEL-02`

## Medición real (este repo, 2026-08-22)

| Corrida | Tiempo |
|---|---|
| Cold (`bun --bun vite build`) | **718 ms** |
| Warm | **274 ms** |

Proyecto piloto (~10 módulos). Para escala en proyectos grandes, ver referencias
del informe en `benchmarks/build-benchmark.json` (10-30x vs webpack).

## Veredicto: Adoptar Vite 8 + Rolldown
1. Repo Vite-native — Turbopack solo aporta dentro de Next.js.
2. Consistencia dev/prod con el mismo motor Rust (Rolldown/Oxc).
3. Sub-300 ms warm elimina la fricción de build del loop diario.

## Cuándo revisitar
Si algún proyecto migrara a Next.js → Turbopack (HMR hoja +68%, cero config).
Criterio y umbral documentados; el oracle no cambia dentro de la ejecución.

## Trazabilidad
Informe §3.1-3.2 · Roadmap P02 · Gate `NG-ACEL-02` · Trial Nemesis `NT-ACEL-02`
