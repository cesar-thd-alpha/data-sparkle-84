import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import {
  a as CardTitle,
  c as TableCell,
  d as TableRow,
  i as CardHeader,
  l as TableHead,
  n as Card,
  o as Table,
  r as CardContent,
  s as TableBody,
  t as Button,
  u as TableHeader,
} from "./table-DDKeZQX2.mjs";
import {
  a as Download,
  c as ChevronDown,
  d as ArrowUpDown,
  f as TriangleAlert,
  i as Info,
  l as Check,
  n as TrendingUp,
  o as DollarSign,
  r as Search,
  t as Users,
  u as Building2,
} from "../_libs/lucide-react.mjs";
import {
  a as PopoverTrigger,
  i as PopoverContent,
  n as Input,
  r as Popover,
  t as Checkbox,
} from "./input-2OKRR5EO.mjs";
import {
  i as TooltipTrigger,
  n as TooltipContent,
  r as TooltipProvider,
  t as Tooltip,
} from "./tooltip-BxplWPAZ.mjs";
import {
  a as YAxis,
  c as CartesianGrid,
  d as Pie,
  f as LabelList,
  g as Legend,
  h as Tooltip$1,
  i as LineChart,
  m as ResponsiveContainer,
  n as PieChart,
  o as XAxis,
  p as Cell,
  r as BarChart,
  s as Line,
  t as ComposedChart,
  u as Bar,
} from "../_libs/recharts+[...].mjs";
import { n as ScrollArea, t as Badge } from "./scroll-area-D2lj85AQ.mjs";
import { t as clientesQuery } from "./routes-G_Jhdta_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-nIi_a2Zm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_COLORS = {
  Ativo: "oklch(0.7 0.18 145)",
  Churn: "oklch(0.6 0.22 25)",
  Pausado: "oklch(0.78 0.15 80)",
};
var PLANO_COLORS = {
  Platinum: "oklch(0.55 0.18 280)",
  Gold: "oklch(0.78 0.15 80)",
  Silver: "oklch(0.75 0.03 260)",
};
var FAIXA_COLORS = {
  Vencido: "oklch(0.55 0.22 25)",
  "Até 30 dias": "oklch(0.7 0.2 45)",
  "31 a 60 dias": "oklch(0.78 0.15 80)",
  "61 a 90 dias": "oklch(0.75 0.14 140)",
  "Mais de 90 dias": "oklch(0.65 0.15 200)",
  Recorrente: "oklch(0.6 0.18 260)",
};
var FALLBACK = [
  "oklch(0.6 0.2 250)",
  "oklch(0.65 0.18 180)",
  "oklch(0.7 0.18 145)",
  "oklch(0.78 0.15 80)",
  "oklch(0.65 0.22 25)",
  "oklch(0.6 0.22 310)",
];
var brl = (v) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
var brlFull = (v) =>
  v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
