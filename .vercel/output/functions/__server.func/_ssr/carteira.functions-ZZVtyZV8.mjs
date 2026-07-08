import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { t as Client } from "../_libs/pg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/carteira.functions-ZZVtyZV8.js
var getCarteira_createServerFn_handler = createServerRpc(
  {
    id: "19c87904752b916f06bac4ef3cf451bdd3b09ee4c59bed0defcf2427744f7a14",
    name: "getCarteira",
    filename: "src/lib/carteira.functions.ts",
  },
  (opts) => getCarteira.__executeServer(opts),
);
var getCarteira = createServerFn({ method: "GET" }).handler(
  getCarteira_createServerFn_handler,
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
        return await client.query(
          `SELECT "Profit","Franquia","Clientes","RoasMedio","AlvoRoas","StatusRoas","DesvioRoas" FROM carteira_clientes_profit`,
        );
      } finally {
        await client.end().catch(() => {});
      }
    }
    let result;
    try {
      result = await run({ rejectUnauthorized: false });
    } catch (e) {
      console.warn("[getCarteira] SSL failed, retrying:", e.message);
      result = await run(false);
    }
    return result.rows.map((r) => {
      const raw = (r.StatusRoas ?? "").toString().trim();
      const status = raw === "No Alvo" ? "No Alvo" : raw === "Fora" ? "Fora" : "Sem Dado";
      const toNum = (v) => (v === null || v === void 0 || v === "" ? null : Number(v));
      return {
        profit: r.Profit ?? "—",
        franquia: r.Franquia ?? "—",
        clientes: Number(r.Clientes ?? 0),
        roasMedio: toNum(r.RoasMedio),
        alvoRoas: toNum(r.AlvoRoas),
        statusRoas: status,
        desvioRoas: toNum(r.DesvioRoas),
      };
    });
  },
);
//#endregion
export { getCarteira_createServerFn_handler };
