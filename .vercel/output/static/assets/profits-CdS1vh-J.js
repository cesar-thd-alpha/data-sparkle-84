import { i as e, t } from "./jsx-runtime-DUAcabCT.js";
import { t as n } from "./react-DbyrFoBd.js";
import { t as r } from "./link-CJ3T-IXa.js";
import {
  A as i,
  Bt as a,
  F as o,
  G as s,
  I as c,
  J as l,
  K as u,
  L as d,
  R as f,
  U as p,
  Y as ee,
  Z as m,
  _t as h,
  a as g,
  c as _,
  i as v,
  o as y,
  r as b,
  s as x,
  tt as S,
  vt as C,
  yt as w,
} from "./dist-DAKu88rv.js";
import { i as T } from "./index-CQisDNiJ.js";
import { n as E, t as D } from "./arrow-up-down-lXywISrZ.js";
import { a as O, i as k, n as A, r as j, t as M } from "./select-BRsfvbWp.js";
import { i as te, n as ne, r as re, t as ie } from "./tooltip-DMjGxlG3.js";
import { i as N, t as P } from "./scroll-area-BZgAhYnF.js";
var F = e(n()),
  I = t(),
  L = `__all__`,
  R = { Fora: 0, "No Alvo": 1, "Sem Dado": 2 },
  z = { "No Alvo": `🟢`, Fora: `🔴`, "Sem Dado": `⚪` },
  B = (e, t = 2) =>
    e === null || Number.isNaN(e)
      ? `—`
      : e.toLocaleString(`pt-BR`, { minimumFractionDigits: t, maximumFractionDigits: t });
