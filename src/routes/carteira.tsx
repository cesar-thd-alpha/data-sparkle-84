import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList,
} from "recharts";
import { ArrowUpDown } from "lucide-react";
import { getCarteira } from "@/lib/carteira.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const carteiraQuery = queryOptions({
  queryKey: ["carteira"],
  queryFn: () => getCarteira(),
});

export const Route = createFileRoute("/carteira")({
  head: () => ({
    meta: [
      { title: "Carteira de Clientes por Profit" },
      { name: "description", content: "Distribuição de clientes por Profit e Franquia." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(carteiraQuery),
  errorComponent: ({ error }) => (
    <div className="p-8 text-destructive">Erro ao carregar dados: {error.message}</div>
  ),
  notFoundComponent: () => <div className="p-8">Sem dados.</div>,
  component: CarteiraPage,
});

const ALL = "__all__";
type SortKey = "profit" | "franquia" | "clientes";

function CarteiraPage() {
  const { data } = useSuspenseQuery(carteiraQuery);

  const [profitFilter, setProfitFilter] = useState<string>(ALL);
  const [franquiaFilter, setFranquiaFilter] = useState<string>(ALL);
  const [sortKey, setSortKey] = useState<SortKey>("clientes");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const opts = useMemo(() => {
    const uniq = (k: "profit" | "franquia") =>
      Array.from(new Set(data.map((d) => d[k]).filter(Boolean))).sort();
    return { profit: uniq("profit"), franquia: uniq("franquia") };
  }, [data]);

  const filtered = useMemo(
    () =>
      data.filter(
        (d) =>
          (profitFilter === ALL || d.profit === profitFilter) &&
          (franquiaFilter === ALL || d.franquia === franquiaFilter),
      ),
    [data, profitFilter, franquiaFilter],
  );

  const totalClientes = filtered.reduce((s, d) => s + d.clientes, 0);
  const totalFranquias = new Set(filtered.map((d) => d.franquia)).size;
  const totalProfit = new Set(filtered.map((d) => d.profit)).size;
  const mediaPorFranquia = totalFranquias > 0 ? totalClientes / totalFranquias : 0;

  const porProfit = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((d) => map.set(d.profit, (map.get(d.profit) ?? 0) + d.clientes));
    return Array.from(map.entries())
      .map(([profit, clientes]) => ({ profit, clientes }))
      .sort((a, b) => b.clientes - a.clientes);
  }, [filtered]);

  const topFranquias = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((d) => map.set(d.franquia, (map.get(d.franquia) ?? 0) + d.clientes));
    return Array.from(map.entries())
      .map(([franquia, clientes]) => ({ franquia, clientes }))
      .sort((a, b) => b.clientes - a.clientes)
      .slice(0, 10);
  }, [filtered]);

  const sortedRows = useMemo(() => {
    const rows = [...filtered];
    rows.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return rows;
  }, [filtered, sortKey, sortDir]);

  const toggleSort = (k: SortKey) => {
    if (k === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir(k === "clientes" ? "desc" : "asc");
    }
  };

  const clearFilters = () => {
    setProfitFilter(ALL);
    setFranquiaFilter(ALL);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Carteira de Clientes</h1>
            <p className="text-sm text-muted-foreground">
              Distribuição de clientes por Profit e Franquia.
            </p>
          </div>
          <nav className="flex gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm">Performance</Button>
            </Link>
            <Link to="/carteira">
              <Button variant="secondary" size="sm">Carteira</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-6">
        <Card>
          <CardContent className="flex flex-wrap items-end gap-3 pt-6">
            <FilterSelect label="Profit" value={profitFilter} onChange={setProfitFilter} options={opts.profit} />
            <FilterSelect label="Franquia" value={franquiaFilter} onChange={setFranquiaFilter} options={opts.franquia} />
            <Button variant="outline" size="sm" onClick={clearFilters} className="ml-auto">
              Limpar filtros
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Kpi label="Total de Clientes" value={totalClientes.toLocaleString("pt-BR")} accent="oklch(0.6 0.2 250)" />
          <Kpi label="Total de Franquias" value={totalFranquias} accent="oklch(0.65 0.18 180)" />
          <Kpi label="Profit Managers" value={totalProfit} accent="oklch(0.7 0.18 145)" />
          <Kpi label="Média Clientes/Franquia" value={mediaPorFranquia.toFixed(1)} accent="oklch(0.78 0.15 80)" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">Clientes por Profit</CardTitle></CardHeader>
            <CardContent className="h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porProfit} layout="vertical" margin={{ left: 12, right: 48 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="profit" width={110} fontSize={11} />
                  <Tooltip formatter={(v: number) => v.toLocaleString("pt-BR")} />
                  <Bar dataKey="clientes" fill="oklch(0.6 0.2 250)" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="clientes" position="right" fontSize={11} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Top 10 Franquias por Clientes</CardTitle></CardHeader>
            <CardContent className="h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topFranquias} layout="vertical" margin={{ left: 12, right: 48 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="franquia" width={160} fontSize={11} />
                  <Tooltip formatter={(v: number) => v.toLocaleString("pt-BR")} />
                  <Bar dataKey="clientes" fill="oklch(0.65 0.18 180)" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="clientes" position="right" fontSize={11} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Detalhamento ({sortedRows.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[460px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <SortableHead label="Profit" k="profit" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Franquia" k="franquia" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Clientes" k="clientes" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} align="right" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedRows.map((d, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{d.profit}</TableCell>
                      <TableCell>{d.franquia}</TableCell>
                      <TableCell className="text-right tabular-nums">{d.clientes.toLocaleString("pt-BR")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function Kpi({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="text-3xl font-bold tracking-tight" style={accent ? { color: accent } : undefined}>
          {value}
        </div>
        <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

function FilterSelect({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="flex min-w-[200px] flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL}>Todos</SelectItem>
          {options.map((o) => (
            <SelectItem key={o} value={o}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function SortableHead({
  label, k, sortKey, sortDir, onClick, align,
}: {
  label: string;
  k: SortKey;
  sortKey: SortKey;
  sortDir: "asc" | "desc";
  onClick: (k: SortKey) => void;
  align?: "right";
}) {
  const active = sortKey === k;
  return (
    <TableHead className={align === "right" ? "text-right" : ""}>
      <button
        type="button"
        onClick={() => onClick(k)}
        className={`inline-flex items-center gap-1 hover:text-foreground ${active ? "text-foreground" : ""}`}
      >
        {label}
        <ArrowUpDown className="h-3 w-3 opacity-60" />
        {active && <span className="text-[10px]">{sortDir === "asc" ? "↑" : "↓"}</span>}
      </button>
    </TableHead>
  );
}