# Benchmark de build — baseline P02

Ticket Sun: `sun-17d4b07ffb0f` (T-04) · Fase P02 · Gate `NG-ACEL-02`

Estado inicial (referencia del informe, ago 2026 — se re-mide en T-04):

| Proyecto | Webpack 5 | Turbopack | Vite 8 + Rolldown |
|---|---|---|---|
| React medio (~500 módulos) | ~11 s | ~6 s | **~2 s** |
| Cal.com (real) | 187 s | 152 s (-19%) | n/a |
| Makerkit | n/a | **4.3x más rápido** | n/a |

## Decisión provisional
- **App Vite-native** → Vite 8 + Rolldown (10-30x vs webpack; dev≈prod).
- **App Next.js** → Turbopack (camino de menor resistencia, HMR hoja +68%).

T-04 registrará la medición real de este repo y cerrará la decisión.
