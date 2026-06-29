import { createServerFn } from "@tanstack/react-start";
import { Client } from "pg";

export type CarteiraRow = {
  profit: string;
  franquia: string;
  clientes: number;
};

export const getCarteira = createServerFn({ method: "GET" }).handler(
  async (): Promise<CarteiraRow[]> => {
    const connectionString = process.env.RAILWAY_DATABASE_URL;
    if (!connectionString) throw new Error("RAILWAY_DATABASE_URL not set");

    async function run(ssl: false | { rejectUnauthorized: false }) {
      const client = new Client({ connectionString, ssl, keepAlive: false });
      await client.connect();
      try {
        return await client.query(
          `SELECT "Profit","Franquia","Clientes" FROM carteira_clientes_profit`,
        );
      } finally {
        await client.end().catch(() => {});
      }
    }

    let result;
    try {
      result = await run({ rejectUnauthorized: false });
    } catch (e) {
      console.warn("[getCarteira] SSL failed, retrying:", (e as Error).message);
      result = await run(false);
    }

    return result.rows.map((r) => ({
      profit: r.Profit ?? "—",
      franquia: r.Franquia ?? "—",
      clientes: Number(r.Clientes ?? 0),
    }));
  },
);