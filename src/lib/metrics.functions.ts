import { createServerFn } from "@tanstack/react-start";
import { Pool } from "pg";

let _pool: Pool | null = null;
function pool() {
  if (!_pool) {
    _pool = new Pool({
      connectionString: process.env.RAILWAY_DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 3,
    });
  }
  return _pool;
}

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
  const { rows } = await pool().query(`
    SELECT "IdMetrica","Responsável","Métrica","Cadência","Meta","Alvo (nº)","Dir.",
           "Realizado","Status","PossuiMeta","TipoMeta","StatusOrdem","Categoria",
           "Realizado_Num","ScoreMeta"
    FROM performance_metricas
    ORDER BY "IdMetrica"
  `);
  return rows.map((r) => ({
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