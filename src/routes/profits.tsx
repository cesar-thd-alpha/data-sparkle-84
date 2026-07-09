import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { useMemo, useState } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
  Cell,
} from "recharts";
import { ArrowUpDown, AlertTriangle } from "lucide-react";
import {
  getCarteira,
  getMetricasProfits,
  type CarteiraRow,
  type MetricaRow,
} from "@/lib/carteira.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const carteiraQuery = queryOptions({
  queryKey: ["carteira"],
  queryFn: () => getCarteira(),
});

const metricasQuery = queryOptions({
  queryKey: ["indicadores-profits-metricas"],
  queryFn: () => getMetricasProfits(),
});

export const Route = createFileRoute("/profits")({
  head: () => ({
    meta: [
      { title: "Carteira de Clientes por Profit" },
      { name: "description", content: "Distribuição de clientes por Profit e Franquia." },
    ],
  }),
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(carteiraQuery);
    context.queryClient.ensureQueryData(metricasQuery);
  },
  errorComponent: ({ error }) => (
    <div className="p-8 text-destructive">Erro ao carregar dados: {error.message}</div>
  ),
  notFoundComponent: () => <div className="p-8">Sem dados.</div>,
  component: CarteiraPage,
});

const ALL = "__all__";
type SortKey =
  | "profit"
  | "franquia"
  | "clientes"
  | "roasMedio"
  | "alvoRoas"
  | "desvioRoas"
  | "statusRoas";

const STATUS_ORDER: Record<CarteiraRow["statusRoas"], number> = {
  Fora: 0,
  "No Alvo": 1,
  "Sem Dado": 2,
};

const STATUS_DOT: Record<CarteiraRow["statusRoas"], string> = {
  "No Alvo": "🟢",
  Fora: "🔴",
  "Sem Dado": "⚪",
};

