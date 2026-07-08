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
import { d as ArrowUpDown, f as TriangleAlert } from "../_libs/lucide-react.mjs";
import {
  i as TooltipTrigger,
  n as TooltipContent,
  r as TooltipProvider,
  t as Tooltip,
} from "./tooltip-BxplWPAZ.mjs";
import {
  a as YAxis,
  c as CartesianGrid,
  f as LabelList,
  h as Tooltip$1,
  l as ReferenceLine,
  m as ResponsiveContainer,
  o as XAxis,
  p as Cell,
  r as BarChart,
  u as Bar,
} from "../_libs/recharts+[...].mjs";
import { n as ScrollArea, t as Badge } from "./scroll-area-D2lj85AQ.mjs";
import {
  a as SelectValue,
  i as SelectTrigger,
  n as SelectContent,
  r as SelectItem,
  t as Select,
} from "./select-BEAC1y6O.mjs";
import { t as carteiraQuery } from "./profits-f0_NEtK8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profits-CL00FsHx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL = "__all__";
var STATUS_ORDER = {
  Fora: 0,
  "No Alvo": 1,
  "Sem Dado": 2,
};
var STATUS_DOT = {
  "No Alvo": "🟢",
  Fora: "🔴",
  "Sem Dado": "⚪",
};
var fmtNum = (v, digits = 2) =>
  v === null || Number.isNaN(v)
    ? "—"
    : v.toLocaleString("pt-BR", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      });
