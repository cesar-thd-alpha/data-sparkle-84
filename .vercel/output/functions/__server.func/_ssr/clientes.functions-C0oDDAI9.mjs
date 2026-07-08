import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { t as Client } from "../_libs/pg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clientes.functions-C0oDDAI9.js
var getClientes_createServerFn_handler = createServerRpc(
  {
    id: "ca0531d37a161e2bfe8e311115cb72ce82e12a3c7a6a4187c2072b66e1c55e67",
    name: "getClientes",
    filename: "src/lib/clientes.functions.ts",
  },
  (opts) => getClientes.__executeServer(opts),
);
var getClientes = createServerFn({ method: "GET" }).handler(
  getClientes_createServerFn_handler,
  async () => {
    const connectionString = process.env.RAILWAY_DATABASE_URL;
    if (!connectionString) throw new Error("RAILWAY_DATABASE_URL not set");
    async function run(ssl) {
      const client = new Client({
        connectionString,
        ssl,
        keepAlive: false,
      });
      await client.connect();
      try {
        return await client.query(`SELECT "Cliente","Franquia","Profit","Status","Plano","Tipo Contrato",
                  "Valor Contrato","Valor Mensal","Início Contrato","Fim Contrato",
                  "Renovação Auto","Vencimento","Alerta","Cliente Ativo","Cliente Churn",
                  "Cliente Pausado","Data de saída (caso de churn)","Faixa Vencimento"
           FROM clientes_franqueados_profits`);
      } finally {
        await client.end().catch(() => {});
      }
    }
    let result;
    try {
      result = await run({ rejectUnauthorized: false });
    } catch (e) {
      console.warn("[getClientes] SSL failed, retrying:", e.message);
      result = await run(false);
    }
    const toNum = (v) => (v === null || v === void 0 || v === "" ? null : Number(v));
    const toStr = (v) => (v === null || v === void 0 ? "" : String(v).trim());
    const toDate = (v) => {
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
//#endregion
export { getClientes_createServerFn_handler };
