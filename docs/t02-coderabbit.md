# T-02 — CodeRabbit como review IA en PRs

Ticket Sun: `sun-38f788d91e92` · Fase P01 · Gate `NG-ACEL-01`

## Qué se adoptó
CodeRabbit con perfil `chill` (mínimo ruido: 51.2% F1, ~2 falsos positivos/run,
benchmark independiente Martian 2026). Configuración en `.github/coderabbit.yml`.

## Activación (paso manual requerido)
La instalación es a nivel de organización/repositorio GitHub:
1. GitHub → Apps → **CodeRabbit** → Install → seleccionar repo piloto.
2. El archivo `.github/coderabbit.yml` de este repo gobierna el comportamiento.
3. Cada PR recibirá review automática (`auto_review.enabled: true`, base `main`).

## Por qué no Greptile/Qodo de inicio
- Greptile: mayor captura (82%) pero ~11 FP/run — se evalúa en T-10 cuando el
  repo crezca y los bugs cross-file sean el modo de fallo dominante.
- Qodo: F1 60.1% + generación de tests; candidata a segunda capa en T-10.

## Trazabilidad
- Informe: `C:\dev\informe-aceleracion-web.md` §2.3
- Roadmap: fase P01, gate Nova `NG-ACEL-01`, trial Nemesis `NT-ACEL-01`