function V({ status: e }) {
  return (0, I.jsxs)(N, {
    variant: `secondary`,
    className: `gap-1 ${e === `No Alvo` ? `bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-400` : e === `Fora` ? `bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-500/15 dark:text-red-400` : `bg-muted text-muted-foreground hover:bg-muted`}`,
    children: [(0, I.jsx)(`span`, { "aria-hidden": !0, children: z[e] }), e],
  });
}
function H({ d: e }) {
  return (0, I.jsxs)(`div`, {
    className: `space-y-0.5 text-xs`,
    children: [
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `Profit:` }),
          ` `,
          e.profit,
        ],
      }),
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `Franquia:` }),
          ` `,
          e.franquia,
        ],
      }),
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `Clientes:` }),
          ` `,
          e.clientes.toLocaleString(`pt-BR`),
        ],
      }),
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `ROAS Médio:` }),
          ` `,
          B(e.roasMedio),
        ],
      }),
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `Alvo:` }),
          ` `,
          B(e.alvoRoas),
        ],
      }),
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `Desvio:` }),
          ` `,
          B(e.desvioRoas),
        ],
      }),
      (0, I.jsxs)(`div`, {
        children: [
          (0, I.jsx)(`span`, { className: `text-muted-foreground`, children: `Status:` }),
          ` `,
          z[e.statusRoas],
          ` `,
          e.statusRoas,
        ],
      }),
    ],
  });
}
function U() {
  let { data: e } = a(T),
    [t, n] = (0, F.useState)(L),
    [y, D] = (0, F.useState)(L),
    [O, k] = (0, F.useState)(L),
    [A, j] = (0, F.useState)(null),
    [M, N] = (0, F.useState)(`desc`),
    z = (0, F.useMemo)(() => {
      let t = (t) => Array.from(new Set(e.map((e) => e[t]).filter(Boolean))).sort();
      return { profit: t(`profit`), franquia: t(`franquia`) };
    }, [e]),
    U = (0, F.useMemo)(
      () =>
        e.filter(
          (e) =>
            (t === L || e.profit === t) &&
            (y === L || e.franquia === y) &&
            (O === L || e.statusRoas === O),
        ),
      [e, t, y, O],
    ),
    q = U.reduce((e, t) => e + t.clientes, 0),
    J = new Set(U.map((e) => e.franquia)).size,
    ae = new Set(U.map((e) => e.profit)).size,
    oe = J > 0 ? q / J : 0,
    se = U.filter((e) => e.statusRoas === `Fora`).length,
    ce = (0, F.useMemo)(() => {
      let e = new Map();
      return (
        U.forEach((t) => e.set(t.profit, (e.get(t.profit) ?? 0) + t.clientes)),
        Array.from(e.entries())
          .map(([e, t]) => ({ profit: e, clientes: t }))
          .sort((e, t) => t.clientes - e.clientes)
      );
    }, [U]),
    le = (0, F.useMemo)(() => {
      let e = new Map();
      return (
        U.forEach((t) => e.set(t.franquia, (e.get(t.franquia) ?? 0) + t.clientes)),
        Array.from(e.entries())
          .map(([e, t]) => ({ franquia: e, clientes: t }))
          .sort((e, t) => t.clientes - e.clientes)
          .slice(0, 10)
      );
    }, [U]),
    Y = (0, F.useMemo)(
      () =>
        U.filter((e) => e.statusRoas === `Fora` && e.desvioRoas !== null)
          .map((e) => ({ franquia: e.franquia, desvio: Math.abs(e.desvioRoas), row: e }))
          .sort((e, t) => t.desvio - e.desvio)
          .slice(0, 15),
      [U],
    ),
    X = (0, F.useMemo)(() => {
      let e = new Map();
      return (
        U.forEach((t) => {
          let n = e.get(t.profit) ?? { sum: 0, count: 0, alvoSum: 0, alvoCount: 0 };
          (t.roasMedio !== null && ((n.sum += t.roasMedio), (n.count += 1)),
            t.alvoRoas !== null && ((n.alvoSum += t.alvoRoas), (n.alvoCount += 1)),
            e.set(t.profit, n));
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({ profit: e, roas: t.count ? t.sum / t.count : 0 }))
          .sort((e, t) => t.roas - e.roas)
      );
    }, [U]),
    Z = (0, F.useMemo)(() => {
      let e = U.map((e) => e.alvoRoas).filter((e) => e !== null);
      return e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0;
    }, [U]),
    Q = (0, F.useMemo)(() => {
      let e = [...U];
      return (
        A === null
          ? e.sort((e, t) => {
              let n = R[e.statusRoas] - R[t.statusRoas];
              if (n !== 0) return n;
              let r = e.desvioRoas ?? 1 / 0,
                i = t.desvioRoas ?? 1 / 0;
              return r === i ? t.clientes - e.clientes : r - i;
            })
          : e.sort((e, t) => {
              let n = e[A],
                r = t[A];
              return n == null
                ? 1
                : r == null
                  ? -1
                  : typeof n == `number` && typeof r == `number`
                    ? M === `asc`
                      ? n - r
                      : r - n
                    : M === `asc`
                      ? String(n).localeCompare(String(r))
                      : String(r).localeCompare(String(n));
            }),
        e
      );
    }, [U, A, M]),
    $ = (e) => {
      e === A
        ? N(M === `asc` ? `desc` : `asc`)
        : (j(e), N(e === `clientes` || e === `roasMedio` || e === `desvioRoas` ? `desc` : `asc`));
    };
  return (0, I.jsx)(re, {
    delayDuration: 150,
    children: (0, I.jsxs)(`div`, {
      className: `min-h-screen bg-muted/30`,
      children: [
        (0, I.jsx)(`header`, {
          className: `border-b bg-card`,
          children: (0, I.jsxs)(`div`, {
            className: `mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5`,
            children: [
              (0, I.jsxs)(`div`, {
                children: [
                  (0, I.jsx)(`h1`, {
                    className: `text-2xl font-semibold tracking-tight`,
                    children: `Profits`,
                  }),
                  (0, I.jsx)(`p`, {
                    className: `text-sm text-muted-foreground`,
                    children: `Distribuição de clientes por Profit e Franquia.`,
                  }),
                ],
              }),
              (0, I.jsxs)(`nav`, {
                className: `flex gap-2`,
                children: [
                  (0, I.jsx)(r, {
                    to: `/`,
                    children: (0, I.jsx)(i, {
                      variant: `ghost`,
                      size: `sm`,
                      children: `Carteira Geral`,
                    }),
                  }),
                  (0, I.jsx)(r, {
                    to: `/carteira-profits`,
                    children: (0, I.jsx)(i, {
                      variant: `ghost`,
                      size: `sm`,
                      children: `Carteira por Profits`,
                    }),
                  }),
                  (0, I.jsx)(r, {
                    to: `/profits`,
                    children: (0, I.jsx)(i, {
                      variant: `secondary`,
                      size: `sm`,
                      children: `Indicadores Profits`,
                    }),
                  }),
                  (0, I.jsx)(r, {
                    to: `/performance`,
                    children: (0, I.jsx)(i, {
                      variant: `ghost`,
                      size: `sm`,
                      children: `Performance`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, I.jsxs)(`main`, {
          className: `mx-auto max-w-[1400px] space-y-6 px-6 py-6`,
          children: [
            (0, I.jsx)(o, {
              children: (0, I.jsxs)(c, {
                className: `flex flex-wrap items-end gap-3 pt-6`,
                children: [
                  (0, I.jsx)(G, { label: `Profit`, value: t, onChange: n, options: z.profit }),
                  (0, I.jsx)(G, { label: `Franquia`, value: y, onChange: D, options: z.franquia }),
                  (0, I.jsx)(G, {
                    label: `Status ROAS`,
                    value: O,
                    onChange: k,
                    options: [`No Alvo`, `Fora`, `Sem Dado`],
                  }),
                  (0, I.jsx)(i, {
                    variant: `outline`,
                    size: `sm`,
                    onClick: () => {
                      (n(L), D(L), k(L), j(null));
                    },
                    className: `ml-auto`,
                    children: `Limpar filtros`,
                  }),
                ],
              }),
            }),
            (0, I.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-4 md:grid-cols-5`,
              children: [
                (0, I.jsx)(W, {
                  label: `Total de Clientes`,
                  value: q.toLocaleString(`pt-BR`),
                  accent: `oklch(0.6 0.2 250)`,
                }),
                (0, I.jsx)(W, {
                  label: `Total de Franquias`,
                  value: J,
                  accent: `oklch(0.65 0.18 180)`,
                }),
                (0, I.jsx)(W, {
                  label: `Profit Managers`,
                  value: ae,
                  accent: `oklch(0.7 0.18 145)`,
                }),
                (0, I.jsx)(W, {
                  label: `Média Clientes/Franquia`,
                  value: oe.toFixed(1),
                  accent: `oklch(0.78 0.15 80)`,
                }),
                (0, I.jsx)(W, {
                  label: `Franquias abaixo do ROAS alvo`,
                  value: (0, I.jsxs)(`span`, {
                    className: `inline-flex items-center gap-2`,
                    children: [`🔴 `, se],
                  }),
                  accent: `oklch(0.6 0.22 25)`,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `grid gap-4 lg:grid-cols-2`,
              children: [
                (0, I.jsxs)(o, {
                  children: [
                    (0, I.jsx)(d, {
                      children: (0, I.jsx)(f, {
                        className: `text-base`,
                        children: `Clientes por Profit`,
                      }),
                    }),
                    (0, I.jsx)(c, {
                      className: `h-[420px]`,
                      children: (0, I.jsx)(C, {
                        width: `100%`,
                        height: `100%`,
                        children: (0, I.jsxs)(p, {
                          data: ce,
                          layout: `vertical`,
                          margin: { left: 12, right: 48 },
                          children: [
                            (0, I.jsx)(l, { strokeDasharray: `3 3`, horizontal: !1 }),
                            (0, I.jsx)(u, { type: `number`, fontSize: 11, allowDecimals: !1 }),
                            (0, I.jsx)(s, {
                              type: `category`,
                              dataKey: `profit`,
                              width: 110,
                              fontSize: 11,
                            }),
                            (0, I.jsx)(w, { formatter: (e) => e.toLocaleString(`pt-BR`) }),
                            (0, I.jsx)(m, {
                              dataKey: `clientes`,
                              fill: `oklch(0.6 0.2 250)`,
                              radius: [0, 4, 4, 0],
                              children: (0, I.jsx)(S, {
                                dataKey: `clientes`,
                                position: `right`,
                                fontSize: 11,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, I.jsxs)(o, {
                  children: [
                    (0, I.jsx)(d, {
                      children: (0, I.jsx)(f, {
                        className: `text-base`,
                        children: `Top 10 Franquias por Clientes`,
                      }),
                    }),
                    (0, I.jsx)(c, {
                      className: `h-[420px]`,
                      children: (0, I.jsx)(C, {
                        width: `100%`,
                        height: `100%`,
                        children: (0, I.jsxs)(p, {
                          data: le,
                          layout: `vertical`,
                          margin: { left: 12, right: 48 },
                          children: [
                            (0, I.jsx)(l, { strokeDasharray: `3 3`, horizontal: !1 }),
                            (0, I.jsx)(u, { type: `number`, fontSize: 11, allowDecimals: !1 }),
                            (0, I.jsx)(s, {
                              type: `category`,
                              dataKey: `franquia`,
                              width: 160,
                              fontSize: 11,
                            }),
                            (0, I.jsx)(w, { formatter: (e) => e.toLocaleString(`pt-BR`) }),
                            (0, I.jsx)(m, {
                              dataKey: `clientes`,
                              fill: `oklch(0.65 0.18 180)`,
                              radius: [0, 4, 4, 0],
                              children: (0, I.jsx)(S, {
                                dataKey: `clientes`,
                                position: `right`,
                                fontSize: 11,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, I.jsxs)(o, {
                  children: [
                    (0, I.jsx)(d, {
                      children: (0, I.jsxs)(f, {
                        className: `text-base flex items-center gap-2`,
                        children: [
                          (0, I.jsx)(E, { className: `h-4 w-4 text-red-500` }),
                          `Franquias abaixo do ROAS esperado`,
                        ],
                      }),
                    }),
                    (0, I.jsx)(c, {
                      className: `h-[420px]`,
                      children:
                        Y.length === 0
                          ? (0, I.jsx)(`div`, {
                              className: `flex h-full items-center justify-center text-sm text-muted-foreground`,
                              children: `Nenhuma franquia fora do alvo.`,
                            })
                          : (0, I.jsx)(C, {
                              width: `100%`,
                              height: `100%`,
                              children: (0, I.jsxs)(p, {
                                data: Y,
                                layout: `vertical`,
                                margin: { left: 12, right: 60 },
                                children: [
                                  (0, I.jsx)(l, { strokeDasharray: `3 3`, horizontal: !1 }),
                                  (0, I.jsx)(u, { type: `number`, fontSize: 11 }),
                                  (0, I.jsx)(s, {
                                    type: `category`,
                                    dataKey: `franquia`,
                                    width: 160,
                                    fontSize: 11,
                                  }),
                                  (0, I.jsx)(w, {
                                    content: ({ active: e, payload: t }) =>
                                      e && t?.[0]
                                        ? (0, I.jsx)(`div`, {
                                            className: `rounded-md border bg-background p-2 shadow`,
                                            children: (0, I.jsx)(H, { d: t[0].payload.row }),
                                          })
                                        : null,
                                  }),
                                  (0, I.jsx)(m, {
                                    dataKey: `desvio`,
                                    fill: `oklch(0.6 0.22 25)`,
                                    radius: [0, 4, 4, 0],
                                    children: (0, I.jsx)(S, {
                                      dataKey: `desvio`,
                                      position: `right`,
                                      fontSize: 11,
                                      formatter: (e) => B(e),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                    }),
                  ],
                }),
                (0, I.jsxs)(o, {
                  children: [
                    (0, I.jsx)(d, {
                      children: (0, I.jsx)(f, {
                        className: `text-base`,
                        children: `ROAS Médio por Profit`,
                      }),
                    }),
                    (0, I.jsx)(c, {
                      className: `h-[420px]`,
                      children: (0, I.jsx)(C, {
                        width: `100%`,
                        height: `100%`,
                        children: (0, I.jsxs)(p, {
                          data: X,
                          margin: { left: 12, right: 24, top: 12 },
                          children: [
                            (0, I.jsx)(l, { strokeDasharray: `3 3` }),
                            (0, I.jsx)(u, {
                              dataKey: `profit`,
                              fontSize: 11,
                              interval: 0,
                              angle: -25,
                              textAnchor: `end`,
                              height: 70,
                            }),
                            (0, I.jsx)(s, { fontSize: 11 }),
                            (0, I.jsx)(w, { formatter: (e) => B(e) }),
                            (0, I.jsx)(ee, {
                              y: Z,
                              stroke: `oklch(0.6 0.22 25)`,
                              strokeDasharray: `4 4`,
                              label: {
                                value: `Alvo médio ${B(Z)}`,
                                position: `insideTopRight`,
                                fontSize: 10,
                                fill: `oklch(0.6 0.22 25)`,
                              },
                            }),
                            (0, I.jsxs)(m, {
                              dataKey: `roas`,
                              radius: [4, 4, 0, 0],
                              children: [
                                X.map((e, t) =>
                                  (0, I.jsx)(
                                    h,
                                    {
                                      fill:
                                        e.roas >= Z ? `oklch(0.65 0.18 150)` : `oklch(0.6 0.22 25)`,
                                    },
                                    t,
                                  ),
                                ),
                                (0, I.jsx)(S, {
                                  dataKey: `roas`,
                                  position: `top`,
                                  fontSize: 10,
                                  formatter: (e) => B(e),
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
            (0, I.jsxs)(o, {
              children: [
                (0, I.jsx)(d, {
                  children: (0, I.jsxs)(f, {
                    className: `text-base`,
                    children: [`Detalhamento (`, Q.length, `)`],
                  }),
                }),
                (0, I.jsx)(c, {
                  children: (0, I.jsx)(P, {
                    className: `h-[460px] w-full`,
                    children: (0, I.jsxs)(b, {
                      children: [
                        (0, I.jsx)(x, {
                          children: (0, I.jsxs)(_, {
                            children: [
                              (0, I.jsx)(K, {
                                label: `Profit`,
                                k: `profit`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                              }),
                              (0, I.jsx)(K, {
                                label: `Franquia`,
                                k: `franquia`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                              }),
                              (0, I.jsx)(K, {
                                label: `Clientes`,
                                k: `clientes`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                                align: `right`,
                              }),
                              (0, I.jsx)(K, {
                                label: `ROAS Médio`,
                                k: `roasMedio`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                                align: `right`,
                              }),
                              (0, I.jsx)(K, {
                                label: `Alvo`,
                                k: `alvoRoas`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                                align: `right`,
                              }),
                              (0, I.jsx)(K, {
                                label: `Desvio`,
                                k: `desvioRoas`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                                align: `right`,
                              }),
                              (0, I.jsx)(K, {
                                label: `Status`,
                                k: `statusRoas`,
                                sortKey: A,
                                sortDir: M,
                                onClick: $,
                              }),
                            ],
                          }),
                        }),
                        (0, I.jsx)(v, {
                          children: Q.map((e, t) => {
                            let n =
                                e.roasMedio === null || e.alvoRoas === null
                                  ? `text-muted-foreground`
                                  : e.roasMedio >= e.alvoRoas
                                    ? `text-emerald-600 dark:text-emerald-400`
                                    : `text-red-600 dark:text-red-400`,
                              r =
                                e.desvioRoas === null
                                  ? `text-muted-foreground`
                                  : e.desvioRoas >= 0
                                    ? `text-emerald-600 dark:text-emerald-400`
                                    : `text-red-600 dark:text-red-400`;
                            return (0, I.jsxs)(
                              ie,
                              {
                                children: [
                                  (0, I.jsx)(te, {
                                    asChild: !0,
                                    children: (0, I.jsxs)(_, {
                                      className:
                                        e.statusRoas === `Fora`
                                          ? `bg-red-500/5 hover:bg-red-500/10`
                                          : ``,
                                      children: [
                                        (0, I.jsx)(g, {
                                          className: `font-medium`,
                                          children: e.profit,
                                        }),
                                        (0, I.jsx)(g, { children: e.franquia }),
                                        (0, I.jsx)(g, {
                                          className: `text-right tabular-nums`,
                                          children: e.clientes.toLocaleString(`pt-BR`),
                                        }),
                                        (0, I.jsx)(g, {
                                          className: `text-right tabular-nums font-medium ${n}`,
                                          children: (0, I.jsxs)(`span`, {
                                            className: `inline-flex items-center justify-end gap-1`,
                                            children: [
                                              e.statusRoas === `Fora` &&
                                                (0, I.jsx)(E, { className: `h-3.5 w-3.5` }),
                                              B(e.roasMedio),
                                            ],
                                          }),
                                        }),
                                        (0, I.jsx)(g, {
                                          className: `text-right tabular-nums text-muted-foreground`,
                                          children: B(e.alvoRoas),
                                        }),
                                        (0, I.jsx)(g, {
                                          className: `text-right tabular-nums ${r}`,
                                          children: B(e.desvioRoas),
                                        }),
                                        (0, I.jsx)(g, {
                                          children: (0, I.jsx)(V, { status: e.statusRoas }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, I.jsx)(ne, {
                                    side: `left`,
                                    children: (0, I.jsx)(H, { d: e }),
                                  }),
                                ],
                              },
                              t,
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
function W({ label: e, value: t, accent: n }) {
  return (0, I.jsx)(o, {
    children: (0, I.jsxs)(c, {
      className: `pt-5`,
      children: [
        (0, I.jsx)(`div`, {
          className: `text-3xl font-bold tracking-tight`,
          style: n ? { color: n } : void 0,
          children: t,
        }),
        (0, I.jsx)(`div`, {
          className: `mt-1 text-xs uppercase tracking-wide text-muted-foreground`,
          children: e,
        }),
      ],
    }),
  });
}
function G({ label: e, value: t, onChange: n, options: r }) {
  return (0, I.jsxs)(`div`, {
    className: `flex min-w-[200px] flex-col gap-1`,
    children: [
      (0, I.jsx)(`span`, { className: `text-xs font-medium text-muted-foreground`, children: e }),
      (0, I.jsxs)(M, {
        value: t,
        onValueChange: n,
        children: [
          (0, I.jsx)(k, { className: `h-9`, children: (0, I.jsx)(O, {}) }),
          (0, I.jsxs)(A, {
            children: [
              (0, I.jsx)(j, { value: L, children: `Todos` }),
              r.map((e) => (0, I.jsx)(j, { value: e, children: e }, e)),
            ],
          }),
        ],
      }),
    ],
  });
}
function K({ label: e, k: t, sortKey: n, sortDir: r, onClick: i, align: a }) {
  let o = n === t;
  return (0, I.jsx)(y, {
    className: a === `right` ? `text-right` : ``,
    children: (0, I.jsxs)(`button`, {
      type: `button`,
      onClick: () => i(t),
      className: `inline-flex items-center gap-1 hover:text-foreground ${o ? `text-foreground` : ``}`,
      children: [
        e,
        (0, I.jsx)(D, { className: `h-3 w-3 opacity-60` }),
        o && (0, I.jsx)(`span`, { className: `text-[10px]`, children: r === `asc` ? `↑` : `↓` }),
      ],
    }),
  });
}
export { U as component };
