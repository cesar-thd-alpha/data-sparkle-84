import { i as e, t } from "./jsx-runtime-DUAcabCT.js";
import { t as n } from "./react-DbyrFoBd.js";
import {
  D as r,
  N as i,
  O as a,
  P as o,
  T as s,
  _ as c,
  f as l,
  g as u,
  h as d,
  k as f,
  m as p,
  p as m,
  t as h,
  v as ee,
  x as te,
  y as g,
  z as _,
} from "./dist-DAKu88rv.js";
var v = e(n(), 1),
  y = t(),
  [b, x] = a(`Tooltip`, [g]),
  S = g(),
  C = `TooltipProvider`,
  w = 700,
  T = `tooltip.open`,
  [E, D] = b(C),
  O = (e) => {
    let {
        __scopeTooltip: t,
        delayDuration: n = w,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: a,
      } = e,
      o = v.useRef(!0),
      s = v.useRef(!1),
      c = v.useRef(0);
    return (
      v.useEffect(() => {
        let e = c.current;
        return () => window.clearTimeout(e);
      }, []),
      (0, y.jsx)(E, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          r <= 0 || (window.clearTimeout(c.current), (o.current = !1));
        }, [r]),
        onClose: v.useCallback(() => {
          r <= 0 ||
            (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (o.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: s,
        onPointerInTransitChange: v.useCallback((e) => {
          s.current = e;
        }, []),
        disableHoverableContent: i,
        children: a,
      })
    );
  };
O.displayName = C;
var k = `Tooltip`,
  [ne, A] = b(k),
  j = (e) => {
    let {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        disableHoverableContent: o,
        delayDuration: s,
      } = e,
      c = D(k, e.__scopeTooltip),
      u = S(t),
      [d, f] = v.useState(null),
      p = te(),
      m = v.useRef(0),
      h = o ?? c.disableHoverableContent,
      g = s ?? c.delayDuration,
      _ = v.useRef(!1),
      [b, x] = l({
        prop: r,
        defaultProp: i ?? !1,
        onChange: (e) => {
          (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(T))) : c.onClose(), a?.(e));
        },
        caller: k,
      }),
      C = v.useMemo(() => (b ? (_.current ? `delayed-open` : `instant-open`) : `closed`), [b]),
      w = v.useCallback(() => {
        (window.clearTimeout(m.current), (m.current = 0), (_.current = !1), x(!0));
      }, [x]),
      E = v.useCallback(() => {
        (window.clearTimeout(m.current), (m.current = 0), x(!1));
      }, [x]),
      O = v.useCallback(() => {
        (window.clearTimeout(m.current),
          (m.current = window.setTimeout(() => {
            ((_.current = !0), x(!0), (m.current = 0));
          }, g)));
      }, [g, x]);
    return (
      v.useEffect(
        () => () => {
          m.current &&= (window.clearTimeout(m.current), 0);
        },
        [],
      ),
      (0, y.jsx)(ee, {
        ...u,
        children: (0, y.jsx)(ne, {
          scope: t,
          contentId: p,
          open: b,
          stateAttribute: C,
          trigger: d,
          onTriggerChange: f,
          onTriggerEnter: v.useCallback(() => {
            c.isOpenDelayedRef.current ? O() : w();
          }, [c.isOpenDelayedRef, O, w]),
          onTriggerLeave: v.useCallback(() => {
            h ? E() : (window.clearTimeout(m.current), (m.current = 0));
          }, [E, h]),
          onOpen: w,
          onClose: E,
          disableHoverableContent: h,
          children: n,
        }),
      })
    );
  };
j.displayName = k;
var M = `TooltipTrigger`,
  N = v.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...i } = e,
      a = A(M, n),
      s = D(M, n),
      c = S(n),
      l = o(t, v.useRef(null), a.onTriggerChange),
      u = v.useRef(!1),
      p = v.useRef(!1),
      m = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(() => () => document.removeEventListener(`pointerup`, m), [m]),
      (0, y.jsx)(d, {
        asChild: !0,
        ...c,
        children: (0, y.jsx)(r.button, {
          "aria-describedby": a.open ? a.contentId : void 0,
          "data-state": a.stateAttribute,
          ...i,
          ref: l,
          onPointerMove: f(e.onPointerMove, (e) => {
            e.pointerType !== `touch` &&
              !p.current &&
              !s.isPointerInTransitRef.current &&
              (a.onTriggerEnter(), (p.current = !0));
          }),
          onPointerLeave: f(e.onPointerLeave, () => {
            (a.onTriggerLeave(), (p.current = !1));
          }),
          onPointerDown: f(e.onPointerDown, () => {
            (a.open && a.onClose(),
              (u.current = !0),
              document.addEventListener(`pointerup`, m, { once: !0 }));
          }),
          onFocus: f(e.onFocus, () => {
            u.current || a.onOpen();
          }),
          onBlur: f(e.onBlur, a.onClose),
          onClick: f(e.onClick, a.onClose),
        }),
      })
    );
  });
