# T-09 — Preview environments por PR

Ticket Sun: `sun-880c127ad78b` · Fase P02 · Gate `NG-ACEL-02`

## Qué se activó
`.github/workflows/preview.yml`: cada PR despliega una **URL efímera** y la
comenta en el PR. Estándar 2026 (informe §5.2): detecta errores de integración
pre-merge sin tocar producción.

## Proveedor
| Opción | Cuándo |
|---|---|
| **Vercel** (elegida) | frontend/Next; URL automática por push del PR |
| Northflank | full-stack GitOps con DBs de preview |
| Railway | PaaS simple estilo Heroku |

Requiere secret `VERCEL_TOKEN` en el repo; sin él, el job lo indica y el resto
del pipeline sigue funcionando.

## Trazabilidad
Informe §5.2 · Roadmap P02 · Gate `NG-ACEL-02` · Trial Nemesis `NT-ACEL-02`
