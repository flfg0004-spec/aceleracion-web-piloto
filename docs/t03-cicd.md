# T-03 — Pipeline base CI/CD (GitHub Actions)

Ticket Sun: `sun-9e7308f5ac28` · Fase P01 · Gate `NG-ACEL-01`

## Pipeline definido (`.github/workflows/ci.yml`)

| Job | Disparo | Pasos |
|---|---|---|
| `quality` | PR + push a main | checkout → pnpm → node 22 → install → **lint (Biome)** → **test (Bun)** → **build (Vite 8)** |
| `e2e` | PR + push a main | install → playwright chromium → **smoke E2E** |

## Decisiones
- Un workflow, dos jobs paralelizables; `concurrency` por ref para no acumular runs.
- Cache de pnpm vía `setup-node cache: pnpm`.
- Los previews por PR llegan en T-09 (fase P02) como workflow separado.

## Verificación local antes de push
```powershell
pnpm lint   # Biome
pnpm test   # Bun test runner
pnpm build  # Vite 8 + Rolldown
```

## Trazabilidad
Informe §5.1 · Roadmap P01 · Gate `NG-ACEL-01` · Trial Nemesis `NT-ACEL-01`