N.displayName = M;
var P = `TooltipPortal`,
  [F, I] = b(P, { forceMount: void 0 }),
  L = (e) => {
    let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
      a = A(P, t);
    return (0, y.jsx)(F, {
      scope: t,
      forceMount: n,
      children: (0, y.jsx)(m, {
        present: n || a.open,
        children: (0, y.jsx)(p, { asChild: !0, container: i, children: r }),
      }),
    });
  };
L.displayName = P;
var R = `TooltipContent`,
  z = v.forwardRef((e, t) => {
    let n = I(R, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
      o = A(R, e.__scopeTooltip);
    return (0, y.jsx)(m, {
      present: r || o.open,
      children: o.disableHoverableContent
        ? (0, y.jsx)(W, { side: i, ...a, ref: t })
        : (0, y.jsx)(B, { side: i, ...a, ref: t }),
    });
  }),
  B = v.forwardRef((e, t) => {
    let n = A(R, e.__scopeTooltip),
      r = D(R, e.__scopeTooltip),
      i = v.useRef(null),
      a = o(t, i),
      [s, c] = v.useState(null),
      { trigger: l, onClose: u } = n,
      d = i.current,
      { onPointerInTransitChange: f } = r,
      p = v.useCallback(() => {
        (c(null), f(!1));
      }, [f]),
      m = v.useCallback(
        (e, t) => {
          let n = e.currentTarget,
            r = { x: e.clientX, y: e.clientY },
            i = J(r, q(r, n.getBoundingClientRect())),
            a = Y(t.getBoundingClientRect());
          (c(re([...i, ...a])), f(!0));
        },
        [f],
      );
    return (
      v.useEffect(() => () => p(), [p]),
      v.useEffect(() => {
        if (l && d) {
          let e = (e) => m(e, d),
            t = (e) => m(e, l);
          return (
            l.addEventListener(`pointerleave`, e),
            d.addEventListener(`pointerleave`, t),
            () => {
              (l.removeEventListener(`pointerleave`, e), d.removeEventListener(`pointerleave`, t));
            }
          );
        }
      }, [l, d, m, p]),
      v.useEffect(() => {
        if (s) {
          let e = (e) => {
            let t = e.target,
              n = { x: e.clientX, y: e.clientY },
              r = l?.contains(t) || d?.contains(t),
              i = !X(n, s);
            r ? p() : i && (p(), u());
          };
          return (
            document.addEventListener(`pointermove`, e),
            () => document.removeEventListener(`pointermove`, e)
          );
        }
      }, [l, d, s, u, p]),
      (0, y.jsx)(W, { ...e, ref: a })
    );
  }),
  [V, H] = b(k, { isInside: !1 }),
  U = i(`TooltipContent`),
  W = v.forwardRef((e, t) => {
    let {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        ...l
      } = e,
      u = A(R, n),
      d = S(n),
      { onClose: f } = u;
    return (
      v.useEffect(
        () => (document.addEventListener(T, f), () => document.removeEventListener(T, f)),
        [f],
      ),
      v.useEffect(() => {
        if (u.trigger) {
          let e = (e) => {
            e.target instanceof Node && e.target.contains(u.trigger) && f();
          };
          return (
            window.addEventListener(`scroll`, e, { capture: !0 }),
            () => window.removeEventListener(`scroll`, e, { capture: !0 })
          );
        }
      }, [u.trigger, f]),
      (0, y.jsx)(s, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: o,
        onFocusOutside: (e) => e.preventDefault(),
        onDismiss: f,
        children: (0, y.jsxs)(c, {
          "data-state": u.stateAttribute,
          ...d,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
            "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
            "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
            "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
            "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`,
          },
          children: [
            (0, y.jsx)(U, { children: r }),
            (0, y.jsx)(V, {
              scope: n,
              isInside: !0,
              children: (0, y.jsx)(h, { id: u.contentId, role: `tooltip`, children: i || r }),
            }),
          ],
        }),
      })
    );
  });
z.displayName = R;
var G = `TooltipArrow`,
  K = v.forwardRef((e, t) => {
    let { __scopeTooltip: n, ...r } = e,
      i = S(n);
    return H(G, n).isInside ? null : (0, y.jsx)(u, { ...i, ...r, ref: t });
  });
K.displayName = G;
function q(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function J(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Y(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function X(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function re(e) {
  let t = e.slice();
  return (
    t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y))),
    ie(t)
  );
}
function ie(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (; t.length >= 2; ) {
      let e = t[t.length - 1],
        n = t[t.length - 2];
      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  let n = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    for (; n.length >= 2; ) {
      let e = n[n.length - 1],
        t = n[n.length - 2];
      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
  );
}
var ae = O,
  oe = j,
  se = N,
  ce = L,
  Z = z,
  le = ae,
  ue = oe,
  Q = se,
  $ = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    (0, y.jsx)(ce, {
      children: (0, y.jsx)(Z, {
        ref: r,
        sideOffset: t,
        className: _(
          `z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)`,
          e,
        ),
        ...n,
      }),
    }),
  );
$.displayName = Z.displayName;
export { Q as i, $ as n, le as r, ue as t };
