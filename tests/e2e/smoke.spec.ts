import { test, expect } from "@playwright/test";

// Smoke E2E generado con el patrón Playwright MCP/Codegen:
// los agentes controlan el navegador vía snapshots de accesibilidad.
test("la app responde y muestra contenido", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/.+/);
});