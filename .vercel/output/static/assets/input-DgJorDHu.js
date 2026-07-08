import { i as e, t } from "./jsx-runtime-DUAcabCT.js";
import { t as n } from "./react-DbyrFoBd.js";
import {
  C as r,
  D as i,
  H as a,
  M as o,
  O as s,
  P as c,
  T as l,
  V as u,
  _ as d,
  b as f,
  d as p,
  f as m,
  g as h,
  h as g,
  k as _,
  l as v,
  m as y,
  p as b,
  u as x,
  v as ee,
  w as te,
  x as ne,
  y as S,
  z as C,
} from "./dist-DAKu88rv.js";
var re = a(`dollar-sign`, [
    [`line`, { x1: `12`, x2: `12`, y1: `2`, y2: `22`, key: `7eqyqh` }],
    [`path`, { d: `M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`, key: `1b0p4s` }],
  ]),
  ie = a(`info`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
    [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
  ]),
  ae = a(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  w = e(n(), 1),
  T = t(),
  E = `Popover`,
  [D, oe] = s(E, [S]),
  O = S(),
  [se, k] = D(E),
  A = (e) => {
    let {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !1,
      } = e,
      s = O(t),
      c = w.useRef(null),
      [l, u] = w.useState(!1),
      [d, f] = m({ prop: r, defaultProp: i ?? !1, onChange: a, caller: E });
    return (0, T.jsx)(ee, {
      ...s,
      children: (0, T.jsx)(se, {
        scope: t,
        contentId: ne(),
        triggerRef: c,
        open: d,
        onOpenChange: f,
        onOpenToggle: w.useCallback(() => f((e) => !e), [f]),
        hasCustomAnchor: l,
        onCustomAnchorAdd: w.useCallback(() => u(!0), []),
        onCustomAnchorRemove: w.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  };
A.displayName = E;
var j = `PopoverAnchor`,
  ce = w.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      i = k(j, n),
      a = O(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
    return (w.useEffect(() => (o(), () => s()), [o, s]), (0, T.jsx)(g, { ...a, ...r, ref: t }));
  });
ce.displayName = j;
var M = `PopoverTrigger`,
  N = w.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      a = k(M, n),
      o = O(n),
      s = c(t, a.triggerRef),
      l = (0, T.jsx)(i.button, {
        type: `button`,
        "aria-haspopup": `dialog`,
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": B(a.open),
        ...r,
        ref: s,
        onClick: _(e.onClick, a.onOpenToggle),
      });
    return a.hasCustomAnchor ? l : (0, T.jsx)(g, { asChild: !0, ...o, children: l });
  });
N.displayName = M;
var P = `PopoverPortal`,
  [le, ue] = D(P, { forceMount: void 0 }),
  F = (e) => {
    let { __scopePopover: t, forceMount: n, children: r, container: i } = e,
      a = k(P, t);
    return (0, T.jsx)(le, {
      scope: t,
      forceMount: n,
      children: (0, T.jsx)(b, {
        present: n || a.open,
        children: (0, T.jsx)(y, { asChild: !0, container: i, children: r }),
      }),
    });
  };
F.displayName = P;
var I = `PopoverContent`,
  L = w.forwardRef((e, t) => {
    let n = ue(I, e.__scopePopover),
      { forceMount: r = n.forceMount, ...i } = e,
      a = k(I, e.__scopePopover);
    return (0, T.jsx)(b, {
      present: r || a.open,
      children: a.modal ? (0, T.jsx)(fe, { ...i, ref: t }) : (0, T.jsx)(pe, { ...i, ref: t }),
    });
  });
L.displayName = I;
var de = o(`PopoverContent.RemoveScroll`),
  fe = w.forwardRef((e, t) => {
    let n = k(I, e.__scopePopover),
      r = w.useRef(null),
      i = c(t, r),
      a = w.useRef(!1);
    return (
      w.useEffect(() => {
        let e = r.current;
        if (e) return p(e);
      }, []),
      (0, T.jsx)(x, {
        as: de,
        allowPinchZoom: !0,
        children: (0, T.jsx)(R, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: _(e.onCloseAutoFocus, (e) => {
            (e.preventDefault(), a.current || n.triggerRef.current?.focus());
          }),
          onPointerDownOutside: _(
            e.onPointerDownOutside,
            (e) => {
              let t = e.detail.originalEvent,
                n = t.button === 0 && t.ctrlKey === !0;
              a.current = t.button === 2 || n;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: _(e.onFocusOutside, (e) => e.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  pe = w.forwardRef((e, t) => {
    let n = k(I, e.__scopePopover),
      r = w.useRef(!1),
      i = w.useRef(!1);
    return (0, T.jsx)(R, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (t) => {
        (e.onCloseAutoFocus?.(t),
          t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
          (r.current = !1),
          (i.current = !1));
      },
      onInteractOutside: (t) => {
        (e.onInteractOutside?.(t),
          t.defaultPrevented ||
            ((r.current = !0), t.detail.originalEvent.type === `pointerdown` && (i.current = !0)));
        let a = t.target;
        (n.triggerRef.current?.contains(a) && t.preventDefault(),
          t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault());
      },
    });
  }),
  R = w.forwardRef((e, t) => {
    let {
        __scopePopover: n,
        trapFocus: i,
        onOpenAutoFocus: a,
        onCloseAutoFocus: o,
        disableOutsidePointerEvents: s,
        onEscapeKeyDown: c,
        onPointerDownOutside: u,
        onFocusOutside: f,
        onInteractOutside: p,
        ...m
      } = e,
      h = k(I, n),
      g = O(n);
    return (
      te(),
      (0, T.jsx)(r, {
        asChild: !0,
        loop: !0,
        trapped: i,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o,
        children: (0, T.jsx)(l, {
          asChild: !0,
          disableOutsidePointerEvents: s,
          onInteractOutside: p,
          onEscapeKeyDown: c,
          onPointerDownOutside: u,
          onFocusOutside: f,
          onDismiss: () => h.onOpenChange(!1),
          deferPointerDownOutside: !0,
          children: (0, T.jsx)(d, {
            "data-state": B(h.open),
            role: `dialog`,
            id: h.contentId,
            ...g,
            ...m,
            ref: t,
            style: {
              ...m.style,
              "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`,
              "--radix-popover-content-available-width": `var(--radix-popper-available-width)`,
              "--radix-popover-content-available-height": `var(--radix-popper-available-height)`,
              "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`,
              "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)`,
            },
          }),
        }),
      })
    );
  }),
  z = `PopoverClose`,
  me = w.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      a = k(z, n);
    return (0, T.jsx)(i.button, {
      type: `button`,
      ...r,
      ref: t,
      onClick: _(e.onClick, () => a.onOpenChange(!1)),
    });
  });
me.displayName = z;
var he = `PopoverArrow`,
  ge = w.forwardRef((e, t) => {
    let { __scopePopover: n, ...r } = e,
      i = O(n);
    return (0, T.jsx)(h, { ...i, ...r, ref: t });
  });
ge.displayName = he;
function B(e) {
  return e ? `open` : `closed`;
}
var _e = A,
  ve = N,
  ye = F,
  V = L,
  be = _e,
  xe = ve,
  H = w.forwardRef(({ className: e, align: t = `center`, sideOffset: n = 4, ...r }, i) =>
    (0, T.jsx)(ye, {
      children: (0, T.jsx)(V, {
        ref: i,
        align: t,
        sideOffset: n,
        className: C(
          `z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)`,
          e,
        ),
        ...r,
      }),
    }),
  );
H.displayName = V.displayName;
var U = `Checkbox`,
  [Se, Ce] = s(U),
  [we, W] = Se(U);
function Te(e) {
  let {
      __scopeCheckbox: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [f, p] = m({ prop: n, defaultProp: i ?? !1, onChange: c, caller: U }),
    [h, g] = w.useState(null),
    [_, v] = w.useState(null),
    y = w.useRef(!1),
    b = h ? !!o || !!h.closest(`form`) : !0,
    x = {
      checked: f,
      disabled: a,
      setChecked: p,
      control: h,
      setControl: g,
      name: s,
      form: o,
      value: u,
      hasConsumerStoppedPropagationRef: y,
      required: l,
      defaultChecked: Q(i) ? !1 : i,
      isFormControl: b,
      bubbleInput: _,
      setBubbleInput: v,
    };
  return (0, T.jsx)(we, { scope: t, ...x, children: Ee(d) ? d(x) : r });
}
var G = `CheckboxTrigger`,
  K = w.forwardRef(({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, a) => {
    let {
        control: o,
        value: s,
        disabled: l,
        checked: u,
        required: d,
        setControl: f,
        setChecked: p,
        hasConsumerStoppedPropagationRef: m,
        isFormControl: h,
        bubbleInput: g,
      } = W(G, e),
      v = c(a, f),
      y = w.useRef(u);
    return (
      w.useEffect(() => {
        let e = o?.form;
        if (e) {
          let t = () => p(y.current);
          return (e.addEventListener(`reset`, t), () => e.removeEventListener(`reset`, t));
        }
      }, [o, p]),
      (0, T.jsx)(i.button, {
        type: `button`,
        role: `checkbox`,
        "aria-checked": Q(u) ? `mixed` : u,
        "aria-required": d,
        "data-state": De(u),
        "data-disabled": l ? `` : void 0,
        disabled: l,
        value: s,
        ...r,
        ref: v,
        onKeyDown: _(t, (e) => {
          e.key === `Enter` && e.preventDefault();
        }),
        onClick: _(n, (e) => {
          (p((e) => (Q(e) ? !0 : !e)),
            g && h && ((m.current = e.isPropagationStopped()), m.current || e.stopPropagation()));
        }),
      })
    );
  });
K.displayName = G;
var q = w.forwardRef((e, t) => {
  let {
    __scopeCheckbox: n,
    name: r,
    checked: i,
    defaultChecked: a,
    required: o,
    disabled: s,
    value: c,
    onCheckedChange: l,
    form: u,
    ...d
  } = e;
  return (0, T.jsx)(Te, {
    __scopeCheckbox: n,
    checked: i,
    defaultChecked: a,
    disabled: s,
    required: o,
    onCheckedChange: l,
    name: r,
    form: u,
    value: c,
    internal_do_not_use_render: ({ isFormControl: e }) =>
      (0, T.jsxs)(T.Fragment, {
        children: [
          (0, T.jsx)(K, { ...d, ref: t, __scopeCheckbox: n }),
          e && (0, T.jsx)(Z, { __scopeCheckbox: n }),
        ],
      }),
  });
});
q.displayName = U;
var J = `CheckboxIndicator`,
  Y = w.forwardRef((e, t) => {
    let { __scopeCheckbox: n, forceMount: r, ...a } = e,
      o = W(J, n);
    return (0, T.jsx)(b, {
      present: r || Q(o.checked) || o.checked === !0,
      children: (0, T.jsx)(i.span, {
        "data-state": De(o.checked),
        "data-disabled": o.disabled ? `` : void 0,
        ...a,
        ref: t,
        style: { pointerEvents: `none`, ...e.style },
      }),
    });
  });
Y.displayName = J;
var X = `CheckboxBubbleInput`,
  Z = w.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    let {
        control: r,
        hasConsumerStoppedPropagationRef: a,
        checked: o,
        defaultChecked: s,
        required: l,
        disabled: u,
        name: d,
        value: p,
        form: m,
        bubbleInput: h,
        setBubbleInput: g,
      } = W(X, e),
      _ = c(n, g),
      y = v(o),
      b = f(r);
    w.useEffect(() => {
      let e = h;
      if (!e) return;
      let t = window.HTMLInputElement.prototype,
        n = Object.getOwnPropertyDescriptor(t, `checked`).set,
        r = !a.current;
      if (y !== o && n) {
        let t = new Event(`click`, { bubbles: r });
        ((e.indeterminate = Q(o)), n.call(e, Q(o) ? !1 : o), e.dispatchEvent(t));
      }
    }, [h, y, o, a]);
    let x = w.useRef(Q(o) ? !1 : o);
    return (0, T.jsx)(i.input, {
      type: `checkbox`,
      "aria-hidden": !0,
      defaultChecked: s ?? x.current,
      required: l,
      disabled: u,
      name: d,
      value: p,
      form: m,
      ...t,
      tabIndex: -1,
      ref: _,
      style: {
        ...t.style,
        ...b,
        position: `absolute`,
        pointerEvents: `none`,
        opacity: 0,
        margin: 0,
        transform: `translateX(-100%)`,
      },
    });
  });
Z.displayName = X;
function Ee(e) {
  return typeof e == `function`;
}
function Q(e) {
  return e === `indeterminate`;
}
function De(e) {
  return Q(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
var Oe = w.forwardRef(({ className: e, ...t }, n) =>
  (0, T.jsx)(q, {
    ref: n,
    className: C(
      `grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`,
      e,
    ),
    ...t,
    children: (0, T.jsx)(Y, {
      className: C(`grid place-content-center text-current`),
      children: (0, T.jsx)(u, { className: `h-4 w-4` }),
    }),
  }),
);
Oe.displayName = q.displayName;
var $ = w.forwardRef(({ className: e, type: t, ...n }, r) =>
  (0, T.jsx)(`input`, {
    type: t,
    className: C(
      `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e,
    ),
    ref: r,
    ...n,
  }),
);
$.displayName = `Input`;
export { xe as a, re as c, H as i, Oe as n, ae as o, be as r, ie as s, $ as t };
