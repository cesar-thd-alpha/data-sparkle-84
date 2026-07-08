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
  a as YAxis,
  c as CartesianGrid,
  d as Pie,
  f as LabelList,
  g as Legend,
  h as Tooltip,
  m as ResponsiveContainer,
  n as PieChart,
  o as XAxis,
  p as Cell,
  r as BarChart,
  u as Bar,
} from "../_libs/recharts+[...].mjs";
import { t as metricsQuery } from "./performance-BktYwR2i.mjs";
import { n as ScrollArea, t as Badge } from "./scroll-area-D2lj85AQ.mjs";
import {
  a as SelectValue,
  i as SelectTrigger,
  n as SelectContent,
  r as SelectItem,
  t as Select,
} from "./select-BEAC1y6O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/performance-C6luZ-fJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_COLORS = {
  "No Alvo": "oklch(0.7 0.18 145)",
  Fora: "oklch(0.65 0.22 25)",
  "Sem Dado": "oklch(0.7 0.04 260)",
  Avaliar: "oklch(0.78 0.15 80)",
};
var FALLBACK_COLORS = [
  "oklch(0.6 0.2 250)",
  "oklch(0.65 0.18 180)",
  "oklch(0.7 0.18 145)",
  "oklch(0.78 0.15 80)",
  "oklch(0.65 0.22 25)",
  "oklch(0.6 0.22 310)",
];
var ALL = "__all__";
function Dashboard() {
  const { data } = useSuspenseQuery(metricsQuery);
  const [respFilter, setRespFilter] = (0, import_react.useState)(ALL);
  const [catFilter, setCatFilter] = (0, import_react.useState)(ALL);
  const [statusFilter, setStatusFilter] = (0, import_react.useState)(ALL);
  const [cadFilter, setCadFilter] = (0, import_react.useState)(ALL);
  const opts = (0, import_react.useMemo)(() => {
    const uniq = (k) => Array.from(new Set(data.map((d) => d[k]).filter((v) => !!v))).sort();
    return {
      resp: uniq("responsavel"),
      cat: uniq("categoria"),
      status: uniq("status"),
      cad: uniq("cadencia"),
    };
  }, [data]);
  const filtered = (0, import_react.useMemo)(
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
  const porResponsavel = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      const k = d.responsavel || "—";
      const cur = map.get(k) ?? {
        total: 0,
        noAlvo: 0,
      };
      if (d.status === "No Alvo" || d.status === "Fora") cur.total += 1;
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
  const statusPie = (0, import_react.useMemo)(
    () =>
      [
        {
          name: "No Alvo",
          value: noAlvo,
        },
        {
          name: "Fora",
          value: fora,
        },
        {
          name: "Sem Dado",
          value: semDado,
        },
        {
          name: "Avaliar",
          value: avaliar,
        },
      ].filter((s) => s.value > 0),
    [noAlvo, fora, semDado, avaliar],
  );
  const porCategoria = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      const k = d.categoria || "—";
      const cur = map.get(k) ?? {
        name: k,
        "No Alvo": 0,
        Fora: 0,
        "Sem Dado": 0,
        Avaliar: 0,
      };
      const s = d.status || "Sem Dado";
      if (s === "No Alvo" || s === "Fora" || s === "Sem Dado" || s === "Avaliar") cur[s] += 1;
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
  const porCadencia = (0, import_react.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((d) => {
      const k = d.cadencia || "—";
      map.set(k, (map.get(k) ?? 0) + 1);
    });
    return Array.from(map.entries())
      .map(([name, value]) => ({
        name,
        value,
      }))
      .sort((a, b) => b.value - a.value);
  }, [filtered]);
  const clearFilters = () => {
    setRespFilter(ALL);
    setCatFilter(ALL);
    setStatusFilter(ALL);
    setCadFilter(ALL);
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
                  children: "Dashboard de Performance",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Acompanhamento de metas por responsável, categoria e cadência.",
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
                    variant: "ghost",
                    size: "sm",
                    children: "Indicadores Profits",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                  to: "/performance",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "secondary",
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
                  label: "Responsável",
                  value: respFilter,
                  onChange: setRespFilter,
                  options: opts.resp,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Categoria",
                  value: catFilter,
                  onChange: setCatFilter,
                  options: opts.cat,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Status",
                  value: statusFilter,
                  onChange: setStatusFilter,
                  options: opts.status,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
                  label: "Cadência",
                  value: cadFilter,
                  onChange: setCadFilter,
                  options: opts.cad,
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
                label: "Indicadores",
                value: total,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "No Alvo",
                value: noAlvo,
                accent: "oklch(0.7 0.18 145)",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Fora da Meta",
                value: fora,
                accent: "oklch(0.65 0.22 25)",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Sem Dados",
                value: semDado,
                accent: "oklch(0.7 0.04 260)",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "Avaliar",
                value: avaliar,
                accent: "oklch(0.78 0.15 80)",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
                label: "% No Alvo",
                value: `${pctNoAlvo.toFixed(1)}%`,
                accent: "oklch(0.6 0.2 250)",
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
                      children: "% Metas Atingidas por Responsável",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porResponsavel,
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
                            domain: [0, 100],
                            tickFormatter: (v) => `${v}%`,
                            fontSize: 12,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            type: "category",
                            dataKey: "resp",
                            width: 90,
                            fontSize: 12,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
                            formatter: (v, _n, p) => [
                              `${v.toFixed(1)}% (${p.payload.noAlvo}/${p.payload.total})`,
                              "No Alvo",
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "pct",
                            fill: "oklch(0.6 0.2 250)",
                            radius: [0, 4, 4, 0],
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelList, {
                              dataKey: "pct",
                              position: "right",
                              formatter: (v) => `${v.toFixed(1)}%`,
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
                      children: "Distribuição por Status",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
                            data: statusPie,
                            dataKey: "value",
                            nameKey: "name",
                            outerRadius: 100,
                            label: true,
                            children: statusPie.map((s, i) =>
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                Cell,
                                { fill: STATUS_COLORS[s.name] ?? FALLBACK_COLORS[i % 6] },
                                i,
                              ),
                            ),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
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
                      children: "Status por Categoria",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porCategoria,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
                            strokeDasharray: "3 3",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
                            dataKey: "name",
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
                            fontSize: 11,
                            allowDecimals: false,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "No Alvo",
                            stackId: "a",
                            fill: STATUS_COLORS["No Alvo"],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "Fora",
                            stackId: "a",
                            fill: STATUS_COLORS["Fora"],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "Sem Dado",
                            stackId: "a",
                            fill: STATUS_COLORS["Sem Dado"],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "Avaliar",
                            stackId: "a",
                            fill: STATUS_COLORS["Avaliar"],
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
                      children: "Indicadores por Cadência",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                    className: "h-[320px]",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
                      width: "100%",
                      height: "100%",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
                        data: porCadencia,
                        layout: "vertical",
                        margin: {
                          left: 24,
                          right: 24,
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
                            width: 180,
                            fontSize: 11,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
                            dataKey: "value",
                            fill: "oklch(0.65 0.18 180)",
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
                  className: "text-base",
                  children: ["Indicadores (", filtered.length, ")"],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
                  className: "h-[420px] w-full",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Responsável",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Métrica",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Categoria",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Cadência",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Meta",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Realizado",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
                              children: "Status",
                            }),
                          ],
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, {
                        children: filtered.map((d) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            TableRow,
                            {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  className: "font-medium",
                                  children: d.responsavel,
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  children: d.metrica,
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  children: d.categoria,
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  children: d.cadencia,
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  children: d.meta || "—",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  children: d.realizado || "—",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
                                    style: {
                                      backgroundColor:
                                        STATUS_COLORS[d.status ?? ""] ?? "oklch(0.7 0.04 260)",
                                      color: "white",
                                    },
                                    children: d.status,
                                  }),
                                }),
                              ],
                            },
                            d.id,
                          ),
                        ),
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
    className: "flex min-w-[160px] flex-col gap-1",
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
//#endregion
export { Dashboard as component };