function StatusBadge({ status }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
    variant: "secondary",
    className: `gap-1 ${status === "No Alvo" ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-400" : status === "Fora" ? "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-500/15 dark:text-red-400" : "bg-muted text-muted-foreground hover:bg-muted"}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        "aria-hidden": true,
        children: STATUS_DOT[status],
      }),
      status,
    ],
  });
}
function RowTooltipContent({ d }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-0.5 text-xs",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "Profit:",
          }),
          " ",
          d.profit,
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "Franquia:",
          }),
          " ",
          d.franquia,
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "Clientes:",
          }),
          " ",
          d.clientes.toLocaleString("pt-BR"),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "ROAS Médio:",
          }),
          " ",
          fmtNum(d.roasMedio),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "Alvo:",
          }),
          " ",
          fmtNum(d.alvoRoas),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "Desvio:",
          }),
          " ",
          fmtNum(d.desvioRoas),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-muted-foreground",
            children: "Status:",
          }),
          " ",
          STATUS_DOT[d.statusRoas],
          " ",
          d.statusRoas,
        ],
      }),
    ],
  });
}
function CarteiraPage() {
  const { data } = useSuspenseQuery(carteiraQuery);
  const [profitFilter, setProfitFilter] = (0, import_react.useState)(ALL);
  const [franquiaFilter, setFranquiaFilter] = (0, import_react.useState)(ALL);
  const [statusFilter, setStatusFilter] = (0, import_react.useState)(ALL);
  const [sortKey, setSortKey] = (0, import_react.useState)(null);
  const [sortDir, setSortDir] = (0, import_react.useState)("desc");
  const opts = (0, import_react.useMemo)(() => {
    const uniq = (k) => Array.from(new Set(data.map((d) => d[k]).filter(Boolean))).sort();
    return {
      profit: uniq("profit"),
      franquia: uniq("franquia"),
    };
  }, [data]);
  const filtered = (0, import_react.useMemo)(
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
  const porProfit = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => map.set(d.profit, (map.get(d.profit) ?? 0) + d.clientes));
    return Array.from(map.entries())
      .map(([profit, clientes]) => ({
        profit,
        clientes,
      }))
      .sort((a, b) => b.clientes - a.clientes);
  }, [filtered]);
  const topFranquias = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => map.set(d.franquia, (map.get(d.franquia) ?? 0) + d.clientes));
    return Array.from(map.entries())
      .map(([franquia, clientes]) => ({
        franquia,
        clientes,
      }))
      .sort((a, b) => b.clientes - a.clientes)
      .slice(0, 10);
  }, [filtered]);
  const franquiasFora = (0, import_react.useMemo)(
    () =>
      filtered
        .filter((d) => d.statusRoas === "Fora" && d.desvioRoas !== null)
        .map((d) => ({
          franquia: d.franquia,
          desvio: Math.abs(d.desvioRoas),
          row: d,
        }))
        .sort((a, b) => b.desvio - a.desvio)
        .slice(0, 15),
    [filtered],
  );
  const roasPorProfit = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      const cur = map.get(d.profit) ?? {
        sum: 0,
        count: 0,
        alvoSum: 0,
        alvoCount: 0,
      };
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
      .map(([profit, v]) => ({
        profit,
        roas: v.count ? v.sum / v.count : 0,
      }))
      .sort((a, b) => b.roas - a.roas);
  }, [filtered]);
  const alvoMedio = (0, import_react.useMemo)(() => {
    const alvos = filtered.map((d) => d.alvoRoas).filter((v) => v !== null);
    return alvos.length ? alvos.reduce((s, v) => s + v, 0) / alvos.length : 0;
  }, [filtered]);
  const sortedRows = (0, import_react.useMemo)(() => {
    const rows = [...filtered];
    if (sortKey === null)
      rows.sort((a, b) => {
        const so = STATUS_ORDER[a.statusRoas] - STATUS_ORDER[b.statusRoas];
        if (so !== 0) return so;
        const ad = a.desvioRoas ?? Number.POSITIVE_INFINITY;
        const bd = b.desvioRoas ?? Number.POSITIVE_INFINITY;
        if (ad !== bd) return ad - bd;
        return b.clientes - a.clientes;
      });
    else
      rows.sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av === null || av === void 0) return 1;
        if (bv === null || bv === void 0) return -1;
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
      setSortDir(k === "clientes" || k === "roasMedio" || k === "desvioRoas" ? "desc" : "asc");
    }
  };
  const clearFilters = () => {
    setProfitFilter(ALL);
    setFranquiaFilter(ALL);
    setStatusFilter(ALL);
    setSortKey(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
    delayDuration: 150,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
                    children: "Profits",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Distribuição de clientes por Profit e Franquia.",
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
                      variant: "ghost",
                      size: "sm",
                      children: "Carteira por Profits",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/profits",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                      variant: "secondary",
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
                    label: "Status ROAS",
                    value: statusFilter,
                    onChange: setStatusFilter,
                    options: ["No Alvo", "Fora", "Sem Dado"],
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
              className: "grid grid-cols-2 gap-4 md:grid-cols-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                  label: "Total de Clientes",
                  value: totalClientes.toLocaleString("pt-BR"),
                  accent: "oklch(0.6 0.2 250)",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                  label: "Total de Franquias",
                  value: totalFranquias,
                  accent: "oklch(0.65 0.18 180)",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                  label: "Profit Managers",
                  value: totalProfit,
                  accent: "oklch(0.7 0.18 145)",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                  label: "Média Clientes/Franquia",
                  value: mediaPorFranquia.toFixed(1),
                  accent: "oklch(0.78 0.15 80)",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                  label: "Franquias abaixo do ROAS alvo",
                  value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "inline-flex items-center gap-2",
                    children: ["🔴 ", foraDoAlvo],
                  }),
                  accent: "oklch(0.6 0.22 25)",
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
                        children: "Clientes por Profit",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                      className: "h-[420px]",
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
                              width: 110,
                              fontSize: 11,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                              formatter: (v) => v.toLocaleString("pt-BR"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                              dataKey: "clientes",
                              fill: "oklch(0.6 0.2 250)",
                              radius: [0, 4, 4, 0],
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                                dataKey: "clientes",
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
                        children: "Top 10 Franquias por Clientes",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                      className: "h-[420px]",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                        width: "100%",
                        height: "100%",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                          data: topFranquias,
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
                              dataKey: "franquia",
                              width: 160,
                              fontSize: 11,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                              formatter: (v) => v.toLocaleString("pt-BR"),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                              dataKey: "clientes",
                              fill: "oklch(0.65 0.18 180)",
                              radius: [0, 4, 4, 0],
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                                dataKey: "clientes",
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
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
                        className: "text-base flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                            className: "h-4 w-4 text-red-500",
                          }),
                          "Franquias abaixo do ROAS esperado",
                        ],
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                      className: "h-[420px]",
                      children:
                        franquiasFora.length === 0
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className:
                                "flex h-full items-center justify-center text-sm text-muted-foreground",
                              children: "Nenhuma franquia fora do alvo.",
                            })
                          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                              width: "100%",
                              height: "100%",
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                                data: franquiasFora,
                                layout: "vertical",
                                margin: {
                                  left: 12,
                                  right: 60,
                                },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                                    strokeDasharray: "3 3",
                                    horizontal: false,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                                    type: "number",
                                    fontSize: 11,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                                    type: "category",
                                    dataKey: "franquia",
                                    width: 160,
                                    fontSize: 11,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                                    content: ({ active, payload }) =>
                                      active && payload?.[0]
                                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                            className: "rounded-md border bg-background p-2 shadow",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              RowTooltipContent,
                                              { d: payload[0].payload.row },
                                            ),
                                          })
                                        : null,
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                                    dataKey: "desvio",
                                    fill: "oklch(0.6 0.22 25)",
                                    radius: [0, 4, 4, 0],
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      LabelList,
                                      {
                                        dataKey: "desvio",
                                        position: "right",
                                        fontSize: 11,
                                        formatter: (v) => fmtNum(v),
                                      },
                                    ),
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
                        children: "ROAS Médio por Profit",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                      className: "h-[420px]",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                        width: "100%",
                        height: "100%",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                          data: roasPorProfit,
                          margin: {
                            left: 12,
                            right: 24,
                            top: 12,
                          },
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                              strokeDasharray: "3 3",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                              dataKey: "profit",
                              fontSize: 11,
                              interval: 0,
                              angle: -25,
                              textAnchor: "end",
                              height: 70,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { fontSize: 11 }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip$1, {
                              formatter: (v) => fmtNum(v),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
                              y: alvoMedio,
                              stroke: "oklch(0.6 0.22 25)",
                              strokeDasharray: "4 4",
                              label: {
                                value: `Alvo médio ${fmtNum(alvoMedio)}`,
                                position: "insideTopRight",
                                fontSize: 10,
                                fill: "oklch(0.6 0.22 25)",
                              },
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
                              dataKey: "roas",
                              radius: [4, 4, 0, 0],
                              children: [
                                roasPorProfit.map((entry, i) =>
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    Cell,
                                    {
                                      fill:
                                        entry.roas >= alvoMedio
                                          ? "oklch(0.65 0.18 150)"
                                          : "oklch(0.6 0.22 25)",
                                    },
                                    i,
                                  ),
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                                  dataKey: "roas",
                                  position: "top",
                                  fontSize: 10,
                                  formatter: (v) => fmtNum(v),
                                }),
                              ],
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
                    children: ["Detalhamento (", sortedRows.length, ")"],
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
                    className: "h-[460px] w-full",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                                label: "Profit",
                                k: "profit",
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
                                label: "Clientes",
                                k: "clientes",
                                sortKey,
                                sortDir,
                                onClick: toggleSort,
                                align: "right",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                                label: "ROAS Médio",
                                k: "roasMedio",
                                sortKey,
                                sortDir,
                                onClick: toggleSort,
                                align: "right",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                                label: "Alvo",
                                k: "alvoRoas",
                                sortKey,
                                sortDir,
                                onClick: toggleSort,
                                align: "right",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                                label: "Desvio",
                                k: "desvioRoas",
                                sortKey,
                                sortDir,
                                onClick: toggleSort,
                                align: "right",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHead, {
                                label: "Status",
                                k: "statusRoas",
                                sortKey,
                                sortDir,
                                onClick: toggleSort,
                              }),
                            ],
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
                          children: sortedRows.map((d, i) => {
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
                            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              Tooltip,
                              {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
                                    asChild: true,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                      TableRow,
                                      {
                                        className:
                                          d.statusRoas === "Fora"
                                            ? "bg-red-500/5 hover:bg-red-500/10"
                                            : "",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            className: "font-medium",
                                            children: d.profit,
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            children: d.franquia,
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            className: "text-right tabular-nums",
                                            children: d.clientes.toLocaleString("pt-BR"),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            className: `text-right tabular-nums font-medium ${roasColor}`,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                              "span",
                                              {
                                                className:
                                                  "inline-flex items-center justify-end gap-1",
                                                children: [
                                                  d.statusRoas === "Fora" &&
                                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                      TriangleAlert,
                                                      { className: "h-3.5 w-3.5" },
                                                    ),
                                                  fmtNum(d.roasMedio),
                                                ],
                                              },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            className:
                                              "text-right tabular-nums text-muted-foreground",
                                            children: fmtNum(d.alvoRoas),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            className: `text-right tabular-nums ${desvioColor}`,
                                            children: fmtNum(d.desvioRoas),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              StatusBadge,
                                              { status: d.statusRoas },
                                            ),
                                          }),
                                        ],
                                      },
                                    ),
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
                                    side: "left",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      RowTooltipContent,
                                      { d },
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
          ],
        }),
      ],
    }),
  });
}
function Kpi({ label, value, accent }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
      className: "pt-5",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "text-3xl font-bold tracking-tight",
          style: accent ? { color: accent } : void 0,
          children: value,
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-1 text-xs uppercase tracking-wide text-muted-foreground",
          children: label,
        }),
      ],
    }),
  });
}
function FilterSelect({ label, value, onChange, options }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex min-w-[200px] flex-col gap-1",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "text-xs font-medium text-muted-foreground",
        children: label,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
        value,
        onValueChange: onChange,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
            className: "h-9",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                value: ALL,
                children: "Todos",
              }),
              options.map((o) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  SelectItem,
                  {
                    value: o,
                    children: o,
                  },
                  o,
                ),
              ),
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
export { CarteiraPage as component };
