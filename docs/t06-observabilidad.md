# T-06 — Sentry + OpenTelemetry (observabilidad-driven dev)

Ticket Sun: `sun-850a44d4cce7` · Fase P02 · Gate `NG-ACEL-02`

## Instrumentación
| Pieza | Archivo | Rol |
|---|---|---|
| Errores+performance | `src/lib/sentry.ts` | Sentry.init con DSN por env, traces 20% |
| Traces vendor-neutral | `src/instrumentation.ts` | OTel SDK Node + auto-instrumentations → OTLP |

## Pipeline
`.github/workflows/release.yml`: cada tag `v*` crea **Sentry release** con
commits asociados y sourcemaps; alertas de release activas desde el día 1.

## Configuración requerida (secrets)
- `SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`
- `OTEL_EXPORTER_OTLP_ENDPOINT` (collector propio o Sentry OTLP)

## Por qué OTel además de Sentry
OTel evita lock-in: las trazas se exportan a cualquier backend (Sentry, Jaeger,
Datadog) sin reescribir instrumentación — recomendación del informe §5.3.

## Trazabilidad
Informe §5.3 · Roadmap P02 · Gate `NG-ACEL-02` · Trial Nemesis `NT-ACEL-02`