const fmtNum = (v: number | null, digits = 2) =>
  v === null || Number.isNaN(v)
    ? "—"
    : v.toLocaleString("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits });

function StatusBadge({ status }: { status: CarteiraRow["statusRoas"] }) {
  const cls =
    status === "No Alvo"
      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-400"
      : status === "Fora"
        ? "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-500/15 dark:text-red-400"
        : "bg-muted text-muted-foreground hover:bg-muted";
  return (
    <Badge variant="secondary" className={`gap-1 ${cls}`}>
      <span aria-hidden>{STATUS_DOT[status]}</span>
      {status}
    </Badge>
  );
}

function RowTooltipContent({ d }: { d: CarteiraRow }) {
  return (
    <div className="space-y-0.5 text-xs">
      <div>
        <span className="text-muted-foreground">Profit:</span> {d.profit}
      </div>
      <div>
        <span className="text-muted-foreground">Franquia:</span> {d.franquia}
      </div>
      <div>
        <span className="text-muted-foreground">Clientes:</span>{" "}
        {d.clientes.toLocaleString("pt-BR")}
      </div>
      <div>
        <span className="text-muted-foreground">ROAS Médio:</span> {fmtNum(d.roasMedio)}
      </div>
      <div>
        <span className="text-muted-foreground">Alvo:</span> {fmtNum(d.alvoRoas)}
      </div>
      <div>
        <span className="text-muted-foreground">Desvio:</span> {fmtNum(d.desvioRoas)}
      </div>
      <div>
        <span className="text-muted-foreground">Status:</span> {STATUS_DOT[d.statusRoas]}{" "}
        {d.statusRoas}
      </div>
    </div>
  );
}

function CarteiraPage() {
  const { data } = useSuspenseQuery(carteiraQuery);
  const { data: metricas } = useSuspenseQuery(metricasQuery);

  const [profitFilter, setProfitFilter] = useState<string>(ALL);
  const [franquiaFilter, setFranquiaFilter] = useState<string>(ALL);
  const [statusFilter, setStatusFilter] = useState<string>(ALL);
  const [semanaFilter, setSemanaFilter] = useState<string>(ALL);
  const [metricaFilter, setMetricaFilter] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
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
          (franquiaFilter === ALL || d.franquia === franquiaFilter) &&
          (statusFilter === ALL || d.statusRoas === statusFilter),
      ),
    [data, profitFilter, franquiaFilter, statusFilter],
  );

  const totalClientes = filtered.reduce((s, d) => s + d.clientes, 0);
  const totalFranquias = new Set(filtered.map((d) => d.franquia)).size;
  const totalProfit = new Set(filtered.map((d) => d.profit)).size;
  const mediaPorFranquia = totalFranquias > 0 ? totalClientes / totalFranquias : 0;
  const foraDoAlvo = filtered.filter((d) => d.statusRoas === "Fora").length;

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

  const franquiasFora = useMemo(
    () =>
      filtered
        .filter((d) => d.statusRoas === "Fora" && d.desvioRoas !== null)
        .map((d) => ({
          franquia: d.franquia,
          desvio: Math.abs(d.desvioRoas as number),
          row: d,
        }))
        .sort((a, b) => b.desvio - a.desvio)
        .slice(0, 15),
    [filtered],
  );

  const roasPorProfit = useMemo(() => {
    const map = new Map<
      string,
      { sum: number; count: number; alvoSum: number; alvoCount: number }
    >();
    filtered.forEach((d) => {
      const cur = map.get(d.profit) ?? { sum: 0, count: 0, alvoSum: 0, alvoCount: 0 };
      if (d.roasMedio !== null) {
        cur.sum += d.roasMedio;
        cur.count += 1;
      }
      if (d.alvoRoas !== null) {
        cur.alvoSum += d.alvoRoas;
        cur.alvoCount += 1;
      }
      map.set(d.profit, cur);
    });
    return Array.from(map.entries())
      .map(([profit, v]) => ({ profit, roas: v.count ? v.sum / v.count : 0 }))
      .sort((a, b) => b.roas - a.roas);
  }, [filtered]);

  const alvoMedio = useMemo(() => {
    const alvos = filtered.map((d) => d.alvoRoas).filter((v): v is number => v !== null);
    return alvos.length ? alvos.reduce((s, v) => s + v, 0) / alvos.length : 0;
  }, [filtered]);

  // ============ Métricas (indicadores_profits_metricas) ============
  const semanasOpts = useMemo(() => {
    const map = new Map<string, number>();
    metricas.forEach((m) => {
      if (m.semanaLabel) map.set(m.semanaLabel, m.semanaNumero);
    });
    return Array.from(map.entries())
      .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
      .map(([label]) => label);
  }, [metricas]);

  const metricasOpts = useMemo(
    () => Array.from(new Set(metricas.map((m) => m.metrica))).sort(),
    [metricas],
  );

  React.useEffect(() => {
    if (metricaFilter === "" && metricasOpts.length > 0) setMetricaFilter(metricasOpts[0]);
  }, [metricaFilter, metricasOpts]);

  // Filter by Profit (reuse profitFilter) and Semana; aggregate: average by (profit, metrica) across the selected weeks
  const metricasFiltered = useMemo(() => {
    return metricas.filter(
      (m) =>
        (profitFilter === ALL || m.profit === profitFilter) &&
        (semanaFilter === ALL || m.semanaLabel === semanaFilter),
    );
  }, [metricas, profitFilter, semanaFilter]);

  // Aggregation: mean of ValorNumerico for each (profit, metrica) across the filtered weeks.
  // When semanaFilter === ALL, this is the average across all weeks.
  const metricasAgg = useMemo(() => {
    const key = (p: string, m: string) => `${p}||${m}`;
    const map = new Map<
      string,
      { profit: string; metrica: string; sum: number; count: number; isPercentual: boolean }
    >();
    metricasFiltered.forEach((m) => {
      if (m.valorNumerico === null) return;
      const k = key(m.profit, m.metrica);
      const cur = map.get(k) ?? {
        profit: m.profit,
        metrica: m.metrica,
        sum: 0,
        count: 0,
        isPercentual: m.isPercentual,
      };
      cur.sum += m.valorNumerico;
      cur.count += 1;
      map.set(k, cur);
    });
    return Array.from(map.values()).map((v) => ({
      profit: v.profit,
      metrica: v.metrica,
      valor: v.count > 0 ? v.sum / v.count : 0,
      count: v.count,
      isPercentual: v.isPercentual,
    }));
  }, [metricasFiltered]);

  const metricaSelectedRows = useMemo(
    () =>
      metricasAgg
        .filter((r) => r.metrica === metricaFilter)
        .sort((a, b) => b.valor - a.valor),
    [metricasAgg, metricaFilter],
  );

  const metricaSelectedMeta = useMemo(() => {
    const r = metricas.find((m) => m.metrica === metricaFilter);
    return {
      meta: r?.meta ?? "",
      cadencia: r?.cadencia ?? "",
      isPercentual: metricaSelectedRows[0]?.isPercentual ?? false,
    };
  }, [metricas, metricaFilter, metricaSelectedRows]);

  const fmtMetricValue = (v: number, isPct: boolean) =>
    isPct
      ? `${(v * 100).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`
      : v.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

  // Matrix rows: profit × metric average
  const matrixProfits = useMemo(
    () => Array.from(new Set(metricasAgg.map((r) => r.profit))).sort(),
    [metricasAgg],
  );

  const sortedRows = useMemo(() => {
    const rows = [...filtered];
    if (sortKey === null) {
      // Default: Fora first, then smaller desvio (more negative), then more clientes
      rows.sort((a, b) => {
        const so = STATUS_ORDER[a.statusRoas] - STATUS_ORDER[b.statusRoas];
        if (so !== 0) return so;
        const ad = a.desvioRoas ?? Number.POSITIVE_INFINITY;
        const bd = b.desvioRoas ?? Number.POSITIVE_INFINITY;
        if (ad !== bd) return ad - bd;
        return b.clientes - a.clientes;
      });
    } else {
      rows.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av === null || av === undefined) return 1;
        if (bv === null || bv === undefined) return -1;
        if (typeof av === "number" && typeof bv === "number") {
          return sortDir === "asc" ? av - bv : bv - av;
        }
        return sortDir === "asc"
          ? String(av).localeCompare(String(bv))
          : String(bv).localeCompare(String(av));
      });
    }
    return rows;
  }, [filtered, sortKey, sortDir]);

  const toggleSort = (k: SortKey) => {
    if (k === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(k);
      setSortDir(k === "clientes" || k === "roasMedio" || k === "desvioRoas" ? "desc" : "asc");
    }
  };

  const clearFilters = () => {
    setProfitFilter(ALL);
    setFranquiaFilter(ALL);
    setStatusFilter(ALL);
    setSemanaFilter(ALL);
    setSortKey(null);
  };

  return (
    <TooltipProvider delayDuration={150}>
      <div className="min-h-screen bg-muted/30">
        <header className="border-b bg-card">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">Profits</h1>
              <p className="text-sm text-muted-foreground">
                Distribuição de clientes por Profit e Franquia.
              </p>
            </div>
            <nav className="flex gap-2">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  Carteira Geral
                </Button>
              </Link>
              <Link to="/carteira-profits">
                <Button variant="ghost" size="sm">
                  Carteira por Profits
                </Button>
              </Link>
              <Link to="/profits">
                <Button variant="secondary" size="sm">
                  Indicadores Profits
                </Button>
              </Link>
              <Link to="/performance">
                <Button variant="ghost" size="sm">
                  Performance
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-6">
          <Card>
            <CardContent className="flex flex-wrap items-end gap-3 pt-6">
              <FilterSelect
                label="Profit"
                value={profitFilter}
                onChange={setProfitFilter}
                options={opts.profit}
              />
              <FilterSelect
                label="Franquia"
                value={franquiaFilter}
                onChange={setFranquiaFilter}
                options={opts.franquia}
              />
              <FilterSelect
                label="Status ROAS"
                value={statusFilter}
                onChange={setStatusFilter}
                options={["No Alvo", "Fora", "Sem Dado"]}
              />
              <Button variant="outline" size="sm" onClick={clearFilters} className="ml-auto">
                Limpar filtros
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <Kpi
              label="Total de Clientes"
              value={totalClientes.toLocaleString("pt-BR")}
              accent="oklch(0.6 0.2 250)"
            />
            <Kpi label="Total de Franquias" value={totalFranquias} accent="oklch(0.65 0.18 180)" />
            <Kpi label="Profit Managers" value={totalProfit} accent="oklch(0.7 0.18 145)" />
            <Kpi
              label="Média Clientes/Franquia"
              value={mediaPorFranquia.toFixed(1)}
              accent="oklch(0.78 0.15 80)"
            />
            <Kpi
              label="Franquias abaixo do ROAS alvo"
              value={<span className="inline-flex items-center gap-2">🔴 {foraDoAlvo}</span>}
              accent="oklch(0.6 0.22 25)"
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Clientes por Profit</CardTitle>
              </CardHeader>
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
              <CardHeader>
                <CardTitle className="text-base">Top 10 Franquias por Clientes</CardTitle>
              </CardHeader>
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

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  Franquias abaixo do ROAS esperado
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[420px]">
                {franquiasFora.length === 0 ? (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    Nenhuma franquia fora do alvo.
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={franquiasFora}
                      layout="vertical"
                      margin={{ left: 12, right: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" fontSize={11} />
                      <YAxis type="category" dataKey="franquia" width={160} fontSize={11} />
                      <Tooltip
                        content={({ active, payload }) =>
                          active && payload?.[0] ? (
                            <div className="rounded-md border bg-background p-2 shadow">
                              <RowTooltipContent
                                d={(payload[0].payload as { row: CarteiraRow }).row}
                              />
                            </div>
                          ) : null
                        }
                      />
                      <Bar dataKey="desvio" fill="oklch(0.6 0.22 25)" radius={[0, 4, 4, 0]}>
                        <LabelList
                          dataKey="desvio"
                          position="right"
                          fontSize={11}
                          formatter={(v: number) => fmtNum(v)}
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">ROAS Médio por Profit</CardTitle>
              </CardHeader>
              <CardContent className="h-[420px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roasPorProfit} margin={{ left: 12, right: 24, top: 12 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="profit"
                      fontSize={11}
                      interval={0}
                      angle={-25}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis fontSize={11} />
                    <Tooltip formatter={(v: number) => fmtNum(v)} />
                    <ReferenceLine
                      y={alvoMedio}
                      stroke="oklch(0.6 0.22 25)"
                      strokeDasharray="4 4"
                      label={{
                        value: `Alvo médio ${fmtNum(alvoMedio)}`,
                        position: "insideTopRight",
                        fontSize: 10,
                        fill: "oklch(0.6 0.22 25)",
                      }}
                    />
                    <Bar dataKey="roas" radius={[4, 4, 0, 0]}>
                      {roasPorProfit.map((entry, i) => (
                        <Cell
                          key={i}
                          fill={
                            entry.roas >= alvoMedio ? "oklch(0.65 0.18 150)" : "oklch(0.6 0.22 25)"
                          }
                        />
                      ))}
                      <LabelList
                        dataKey="roas"
                        position="top"
                        fontSize={10}
                        formatter={(v: number) => fmtNum(v)}
                      />
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
                      <SortableHead
                        label="Profit"
                        k="profit"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                      />
                      <SortableHead
                        label="Franquia"
                        k="franquia"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                      />
                      <SortableHead
                        label="Clientes"
                        k="clientes"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                        align="right"
                      />
                      <SortableHead
                        label="ROAS Médio"
                        k="roasMedio"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                        align="right"
                      />
                      <SortableHead
                        label="Alvo"
                        k="alvoRoas"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                        align="right"
                      />
                      <SortableHead
                        label="Desvio"
                        k="desvioRoas"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                        align="right"
                      />
                      <SortableHead
                        label="Status"
                        k="statusRoas"
                        sortKey={sortKey}
                        sortDir={sortDir}
                        onClick={toggleSort}
                      />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedRows.map((d, i) => {
                      const roasColor =
                        d.roasMedio === null || d.alvoRoas === null
                          ? "text-muted-foreground"
                          : d.roasMedio >= d.alvoRoas
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-600 dark:text-red-400";
                      const desvioColor =
                        d.desvioRoas === null
                          ? "text-muted-foreground"
                          : d.desvioRoas >= 0
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-600 dark:text-red-400";
                      return (
                        <UITooltip key={i}>
                          <TooltipTrigger asChild>
                            <TableRow
                              className={
                                d.statusRoas === "Fora" ? "bg-red-500/5 hover:bg-red-500/10" : ""
                              }
                            >
                              <TableCell className="font-medium">{d.profit}</TableCell>
                              <TableCell>{d.franquia}</TableCell>
                              <TableCell className="text-right tabular-nums">
                                {d.clientes.toLocaleString("pt-BR")}
                              </TableCell>
                              <TableCell
                                className={`text-right tabular-nums font-medium ${roasColor}`}
                              >
                                <span className="inline-flex items-center justify-end gap-1">
                                  {d.statusRoas === "Fora" && (
                                    <AlertTriangle className="h-3.5 w-3.5" />
                                  )}
                                  {fmtNum(d.roasMedio)}
                                </span>
                              </TableCell>
                              <TableCell className="text-right tabular-nums text-muted-foreground">
                                {fmtNum(d.alvoRoas)}
                              </TableCell>
                              <TableCell className={`text-right tabular-nums ${desvioColor}`}>
                                {fmtNum(d.desvioRoas)}
                              </TableCell>
                              <TableCell>
                                <StatusBadge status={d.statusRoas} />
                              </TableCell>
                            </TableRow>
                          </TooltipTrigger>
                          <TooltipContent side="left">
                            <RowTooltipContent d={d} />
                          </TooltipContent>
                        </UITooltip>
                      );
                    })}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </main>
      </div>
    </TooltipProvider>
  );
}

function Kpi({ label, value, accent }: { label: string; value: React.ReactNode; accent?: string }) {
  return (
    <Card>
      <CardContent className="pt-5">
        <div
          className="text-3xl font-bold tracking-tight"
          style={accent ? { color: accent } : undefined}
        >
          {value}
        </div>
        <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex min-w-[200px] flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-9">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL}>Todos</SelectItem>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function SortableHead({
  label,
  k,
  sortKey,
  sortDir,
  onClick,
  align,
}: {
  label: string;
  k: SortKey;
  sortKey: SortKey | null;
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
