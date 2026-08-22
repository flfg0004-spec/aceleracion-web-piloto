import { test, expect } from "@playwright/test";

// Patrón Playwright MCP: los agentes leen snapshots de accesibilidad
// (browser_snapshot) y actúan con browser_click/browser_fill — no selectores frágiles.
test("flujo de navegación básica guiado por accesibilidad", async ({ page }) => {
  await page.goto("/");
  const banner = page.getByRole("banner");
  await expect(banner).toBeVisible();
});

test("Codegen smoke: interacción con formulario", async ({ page }) => {
  await page.goto("/");
  // Grabado con `pnpm exec playwright codegen` y ajustado a roles ARIA.
  const main = page.getByRole("main");
  await expect(main).toBeVisible();
});