import { i as e, t } from "./jsx-runtime-DUAcabCT.js";
import { t as n } from "./react-DbyrFoBd.js";
import {
  D as r,
  E as i,
  O as a,
  P as o,
  S as s,
  j as c,
  k as l,
  p as u,
  z as d,
} from "./dist-DAKu88rv.js";
var f = e(n(), 1),
  p = t(),
  m = c(
    `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`,
    {
      variants: {
        variant: {
          default: `border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80`,
          secondary: `border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80`,
          destructive: `border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80`,
          outline: `text-foreground`,
        },
      },
      defaultVariants: { variant: `default` },
    },
  );
function h({ className: e, variant: t, ...n }) {
  return (0, p.jsx)(`div`, { className: d(m({ variant: t }), e), ...n });
}
var g = f.createContext(void 0);
function _(e) {
  let t = f.useContext(g);
  return e || t || `ltr`;
}
function v(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function y(e, t) {
  return f.useReducer((e, n) => t[e][n] ?? e, e);
}
var b = `ScrollArea`,
  [x, S] = a(b),
  [C, w] = x(b),
  T = f.forwardRef((e, t) => {
    let { __scopeScrollArea: n, type: i = `hover`, dir: a, scrollHideDelay: s = 600, ...c } = e,
      [l, u] = f.useState(null),
      [d, m] = f.useState(null),
      [h, g] = f.useState(null),
      [v, y] = f.useState(null),
      [b, x] = f.useState(null),
      [S, w] = f.useState(0),
      [T, E] = f.useState(0),
      [D, O] = f.useState(!1),
      [k, A] = f.useState(!1),
      j = o(t, (e) => u(e)),
      M = _(a);
    return (0, p.jsx)(C, {
      scope: n,
      type: i,
      dir: M,
      scrollHideDelay: s,
      scrollArea: l,
      viewport: d,
      onViewportChange: m,
      content: h,
      onContentChange: g,
      scrollbarX: v,
      onScrollbarXChange: y,
      scrollbarXEnabled: D,
      onScrollbarXEnabledChange: O,
      scrollbarY: b,
      onScrollbarYChange: x,
      scrollbarYEnabled: k,
      onScrollbarYEnabledChange: A,
      onCornerWidthChange: w,
      onCornerHeightChange: E,
      children: (0, p.jsx)(r.div, {
        dir: M,
        ...c,
        ref: j,
        style: {
          position: `relative`,
          "--radix-scroll-area-corner-width": S + `px`,
          "--radix-scroll-area-corner-height": T + `px`,
          ...e.style,
        },
      }),
    });
  });
T.displayName = b;
var E = `ScrollAreaViewport`,
  D = f.forwardRef((e, t) => {
    let { __scopeScrollArea: n, children: i, nonce: a, ...s } = e,
      c = w(E, n),
      l = o(t, f.useRef(null), c.onViewportChange);
    return (0, p.jsxs)(p.Fragment, {
      children: [
        (0, p.jsx)(O, { nonce: a }),
        (0, p.jsx)(r.div, {
          "data-radix-scroll-area-viewport": ``,
          ...s,
          ref: l,
          style: {
            overflowX: c.scrollbarXEnabled ? `scroll` : `hidden`,
            overflowY: c.scrollbarYEnabled ? `scroll` : `hidden`,
            ...e.style,
          },
          children: (0, p.jsx)(`div`, {
            ref: c.onContentChange,
            style: { minWidth: `100%`, display: `table` },
            children: i,
          }),
        }),
      ],
    });
  });
D.displayName = E;
var O = f.memo(
    ({ nonce: e }) =>
      (0, p.jsx)(`style`, {
        dangerouslySetInnerHTML: {
          __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`,
        },
        nonce: e,
      }),
    (e, t) => e.nonce === t.nonce,
  ),
  k = `ScrollAreaScrollbar`,
  A = f.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = w(k, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: o } = i,
      s = e.orientation === `horizontal`;
    return (
      f.useEffect(
        () => (
          s ? a(!0) : o(!0),
          () => {
            s ? a(!1) : o(!1);
          }
        ),
        [s, a, o],
      ),
      i.type === `hover`
        ? (0, p.jsx)(j, { ...r, ref: t, forceMount: n })
        : i.type === `scroll`
          ? (0, p.jsx)(M, { ...r, ref: t, forceMount: n })
          : i.type === `auto`
            ? (0, p.jsx)(N, { ...r, ref: t, forceMount: n })
            : i.type === `always`
              ? (0, p.jsx)(P, { ...r, ref: t, "data-state": `visible` })
              : null
    );
  });
A.displayName = k;
var j = f.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = w(k, e.__scopeScrollArea),
      [a, o] = f.useState(!1);
    return (
      f.useEffect(() => {
        let e = i.scrollArea,
          t = 0;
        if (e) {
          let n = () => {
              (window.clearTimeout(t), o(!0));
            },
            r = () => {
              t = window.setTimeout(() => o(!1), i.scrollHideDelay);
            };
          return (
            e.addEventListener(`pointerenter`, n),
            e.addEventListener(`pointerleave`, r),
            () => {
              (window.clearTimeout(t),
                e.removeEventListener(`pointerenter`, n),
                e.removeEventListener(`pointerleave`, r));
            }
          );
        }
      }, [i.scrollArea, i.scrollHideDelay]),
      (0, p.jsx)(u, {
        present: n || a,
        children: (0, p.jsx)(N, { "data-state": a ? `visible` : `hidden`, ...r, ref: t }),
      })
    );
  }),
  M = f.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = w(k, e.__scopeScrollArea),
      a = e.orientation === `horizontal`,
      o = Y(() => c(`SCROLL_END`), 100),
      [s, c] = y(`hidden`, {
        hidden: { SCROLL: `scrolling` },
        scrolling: { SCROLL_END: `idle`, POINTER_ENTER: `interacting` },
        interacting: { SCROLL: `interacting`, POINTER_LEAVE: `idle` },
        idle: { HIDE: `hidden`, SCROLL: `scrolling`, POINTER_ENTER: `interacting` },
      });
    return (
      f.useEffect(() => {
        if (s === `idle`) {
          let e = window.setTimeout(() => c(`HIDE`), i.scrollHideDelay);
          return () => window.clearTimeout(e);
        }
      }, [s, i.scrollHideDelay, c]),
      f.useEffect(() => {
        let e = i.viewport,
          t = a ? `scrollLeft` : `scrollTop`;
        if (e) {
          let n = e[t],
            r = () => {
              let r = e[t];
              (n !== r && (c(`SCROLL`), o()), (n = r));
            };
          return (e.addEventListener(`scroll`, r), () => e.removeEventListener(`scroll`, r));
        }
      }, [i.viewport, a, c, o]),
      (0, p.jsx)(u, {
        present: n || s !== `hidden`,
        children: (0, p.jsx)(P, {
          "data-state": s === `hidden` ? `hidden` : `visible`,
          ...r,
          ref: t,
          onPointerEnter: l(e.onPointerEnter, () => c(`POINTER_ENTER`)),
          onPointerLeave: l(e.onPointerLeave, () => c(`POINTER_LEAVE`)),
        }),
      })
    );
  }),
  N = f.forwardRef((e, t) => {
    let n = w(k, e.__scopeScrollArea),
      { forceMount: r, ...i } = e,
      [a, o] = f.useState(!1),
      s = e.orientation === `horizontal`,
      c = Y(() => {
        if (n.viewport) {
          let e = n.viewport.offsetWidth < n.viewport.scrollWidth,
            t = n.viewport.offsetHeight < n.viewport.scrollHeight;
          o(s ? e : t);
        }
      }, 10);
    return (
      X(n.viewport, c),
      X(n.content, c),
      (0, p.jsx)(u, {
        present: r || a,
        children: (0, p.jsx)(P, { "data-state": a ? `visible` : `hidden`, ...i, ref: t }),
      })
    );
  }),
  P = f.forwardRef((e, t) => {
    let { orientation: n = `vertical`, ...r } = e,
      i = w(k, e.__scopeScrollArea),
      a = f.useRef(null),
      o = f.useRef(0),
      [s, c] = f.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      l = W(s.viewport, s.content),
      u = {
        ...r,
        sizes: s,
        onSizesChange: c,
        hasThumb: l > 0 && l < 1,
        onThumbChange: (e) => (a.current = e),
        onThumbPointerUp: () => (o.current = 0),
        onThumbPointerDown: (e) => (o.current = e),
      };
    function d(e, t) {
      return re(e, o.current, s, t);
    }
    return n === `horizontal`
      ? (0, p.jsx)(F, {
          ...u,
          ref: t,
          onThumbPositionChange: () => {
            if (i.viewport && a.current) {
              let e = i.viewport.scrollLeft,
                t = K(e, s, i.dir);
              a.current.style.transform = `translate3d(${t}px, 0, 0)`;
            }
          },
          onWheelScroll: (e) => {
            i.viewport && (i.viewport.scrollLeft = e);
          },
          onDragScroll: (e) => {
            i.viewport && (i.viewport.scrollLeft = d(e, i.dir));
          },
        })
      : n === `vertical`
        ? (0, p.jsx)(ee, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (i.viewport && a.current) {
                let e = i.viewport.scrollTop,
                  t = K(e, s);
                a.current.style.transform = `translate3d(0, ${t}px, 0)`;
              }
            },
            onWheelScroll: (e) => {
              i.viewport && (i.viewport.scrollTop = e);
            },
            onDragScroll: (e) => {
              i.viewport && (i.viewport.scrollTop = d(e));
            },
          })
        : null;
  }),
  F = f.forwardRef((e, t) => {
    let { sizes: n, onSizesChange: r, ...i } = e,
      a = w(k, e.__scopeScrollArea),
      [s, c] = f.useState(),
      l = f.useRef(null),
      u = o(t, l, a.onScrollbarXChange);
    return (
      f.useEffect(() => {
        l.current && c(getComputedStyle(l.current));
      }, [l]),
      (0, p.jsx)(L, {
        "data-orientation": `horizontal`,
        ...i,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: a.dir === `rtl` ? `var(--radix-scroll-area-corner-width)` : 0,
          right: a.dir === `ltr` ? `var(--radix-scroll-area-corner-width)` : 0,
          "--radix-scroll-area-thumb-width": G(n) + `px`,
          ...e.style,
        },
        onThumbPointerDown: (t) => e.onThumbPointerDown(t.x),
        onDragScroll: (t) => e.onDragScroll(t.x),
        onWheelScroll: (t, n) => {
          if (a.viewport) {
            let r = a.viewport.scrollLeft + t.deltaX;
            (e.onWheelScroll(r), J(r, n) && t.preventDefault());
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            s &&
            r({
              content: a.viewport.scrollWidth,
              viewport: a.viewport.offsetWidth,
              scrollbar: {
                size: l.current.clientWidth,
                paddingStart: U(s.paddingLeft),
                paddingEnd: U(s.paddingRight),
              },
            });
        },
      })
    );
  }),
  ee = f.forwardRef((e, t) => {
    let { sizes: n, onSizesChange: r, ...i } = e,
      a = w(k, e.__scopeScrollArea),
      [s, c] = f.useState(),
      l = f.useRef(null),
      u = o(t, l, a.onScrollbarYChange);
    return (
      f.useEffect(() => {
        l.current && c(getComputedStyle(l.current));
      }, [l]),
      (0, p.jsx)(L, {
        "data-orientation": `vertical`,
        ...i,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: a.dir === `ltr` ? 0 : void 0,
          left: a.dir === `rtl` ? 0 : void 0,
          bottom: `var(--radix-scroll-area-corner-height)`,
          "--radix-scroll-area-thumb-height": G(n) + `px`,
          ...e.style,
        },
        onThumbPointerDown: (t) => e.onThumbPointerDown(t.y),
        onDragScroll: (t) => e.onDragScroll(t.y),
        onWheelScroll: (t, n) => {
          if (a.viewport) {
            let r = a.viewport.scrollTop + t.deltaY;
            (e.onWheelScroll(r), J(r, n) && t.preventDefault());
          }
        },
        onResize: () => {
          l.current &&
            a.viewport &&
            s &&
            r({
              content: a.viewport.scrollHeight,
              viewport: a.viewport.offsetHeight,
              scrollbar: {
                size: l.current.clientHeight,
                paddingStart: U(s.paddingTop),
                paddingEnd: U(s.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [te, I] = x(k),
  L = f.forwardRef((e, t) => {
    let {
        __scopeScrollArea: n,
        sizes: a,
        hasThumb: s,
        onThumbChange: c,
        onThumbPointerUp: u,
        onThumbPointerDown: d,
        onThumbPositionChange: m,
        onDragScroll: h,
        onWheelScroll: g,
        onResize: _,
        ...v
      } = e,
      y = w(k, n),
      [b, x] = f.useState(null),
      S = o(t, (e) => x(e)),
      C = f.useRef(null),
      T = f.useRef(``),
      E = y.viewport,
      D = a.content - a.viewport,
      O = i(g),
      A = i(m),
      j = Y(_, 10);
    function M(e) {
      C.current && h({ x: e.clientX - C.current.left, y: e.clientY - C.current.top });
    }
    return (
      f.useEffect(() => {
        let e = (e) => {
          let t = e.target;
          b?.contains(t) && O(e, D);
        };
        return (
          document.addEventListener(`wheel`, e, { passive: !1 }),
          () => document.removeEventListener(`wheel`, e, { passive: !1 })
        );
      }, [E, b, D, O]),
      f.useEffect(A, [a, A]),
      X(b, j),
      X(y.content, j),
      (0, p.jsx)(te, {
        scope: n,
        scrollbar: b,
        hasThumb: s,
        onThumbChange: i(c),
        onThumbPointerUp: i(u),
        onThumbPositionChange: A,
        onThumbPointerDown: i(d),
        children: (0, p.jsx)(r.div, {
          ...v,
          ref: S,
          style: { position: `absolute`, ...v.style },
          onPointerDown: l(e.onPointerDown, (e) => {
            e.button === 0 &&
              (e.target.setPointerCapture(e.pointerId),
              (C.current = b.getBoundingClientRect()),
              (T.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = `none`),
              y.viewport && (y.viewport.style.scrollBehavior = `auto`),
              M(e));
          }),
          onPointerMove: l(e.onPointerMove, M),
          onPointerUp: l(e.onPointerUp, (e) => {
            let t = e.target;
            (t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
              (document.body.style.webkitUserSelect = T.current),
              y.viewport && (y.viewport.style.scrollBehavior = ``),
              (C.current = null));
          }),
        }),
      })
    );
  }),
  R = `ScrollAreaThumb`,
  z = f.forwardRef((e, t) => {
    let { forceMount: n, ...r } = e,
      i = I(R, e.__scopeScrollArea);
    return (0, p.jsx)(u, { present: n || i.hasThumb, children: (0, p.jsx)(B, { ref: t, ...r }) });
  }),
  B = f.forwardRef((e, t) => {
    let { __scopeScrollArea: n, style: i, ...a } = e,
      s = w(R, n),
      c = I(R, n),
      { onThumbPositionChange: u } = c,
      d = o(t, (e) => c.onThumbChange(e)),
      m = f.useRef(void 0),
      h = Y(() => {
        m.current &&= (m.current(), void 0);
      }, 100);
    return (
      f.useEffect(() => {
        let e = s.viewport;
        if (e) {
          let t = () => {
            (h(), m.current || ((m.current = ie(e, u)), u()));
          };
          return (u(), e.addEventListener(`scroll`, t), () => e.removeEventListener(`scroll`, t));
        }
      }, [s.viewport, h, u]),
      (0, p.jsx)(r.div, {
        "data-state": c.hasThumb ? `visible` : `hidden`,
        ...a,
        ref: d,
        style: {
          width: `var(--radix-scroll-area-thumb-width)`,
          height: `var(--radix-scroll-area-thumb-height)`,
          ...i,
        },
        onPointerDownCapture: l(e.onPointerDownCapture, (e) => {
          let t = e.target.getBoundingClientRect(),
            n = e.clientX - t.left,
            r = e.clientY - t.top;
          c.onThumbPointerDown({ x: n, y: r });
        }),
        onPointerUp: l(e.onPointerUp, c.onThumbPointerUp),
      })
    );
  });
z.displayName = R;
var V = `ScrollAreaCorner`,
  H = f.forwardRef((e, t) => {
    let n = w(V, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== `scroll` && r ? (0, p.jsx)(ne, { ...e, ref: t }) : null;
  });
H.displayName = V;
var ne = f.forwardRef((e, t) => {
  let { __scopeScrollArea: n, ...i } = e,
    a = w(V, n),
    [o, s] = f.useState(0),
    [c, l] = f.useState(0),
    u = !!(o && c);
  return (
    X(a.scrollbarX, () => {
      let e = a.scrollbarX?.offsetHeight || 0;
      (a.onCornerHeightChange(e), l(e));
    }),
    X(a.scrollbarY, () => {
      let e = a.scrollbarY?.offsetWidth || 0;
      (a.onCornerWidthChange(e), s(e));
    }),
    u
      ? (0, p.jsx)(r.div, {
          ...i,
          ref: t,
          style: {
            width: o,
            height: c,
            position: `absolute`,
            right: a.dir === `ltr` ? 0 : void 0,
            left: a.dir === `rtl` ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function U(e) {
  return e ? parseInt(e, 10) : 0;
}
function W(e, t) {
  let n = e / t;
  return isNaN(n) ? 0 : n;
}
function G(e) {
  let t = W(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function re(e, t, n, r = `ltr`) {
  let i = G(n),
    a = i / 2,
    o = t || a,
    s = i - o,
    c = n.scrollbar.paddingStart + o,
    l = n.scrollbar.size - n.scrollbar.paddingEnd - s,
    u = n.content - n.viewport,
    d = r === `ltr` ? [0, u] : [u * -1, 0];
  return q([c, l], d)(e);
}
function K(e, t, n = `ltr`) {
  let r = G(t),
    i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    a = t.scrollbar.size - i,
    o = t.content - t.viewport,
    s = a - r,
    c = v(e, n === `ltr` ? [0, o] : [o * -1, 0]);
  return q([0, o], [0, s])(c);
}
function q(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function J(e, t) {
  return e > 0 && e < t;
}
var ie = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function i() {
      let a = { left: e.scrollLeft, top: e.scrollTop },
        o = n.left !== a.left,
        s = n.top !== a.top;
      ((o || s) && t(), (n = a), (r = window.requestAnimationFrame(i)));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function Y(e, t) {
  let n = i(e),
    r = f.useRef(0);
  return (
    f.useEffect(() => () => window.clearTimeout(r.current), []),
    f.useCallback(() => {
      (window.clearTimeout(r.current), (r.current = window.setTimeout(n, t)));
    }, [n, t])
  );
}
function X(e, t) {
  let n = i(t);
  s(() => {
    let t = 0;
    if (e) {
      let r = new ResizeObserver(() => {
        (cancelAnimationFrame(t), (t = window.requestAnimationFrame(n)));
      });
      return (
        r.observe(e),
        () => {
          (window.cancelAnimationFrame(t), r.unobserve(e));
        }
      );
    }
  }, [e, n]);
}
var Z = T,
  ae = D,
  oe = H,
  Q = f.forwardRef(({ className: e, children: t, ...n }, r) =>
    (0, p.jsxs)(Z, {
      ref: r,
      className: d(`relative overflow-hidden`, e),
      ...n,
      children: [
        (0, p.jsx)(ae, { className: `h-full w-full rounded-[inherit]`, children: t }),
        (0, p.jsx)($, {}),
        (0, p.jsx)(oe, {}),
      ],
    }),
  );
Q.displayName = Z.displayName;
var $ = f.forwardRef(({ className: e, orientation: t = `vertical`, ...n }, r) =>
  (0, p.jsx)(A, {
    ref: r,
    orientation: t,
    className: d(
      `flex touch-none select-none transition-colors`,
      t === `vertical` && `h-full w-2.5 border-l border-l-transparent p-[1px]`,
      t === `horizontal` && `h-2.5 flex-col border-t border-t-transparent p-[1px]`,
      e,
    ),
    ...n,
    children: (0, p.jsx)(z, { className: `relative flex-1 rounded-full bg-border` }),
  }),
);
$.displayName = A.displayName;
export { h as i, v as n, _ as r, Q as t };
