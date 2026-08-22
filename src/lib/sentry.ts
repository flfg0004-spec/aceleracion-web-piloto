// Sentry: errores + performance centrados en devs (informe §5.3).
import * as Sentry from '@sentry/node';

export function initSentry(): void {
  const dsn = process.env.SENTRY_DSN;
  if (!dsn) {
    console.warn('[sentry] SENTRY_DSN no definido — instrumentation omitida');
    return;
  }
  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV ?? 'development',
    tracesSampleRate: Number(process.env.SENTRY_TRACES_RATE ?? '0.2'),
    release: process.env.SENTRY_RELEASE ?? 'piloto@0.1.0',
  });
}
