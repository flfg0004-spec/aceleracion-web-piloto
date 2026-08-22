# T-05 — Playwright MCP + Codegen para E2E agentic

Ticket Sun: `sun-1ff3de589842` · Fase P01 · Gate `NG-ACEL-01`

## Integración
- **Config**: `playwright.config.ts` (chromium/firefox/webkit, webServer Vite).
- **Tests**: `tests/e2e/smoke.spec.ts`, `tests/e2e/navegacion.spec.ts` — escritos
  con el patrón MCP: los agentes actúan sobre **snapshots de accesibilidad**
  (`browser_snapshot` → `browser_click`/`browser_fill`), no selectores frágiles.
- **Codegen**: `pnpm exec playwright codegen <url>` graba flujos que luego se
  refactorizan a roles ARIA.

## Uso desde agentes (MCP)
Servidor oficial Microsoft: `npx @playwright/mcp@latest`. En el ecosistema Khaos
ya existe el skill `playwright-mcp-uso`; el agente obtiene ~20 tools
(`browser_navigate`, `browser_click`, `browser_console_messages`, …).

## Generación de tests con IA (2026)
| Método | Velocidad | Cuándo |
|---|---|---|
| Codegen | rápido, determinista | flujos estables |
| Playwright MCP + agente | dinámico, lee DOM vivo | flujos complejos/auth |
| Copilot/Cursor sobre spec | consistencia con repo | refactors masivos |

## Trazabilidad
- Informe §2.6 · Roadmap fase P01 · Gate `NG-ACEL-01` · Trial Nemesis `NT-ACEL-01`
