// T-06: OpenTelemetry SDK Node — traces vendor-neutral.
// Fix Nemesis NT-ACEL-02 (warning anti_pattern): serviceName debe definirse
// siempre y el exporter OTLP debe ser explicito.
import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
const serviceName = process.env.OTEL_SERVICE_NAME ?? "aceleracion-web-piloto";

export const otel = new NodeSDK({
  serviceName,
  ...(endpoint
    ? { traceExporter: new OTLPTraceExporter({ url: `${endpoint}/v1/traces` }) }
    : {}),
  instrumentations: [getNodeAutoInstrumentations()],
});

if (endpoint) {
  otel.start();
  console.log(`[otel] tracing activo -> ${endpoint} (service: ${serviceName})`);
}