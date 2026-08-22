// T-06 (parcial, adelantado para dejar P02 verificable): OpenTelemetry SDK Node.
// Traces vendor-neutral → exportable a OTLP collector / Sentry / Jaeger.
import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;

export const otel = new NodeSDK({
  instrumentations: [getNodeAutoInstrumentations()],
  ...(endpoint ? {} : { serviceName: "aceleracion-web-piloto" }),
});

if (endpoint) {
  otel.start();
  console.log(`[otel] tracing activo -> ${endpoint}`);
}