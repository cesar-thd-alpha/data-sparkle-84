import { i as e, t } from "./jsx-runtime-DUAcabCT.js";
import { t as n } from "./react-DbyrFoBd.js";
import { t as r } from "./link-CJ3T-IXa.js";
import {
  $ as i,
  A as a,
  At as o,
  B as s,
  Bt as c,
  Ct as l,
  Dt as u,
  Et as d,
  F as f,
  Ft as p,
  G as m,
  H as h,
  I as g,
  J as _,
  K as v,
  L as y,
  Nt as b,
  Ot as x,
  Pt as S,
  Q as C,
  R as w,
  Rt as T,
  Tt as ee,
  U as E,
  V as te,
  W as D,
  X as ne,
  Z as re,
  _t as ie,
  a as O,
  bt as ae,
  c as oe,
  ct as k,
  dt as se,
  et as A,
  i as ce,
  jt as j,
  lt as le,
  o as M,
  pt as N,
  q as ue,
  r as de,
  s as fe,
  st as P,
  tt as pe,
  ut as F,
  vt as I,
  wt as L,
  xt as me,
  yt as R,
  zt as he,
} from "./dist-DAKu88rv.js";
import { t as ge } from "./index-CQisDNiJ.js";
import { n as _e, t as ve } from "./PieChart-BAgRMclk.js";
import { n as ye, t as be } from "./arrow-up-down-lXywISrZ.js";
import {
  a as xe,
  c as Se,
  i as Ce,
  n as we,
  o as Te,
  r as Ee,
  s as De,
  t as Oe,
} from "./input-DgJorDHu.js";
import { i as ke, n as Ae, r as je, t as Me } from "./tooltip-DMjGxlG3.js";
import { i as Ne, t as Pe } from "./scroll-area-BZgAhYnF.js";
var z = e(n()),
  B = e(he()),
  V = e(p()),
  Fe = e(se()),
  Ie = [`type`, `layout`, `connectNulls`, `ref`],
  Le = [`key`];
