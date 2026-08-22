# T-11 — Prototipado UI: v0 / Bolt / Lovable

Ticket Sun: `sun-605430636108` · Fase P03 · Gate `NG-ACEL-03`

## Evaluación (informe §2.7)

| Herramienta | Fortaleza | Límite |
|---|---|---|
| **v0** (Vercel) | UI components con React/Tailwind listos para Next | lock-in suave a ecosistema Vercel |
| **Bolt** (StackBlitz) | full-stack app en browser, deploy inmediato | refactor necesario para producción |
| **Lovable** | app completa conversacional + GitHub sync | mismo límite de calidad de código |

## Veredicto: Probar (no producción)
- Usar para prototipos con clientes y spikes de UI (horas → minutos).
- Regla: el código generado entra al repo solo tras refactor contra el
  baseline (Biome + tests + review CodeRabbit).
- Presupuesto: 1 subscripción compartida; evaluar ROI en 30 días.

## Trazabilidad
Informe §2.7 · Roadmap P03 · Gate `NG-ACEL-03` · Trial Nemesis `NT-ACEL-03`
