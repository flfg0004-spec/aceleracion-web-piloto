# Plantilla NanoBanana — UI Mockup (Gemini Image)

**Endpoint:** `POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent`
**Key:** `GEMINI_API_KEY` (header `x-goog-api-key`)
**Output:** imagen inline (base64) en `candidates[0].content.parts[].inlineData.data`

## Prompt base (rellenar placeholders)

```
Crea un mockup de alta fidelidad de una interfaz web: {pantalla}.

Estilo: {tema} (ej. dark mode moderno / light minimalista / corporativo).
Marca: {marca}. Densidad: {densidad} (ej. cómoda, compacta).

Requisitos obligatorios:
- Una sola pantalla completa, vista desktop 1536x1024.
- Texto legible en todos los elementos (etiquetas reales, no lorem ipsum).
- Layout claro: sidebar/header/cards según corresponda a {pantalla}.
- Paleta coherente: color primario {color_primario}, fondos neutros.
- Componentes visibles: {componentes}.
- Sin contenido dinámico (fechas relativas, avatares borrosos, gráficas animadas).
```

## Reglas de oro (prompt UI efectivo)

1. **Una pantalla por imagen** — nunca multi-vista en un solo render.
2. **Texto legible** — el conversor vision necesita leer etiquetas reales.
3. **Sin contenido dinámico** — nada que cambie entre renders (fechas, datos "en vivo").
4. **Viewport explícito** — desktop/tablet/mobile cambia todo el layout.
5. **Componentes nombrados** — "4 KPI cards arriba, tabla central con 5 filas" > "dashboard bonito".

## Ejemplo relleno (dashboard)

> Crea un mockup de alta fidelidad de una interfaz web: dashboard de métricas
> de desarrollo. Estilo: dark mode moderno. Marca: Acme DevOps. Densidad:
> cómoda. Requisitos: una sola pantalla, vista desktop 1536x1024, texto
> legible, layout con 4 KPI cards arriba (build time, deploy frequency,
> coverage, MTTR), gráfica de líneas central (builds/día, 30 días), tabla
> inferior de últimos 5 PRs con columna de estado. Paleta: primario azul
> #3b82f6, fondo #0f172a.

## Guardado

Toda generación va a `design/targets/<pantalla>/`:
- `source.png` (imagen cruda)
- `prompt.md` (prompt exacto + generator/model/fecha)