import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { useMemo, useState } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LabelList,
} from "recharts";
import { ChevronDown, Check, DollarSign, Users, Info } from "lucide-react";
import { getClientes, type ClienteRow } from "@/lib/clientes.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
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

export const Route = createFileRoute("/carteira-profits")({
  head: () => ({
    meta: [
      { title: "Carteira por Profits" },
      { name: "description", content: "Análise operacional da carteira de clientes por Profit: receita, ranking e participação." },
      { property: "og:title", content: "Carteira por Profits" },
      { property: "og:description", content: "Análise operacional dos Profits: receita, ranking e participação." },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(clientesQuery),
  errorComponent: ({ error }) => (
    <div className="p-8 text-destructive">Erro ao carregar dados: {error.message}</div>
  ),
  notFoundComponent: () => <div className="p-8">Sem dados.</div>,
  component: CarteiraProfitsPage,
});

const PALETTE = [
  "oklch(0.6 0.2 250)", "oklch(0.65 0.18 180)", "oklch(0.7 0.18 145)",
  "oklch(0.78 0.15 80)", "oklch(0.65 0.22 25)", "oklch(0.6 0.22 310)",
  "oklch(0.55 0.18 280)", "oklch(0.72 0.14 40)", "oklch(0.5 0.15 200)",
];

const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const brlFull = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function CarteiraProfitsPage() {
  const { data } = useSuspenseQuery(clientesQuery);

  const [profitFilter, setProfitFilter] = useState<string[]>([]);
  const [franquiaFilter, setFranquiaFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [tipoFilter, setTipoFilter] = useState<string[]>([]);
  const [faixaFilter, setFaixaFilter] = useState<string[]>([]);
  const [inicioDe, setInicioDe] = useState<string>("");
  const [fimAte, setFimAte] = useState<string>("");

  const opts = useMemo(() => {
    const uniq = (k: keyof ClienteRow) =>
      Array.from(new Set(data.map((d) => String(d[k] ?? "")).filter(Boolean))).sort();
    return {
      profit: uniq("profit"),
      franquia: uniq("franquia"),
      status: uniq("status"),
      tipo: uniq("tipoContrato"),
      faixa: uniq("faixaVencimento"),
    };
  }, [data]);

  const filtered = useMemo(() => {
    const match = (arr: string[], v: string) => arr.length === 0 || arr.includes(v);
    const inicioDeTs = inicioDe ? new Date(inicioDe + "T00:00:00").getTime() : null;
    const fimAteTs = fimAte ? new Date(fimAte + "T23:59:59").getTime() : null;
    return data.filter(
      (d) =>
        match(profitFilter, d.profit) &&
        match(franquiaFilter, d.franquia) &&
        match(statusFilter, d.status) &&
        match(tipoFilter, d.tipoContrato) &&
        match(faixaFilter, d.faixaVencimento) &&
        (inicioDeTs === null ||
          (d.inicioContrato ? new Date(d.inicioContrato).getTime() >= inicioDeTs : false)) &&
        (fimAteTs === null ||
          (d.fimContrato ? new Date(d.fimContrato).getTime() <= fimAteTs : false)),
    );
  }, [data, profitFilter, franquiaFilter, statusFilter, tipoFilter, faixaFilter, inicioDe, fimAte]);

  const porProfit = useMemo(() => {
    const map = new Map<
      string,
      {
        clientes: number;
        ativosMRR: number;
        ativosTCV: number;
        totalAtivos: number;
        mrr: number;
        tcv: number;
      }
    >();

    filtered.forEach((d) => {
      const cur = map.get(d.profit) ?? {
        clientes: 0,
        ativosMRR: 0,
        ativosTCV: 0,
        totalAtivos: 0,
        mrr: 0,
        tcv: 0,
      };

      cur.clientes++;

      if (d.ativo) {
        if (d.tipoContrato.toUpperCase() === "MENSAL") {
          cur.ativosMRR++;
          cur.mrr += d.valorMensal ?? 0;
        } else {
          cur.ativosTCV++;
          cur.tcv += d.valorMensal ?? 0;
        }
        cur.totalAtivos++;
      }

      map.set(d.profit, cur);
    });

    return Array.from(map.entries())
      .map(([profit, v]) => ({
        profit,
        clientes: v.clientes,
        ativosMRR: v.ativosMRR,
        ativosTCV: v.ativosTCV,
        totalAtivos: v.totalAtivos,
        mrr: v.mrr,
        tcv: v.tcv,
        ticketMedioMRR:
          v.ativosMRR > 0 ? v.mrr / v.ativosMRR : 0,
        ticketMedioTCV:
          v.ativosTCV > 0 ? v.tcv / v.ativosTCV : 0,
      }))
      .sort((a, b) => (b.mrr + b.tcv) - (a.mrr + a.tcv));
  }, [filtered]);

  const totalProfits = porProfit.length;
  const totalMrr = porProfit.reduce((s, p) => s + p.mrr, 0);
  const totalAtivosMRR = porProfit.reduce((s, p) => s + p.ativosMRR, 0);
  const totalAtivosTCV = porProfit.reduce((s, p) => s + p.ativosTCV, 0);
  const totalClientes = porProfit.reduce((s, p) => s + p.clientes, 0);
  const receitaMediaPorProfit = totalProfits > 0 ? totalMrr / totalProfits : 0;
  const clientesMediosPorProfit = totalProfits > 0 ? totalClientes / totalProfits : 0;
  const ticketMedioGeral = totalAtivosMRR > 0 ? totalMrr / totalAtivosMRR : 0;

  const participacao = useMemo(
    () =>
      porProfit
        .filter((p) => p.mrr > 0)
        .map((p) => ({ name: p.profit, value: p.mrr })),
    [porProfit],
  );

  const clearFilters = () => {
    setProfitFilter([]);
    setFranquiaFilter([]);
    setStatusFilter([]);
    setTipoFilter([]);
    setFaixaFilter([]);
    setInicioDe("");
    setFimAte("");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Carteira por Profits</h1>
            <p className="text-sm text-muted-foreground">
              Visão operacional dos Profits: receita, ranking, participação e clientes por Profit.
            </p>
          </div>
          <nav className="flex gap-2">
            <Link to="/"><Button variant="ghost" size="sm">Carteira Geral</Button></Link>
            <Link to="/carteira-profits"><Button variant="secondary" size="sm">Carteira por Profits</Button></Link>
            <Link to="/profits"><Button variant="ghost" size="sm">Indicadores Profits</Button></Link>
            <Link to="/performance"><Button variant="ghost" size="sm">Performance</Button></Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-6">
        {/* Filtros */}
        <Card>
          <CardContent className="flex flex-wrap items-end gap-3 pt-6">
            <FilterSelect label="Profit" value={profitFilter} onChange={setProfitFilter} options={opts.profit} />
            <FilterSelect label="Franquia" value={franquiaFilter} onChange={setFranquiaFilter} options={opts.franquia} />
            <FilterSelect label="Status" value={statusFilter} onChange={setStatusFilter} options={opts.status} />
            <FilterSelect label="Tipo Contrato" value={tipoFilter} onChange={setTipoFilter} options={opts.tipo} />
            <FilterSelect label="Vencimento" value={faixaFilter} onChange={setFaixaFilter} options={opts.faixa} />
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Início a partir de</label>
              <Input type="date" value={inicioDe} onChange={(e) => setInicioDe(e.target.value)} className="h-9 w-[160px]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-muted-foreground">Fim até</label>
              <Input type="date" value={fimAte} onChange={(e) => setFimAte(e.target.value)} className="h-9 w-[160px]" />
            </div>
            <Button variant="outline" size="sm" onClick={clearFilters} className="ml-auto">
              Limpar filtros
            </Button>
          </CardContent>
        </Card>

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <Kpi label="Total de Profits" value={totalProfits} accent="oklch(0.6 0.2 250)" icon={<Users className="h-4 w-4" />} />
          <Kpi label="MRR Total" value={brl(totalMrr)} accent="oklch(0.65 0.18 180)" icon={<DollarSign className="h-4 w-4" />} tooltip="Soma do MRR de todos os clientes ativos, agregado por Profit." />
          <Kpi label="Receita média por Profit" value={brl(receitaMediaPorProfit)} accent="oklch(0.7 0.18 145)" tooltip="MRR total dividido pelo número de Profits." />
          <Kpi label="Ticket Médio" value={brl(ticketMedioGeral)} accent="oklch(0.78 0.15 80)" tooltip="MRR total dividido pelo total de clientes ativos." />
          <Kpi label="Clientes por Profit" value={clientesMediosPorProfit.toFixed(1)} accent="oklch(0.6 0.22 310)" />
          <Kpi label="Total de Clientes" value={totalClientes.toLocaleString("pt-BR")} />
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
                  <YAxis type="category" dataKey="profit" width={130} fontSize={11} />
                  <Tooltip formatter={(v: number) => brlFull(v)} />
                  <Bar dataKey="mrr" fill="oklch(0.6 0.2 250)" radius={[0, 4, 4, 0]} name="MRR">
                    <LabelList dataKey="mrr" position="right" fontSize={11} formatter={(v: number) => brl(v)} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Participação (MRR)</CardTitle></CardHeader>
            <CardContent className="h-[360px]">
              {participacao.length === 0 ? (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  Sem MRR no filtro atual.
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={participacao} dataKey="value" nameKey="name" outerRadius={110} label={(e) => `${((e.percent ?? 0) * 100).toFixed(0)}%`}>
                      {participacao.map((_, i) => (
                        <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => brlFull(v)} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Charts row 2 */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base">Clientes Ativos (MRR + TCV) por Profit</CardTitle></CardHeader>
            <CardContent className="h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porProfit} layout="vertical" margin={{ left: 12, right: 48 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} allowDecimals={false} />
                  <YAxis type="category" dataKey="profit" width={130} fontSize={11} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="totalAtivos" name="Clientes Ativos" fill="oklch(0.7 0.18 145)" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="totalAtivos" position="right" fontSize={11} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Ticket Médio (MRR) por Profit</CardTitle></CardHeader>
            <CardContent className="h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={porProfit} layout="vertical" margin={{ left: 12, right: 72 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" fontSize={11} tickFormatter={(v) => brl(v)} />
                  <YAxis type="category" dataKey="profit" width={130} fontSize={11} />
                  <Tooltip formatter={(v: number) => brlFull(v)} />
                  <Bar dataKey="ticketMedioMRR" fill="oklch(0.78 0.15 80)" radius={[0, 4, 4, 0]} name="Ticket Médio">
                    <LabelList dataKey="ticketMedioMRR" position="right" fontSize={11} formatter={(v: number) => brl(v)} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tabela */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ranking de Profits ({porProfit.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Profit</TableHead>
                  <TableHead className="text-right">Clientes</TableHead>
                  <TableHead className="text-right">Ativos</TableHead>
                  <TableHead className="text-right">MRR</TableHead>
                  <TableHead className="text-right">Ticket Médio MRR</TableHead>
                  <TableHead className="text-right">Ticket Médio TCV</TableHead>
                  <TableHead className="text-right">Participação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {porProfit.map((p) => {
                  const part = totalMrr > 0 ? (p.mrr / totalMrr) * 100 : 0;
                  return (
                    <TableRow key={p.profit}>
                      <TableCell className="font-medium">{p.profit}</TableCell>
                      <TableCell className="text-right tabular-nums">{p.clientes.toLocaleString("pt-BR")}</TableCell>
                      <TableCell className="text-right tabular-nums">{(p.ativosMRR + p.ativosTCV).toLocaleString("pt-BR")}</TableCell>
                      <TableCell className="text-right tabular-nums">{brl(p.mrr)}</TableCell>
                      <TableCell className="text-right tabular-nums">{brl(p.ticketMedioMRR)}</TableCell>
                      <TableCell className="text-right tabular-nums">{brl(p.ticketMedioTCV)}</TableCell>
                      <TableCell className="text-right tabular-nums text-muted-foreground">{part.toFixed(1)}%</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function Kpi({
  label, value, accent, icon, tooltip,
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
          <div className="text-2xl font-bold tracking-tight" style={accent ? { color: accent } : undefined}>
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
          <Button variant="outline" size="sm" className="h-9 w-full justify-between font-normal">
            <span className="truncate">{display}</span>
            <ChevronDown className="h-4 w-4 opacity-60" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64 p-0">
          <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
            <span className="font-medium">{label}</span>
            <button type="button" className="text-muted-foreground hover:text-foreground" onClick={() => onChange([])}>
              Limpar
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto p-1">
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
        </PopoverContent>
      </Popover>
    </div>
  );
}