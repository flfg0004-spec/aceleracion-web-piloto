import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

// Drizzle sobre SQLite (Bun nativo). En producción: swap a Postgres driver.
export const db = drizzle(new Database("data/piloto.db"), { schema });
export { schema };