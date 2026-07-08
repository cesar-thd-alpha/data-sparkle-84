import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
  PieChart,
  Pie,
  Cell,
  Legend,
  LabelList,
} from "recharts";
import { getMetrics, type Metric } from "@/lib/metrics.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const metricsQuery = queryOptions({
  queryKey: ["metrics"],
  queryFn: () => getMetrics(),
});

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Dashboard de Performance" },
      {
        name: "description",
        content: "Acompanhe metas, status e desempenho por responsável e categoria.",
      },
      { property: "og:title", content: "Dashboard de Performance" },
      {
        property: "og:description",
        content: "Acompanhe metas, status e desempenho por responsável e categoria.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(metricsQuery),
  errorComponent: ({ error }) => (
    <div className="p-8 text-destructive">Erro ao carregar dados: {error.message}</div>
  ),
  notFoundComponent: () => <div className="p-8">Sem dados.</div>,
  component: Dashboard,
});

const STATUS_COLORS: Record<string, string> = {
  "No Alvo": "oklch(0.7 0.18 145)",
  Fora: "oklch(0.65 0.22 25)",
  "Sem Dado": "oklch(0.7 0.04 260)",
  Avaliar: "oklch(0.78 0.15 80)",
};
const FALLBACK_COLORS = [
  "oklch(0.6 0.2 250)",
  "oklch(0.65 0.18 180)",
  "oklch(0.7 0.18 145)",
  "oklch(0.78 0.15 80)",
  "oklch(0.65 0.22 25)",
  "oklch(0.6 0.22 310)",
];

const ALL = "__all__";

