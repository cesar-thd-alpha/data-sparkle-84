import { createFileRoute } from "@tanstack/react-router";
import { getClientes } from "@/lib/clientes.functions";
import { computeCesarSummary } from "@/lib/cesar-summary";

/**
 * GET /api/v1/cesar/summary?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD
 * Authorization: Bearer <MONALISA_API_TOKEN>
 *
 * Endpoint de integração para o dashboard Monalisa — contrato definido em
 * "Documento de Integração - Monalisa.md" (seção 6, Plataforma Cesar).
 * Consumido por monalisa_dash (cesar_client.py) para Revenue Churn, Logo
 * Churn e Clientes Ativos.
 */

function errorResponse(status: number, code: string, message: string) {
  return new Response(JSON.stringify({ error: { code, message } }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function parseDateParam(raw: string | null): Date | null {
  if (!raw || !/^\d{4}-\d{2}-\d{2}$/.test(raw)) return null;
  const d = new Date(`${raw}T00:00:00.000Z`);
  return isNaN(d.getTime()) ? null : d;
}

export const Route = createFileRoute("/api/v1/cesar/summary")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const expectedToken = process.env.MONALISA_API_TOKEN;
        if (!expectedToken) {
          return errorResponse(
            500,
            "internal_error",
            "MONALISA_API_TOKEN não configurado no servidor",
          );
        }

        const authHeader = request.headers.get("authorization") ?? "";
        const [scheme, token] = authHeader.split(" ");
        if (scheme !== "Bearer" || token !== expectedToken) {
          return errorResponse(401, "unauthorized", "Token inválido ou ausente");
        }

        const url = new URL(request.url);
        const startParam = url.searchParams.get("start_date");
        const endParam = url.searchParams.get("end_date");
        const startDate = parseDateParam(startParam);
        // Fim do período é inclusivo — vai até o último instante do dia.
        const endDateRaw = parseDateParam(endParam);
        const endDate = endDateRaw
          ? new Date(endDateRaw.getTime() + 24 * 60 * 60 * 1000 - 1)
          : null;

        if (!startDate || !endDate) {
          return errorResponse(
            400,
            "invalid_period",
            "start_date e end_date são obrigatórios no formato YYYY-MM-DD",
          );
        }
        if (startDate.getTime() > endDate.getTime()) {
          return errorResponse(400, "invalid_period", "start_date não pode ser maior que end_date");
        }

        try {
          const clientes = await getClientes();
          const summary = computeCesarSummary(clientes, startDate, endDate);

          return new Response(
            JSON.stringify({
              period: { start_date: startParam, end_date: endParam },
              active_customers: summary.active_customers,
              revenue_churn: Number(summary.revenue_churn.toFixed(4)),
              logo_churn: Number(summary.logo_churn.toFixed(4)),
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        } catch (e) {
          console.error("[api/v1/cesar/summary] erro:", e);
          return errorResponse(500, "internal_error", (e as Error).message);
        }
      },
    },
  },
});
