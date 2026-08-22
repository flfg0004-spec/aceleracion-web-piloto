# T-10 — Segunda capa de review: Greptile vs Qodo

Ticket Sun: `sun-f940ae1ff334` · Fase P03 · Gate `NG-ACEL-03`

## Evaluación (informe §2.4-2.5, benchmarks 2026)

| Criterio | CodeRabbit (actual) | Greptile | Qodo |
|---|---|---|---|
| Captura de bugs | ~44-51% F1 | **82%** | 60.1% F1 |
| Ruido (FP/run) | **~2** | ~11 | medio |
| Contexto | diff+repo parcial | repo completo indexado | repo + tests |
| Extra | gratis OSS | monorepos grandes | genera tests (Cover) |
| Coste | $ / 0 OSS | $$ | $$ |

## Veredicto
- **Ahora**: mantener CodeRabbit como única capa (ruido mínimo; el piloto es pequeño).
- **Trigger para añadir Greptile**: cuando bugs cross-file escapen al review o el
  repo supere ~50k LOC / monorepo.
- **Trigger para Qodo**: cuando se quiera generación automática de tests por PR.

## Trazabilidad
Informe §2.3-2.5 · Roadmap P03 · Gate `NG-ACEL-03` · Trial Nemesis `NT-ACEL-03`
