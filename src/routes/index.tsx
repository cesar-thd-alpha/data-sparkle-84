import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { useMemo, useState } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LabelList, LineChart, Line, ComposedChart,
} from "recharts";
import { AlertTriangle, ArrowUpDown, TrendingUp, Users, Building2, DollarSign, Check, ChevronDown, Info, Download, Search } from "lucide-react";
import { getClientes, type ClienteRow } from "@/lib/clientes.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Tooltip as Tooltip2,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const clientesQuery = queryOptions({
  queryKey: ["clientes"],
  queryFn: () => getClientes(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carteira — Dashboard Executivo" },
      { name: "description", content: "Visão executiva da carteira de clientes: MRR, distribuição, contratos e riscos." },
      { property: "og:title", content: "Carteira — Dashboard Executivo" },
      { property: "og:description", content: "Visão executiva da carteira de clientes." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(clientesQuery),
  errorComponent: ({ error }) => (
    <div className="p-8 text-destructive">Erro ao carregar dados: {error.message}</div>
  ),
  notFoundComponent: () => <div className="p-8">Sem dados.</div>,
  component: CarteiraDashboard,
});

const STATUS_COLORS: Record<string, string> = {
  Ativo: "oklch(0.7 0.18 145)",
  Churn: "oklch(0.6 0.22 25)",
  Pausado: "oklch(0.78 0.15 80)",
};

const PLANO_COLORS: Record<string, string> = {
  Platinum: "oklch(0.55 0.18 280)",
  Gold: "oklch(0.78 0.15 80)",
  Silver: "oklch(0.75 0.03 260)",
};

const FAIXA_COLORS: Record<string, string> = {
  Vencido: "oklch(0.55 0.22 25)",
  "Até 30 dias": "oklch(0.7 0.2 45)",
  "31 a 60 dias": "oklch(0.78 0.15 80)",
  "61 a 90 dias": "oklch(0.75 0.14 140)",
  "Mais de 90 dias": "oklch(0.65 0.15 200)",
  Recorrente: "oklch(0.6 0.18 260)",
};

const FALLBACK = [
  "oklch(0.6 0.2 250)", "oklch(0.65 0.18 180)", "oklch(0.7 0.18 145)",
  "oklch(0.78 0.15 80)", "oklch(0.65 0.22 25)", "oklch(0.6 0.22 310)",
];

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const brlFull = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

type SortKey =
  | "cliente" | "franquia" | "profit" | "status" | "plano"
  | "tipoContrato" | "valorMensal" | "vencimentoDias" | "faixaVencimento";