function Dashboard() {
  const { data } = useSuspenseQuery(metricsQuery);

  const [respFilter, setRespFilter] = useState<string>(ALL);
  const [catFilter, setCatFilter] = useState<string>(ALL);
  const [statusFilter, setStatusFilter] = useState<string>(ALL);
  const [cadFilter, setCadFilter] = useState<string>(ALL);

  const opts = useMemo(() => {
    const uniq = (k: keyof Metric) =>
      Array.from(new Set(data.map((d) => d[k]).filter((v): v is string => !!v))).sort();
    return {
      resp: uniq("responsavel"),
      cat: uniq("categoria"),
      status: uniq("status"),
      cad: uniq("cadencia"),
    };
  }, [data]);

  const filtered = useMemo(
    () =>
      data.filter(
        (d) =>
          (respFilter === ALL || d.responsavel === respFilter) &&
          (catFilter === ALL || d.categoria === catFilter) &&
          (statusFilter === ALL || d.status === statusFilter) &&
          (cadFilter === ALL || d.cadencia === cadFilter),
      ),
    [data, respFilter, catFilter, statusFilter, cadFilter],
  );

  const total = filtered.length;
  const noAlvo = filtered.filter((d) => d.status === "No Alvo").length;
  const fora = filtered.filter((d) => d.status === "Fora").length;
  const semDado = filtered.filter((d) => d.status === "Sem Dado").length;
  const avaliar = filtered.filter((d) => d.status === "Avaliar").length;
  const comDado = noAlvo + fora;
  const pctNoAlvo = comDado > 0 ? (noAlvo / comDado) * 100 : 0;

  const porResponsavel = useMemo(() => {
    const map = new Map<string, { total: number; noAlvo: number }>();
    filtered.forEach((d) => {
      const k = d.responsavel || "—";
      const cur = map.get(k) ?? { total: 0, noAlvo: 0 };
      const avaliavel = d.status === "No Alvo" || d.status === "Fora";
      if (avaliavel) cur.total += 1;
      if (d.status === "No Alvo") cur.noAlvo += 1;
      map.set(k, cur);
    });
    return Array.from(map.entries())
      .map(([resp, v]) => ({
        resp,
        pct: v.total > 0 ? (v.noAlvo / v.total) * 100 : 0,
        noAlvo: v.noAlvo,
        total: v.total,
      }))
      .sort((a, b) => b.pct - a.pct);
  }, [filtered]);

  const statusPie = useMemo(
    () =>
      [
        { name: "No Alvo", value: noAlvo },
        { name: "Fora", value: fora },
        { name: "Sem Dado", value: semDado },
        { name: "Avaliar", value: avaliar },
      ].filter((s) => s.value > 0),
    [noAlvo, fora, semDado, avaliar],
  );

  const porCategoria = useMemo(() => {
    type Row = {
      name: string;
      "No Alvo": number;
      Fora: number;
      "Sem Dado": number;
      Avaliar: number;
    };
    const map = new Map<string, Row>();
    filtered.forEach((d) => {
      const k = d.categoria || "—";
      const cur: Row = map.get(k) ?? { name: k, "No Alvo": 0, Fora: 0, "Sem Dado": 0, Avaliar: 0 };
      const s = (d.status || "Sem Dado") as keyof Omit<Row, "name">;
      if (s === "No Alvo" || s === "Fora" || s === "Sem Dado" || s === "Avaliar") {
        cur[s] += 1;
      }
      map.set(k, cur);
    });
    return Array.from(map.values()).sort(
      (a, b) =>
        b["No Alvo"] +
        b.Fora +
        b["Sem Dado"] +
        b.Avaliar -
        (a["No Alvo"] + a.Fora + a["Sem Dado"] + a.Avaliar),
    );
  }, [filtered]);

  const porCadencia = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((d) => {
      const k = d.cadencia || "—";
      map.set(k, (map.get(k) ?? 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [filtered]);

  const clearFilters = () => {
    setRespFilter(ALL);
    setCatFilter(ALL);
    setStatusFilter(ALL);
    setCadFilter(ALL);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Dashboard de Performance</h1>
            <p className="text-sm text-muted-foreground">
              Acompanhamento de metas por responsável, categoria e cadência.
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
              <Button variant="ghost" size="sm">
                Indicadores Profits
              </Button>
            </Link>
            <Link to="/performance">
              <Button variant="secondary" size="sm">
                Performance
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-6">
        {/* Filters */}
        <Card>
          <CardContent className="flex flex-wrap items-end gap-3 pt-6">
            <FilterSelect
              label="Responsável"
              value={respFilter}
              onChange={setRespFilter}
              options={opts.resp}
            />
            <FilterSelect
              label="Categoria"
              value={catFilter}
              onChange={setCatFilter}
              options={opts.cat}
            />
            <FilterSelect
              label="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              options={opts.status}
            />
            <FilterSelect
              label="Cadência"
              value={cadFilter}
              onChange={setCadFilter}
              options={opts.cad}
            />
            <Button variant="outline" size="sm" onClick={clearFilters} className="ml-auto">
              Limpar filtros
            </Button>
          </CardContent>
        </Card>

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <Kpi label="Indicadores" value={total} />
          <Kpi label="No Alvo" value={noAlvo} accent="oklch(0.7 0.18 145)" />
          <Kpi label="Fora da Meta" value={fora} accent="oklch(0.65 0.22 25)" />
          <Kpi label="Sem Dados" value={semDado} accent="oklch(0.7 0.04 260)" />
          <Kpi label="Avaliar" value={avaliar} accent="oklch(0.78 0.15 80)" />
          <Kpi label="% No Alvo" value={`${pctNoAlvo.toFixed(1)}%`} accent="oklch(0.6 0.2 250)" />
        </div>

        {/* Charts row 1 */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-base">% Metas Atingidas por Responsável</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porResponsavel} layout="vertical" margin={{ left: 12, right: 48 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis
                    type="number"
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                    fontSize={12}
                  />
                  <YAxis type="category" dataKey="resp" width={90} fontSize={12} />
                  <Tooltip
                    formatter={(v: number, _n, p) => [
                      `${v.toFixed(1)}% (${p.payload.noAlvo}/${p.payload.total})`,
                      "No Alvo",
                    ]}
                  />
                  <Bar dataKey="pct" fill="oklch(0.6 0.2 250)" radius={[0, 4, 4, 0]}>
                    <LabelList
                      dataKey="pct"
                      position="right"
                      formatter={(v: number) => `${v.toFixed(1)}%`}
                      fontSize={11}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Distribuição por Status</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statusPie} dataKey="value" nameKey="name" outerRadius={100} label>
                    {statusPie.map((s, i) => (
                      <Cell key={i} fill={STATUS_COLORS[s.name] ?? FALLBACK_COLORS[i % 6]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts row 2 */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Status por Categoria</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porCategoria}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" fontSize={11} />
                  <YAxis fontSize={11} allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="No Alvo" stackId="a" fill={STATUS_COLORS["No Alvo"]} />
                  <Bar dataKey="Fora" stackId="a" fill={STATUS_COLORS["Fora"]} />
                  <Bar dataKey="Sem Dado" stackId="a" fill={STATUS_COLORS["Sem Dado"]} />
                  <Bar dataKey="Avaliar" stackId="a" fill={STATUS_COLORS["Avaliar"]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Indicadores por Cadência</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porCadencia} layout="vertical" margin={{ left: 24, right: 24 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="name" width={180} fontSize={11} />
                  <Tooltip />
                  <Bar dataKey="value" fill="oklch(0.65 0.18 180)" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="value" position="right" fontSize={11} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detail table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Indicadores ({filtered.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[420px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Responsável</TableHead>
                    <TableHead>Métrica</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Cadência</TableHead>
                    <TableHead>Meta</TableHead>
                    <TableHead>Realizado</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-medium">{d.responsavel}</TableCell>
                      <TableCell>{d.metrica}</TableCell>
                      <TableCell>{d.categoria}</TableCell>
                      <TableCell>{d.cadencia}</TableCell>
                      <TableCell>{d.meta || "—"}</TableCell>
                      <TableCell>{d.realizado || "—"}</TableCell>
                      <TableCell>
                        <Badge
                          style={{
                            backgroundColor: STATUS_COLORS[d.status ?? ""] ?? "oklch(0.7 0.04 260)",
                            color: "white",
                          }}
                        >
                          {d.status}
                        </Badge>
                      </TableCell>
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
    <div className="flex min-w-[160px] flex-col gap-1">
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
