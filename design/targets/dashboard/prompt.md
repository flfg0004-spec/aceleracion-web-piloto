# Prompt usado — dashboard (SIMULADO)

> **Estado**: generación REAL no disponible en este entorno (gateway sin ruta
> images/generations, GEMINI_API_KEY ausente). El `source.png` proviene de un
> **mockup HTML renderizado con Playwright** que simula la salida del
> generador, para validar el LOOP completo. Cuando exista clave válida,
> enchufar `../prompts/` al mismo flujo sin cambios.

## Prompt (plantilla openai-gptimage-ui-mockup.md rellena)

High-fidelity web UI mockup: development metrics dashboard.
Style: modern dark mode. Brand: Acme DevOps. Density: comfortable.
Hard requirements: single full desktop screen 1536x1024, flat design, legible
labels, layout with 4 KPI cards on top (build time 3m12s, deploy frequency
14/week, coverage 87%, MTTR 22min), central line chart (builds/day, 30 days,
single blue line), bottom table of last 5 PRs with columns ID/title/status
(passed, running, failed) and status badges colored green/yellow/red.
Palette: primary blue #3b82f6, background #0f172a, cards #1e293b.
Full-bleed interface only, no browser chrome.

- generator: simulated (Playwright render de generator-sim.html)
- date: 2026-08-22