function CarteiraDashboard() {
  const { data } = useSuspenseQuery(clientesQuery);

  const [profitFilter, setProfitFilter] = useState<string[]>([]);
  const [franquiaFilter, setFranquiaFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [planoFilter, setPlanoFilter] = useState<string[]>([]);
  const [tipoFilter, setTipoFilter] = useState<string[]>([]);
  const [faixaFilter, setFaixaFilter] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [clienteSearch, setClienteSearch] = useState("");

  const opts = useMemo(() => {
    const uniq = (k: keyof ClienteRow) =>
      Array.from(new Set(data.map((d) => String(d[k] ?? "")).filter(Boolean))).sort();
    return {
      profit: uniq("profit"),
      franquia: uniq("franquia"),
      status: uniq("status"),
      plano: uniq("plano"),
      tipo: uniq("tipoContrato"),
      faixa: uniq("faixaVencimento"),
    };
  }, [data]);

  const filtered = useMemo(() => {
    const match = (arr: string[], v: string) => arr.length === 0 || arr.includes(v);
    return data.filter(
      (d) =>
        match(profitFilter, d.profit) &&
        match(franquiaFilter, d.franquia) &&
        match(statusFilter, d.status) &&
        match(planoFilter, d.plano) &&
        match(tipoFilter, d.tipoContrato) &&
        match(faixaFilter, d.faixaVencimento),
    );
  }, [data, profitFilter, franquiaFilter, statusFilter, planoFilter, tipoFilter, faixaFilter]);

  // KPIs
  const totalClientes = filtered.length;
  const ativos = filtered.filter((d) => d.ativo).length;
  const churn = filtered.filter((d) => d.churn).length;
  const pausados = filtered.filter((d) => d.pausado).length;
  const franquias = new Set(filtered.map((d) => d.franquia)).size;
  const profits = new Set(filtered.map((d) => d.profit)).size;
  const mrr = filtered.filter((d) => d.ativo).reduce((s, d) => s + (d.valorMensal ?? 0), 0);
  const receitaContratada = filtered.reduce((s, d) => s + (d.valorContrato ?? 0), 0);
  const ticketMedio = ativos > 0 ? mrr / ativos : 0;
  const churnRate = totalClientes > 0 ? (churn / totalClientes) * 100 : 0;
  const vencendo30 = filtered.filter(
    (d) => d.ativo && d.vencimentoDias !== null && d.vencimentoDias >= 0 && d.vencimentoDias <= 30,
  ).length;
  const vencidos = filtered.filter(
    (d) => d.ativo && d.faixaVencimento === "Vencido",
  ).length;

  // Chart data
  const porStatus = useMemo(
    () =>
      [
        { name: "Ativo", value: ativos },
        { name: "Churn", value: churn },
        { name: "Pausado", value: pausados },
      ].filter((s) => s.value > 0),
    [ativos, churn, pausados],
  );

  const porProfit = useMemo(() => {
    const map = new Map<string, { clientes: number; mrr: number }>();
    filtered.forEach((d) => {
      const cur = map.get(d.profit) ?? { clientes: 0, mrr: 0 };
      cur.clientes += 1;
      if (d.ativo) cur.mrr += d.valorMensal ?? 0;
      map.set(d.profit, cur);
    });
    return Array.from(map.entries())
      .map(([profit, v]) => ({ profit, ...v }))
      .sort((a, b) => b.mrr - a.mrr);
  }, [filtered]);

  const topFranquias = useMemo(() => {
    const map = new Map<string, { clientes: number; mrr: number }>();
    filtered.forEach((d) => {
      const cur = map.get(d.franquia) ?? { clientes: 0, mrr: 0 };
      cur.clientes += 1;
      if (d.ativo) cur.mrr += d.valorMensal ?? 0;
      map.set(d.franquia, cur);
    });
    return Array.from(map.entries())
      .map(([franquia, v]) => ({ franquia, ...v }))
      .sort((a, b) => b.mrr - a.mrr)
      .slice(0, 10);
  }, [filtered]);

  const porPlano = useMemo(() => {
    const map = new Map<string, { clientes: number; mrr: number }>();
    filtered.forEach((d) => {
      const cur = map.get(d.plano) ?? { clientes: 0, mrr: 0 };
      cur.clientes += 1;
      if (d.ativo) cur.mrr += d.valorMensal ?? 0;
      map.set(d.plano, cur);
    });
    return Array.from(map.entries())
      .map(([plano, v]) => ({ plano, ...v }))
      .sort((a, b) => b.clientes - a.clientes);
  }, [filtered]);

  const porTipo = useMemo(() => {
    const map = new Map<string, number>();
    filtered.forEach((d) => {
      map.set(d.tipoContrato, (map.get(d.tipoContrato) ?? 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);
  }, [filtered]);

  const porFaixa = useMemo(() => {
    const order = ["Vencido", "Até 30 dias", "31 a 60 dias", "61 a 90 dias", "Mais de 90 dias", "Recorrente"];
    const map = new Map<string, number>();
    filtered.filter((d) => d.ativo).forEach((d) => {
      map.set(d.faixaVencimento, (map.get(d.faixaVencimento) ?? 0) + 1);
    });
    return order
      .filter((k) => map.has(k))
      .map((name) => ({ name, value: map.get(name) ?? 0 }));
  }, [filtered]);

  // Séries temporais mensais
  const timeSeries = useMemo(() => {
    type Point = {
      key: string;
      label: string;
      clientesTotal: number;
      mrrTotal: number;
      recebidos: number;
      perdidos: number;
    };
    const monthKey = (d: Date) =>
      `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
    const monthEnd = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 0, 23, 59, 59));
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    const withStart = filtered
      .map((d) => ({
        start: d.inicioContrato ? new Date(d.inicioContrato) : null,
        end: d.fimContrato ? new Date(d.fimContrato) : null,
        churn: d.churn,
        mrr: d.valorMensal ?? 0,
      }))
      .filter((d) => d.start && !isNaN(d.start.getTime()));

    if (withStart.length === 0) return [] as Point[];

    const minStart = new Date(
      Math.min(...withStart.map((d) => (d.start as Date).getTime())),
    );
    const maxEnd = withStart.reduce((max, d) => {
      const t = d.end && !isNaN(d.end.getTime()) ? d.end.getTime() : 0;
      return t > max ? t : max;
    }, 0);
    const now = new Date();
    const endBound = new Date(Math.max(now.getTime(), maxEnd));

    const points: Point[] = [];
    let y = minStart.getUTCFullYear();
    let m = minStart.getUTCMonth();
    while (y < endBound.getUTCFullYear() || (y === endBound.getUTCFullYear() && m <= endBound.getUTCMonth())) {
      const eom = monthEnd(y, m);
      const som = new Date(Date.UTC(y, m, 1));
      let clientesTotal = 0;
      let mrrTotal = 0;
      let recebidos = 0;
      let perdidos = 0;
      withStart.forEach((d) => {
        const s = d.start as Date;
        const e = d.end;
        const startedBy = s.getTime() <= eom.getTime();
        const notEnded = !e || isNaN(e.getTime()) || e.getTime() > eom.getTime();
        if (startedBy && notEnded) {
          clientesTotal += 1;
          mrrTotal += d.mrr;
        }
        if (s.getTime() >= som.getTime() && s.getTime() <= eom.getTime()) recebidos += 1;
        if (
          d.churn &&
          e &&
          !isNaN(e.getTime()) &&
          e.getTime() >= som.getTime() &&
          e.getTime() <= eom.getTime()
        ) {
          perdidos += 1;
        }
      });
      points.push({
        key: `${y}-${String(m + 1).padStart(2, "0")}`,
        label: `${meses[m]}/${String(y).slice(2)}`,
        clientesTotal,
        mrrTotal,
        recebidos,
        perdidos,
      });
      m += 1;
      if (m > 11) { m = 0; y += 1; }
    }
    // Limita a últimos 24 meses para legibilidade
    return points.slice(-24);
  }, [filtered]);

  const contratosEmRisco = useMemo(
    () =>
      filtered
        .filter(
          (d) =>
            d.ativo &&
            d.vencimentoDias !== null &&
            d.vencimentoDias <= 60 &&
            d.renovacaoAuto !== "Sim",
        )
        .sort((a, b) => (a.vencimentoDias ?? 0) - (b.vencimentoDias ?? 0)),
    [filtered],
  );

  const sortedRows = useMemo(() => {
    const rows = [...filtered];
    if (sortKey === null) {
      rows.sort((a, b) => {
        // Ativos primeiro, depois por vencimento crescente, depois maior MRR
        if (a.ativo !== b.ativo) return a.ativo ? -1 : 1;
        const av = a.vencimentoDias ?? Number.POSITIVE_INFINITY;
        const bv = b.vencimentoDias ?? Number.POSITIVE_INFINITY;
        if (av !== bv) return av - bv;
        return (b.valorMensal ?? 0) - (a.valorMensal ?? 0);
      });
    } else {
      rows.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av === null || av === undefined || av === "") return 1;
        if (bv === null || bv === undefined || bv === "") return -1;
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
      setSortDir(k === "valorMensal" ? "desc" : "asc");
    }
  };

  const clearFilters = () => {
    setProfitFilter([]);
    setFranquiaFilter([]);
    setStatusFilter([]);
    setPlanoFilter([]);
    setTipoFilter([]);
    setFaixaFilter([]);
    setSortKey(null);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Carteira — Dashboard Executivo</h1>
            <p className="text-sm text-muted-foreground">
              Visão consolidada de MRR, contratos, planos e riscos da carteira.
            </p>
          </div>
          <nav className="flex gap-2">
            <Link to="/"><Button variant="secondary" size="sm">Carteira</Button></Link>
            <Link to="/profits"><Button variant="ghost" size="sm">Profits</Button></Link>
            <Link to="/performance"><Button variant="ghost" size="sm">Performance</Button></Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-6">
        {/* Filters */}
        <Card>
          <CardContent className="flex flex-wrap items-end gap-3 pt-6">
            <FilterSelect label="Profit" value={profitFilter} onChange={setProfitFilter} options={opts.profit} />
            <FilterSelect label="Franquia" value={franquiaFilter} onChange={setFranquiaFilter} options={opts.franquia} />
            <FilterSelect label="Status" value={statusFilter} onChange={setStatusFilter} options={opts.status} />
            <FilterSelect label="Plano" value={planoFilter} onChange={setPlanoFilter} options={opts.plano} />
            <FilterSelect label="Tipo Contrato" value={tipoFilter} onChange={setTipoFilter} options={opts.tipo} />
            <FilterSelect label="Vencimento" value={faixaFilter} onChange={setFaixaFilter} options={opts.faixa} />
            <Button variant="outline" size="sm" onClick={clearFilters} className="ml-auto">
              Limpar filtros
            </Button>
          </CardContent>
        </Card>

        {/* KPIs — Row 1: financeiro */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Kpi
            icon={<DollarSign className="h-4 w-4" />}
            label="MRR (Receita Recorrente)"
            value={brl(mrr)}
            accent="oklch(0.6 0.2 250)"
            tooltip="Soma do MRR (planilhas) de Todos os Clientes Ativos"
          />
          <Kpi
            icon={<TrendingUp className="h-4 w-4" />}
            label="Receita Contratada"
            value={brl(receitaContratada)}
            accent="oklch(0.65 0.18 180)"
            tooltip="Soma do Valor de Contrato de todos os Clientes (Ativos, Pausados e Churn)"
          />
          <Kpi
            label="Ticket Médio"
            value={brl(ticketMedio)}
            accent="oklch(0.7 0.18 145)"
            tooltip="Soma do MRR de Todos os Clientes Ativos divido por Qtd de Clientes Ativos"
          />
          <Kpi
            label="Churn Rate"
            value={`${churnRate.toFixed(1)}%`}
            accent={churnRate > 5 ? "oklch(0.6 0.22 25)" : "oklch(0.7 0.18 145)"}
            tooltip="Qtd Clientes Churn dividido por Total de Clientes (Ativos, Pausados e Churn)"
          />
        </div>

        {/* KPIs — Row 2: carteira */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <Kpi icon={<Users className="h-4 w-4" />} label="Total de Clientes" value={totalClientes} />
          <Kpi label="Ativos" value={<span className="inline-flex items-center gap-2">🟢 {ativos}</span>} accent="oklch(0.7 0.18 145)" />
          <Kpi label="Churn" value={<span className="inline-flex items-center gap-2">🔴 {churn}</span>} accent="oklch(0.6 0.22 25)" />
          <Kpi label="Pausados" value={<span className="inline-flex items-center gap-2">🟡 {pausados}</span>} accent="oklch(0.78 0.15 80)" />
          <Kpi icon={<Building2 className="h-4 w-4" />} label="Franquias" value={franquias} />
          <Kpi label="Profits" value={profits} />
        </div>

        {/* Alertas */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <AlertCard
            title="Contratos vencidos (ativos)"
            value={vencidos}
            tone={vencidos > 0 ? "danger" : "ok"}
            description="Ativos com Faixa Vencimento = Vencido"
          />
          <AlertCard
            title="Vencem em até 30 dias"
            value={vencendo30}
            tone={vencendo30 > 0 ? "warn" : "ok"}
            description="Clientes ativos com vencimento próximo"
          />
        </div>

        {/* Charts row 1 */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="text-base">MRR por Profit</CardTitle></CardHeader>
            <CardContent className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porProfit} layout="vertical" margin={{ left: 12, right: 72 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} tickFormatter={(v) => brl(v)} />
                  <YAxis type="category" dataKey="profit" width={110} fontSize={11} />
                  <Tooltip formatter={(v: number, n) => (n === "mrr" ? brlFull(v) : v.toLocaleString("pt-BR"))} />
                  <Bar dataKey="mrr" fill="oklch(0.6 0.2 250)" radius={[0, 4, 4, 0]} name="MRR">
                    <LabelList dataKey="mrr" position="right" fontSize={11} formatter={(v: number) => brl(v)} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Status da Carteira</CardTitle></CardHeader>
            <CardContent className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={porStatus} dataKey="value" nameKey="name" outerRadius={110} label>
                    {porStatus.map((s, i) => (
                      <Cell key={i} fill={STATUS_COLORS[s.name] ?? FALLBACK[i % 6]} />
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
            <CardHeader><CardTitle className="text-base">Top 10 Franquias por MRR</CardTitle></CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topFranquias} layout="vertical" margin={{ left: 12, right: 72 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} tickFormatter={(v) => brl(v)} />
                  <YAxis type="category" dataKey="franquia" width={160} fontSize={11} />
                  <Tooltip formatter={(v: number) => brlFull(v)} />
                  <Bar dataKey="mrr" fill="oklch(0.65 0.18 180)" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="mrr" position="right" fontSize={11} formatter={(v: number) => brl(v)} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Distribuição por Plano</CardTitle></CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porPlano}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="plano" fontSize={11} />
                  <YAxis fontSize={11} allowDecimals={false} />
                  <Tooltip
                    formatter={(v: number, n) => (n === "mrr" ? brlFull(v) : v.toLocaleString("pt-BR"))}
                  />
                  <Legend />
                  <Bar dataKey="clientes" name="Clientes" radius={[4, 4, 0, 0]}>
                    {porPlano.map((e, i) => (
                      <Cell key={i} fill={PLANO_COLORS[e.plano] ?? FALLBACK[i % 6]} />
                    ))}
                    <LabelList dataKey="clientes" position="top" fontSize={10} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts row 3 */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">Contratos por Tipo</CardTitle></CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porTipo} layout="vertical" margin={{ left: 12, right: 48 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="name" width={110} fontSize={11} />
                  <Tooltip />
                  <Bar dataKey="value" fill="oklch(0.7 0.18 145)" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="value" position="right" fontSize={11} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Vencimento de Contratos (ativos)
              </CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porFaixa} layout="vertical" margin={{ left: 12, right: 48 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="name" width={130} fontSize={11} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {porFaixa.map((e, i) => (
                      <Cell key={i} fill={FAIXA_COLORS[e.name] ?? FALLBACK[i % 6]} />
                    ))}
                    <LabelList dataKey="value" position="right" fontSize={11} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Evolução mensal */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">Crescimento de Clientes por Mês</CardTitle></CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeries} margin={{ left: 8, right: 16, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" fontSize={10} />
                  <YAxis fontSize={11} allowDecimals={false} />
                  <Tooltip formatter={(v: number) => v.toLocaleString("pt-BR")} />
                  <Line
                    type="monotone"
                    dataKey="clientesTotal"
                    name="Clientes ativos"
                    stroke="oklch(0.6 0.2 250)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Crescimento de MRR por Mês</CardTitle></CardHeader>
            <CardContent className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeries} margin={{ left: 8, right: 16, top: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" fontSize={10} />
                  <YAxis fontSize={11} tickFormatter={(v) => brl(v)} width={80} />
                  <Tooltip formatter={(v: number) => brlFull(v)} />
                  <Line
                    type="monotone"
                    dataKey="mrrTotal"
                    name="MRR"
                    stroke="oklch(0.65 0.18 180)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">Clientes Recebidos vs. Perdidos por Mês</CardTitle></CardHeader>
          <CardContent className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={timeSeries} margin={{ left: 8, right: 16, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" fontSize={10} />
                <YAxis fontSize={11} allowDecimals={false} />
                <Tooltip formatter={(v: number) => v.toLocaleString("pt-BR")} />
                <Legend />
                <Bar dataKey="recebidos" name="Recebidos" fill="oklch(0.7 0.18 145)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="perdidos" name="Perdidos" fill="oklch(0.6 0.22 25)" radius={[4, 4, 0, 0]} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Contratos em risco */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              Contratos em risco (vencem em até 60 dias, sem renovação automática)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {contratosEmRisco.length === 0 ? (
              <div className="p-6 text-sm text-muted-foreground text-center">
                Nenhum contrato em risco identificado.
              </div>
            ) : (
              <ScrollArea className="h-[520px] w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Franquia</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead className="text-right">Valor Mensal</TableHead>
                      <TableHead className="text-right">Vence em</TableHead>
                      <TableHead>Faixa</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contratosEmRisco.map((d, i) => {
                      const v = d.vencimentoDias ?? 0;
                      const tone =
                        v < 0 ? "text-red-600 dark:text-red-400"
                          : v <= 30 ? "text-amber-600 dark:text-amber-400"
                            : "text-foreground";
                      return (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{d.cliente}</TableCell>
                          <TableCell>{d.franquia}</TableCell>
                          <TableCell>{d.plano}</TableCell>
                          <TableCell>{d.tipoContrato}</TableCell>
                          <TableCell className="text-right tabular-nums">
                            {d.valorMensal !== null ? brl(d.valorMensal) : "—"}
                          </TableCell>
                          <TableCell className={`text-right tabular-nums font-medium ${tone}`}>
                            {v < 0 ? `${Math.abs(v)}d vencido` : `${v}d`}
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" style={{ backgroundColor: `${FAIXA_COLORS[d.faixaVencimento] ?? "hsl(var(--muted))"}25`, color: FAIXA_COLORS[d.faixaVencimento] ?? "inherit" }}>
                              {d.faixaVencimento}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </ScrollArea>
            )}
          </CardContent>
        </Card>

        {/* Detalhamento completo */}
        <DetalhamentoCard
          rows={sortedRows}
          clienteSearch={clienteSearch}
          setClienteSearch={setClienteSearch}
          sortKey={sortKey}
          sortDir={sortDir}
          toggleSort={toggleSort}
        />
      </main>
    </div>
  );
}

function DetalhamentoCard({
  rows,
  clienteSearch,
  setClienteSearch,
  sortKey,
  sortDir,
  toggleSort,
}: {
  rows: ClienteRow[];
  clienteSearch: string;
  setClienteSearch: (v: string) => void;
  sortKey: SortKey | null;
  sortDir: "asc" | "desc";
  toggleSort: (k: SortKey) => void;
}) {
  const q = clienteSearch.trim().toLowerCase();
  const visible = q ? rows.filter((r) => r.cliente.toLowerCase().includes(q)) : rows;

  const downloadCsv = () => {
    const headers = [
      "Cliente", "Franquia", "Profit", "Status", "Plano", "Tipo Contrato",
      "Valor Mensal", "Valor Contrato", "Início Contrato", "Fim Contrato",
      "Renovação Auto", "Vencimento (dias)", "Faixa Vencimento", "Alerta",
      "Ativo", "Churn", "Pausado",
    ];
    const esc = (v: unknown) => {
      const s = v === null || v === undefined ? "" : String(v);
      return /[",;\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [headers.join(";")];
    for (const d of visible) {
      lines.push([
        d.cliente, d.franquia, d.profit, d.status, d.plano, d.tipoContrato,
        d.valorMensal ?? "", d.valorContrato ?? "",
        d.inicioContrato ? d.inicioContrato.slice(0, 10) : "",
        d.fimContrato ? d.fimContrato.slice(0, 10) : "",
        d.renovacaoAuto, d.vencimentoDias ?? "", d.faixaVencimento, d.alerta,
        d.ativo ? "Sim" : "Não", d.churn ? "Sim" : "Não", d.pausado ? "Sim" : "Não",
      ].map(esc).join(";"));
    }
    const blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `detalhamento-clientes-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base">
            Detalhamento de Clientes ({visible.length}
            {q && visible.length !== rows.length ? ` de ${rows.length}` : ""})
          </CardTitle>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={clienteSearch}
                onChange={(e) => setClienteSearch(e.target.value)}
                placeholder="Buscar cliente..."
                className="h-9 w-full pl-8 sm:w-64"
              />
            </div>
            <Button variant="outline" size="sm" onClick={downloadCsv} className="gap-2">
              <Download className="h-4 w-4" /> CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[520px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <SortableHead label="Cliente" k="cliente" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Franquia" k="franquia" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Profit" k="profit" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Status" k="status" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Plano" k="plano" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Tipo" k="tipoContrato" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                    <SortableHead label="Valor Mensal" k="valorMensal" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} align="right" />
                    <SortableHead label="Vence em" k="vencimentoDias" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} align="right" />
                    <SortableHead label="Faixa" k="faixaVencimento" sortKey={sortKey} sortDir={sortDir} onClick={toggleSort} />
                  </TableRow>
                </TableHeader>
                <TableBody>
              {visible.map((d, i) => {
                    const statusColor = STATUS_COLORS[d.status] ?? "hsl(var(--muted-foreground))";
                    return (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{d.cliente}</TableCell>
                        <TableCell>{d.franquia}</TableCell>
                        <TableCell>{d.profit}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" style={{ backgroundColor: `${statusColor}25`, color: statusColor }}>
                            {d.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{d.plano}</TableCell>
                        <TableCell>{d.tipoContrato}</TableCell>
                        <TableCell className="text-right tabular-nums">
                          {d.valorMensal !== null ? brl(d.valorMensal) : "—"}
                        </TableCell>
                        <TableCell className="text-right tabular-nums text-muted-foreground">
                          {d.vencimentoDias !== null ? `${d.vencimentoDias}d` : "—"}
                        </TableCell>
                        <TableCell className="text-muted-foreground">{d.faixaVencimento}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
  );
}

function Kpi({
  label,
  value,
  accent,
  icon,
  tooltip,
}: {
  label: string;
  value: React.ReactNode;
  accent?: string;
  icon?: React.ReactNode;
  tooltip?: string;
}) {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold tracking-tight"
            style={accent ? { color: accent } : undefined}
          >
            {value}
          </div>

          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>

        <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
          <span className="flex items-center justify-between">
            {label}

            {tooltip && (
              <TooltipProvider>
                <Tooltip2>
                  <TooltipTrigger asChild>
                    <span className="cursor-pointer">
                      <Info className="w-4" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltip}</p>
                  </TooltipContent>
                </Tooltip2>
              </TooltipProvider>
            )}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function AlertCard({
  title, value, description, tone,
}: {
  title: string;
  value: number;
  description: string;
  tone: "ok" | "warn" | "danger";
}) {
  const color =
    tone === "danger" ? "oklch(0.6 0.22 25)"
      : tone === "warn" ? "oklch(0.78 0.15 80)"
        : "oklch(0.7 0.18 145)";
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-medium">{title}</div>
            <div className="text-xs text-muted-foreground">{description}</div>
          </div>
          <div className="text-3xl font-bold tabular-nums" style={{ color }}>{value}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function FilterSelect({
  label, value, onChange, options,
}: { label: string; value: string[]; onChange: (v: string[]) => void; options: string[] }) {
  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  const display =
    value.length === 0
      ? "Todos"
      : value.length === 1
        ? value[0]
        : `${value.length} selecionados`;
  return (
    <div className="flex min-w-[180px] flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-9 w-full justify-between font-normal"
          >
            <span className="truncate">{display}</span>
            <ChevronDown className="h-4 w-4 opacity-60" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64 p-0">
          <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
            <span className="font-medium">{label}</span>
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => onChange([])}
            >
              Limpar
            </button>
          </div>
          <ScrollArea className="max-h-64">
            <div className="p-1">
              {options.map((o) => {
                const checked = value.includes(o);
                return (
                  <button
                    type="button"
                    key={o}
                    onClick={() => toggle(o)}
                    className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
                  >
                    <Checkbox checked={checked} className="pointer-events-none" />
                    <span className="flex-1 truncate text-left">{o}</span>
                    {checked && <Check className="h-3.5 w-3.5 text-primary" />}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function SortableHead({
  label, k, sortKey, sortDir, onClick, align,
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