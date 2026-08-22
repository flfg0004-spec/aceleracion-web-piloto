import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// T-07 spike: schema Drizzle (SQL-first, tipos E2E).
export const proyectos = sqliteTable('proyectos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nombre: text('nombre').notNull(),
  stack: text('stack').notNull().default('2026'),
  creado: integer('creado', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
});
