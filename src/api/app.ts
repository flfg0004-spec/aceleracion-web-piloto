import { Hono } from "hono";

// T-07 spike: backend propio Hono (edge-first, multi-runtime).
// Decisión documentada en docs/decision-baas.md.
const app = new Hono();

app.get("/health", (c) =>
  c.json({ ok: true, stack: "hono+drizzle", ts: Date.now() }),
);

export default app;