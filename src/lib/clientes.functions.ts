import { createServerFn } from "@tanstack/react-start";
import { Client } from "pg";

export type ClienteRow = {
  cliente: string;
  franquia: string;
  profit: string;
  status: string;
  plano: string;
  tipoContrato: string;
  valorContrato: number | null;
  valorMensal: number | null;
  inicioContrato: string | null;
  fimContrato: string | null;
  renovacaoAuto: string;
  vencimentoDias: number | null;
  alerta: string;
  ativo: boolean;
  churn: boolean;
  dataChurn: string | null;
  pausado: boolean;
  faixaVencimento: string;
};

export const getClientes = createServerFn({ method: "GET" }).handler(
  async (): Promise<ClienteRow[]> => {
    const connectionString = process.env.RAILWAY_DATABASE_URL;
    if (!connectionString) throw new Error("RAILWAY_DATABASE_URL not set");

    async function run(ssl: false | { rejectUnauthorized: false }) {
      const client = new Client({ connectionString, ssl, keepAlive: false });
      await client.connect();
      try {
        return await client.query(
          `SELECT "Cliente","Franquia","Profit","Status","Plano","Tipo Contrato",
                  "Valor Contrato","Valor Mensal","Início Contrato","Fim Contrato",
                  "Renovação Auto","Vencimento","Alerta","Cliente Ativo","Cliente Churn",
                  "Cliente Pausado","Data de saída (caso de churn)","Faixa Vencimento"
           FROM clientes_franqueados_profits`,
        );
      } finally {
        await client.end().catch(() => {});
      }
    }

    let result;
    try {
      result = await run({ rejectUnauthorized: false });
    } catch (e) {
      console.warn("[getClientes] SSL failed, retrying:", (e as Error).message);
      result = await run(false);
    }

    const toNum = (v: unknown) =>
      v === null || v === undefined || v === "" ? null : Number(v);
    const toStr = (v: unknown) =>
      v === null || v === undefined ? "" : String(v).trim();
    const toDate = (v: unknown) => {
      if (!v) return null;
      const d = v instanceof Date ? v : new Date(String(v));
      return isNaN(d.getTime()) ? null : d.toISOString();
    };

    return result.rows.map((r) => ({
      cliente: toStr(r.Cliente) || "—",
      franquia: toStr(r.Franquia) || "—",
      profit: toStr(r.Profit) || "—",
      status: toStr(r.Status) || "—",
      plano: toStr(r.Plano) || "—",
      tipoContrato: toStr(r["Tipo Contrato"]) || "—",
      valorContrato: toNum(r["Valor Contrato"]),
      valorMensal: toNum(r["Valor Mensal"]),
      inicioContrato: toDate(r["Início Contrato"]),
      fimContrato: toDate(r["Fim Contrato"]),
      renovacaoAuto: toStr(r["Renovação Auto"]) || "—",
      vencimentoDias: toNum(r.Vencimento),
      alerta: toStr(r.Alerta) || "—",
      ativo: !!r["Cliente Ativo"],
      churn: !!r["Cliente Churn"],
      dataChurn: toDate(r["Data de saída (caso de churn)"]),
      pausado: !!r["Cliente Pausado"],
      faixaVencimento: toStr(r["Faixa Vencimento"]) || "—",
    }));
  },
);