import { i as e, t } from "./jsx-runtime-DUAcabCT.js";
import { t as n } from "./react-DbyrFoBd.js";
import { t as r } from "./link-CJ3T-IXa.js";
import {
  A as i,
  B as a,
  Bt as o,
  F as s,
  G as c,
  I as l,
  J as u,
  K as d,
  L as f,
  R as p,
  U as m,
  V as h,
  Z as g,
  _t as ee,
  a as _,
  c as v,
  i as te,
  o as y,
  r as b,
  s as x,
  tt as S,
  vt as C,
  xt as w,
  yt as T,
} from "./dist-DAKu88rv.js";
import { n as ne } from "./index-CQisDNiJ.js";
import { n as re, t as ie } from "./PieChart-BAgRMclk.js";
import {
  a as E,
  c as D,
  i as O,
  n as k,
  o as A,
  r as j,
  s as M,
  t as N,
} from "./input-DgJorDHu.js";
import { i as P, n as F, r as I, t as L } from "./tooltip-DMjGxlG3.js";
var R = e(n()),
  z = t(),
  B = [
    `oklch(0.6 0.2 250)`,
    `oklch(0.65 0.18 180)`,
    `oklch(0.7 0.18 145)`,
    `oklch(0.78 0.15 80)`,
    `oklch(0.65 0.22 25)`,
    `oklch(0.6 0.22 310)`,
    `oklch(0.55 0.18 280)`,
    `oklch(0.72 0.14 40)`,
    `oklch(0.5 0.15 200)`,
  ],
  V = (e) =>
    e.toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL`, maximumFractionDigits: 0 }),
  H = (e) => e.toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL` });
