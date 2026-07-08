import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { t as Client } from "../_libs/pg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metrics.functions-_Ue6ifEm.js
var getMetrics_createServerFn_handler = createServerRpc(
  {
    id: "02d7967fdc562436aefab72a9767f728bef5cb3d7fa431b6e750ba194ecdfde0",
    name: "getMetrics",
    filename: "src/lib/metrics.functions.ts",
  },
  (opts) => getMetrics.__executeServer(opts),
);
var getMetrics = createServerFn({ method: "GET" }).handler(
  getMetrics_createServerFn_handler,
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
        return await client.query(`
        SELECT "IdMetrica","Responsável","Métrica","Cadência","Meta","Alvo (nº)","Dir.",
               "Realizado","Status","PossuiMeta","TipoMeta","StatusOrdem","Categoria",
               "Realizado_Num","ScoreMeta"
        FROM performance_metricas
        ORDER BY "IdMetrica"
      `);
      } finally {
        await client.end().catch(() => {});
      }
    }
    let result;
    try {
      result = await run({ rejectUnauthorized: false });
    } catch (e) {
      console.warn("[getMetrics] SSL connect failed, retrying without SSL:", e.message);
      result = await run(false);
    }
    return result.rows.map((r) => ({
      id: Number(r.IdMetrica),
      responsavel: r["Responsável"],
      metrica: r["Métrica"],
      cadencia: r["Cadência"],
      meta: r.Meta,
      alvo: r["Alvo (nº)"] != null ? Number(r["Alvo (nº)"]) : null,
      direcao: r["Dir."],
      realizado: r.Realizado,
      status: r.Status,
      possuiMeta: r.PossuiMeta,
      tipoMeta: r.TipoMeta,
      statusOrdem: r.StatusOrdem != null ? Number(r.StatusOrdem) : null,
      categoria: r.Categoria,
      realizadoNum: r.Realizado_Num != null ? Number(r.Realizado_Num) : null,
      scoreMeta: r.ScoreMeta != null ? Number(r.ScoreMeta) : null,
    }));
  },
);
//#endregion
export { getMetrics_createServerFn_handler };
