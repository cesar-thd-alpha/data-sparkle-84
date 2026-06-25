import { createServerFn } from "@tanstack/react-start";
import { Client } from "pg";

export type Metric = {
  id: number;
  responsavel: string | null;
  metrica: string | null;
  cadencia: string | null;
  meta: string | null;
  alvo: number | null;
  direcao: string | null;
  realizado: string | null;
  status: string | null;
  possuiMeta: string | null;
  tipoMeta: string | null;
  statusOrdem: number | null;
  categoria: string | null;
  realizadoNum: number | null;
  scoreMeta: number | null;
};

export const getMetrics = createServerFn({ method: "GET" }).handler(async (): Promise<Metric[]> => {
  const connectionString = process.env.RAILWAY_DATABASE_URL;
  if (!connectionString) throw new Error("RAILWAY_DATABASE_URL not set");

  async function run(ssl: false | { rejectUnauthorized: false }) {
    const client = new Client({ connectionString, ssl, keepAlive: false });
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
    console.warn("[getMetrics] SSL connect failed, retrying without SSL:", (e as Error).message);
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
});