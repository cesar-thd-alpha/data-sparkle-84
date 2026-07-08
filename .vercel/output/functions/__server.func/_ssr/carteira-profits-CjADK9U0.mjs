import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as clientesQuery } from "./carteira-profits-BD4J696P.mjs";
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
  c as ChevronDown,
  i as Info,
  l as Check,
  o as DollarSign,
  t as Users,
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
  m as ResponsiveContainer,
  n as PieChart,
  o as XAxis,
  p as Cell,
  r as BarChart,
  u as Bar,
} from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/carteira-profits-CjADK9U0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PALETTE = [
  "oklch(0.6 0.2 250)",
  "oklch(0.65 0.18 180)",
  "oklch(0.7 0.18 145)",
  "oklch(0.78 0.15 80)",
  "oklch(0.65 0.22 25)",
  "oklch(0.6 0.22 310)",
  "oklch(0.55 0.18 280)",
  "oklch(0.72 0.14 40)",
  "oklch(0.5 0.15 200)",
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
function CarteiraProfitsPage() {
  const { data } = useSuspenseQuery(clientesQuery);
  const [profitFilter, setProfitFilter] = (0, import_react.useState)([]);
  const [franquiaFilter, setFranquiaFilter] = (0, import_react.useState)([]);
  const [statusFilter, setStatusFilter] = (0, import_react.useState)([]);
  const [tipoFilter, setTipoFilter] = (0, import_react.useState)([]);
  const [faixaFilter, setFaixaFilter] = (0, import_react.useState)([]);
  const [inicioDe, setInicioDe] = (0, import_react.useState)("");
  const [fimAte, setFimAte] = (0, import_react.useState)("");
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
  const filtered = (0, import_react.useMemo)(() => {
    const match = (arr, v) => arr.length === 0 || arr.includes(v);
    const inicioDeTs = inicioDe ? /* @__PURE__ */ new Date(inicioDe + "T00:00:00").getTime() : null;
    const fimAteTs = fimAte ? /* @__PURE__ */ new Date(fimAte + "T23:59:59").getTime() : null;
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
  const porProfit = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
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
        ticketMedioMRR: v.ativosMRR > 0 ? v.mrr / v.ativosMRR : 0,
        ticketMedioTCV: v.ativosTCV > 0 ? v.tcv / v.ativosTCV : 0,
      }))
      .sort((a, b) => b.mrr + b.tcv - (a.mrr + a.tcv));
  }, [filtered]);
  const totalProfits = porProfit.length;
  const totalMrr = porProfit.reduce((s, p) => s + p.mrr, 0);
  const totalAtivosMRR = porProfit.reduce((s, p) => s + p.ativosMRR, 0);
  porProfit.reduce((s, p) => s + p.ativosTCV, 0);
  const totalClientes = porProfit.reduce((s, p) => s + p.clientes, 0);
  const receitaMediaPorProfit = totalProfits > 0 ? totalMrr / totalProfits : 0;
  const clientesMediosPorProfit = totalProfits > 0 ? totalClientes / totalProfits : 0;
  const ticketMedioGeral = totalAtivosMRR > 0 ? totalMrr / totalAtivosMRR : 0;
  const participacao = (0, import_react.useMemo)(
    () =>
      porProfit
        .filter((p) => p.mrr > 0)
        .map((p) => ({
          name: p.profit,
          value: p.mrr,
        })),
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
                  children: "Carteira por Profits",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm text-muted-foreground",
                  children:
                    "Visão operacional dos Profits: receita, ranking, participação e clientes por Profit.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
              className: "flex gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "ghost",
                    size: "sm",
                    children: "Carteira Geral",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/carteira-profits",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "secondary",
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
                      children: "Início a partir de",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                      type: "date",
                      value: inicioDe,
                      onChange: (e) => setInicioDe(e.target.value),
                      className: "h-9 w-[160px]",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex flex-col gap-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                      className: "text-xs font-medium text-muted-foreground",
                      children: "Fim até",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                      type: "date",
                      value: fimAte,
                      onChange: (e) => setFimAte(e.target.value),
                      className: "h-9 w-[160px]",
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
            className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Total de Profits",
                value: totalProfits,
                accent: "oklch(0.6 0.2 250)",
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "MRR Total",
                value: brl(totalMrr),
                accent: "oklch(0.65 0.18 180)",
                icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, {
                  className: "h-4 w-4",
                }),
                tooltip: "Soma do MRR de todos os clientes ativos, agregado por Profit.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Receita média por Profit",
                value: brl(receitaMediaPorProfit),
                accent: "oklch(0.7 0.18 145)",
                tooltip: "MRR total dividido pelo número de Profits.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Ticket Médio",
                value: brl(ticketMedioGeral),
                accent: "oklch(0.78 0.15 80)",
                tooltip: "MRR total dividido pelo total de clientes ativos.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Clientes por Profit",
                value: clientesMediosPorProfit.toFixed(1),
                accent: "oklch(0.6 0.22 310)",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Total de Clientes",
                value: totalClientes.toLocaleString("pt-BR"),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid gap-4 lg:grid-cols-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                className: "lg:col-span-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "MRR por Profit",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[360px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porProfit,
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
                            dataKey: "profit",
                            width: 130,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                            formatter: (v) => brlFull(v),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "mrr",
                            fill: "oklch(0.6 0.2 250)",
                            radius: [0, 4, 4, 0],
                            name: "MRR",
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Participação (MRR)",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[360px]",
                    children:
                      participacao.length === 0
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "flex h-full items-center justify-center text-sm text-muted-foreground",
                            children: "Sem MRR no filtro atual.",
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                            width: "100%",
                            height: "100%",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
                                  data: participacao,
                                  dataKey: "value",
                                  nameKey: "name",
                                  outerRadius: 110,
                                  label: (e) => `${((e.percent ?? 0) * 100).toFixed(0)}%`,
                                  children: participacao.map((_, i) =>
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      Cell,
                                      { fill: PALETTE[i % PALETTE.length] },
                                      i,
                                    ),
                                  ),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                                  formatter: (v) => brlFull(v),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
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
                      children: "Clientes Ativos (MRR + TCV) por Profit",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[380px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porProfit,
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
                            dataKey: "profit",
                            width: 130,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "totalAtivos",
                            name: "Clientes Ativos",
                            fill: "oklch(0.7 0.18 145)",
                            radius: [0, 4, 4, 0],
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                              dataKey: "totalAtivos",
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
                      className: "text-base",
                      children: "Ticket Médio (MRR) por Profit",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[380px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porProfit,
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
                            dataKey: "profit",
                            width: 130,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                            formatter: (v) => brlFull(v),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "ticketMedioMRR",
                            fill: "oklch(0.78 0.15 80)",
                            radius: [0, 4, 4, 0],
                            name: "Ticket Médio",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                              dataKey: "ticketMedioMRR",
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
                  className: "text-base",
                  children: ["Ranking de Profits (", porProfit.length, ")"],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            children: "Profit",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            className: "text-right",
                            children: "Clientes",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            className: "text-right",
                            children: "Ativos",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            className: "text-right",
                            children: "MRR",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            className: "text-right",
                            children: "Ticket Médio MRR",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            className: "text-right",
                            children: "Ticket Médio TCV",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                            className: "text-right",
                            children: "Participação",
                          }),
                        ],
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
                      children: porProfit.map((p) => {
                        const part = totalMrr > 0 ? (p.mrr / totalMrr) * 100 : 0;
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          TableRow,
                          {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                className: "font-medium",
                                children: p.profit,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                className: "text-right tabular-nums",
                                children: p.clientes.toLocaleString("pt-BR"),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                className: "text-right tabular-nums",
                                children: (p.ativosMRR + p.ativosTCV).toLocaleString("pt-BR"),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                className: "text-right tabular-nums",
                                children: brl(p.mrr),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                className: "text-right tabular-nums",
                                children: brl(p.ticketMedioMRR),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                className: "text-right tabular-nums",
                                children: brl(p.ticketMedioTCV),
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
                                className: "text-right tabular-nums text-muted-foreground",
                                children: [part.toFixed(1), "%"],
                              }),
                            ],
                          },
                          p.profit,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Kpi({ label, value, accent, icon, tooltip }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "max-h-64 overflow-y-auto p-1",
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
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { CarteiraProfitsPage as component };
