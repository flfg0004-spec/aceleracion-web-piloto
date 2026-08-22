# Plantilla OpenAI gpt-image-1 — UI Mockup

**Endpoint:** `POST https://api.openai.com/v1/images/generations`
**Key:** `OPENAI_API_KEY` (Bearer). Si usas gateway Spektra: apuntar base-url al gateway.
**Parámetros recomendados:**

```json
{
  "model": "gpt-image-1",
  "prompt": "<ver plantilla abajo>",
  "size": "1536x1024",
  "quality": "high"
}
```

Output: `data[0].b64_json` → decodificar a `source.png`.

## Prompt base (rellenar placeholders)

```
High-fidelity web UI mockup: {pantalla}.

Style: {tema}. Brand: {marca}. Density: {densidad}.

Hard requirements:
- Single full desktop screen, 1536x1024, flat design (no 3D perspective).
- All text legible with realistic labels (no lorem ipsum, no gibberish).
- Clear layout structure matching {pantalla}.
- Coherent palette: primary {color_primario}, neutral backgrounds.
- Visible components: {componentes}.
- No dynamic content placeholders (no relative dates, no blurred avatars).
```

## Reglas de oro

Mismas 5 reglas que NanoBanana (`../nanobanana-ui-mockup.md`): una pantalla ·
texto legible · sin dinámicos · viewport explícito · componentes nombrados.

## Notas específicas gpt-image-1

- `1536x1024` = landscape desktop-first. Para mobile usar `1024x1536`.
- `quality: high` para que el texto salga nítido (el conversor lo necesita).
- El modelo a veces añade marco de navegador decorativo: si ocurre, añadir
  al prompt "full-bleed interface only, no browser chrome".
- Coste aprox por imagen high: ~$0.17 — iterar prompt antes de regenerar en serie.

## Ejemplo relleno (dashboard)

> High-fidelity web UI mockup: development metrics dashboard.
> Style: modern dark mode. Brand: Acme DevOps. Density: comfortable.
> Hard requirements: single full desktop screen 1536x1024, flat design,
> legible labels, layout with 4 KPI cards on top (build time, deploy
> frequency, coverage, MTTR), central line chart (builds/day, 30 days),
> bottom table of last 5 PRs with status column. Palette: primary blue
> #3b82f6, background #0f172a. Full-bleed interface only, no browser chrome.