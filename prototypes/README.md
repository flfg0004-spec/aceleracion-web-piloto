# Prototipos UI — flujo v0/Bolt/Lovable → producción

Ticket Sun: `sun-605430636108` · Fase P03 · Gate `NG-ACEL-03`

## Flujo (prototipo nunca entra directo a main)

```
idea ──► v0/Bolt/Lovable ──► revisión visual con cliente
                                    │ aprueba
                                    ▼
        refactor contra baseline (Biome+tests+CodeRabbit)
                                    │
                                    ▼
                        PR con preview environment ──► merge
```

## Reglas
1. El código generado vive en `prototypes/` hasta pasar refactor.
2. Todo prototipo que suba a producción pasa por el pipeline estándar.
3. ROI de la subscripción se evalúa a 30 días (nº prototipos adoptados).

Ejemplo de prompt listo: `ejemplo-prompt.md`.
