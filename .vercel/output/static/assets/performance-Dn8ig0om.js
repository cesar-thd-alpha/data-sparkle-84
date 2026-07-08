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
  xt as w,
  yt as T,
} from "./dist-DAKu88rv.js";
import { r as E } from "./index-CQisDNiJ.js";
import { n as D, t as O } from "./PieChart-BAgRMclk.js";
import { a as k, i as A, n as j, r as M, t as N } from "./select-BRsfvbWp.js";
import { i as P, t as F } from "./scroll-area-BZgAhYnF.js";
var I = e(n()),
  L = t(),
  R = {
    "No Alvo": `oklch(0.7 0.18 145)`,
    Fora: `oklch(0.65 0.22 25)`,
    "Sem Dado": `oklch(0.7 0.04 260)`,
    Avaliar: `oklch(0.78 0.15 80)`,
  },
  z = [
    `oklch(0.6 0.2 250)`,
    `oklch(0.65 0.18 180)`,
    `oklch(0.7 0.18 145)`,
    `oklch(0.78 0.15 80)`,
    `oklch(0.65 0.22 25)`,
    `oklch(0.6 0.22 310)`,
  ],
  B = `__all__`;
function V() {
  let { data: e } = a(E),
    [t, n] = (0, I.useState)(B),
    [k, A] = (0, I.useState)(B),
    [j, M] = (0, I.useState)(B),
    [N, V] = (0, I.useState)(B),
    W = (0, I.useMemo)(() => {
      let t = (t) => Array.from(new Set(e.map((e) => e[t]).filter((e) => !!e))).sort();
      return {
        resp: t(`responsavel`),
        cat: t(`categoria`),
        status: t(`status`),
        cad: t(`cadencia`),
      };
    }, [e]),
    G = (0, I.useMemo)(
      () =>
        e.filter(
          (e) =>
            (t === B || e.responsavel === t) &&
            (k === B || e.categoria === k) &&
            (j === B || e.status === j) &&
            (N === B || e.cadencia === N),
        ),
      [e, t, k, j, N],
    ),
    K = G.length,
    q = G.filter((e) => e.status === `No Alvo`).length,
    J = G.filter((e) => e.status === `Fora`).length,
    Y = G.filter((e) => e.status === `Sem Dado`).length,
    X = G.filter((e) => e.status === `Avaliar`).length,
    Z = q + J,
    Q = Z > 0 ? (q / Z) * 100 : 0,
    ee = (0, I.useMemo)(() => {
      let e = new Map();
      return (
        G.forEach((t) => {
          let n = t.responsavel || `—`,
            r = e.get(n) ?? { total: 0, noAlvo: 0 };
          ((t.status === `No Alvo` || t.status === `Fora`) && (r.total += 1),
            t.status === `No Alvo` && (r.noAlvo += 1),
            e.set(n, r));
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({
            resp: e,
            pct: t.total > 0 ? (t.noAlvo / t.total) * 100 : 0,
            noAlvo: t.noAlvo,
            total: t.total,
          }))
          .sort((e, t) => t.pct - e.pct)
      );
    }, [G]),
    $ = (0, I.useMemo)(
      () =>
        [
          { name: `No Alvo`, value: q },
          { name: `Fora`, value: J },
          { name: `Sem Dado`, value: Y },
          { name: `Avaliar`, value: X },
        ].filter((e) => e.value > 0),
      [q, J, Y, X],
    ),
    te = (0, I.useMemo)(() => {
      let e = new Map();
      return (
        G.forEach((t) => {
          let n = t.categoria || `—`,
            r = e.get(n) ?? { name: n, "No Alvo": 0, Fora: 0, "Sem Dado": 0, Avaliar: 0 },
            i = t.status || `Sem Dado`;
          ((i === `No Alvo` || i === `Fora` || i === `Sem Dado` || i === `Avaliar`) && (r[i] += 1),
            e.set(n, r));
        }),
        Array.from(e.values()).sort(
          (e, t) =>
            t[`No Alvo`] +
            t.Fora +
            t[`Sem Dado`] +
            t.Avaliar -
            (e[`No Alvo`] + e.Fora + e[`Sem Dado`] + e.Avaliar),
        )
      );
    }, [G]),
    ne = (0, I.useMemo)(() => {
      let e = new Map();
      return (
        G.forEach((t) => {
          let n = t.cadencia || `—`;
          e.set(n, (e.get(n) ?? 0) + 1);
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({ name: e, value: t }))
          .sort((e, t) => t.value - e.value)
      );
    }, [G]);
  return (0, L.jsxs)(`div`, {
    className: `min-h-screen bg-muted/30`,
    children: [
      (0, L.jsx)(`header`, {
        className: `border-b bg-card`,
        children: (0, L.jsxs)(`div`, {
          className: `mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5`,
          children: [
            (0, L.jsxs)(`div`, {
              children: [
                (0, L.jsx)(`h1`, {
                  className: `text-2xl font-semibold tracking-tight`,
                  children: `Dashboard de Performance`,
                }),
                (0, L.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: `Acompanhamento de metas por responsável, categoria e cadência.`,
                }),
              ],
            }),
            (0, L.jsxs)(`nav`, {
              className: `flex gap-2`,
              children: [
                (0, L.jsx)(r, {
                  to: `/`,
                  children: (0, L.jsx)(i, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Carteira Geral`,
                  }),
                }),
                (0, L.jsx)(r, {
                  to: `/carteira-profits`,
                  children: (0, L.jsx)(i, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Carteira por Profits`,
                  }),
                }),
                (0, L.jsx)(r, {
                  to: `/profits`,
                  children: (0, L.jsx)(i, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Indicadores Profits`,
                  }),
                }),
                (0, L.jsx)(r, {
                  to: `/performance`,
                  children: (0, L.jsx)(i, {
                    variant: `secondary`,
                    size: `sm`,
                    children: `Performance`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, L.jsxs)(`main`, {
        className: `mx-auto max-w-[1400px] space-y-6 px-6 py-6`,
        children: [
          (0, L.jsx)(o, {
            children: (0, L.jsxs)(c, {
              className: `flex flex-wrap items-end gap-3 pt-6`,
              children: [
                (0, L.jsx)(U, { label: `Responsável`, value: t, onChange: n, options: W.resp }),
                (0, L.jsx)(U, { label: `Categoria`, value: k, onChange: A, options: W.cat }),
                (0, L.jsx)(U, { label: `Status`, value: j, onChange: M, options: W.status }),
                (0, L.jsx)(U, { label: `Cadência`, value: N, onChange: V, options: W.cad }),
                (0, L.jsx)(i, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: () => {
                    (n(B), A(B), M(B), V(B));
                  },
                  className: `ml-auto`,
                  children: `Limpar filtros`,
                }),
              ],
            }),
          }),
          (0, L.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6`,
            children: [
              (0, L.jsx)(H, { label: `Indicadores`, value: K }),
              (0, L.jsx)(H, { label: `No Alvo`, value: q, accent: `oklch(0.7 0.18 145)` }),
              (0, L.jsx)(H, { label: `Fora da Meta`, value: J, accent: `oklch(0.65 0.22 25)` }),
              (0, L.jsx)(H, { label: `Sem Dados`, value: Y, accent: `oklch(0.7 0.04 260)` }),
              (0, L.jsx)(H, { label: `Avaliar`, value: X, accent: `oklch(0.78 0.15 80)` }),
              (0, L.jsx)(H, {
                label: `% No Alvo`,
                value: `${Q.toFixed(1)}%`,
                accent: `oklch(0.6 0.2 250)`,
              }),
            ],
          }),
          (0, L.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-3`,
            children: [
              (0, L.jsxs)(o, {
                className: `lg:col-span-2`,
                children: [
                  (0, L.jsx)(d, {
                    children: (0, L.jsx)(f, {
                      className: `text-base`,
                      children: `% Metas Atingidas por Responsável`,
                    }),
                  }),
                  (0, L.jsx)(c, {
                    className: `h-[320px]`,
                    children: (0, L.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, L.jsxs)(p, {
                        data: ee,
                        layout: `vertical`,
                        margin: { left: 12, right: 48 },
                        children: [
                          (0, L.jsx)(l, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, L.jsx)(u, {
                            type: `number`,
                            domain: [0, 100],
                            tickFormatter: (e) => `${e}%`,
                            fontSize: 12,
                          }),
                          (0, L.jsx)(s, {
                            type: `category`,
                            dataKey: `resp`,
                            width: 90,
                            fontSize: 12,
                          }),
                          (0, L.jsx)(T, {
                            formatter: (e, t, n) => [
                              `${e.toFixed(1)}% (${n.payload.noAlvo}/${n.payload.total})`,
                              `No Alvo`,
                            ],
                          }),
                          (0, L.jsx)(m, {
                            dataKey: `pct`,
                            fill: `oklch(0.6 0.2 250)`,
                            radius: [0, 4, 4, 0],
                            children: (0, L.jsx)(S, {
                              dataKey: `pct`,
                              position: `right`,
                              formatter: (e) => `${e.toFixed(1)}%`,
                              fontSize: 11,
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, L.jsxs)(o, {
                children: [
                  (0, L.jsx)(d, {
                    children: (0, L.jsx)(f, {
                      className: `text-base`,
                      children: `Distribuição por Status`,
                    }),
                  }),
                  (0, L.jsx)(c, {
                    className: `h-[320px]`,
                    children: (0, L.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, L.jsxs)(O, {
                        children: [
                          (0, L.jsx)(D, {
                            data: $,
                            dataKey: `value`,
                            nameKey: `name`,
                            outerRadius: 100,
                            label: !0,
                            children: $.map((e, t) =>
                              (0, L.jsx)(h, { fill: R[e.name] ?? z[t % 6] }, t),
                            ),
                          }),
                          (0, L.jsx)(T, {}),
                          (0, L.jsx)(w, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, L.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              (0, L.jsxs)(o, {
                children: [
                  (0, L.jsx)(d, {
                    children: (0, L.jsx)(f, {
                      className: `text-base`,
                      children: `Status por Categoria`,
                    }),
                  }),
                  (0, L.jsx)(c, {
                    className: `h-[320px]`,
                    children: (0, L.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, L.jsxs)(p, {
                        data: te,
                        children: [
                          (0, L.jsx)(l, { strokeDasharray: `3 3` }),
                          (0, L.jsx)(u, { dataKey: `name`, fontSize: 11 }),
                          (0, L.jsx)(s, { fontSize: 11, allowDecimals: !1 }),
                          (0, L.jsx)(T, {}),
                          (0, L.jsx)(w, {}),
                          (0, L.jsx)(m, { dataKey: `No Alvo`, stackId: `a`, fill: R[`No Alvo`] }),
                          (0, L.jsx)(m, { dataKey: `Fora`, stackId: `a`, fill: R.Fora }),
                          (0, L.jsx)(m, { dataKey: `Sem Dado`, stackId: `a`, fill: R[`Sem Dado`] }),
                          (0, L.jsx)(m, { dataKey: `Avaliar`, stackId: `a`, fill: R.Avaliar }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, L.jsxs)(o, {
                children: [
                  (0, L.jsx)(d, {
                    children: (0, L.jsx)(f, {
                      className: `text-base`,
                      children: `Indicadores por Cadência`,
                    }),
                  }),
                  (0, L.jsx)(c, {
                    className: `h-[320px]`,
                    children: (0, L.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, L.jsxs)(p, {
                        data: ne,
                        layout: `vertical`,
                        margin: { left: 24, right: 24 },
                        children: [
                          (0, L.jsx)(l, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, L.jsx)(u, { type: `number`, fontSize: 11, allowDecimals: !1 }),
                          (0, L.jsx)(s, {
                            type: `category`,
                            dataKey: `name`,
                            width: 180,
                            fontSize: 11,
                          }),
                          (0, L.jsx)(T, {}),
                          (0, L.jsx)(m, {
                            dataKey: `value`,
                            fill: `oklch(0.65 0.18 180)`,
                            radius: [0, 4, 4, 0],
                            children: (0, L.jsx)(S, {
                              dataKey: `value`,
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
            ],
          }),
          (0, L.jsxs)(o, {
            children: [
              (0, L.jsx)(d, {
                children: (0, L.jsxs)(f, {
                  className: `text-base`,
                  children: [`Indicadores (`, G.length, `)`],
                }),
              }),
              (0, L.jsx)(c, {
                children: (0, L.jsx)(F, {
                  className: `h-[420px] w-full`,
                  children: (0, L.jsxs)(b, {
                    children: [
                      (0, L.jsx)(x, {
                        children: (0, L.jsxs)(_, {
                          children: [
                            (0, L.jsx)(y, { children: `Responsável` }),
                            (0, L.jsx)(y, { children: `Métrica` }),
                            (0, L.jsx)(y, { children: `Categoria` }),
                            (0, L.jsx)(y, { children: `Cadência` }),
                            (0, L.jsx)(y, { children: `Meta` }),
                            (0, L.jsx)(y, { children: `Realizado` }),
                            (0, L.jsx)(y, { children: `Status` }),
                          ],
                        }),
                      }),
                      (0, L.jsx)(v, {
                        children: G.map((e) =>
                          (0, L.jsxs)(
                            _,
                            {
                              children: [
                                (0, L.jsx)(g, {
                                  className: `font-medium`,
                                  children: e.responsavel,
                                }),
                                (0, L.jsx)(g, { children: e.metrica }),
                                (0, L.jsx)(g, { children: e.categoria }),
                                (0, L.jsx)(g, { children: e.cadencia }),
                                (0, L.jsx)(g, { children: e.meta || `—` }),
                                (0, L.jsx)(g, { children: e.realizado || `—` }),
                                (0, L.jsx)(g, {
                                  children: (0, L.jsx)(P, {
                                    style: {
                                      backgroundColor: R[e.status ?? ``] ?? `oklch(0.7 0.04 260)`,
                                      color: `white`,
                                    },
                                    children: e.status,
                                  }),
                                }),
                              ],
                            },
                            e.id,
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
function H({ label: e, value: t, accent: n }) {
  return (0, L.jsx)(o, {
    children: (0, L.jsxs)(c, {
      className: `pt-5`,
      children: [
        (0, L.jsx)(`div`, {
          className: `text-3xl font-bold tracking-tight`,
          style: n ? { color: n } : void 0,
          children: t,
        }),
        (0, L.jsx)(`div`, {
          className: `mt-1 text-xs uppercase tracking-wide text-muted-foreground`,
          children: e,
        }),
      ],
    }),
  });
}
function U({ label: e, value: t, onChange: n, options: r }) {
  return (0, L.jsxs)(`div`, {
    className: `flex min-w-[160px] flex-col gap-1`,
    children: [
      (0, L.jsx)(`span`, { className: `text-xs font-medium text-muted-foreground`, children: e }),
      (0, L.jsxs)(N, {
        value: t,
        onValueChange: n,
        children: [
          (0, L.jsx)(A, { className: `h-9`, children: (0, L.jsx)(k, {}) }),
          (0, L.jsxs)(j, {
            children: [
              (0, L.jsx)(M, { value: B, children: `Todos` }),
              r.map((e) => (0, L.jsx)(M, { value: e, children: e }, e)),
            ],
          }),
        ],
      }),
    ],
  });
}
export { V as component };