function U() {
  let { data: e } = o(ne),
    [t, n] = (0, R.useState)([]),
    [a, h] = (0, R.useState)([]),
    [E, O] = (0, R.useState)([]),
    [k, j] = (0, R.useState)([]),
    [M, P] = (0, R.useState)([]),
    [F, I] = (0, R.useState)(``),
    [L, U] = (0, R.useState)(``),
    K = (0, R.useMemo)(() => {
      let t = (t) => Array.from(new Set(e.map((e) => String(e[t] ?? ``)).filter(Boolean))).sort();
      return {
        profit: t(`profit`),
        franquia: t(`franquia`),
        status: t(`status`),
        tipo: t(`tipoContrato`),
        faixa: t(`faixaVencimento`),
      };
    }, [e]),
    q = (0, R.useMemo)(() => {
      let n = (e, t) => e.length === 0 || e.includes(t),
        r = F ? new Date(F + `T00:00:00`).getTime() : null,
        i = L ? new Date(L + `T23:59:59`).getTime() : null;
      return e.filter(
        (e) =>
          n(t, e.profit) &&
          n(a, e.franquia) &&
          n(E, e.status) &&
          n(k, e.tipoContrato) &&
          n(M, e.faixaVencimento) &&
          (r === null || (e.inicioContrato ? new Date(e.inicioContrato).getTime() >= r : !1)) &&
          (i === null || (e.fimContrato ? new Date(e.fimContrato).getTime() <= i : !1)),
      );
    }, [e, t, a, E, k, M, F, L]),
    J = (0, R.useMemo)(() => {
      let e = new Map();
      return (
        q.forEach((t) => {
          let n = e.get(t.profit) ?? {
            clientes: 0,
            ativosMRR: 0,
            ativosTCV: 0,
            totalAtivos: 0,
            mrr: 0,
            tcv: 0,
          };
          (n.clientes++,
            t.ativo &&
              (t.tipoContrato.toUpperCase() === `MENSAL`
                ? (n.ativosMRR++, (n.mrr += t.valorMensal ?? 0))
                : (n.ativosTCV++, (n.tcv += t.valorMensal ?? 0)),
              n.totalAtivos++),
            e.set(t.profit, n));
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({
            profit: e,
            clientes: t.clientes,
            ativosMRR: t.ativosMRR,
            ativosTCV: t.ativosTCV,
            totalAtivos: t.totalAtivos,
            mrr: t.mrr,
            tcv: t.tcv,
            ticketMedioMRR: t.ativosMRR > 0 ? t.mrr / t.ativosMRR : 0,
            ticketMedioTCV: t.ativosTCV > 0 ? t.tcv / t.ativosTCV : 0,
          }))
          .sort((e, t) => t.mrr + t.tcv - (e.mrr + e.tcv))
      );
    }, [q]),
    Y = J.length,
    X = J.reduce((e, t) => e + t.mrr, 0),
    Z = J.reduce((e, t) => e + t.ativosMRR, 0);
  J.reduce((e, t) => e + t.ativosTCV, 0);
  let Q = J.reduce((e, t) => e + t.clientes, 0),
    ae = Y > 0 ? X / Y : 0,
    oe = Y > 0 ? Q / Y : 0,
    se = Z > 0 ? X / Z : 0,
    $ = (0, R.useMemo)(
      () => J.filter((e) => e.mrr > 0).map((e) => ({ name: e.profit, value: e.mrr })),
      [J],
    );
  return (0, z.jsxs)(`div`, {
    className: `min-h-screen bg-muted/30`,
    children: [
      (0, z.jsx)(`header`, {
        className: `border-b bg-card`,
        children: (0, z.jsxs)(`div`, {
          className: `mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5`,
          children: [
            (0, z.jsxs)(`div`, {
              children: [
                (0, z.jsx)(`h1`, {
                  className: `text-2xl font-semibold tracking-tight`,
                  children: `Carteira por Profits`,
                }),
                (0, z.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: `Visão operacional dos Profits: receita, ranking, participação e clientes por Profit.`,
                }),
              ],
            }),
            (0, z.jsxs)(`nav`, {
              className: `flex gap-2`,
              children: [
                (0, z.jsx)(r, {
                  to: `/`,
                  children: (0, z.jsx)(i, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Carteira Geral`,
                  }),
                }),
                (0, z.jsx)(r, {
                  to: `/carteira-profits`,
                  children: (0, z.jsx)(i, {
                    variant: `secondary`,
                    size: `sm`,
                    children: `Carteira por Profits`,
                  }),
                }),
                (0, z.jsx)(r, {
                  to: `/profits`,
                  children: (0, z.jsx)(i, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Indicadores Profits`,
                  }),
                }),
                (0, z.jsx)(r, {
                  to: `/performance`,
                  children: (0, z.jsx)(i, {
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
      (0, z.jsxs)(`main`, {
        className: `mx-auto max-w-[1400px] space-y-6 px-6 py-6`,
        children: [
          (0, z.jsx)(s, {
            children: (0, z.jsxs)(l, {
              className: `flex flex-wrap items-end gap-3 pt-6`,
              children: [
                (0, z.jsx)(G, { label: `Profit`, value: t, onChange: n, options: K.profit }),
                (0, z.jsx)(G, { label: `Franquia`, value: a, onChange: h, options: K.franquia }),
                (0, z.jsx)(G, { label: `Status`, value: E, onChange: O, options: K.status }),
                (0, z.jsx)(G, { label: `Tipo Contrato`, value: k, onChange: j, options: K.tipo }),
                (0, z.jsx)(G, { label: `Vencimento`, value: M, onChange: P, options: K.faixa }),
                (0, z.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, z.jsx)(`label`, {
                      className: `text-xs font-medium text-muted-foreground`,
                      children: `Início a partir de`,
                    }),
                    (0, z.jsx)(N, {
                      type: `date`,
                      value: F,
                      onChange: (e) => I(e.target.value),
                      className: `h-9 w-[160px]`,
                    }),
                  ],
                }),
                (0, z.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, z.jsx)(`label`, {
                      className: `text-xs font-medium text-muted-foreground`,
                      children: `Fim até`,
                    }),
                    (0, z.jsx)(N, {
                      type: `date`,
                      value: L,
                      onChange: (e) => U(e.target.value),
                      className: `h-9 w-[160px]`,
                    }),
                  ],
                }),
                (0, z.jsx)(i, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: () => {
                    (n([]), h([]), O([]), j([]), P([]), I(``), U(``));
                  },
                  className: `ml-auto`,
                  children: `Limpar filtros`,
                }),
              ],
            }),
          }),
          (0, z.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6`,
            children: [
              (0, z.jsx)(W, {
                label: `Total de Profits`,
                value: Y,
                accent: `oklch(0.6 0.2 250)`,
                icon: (0, z.jsx)(A, { className: `h-4 w-4` }),
              }),
              (0, z.jsx)(W, {
                label: `MRR Total`,
                value: V(X),
                accent: `oklch(0.65 0.18 180)`,
                icon: (0, z.jsx)(D, { className: `h-4 w-4` }),
                tooltip: `Soma do MRR de todos os clientes ativos, agregado por Profit.`,
              }),
              (0, z.jsx)(W, {
                label: `Receita média por Profit`,
                value: V(ae),
                accent: `oklch(0.7 0.18 145)`,
                tooltip: `MRR total dividido pelo número de Profits.`,
              }),
              (0, z.jsx)(W, {
                label: `Ticket Médio`,
                value: V(se),
                accent: `oklch(0.78 0.15 80)`,
                tooltip: `MRR total dividido pelo total de clientes ativos.`,
              }),
              (0, z.jsx)(W, {
                label: `Clientes por Profit`,
                value: oe.toFixed(1),
                accent: `oklch(0.6 0.22 310)`,
              }),
              (0, z.jsx)(W, { label: `Total de Clientes`, value: Q.toLocaleString(`pt-BR`) }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-3`,
            children: [
              (0, z.jsxs)(s, {
                className: `lg:col-span-2`,
                children: [
                  (0, z.jsx)(f, {
                    children: (0, z.jsx)(p, { className: `text-base`, children: `MRR por Profit` }),
                  }),
                  (0, z.jsx)(l, {
                    className: `h-[360px]`,
                    children: (0, z.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, z.jsxs)(m, {
                        data: J,
                        layout: `vertical`,
                        margin: { left: 12, right: 72 },
                        children: [
                          (0, z.jsx)(u, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, z.jsx)(d, {
                            type: `number`,
                            fontSize: 11,
                            tickFormatter: (e) => V(e),
                          }),
                          (0, z.jsx)(c, {
                            type: `category`,
                            dataKey: `profit`,
                            width: 130,
                            fontSize: 11,
                          }),
                          (0, z.jsx)(T, { formatter: (e) => H(e) }),
                          (0, z.jsx)(g, {
                            dataKey: `mrr`,
                            fill: `oklch(0.6 0.2 250)`,
                            radius: [0, 4, 4, 0],
                            name: `MRR`,
                            children: (0, z.jsx)(S, {
                              dataKey: `mrr`,
                              position: `right`,
                              fontSize: 11,
                              formatter: (e) => V(e),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, z.jsxs)(s, {
                children: [
                  (0, z.jsx)(f, {
                    children: (0, z.jsx)(p, {
                      className: `text-base`,
                      children: `Participação (MRR)`,
                    }),
                  }),
                  (0, z.jsx)(l, {
                    className: `h-[360px]`,
                    children:
                      $.length === 0
                        ? (0, z.jsx)(`div`, {
                            className: `flex h-full items-center justify-center text-sm text-muted-foreground`,
                            children: `Sem MRR no filtro atual.`,
                          })
                        : (0, z.jsx)(C, {
                            width: `100%`,
                            height: `100%`,
                            children: (0, z.jsxs)(ie, {
                              children: [
                                (0, z.jsx)(re, {
                                  data: $,
                                  dataKey: `value`,
                                  nameKey: `name`,
                                  outerRadius: 110,
                                  label: (e) => `${((e.percent ?? 0) * 100).toFixed(0)}%`,
                                  children: $.map((e, t) =>
                                    (0, z.jsx)(ee, { fill: B[t % B.length] }, t),
                                  ),
                                }),
                                (0, z.jsx)(T, { formatter: (e) => H(e) }),
                                (0, z.jsx)(w, {}),
                              ],
                            }),
                          }),
                  }),
                ],
              }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              (0, z.jsxs)(s, {
                children: [
                  (0, z.jsx)(f, {
                    children: (0, z.jsx)(p, {
                      className: `text-base`,
                      children: `Clientes Ativos (MRR + TCV) por Profit`,
                    }),
                  }),
                  (0, z.jsx)(l, {
                    className: `h-[380px]`,
                    children: (0, z.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, z.jsxs)(m, {
                        data: J,
                        layout: `vertical`,
                        margin: { left: 12, right: 48 },
                        children: [
                          (0, z.jsx)(u, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, z.jsx)(d, { type: `number`, fontSize: 11, allowDecimals: !1 }),
                          (0, z.jsx)(c, {
                            type: `category`,
                            dataKey: `profit`,
                            width: 130,
                            fontSize: 11,
                          }),
                          (0, z.jsx)(T, {}),
                          (0, z.jsx)(w, {}),
                          (0, z.jsx)(g, {
                            dataKey: `totalAtivos`,
                            name: `Clientes Ativos`,
                            fill: `oklch(0.7 0.18 145)`,
                            radius: [0, 4, 4, 0],
                            children: (0, z.jsx)(S, {
                              dataKey: `totalAtivos`,
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
              (0, z.jsxs)(s, {
                children: [
                  (0, z.jsx)(f, {
                    children: (0, z.jsx)(p, {
                      className: `text-base`,
                      children: `Ticket Médio (MRR) por Profit`,
                    }),
                  }),
                  (0, z.jsx)(l, {
                    className: `h-[380px]`,
                    children: (0, z.jsx)(C, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, z.jsxs)(m, {
                        data: J,
                        layout: `vertical`,
                        margin: { left: 12, right: 72 },
                        children: [
                          (0, z.jsx)(u, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, z.jsx)(d, {
                            type: `number`,
                            fontSize: 11,
                            tickFormatter: (e) => V(e),
                          }),
                          (0, z.jsx)(c, {
                            type: `category`,
                            dataKey: `profit`,
                            width: 130,
                            fontSize: 11,
                          }),
                          (0, z.jsx)(T, { formatter: (e) => H(e) }),
                          (0, z.jsx)(g, {
                            dataKey: `ticketMedioMRR`,
                            fill: `oklch(0.78 0.15 80)`,
                            radius: [0, 4, 4, 0],
                            name: `Ticket Médio`,
                            children: (0, z.jsx)(S, {
                              dataKey: `ticketMedioMRR`,
                              position: `right`,
                              fontSize: 11,
                              formatter: (e) => V(e),
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
          (0, z.jsxs)(s, {
            children: [
              (0, z.jsx)(f, {
                children: (0, z.jsxs)(p, {
                  className: `text-base`,
                  children: [`Ranking de Profits (`, J.length, `)`],
                }),
              }),
              (0, z.jsx)(l, {
                children: (0, z.jsxs)(b, {
                  children: [
                    (0, z.jsx)(x, {
                      children: (0, z.jsxs)(v, {
                        children: [
                          (0, z.jsx)(y, { children: `Profit` }),
                          (0, z.jsx)(y, { className: `text-right`, children: `Clientes` }),
                          (0, z.jsx)(y, { className: `text-right`, children: `Ativos` }),
                          (0, z.jsx)(y, { className: `text-right`, children: `MRR` }),
                          (0, z.jsx)(y, { className: `text-right`, children: `Ticket Médio MRR` }),
                          (0, z.jsx)(y, { className: `text-right`, children: `Ticket Médio TCV` }),
                          (0, z.jsx)(y, { className: `text-right`, children: `Participação` }),
                        ],
                      }),
                    }),
                    (0, z.jsx)(te, {
                      children: J.map((e) => {
                        let t = X > 0 ? (e.mrr / X) * 100 : 0;
                        return (0, z.jsxs)(
                          v,
                          {
                            children: [
                              (0, z.jsx)(_, { className: `font-medium`, children: e.profit }),
                              (0, z.jsx)(_, {
                                className: `text-right tabular-nums`,
                                children: e.clientes.toLocaleString(`pt-BR`),
                              }),
                              (0, z.jsx)(_, {
                                className: `text-right tabular-nums`,
                                children: (e.ativosMRR + e.ativosTCV).toLocaleString(`pt-BR`),
                              }),
                              (0, z.jsx)(_, {
                                className: `text-right tabular-nums`,
                                children: V(e.mrr),
                              }),
                              (0, z.jsx)(_, {
                                className: `text-right tabular-nums`,
                                children: V(e.ticketMedioMRR),
                              }),
                              (0, z.jsx)(_, {
                                className: `text-right tabular-nums`,
                                children: V(e.ticketMedioTCV),
                              }),
                              (0, z.jsxs)(_, {
                                className: `text-right tabular-nums text-muted-foreground`,
                                children: [t.toFixed(1), `%`],
                              }),
                            ],
                          },
                          e.profit,
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
function W({ label: e, value: t, accent: n, icon: r, tooltip: i }) {
  return (0, z.jsx)(s, {
    children: (0, z.jsxs)(l, {
      className: `pt-5`,
      children: [
        (0, z.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, z.jsx)(`div`, {
              className: `text-2xl font-bold tracking-tight`,
              style: n ? { color: n } : void 0,
              children: t,
            }),
            r && (0, z.jsx)(`div`, { className: `text-muted-foreground`, children: r }),
          ],
        }),
        (0, z.jsx)(`div`, {
          className: `mt-2 text-xs uppercase tracking-wide text-muted-foreground`,
          children: (0, z.jsxs)(`span`, {
            className: `flex items-center justify-between`,
            children: [
              e,
              i &&
                (0, z.jsx)(I, {
                  children: (0, z.jsxs)(L, {
                    children: [
                      (0, z.jsx)(P, {
                        asChild: !0,
                        children: (0, z.jsx)(`span`, {
                          className: `cursor-pointer`,
                          children: (0, z.jsx)(M, { className: `w-4` }),
                        }),
                      }),
                      (0, z.jsx)(F, { children: (0, z.jsx)(`p`, { children: i }) }),
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
function G({ label: e, value: t, onChange: n, options: r }) {
  let o = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]),
    s = t.length === 0 ? `Todos` : t.length === 1 ? t[0] : `${t.length} selecionados`;
  return (0, z.jsxs)(`div`, {
    className: `flex min-w-[180px] flex-col gap-1`,
    children: [
      (0, z.jsx)(`span`, { className: `text-xs font-medium text-muted-foreground`, children: e }),
      (0, z.jsxs)(j, {
        children: [
          (0, z.jsx)(E, {
            asChild: !0,
            children: (0, z.jsxs)(i, {
              variant: `outline`,
              size: `sm`,
              className: `h-9 w-full justify-between font-normal`,
              children: [
                (0, z.jsx)(`span`, { className: `truncate`, children: s }),
                (0, z.jsx)(a, { className: `h-4 w-4 opacity-60` }),
              ],
            }),
          }),
          (0, z.jsxs)(O, {
            align: `start`,
            className: `w-64 p-0`,
            children: [
              (0, z.jsxs)(`div`, {
                className: `flex items-center justify-between border-b px-3 py-2 text-xs`,
                children: [
                  (0, z.jsx)(`span`, { className: `font-medium`, children: e }),
                  (0, z.jsx)(`button`, {
                    type: `button`,
                    className: `text-muted-foreground hover:text-foreground`,
                    onClick: () => n([]),
                    children: `Limpar`,
                  }),
                ],
              }),
              (0, z.jsx)(`div`, {
                className: `max-h-64 overflow-y-auto p-1`,
                children: r.map((e) => {
                  let n = t.includes(e);
                  return (0, z.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => o(e),
                      className: `flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent`,
                      children: [
                        (0, z.jsx)(k, { checked: n, className: `pointer-events-none` }),
                        (0, z.jsx)(`span`, { className: `flex-1 truncate text-left`, children: e }),
                        n && (0, z.jsx)(h, { className: `h-3.5 w-3.5 text-primary` }),
                      ],
                    },
                    e,
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
export { U as component };