function H(e) {
  "@babel/helpers - typeof";
  return (
    (H =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    H(e)
  );
}
function Re(e, t) {
  if (e == null) return {};
  var n = ze(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
  }
  return n;
}
function ze(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function U() {
  return (
    (U = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    U.apply(this, arguments)
  );
}
function Be(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Be(Object(n), !0).forEach(function (t) {
          G(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Be(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ve(e) {
  return Ge(e) || We(e) || Ue(e) || He();
}
function He() {
  throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ue(e, t) {
  if (e) {
    if (typeof e == `string`) return Ke(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`))
      return Array.from(e);
    if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ke(e, t);
  }
}
function We(e) {
  if ((typeof Symbol < `u` && e[Symbol.iterator] != null) || e[`@@iterator`] != null)
    return Array.from(e);
}
function Ge(e) {
  if (Array.isArray(e)) return Ke(e);
}
function Ke(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function qe(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Je(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, rt(r.key), r));
  }
}
function Ye(e, t, n) {
  return (
    t && Je(e.prototype, t),
    n && Je(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Xe(e, t, n) {
  return (
    (t = et(t)),
    Ze(e, $e() ? Reflect.construct(t, n || [], et(e).constructor) : t.apply(e, n))
  );
}
function Ze(e, t) {
  if (t && (H(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return Qe(e);
}
function Qe(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function $e() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return ($e = function () {
    return !!e;
  })();
}
function et(e) {
  return (
    (et = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    et(e)
  );
}
function tt(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && nt(e, t));
}
function nt(e, t) {
  return (
    (nt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    nt(e, t)
  );
}
function G(e, t, n) {
  return (
    (t = rt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function rt(e) {
  var t = it(e, `string`);
  return H(t) == `symbol` ? t : t + ``;
}
function it(e, t) {
  if (H(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (H(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var at = (function (e) {
  function t() {
    var e;
    qe(this, t);
    var n = [...arguments];
    return (
      (e = Xe(this, t, [].concat(n))),
      G(e, `state`, { isAnimationFinished: !0, totalLength: 0 }),
      G(e, `generateSimpleStrokeDasharray`, function (e, t) {
        return `${t}px ${e - t}px`;
      }),
      G(e, `getStrokeDasharray`, function (n, r, i) {
        var a = i.reduce(function (e, t) {
          return e + t;
        });
        if (!a) return e.generateSimpleStrokeDasharray(r, n);
        for (
          var o = Math.floor(n / a), s = n % a, c = r - n, l = [], u = 0, d = 0;
          u < i.length;
          d += i[u], ++u
        )
          if (d + i[u] > s) {
            l = [].concat(Ve(i.slice(0, u)), [s - d]);
            break;
          }
        var f = l.length % 2 == 0 ? [0, c] : [c];
        return []
          .concat(Ve(t.repeat(i, o)), Ve(l), f)
          .map(function (e) {
            return `${e}px`;
          })
          .join(`, `);
      }),
      G(e, `id`, b(`recharts-line-`)),
      G(e, `pathRef`, function (t) {
        e.mainCurve = t;
      }),
      G(e, `handleAnimationEnd`, function () {
        (e.setState({ isAnimationFinished: !0 }),
          e.props.onAnimationEnd && e.props.onAnimationEnd());
      }),
      G(e, `handleAnimationStart`, function () {
        (e.setState({ isAnimationFinished: !1 }),
          e.props.onAnimationStart && e.props.onAnimationStart());
      }),
      e
    );
  }
  return (
    tt(t, e),
    Ye(
      t,
      [
        {
          key: `componentDidMount`,
          value: function () {
            if (this.props.isAnimationActive) {
              var e = this.getTotalLength();
              this.setState({ totalLength: e });
            }
          },
        },
        {
          key: `componentDidUpdate`,
          value: function () {
            if (this.props.isAnimationActive) {
              var e = this.getTotalLength();
              e !== this.state.totalLength && this.setState({ totalLength: e });
            }
          },
        },
        {
          key: `getTotalLength`,
          value: function () {
            var e = this.mainCurve;
            try {
              return (e && e.getTotalLength && e.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: `renderErrorBar`,
          value: function (e, t) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var n = this.props,
              r = n.points,
              i = n.xAxis,
              a = n.yAxis,
              o = n.layout,
              s = n.children,
              c = ee(s, le);
            if (!c) return null;
            var l = function (e, t) {
                return { x: e.x, y: e.y, value: e.value, errorVal: k(e.payload, t) };
              },
              u = { clipPath: e ? `url(#clipPath-${t})` : null };
            return z.createElement(
              F,
              u,
              c.map(function (e) {
                return z.cloneElement(e, {
                  key: `bar-${e.props.dataKey}`,
                  data: r,
                  xAxis: i,
                  yAxis: a,
                  layout: o,
                  dataPointFormatter: l,
                });
              }),
            );
          },
        },
        {
          key: `renderDots`,
          value: function (e, n, r) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var i = this.props,
              a = i.dot,
              o = i.points,
              s = i.dataKey,
              c = L(this.props, !1),
              l = L(a, !0),
              u = o.map(function (e, n) {
                var r = W(
                  W(W({ key: `dot-${n}`, r: 3 }, c), l),
                  {},
                  {
                    index: n,
                    cx: e.x,
                    cy: e.y,
                    value: e.value,
                    dataKey: s,
                    payload: e.payload,
                    points: o,
                  },
                );
                return t.renderDotItem(a, r);
              }),
              d = { clipPath: e ? `url(#clipPath-${n ? `` : `dots-`}${r})` : null };
            return z.createElement(F, U({ className: `recharts-line-dots`, key: `dots` }, d), u);
          },
        },
        {
          key: `renderCurveStatically`,
          value: function (e, t, n, r) {
            var a = this.props,
              o = a.type,
              s = a.layout,
              c = a.connectNulls;
            a.ref;
            var l = W(
              W(
                W({}, L(Re(a, Ie), !0)),
                {},
                {
                  fill: `none`,
                  className: `recharts-line-curve`,
                  clipPath: t ? `url(#clipPath-${n})` : null,
                  points: e,
                },
                r,
              ),
              {},
              { type: o, layout: s, connectNulls: c },
            );
            return z.createElement(i, U({}, l, { pathRef: this.pathRef }));
          },
        },
        {
          key: `renderCurveWithAnimation`,
          value: function (e, t) {
            var n = this,
              r = this.props,
              i = r.points,
              a = r.strokeDasharray,
              s = r.isAnimationActive,
              c = r.animationBegin,
              l = r.animationDuration,
              u = r.animationEasing,
              d = r.animationId,
              f = r.animateNewValues,
              p = r.width,
              m = r.height,
              h = this.state,
              g = h.prevPoints,
              _ = h.totalLength;
            return z.createElement(
              A,
              {
                begin: c,
                duration: l,
                isActive: s,
                easing: u,
                from: { t: 0 },
                to: { t: 1 },
                key: `line-${d}`,
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (r) {
                var s = r.t;
                if (g) {
                  var c = g.length / i.length,
                    l = i.map(function (e, t) {
                      var n = Math.floor(t * c);
                      if (g[n]) {
                        var r = g[n],
                          i = o(r.x, e.x),
                          a = o(r.y, e.y);
                        return W(W({}, e), {}, { x: i(s), y: a(s) });
                      }
                      if (f) {
                        var l = o(p * 2, e.x),
                          u = o(m / 2, e.y);
                        return W(W({}, e), {}, { x: l(s), y: u(s) });
                      }
                      return W(W({}, e), {}, { x: e.x, y: e.y });
                    });
                  return n.renderCurveStatically(l, e, t);
                }
                var u = o(0, _)(s),
                  d;
                if (a) {
                  var h = `${a}`.split(/[,\s]+/gim).map(function (e) {
                    return parseFloat(e);
                  });
                  d = n.getStrokeDasharray(u, _, h);
                } else d = n.generateSimpleStrokeDasharray(_, u);
                return n.renderCurveStatically(i, e, t, { strokeDasharray: d });
              },
            );
          },
        },
        {
          key: `renderCurve`,
          value: function (e, t) {
            var n = this.props,
              r = n.points,
              i = n.isAnimationActive,
              a = this.state,
              o = a.prevPoints,
              s = a.totalLength;
            return i && r && r.length && ((!o && s > 0) || !(0, Fe.default)(o, r))
              ? this.renderCurveWithAnimation(e, t)
              : this.renderCurveStatically(r, e, t);
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.hide,
              n = e.dot,
              r = e.points,
              i = e.className,
              a = e.xAxis,
              o = e.yAxis,
              s = e.top,
              c = e.left,
              l = e.width,
              u = e.height,
              f = e.isAnimationActive,
              p = e.id;
            if (t || !r || !r.length) return null;
            var m = this.state.isAnimationFinished,
              h = r.length === 1,
              g = T(`recharts-line`, i),
              _ = a && a.allowDataOverflow,
              v = o && o.allowDataOverflow,
              y = _ || v,
              b = (0, V.default)(p) ? this.id : p,
              x = L(n, !1) ?? { r: 3, strokeWidth: 2 },
              S = x.r,
              C = S === void 0 ? 3 : S,
              w = x.strokeWidth,
              ee = w === void 0 ? 2 : w,
              E = (d(n) ? n : {}).clipDot,
              te = E === void 0 ? !0 : E,
              D = C * 2 + ee;
            return z.createElement(
              F,
              { className: g },
              _ || v
                ? z.createElement(
                    `defs`,
                    null,
                    z.createElement(
                      `clipPath`,
                      { id: `clipPath-${b}` },
                      z.createElement(`rect`, {
                        x: _ ? c : c - l / 2,
                        y: v ? s : s - u / 2,
                        width: _ ? l : l * 2,
                        height: v ? u : u * 2,
                      }),
                    ),
                    !te &&
                      z.createElement(
                        `clipPath`,
                        { id: `clipPath-dots-${b}` },
                        z.createElement(`rect`, {
                          x: c - D / 2,
                          y: s - D / 2,
                          width: l + D,
                          height: u + D,
                        }),
                      ),
                  )
                : null,
              !h && this.renderCurve(y, b),
              this.renderErrorBar(y, b),
              (h || n) && this.renderDots(y, te, b),
              (!f || m) && pe.renderCallByParent(this.props, r),
            );
          },
        },
      ],
      [
        {
          key: `getDerivedStateFromProps`,
          value: function (e, t) {
            return e.animationId === t.prevAnimationId
              ? e.points === t.curPoints
                ? null
                : { curPoints: e.points }
              : { prevAnimationId: e.animationId, curPoints: e.points, prevPoints: t.curPoints };
          },
        },
        {
          key: `repeat`,
          value: function (e, t) {
            for (var n = e.length % 2 == 0 ? e : [].concat(Ve(e), [0]), r = [], i = 0; i < t; ++i)
              r = [].concat(Ve(r), Ve(n));
            return r;
          },
        },
        {
          key: `renderDotItem`,
          value: function (e, t) {
            var n;
            if (z.isValidElement(e)) n = z.cloneElement(e, t);
            else if ((0, B.default)(e)) n = e(t);
            else {
              var r = t.key,
                i = Re(t, Le),
                a = T(`recharts-line-dot`, typeof e == `boolean` ? `` : e.className);
              n = z.createElement(ue, U({ key: r }, i, { className: a }));
            }
            return n;
          },
        },
      ],
    )
  );
})(z.PureComponent);
(G(at, `displayName`, `Line`),
  G(at, `defaultProps`, {
    xAxisId: 0,
    yAxisId: 0,
    connectNulls: !1,
    activeDot: !0,
    dot: !0,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    fill: `#fff`,
    points: [],
    isAnimationActive: !ae.isSsr,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    hide: !1,
    label: !1,
  }),
  G(at, `getComposedData`, function (e) {
    var t = e.props,
      n = e.xAxis,
      r = e.yAxis,
      i = e.xAxisTicks,
      a = e.yAxisTicks,
      o = e.dataKey,
      s = e.bandSize,
      c = e.displayedData,
      l = e.offset,
      u = t.layout;
    return W(
      {
        points: c.map(function (e, t) {
          var c = k(e, o);
          return u === `horizontal`
            ? {
                x: P({ axis: n, ticks: i, bandSize: s, entry: e, index: t }),
                y: (0, V.default)(c) ? null : r.scale(c),
                value: c,
                payload: e,
              }
            : {
                x: (0, V.default)(c) ? null : n.scale(c),
                y: P({ axis: r, ticks: a, bandSize: s, entry: e, index: t }),
                value: c,
                payload: e,
              };
        }),
        layout: u,
      },
      l,
    );
  }));
var ot = D({
    chartName: `LineChart`,
    GraphicalChild: at,
    axisComponents: [
      { axisType: `xAxis`, AxisComp: v },
      { axisType: `yAxis`, AxisComp: m },
    ],
    formatAxisMap: ne,
  }),
  st = e(N()),
  ct = e(S()),
  lt = [`layout`, `type`, `stroke`, `connectNulls`, `isRange`, `ref`],
  ut = [`key`],
  dt;
function ft(e) {
  "@babel/helpers - typeof";
  return (
    (ft =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    ft(e)
  );
}
function pt(e, t) {
  if (e == null) return {};
  var n = mt(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
  }
  return n;
}
function mt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ht() {
  return (
    (ht = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ht.apply(this, arguments)
  );
}
function gt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? gt(Object(n), !0).forEach(function (t) {
          q(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : gt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function _t(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function vt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Dt(r.key), r));
  }
}
function yt(e, t, n) {
  return (
    t && vt(e.prototype, t),
    n && vt(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function bt(e, t, n) {
  return (
    (t = wt(t)),
    xt(e, Ct() ? Reflect.construct(t, n || [], wt(e).constructor) : t.apply(e, n))
  );
}
function xt(e, t) {
  if (t && (ft(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return St(e);
}
function St(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function Ct() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Ct = function () {
    return !!e;
  })();
}
function wt(e) {
  return (
    (wt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    wt(e)
  );
}
function Tt(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Et(e, t));
}
function Et(e, t) {
  return (
    (Et = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Et(e, t)
  );
}
function q(e, t, n) {
  return (
    (t = Dt(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Dt(e) {
  var t = Ot(e, `string`);
  return ft(t) == `symbol` ? t : t + ``;
}
function Ot(e, t) {
  if (ft(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (ft(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var kt = (function (e) {
  function t() {
    var e;
    _t(this, t);
    var n = [...arguments];
    return (
      (e = bt(this, t, [].concat(n))),
      q(e, `state`, { isAnimationFinished: !0 }),
      q(e, `id`, b(`recharts-area-`)),
      q(e, `handleAnimationEnd`, function () {
        var t = e.props.onAnimationEnd;
        (e.setState({ isAnimationFinished: !0 }), (0, B.default)(t) && t());
      }),
      q(e, `handleAnimationStart`, function () {
        var t = e.props.onAnimationStart;
        (e.setState({ isAnimationFinished: !1 }), (0, B.default)(t) && t());
      }),
      e
    );
  }
  return (
    Tt(t, e),
    yt(
      t,
      [
        {
          key: `renderDots`,
          value: function (e, n, r) {
            var i = this.props.isAnimationActive,
              a = this.state.isAnimationFinished;
            if (i && !a) return null;
            var o = this.props,
              s = o.dot,
              c = o.points,
              l = o.dataKey,
              u = L(this.props, !1),
              d = L(s, !0),
              f = c.map(function (e, n) {
                var r = K(
                  K(K({ key: `dot-${n}`, r: 3 }, u), d),
                  {},
                  {
                    index: n,
                    cx: e.x,
                    cy: e.y,
                    dataKey: l,
                    value: e.value,
                    payload: e.payload,
                    points: c,
                  },
                );
                return t.renderDotItem(s, r);
              }),
              p = { clipPath: e ? `url(#clipPath-${n ? `` : `dots-`}${r})` : null };
            return z.createElement(F, ht({ className: `recharts-area-dots` }, p), f);
          },
        },
        {
          key: `renderHorizontalRect`,
          value: function (e) {
            var t = this.props,
              n = t.baseLine,
              r = t.points,
              i = t.strokeWidth,
              a = r[0].x,
              o = r[r.length - 1].x,
              s = e * Math.abs(a - o),
              c = (0, st.default)(
                r.map(function (e) {
                  return e.y || 0;
                }),
              );
            return (
              j(n) && typeof n == `number`
                ? (c = Math.max(n, c))
                : n &&
                  Array.isArray(n) &&
                  n.length &&
                  (c = Math.max(
                    (0, st.default)(
                      n.map(function (e) {
                        return e.y || 0;
                      }),
                    ),
                    c,
                  )),
              j(c)
                ? z.createElement(`rect`, {
                    x: a < o ? a : a - s,
                    y: 0,
                    width: s,
                    height: Math.floor(c + (i ? parseInt(`${i}`, 10) : 1)),
                  })
                : null
            );
          },
        },
        {
          key: `renderVerticalRect`,
          value: function (e) {
            var t = this.props,
              n = t.baseLine,
              r = t.points,
              i = t.strokeWidth,
              a = r[0].y,
              o = r[r.length - 1].y,
              s = e * Math.abs(a - o),
              c = (0, st.default)(
                r.map(function (e) {
                  return e.x || 0;
                }),
              );
            return (
              j(n) && typeof n == `number`
                ? (c = Math.max(n, c))
                : n &&
                  Array.isArray(n) &&
                  n.length &&
                  (c = Math.max(
                    (0, st.default)(
                      n.map(function (e) {
                        return e.x || 0;
                      }),
                    ),
                    c,
                  )),
              j(c)
                ? z.createElement(`rect`, {
                    x: 0,
                    y: a < o ? a : a - s,
                    width: c + (i ? parseInt(`${i}`, 10) : 1),
                    height: Math.floor(s),
                  })
                : null
            );
          },
        },
        {
          key: `renderClipRect`,
          value: function (e) {
            return this.props.layout === `vertical`
              ? this.renderVerticalRect(e)
              : this.renderHorizontalRect(e);
          },
        },
        {
          key: `renderAreaStatically`,
          value: function (e, t, n, r) {
            var a = this.props,
              o = a.layout,
              s = a.type,
              c = a.stroke,
              l = a.connectNulls,
              u = a.isRange;
            a.ref;
            var d = pt(a, lt);
            return z.createElement(
              F,
              { clipPath: n ? `url(#clipPath-${r})` : null },
              z.createElement(
                i,
                ht({}, L(d, !0), {
                  points: e,
                  connectNulls: l,
                  type: s,
                  baseLine: t,
                  layout: o,
                  stroke: `none`,
                  className: `recharts-area-area`,
                }),
              ),
              c !== `none` &&
                z.createElement(
                  i,
                  ht({}, L(this.props, !1), {
                    className: `recharts-area-curve`,
                    layout: o,
                    type: s,
                    connectNulls: l,
                    fill: `none`,
                    points: e,
                  }),
                ),
              c !== `none` &&
                u &&
                z.createElement(
                  i,
                  ht({}, L(this.props, !1), {
                    className: `recharts-area-curve`,
                    layout: o,
                    type: s,
                    connectNulls: l,
                    fill: `none`,
                    points: t,
                  }),
                ),
            );
          },
        },
        {
          key: `renderAreaWithAnimation`,
          value: function (e, t) {
            var n = this,
              r = this.props,
              i = r.points,
              a = r.baseLine,
              s = r.isAnimationActive,
              c = r.animationBegin,
              l = r.animationDuration,
              u = r.animationEasing,
              d = r.animationId,
              f = this.state,
              p = f.prevPoints,
              m = f.prevBaseLine;
            return z.createElement(
              A,
              {
                begin: c,
                duration: l,
                isActive: s,
                easing: u,
                from: { t: 0 },
                to: { t: 1 },
                key: `area-${d}`,
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (r) {
                var s = r.t;
                if (p) {
                  var c = p.length / i.length,
                    l = i.map(function (e, t) {
                      var n = Math.floor(t * c);
                      if (p[n]) {
                        var r = p[n],
                          i = o(r.x, e.x),
                          a = o(r.y, e.y);
                        return K(K({}, e), {}, { x: i(s), y: a(s) });
                      }
                      return e;
                    }),
                    u =
                      j(a) && typeof a == `number`
                        ? o(m, a)(s)
                        : (0, V.default)(a) || (0, ct.default)(a)
                          ? o(m, 0)(s)
                          : a.map(function (e, t) {
                              var n = Math.floor(t * c);
                              if (m[n]) {
                                var r = m[n],
                                  i = o(r.x, e.x),
                                  a = o(r.y, e.y);
                                return K(K({}, e), {}, { x: i(s), y: a(s) });
                              }
                              return e;
                            });
                  return n.renderAreaStatically(l, u, e, t);
                }
                return z.createElement(
                  F,
                  null,
                  z.createElement(
                    `defs`,
                    null,
                    z.createElement(
                      `clipPath`,
                      { id: `animationClipPath-${t}` },
                      n.renderClipRect(s),
                    ),
                  ),
                  z.createElement(
                    F,
                    { clipPath: `url(#animationClipPath-${t})` },
                    n.renderAreaStatically(i, a, e, t),
                  ),
                );
              },
            );
          },
        },
        {
          key: `renderArea`,
          value: function (e, t) {
            var n = this.props,
              r = n.points,
              i = n.baseLine,
              a = n.isAnimationActive,
              o = this.state,
              s = o.prevPoints,
              c = o.prevBaseLine,
              l = o.totalLength;
            return a &&
              r &&
              r.length &&
              ((!s && l > 0) || !(0, Fe.default)(s, r) || !(0, Fe.default)(c, i))
              ? this.renderAreaWithAnimation(e, t)
              : this.renderAreaStatically(r, i, e, t);
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.hide,
              n = e.dot,
              r = e.points,
              i = e.className,
              a = e.top,
              o = e.left,
              s = e.xAxis,
              c = e.yAxis,
              l = e.width,
              u = e.height,
              f = e.isAnimationActive,
              p = e.id;
            if (t || !r || !r.length) return null;
            var m = this.state.isAnimationFinished,
              h = r.length === 1,
              g = T(`recharts-area`, i),
              _ = s && s.allowDataOverflow,
              v = c && c.allowDataOverflow,
              y = _ || v,
              b = (0, V.default)(p) ? this.id : p,
              x = L(n, !1) ?? { r: 3, strokeWidth: 2 },
              S = x.r,
              C = S === void 0 ? 3 : S,
              w = x.strokeWidth,
              ee = w === void 0 ? 2 : w,
              E = (d(n) ? n : {}).clipDot,
              te = E === void 0 ? !0 : E,
              D = C * 2 + ee;
            return z.createElement(
              F,
              { className: g },
              _ || v
                ? z.createElement(
                    `defs`,
                    null,
                    z.createElement(
                      `clipPath`,
                      { id: `clipPath-${b}` },
                      z.createElement(`rect`, {
                        x: _ ? o : o - l / 2,
                        y: v ? a : a - u / 2,
                        width: _ ? l : l * 2,
                        height: v ? u : u * 2,
                      }),
                    ),
                    !te &&
                      z.createElement(
                        `clipPath`,
                        { id: `clipPath-dots-${b}` },
                        z.createElement(`rect`, {
                          x: o - D / 2,
                          y: a - D / 2,
                          width: l + D,
                          height: u + D,
                        }),
                      ),
                  )
                : null,
              h ? null : this.renderArea(y, b),
              (n || h) && this.renderDots(y, te, b),
              (!f || m) && pe.renderCallByParent(this.props, r),
            );
          },
        },
      ],
      [
        {
          key: `getDerivedStateFromProps`,
          value: function (e, t) {
            return e.animationId === t.prevAnimationId
              ? e.points !== t.curPoints || e.baseLine !== t.curBaseLine
                ? { curPoints: e.points, curBaseLine: e.baseLine }
                : null
              : {
                  prevAnimationId: e.animationId,
                  curPoints: e.points,
                  curBaseLine: e.baseLine,
                  prevPoints: t.curPoints,
                  prevBaseLine: t.curBaseLine,
                };
          },
        },
      ],
    )
  );
})(z.PureComponent);
((dt = kt),
  q(kt, `displayName`, `Area`),
  q(kt, `defaultProps`, {
    stroke: `#3182bd`,
    fill: `#3182bd`,
    fillOpacity: 0.6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: `line`,
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !ae.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  }),
  q(kt, `getBaseValue`, function (e, t, n, r) {
    var i = e.layout,
      a = e.baseValue,
      o = t.props.baseValue ?? a;
    if (j(o) && typeof o == `number`) return o;
    var s = i === `horizontal` ? r : n,
      c = s.scale.domain();
    if (s.type === `number`) {
      var l = Math.max(c[0], c[1]),
        u = Math.min(c[0], c[1]);
      return o === `dataMin` ? u : o === `dataMax` || l < 0 ? l : Math.max(Math.min(c[0], c[1]), 0);
    }
    return o === `dataMin` ? c[0] : o === `dataMax` ? c[1] : c[0];
  }),
  q(kt, `getComposedData`, function (e) {
    var t = e.props,
      n = e.item,
      r = e.xAxis,
      i = e.yAxis,
      a = e.xAxisTicks,
      o = e.yAxisTicks,
      s = e.bandSize,
      c = e.dataKey,
      l = e.stackedData,
      u = e.dataStartIndex,
      d = e.displayedData,
      f = e.offset,
      p = t.layout,
      m = l && l.length,
      h = dt.getBaseValue(t, n, r, i),
      g = p === `horizontal`,
      _ = !1,
      v = d.map(function (e, t) {
        var n;
        m ? (n = l[u + t]) : ((n = k(e, c)), Array.isArray(n) ? (_ = !0) : (n = [h, n]));
        var d = n[1] == null || (m && k(e, c) == null);
        return g
          ? {
              x: P({ axis: r, ticks: a, bandSize: s, entry: e, index: t }),
              y: d ? null : i.scale(n[1]),
              value: n,
              payload: e,
            }
          : {
              x: d ? null : r.scale(n[1]),
              y: P({ axis: i, ticks: o, bandSize: s, entry: e, index: t }),
              value: n,
              payload: e,
            };
      });
    return K(
      {
        points: v,
        baseLine:
          m || _
            ? v.map(function (e) {
                var t = Array.isArray(e.value) ? e.value[0] : null;
                return g
                  ? { x: e.x, y: t != null && e.y != null ? i.scale(t) : null }
                  : { x: t == null ? null : r.scale(t), y: e.y };
              })
            : g
              ? i.scale(h)
              : r.scale(h),
        layout: p,
        isRange: _,
      },
      f,
    );
  }),
  q(kt, `renderDotItem`, function (e, t) {
    var n;
    if (z.isValidElement(e)) n = z.cloneElement(e, t);
    else if ((0, B.default)(e)) n = e(t);
    else {
      var r = T(`recharts-area-dot`, typeof e == `boolean` ? `` : e.className),
        i = t.key,
        a = pt(t, ut);
      n = z.createElement(ue, ht({}, a, { key: i, className: r }));
    }
    return n;
  }));
function At(e) {
  "@babel/helpers - typeof";
  return (
    (At =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    At(e)
  );
}
function jt(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function Mt(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, Ht(r.key), r));
  }
}
function Nt(e, t, n) {
  return (
    t && Mt(e.prototype, t),
    n && Mt(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Pt(e, t, n) {
  return (
    (t = Rt(t)),
    Ft(e, Lt() ? Reflect.construct(t, n || [], Rt(e).constructor) : t.apply(e, n))
  );
}
function Ft(e, t) {
  if (t && (At(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return It(e);
}
function It(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function Lt() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (Lt = function () {
    return !!e;
  })();
}
function Rt(e) {
  return (
    (Rt = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    Rt(e)
  );
}
function zt(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Bt(e, t));
}
function Bt(e, t) {
  return (
    (Bt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    Bt(e, t)
  );
}
function Vt(e, t, n) {
  return (
    (t = Ht(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ht(e) {
  var t = Ut(e, `string`);
  return At(t) == `symbol` ? t : t + ``;
}
function Ut(e, t) {
  if (At(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (At(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Wt = (function (e) {
  function t() {
    return (jt(this, t), Pt(this, t, arguments));
  }
  return (
    zt(t, e),
    Nt(t, [
      {
        key: `render`,
        value: function () {
          return null;
        },
      },
    ])
  );
})(z.Component);
(Vt(Wt, `displayName`, `ZAxis`),
  Vt(Wt, `defaultProps`, { zAxisId: 0, range: [64, 64], scale: `auto`, type: `number` }));
var Gt = [`option`, `isActive`];
function Kt() {
  return (
    (Kt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Kt.apply(this, arguments)
  );
}
function qt(e, t) {
  if (e == null) return {};
  var n = Jt(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((r = a[i]),
        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
  }
  return n;
}
function Jt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Yt(e) {
  var t = e.option,
    n = e.isActive,
    r = qt(e, Gt);
  return typeof t == `string`
    ? z.createElement(
        C,
        Kt(
          { option: z.createElement(l, Kt({ type: t }, r)), isActive: n, shapeType: `symbols` },
          r,
        ),
      )
    : z.createElement(C, Kt({ option: t, isActive: n, shapeType: `symbols` }, r));
}
function Xt(e) {
  "@babel/helpers - typeof";
  return (
    (Xt =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == `function` &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? `symbol`
              : typeof e;
          }),
    Xt(e)
  );
}
function Zt() {
  return (
    (Zt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zt.apply(this, arguments)
  );
}
function Qt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Qt(Object(n), !0).forEach(function (t) {
          Y(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Qt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function $t(e, t) {
  if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`);
}
function en(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, un(r.key), r));
  }
}
function tn(e, t, n) {
  return (
    t && en(e.prototype, t),
    n && en(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function nn(e, t, n) {
  return (
    (t = sn(t)),
    rn(e, on() ? Reflect.construct(t, n || [], sn(e).constructor) : t.apply(e, n))
  );
}
function rn(e, t) {
  if (t && (Xt(t) === `object` || typeof t == `function`)) return t;
  if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
  return an(e);
}
function an(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function on() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch {}
  return (on = function () {
    return !!e;
  })();
}
function sn(e) {
  return (
    (sn = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    sn(e)
  );
}
function cn(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Super expression must either be null or a function`);
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ln(e, t));
}
function ln(e, t) {
  return (
    (ln = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return ((e.__proto__ = t), e);
        }),
    ln(e, t)
  );
}
function Y(e, t, n) {
  return (
    (t = un(t)),
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function un(e) {
  var t = dn(e, `string`);
  return Xt(t) == `symbol` ? t : t + ``;
}
function dn(e, t) {
  if (Xt(e) != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (Xt(r) != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var fn = (function (e) {
  function t() {
    var e;
    $t(this, t);
    var n = [...arguments];
    return (
      (e = nn(this, t, [].concat(n))),
      Y(e, `state`, { isAnimationFinished: !1 }),
      Y(e, `handleAnimationEnd`, function () {
        e.setState({ isAnimationFinished: !0 });
      }),
      Y(e, `handleAnimationStart`, function () {
        e.setState({ isAnimationFinished: !1 });
      }),
      Y(e, `id`, b(`recharts-scatter-`)),
      e
    );
  }
  return (
    cn(t, e),
    tn(
      t,
      [
        {
          key: `renderSymbolsStatically`,
          value: function (e) {
            var t = this,
              n = this.props,
              r = n.shape,
              i = n.activeShape,
              a = n.activeIndex,
              o = L(this.props, !1);
            return e.map(function (e, n) {
              var s = a === n,
                c = s ? i : r,
                l = J(J({}, o), e);
              return z.createElement(
                F,
                Zt(
                  {
                    className: `recharts-scatter-symbol`,
                    key: `symbol-${e?.cx}-${e?.cy}-${e?.size}-${n}`,
                  },
                  u(t.props, e, n),
                  { role: `img` },
                ),
                z.createElement(Yt, Zt({ option: c, isActive: s, key: `symbol-${n}` }, l)),
              );
            });
          },
        },
        {
          key: `renderSymbolsWithAnimation`,
          value: function () {
            var e = this,
              t = this.props,
              n = t.points,
              r = t.isAnimationActive,
              i = t.animationBegin,
              a = t.animationDuration,
              s = t.animationEasing,
              c = t.animationId,
              l = this.state.prevPoints;
            return z.createElement(
              A,
              {
                begin: i,
                duration: a,
                isActive: r,
                easing: s,
                from: { t: 0 },
                to: { t: 1 },
                key: `pie-${c}`,
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (t) {
                var r = t.t,
                  i = n.map(function (e, t) {
                    var n = l && l[t];
                    if (n) {
                      var i = o(n.cx, e.cx),
                        a = o(n.cy, e.cy),
                        s = o(n.size, e.size);
                      return J(J({}, e), {}, { cx: i(r), cy: a(r), size: s(r) });
                    }
                    var c = o(0, e.size);
                    return J(J({}, e), {}, { size: c(r) });
                  });
                return z.createElement(F, null, e.renderSymbolsStatically(i));
              },
            );
          },
        },
        {
          key: `renderSymbols`,
          value: function () {
            var e = this.props,
              t = e.points,
              n = e.isAnimationActive,
              r = this.state.prevPoints;
            return n && t && t.length && (!r || !(0, Fe.default)(r, t))
              ? this.renderSymbolsWithAnimation()
              : this.renderSymbolsStatically(t);
          },
        },
        {
          key: `renderErrorBar`,
          value: function () {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var e = this.props,
              t = e.points,
              n = e.xAxis,
              r = e.yAxis,
              i = e.children,
              a = ee(i, le);
            return a
              ? a.map(function (e, i) {
                  var a = e.props,
                    o = a.direction,
                    s = a.dataKey;
                  return z.cloneElement(e, {
                    key: `${o}-${s}-${t[i]}`,
                    data: t,
                    xAxis: n,
                    yAxis: r,
                    layout: o === `x` ? `vertical` : `horizontal`,
                    dataPointFormatter: function (e, t) {
                      return {
                        x: e.cx,
                        y: e.cy,
                        value: o === `x` ? +e.node.x : +e.node.y,
                        errorVal: k(e, t),
                      };
                    },
                  });
                })
              : null;
          },
        },
        {
          key: `renderLine`,
          value: function () {
            var e = this.props,
              t = e.points,
              n = e.line,
              r = e.lineType,
              a = e.lineJointType,
              o = L(this.props, !1),
              s = L(n, !1),
              c,
              l;
            if (r === `joint`)
              c = t.map(function (e) {
                return { x: e.cx, y: e.cy };
              });
            else if (r === `fitting`) {
              var u = x(t),
                d = u.xmin,
                f = u.xmax,
                p = u.a,
                m = u.b,
                h = function (e) {
                  return p * e + m;
                };
              c = [
                { x: d, y: h(d) },
                { x: f, y: h(f) },
              ];
            }
            var g = J(J(J({}, o), {}, { fill: `none`, stroke: o && o.fill }, s), {}, { points: c });
            return (
              (l = z.isValidElement(n)
                ? z.cloneElement(n, g)
                : (0, B.default)(n)
                  ? n(g)
                  : z.createElement(i, Zt({}, g, { type: a }))),
              z.createElement(
                F,
                { className: `recharts-scatter-line`, key: `recharts-scatter-line` },
                l,
              )
            );
          },
        },
        {
          key: `render`,
          value: function () {
            var e = this.props,
              t = e.hide,
              n = e.points,
              r = e.line,
              i = e.className,
              a = e.xAxis,
              o = e.yAxis,
              s = e.left,
              c = e.top,
              l = e.width,
              u = e.height,
              d = e.id,
              f = e.isAnimationActive;
            if (t || !n || !n.length) return null;
            var p = this.state.isAnimationFinished,
              m = T(`recharts-scatter`, i),
              h = a && a.allowDataOverflow,
              g = o && o.allowDataOverflow,
              _ = h || g,
              v = (0, V.default)(d) ? this.id : d;
            return z.createElement(
              F,
              { className: m, clipPath: _ ? `url(#clipPath-${v})` : null },
              h || g
                ? z.createElement(
                    `defs`,
                    null,
                    z.createElement(
                      `clipPath`,
                      { id: `clipPath-${v}` },
                      z.createElement(`rect`, {
                        x: h ? s : s - l / 2,
                        y: g ? c : c - u / 2,
                        width: h ? l : l * 2,
                        height: g ? u : u * 2,
                      }),
                    ),
                  )
                : null,
              r && this.renderLine(),
              this.renderErrorBar(),
              z.createElement(F, { key: `recharts-scatter-symbols` }, this.renderSymbols()),
              (!f || p) && pe.renderCallByParent(this.props, n),
            );
          },
        },
      ],
      [
        {
          key: `getDerivedStateFromProps`,
          value: function (e, t) {
            return e.animationId === t.prevAnimationId
              ? e.points === t.curPoints
                ? null
                : { curPoints: e.points }
              : { prevAnimationId: e.animationId, curPoints: e.points, prevPoints: t.curPoints };
          },
        },
      ],
    )
  );
})(z.PureComponent);
(Y(fn, `displayName`, `Scatter`),
  Y(fn, `defaultProps`, {
    xAxisId: 0,
    yAxisId: 0,
    zAxisId: 0,
    legendType: `circle`,
    lineType: `joint`,
    lineJointType: `linear`,
    data: [],
    shape: `circle`,
    hide: !1,
    isAnimationActive: !ae.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: `linear`,
  }),
  Y(fn, `getComposedData`, function (e) {
    var t = e.xAxis,
      n = e.yAxis,
      r = e.zAxis,
      i = e.item,
      a = e.displayedData,
      o = e.xAxisTicks,
      s = e.yAxisTicks,
      c = e.offset,
      l = i.props.tooltipType,
      u = ee(i.props.children, ie),
      d = (0, V.default)(t.dataKey) ? i.props.dataKey : t.dataKey,
      f = (0, V.default)(n.dataKey) ? i.props.dataKey : n.dataKey,
      p = r && r.dataKey,
      m = r ? r.range : Wt.defaultProps.range,
      h = m && m[0],
      g = t.scale.bandwidth ? t.scale.bandwidth() : 0,
      _ = n.scale.bandwidth ? n.scale.bandwidth() : 0;
    return J(
      {
        points: a.map(function (e, a) {
          var c = k(e, d),
            m = k(e, f),
            v = (!(0, V.default)(p) && k(e, p)) || `-`,
            y = [
              {
                name: (0, V.default)(t.dataKey) ? i.props.name : t.name || t.dataKey,
                unit: t.unit || ``,
                value: c,
                payload: e,
                dataKey: d,
                type: l,
              },
              {
                name: (0, V.default)(n.dataKey) ? i.props.name : n.name || n.dataKey,
                unit: n.unit || ``,
                value: m,
                payload: e,
                dataKey: f,
                type: l,
              },
            ];
          v !== `-` &&
            y.push({
              name: r.name || r.dataKey,
              unit: r.unit || ``,
              value: v,
              payload: e,
              dataKey: p,
              type: l,
            });
          var b = P({ axis: t, ticks: o, bandSize: g, entry: e, index: a, dataKey: d }),
            x = P({ axis: n, ticks: s, bandSize: _, entry: e, index: a, dataKey: f }),
            S = v === `-` ? h : r.scale(v),
            C = Math.sqrt(Math.max(S, 0) / Math.PI);
          return J(
            J({}, e),
            {},
            {
              cx: b,
              cy: x,
              x: b - C,
              y: x - C,
              xAxis: t,
              yAxis: n,
              zAxis: r,
              width: 2 * C,
              height: 2 * C,
              size: S,
              node: { x: c, y: m, z: v },
              tooltipPayload: y,
              tooltipPosition: { x: b, y: x },
              payload: e,
            },
            u && u[a] && u[a].props,
          );
        }),
      },
      c,
    );
  }));
var pn = D({
    chartName: `ComposedChart`,
    GraphicalChild: [at, kt, re, fn],
    axisComponents: [
      { axisType: `xAxis`, AxisComp: v },
      { axisType: `yAxis`, AxisComp: m },
      { axisType: `zAxis`, AxisComp: Wt },
    ],
    formatAxisMap: ne,
  }),
  mn = h(`building-2`, [
    [`path`, { d: `M10 12h4`, key: `a56b0p` }],
    [`path`, { d: `M10 8h4`, key: `1sr2af` }],
    [`path`, { d: `M14 21v-3a2 2 0 0 0-4 0v3`, key: `1rgiei` }],
    [
      `path`,
      {
        d: `M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,
        key: `secmi2`,
      },
    ],
    [`path`, { d: `M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`, key: `16ra0t` }],
  ]),
  hn = h(`download`, [
    [`path`, { d: `M12 15V3`, key: `m9g1x1` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
    [`path`, { d: `m7 10 5 5 5-5`, key: `brsn70` }],
  ]),
  gn = h(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  _n = h(`trending-up`, [
    [`path`, { d: `M16 7h6v6`, key: `box55l` }],
    [`path`, { d: `m22 7-8.5 8.5-5-5L2 17`, key: `1t1m79` }],
  ]),
  X = t(),
  vn = {
    Ativo: `oklch(0.7 0.18 145)`,
    Churn: `oklch(0.6 0.22 25)`,
    Pausado: `oklch(0.78 0.15 80)`,
  },
  yn = {
    Platinum: `oklch(0.55 0.18 280)`,
    Gold: `oklch(0.78 0.15 80)`,
    Silver: `oklch(0.75 0.03 260)`,
  },
  bn = {
    Vencido: `oklch(0.55 0.22 25)`,
    "Até 30 dias": `oklch(0.7 0.2 45)`,
    "31 a 60 dias": `oklch(0.78 0.15 80)`,
    "61 a 90 dias": `oklch(0.75 0.14 140)`,
    "Mais de 90 dias": `oklch(0.65 0.15 200)`,
    Recorrente: `oklch(0.6 0.18 260)`,
  },
  xn = [
    `oklch(0.6 0.2 250)`,
    `oklch(0.65 0.18 180)`,
    `oklch(0.7 0.18 145)`,
    `oklch(0.78 0.15 80)`,
    `oklch(0.65 0.22 25)`,
    `oklch(0.6 0.22 310)`,
  ],
  Z = (e) =>
    e.toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL`, maximumFractionDigits: 0 }),
  Sn = (e) => e.toLocaleString(`pt-BR`, { style: `currency`, currency: `BRL` });
function Cn() {
  let { data: e } = c(ge),
    [t, n] = (0, z.useState)([]),
    [i, o] = (0, z.useState)([]),
    [s, l] = (0, z.useState)([]),
    [u, d] = (0, z.useState)([]),
    [p, h] = (0, z.useState)([]),
    [b, x] = (0, z.useState)([]),
    [S, C] = (0, z.useState)(null),
    [T, ee] = (0, z.useState)(`desc`),
    [D, ne] = (0, z.useState)(``),
    [ae, k] = (0, z.useState)(``),
    se = (0, z.useMemo)(() => {
      let t = (t) => Array.from(new Set(e.map((e) => String(e[t] ?? ``)).filter(Boolean))).sort();
      return {
        profit: t(`profit`),
        franquia: t(`franquia`),
        status: t(`status`),
        tipo: t(`tipoContrato`),
        faixa: t(`faixaVencimento`),
      };
    }, [e]),
    A = (0, z.useMemo)(() => {
      if (!ae) return null;
      let [e, t] = ae.split(`-`).map(Number);
      return !e || !t
        ? null
        : { start: Date.UTC(e, t - 1, 1, 0, 0, 0), end: Date.UTC(e, t, 0, 23, 59, 59) };
    }, [ae]),
    j = z.useCallback(
      (e) => {
        if (!A) return !0;
        if (!e.inicioContrato) return !1;
        let t = new Date(e.inicioContrato).getTime();
        if (isNaN(t) || t > A.end) return !1;
        if (!e.fimContrato) return !0;
        let n = new Date(e.fimContrato).getTime();
        return isNaN(n) ? !0 : n >= A.start;
      },
      [A],
    ),
    le = z.useCallback(
      (e) => {
        if (e.tipoContrato.toUpperCase() === `MENSAL` || !e.ativo) return !1;
        if (!A) return !0;
        if (!e.inicioContrato) return !1;
        let t = new Date(e.inicioContrato).getTime();
        return isNaN(t) ? !1 : t >= A.start && t <= A.end;
      },
      [A],
    ),
    N = (0, z.useMemo)(() => {
      let n = (e, t) => e.length === 0 || e.includes(t);
      return e.filter(
        (e) =>
          n(t, e.profit) &&
          n(i, e.franquia) &&
          n(s, e.status) &&
          n(u, e.plano) &&
          n(p, e.tipoContrato) &&
          n(b, e.faixaVencimento) &&
          j(e),
      );
    }, [e, t, i, s, u, p, b, j]),
    ue = (0, z.useMemo)(() => {
      let n = (e, t) => e.length === 0 || e.includes(t);
      return e.filter(
        (e) =>
          n(t, e.profit) &&
          n(i, e.franquia) &&
          n(s, e.status) &&
          n(u, e.plano) &&
          n(p, e.tipoContrato) &&
          n(b, e.faixaVencimento) &&
          le(e),
      );
    }, [e, t, i, s, u, p, b, le]),
    P = N.length,
    F = N.filter((e) => e.ativo).length,
    L = N.filter((e) => e.ativo && e.tipoContrato.toUpperCase() == `MENSAL`).length,
    he = N.filter((e) => e.tipoContrato.toUpperCase() == `MENSAL`).length,
    xe = N.filter((e) => e.tipoContrato.toUpperCase() != `MENSAL`).length,
    Ce = A
      ? e.filter(
          (e) =>
            e.churn &&
            e.dataChurn &&
            (() => {
              let t = new Date(e.dataChurn).getTime();
              return t >= A.start && t <= A.end;
            })(),
        ).length
      : e.filter((e) => e.churn).length,
    we = N.filter((e) => e.pausado).length,
    Ee = new Set(N.map((e) => e.franquia)).size,
    De = N.filter((e) => e.ativo && e.tipoContrato.toUpperCase() == `MENSAL`).reduce(
      (e, t) => e + (t.valorMensal ?? 0),
      0,
    ),
    ke = L > 0 ? De / L : 0,
    Ae = ue.length,
    je = ue.reduce((e, t) => e + (t.valorContrato ?? 0), 0),
    Me = Ae > 0 ? je / Ae : 0,
    B = (0, z.useMemo)(() => {
      if (A) {
        let e = N.filter((e) => {
            if (!e.churn || !e.fimContrato) return !1;
            let t = new Date(e.fimContrato).getTime();
            return !isNaN(t) && t >= A.start && t <= A.end;
          }).length,
          t = N.filter((e) => {
            if (!e.inicioContrato) return !1;
            let t = new Date(e.inicioContrato).getTime();
            if (isNaN(t) || t >= A.start) return !1;
            if (!e.fimContrato) return !0;
            let n = new Date(e.fimContrato).getTime();
            return isNaN(n) || n >= A.start;
          }).length;
        return t > 0 ? (e / t) * 100 : 0;
      }
      return P > 0 ? (Ce / P) * 100 : 0;
    }, [N, A, Ce, P]),
    V = N.filter(
      (e) =>
        e.ativo && e.vencimentoDias !== null && e.vencimentoDias >= 0 && e.vencimentoDias <= 30,
    ).length,
    Fe = N.filter((e) => e.ativo && e.faixaVencimento === `Vencido`).length,
    Ie = (0, z.useMemo)(
      () =>
        [
          { name: `Ativo`, value: F },
          { name: `Churn`, value: Ce },
          { name: `Pausado`, value: we },
        ].filter((e) => e.value > 0),
      [F, Ce, we],
    ),
    Le = (0, z.useMemo)(() => {
      let e = new Map();
      return (
        N.forEach((t) => {
          let n = e.get(t.franquia) ?? { clientes: 0, mrr: 0 };
          ((n.clientes += 1), t.ativo && (n.mrr += t.valorMensal ?? 0), e.set(t.franquia, n));
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({ franquia: e, ...t }))
          .sort((e, t) => t.mrr - e.mrr)
          .slice(0, 10)
      );
    }, [N]),
    H = (0, z.useMemo)(() => {
      let e = new Map();
      return (
        N.forEach((t) => {
          let n = e.get(t.plano) ?? { clientes: 0, mrr: 0 };
          ((n.clientes += 1), t.ativo && (n.mrr += t.valorMensal ?? 0), e.set(t.plano, n));
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({ plano: e, ...t }))
          .sort((e, t) => t.clientes - e.clientes)
      );
    }, [N]),
    Re = (0, z.useMemo)(() => {
      let e = new Map();
      return (
        N.forEach((t) => {
          e.set(t.tipoContrato, (e.get(t.tipoContrato) ?? 0) + 1);
        }),
        Array.from(e.entries())
          .map(([e, t]) => ({ name: e, value: t }))
          .sort((e, t) => t.value - e.value)
      );
    }, [N]),
    ze = (0, z.useMemo)(() => {
      let e = [
          `Vencido`,
          `Até 30 dias`,
          `31 a 60 dias`,
          `61 a 90 dias`,
          `Mais de 90 dias`,
          `Recorrente`,
        ],
        t = new Map();
      return (
        N.filter((e) => e.ativo).forEach((e) => {
          t.set(e.faixaVencimento, (t.get(e.faixaVencimento) ?? 0) + 1);
        }),
        e.filter((e) => t.has(e)).map((e) => ({ name: e, value: t.get(e) ?? 0 }))
      );
    }, [N]),
    U = (0, z.useMemo)(() => {
      let e = (e, t) => new Date(Date.UTC(e, t + 1, 0, 23, 59, 59)),
        t = [`Jan`, `Fev`, `Mar`, `Abr`, `Mai`, `Jun`, `Jul`, `Ago`, `Set`, `Out`, `Nov`, `Dez`],
        n = N.map((e) => ({
          start: e.inicioContrato ? new Date(e.inicioContrato) : null,
          end: e.fimContrato ? new Date(e.fimContrato) : null,
          churn: e.churn,
          mrr: e.valorMensal ?? 0,
        })).filter((e) => e.start && !isNaN(e.start.getTime()));
      if (n.length === 0) return [];
      let r = new Date(Math.min(...n.map((e) => e.start.getTime()))),
        i = n.reduce((e, t) => {
          let n = t.end && !isNaN(t.end.getTime()) ? t.end.getTime() : 0;
          return n > e ? n : e;
        }, 0),
        a = new Date(Math.max(new Date().getTime(), i)),
        o = [],
        s = r.getUTCFullYear(),
        c = r.getUTCMonth();
      for (; s < a.getUTCFullYear() || (s === a.getUTCFullYear() && c <= a.getUTCMonth()); ) {
        let r = e(s, c),
          i = new Date(Date.UTC(s, c, 1)),
          a = 0,
          l = 0,
          u = 0,
          d = 0;
        (n.forEach((e) => {
          let t = e.start,
            n = e.end,
            o = t.getTime() <= r.getTime(),
            s = !n || isNaN(n.getTime()) || n.getTime() > r.getTime();
          (o && s && ((a += 1), (l += e.mrr)),
            t.getTime() >= i.getTime() && t.getTime() <= r.getTime() && (u += 1),
            e.churn &&
              n &&
              !isNaN(n.getTime()) &&
              n.getTime() >= i.getTime() &&
              n.getTime() <= r.getTime() &&
              (d += 1));
        }),
          o.push({
            key: `${s}-${String(c + 1).padStart(2, `0`)}`,
            label: `${t[c]}/${String(s).slice(2)}`,
            clientesTotal: a,
            mrrTotal: l,
            recebidos: u,
            perdidos: d,
          }),
          (c += 1),
          c > 11 && ((c = 0), (s += 1)));
      }
      return o.slice(-24);
    }, [N]),
    Be = (0, z.useMemo)(
      () =>
        N.filter(
          (e) =>
            e.ativo &&
            e.vencimentoDias !== null &&
            e.vencimentoDias <= 60 &&
            e.renovacaoAuto !== `Sim`,
        ).sort((e, t) => (e.vencimentoDias ?? 0) - (t.vencimentoDias ?? 0)),
      [N],
    ),
    W = (0, z.useMemo)(() => {
      let e = [...N];
      return (
        S === null
          ? e.sort((e, t) => {
              if (e.ativo !== t.ativo) return e.ativo ? -1 : 1;
              let n = e.vencimentoDias ?? 1 / 0,
                r = t.vencimentoDias ?? 1 / 0;
              return n === r ? (t.valorMensal ?? 0) - (e.valorMensal ?? 0) : n - r;
            })
          : e.sort((e, t) => {
              let n = e[S],
                r = t[S];
              return n == null || n === ``
                ? 1
                : r == null || r === ``
                  ? -1
                  : typeof n == `number` && typeof r == `number`
                    ? T === `asc`
                      ? n - r
                      : r - n
                    : T === `asc`
                      ? String(n).localeCompare(String(r))
                      : String(r).localeCompare(String(n));
            }),
        e
      );
    }, [N, S, T]),
    Ve = (e) => {
      e === S ? ee(T === `asc` ? `desc` : `asc`) : (C(e), ee(e === `valorMensal` ? `desc` : `asc`));
    },
    He = () => {
      (n([]), o([]), l([]), d([]), h([]), x([]), k(``), C(null));
    },
    Ue = (e, t) => (t.getFullYear() - e.getFullYear()) * 12 + (t.getMonth() - e.getMonth()),
    We = (0, z.useMemo)(() => {
      let e = A ? new Date(A.end) : new Date(),
        t = [];
      return (
        N.forEach((n) => {
          if (!n.inicioContrato) return;
          let r = new Date(n.inicioContrato);
          if (!isNaN(r.getTime()))
            if (n.churn) {
              if (!n.fimContrato) return;
              let e = new Date(n.fimContrato);
              if (isNaN(e.getTime())) return;
              t.push(Ue(r, e));
            } else n.ativo && t.push(Ue(r, e));
        }),
        t.length ? t.reduce((e, t) => e + t, 0) / t.length : 0
      );
    }, [N, A]);
  return (0, X.jsxs)(`div`, {
    className: `min-h-screen bg-muted/30`,
    children: [
      (0, X.jsx)(`header`, {
        className: `border-b bg-card`,
        children: (0, X.jsxs)(`div`, {
          className: `mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5`,
          children: [
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`h1`, {
                  className: `text-2xl font-semibold tracking-tight`,
                  children: `Carteira — Dashboard Executivo`,
                }),
                (0, X.jsx)(`p`, {
                  className: `text-sm text-muted-foreground`,
                  children: `Visão consolidada de MRR, contratos, planos e riscos da carteira.`,
                }),
              ],
            }),
            (0, X.jsxs)(`nav`, {
              className: `flex gap-2`,
              children: [
                (0, X.jsx)(r, {
                  to: `/`,
                  children: (0, X.jsx)(a, {
                    variant: `secondary`,
                    size: `sm`,
                    children: `Carteira Geral`,
                  }),
                }),
                (0, X.jsx)(r, {
                  to: `/carteira-profits`,
                  children: (0, X.jsx)(a, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Carteira por Profits`,
                  }),
                }),
                (0, X.jsx)(r, {
                  to: `/profits`,
                  children: (0, X.jsx)(a, {
                    variant: `ghost`,
                    size: `sm`,
                    children: `Indicadores Profits`,
                  }),
                }),
                (0, X.jsx)(r, {
                  to: `/performance`,
                  children: (0, X.jsx)(a, {
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
      (0, X.jsxs)(`main`, {
        className: `mx-auto max-w-[1400px] space-y-6 px-6 py-6`,
        children: [
          (0, X.jsx)(f, {
            children: (0, X.jsxs)(g, {
              className: `flex flex-wrap items-end gap-3 pt-6`,
              children: [
                (0, X.jsx)(En, { label: `Profit`, value: t, onChange: n, options: se.profit }),
                (0, X.jsx)(En, { label: `Franquia`, value: i, onChange: o, options: se.franquia }),
                (0, X.jsx)(En, { label: `Status`, value: s, onChange: l, options: se.status }),
                (0, X.jsx)(En, { label: `Tipo Contrato`, value: p, onChange: h, options: se.tipo }),
                (0, X.jsx)(En, { label: `Vencimento`, value: b, onChange: x, options: se.faixa }),
                (0, X.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, X.jsx)(`label`, {
                      className: `text-xs font-medium text-muted-foreground`,
                      children: `Mês/Ano de Referência`,
                    }),
                    (0, X.jsx)(Oe, {
                      type: `month`,
                      value: ae,
                      onChange: (e) => k(e.target.value),
                      className: `h-9 w-[180px]`,
                    }),
                  ],
                }),
                (0, X.jsx)(a, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: He,
                  className: `ml-auto`,
                  children: `Limpar filtros`,
                }),
              ],
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4 lg:grid-cols-4`,
            children: [
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(Se, { className: `h-4 w-4` }),
                label: `MRR`,
                value: Z(De),
                accent: `oklch(0.6 0.2 250)`,
                detail: `${L} clientes mensais`,
                tooltip: `Receita recorrente mensal dos clientes ativos.`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(Se, { className: `h-4 w-4` }),
                label: `Valor Contratado (TCV)`,
                value: Z(je),
                accent: `oklch(0.6 0.2 250)`,
                detail: `${Ae} contratos TCV`,
                tooltip: `Valor total contratado dos clientes ativos com contratos TCV.`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(_n, { className: `h-4 w-4` }),
                label: `Ticket Médio MRR`,
                value: Z(ke),
                accent: `oklch(0.7 0.18 145)`,
                detail: `Clientes mensais`,
                tooltip: `MRR dividido pela quantidade de clientes mensais ativos.`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(_n, { className: `h-4 w-4` }),
                label: `Ticket Médio TCV`,
                value: Z(Me),
                accent: `oklch(0.7 0.18 145)`,
                detail: `Contratos TCV`,
                tooltip: `Valor contratado dividido pela quantidade de contratos TCV ativos.`,
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4 lg:grid-cols-5 mt-4`,
            children: [
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(Te, { className: `h-4 w-4` }),
                label: `Total de Clientes`,
                value: P,
                detail: `${he} Mensais • ${xe} TCV`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(te, { className: `h-4 w-4` }),
                label: `Ativos`,
                value: F,
                accent: `oklch(0.7 0.18 145)`,
                detail: `${L} Mensais • ${Ae} TCV`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(ye, { className: `h-4 w-4` }),
                label: `Churn`,
                value: Ce,
                accent: `oklch(0.6 0.22 25)`,
                detail: `${B.toFixed(1)}% da carteira`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(be, { className: `h-4 w-4` }),
                label: `Pausados`,
                value: we,
                accent: `oklch(0.78 0.15 80)`,
                detail: `${((we / Math.max(P, 1)) * 100).toFixed(1)}% da carteira`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(mn, { className: `h-4 w-4` }),
                label: `Franquias`,
                value: Ee,
                detail: `${(P / Math.max(Ee, 1)).toFixed(1)} clientes/franquia`,
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-4 lg:grid-cols-2 mt-4`,
            children: [
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(_n, { className: `h-4 w-4` }),
                label: `Lifetime Médio`,
                value: `${We.toFixed(1)} meses`,
                accent: `oklch(0.65 0.18 180)`,
                detail: `Tempo médio de permanência`,
              }),
              (0, X.jsx)(Q, {
                icon: (0, X.jsx)(ye, { className: `h-4 w-4` }),
                label: `Churn Rate`,
                value: `${B.toFixed(1)}%`,
                accent: B > 5 ? `oklch(0.6 0.22 25)` : `oklch(0.7 0.18 145)`,
                detail: `Clientes perdidos no período`,
                tooltip: `Quantidade de clientes em churn dividida pelo total de clientes.`,
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `grid grid-cols-1 gap-4 md:grid-cols-2`,
            children: [
              (0, X.jsx)(Tn, {
                title: `Contratos vencidos (ativos)`,
                value: Fe,
                tone: Fe > 0 ? `danger` : `ok`,
                description: `Ativos com Faixa Vencimento = Vencido`,
              }),
              (0, X.jsx)(Tn, {
                title: `Vencem em até 30 dias`,
                value: V,
                tone: V > 0 ? `warn` : `ok`,
                description: `Clientes ativos com vencimento próximo`,
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              (0, X.jsxs)(f, {
                children: [
                  (0, X.jsx)(y, {
                    children: (0, X.jsx)(w, {
                      className: `text-base`,
                      children: `Status da Carteira`,
                    }),
                  }),
                  (0, X.jsx)(g, {
                    className: `h-[360px]`,
                    children: (0, X.jsx)(I, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, X.jsxs)(ve, {
                        children: [
                          (0, X.jsx)(_e, {
                            data: Ie,
                            dataKey: `value`,
                            nameKey: `name`,
                            outerRadius: 110,
                            label: !0,
                            children: Ie.map((e, t) =>
                              (0, X.jsx)(ie, { fill: vn[e.name] ?? xn[t % 6] }, t),
                            ),
                          }),
                          (0, X.jsx)(R, {}),
                          (0, X.jsx)(me, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, X.jsxs)(f, {
                children: [
                  (0, X.jsx)(y, {
                    children: (0, X.jsx)(w, {
                      className: `text-base`,
                      children: `Top 10 Franquias por MRR`,
                    }),
                  }),
                  (0, X.jsx)(g, {
                    className: `h-[400px]`,
                    children: (0, X.jsx)(I, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, X.jsxs)(E, {
                        data: Le,
                        layout: `vertical`,
                        margin: { left: 12, right: 72 },
                        children: [
                          (0, X.jsx)(_, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, X.jsx)(v, {
                            type: `number`,
                            fontSize: 11,
                            tickFormatter: (e) => Z(e),
                          }),
                          (0, X.jsx)(m, {
                            type: `category`,
                            dataKey: `franquia`,
                            width: 160,
                            fontSize: 11,
                          }),
                          (0, X.jsx)(R, { formatter: (e) => Sn(e) }),
                          (0, X.jsx)(re, {
                            dataKey: `mrr`,
                            fill: `oklch(0.65 0.18 180)`,
                            radius: [0, 4, 4, 0],
                            children: (0, X.jsx)(pe, {
                              dataKey: `mrr`,
                              position: `right`,
                              fontSize: 11,
                              formatter: (e) => Z(e),
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
          (0, X.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              (0, X.jsxs)(f, {
                children: [
                  (0, X.jsx)(y, {
                    children: (0, X.jsx)(w, {
                      className: `text-base`,
                      children: `Distribuição por Plano`,
                    }),
                  }),
                  (0, X.jsx)(g, {
                    className: `h-[400px]`,
                    children: (0, X.jsx)(I, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, X.jsxs)(E, {
                        data: H,
                        children: [
                          (0, X.jsx)(_, { strokeDasharray: `3 3` }),
                          (0, X.jsx)(v, { dataKey: `plano`, fontSize: 11 }),
                          (0, X.jsx)(m, { fontSize: 11, allowDecimals: !1 }),
                          (0, X.jsx)(R, {
                            formatter: (e, t) => (t === `mrr` ? Sn(e) : e.toLocaleString(`pt-BR`)),
                          }),
                          (0, X.jsx)(me, {}),
                          (0, X.jsxs)(re, {
                            dataKey: `clientes`,
                            name: `Clientes`,
                            radius: [4, 4, 0, 0],
                            children: [
                              H.map((e, t) =>
                                (0, X.jsx)(ie, { fill: yn[e.plano] ?? xn[t % 6] }, t),
                              ),
                              (0, X.jsx)(pe, {
                                dataKey: `clientes`,
                                position: `top`,
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
              (0, X.jsxs)(f, {
                children: [
                  (0, X.jsx)(y, {
                    children: (0, X.jsx)(w, {
                      className: `text-base`,
                      children: `Contratos por Tipo`,
                    }),
                  }),
                  (0, X.jsx)(g, {
                    className: `h-[320px]`,
                    children: (0, X.jsx)(I, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, X.jsxs)(E, {
                        data: Re,
                        layout: `vertical`,
                        margin: { left: 12, right: 48 },
                        children: [
                          (0, X.jsx)(_, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, X.jsx)(v, { type: `number`, fontSize: 11, allowDecimals: !1 }),
                          (0, X.jsx)(m, {
                            type: `category`,
                            dataKey: `name`,
                            width: 110,
                            fontSize: 11,
                          }),
                          (0, X.jsx)(R, {}),
                          (0, X.jsx)(re, {
                            dataKey: `value`,
                            fill: `oklch(0.7 0.18 145)`,
                            radius: [0, 4, 4, 0],
                            children: (0, X.jsx)(pe, {
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
          (0, X.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              (0, X.jsxs)(f, {
                children: [
                  (0, X.jsx)(y, {
                    children: (0, X.jsxs)(w, {
                      className: `text-base flex items-center gap-2`,
                      children: [
                        (0, X.jsx)(ye, { className: `h-4 w-4 text-amber-500` }),
                        `Vencimento de Contratos (ativos)`,
                      ],
                    }),
                  }),
                  (0, X.jsx)(g, {
                    className: `h-[320px]`,
                    children: (0, X.jsx)(I, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, X.jsxs)(E, {
                        data: ze,
                        layout: `vertical`,
                        margin: { left: 12, right: 48 },
                        children: [
                          (0, X.jsx)(_, { strokeDasharray: `3 3`, horizontal: !1 }),
                          (0, X.jsx)(v, { type: `number`, fontSize: 11, allowDecimals: !1 }),
                          (0, X.jsx)(m, {
                            type: `category`,
                            dataKey: `name`,
                            width: 130,
                            fontSize: 11,
                          }),
                          (0, X.jsx)(R, {}),
                          (0, X.jsxs)(re, {
                            dataKey: `value`,
                            radius: [0, 4, 4, 0],
                            children: [
                              ze.map((e, t) =>
                                (0, X.jsx)(ie, { fill: bn[e.name] ?? xn[t % 6] }, t),
                              ),
                              (0, X.jsx)(pe, { dataKey: `value`, position: `right`, fontSize: 11 }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, X.jsxs)(f, {
                children: [
                  (0, X.jsx)(y, {
                    children: (0, X.jsx)(w, {
                      className: `text-base`,
                      children: `Crescimento de Clientes por Mês`,
                    }),
                  }),
                  (0, X.jsx)(g, {
                    className: `h-[320px]`,
                    children: (0, X.jsx)(I, {
                      width: `100%`,
                      height: `100%`,
                      children: (0, X.jsxs)(ot, {
                        data: U,
                        margin: { left: 8, right: 16, top: 8 },
                        children: [
                          (0, X.jsx)(_, { strokeDasharray: `3 3` }),
                          (0, X.jsx)(v, { dataKey: `label`, fontSize: 10 }),
                          (0, X.jsx)(m, { fontSize: 11, allowDecimals: !1 }),
                          (0, X.jsx)(R, { formatter: (e) => e.toLocaleString(`pt-BR`) }),
                          (0, X.jsx)(at, {
                            type: `monotone`,
                            dataKey: `clientesTotal`,
                            name: `Clientes ativos`,
                            stroke: `oklch(0.6 0.2 250)`,
                            strokeWidth: 2,
                            dot: !1,
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, X.jsx)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: (0, X.jsxs)(f, {
              children: [
                (0, X.jsx)(y, {
                  children: (0, X.jsx)(w, {
                    className: `text-base`,
                    children: `Crescimento de MRR por Mês`,
                  }),
                }),
                (0, X.jsx)(g, {
                  className: `h-[320px]`,
                  children: (0, X.jsx)(I, {
                    width: `100%`,
                    height: `100%`,
                    children: (0, X.jsxs)(ot, {
                      data: U,
                      margin: { left: 8, right: 16, top: 8 },
                      children: [
                        (0, X.jsx)(_, { strokeDasharray: `3 3` }),
                        (0, X.jsx)(v, { dataKey: `label`, fontSize: 10 }),
                        (0, X.jsx)(m, { fontSize: 11, tickFormatter: (e) => Z(e), width: 80 }),
                        (0, X.jsx)(R, { formatter: (e) => Sn(e) }),
                        (0, X.jsx)(at, {
                          type: `monotone`,
                          dataKey: `mrrTotal`,
                          name: `MRR`,
                          stroke: `oklch(0.65 0.18 180)`,
                          strokeWidth: 2,
                          dot: !1,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          (0, X.jsxs)(f, {
            children: [
              (0, X.jsx)(y, {
                children: (0, X.jsx)(w, {
                  className: `text-base`,
                  children: `Clientes Recebidos vs. Perdidos por Mês`,
                }),
              }),
              (0, X.jsx)(g, {
                className: `h-[340px]`,
                children: (0, X.jsx)(I, {
                  width: `100%`,
                  height: `100%`,
                  children: (0, X.jsxs)(pn, {
                    data: U,
                    margin: { left: 8, right: 16, top: 8 },
                    children: [
                      (0, X.jsx)(_, { strokeDasharray: `3 3` }),
                      (0, X.jsx)(v, { dataKey: `label`, fontSize: 10 }),
                      (0, X.jsx)(m, { fontSize: 11, allowDecimals: !1 }),
                      (0, X.jsx)(R, { formatter: (e) => e.toLocaleString(`pt-BR`) }),
                      (0, X.jsx)(me, {}),
                      (0, X.jsx)(re, {
                        dataKey: `recebidos`,
                        name: `Recebidos`,
                        fill: `oklch(0.7 0.18 145)`,
                        radius: [4, 4, 0, 0],
                      }),
                      (0, X.jsx)(re, {
                        dataKey: `perdidos`,
                        name: `Perdidos`,
                        fill: `oklch(0.6 0.22 25)`,
                        radius: [4, 4, 0, 0],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          (0, X.jsxs)(f, {
            children: [
              (0, X.jsx)(y, {
                children: (0, X.jsxs)(w, {
                  className: `text-base flex items-center gap-2`,
                  children: [
                    (0, X.jsx)(ye, { className: `h-4 w-4 text-red-500` }),
                    `Contratos em risco (vencem em até 60 dias, sem renovação automática)`,
                  ],
                }),
              }),
              (0, X.jsx)(g, {
                children:
                  Be.length === 0
                    ? (0, X.jsx)(`div`, {
                        className: `p-6 text-sm text-muted-foreground text-center`,
                        children: `Nenhum contrato em risco identificado.`,
                      })
                    : (0, X.jsx)(Pe, {
                        className: `h-[520px] w-full`,
                        children: (0, X.jsxs)(de, {
                          children: [
                            (0, X.jsx)(fe, {
                              children: (0, X.jsxs)(oe, {
                                children: [
                                  (0, X.jsx)(M, { children: `Cliente` }),
                                  (0, X.jsx)(M, { children: `Franquia` }),
                                  (0, X.jsx)(M, { children: `Plano` }),
                                  (0, X.jsx)(M, { children: `Tipo` }),
                                  (0, X.jsx)(M, {
                                    className: `text-right`,
                                    children: `Valor Mensal`,
                                  }),
                                  (0, X.jsx)(M, { className: `text-right`, children: `Vence em` }),
                                  (0, X.jsx)(M, { children: `Faixa` }),
                                ],
                              }),
                            }),
                            (0, X.jsx)(ce, {
                              children: Be.map((e, t) => {
                                let n = e.vencimentoDias ?? 0,
                                  r =
                                    n < 0
                                      ? `text-red-600 dark:text-red-400`
                                      : n <= 30
                                        ? `text-amber-600 dark:text-amber-400`
                                        : `text-foreground`;
                                return (0, X.jsxs)(
                                  oe,
                                  {
                                    children: [
                                      (0, X.jsx)(O, {
                                        className: `font-medium`,
                                        children: e.cliente,
                                      }),
                                      (0, X.jsx)(O, { children: e.franquia }),
                                      (0, X.jsx)(O, { children: e.plano }),
                                      (0, X.jsx)(O, { children: e.tipoContrato }),
                                      (0, X.jsx)(O, {
                                        className: `text-right tabular-nums`,
                                        children: e.valorMensal === null ? `—` : Z(e.valorMensal),
                                      }),
                                      (0, X.jsx)(O, {
                                        className: `text-right tabular-nums font-medium ${r}`,
                                        children: n < 0 ? `${Math.abs(n)}d vencido` : `${n}d`,
                                      }),
                                      (0, X.jsx)(O, {
                                        children: (0, X.jsx)(Ne, {
                                          variant: `secondary`,
                                          style: {
                                            backgroundColor: `${bn[e.faixaVencimento] ?? `hsl(var(--muted))`}25`,
                                            color: bn[e.faixaVencimento] ?? `inherit`,
                                          },
                                          children: e.faixaVencimento,
                                        }),
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
          (0, X.jsx)(wn, {
            rows: W,
            clienteSearch: D,
            setClienteSearch: ne,
            sortKey: S,
            sortDir: T,
            toggleSort: Ve,
          }),
        ],
      }),
    ],
  });
}
function wn({
  rows: e,
  clienteSearch: t,
  setClienteSearch: n,
  sortKey: r,
  sortDir: i,
  toggleSort: o,
}) {
  let s = t.trim().toLowerCase(),
    c = s ? e.filter((e) => e.cliente.toLowerCase().includes(s)) : e;
  return (0, X.jsxs)(f, {
    children: [
      (0, X.jsx)(y, {
        children: (0, X.jsxs)(`div`, {
          className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
          children: [
            (0, X.jsxs)(w, {
              className: `text-base`,
              children: [
                `Detalhamento de Clientes (`,
                c.length,
                s && c.length !== e.length ? ` de ${e.length}` : ``,
                `)`,
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: `flex flex-col gap-2 sm:flex-row sm:items-center`,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `relative`,
                  children: [
                    (0, X.jsx)(gn, {
                      className: `pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground`,
                    }),
                    (0, X.jsx)(Oe, {
                      value: t,
                      onChange: (e) => n(e.target.value),
                      placeholder: `Buscar cliente...`,
                      className: `h-9 w-full pl-8 sm:w-64`,
                    }),
                  ],
                }),
                (0, X.jsxs)(a, {
                  variant: `outline`,
                  size: `sm`,
                  onClick: () => {
                    let e = [
                        `Cliente`,
                        `Franquia`,
                        `Profit`,
                        `Status`,
                        `Plano`,
                        `Tipo Contrato`,
                        `Valor Mensal`,
                        `Valor Contrato`,
                        `Início Contrato`,
                        `Fim Contrato`,
                        `Renovação Auto`,
                        `Vencimento (dias)`,
                        `Faixa Vencimento`,
                        `Alerta`,
                        `Ativo`,
                        `Churn`,
                        `Pausado`,
                      ],
                      t = (e) => {
                        let t = e == null ? `` : String(e);
                        return /[",;\n]/.test(t) ? `"${t.replace(/"/g, `""`)}"` : t;
                      },
                      n = [e.join(`;`)];
                    for (let e of c)
                      n.push(
                        [
                          e.cliente,
                          e.franquia,
                          e.profit,
                          e.status,
                          e.plano,
                          e.tipoContrato,
                          e.valorMensal ?? ``,
                          e.valorContrato ?? ``,
                          e.inicioContrato ? e.inicioContrato.slice(0, 10) : ``,
                          e.fimContrato ? e.fimContrato.slice(0, 10) : ``,
                          e.renovacaoAuto,
                          e.vencimentoDias ?? ``,
                          e.faixaVencimento,
                          e.alerta,
                          e.ativo ? `Sim` : `Não`,
                          e.churn ? `Sim` : `Não`,
                          e.pausado ? `Sim` : `Não`,
                        ]
                          .map(t)
                          .join(`;`),
                      );
                    let r = new Blob(
                        [
                          `﻿` +
                            n.join(`
`),
                        ],
                        { type: `text/csv;charset=utf-8;` },
                      ),
                      i = URL.createObjectURL(r),
                      a = document.createElement(`a`);
                    ((a.href = i),
                      (a.download = `detalhamento-clientes-${new Date().toISOString().slice(0, 10)}.csv`),
                      document.body.appendChild(a),
                      a.click(),
                      document.body.removeChild(a),
                      URL.revokeObjectURL(i));
                  },
                  className: `gap-2`,
                  children: [(0, X.jsx)(hn, { className: `h-4 w-4` }), ` CSV`],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, X.jsx)(g, {
        children: (0, X.jsx)(Pe, {
          className: `h-[520px] w-full`,
          children: (0, X.jsxs)(de, {
            children: [
              (0, X.jsx)(fe, {
                children: (0, X.jsxs)(oe, {
                  children: [
                    (0, X.jsx)($, {
                      label: `Cliente`,
                      k: `cliente`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                    (0, X.jsx)($, {
                      label: `Franquia`,
                      k: `franquia`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                    (0, X.jsx)($, {
                      label: `Profit`,
                      k: `profit`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                    (0, X.jsx)($, {
                      label: `Status`,
                      k: `status`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                    (0, X.jsx)($, {
                      label: `Plano`,
                      k: `plano`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                    (0, X.jsx)($, {
                      label: `Tipo`,
                      k: `tipoContrato`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                    (0, X.jsx)($, {
                      label: `Valor Mensal`,
                      k: `valorMensal`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                      align: `right`,
                    }),
                    (0, X.jsx)($, {
                      label: `Vence em`,
                      k: `vencimentoDias`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                      align: `right`,
                    }),
                    (0, X.jsx)($, {
                      label: `Faixa`,
                      k: `faixaVencimento`,
                      sortKey: r,
                      sortDir: i,
                      onClick: o,
                    }),
                  ],
                }),
              }),
              (0, X.jsx)(ce, {
                children: c.map((e, t) => {
                  let n = vn[e.status] ?? `hsl(var(--muted-foreground))`;
                  return (0, X.jsxs)(
                    oe,
                    {
                      children: [
                        (0, X.jsx)(O, { className: `font-medium`, children: e.cliente }),
                        (0, X.jsx)(O, { children: e.franquia }),
                        (0, X.jsx)(O, { children: e.profit }),
                        (0, X.jsx)(O, {
                          children: (0, X.jsx)(Ne, {
                            variant: `secondary`,
                            style: { backgroundColor: `${n}25`, color: n },
                            children: e.status,
                          }),
                        }),
                        (0, X.jsx)(O, { children: e.plano }),
                        (0, X.jsx)(O, { children: e.tipoContrato }),
                        (0, X.jsx)(O, {
                          className: `text-right tabular-nums`,
                          children: e.valorMensal === null ? `—` : Z(e.valorMensal),
                        }),
                        (0, X.jsx)(O, {
                          className: `text-right tabular-nums text-muted-foreground`,
                          children: e.vencimentoDias === null ? `—` : `${e.vencimentoDias}d`,
                        }),
                        (0, X.jsx)(O, {
                          className: `text-muted-foreground`,
                          children: e.faixaVencimento,
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
  });
}
function Q({ label: e, value: t, accent: n, icon: r, tooltip: i, detail: a }) {
  return (0, X.jsx)(f, {
    className: `hover:shadow-lg transition-all duration-200`,
    style: n ? { borderLeft: `4px solid ${n}` } : void 0,
    children: (0, X.jsxs)(g, {
      className: `pt-5`,
      children: [
        (0, X.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, X.jsx)(`div`, {
              className: `text-2xl font-bold tracking-tight`,
              style: n ? { color: n } : void 0,
              children: t,
            }),
            r && (0, X.jsx)(`div`, { className: `text-muted-foreground`, children: r }),
          ],
        }),
        (0, X.jsx)(`span`, {
          className: `font-semibold text-xs text-gray-500`,
          children: a ?? `.`,
        }),
        (0, X.jsx)(`div`, {
          className: `mt-2 text-xs uppercase tracking-wide text-muted-foreground`,
          children: (0, X.jsxs)(`span`, {
            className: `flex items-center justify-between`,
            children: [
              e,
              i &&
                (0, X.jsx)(je, {
                  children: (0, X.jsxs)(Me, {
                    children: [
                      (0, X.jsx)(ke, {
                        asChild: !0,
                        children: (0, X.jsx)(`span`, {
                          className: `cursor-pointer`,
                          children: (0, X.jsx)(De, { className: `w-4` }),
                        }),
                      }),
                      (0, X.jsx)(Ae, { children: (0, X.jsx)(`p`, { children: i }) }),
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
function Tn({ title: e, value: t, description: n, tone: r }) {
  return (0, X.jsx)(f, {
    children: (0, X.jsx)(g, {
      className: `pt-5`,
      children: (0, X.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsx)(`div`, { className: `text-sm font-medium`, children: e }),
              (0, X.jsx)(`div`, { className: `text-xs text-muted-foreground`, children: n }),
            ],
          }),
          (0, X.jsx)(`div`, {
            className: `text-3xl font-bold tabular-nums`,
            style: {
              color:
                r === `danger`
                  ? `oklch(0.6 0.22 25)`
                  : r === `warn`
                    ? `oklch(0.78 0.15 80)`
                    : `oklch(0.7 0.18 145)`,
            },
            children: t,
          }),
        ],
      }),
    }),
  });
}
function En({ label: e, value: t, onChange: n, options: r }) {
  let i = (e) => n(t.includes(e) ? t.filter((t) => t !== e) : [...t, e]),
    o = t.length === 0 ? `Todos` : t.length === 1 ? t[0] : `${t.length} selecionados`;
  return (0, X.jsxs)(`div`, {
    className: `flex min-w-[180px] flex-col gap-1`,
    children: [
      (0, X.jsx)(`span`, { className: `text-xs font-medium text-muted-foreground`, children: e }),
      (0, X.jsxs)(Ee, {
        children: [
          (0, X.jsx)(xe, {
            asChild: !0,
            children: (0, X.jsxs)(a, {
              variant: `outline`,
              size: `sm`,
              className: `h-9 w-full justify-between font-normal`,
              children: [
                (0, X.jsx)(`span`, { className: `truncate`, children: o }),
                (0, X.jsx)(s, { className: `h-4 w-4 opacity-60` }),
              ],
            }),
          }),
          (0, X.jsxs)(Ce, {
            align: `start`,
            className: `w-64 p-0`,
            children: [
              (0, X.jsxs)(`div`, {
                className: `flex items-center justify-between border-b px-3 py-2 text-xs`,
                children: [
                  (0, X.jsx)(`span`, { className: `font-medium`, children: e }),
                  (0, X.jsx)(`button`, {
                    type: `button`,
                    className: `text-muted-foreground hover:text-foreground`,
                    onClick: () => n([]),
                    children: `Limpar`,
                  }),
                ],
              }),
              (0, X.jsx)(Pe, {
                className: `h-64`,
                children: (0, X.jsx)(`div`, {
                  className: `p-1`,
                  children: r.map((e) => {
                    let n = t.includes(e);
                    return (0, X.jsxs)(
                      `button`,
                      {
                        type: `button`,
                        onClick: () => i(e),
                        className: `flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent`,
                        children: [
                          (0, X.jsx)(we, { checked: n, className: `pointer-events-none` }),
                          (0, X.jsx)(`span`, {
                            className: `flex-1 truncate text-left`,
                            children: e,
                          }),
                          n && (0, X.jsx)(te, { className: `h-3.5 w-3.5 text-primary` }),
                        ],
                      },
                      e,
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
function $({ label: e, k: t, sortKey: n, sortDir: r, onClick: i, align: a }) {
  let o = n === t;
  return (0, X.jsx)(M, {
    className: a === `right` ? `text-right` : ``,
    children: (0, X.jsxs)(`button`, {
      type: `button`,
      onClick: () => i(t),
      className: `inline-flex items-center gap-1 hover:text-foreground ${o ? `text-foreground` : ``}`,
      children: [
        e,
        (0, X.jsx)(be, { className: `h-3 w-3 opacity-60` }),
        o && (0, X.jsx)(`span`, { className: `text-[10px]`, children: r === `asc` ? `↑` : `↓` }),
      ],
    }),
  });
}
export { Cn as component };