function CarteiraDashboard() {
  const { data } = useSuspenseQuery(clientesQuery);
  const [profitFilter, setProfitFilter] = (0, import_react.useState)([]);
  const [franquiaFilter, setFranquiaFilter] = (0, import_react.useState)([]);
  const [statusFilter, setStatusFilter] = (0, import_react.useState)([]);
  const [planoFilter, setPlanoFilter] = (0, import_react.useState)([]);
  const [tipoFilter, setTipoFilter] = (0, import_react.useState)([]);
  const [faixaFilter, setFaixaFilter] = (0, import_react.useState)([]);
  const [sortKey, setSortKey] = (0, import_react.useState)(null);
  const [sortDir, setSortDir] = (0, import_react.useState)("desc");
  const [clienteSearch, setClienteSearch] = (0, import_react.useState)("");
  const [mesRef, setMesRef] = (0, import_react.useState)("");
  const opts = (0, import_react.useMemo)(() => {
    const uniq = (k) =>
      Array.from(new Set(data.map((d) => String(d[k] ?? "")).filter(Boolean))).sort();
    return {
      profit: uniq("profit"),
      franquia: uniq("franquia"),
      status: uniq("status"),
      tipo: uniq("tipoContrato"),
      faixa: uniq("faixaVencimento"),
    };
  }, [data]);
  const refBounds = (0, import_react.useMemo)(() => {
    if (!mesRef) return null;
    const [y, m] = mesRef.split("-").map(Number);
    if (!y || !m) return null;
    return {
      start: Date.UTC(y, m - 1, 1, 0, 0, 0),
      end: Date.UTC(y, m, 0, 23, 59, 59),
    };
  }, [mesRef]);
  const inCarteira = import_react.useCallback(
    (d) => {
      if (!refBounds) return true;
      if (!d.inicioContrato) return false;
      const ini = new Date(d.inicioContrato).getTime();
      if (isNaN(ini)) return false;
      if (ini > refBounds.end) return false;
      if (!d.fimContrato) return true;
      const fim = new Date(d.fimContrato).getTime();
      if (isNaN(fim)) return true;
      return fim >= refBounds.start;
    },
    [refBounds],
  );
  const tcvNoMes = import_react.useCallback(
    (d) => {
      if (d.tipoContrato.toUpperCase() === "MENSAL") return false;
      if (!d.ativo) return false;
      if (!refBounds) return true;
      if (!d.inicioContrato) return false;
      const t = new Date(d.inicioContrato).getTime();
      if (isNaN(t)) return false;
      return t >= refBounds.start && t <= refBounds.end;
    },
    [refBounds],
  );
  const filtered = (0, import_react.useMemo)(() => {
    const match = (arr, v) => arr.length === 0 || arr.includes(v);
    return data.filter(
      (d) =>
        match(profitFilter, d.profit) &&
        match(franquiaFilter, d.franquia) &&
        match(statusFilter, d.status) &&
        match(planoFilter, d.plano) &&
        match(tipoFilter, d.tipoContrato) &&
        match(faixaFilter, d.faixaVencimento) &&
        inCarteira(d),
    );
  }, [
    data,
    profitFilter,
    franquiaFilter,
    statusFilter,
    planoFilter,
    tipoFilter,
    faixaFilter,
    inCarteira,
  ]);
  const tcvFiltered = (0, import_react.useMemo)(() => {
    const match = (arr, v) => arr.length === 0 || arr.includes(v);
    return data.filter(
      (d) =>
        match(profitFilter, d.profit) &&
        match(franquiaFilter, d.franquia) &&
        match(statusFilter, d.status) &&
        match(planoFilter, d.plano) &&
        match(tipoFilter, d.tipoContrato) &&
        match(faixaFilter, d.faixaVencimento) &&
        tcvNoMes(d),
    );
  }, [
    data,
    profitFilter,
    franquiaFilter,
    statusFilter,
    planoFilter,
    tipoFilter,
    faixaFilter,
    tcvNoMes,
  ]);
  const totalClientes = filtered.length;
  const ativos = filtered.filter((d) => d.ativo).length;
  const ativosMRR = filtered.filter(
    (d) => d.ativo && d.tipoContrato.toUpperCase() == "MENSAL",
  ).length;
  const totalMRR = filtered.filter((d) => d.tipoContrato.toUpperCase() == "MENSAL").length;
  const totalTCV = filtered.filter((d) => d.tipoContrato.toUpperCase() != "MENSAL").length;
  const churn = refBounds
    ? data.filter(
        (d) =>
          d.churn &&
          d.dataChurn &&
          (() => {
            const t = new Date(d.dataChurn).getTime();
            return t >= refBounds.start && t <= refBounds.end;
          })(),
      ).length
    : data.filter((d) => d.churn).length;
  const pausados = filtered.filter((d) => d.pausado).length;
  const franquias = new Set(filtered.map((d) => d.franquia)).size;
  const mrr = filtered
    .filter((d) => d.ativo && d.tipoContrato.toUpperCase() == "MENSAL")
    .reduce((s, d) => s + (d.valorMensal ?? 0), 0);
  const ticketMedio = ativosMRR > 0 ? mrr / ativosMRR : 0;
  const ativosTCV = tcvFiltered.length;
  const contratoTCV = tcvFiltered.reduce((s, d) => s + (d.valorContrato ?? 0), 0);
  const ticketMedioTCV = ativosTCV > 0 ? contratoTCV / ativosTCV : 0;
  const churnRate = (0, import_react.useMemo)(() => {
    if (refBounds) {
      const churnsNoMes = filtered.filter((d) => {
        if (!d.churn || !d.fimContrato) return false;
        const t = new Date(d.fimContrato).getTime();
        return !isNaN(t) && t >= refBounds.start && t <= refBounds.end;
      }).length;
      const baseInicio = filtered.filter((d) => {
        if (!d.inicioContrato) return false;
        const ini = new Date(d.inicioContrato).getTime();
        if (isNaN(ini) || ini >= refBounds.start) return false;
        if (!d.fimContrato) return true;
        const fim = new Date(d.fimContrato).getTime();
        return isNaN(fim) || fim >= refBounds.start;
      }).length;
      return baseInicio > 0 ? (churnsNoMes / baseInicio) * 100 : 0;
    }
    return totalClientes > 0 ? (churn / totalClientes) * 100 : 0;
  }, [filtered, refBounds, churn, totalClientes]);
  const vencendo30 = filtered.filter(
    (d) => d.ativo && d.vencimentoDias !== null && d.vencimentoDias >= 0 && d.vencimentoDias <= 30,
  ).length;
  const vencidos = filtered.filter((d) => d.ativo && d.faixaVencimento === "Vencido").length;
  const porStatus = (0, import_react.useMemo)(
    () =>
      [
        {
          name: "Ativo",
          value: ativos,
        },
        {
          name: "Churn",
          value: churn,
        },
        {
          name: "Pausado",
          value: pausados,
        },
      ].filter((s) => s.value > 0),
    [ativos, churn, pausados],
  );
  const topFranquias = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      const cur = map.get(d.franquia) ?? {
        clientes: 0,
        mrr: 0,
      };
      cur.clientes += 1;
      if (d.ativo) cur.mrr += d.valorMensal ?? 0;
      map.set(d.franquia, cur);
    });
    return Array.from(map.entries())
      .map(([franquia, v]) => ({
        franquia,
        ...v,
      }))
      .sort((a, b) => b.mrr - a.mrr)
      .slice(0, 10);
  }, [filtered]);
  const porPlano = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      const cur = map.get(d.plano) ?? {
        clientes: 0,
        mrr: 0,
      };
      cur.clientes += 1;
      if (d.ativo) cur.mrr += d.valorMensal ?? 0;
      map.set(d.plano, cur);
    });
    return Array.from(map.entries())
      .map(([plano, v]) => ({
        plano,
        ...v,
      }))
      .sort((a, b) => b.clientes - a.clientes);
  }, [filtered]);
  const porTipo = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      map.set(d.tipoContrato, (map.get(d.tipoContrato) ?? 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, value]) => ({
        name,
        value,
      }))
      .sort((a, b) => b.value - a.value);
  }, [filtered]);
  const porFaixa = (0, import_react.useMemo)(() => {
    const order = [
      "Vencido",
      "Até 30 dias",
      "31 a 60 dias",
      "61 a 90 dias",
      "Mais de 90 dias",
      "Recorrente",
    ];
    const map = /* @__PURE__ */ new Map();
    filtered
      .filter((d) => d.ativo)
      .forEach((d) => {
        map.set(d.faixaVencimento, (map.get(d.faixaVencimento) ?? 0) + 1);
      });
    return order
      .filter((k) => map.has(k))
      .map((name) => ({
        name,
        value: map.get(name) ?? 0,
      }));
  }, [filtered]);
  const timeSeries = (0, import_react.useMemo)(() => {
    const monthEnd = (y, m) => new Date(Date.UTC(y, m + 1, 0, 23, 59, 59));
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    const withStart = filtered
      .map((d) => ({
        start: d.inicioContrato ? new Date(d.inicioContrato) : null,
        end: d.fimContrato ? new Date(d.fimContrato) : null,
        churn: d.churn,
        mrr: d.valorMensal ?? 0,
      }))
      .filter((d) => d.start && !isNaN(d.start.getTime()));
    if (withStart.length === 0) return [];
    const minStart = new Date(Math.min(...withStart.map((d) => d.start.getTime())));
    const maxEnd = withStart.reduce((max, d) => {
      const t = d.end && !isNaN(d.end.getTime()) ? d.end.getTime() : 0;
      return t > max ? t : max;
    }, 0);
    const endBound = new Date(Math.max(/* @__PURE__ */ new Date().getTime(), maxEnd));
    const points = [];
    let y = minStart.getUTCFullYear();
    let m = minStart.getUTCMonth();
    while (
      y < endBound.getUTCFullYear() ||
      (y === endBound.getUTCFullYear() && m <= endBound.getUTCMonth())
    ) {
      const eom = monthEnd(y, m);
      const som = new Date(Date.UTC(y, m, 1));
      let clientesTotal = 0;
      let mrrTotal = 0;
      let recebidos = 0;
      let perdidos = 0;
      withStart.forEach((d) => {
        const s = d.start;
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
        )
          perdidos += 1;
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
      if (m > 11) {
        m = 0;
        y += 1;
      }
    }
    return points.slice(-24);
  }, [filtered]);
  const contratosEmRisco = (0, import_react.useMemo)(
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
  const sortedRows = (0, import_react.useMemo)(() => {
    const rows = [...filtered];
    if (sortKey === null)
      rows.sort((a, b) => {
        if (a.ativo !== b.ativo) return a.ativo ? -1 : 1;
        const av = a.vencimentoDias ?? Number.POSITIVE_INFINITY;
        const bv = b.vencimentoDias ?? Number.POSITIVE_INFINITY;
        if (av !== bv) return av - bv;
        return (b.valorMensal ?? 0) - (a.valorMensal ?? 0);
      });
    else
      rows.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av === null || av === void 0 || av === "") return 1;
        if (bv === null || bv === void 0 || bv === "") return -1;
        if (typeof av === "number" && typeof bv === "number")
          return sortDir === "asc" ? av - bv : bv - av;
        return sortDir === "asc"
          ? String(av).localeCompare(String(bv))
          : String(bv).localeCompare(String(av));
      });
    return rows;
  }, [filtered, sortKey, sortDir]);
  const toggleSort = (k) => {
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
    setMesRef("");
    setSortKey(null);
  };
  const diffMonths = (start, end) =>
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const lifetimeMedio = (0, import_react.useMemo)(() => {
    const refEnd = refBounds ? new Date(refBounds.end) : /* @__PURE__ */ new Date();
    const valores = [];
    filtered.forEach((d) => {
      if (!d.inicioContrato) return;
      const inicio = new Date(d.inicioContrato);
      if (isNaN(inicio.getTime())) return;
      if (d.churn) {
        if (!d.fimContrato) return;
        const fim = new Date(d.fimContrato);
        if (isNaN(fim.getTime())) return;
        valores.push(diffMonths(inicio, fim));
      } else if (d.ativo) valores.push(diffMonths(inicio, refEnd));
    });
    if (!valores.length) return 0;
    return valores.reduce((a, b) => a + b, 0) / valores.length;
  }, [filtered, refBounds]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "min-h-screen bg-muted/30",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
        className: "border-b bg-card",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className: "text-2xl font-semibold tracking-tight",
                  children: "Carteira — Dashboard Executivo",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Visão consolidada de MRR, contratos, planos e riscos da carteira.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
              className: "flex gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "secondary",
                    size: "sm",
                    children: "Carteira Geral",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/carteira-profits",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "ghost",
                    size: "sm",
                    children: "Carteira por Profits",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/profits",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "ghost",
                    size: "sm",
                    children: "Indicadores Profits",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/performance",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "ghost",
                    size: "sm",
                    children: "Performance",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
        className: "mx-auto max-w-[1400px] space-y-6 px-6 py-6",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
              className: "flex flex-wrap items-end gap-3 pt-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Profit",
                  value: profitFilter,
                  onChange: setProfitFilter,
                  options: opts.profit,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Franquia",
                  value: franquiaFilter,
                  onChange: setFranquiaFilter,
                  options: opts.franquia,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Status",
                  value: statusFilter,
                  onChange: setStatusFilter,
                  options: opts.status,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Tipo Contrato",
                  value: tipoFilter,
                  onChange: setTipoFilter,
                  options: opts.tipo,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Vencimento",
                  value: faixaFilter,
                  onChange: setFaixaFilter,
                  options: opts.faixa,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                      className: "text-xs font-medium text-muted-foreground",
                      children: "Mês/Ano de Referência",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                      type: "month",
                      value: mesRef,
                      onChange: (e) => setMesRef(e.target.value),
                      className: "h-9 w-[180px]",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: "outline",
                  size: "sm",
                  onClick: clearFilters,
                  className: "ml-auto",
                  children: "Limpar filtros",
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, {
                  className: "h-4 w-4",
                }),
                label: "MRR",
                value: brl(mrr),
                accent: "oklch(0.6 0.2 250)",
                detail: `${ativosMRR} clientes mensais`,
                tooltip: "Receita recorrente mensal dos clientes ativos.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, {
                  className: "h-4 w-4",
                }),
                label: "Valor Contratado (TCV)",
                value: brl(contratoTCV),
                accent: "oklch(0.6 0.2 250)",
                detail: `${ativosTCV} contratos TCV`,
                tooltip: "Valor total contratado dos clientes ativos com contratos TCV.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
                  className: "h-4 w-4",
                }),
                label: "Ticket Médio MRR",
                value: brl(ticketMedio),
                accent: "oklch(0.7 0.18 145)",
                detail: "Clientes mensais",
                tooltip: "MRR dividido pela quantidade de clientes mensais ativos.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
                  className: "h-4 w-4",
                }),
                label: "Ticket Médio TCV",
                value: brl(ticketMedioTCV),
                accent: "oklch(0.7 0.18 145)",
                detail: "Contratos TCV",
                tooltip: "Valor contratado dividido pela quantidade de contratos TCV ativos.",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-2 gap-4 lg:grid-cols-5 mt-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
                label: "Total de Clientes",
                value: totalClientes,
                detail: `${totalMRR} Mensais • ${totalTCV} TCV`,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
                label: "Ativos",
                value: ativos,
                accent: "oklch(0.7 0.18 145)",
                detail: `${ativosMRR} Mensais • ${ativosTCV} TCV`,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                  className: "h-4 w-4",
                }),
                label: "Churn",
                value: churn,
                accent: "oklch(0.6 0.22 25)",
                detail: `${churnRate.toFixed(1)}% da carteira`,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
                  className: "h-4 w-4",
                }),
                label: "Pausados",
                value: pausados,
                accent: "oklch(0.78 0.15 80)",
                detail: `${((pausados / Math.max(totalClientes, 1)) * 100).toFixed(1)}% da carteira`,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
                  className: "h-4 w-4",
                }),
                label: "Franquias",
                value: franquias,
                detail: `${(totalClientes / Math.max(franquias, 1)).toFixed(1)} clientes/franquia`,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-2 gap-4 lg:grid-cols-2 mt-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
                  className: "h-4 w-4",
                }),
                label: "Lifetime Médio",
                value: `${lifetimeMedio.toFixed(1)} meses`,
                accent: "oklch(0.65 0.18 180)",
                detail: "Tempo médio de permanência",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                  className: "h-4 w-4",
                }),
                label: "Churn Rate",
                value: `${churnRate.toFixed(1)}%`,
                accent: churnRate > 5 ? "oklch(0.6 0.22 25)" : "oklch(0.7 0.18 145)",
                detail: "Clientes perdidos no período",
                tooltip: "Quantidade de clientes em churn dividida pelo total de clientes.",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-1 gap-4 md:grid-cols-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertCard, {
                title: "Contratos vencidos (ativos)",
                value: vencidos,
                tone: vencidos > 0 ? "danger" : "ok",
                description: "Ativos com Faixa Vencimento = Vencido",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertCard, {
                title: "Vencem em até 30 dias",
                value: vencendo30,
                tone: vencendo30 > 0 ? "warn" : "ok",
                description: "Clientes ativos com vencimento próximo",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid gap-4 lg:grid-cols-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Status da Carteira",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[360px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
                            data: porStatus,
                            dataKey: "value",
                            nameKey: "name",
                            outerRadius: 110,
                            label: true,
                            children: porStatus.map((s, i) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Cell,
                                { fill: STATUS_COLORS[s.name] ?? FALLBACK[i % 6] },
                                i,
                              ),
                            ),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Top 10 Franquias por MRR",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[400px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: topFranquias,
                        layout: "vertical",
                        margin: {
                          left: 12,
                          right: 72,
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                            strokeDasharray: "3 3",
                            horizontal: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                            type: "number",
                            fontSize: 11,
                            tickFormatter: (v) => brl(v),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            type: "category",
                            dataKey: "franquia",
                            width: 160,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                            formatter: (v) => brlFull(v),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "mrr",
                            fill: "oklch(0.65 0.18 180)",
                            radius: [0, 4, 4, 0],
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                              dataKey: "mrr",
                              position: "right",
                              fontSize: 11,
                              formatter: (v) => brl(v),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid gap-4 lg:grid-cols-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Distribuição por Plano",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[400px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porPlano,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                            strokeDasharray: "3 3",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                            dataKey: "plano",
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            fontSize: 11,
                            allowDecimals: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                            formatter: (v, n) =>
                              n === "mrr" ? brlFull(v) : v.toLocaleString("pt-BR"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
                            dataKey: "clientes",
                            name: "Clientes",
                            radius: [4, 4, 0, 0],
                            children: [
                              porPlano.map((e, i) =>
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Cell,
                                  { fill: PLANO_COLORS[e.plano] ?? FALLBACK[i % 6] },
                                  i,
                                ),
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                                dataKey: "clientes",
                                position: "top",
                                fontSize: 10,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Contratos por Tipo",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porTipo,
                        layout: "vertical",
                        margin: {
                          left: 12,
                          right: 48,
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                            strokeDasharray: "3 3",
                            horizontal: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                            type: "number",
                            fontSize: 11,
                            allowDecimals: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            type: "category",
                            dataKey: "name",
                            width: 110,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "value",
                            fill: "oklch(0.7 0.18 145)",
                            radius: [0, 4, 4, 0],
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                              dataKey: "value",
                              position: "right",
                              fontSize: 11,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid gap-4 lg:grid-cols-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
                      className: "text-base flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                          className: "h-4 w-4 text-amber-500",
                        }),
                        "Vencimento de Contratos (ativos)",
                      ],
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porFaixa,
                        layout: "vertical",
                        margin: {
                          left: 12,
                          right: 48,
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                            strokeDasharray: "3 3",
                            horizontal: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                            type: "number",
                            fontSize: 11,
                            allowDecimals: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            type: "category",
                            dataKey: "name",
                            width: 130,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
                            dataKey: "value",
                            radius: [0, 4, 4, 0],
                            children: [
                              porFaixa.map((e, i) =>
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Cell,
                                  { fill: FAIXA_COLORS[e.name] ?? FALLBACK[i % 6] },
                                  i,
                                ),
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                                dataKey: "value",
                                position: "right",
                                fontSize: 11,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Crescimento de Clientes por Mês",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
                        data: timeSeries,
                        margin: {
                          left: 8,
                          right: 16,
                          top: 8,
                        },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                            strokeDasharray: "3 3",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                            dataKey: "label",
                            fontSize: 10,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            fontSize: 11,
                            allowDecimals: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                            formatter: (v) => v.toLocaleString("pt-BR"),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
                            type: "monotone",
                            dataKey: "clientesTotal",
                            name: "Clientes ativos",
                            stroke: "oklch(0.6 0.2 250)",
                            strokeWidth: 2,
                            dot: false,
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grid gap-4 lg:grid-cols-2",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                    className: "text-base",
                    children: "Crescimento de MRR por Mês",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                  className: "h-[320px]",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
                      data: timeSeries,
                      margin: {
                        left: 8,
                        right: 16,
                        top: 8,
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                          strokeDasharray: "3 3",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                          dataKey: "label",
                          fontSize: 10,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                          fontSize: 11,
                          tickFormatter: (v) => brl(v),
                          width: 80,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                          formatter: (v) => brlFull(v),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
                          type: "monotone",
                          dataKey: "mrrTotal",
                          name: "MRR",
                          stroke: "oklch(0.65 0.18 180)",
                          strokeWidth: 2,
                          dot: false,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                  className: "text-base",
                  children: "Clientes Recebidos vs. Perdidos por Mês",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                className: "h-[340px]",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                  width: "100%",
                  height: "100%",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
                    data: timeSeries,
                    margin: {
                      left: 8,
                      right: 16,
                      top: 8,
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                        strokeDasharray: "3 3",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                        dataKey: "label",
                        fontSize: 10,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                        fontSize: 11,
                        allowDecimals: false,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                        formatter: (v) => v.toLocaleString("pt-BR"),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                        dataKey: "recebidos",
                        name: "Recebidos",
                        fill: "oklch(0.7 0.18 145)",
                        radius: [4, 4, 0, 0],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                        dataKey: "perdidos",
                        name: "Perdidos",
                        fill: "oklch(0.6 0.22 25)",
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
                  className: "text-base flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                      className: "h-4 w-4 text-red-500",
                    }),
                    "Contratos em risco (vencem em até 60 dias, sem renovação automática)",
                  ],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                children:
                  contratosEmRisco.length === 0
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "p-6 text-sm text-muted-foreground text-center",
                        children: "Nenhum contrato em risco identificado.",
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
                        className: "h-[520px] w-full",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    children: "Cliente",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    children: "Franquia",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    children: "Plano",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    children: "Tipo",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    className: "text-right",
                                    children: "Valor Mensal",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    className: "text-right",
                                    children: "Vence em",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                                    children: "Faixa",
                                  }),
                                ],
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
                              children: contratosEmRisco.map((d, i) => {
                                const v = d.vencimentoDias ?? 0;
                                const tone =
                                  v < 0
                                    ? "text-red-600 dark:text-red-400"
                                    : v <= 30
                                      ? "text-amber-600 dark:text-amber-400"
                                      : "text-foreground";
                                return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  TableRow,
                                  {
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        className: "font-medium",
                                        children: d.cliente,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        children: d.franquia,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        children: d.plano,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        children: d.tipoContrato,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        className: "text-right tabular-nums",
                                        children: d.valorMensal !== null ? brl(d.valorMensal) : "—",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        className: `text-right tabular-nums font-medium ${tone}`,
                                        children: v < 0 ? `${Math.abs(v)}d vencido` : `${v}d`,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          Badge,
                                          {
                                            variant: "secondary",
                                            style: {
                                              backgroundColor: `${FAIXA_COLORS[d.faixaVencimento] ?? "hsl(var(--muted))"}25`,
                                              color: FAIXA_COLORS[d.faixaVencimento] ?? "inherit",
                                            },
                                            children: d.faixaVencimento,
                                          },
                                        ),
                                      }),
                                    ],
                                  },
                                  i,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetalhamentoCard, {
            rows: sortedRows,
            clienteSearch,
            setClienteSearch,
            sortKey,
            sortDir,
            toggleSort,
          }),
        ],
      }),
    ],
  });
}
function DetalhamentoCard({ rows, clienteSearch, setClienteSearch, sortKey, sortDir, toggleSort }) {
  const q = clienteSearch.trim().toLowerCase();
  const visible = q ? rows.filter((r) => r.cliente.toLowerCase().includes(q)) : rows;
  const downloadCsv = () => {
    const headers = [
      "Cliente",
      "Franquia",
      "Profit",
      "Status",
      "Plano",
      "Tipo Contrato",
      "Valor Mensal",
      "Valor Contrato",
      "Início Contrato",
      "Fim Contrato",
      "Renovação Auto",
      "Vencimento (dias)",
      "Faixa Vencimento",
      "Alerta",
      "Ativo",
      "Churn",
      "Pausado",
    ];
    const esc = (v) => {
      const s = v === null || v === void 0 ? "" : String(v);
      return /[",;\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [headers.join(";")];
    for (const d of visible)
      lines.push(
        [
          d.cliente,
          d.franquia,
          d.profit,
          d.status,
          d.plano,
          d.tipoContrato,
          d.valorMensal ?? "",
          d.valorContrato ?? "",
          d.inicioContrato ? d.inicioContrato.slice(0, 10) : "",
          d.fimContrato ? d.fimContrato.slice(0, 10) : "",
          d.renovacaoAuto,
          d.vencimentoDias ?? "",
          d.faixaVencimento,
          d.alerta,
          d.ativo ? "Sim" : "Não",
          d.churn ? "Sim" : "Não",
          d.pausado ? "Sim" : "Não",
        ]
          .map(esc)
          .join(";"),
      );
    const blob = new Blob(["﻿" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `detalhamento-clientes-${/* @__PURE__ */ new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
              className: "text-base",
              children: [
                "Detalhamento de Clientes (",
                visible.length,
                q && visible.length !== rows.length ? ` de ${rows.length}` : "",
                ")",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex flex-col gap-2 sm:flex-row sm:items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "relative",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                      className:
                        "pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                      value: clienteSearch,
                      onChange: (e) => setClienteSearch(e.target.value),
                      placeholder: "Buscar cliente...",
                      className: "h-9 w-full pl-8 sm:w-64",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                  variant: "outline",
                  size: "sm",
                  onClick: downloadCsv,
                  className: "gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
                    " CSV",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
          className: "h-[520px] w-full",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Cliente",
                      k: "cliente",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Franquia",
                      k: "franquia",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Profit",
                      k: "profit",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Status",
                      k: "status",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Plano",
                      k: "plano",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Tipo",
                      k: "tipoContrato",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Valor Mensal",
                      k: "valorMensal",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                      align: "right",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Vence em",
                      k: "vencimentoDias",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                      align: "right",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                      label: "Faixa",
                      k: "faixaVencimento",
                      sortKey,
                      sortDir,
                      onClick: toggleSort,
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
                children: visible.map((d, i) => {
                  const statusColor = STATUS_COLORS[d.status] ?? "hsl(var(--muted-foreground))";
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    TableRow,
                    {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          className: "font-medium",
                          children: d.cliente,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          children: d.franquia,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          children: d.profit,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
                            variant: "secondary",
                            style: {
                              backgroundColor: `${statusColor}25`,
                              color: statusColor,
                            },
                            children: d.status,
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          children: d.plano,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          children: d.tipoContrato,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          className: "text-right tabular-nums",
                          children: d.valorMensal !== null ? brl(d.valorMensal) : "—",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          className: "text-right tabular-nums text-muted-foreground",
                          children: d.vencimentoDias !== null ? `${d.vencimentoDias}d` : "—",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                          className: "text-muted-foreground",
                          children: d.faixaVencimento,
                        }),
                      ],
                    },
                    i,
                  );
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Kpi({ label, value, accent, icon, tooltip, detail }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    className: "hover:shadow-lg transition-all duration-200",
    style: accent ? { borderLeft: `4px solid ${accent}` } : void 0,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
      className: "pt-5",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "text-2xl font-bold tracking-tight",
              style: accent ? { color: accent } : void 0,
              children: value,
            }),
            icon &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-muted-foreground",
                children: icon,
              }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "font-semibold text-xs text-gray-500",
          children: detail ?? ".",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-2 text-xs uppercase tracking-wide text-muted-foreground",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "flex items-center justify-between",
            children: [
              label,
              tooltip &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
                        asChild: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "cursor-pointer",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
                            className: "w-4",
                          }),
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children: tooltip,
                        }),
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function AlertCard({ title, value, description, tone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
      className: "pt-5",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex items-start justify-between gap-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-sm font-medium",
                children: title,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-xs text-muted-foreground",
                children: description,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "text-3xl font-bold tabular-nums",
            style: {
              color:
                tone === "danger"
                  ? "oklch(0.6 0.22 25)"
                  : tone === "warn"
                    ? "oklch(0.78 0.15 80)"
                    : "oklch(0.7 0.18 145)",
            },
            children: value,
          }),
        ],
      }),
    }),
  });
}
function FilterSelect({ label, value, onChange, options }) {
  const toggle = (opt) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
  const display =
    value.length === 0 ? "Todos" : value.length === 1 ? value[0] : `${value.length} selecionados`;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex min-w-[180px] flex-col gap-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "text-xs font-medium text-muted-foreground",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
            asChild: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
              variant: "outline",
              size: "sm",
              className: "h-9 w-full justify-between font-normal",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "truncate",
                  children: display,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
                  className: "h-4 w-4 opacity-60",
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
            align: "start",
            className: "w-64 p-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between border-b px-3 py-2 text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-medium",
                    children: label,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    type: "button",
                    className: "text-muted-foreground hover:text-foreground",
                    onClick: () => onChange([]),
                    children: "Limpar",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
                className: "h-64",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "p-1",
                  children: options.map((o) => {
                    const checked = value.includes(o);
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        type: "button",
                        onClick: () => toggle(o),
                        className:
                          "flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
                            checked,
                            className: "pointer-events-none",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "flex-1 truncate text-left",
                            children: o,
                          }),
                          checked &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                              className: "h-3.5 w-3.5 text-primary",
                            }),
                        ],
                      },
                      o,
                    );
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function SortableHead({ label, k, sortKey, sortDir, onClick, align }) {
  const active = sortKey === k;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
    className: align === "right" ? "text-right" : "",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
      type: "button",
      onClick: () => onClick(k),
      className: `inline-flex items-center gap-1 hover:text-foreground ${active ? "text-foreground" : ""}`,
      children: [
        label,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpDown, {
          className: "h-3 w-3 opacity-60",
        }),
        active &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-[10px]",
            children: sortDir === "asc" ? "↑" : "↓",
          }),
      ],
    }),
  });
}
//#endregion
export { CarteiraDashboard as component };
