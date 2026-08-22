# Biblioteca de prompts — Design-Target Loop

Generadores de la **imagen objetivo** del frontend antes de implementar.
Aprobar la imagen primero = iterar menos veces después.

| Generador | Plantilla | Key (env) | Endpoint |
|---|---|---|---|
| NanoBanana (Gemini Image) | `nanobanana-ui-mockup.md` | `GEMINI_API_KEY` | generativelanguage.googleapis.com |
| OpenAI gpt-image-1 | `openai-gptimage-ui-mockup.md` | `OPENAI_API_KEY` | api.openai.com/v1/images |

## Flujo completo (ver skill stack2026-designloop)

```
prompt rellenado → generador → design/targets/<pantalla>/source.png
  → conversión vision→HTML → target.html   ← APROBACIÓN DEL DIRECTOR AQUÍ
  → implementación real (React+shadcn en proyecto; HTML en spike)
  → screenshots Playwright + pixelmatch → reports/visual-report.json
  → juez visual LLM lista deltas → iterar SOLO deltas
  → ≥95% match / 0 críticos → merge (baseline = regresión visual permanente)
```

## Convención de guardado (obligatoria)

```
design/targets/<pantalla>/
├── source.png    # imagen cruda del generador
├── prompt.md     # prompt EXACTO usado + generator/model/fecha
└── target.html   # conversión aprobada (spec visual)
```

Toda imagen nace con su prompt junto: sin prompt no hay trazabilidad ni
regeneración reproducible.

## Estado de claves en este entorno (2026-08-22)

- `OPENAI_API_KEY`: SET (gateway Spektra — verificar compatibilidad images API)
- `GEMINI_API_KEY`: no configurada

Fallback validado en spike: mockup HTML renderizado a PNG con Playwright hace
de "salida del generador" para probar el LOOP completo sin claves; las
generaciones reales enchufan al mismo flujo cuando haya clave.