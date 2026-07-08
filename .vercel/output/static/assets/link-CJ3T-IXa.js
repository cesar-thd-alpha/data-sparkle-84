import { i as e, n as t, t as n } from "./jsx-runtime-DUAcabCT.js";
import { t as r } from "./react-DbyrFoBd.js";
var i = t((e) => {
    var t = r();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function i() {}
    var a = {
        d: {
          f: i,
          r: function () {
            throw Error(n(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      o = Symbol.for(`react.portal`);
    function s(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: o,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
      (e.createPortal = function (e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(n(299));
        return s(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = c.T,
          n = a.p;
        try {
          if (((c.T = null), (a.p = 2), e)) return e();
        } finally {
          ((c.T = t), (a.p = n), a.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          a.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && a.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin),
            i = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? a.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
              })
            : n === `script` &&
              a.d.X(e, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = l(t.as, t.crossOrigin);
              a.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? a.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin);
          a.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = l(t.as, t.crossOrigin);
            a.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else a.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        a.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return c.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.7`));
  }),
  a = t((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = i()));
  }),
  o = `__TSS_CONTEXT`,
  s = Symbol.for(`TSS_SERVER_FUNCTION`),
  c = Symbol.for(`TSS_SERVER_FUNCTION_FACTORY`),
  l = `application/x-tss-framed`,
  u = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${l}`;
var d = /;\s*v=(\d+)/;
function f(e) {
  let t = e.match(d);
  return t ? parseInt(t[1], 10) : void 0;
}
function p(e) {
  let t = f(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var m = () => window.__TSS_START_OPTIONS__;
function h(e) {
  return e[e.length - 1];
}
function g(e) {
  return typeof e == `function`;
}
function _(e, t) {
  return g(e) ? e(t) : e;
}
var v = Object.prototype.hasOwnProperty,
  y = Object.prototype.propertyIsEnumerable;
function b(e) {
  for (let t in e) if (v.call(e, t)) return !0;
  return !1;
}
var ee = () => Object.create(null),
  te = (e, t) => x(e, t, ee);
function x(e, t, n = () => ({}), r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  let i = t,
    a = ie(e) && ie(i);
  if (!a && !(S(e) && S(i))) return i;
  let o = a ? e : ne(e);
  if (!o) return i;
  let s = a ? i : ne(i);
  if (!s) return i;
  let c = o.length,
    l = s.length,
    u = a ? Array(l) : n(),
    d = 0;
  for (let t = 0; t < l; t++) {
    let o = a ? t : s[t],
      l = e[o],
      f = i[o];
    if (l === f) {
      ((u[o] = l), (a ? t < c : v.call(e, o)) && d++);
      continue;
    }
    if (l === null || f === null || typeof l != `object` || typeof f != `object`) {
      u[o] = f;
      continue;
    }
    let p = x(l, f, n, r + 1);
    ((u[o] = p), p === l && d++);
  }
  return c === l && d === c ? e : u;
}
function ne(e) {
  let t = Object.getOwnPropertyNames(e);
  for (let n of t) if (!y.call(e, n)) return !1;
  let n = Object.getOwnPropertySymbols(e);
  if (n.length === 0) return t;
  let r = t;
  for (let t of n) {
    if (!y.call(e, t)) return !1;
    r.push(t);
  }
  return r;
}
function S(e) {
  if (!re(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!re(n) || !n.hasOwnProperty(`isPrototypeOf`));
}
function re(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ie(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ae(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!ae(e[r], t[r], n)) return !1;
    return !0;
  }
  if (S(e) && S(t)) {
    let r = n?.ignoreUndefined ?? !0;
    if (n?.partial) {
      for (let i in t) if ((!r || t[i] !== void 0) && !ae(e[i], t[i], n)) return !1;
      return !0;
    }
    let i = 0;
    if (!r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    let a = 0;
    for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !ae(e[o], t[o], n))) return !1;
    return i === a;
  }
  return !1;
}
function oe(e) {
  let t,
    n,
    r = new Promise((e, r) => {
      ((t = e), (n = r));
    });
  return (
    (r.status = `pending`),
    (r.resolve = (n) => {
      ((r.status = `resolved`), (r.value = n), t(n), e?.(n));
    }),
    (r.reject = (e) => {
      ((r.status = `rejected`), n(e));
    }),
    r
  );
}
function se(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
function ce(e) {
  return !!(e && typeof e == `object` && typeof e.then == `function`);
}
function le(e) {
  return e.replace(/[\x00-\x1f\x7f]/g, ``);
}
function ue(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return le(t);
}
var de = [`http:`, `https:`, `mailto:`, `tel:`];
function fe(e, t) {
  if (!e) return !1;
  try {
    let n = new URL(e);
    return !t.has(n.protocol);
  } catch {
    return !1;
  }
}
var pe = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  me = /[&><\u2028\u2029]/g;
function he(e) {
  return e.replace(me, (e) => pe[e]);
}
function ge(e) {
  if (!e || (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith(`//`)))
    return { path: e, handledProtocolRelativeURL: !1 };
  let t = /%25|%5C/gi,
    n = 0,
    r = ``,
    i;
  for (; (i = t.exec(e)) !== null; ) ((r += ue(e.slice(n, i.index)) + i[0]), (n = t.lastIndex));
  r += ue(n ? e.slice(n) : e);
  let a = !1;
  return (
    r.startsWith(`//`) && ((a = !0), (r = `/` + r.replace(/^\/+/, ``))),
    { path: r, handledProtocolRelativeURL: a }
  );
}
function _e(e) {
  return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function ve(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function C() {
  throw Error(`Invariant failed`);
}
function w(e) {
  let t = new Map(),
    n,
    r,
    i = (e) => {
      e.next &&
        (e.prev
          ? ((e.prev.next = e.next),
            (e.next.prev = e.prev),
            (e.next = void 0),
            r && ((r.next = e), (e.prev = r)))
          : ((e.next.prev = void 0),
            (n = e.next),
            (e.next = void 0),
            r && ((e.prev = r), (r.next = e))),
        (r = e));
    };
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (i(n), n.value);
    },
    set(a, o) {
      if (t.size >= e && n) {
        let e = n;
        (t.delete(e.key),
          e.next && ((n = e.next), (e.next.prev = void 0)),
          e === r && (r = void 0));
      }
      let s = t.get(a);
      if (s) ((s.value = o), i(s));
      else {
        let e = { key: a, value: o, prev: r };
        (r && (r.next = e), (r = e), (n ||= e), t.set(a, e));
      }
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var E = 4,
  ye = 5;
function be(e) {
  let t = e.indexOf(`{`);
  if (t === -1) return null;
  let n = e.indexOf(`}`, t);
  return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function D(e, t, n = new Uint16Array(6)) {
  let r = e.indexOf(`/`, t),
    i = r === -1 ? e.length : r,
    a = e.substring(t, i);
  if (!a || !a.includes(`$`))
    return ((n[0] = 0), (n[1] = t), (n[2] = t), (n[3] = i), (n[4] = i), (n[5] = i), n);
  if (a === `$`) {
    let r = e.length;
    return ((n[0] = 2), (n[1] = t), (n[2] = t), (n[3] = r), (n[4] = r), (n[5] = r), n);
  }
  if (a.charCodeAt(0) === 36)
    return ((n[0] = 1), (n[1] = t), (n[2] = t + 1), (n[3] = i), (n[4] = i), (n[5] = i), n);
  let o = be(a);
  if (o) {
    let [r, s] = o,
      c = a.charCodeAt(r + 1);
    if (c === 45) {
      if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
        let e = r + 3,
          a = s;
        if (e < a)
          return (
            (n[0] = 3),
            (n[1] = t + r),
            (n[2] = t + e),
            (n[3] = t + a),
            (n[4] = t + s + 1),
            (n[5] = i),
            n
          );
      }
    } else if (c === 36) {
      let a = r + 1,
        o = r + 2;
      return o === s
        ? ((n[0] = 2),
          (n[1] = t + r),
          (n[2] = t + a),
          (n[3] = t + o),
          (n[4] = t + s + 1),
          (n[5] = e.length),
          n)
        : ((n[0] = 1),
          (n[1] = t + r),
          (n[2] = t + o),
          (n[3] = t + s),
          (n[4] = t + s + 1),
          (n[5] = i),
          n);
    }
  }
  return ((n[0] = 0), (n[1] = t), (n[2] = t), (n[3] = i), (n[4] = i), (n[5] = i), n);
}
function O(e, t, n, r, i, a, o) {
  o?.(n);
  let s = r;
  {
    let r = n.fullPath ?? n.from,
      o = r.length,
      c = n.options?.caseSensitive ?? e,
      l = n.options?.params?.parse ?? n.options?.parseParams;
    for (; s < o; ) {
      let e = D(r, s, t),
        o,
        u = s,
        d = e[5];
      switch (((s = d + 1), a++, e[0])) {
        case 0: {
          let t = r.substring(e[2], e[3]);
          if (c) {
            let e = i.static?.get(t);
            if (e) o = e;
            else {
              i.static ??= new Map();
              let e = j(n.fullPath ?? n.from);
              ((e.parent = i), (e.depth = a), (o = e), i.static.set(t, e));
            }
          } else {
            let e = t.toLowerCase(),
              r = i.staticInsensitive?.get(e);
            if (r) o = r;
            else {
              i.staticInsensitive ??= new Map();
              let t = j(n.fullPath ?? n.from);
              ((t.parent = i), (t.depth = a), (o = t), i.staticInsensitive.set(e, t));
            }
          }
          break;
        }
        case 1: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.dynamic?.find(
                (e) => !e.parse && e.caseSensitive === f && e.prefix === p && e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = xe(1, n.fullPath ?? n.from, f, p, m);
            ((o = e), (e.depth = a), (e.parent = i), (i.dynamic ??= []), i.dynamic.push(e));
          }
          break;
        }
        case 3: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.optional?.find(
                (e) => !e.parse && e.caseSensitive === f && e.prefix === p && e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = xe(3, n.fullPath ?? n.from, f, p, m);
            ((o = e), (e.parent = i), (e.depth = a), (i.optional ??= []), i.optional.push(e));
          }
          break;
        }
        case 2: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            l = c && !!(t || s),
            f = t ? (l ? t : t.toLowerCase()) : void 0,
            p = s ? (l ? s : s.toLowerCase()) : void 0,
            m = xe(2, n.fullPath ?? n.from, l, f, p);
          ((o = m), (m.parent = i), (m.depth = a), (i.wildcard ??= []), i.wildcard.push(m));
        }
      }
      i = o;
    }
    if (l && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95) {
      let e = j(n.fullPath ?? n.from);
      ((e.kind = ye),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.pathless ??= []),
        i.pathless.push(e),
        (i = e));
    }
    let u = (n.path || !n.children) && !n.isRoot;
    if (u && r.endsWith(`/`)) {
      let e = j(n.fullPath ?? n.from);
      ((e.kind = E), (e.parent = i), a++, (e.depth = a), (i.index = e), (i = e));
    }
    ((i.parse = l ?? null),
      (i.priority = n.options?.params?.priority ?? 0),
      u && !i.route && ((i.route = n), (i.fullPath = n.fullPath ?? n.from)));
  }
  if (n.children) for (let r of n.children) O(e, t, r, s, i, a, o);
}
function k(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function A(e) {
  if (e.pathless) for (let t of e.pathless) A(t);
  if (e.static) for (let t of e.static.values()) A(t);
  if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) A(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(k);
    for (let t of e.dynamic) A(t);
  }
  if (e.optional?.length) {
    e.optional.sort(k);
    for (let t of e.optional) A(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(k);
    for (let t of e.wildcard) A(t);
  }
}
function j(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function xe(e, t, n, r, i) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Se(e, t) {
  let n = j(`/`),
    r = new Uint16Array(6);
  for (let t of e) O(!1, r, t, 1, n, 0);
  (A(n), (t.masksTree = n), (t.flatCache = w(1e3)));
}
function Ce(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n) return n;
  let r = N(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function we(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o || ((o = j(`/`)), O(t, new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)),
    N(r, o, n)
  );
}
function Te(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = N(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = Oe(a.route)), t.matchCache.set(r, a), a);
}
function M(e) {
  return e === `/` ? e : e.replace(/\/{1,}$/, ``);
}
function Ee(e, t = !1, n) {
  let r = j(e.fullPath),
    i = new Uint16Array(6),
    a = {},
    o = {},
    s = 0;
  return (
    O(t, i, e, 1, r, 0, (e) => {
      if ((n?.(e, s), e.id in a && C(), (a[e.id] = e), s !== 0 && e.path)) {
        let t = M(e.fullPath);
        (!o[t] || e.fullPath.endsWith(`/`)) && (o[t] = e);
      }
      s++;
    }),
    A(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: w(1e3),
        matchCache: w(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: a,
      routesByPath: o,
    }
  );
}
function N(e, t, n = !1) {
  let r = e.split(`/`),
    i = Ae(e, r, t, n);
  if (!i) return null;
  let [a] = De(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function De(e, t, n) {
  let r = ke(n.node),
    i = null,
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.segment ?? 0;
  for (; s < r.length; o++, s++, c++, l++) {
    let u = r[s];
    if (u.kind === E) break;
    if (u.kind === ye) {
      (l--, o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1)) {
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0;
      if (e.charCodeAt(t) === 123) {
        let n = u.suffix?.length ?? 0,
          r = e.substring(t + 2, e.length - n - 1),
          i = d.substring(t, d.length - n);
        a[r] = decodeURIComponent(i);
      } else {
        let t = e.substring(1);
        a[t] = decodeURIComponent(d);
      }
    } else if (u.kind === 3) {
      if (n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0,
        r = u.suffix?.length ?? 0,
        p = e.substring(t + 3, e.length - r - 1),
        m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
      m && (a[p] = decodeURIComponent(m));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(f + (t.prefix?.length ?? 0), e.length - (t.suffix?.length ?? 0)),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, segment: l }]
  );
}
function Oe(e) {
  let t = [e];
  for (; e.parentRoute; ) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function ke(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function Ae(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !h(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [{ node: n, index: 1, skipped: 0, depth: 1, statics: 0, dynamics: 0, optionals: 0 }],
    c = null,
    l = null;
  for (; s.length; ) {
    let n = s.pop(),
      { node: i, index: u, skipped: d, depth: f, statics: p, dynamics: m, optionals: h } = n,
      { extract: g, rawParams: _ } = n;
    if (i.kind === 2 && i.route && !Pe(l, n)) continue;
    if (i.parse) {
      if (!Ne(e, t, n)) continue;
      ((_ = n.rawParams), (g = n.extract));
    }
    r && i.route && i.kind !== E && Pe(c, n) && (c = n);
    let v = u === o;
    if (
      v &&
      (i.route && (!a || i.kind === E || i.kind === 2) && Pe(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let y = v ? void 0 : t[u],
      b;
    if (v && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        },
        r = !0;
      if ((i.index.parse && (Ne(e, t, n) || (r = !1)), r)) {
        if (!m && !h && !d && Me(p, o)) return n;
        Pe(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(r && (v || !(n.caseSensitive ? y : (b ??= y.toLowerCase())).startsWith(r)))) {
          if (a) {
            if (v) continue;
            let e = t.slice(u).join(`/`).slice(-a.length);
            if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            depth: f + 1,
            statics: p,
            dynamics: m,
            optionals: h,
            extract: g,
            rawParams: _,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << f),
        t = f + 1;
      for (let n = i.optional.length - 1; n >= 0; n--) {
        let r = i.optional[n];
        s.push({
          node: r,
          index: u,
          skipped: e,
          depth: t,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
      if (!v)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let n = i.optional[e],
            { prefix: r, suffix: a } = n;
          if (r || a) {
            let e = n.caseSensitive ? y : (b ??= y.toLowerCase());
            if ((r && !e.startsWith(r)) || (a && !e.endsWith(a))) continue;
          }
          s.push({
            node: n,
            index: u + 1,
            skipped: d,
            depth: t,
            statics: p,
            dynamics: m,
            optionals: h + je(o, u),
            extract: g,
            rawParams: _,
          });
        }
    }
    if (!v && i.dynamic && y)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? y : (b ??= y.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m + je(o, u),
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    if (!v && i.staticInsensitive) {
      let e = i.staticInsensitive.get((b ??= y.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + je(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (!v && i.static) {
      let e = i.static.get(y);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + je(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (i.pathless) {
      let e = f + 1;
      for (let t = i.pathless.length - 1; t >= 0; t--) {
        let n = i.pathless[t];
        s.push({
          node: n,
          index: u,
          skipped: d,
          depth: e,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return ((c.rawParams ??= Object.create(null)), (c.rawParams[`**`] = decodeURIComponent(r)), c);
  }
  return null;
}
function je(e, t) {
  return 2 ** (e - t - 1);
}
function Me(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function Ne(e, t, n) {
  let r, i;
  try {
    [r, i] = De(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Pe(e, t) {
  return e
    ? t.statics > e.statics ||
        (t.statics === e.statics &&
          (t.dynamics > e.dynamics ||
            (t.dynamics === e.dynamics &&
              (t.optionals > e.optionals ||
                (t.optionals === e.optionals &&
                  ((t.node.kind === E) > (e.node.kind === E) ||
                    ((t.node.kind === E) == (e.node.kind === E) && t.depth > e.depth)))))))
    : !0;
}
function Fe(e) {
  return Ie(e.filter((e) => e !== void 0).join(`/`));
}
function Ie(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function Le(e) {
  return e === `/` ? e : e.replace(/^\/{1,}/, ``);
}
function Re(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/{1,}$/, ``) : e;
}
function ze(e) {
  return Re(Le(e));
}
function Be(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function Ve(e, t, n) {
  return Be(e, n) === Be(t, n);
}
function He({ base: e, to: t, trailingSlash: n = `never`, cache: r }) {
  let i = t.startsWith(`/`),
    a = !i && t === `.`,
    o;
  if (r) {
    o = i ? t : a ? e : e + `\0` + t;
    let n = r.get(o);
    if (n) return n;
  }
  let s;
  if (a) s = e.split(`/`);
  else if (i) s = t.split(`/`);
  else {
    for (s = e.split(`/`); s.length > 1 && h(s) === ``; ) s.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && s.push(r)
          : (s = [r])
        : r === `..`
          ? s.pop()
          : r === `.` || s.push(r);
    }
  }
  s.length > 1 && (h(s) === `` ? n === `never` && s.pop() : n === `always` && s.push(``));
  let c = Ie(s.join(`/`)) || `/`;
  return (o && r && r.set(o, c), c);
}
function Ue(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = Array.from(t.keys())
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`))
      .join(`|`),
    r = new RegExp(n, `g`);
  return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function We(e, t, n) {
  let r = t[e];
  return typeof r == `string`
    ? e === `_splat`
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split(`/`)
            .map((e) => Ke(e, n))
            .join(`/`)
      : Ke(r, n)
    : r;
}
function Ge({ path: e, params: t, decoder: n, ...r }) {
  let i = !1,
    a = Object.create(null);
  if (!e || e === `/`) return { interpolatedPath: `/`, usedParams: a, isMissingParams: i };
  if (!e.includes(`$`)) return { interpolatedPath: e, usedParams: a, isMissingParams: i };
  let o = e.length,
    s = 0,
    c,
    l = ``;
  for (; s < o; ) {
    let r = s;
    c = D(e, r, c);
    let o = c[5];
    if (((s = o + 1), r === o)) continue;
    let u = c[0];
    if (u === 0) {
      l += `/` + e.substring(r, o);
      continue;
    }
    if (u === 2) {
      let s = t._splat;
      ((a._splat = s), (a[`*`] = s));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o);
      if (!s) {
        ((i = !0), (u || d) && (l += `/` + u + d));
        continue;
      }
      let f = We(`_splat`, t, n);
      l += `/` + u + f + d;
      continue;
    }
    if (u === 1) {
      let s = e.substring(c[2], c[3]);
      (!i && !(s in t) && (i = !0), (a[s] = t[s]));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = We(s, t, n) ?? `undefined`;
      l += `/` + u + f + d;
      continue;
    }
    if (u === 3) {
      let i = e.substring(c[2], c[3]),
        s = t[i];
      if (s == null) continue;
      a[i] = s;
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = We(i, t, n) ?? ``;
      l += `/` + u + f + d;
      continue;
    }
  }
  return (
    e.endsWith(`/`) && (l += `/`),
    { usedParams: a, interpolatedPath: l || `/`, isMissingParams: i }
  );
}
function Ke(e, t) {
  let n = encodeURIComponent(e);
  return t?.(n) ?? n;
}
function qe(e) {
  return e?.isNotFound === !0;
}
function Je(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function Ye(e) {
  return e ? (e === `false` ? !1 : e === `true` ? !0 : e * 0 == 0 && +e + `` === e ? +e : e) : ``;
}
function Xe(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null ? (n[e] = Ye(r)) : Array.isArray(t) ? t.push(Ye(r)) : (n[e] = [t, Ye(r)]);
  }
  return n;
}
function Ze(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function Qe(e) {
  return e instanceof Response && !!e.options;
}
function $e(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return Ze(e);
}
var et = `Error preloading route! ☝️`,
  tt = ((e) => (
    (e[(e.AggregateError = 1)] = `AggregateError`),
    (e[(e.ArrowFunction = 2)] = `ArrowFunction`),
    (e[(e.ErrorPrototypeStack = 4)] = `ErrorPrototypeStack`),
    (e[(e.ObjectAssign = 8)] = `ObjectAssign`),
    (e[(e.BigIntTypedArray = 16)] = `BigIntTypedArray`),
    (e[(e.RegExp = 32)] = `RegExp`),
    e
  ))(tt || {}),
  P = Symbol.asyncIterator,
  nt = Symbol.hasInstance,
  F = Symbol.isConcatSpreadable,
  I = Symbol.iterator,
  rt = Symbol.match,
  it = Symbol.matchAll,
  at = Symbol.replace,
  ot = Symbol.search,
  st = Symbol.species,
  ct = Symbol.split,
  lt = Symbol.toPrimitive,
  L = Symbol.toStringTag,
  ut = Symbol.unscopables,
  dt = {
    [P]: 0,
    [nt]: 1,
    [F]: 2,
    [I]: 3,
    [rt]: 4,
    [it]: 5,
    [at]: 6,
    [ot]: 7,
    [st]: 8,
    [ct]: 9,
    [lt]: 10,
    [L]: 11,
    [ut]: 12,
  },
  ft = { 0: P, 1: nt, 2: F, 3: I, 4: rt, 5: it, 6: at, 7: ot, 8: st, 9: ct, 10: lt, 11: L, 12: ut },
  R = void 0,
  pt = { 2: !0, 3: !1, 1: R, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  mt = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  ht = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function z(e, t, n, r, i, a, o, s, c, l, u, d) {
  return { t: e, i: t, s: n, c: r, m: i, p: a, e: o, a: s, f: c, b: l, o: u, l: d };
}
function B(e) {
  return z(2, R, e, R, R, R, R, R, R, R, R, R);
}
var gt = B(2),
  _t = B(3),
  vt = B(1),
  yt = B(0),
  bt = B(4),
  xt = B(5),
  St = B(6),
  Ct = B(7);
function wt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return R;
  }
}
function V(e) {
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = wt(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function Tt(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function H(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Tt);
}
var Et = `__SEROVAL_REFS__`,
  Dt = new Map(),
  U = new Map();
function Ot(e) {
  return Dt.has(e);
}
function kt(e) {
  return U.has(e);
}
function At(e) {
  if (Ot(e)) return Dt.get(e);
  throw new vn(e);
}
function jt(e) {
  if (kt(e)) return U.get(e);
  throw new yn(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, Et, {
      value: U,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, Et, {
        value: U,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, Et, {
          value: U,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, Et, {
          value: U,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Mt(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Nt(e) {
  let t = mt[Mt(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Pt(e, t) {
  let n = Nt(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack` ? t & 4 && ((n ||= {}), (n[o] = e[o])) : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function Ft(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e);
}
function It(e) {
  switch (e) {
    case 1 / 0:
      return xt;
    case -1 / 0:
      return St;
  }
  return e === e ? (Object.is(e, -0) ? bt : z(0, R, e, R, R, R, R, R, R, R, R, R)) : Ct;
}
function Lt(e) {
  return z(1, R, V(e), R, R, R, R, R, R, R, R, R);
}
function Rt(e) {
  return z(3, R, `` + e, R, R, R, R, R, R, R, R, R);
}
function zt(e) {
  return z(4, e, R, R, R, R, R, R, R, R, R, R);
}
function Bt(e, t) {
  let n = t.valueOf();
  return z(5, e, n === n ? t.toISOString() : ``, R, R, R, R, R, R, R, R, R);
}
function Vt(e, t) {
  return z(6, e, R, V(t.source), t.flags, R, R, R, R, R, R, R);
}
function Ht(e, t) {
  return z(17, e, dt[t], R, R, R, R, R, R, R, R, R);
}
function Ut(e, t) {
  return z(18, e, V(At(t)), R, R, R, R, R, R, R, R, R);
}
function Wt(e, t, n) {
  return z(25, e, n, V(t), R, R, R, R, R, R, R, R);
}
function Gt(e, t, n) {
  return z(9, e, R, R, R, R, R, n, R, R, Ft(t), R);
}
function Kt(e, t) {
  return z(21, e, R, R, R, R, R, R, t, R, R, R);
}
function qt(e, t, n) {
  return z(15, e, R, t.constructor.name, R, R, R, R, n, t.byteOffset, R, t.length);
}
function Jt(e, t, n) {
  return z(16, e, R, t.constructor.name, R, R, R, R, n, t.byteOffset, R, t.byteLength);
}
function Yt(e, t, n) {
  return z(20, e, R, R, R, R, R, R, n, t.byteOffset, R, t.byteLength);
}
function Xt(e, t, n) {
  return z(13, e, Mt(t), R, V(t.message), n, R, R, R, R, R, R);
}
function Zt(e, t, n) {
  return z(14, e, Mt(t), R, V(t.message), n, R, R, R, R, R, R);
}
function Qt(e, t) {
  return z(7, e, R, R, R, R, R, t, R, R, R, R);
}
function $t(e, t) {
  return z(28, R, R, R, R, R, R, [e, t], R, R, R, R);
}
function en(e, t) {
  return z(30, R, R, R, R, R, R, [e, t], R, R, R, R);
}
function tn(e, t, n) {
  return z(31, e, R, R, R, R, R, n, t, R, R, R);
}
function nn(e, t) {
  return z(32, e, R, R, R, R, R, R, t, R, R, R);
}
function rn(e, t) {
  return z(33, e, R, R, R, R, R, R, t, R, R, R);
}
function an(e, t) {
  return z(34, e, R, R, R, R, R, R, t, R, R, R);
}
function on(e, t, n, r) {
  return z(35, e, n, R, R, R, R, t, R, R, R, r);
}
var { toString: sn } = Object.prototype,
  cn = { parsing: 1, serialization: 2, deserialization: 3 };
function ln(e) {
  return `Seroval Error (step: ${cn[e]})`;
}
var un = (e, t) => ln(e),
  dn = class extends Error {
    constructor(e, t) {
      (super(un(e, t)), (this.cause = t));
    }
  },
  fn = class extends dn {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  pn = class extends dn {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function W(e) {
  return `Seroval Error (specific: ${e})`;
}
var mn = class extends Error {
    constructor(e) {
      (super(W(1)), (this.value = e));
    }
  },
  hn = class extends Error {
    constructor(e) {
      super(W(2));
    }
  },
  gn = class extends Error {
    constructor(e) {
      super(W(3));
    }
  },
  _n = class extends Error {
    constructor(e) {
      super(W(4));
    }
  },
  vn = class extends Error {
    constructor(e) {
      (super(W(5)), (this.value = e));
    }
  },
  yn = class extends Error {
    constructor(e) {
      super(W(6));
    }
  },
  bn = class extends Error {
    constructor(e) {
      super(W(7));
    }
  },
  G = class extends Error {
    constructor(e) {
      super(W(8));
    }
  },
  xn = class extends Error {
    constructor(e) {
      super(W(9));
    }
  },
  Sn = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  Cn = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  };
(Cn.toString(),
  ((e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  }).toString(),
  ((e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  }).toString());
var wn = () => {
  let e = [],
    t = [],
    n = !0,
    r = !1,
    i = 0,
    a = (e, n, r) => {
      for (r = 0; r < i; r++) t[r] && t[r][n](e);
    },
    o = (t, i, a, o) => {
      for (i = 0, a = e.length; i < a; i++)
        ((o = e[i]), !n && i === a - 1 ? t[r ? `return` : `throw`](o) : t.next(o));
    },
    s = (e, r) => (
      n && ((r = i++), (t[r] = e)),
      o(e),
      () => {
        n && ((t[r] = t[i]), (t[i--] = void 0));
      }
    );
  return {
    __SEROVAL_STREAM__: !0,
    on: (e) => s(e),
    next: (t) => {
      n && (e.push(t), a(t, `next`));
    },
    throw: (i) => {
      n && (e.push(i), a(i, `throw`), (n = !1), (r = !1), (t.length = 0));
    },
    return: (i) => {
      n && (e.push(i), a(i, `return`), (n = !1), (r = !0), (t.length = 0));
    },
  };
};
wn.toString();
var Tn = (e) => (t) => () => {
  let n = 0,
    r = {
      [e]: () => r,
      next: () => {
        if (n > t.d) return { done: !0, value: void 0 };
        let e = n++,
          r = t.v[e];
        if (e === t.t) throw r;
        return { done: e === t.d, value: r };
      },
    };
  return r;
};
Tn.toString();
var En = (e, t) => (n) => () => {
  let r = 0,
    i = -1,
    a = !1,
    o = [],
    s = [],
    c = (e = 0, t = s.length) => {
      for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
    };
  n.on({
    next: (e) => {
      let t = s.shift();
      (t && t.s({ done: !1, value: e }), o.push(e));
    },
    throw: (e) => {
      let t = s.shift();
      (t && t.f(e), c(), (i = o.length), (a = !0), o.push(e));
    },
    return: (e) => {
      let t = s.shift();
      (t && t.s({ done: !0, value: e }), c(), (i = o.length), o.push(e));
    },
  });
  let l = {
    [e]: () => l,
    next: () => {
      if (i === -1) {
        let e = r++;
        if (e >= o.length) {
          let e = t();
          return (s.push(e), e.p);
        }
        return { done: !1, value: o[e] };
      }
      if (r > i) return { done: !0, value: void 0 };
      let e = r++,
        n = o[e];
      if (e !== i) return { done: !1, value: n };
      if (a) throw n;
      return { done: !0, value: n };
    },
  };
  return l;
};
En.toString();
var Dn = (e) => {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
};
Dn.toString();
function On(e) {
  return `__SEROVAL_SEQUENCE__` in e;
}
function kn(e, t, n) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: n };
}
function An(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[I]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), t.push(e));
    }
  return kn(t, n, r);
}
var jn = Tn(I);
function Mn(e) {
  return jn(e);
}
var Nn = {},
  Pn = {},
  Fn = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function In(e) {
  return `__SEROVAL_STREAM__` in e;
}
function K() {
  return wn();
}
function Ln(e) {
  let t = K(),
    n = e[P]();
  async function r() {
    try {
      let e = await n.next();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var Rn = En(P, Cn);
function zn(e) {
  return Rn(e);
}
async function Bn(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function Vn(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function Hn(e, t) {
  e.marked.add(t);
}
function Un(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function Wn(e, t) {
  let n = e.refs.get(t);
  return n == null ? { type: 0, value: Un(e, t) } : (Hn(e, n), { type: 1, value: zt(n) });
}
function Gn(e, t) {
  let n = Wn(e, t);
  return n.type === 1 ? n : Ot(t) ? { type: 2, value: Ut(n.value, t) } : n;
}
function q(e, t) {
  let n = Gn(e, t);
  if (n.type !== 0) return n.value;
  if (t in dt) return Ht(n.value, t);
  throw new mn(t);
}
function Kn(e, t) {
  let n = Wn(e, Fn[t]);
  return n.type === 1 ? n.value : z(26, n.value, t, R, R, R, R, R, R, R, R, R);
}
function qn(e) {
  let t = Wn(e, Nn);
  return t.type === 1 ? t.value : z(27, t.value, R, R, R, R, R, R, q(e, I), R, R, R);
}
function Jn(e) {
  let t = Wn(e, Pn);
  return t.type === 1 ? t.value : z(29, t.value, R, R, R, R, R, [Kn(e, 1), q(e, P)], R, R, R, R);
}
function Yn(e, t, n, r) {
  return z(n ? 11 : 10, e, R, R, R, r, R, R, R, R, Ft(t), R);
}
function Xn(e, t, n, r) {
  return z(8, t, R, R, R, R, { k: n, v: r }, R, Kn(e, 0), R, R, R);
}
function Zn(e, t, n) {
  let r = new Uint8Array(n),
    i = ``;
  for (let e = 0, t = r.length; e < t; e++) i += String.fromCharCode(r[e]);
  return z(19, t, V(btoa(i)), R, R, R, R, R, Kn(e, 5), R, R, R);
}
function Qn(e, t) {
  return { base: Vn(e, t), child: void 0 };
}
var $n = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return J(this._p, this.depth, e);
  }
};
async function er(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++) i in n ? (r[i] = await J(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function tr(e, t, n, r) {
  return Gt(n, r, await er(e, t, r));
}
async function nr(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++) (i.push(V(r[n][0])), a.push(await J(e, t, r[n][1])));
  return (
    I in n && (i.push(q(e.base, I)), a.push($t(qn(e.base), await J(e, t, An(n))))),
    P in n && (i.push(q(e.base, P)), a.push(en(Jn(e.base), await J(e, t, Ln(n))))),
    L in n && (i.push(q(e.base, L)), a.push(Lt(n[L]))),
    F in n && (i.push(q(e.base, F)), a.push(n[F] ? gt : _t)),
    { k: i, v: a }
  );
}
async function rr(e, t, n, r, i) {
  return Yn(n, r, i, await nr(e, t, r));
}
async function ir(e, t, n, r) {
  return Kt(n, await J(e, t, r.valueOf()));
}
async function ar(e, t, n, r) {
  return qt(n, r, await J(e, t, r.buffer));
}
async function or(e, t, n, r) {
  return Jt(n, r, await J(e, t, r.buffer));
}
async function sr(e, t, n, r) {
  return Yt(n, r, await J(e, t, r.buffer));
}
async function cr(e, t, n, r) {
  let i = Pt(r, e.base.features);
  return Xt(n, r, i ? await nr(e, t, i) : R);
}
async function lr(e, t, n, r) {
  let i = Pt(r, e.base.features);
  return Zt(n, r, i ? await nr(e, t, i) : R);
}
async function ur(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries()) (i.push(await J(e, t, n)), a.push(await J(e, t, o)));
  return Xn(e.base, n, i, a);
}
async function dr(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await J(e, t, n));
  return Qt(n, i);
}
async function fr(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return Wt(n, o.tag, await o.parse.async(r, new $n(e, t), { id: n }));
    }
  return R;
}
async function pr(e, t, n, r) {
  let [i, a] = await Bn(r);
  return z(12, n, i, R, R, R, R, R, await J(e, t, a), R, R, R);
}
function mr(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (Hn(this.base, t),
          J(this, e, n).then(
            (e) => {
              a.push(nn(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (Hn(this.base, t),
          J(this, e, n).then(
            (e) => {
              (a.push(rn(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (Hn(this.base, t),
          J(this, e, n).then(
            (e) => {
              (a.push(an(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function hr(e, t, n, r) {
  return tn(n, Kn(e.base, 4), await new Promise(mr.bind(e, t, n, r)));
}
async function gr(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await J(e, t, r.v[n]);
  return on(n, i, r.t, r.d);
}
async function _r(e, t, n, r) {
  if (Array.isArray(r)) return tr(e, t, n, r);
  if (In(r)) return hr(e, t, n, r);
  if (On(r)) return gr(e, t, n, r);
  let i = r.constructor;
  if (i === Sn) return J(e, t, r.replacement);
  let a = await fr(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return rr(e, t, n, r, !1);
    case R:
      return rr(e, t, n, r, !0);
    case Date:
      return Bt(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return cr(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return ir(e, t, n, r);
    case ArrayBuffer:
      return Zn(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return ar(e, t, n, r);
    case DataView:
      return sr(e, t, n, r);
    case Map:
      return ur(e, t, n, r);
    case Set:
      return dr(e, t, n, r);
    default:
      break;
  }
  if (i === Promise || r instanceof Promise) return pr(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return Vt(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return or(e, t, n, r);
      default:
        break;
    }
  if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
    return lr(e, t, n, r);
  if (r instanceof Error) return cr(e, t, n, r);
  if (I in r || P in r) return rr(e, t, n, r, !!i);
  throw new mn(r);
}
async function vr(e, t, n) {
  let r = Gn(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await fr(e, t, r.value, n);
  if (i) return i;
  throw new mn(n);
}
async function J(e, t, n) {
  switch (typeof n) {
    case `boolean`:
      return n ? gt : _t;
    case `undefined`:
      return vt;
    case `string`:
      return Lt(n);
    case `number`:
      return It(n);
    case `bigint`:
      return Rt(n);
    case `object`:
      if (n) {
        let r = Gn(e.base, n);
        return r.type === 0 ? await _r(e, t + 1, r.value, n) : r.value;
      }
      return yt;
    case `symbol`:
      return q(e.base, n);
    case `function`:
      return vr(e, t, n);
    default:
      throw new mn(n);
  }
}
async function yr(e, t) {
  try {
    return await J(e, 0, t);
  } catch (e) {
    throw e instanceof fn ? e : new fn(e);
  }
}
var br = ((e) => ((e[(e.Vanilla = 1)] = `Vanilla`), (e[(e.Cross = 2)] = `Cross`), e))(br || {});
function Y(e) {
  return e;
}
function xr(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && xr(e, r.extends));
  }
}
function Sr(e) {
  if (e) {
    let t = new Set();
    return (xr(t, e), [...t]);
  }
}
function Cr(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new bn(e);
  }
}
var wr = 1e6,
  Tr = 1e4,
  Er = 2e4;
function Dr(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Or = 1e3;
function kr(e, t) {
  let n = t.refs || new Map();
  return (
    `types` in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: t.features ?? 63 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Or,
    }
  );
}
function Ar(e) {
  return { mode: 2, base: kr(2, e), child: R };
}
var jr = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return Z(this._p, this.depth, e);
  }
};
function Mr(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new G({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Nr(e, t, n) {
  return (Mr(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function Pr(e, t, n) {
  return (Mr(e.base, t), e.base.refs.set(t, n), n);
}
function X(e, t, n) {
  return e.mode === 1 ? Nr(e, t, n) : Pr(e, t, n);
}
function Fr(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new G(e);
}
function Ir(e, t) {
  return X(e, t.i, jt(H(t.s)));
}
function Lr(e, t, n) {
  let r = n.a,
    i = r.length,
    a = X(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = Z(e, t, o)));
  return (Dr(a, n.o), a);
}
function Rr(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function zr(e) {
  switch (e) {
    case P:
    case F:
    case L:
    case I:
      return !0;
    default:
      return !1;
  }
}
function Br(e, t, n) {
  Rr(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, { value: n, configurable: !0, enumerable: !0, writable: !0 });
}
function Vr(e, t, n, r, i) {
  if (typeof r == `string`) Br(n, H(r), Z(e, t, i));
  else {
    let a = Z(e, t, r);
    switch (typeof a) {
      case `string`:
        Br(n, a, Z(e, t, i));
        break;
      case `symbol`:
        zr(a) && (n[a] = Z(e, t, i));
        break;
      default:
        throw new G(r);
    }
  }
}
function Hr(e, t, n) {
  e.base.refs.types.set(t, n);
}
function Ur(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new G(t);
}
function Wr(e, t, n, r) {
  let i = n.k;
  if (i.length > 0) for (let a = 0, o = n.v, s = i.length; a < s; a++) Vr(e, t, r, i[a], o[a]);
  return r;
}
function Gr(e, t, n) {
  let r = X(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (Wr(e, t, n.p, r), Dr(r, n.o), r);
}
function Kr(e, t) {
  return X(e, t.i, new Date(t.s));
}
function qr(e, t) {
  if (e.base.features & 32) {
    let n = H(t.c);
    if (n.length > Er) throw new G(t);
    return X(e, t.i, new RegExp(n, t.m));
  }
  throw new hn(t);
}
function Jr(e, t, n) {
  let r = X(e, n.i, new Set());
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(Z(e, t, a[i]));
  return r;
}
function Yr(e, t, n) {
  let r = X(e, n.i, new Map());
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(Z(e, t, a[i]), Z(e, t, o[i]));
  return r;
}
function Xr(e, t) {
  if (t.s.length > wr) throw new G(t);
  return X(e, t.i, Dn(H(t.s)));
}
function Zr(e, t, n) {
  let r = Cr(n.c),
    i = Z(e, t, n.f),
    a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new G(n);
  return X(e, n.i, new r(i, a, n.l));
}
function Qr(e, t, n) {
  let r = Z(e, t, n.f),
    i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new G(n);
  return X(e, n.i, new DataView(r, i, n.l));
}
function $r(e, t, n, r) {
  if (n.p) {
    let i = Wr(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function ei(e, t, n) {
  return $r(e, t, n, X(e, n.i, AggregateError([], H(n.m))));
}
function ti(e, t, n) {
  let r = Fr(n, ht, n.s);
  return $r(e, t, n, X(e, n.i, new r(H(n.m))));
}
function ni(e, t, n) {
  let r = Cn(),
    i = X(e, n.i, r.p),
    a = Z(e, t, n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function ri(e, t, n) {
  return X(e, n.i, Object(Z(e, t, n.f)));
}
function ii(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = H(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i) return X(e, n.i, o.deserialize(n.s, new jr(e, t), { id: n.i }));
    }
  }
  throw new gn(n.c);
}
function ai(e, t) {
  let n = X(e, t.i, X(e, t.s, Cn()).p);
  return (Hr(e, t.s, 22), n);
}
function oi(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ur(e, n, n.i, 22), r.s(Z(e, t, n.a[1])), R);
  throw new _n(`Promise`);
}
function si(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ur(e, n, n.i, 22), r.f(Z(e, t, n.a[1])), R);
  throw new _n(`Promise`);
}
function ci(e, t, n) {
  return (Z(e, t, n.a[0]), Mn(Z(e, t, n.a[1])));
}
function li(e, t, n) {
  return (Z(e, t, n.a[0]), zn(Z(e, t, n.a[1])));
}
function ui(e, t, n) {
  let r = X(e, n.i, K());
  Hr(e, n.i, 31);
  let i = n.a,
    a = i.length;
  if (a) for (let n = 0; n < a; n++) Z(e, t, i[n]);
  return r;
}
function di(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ur(e, n, n.i, 31), r.next(Z(e, t, n.f)), R);
  throw new _n(`Stream`);
}
function fi(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ur(e, n, n.i, 31), r.throw(Z(e, t, n.f)), R);
  throw new _n(`Stream`);
}
function pi(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) return (Ur(e, n, n.i, 31), r.return(Z(e, t, n.f)), R);
  throw new _n(`Stream`);
}
function mi(e, t, n) {
  return (Z(e, t, n.f), R);
}
function hi(e, t, n) {
  return (Z(e, t, n.a[1]), R);
}
function gi(e, t, n) {
  let r = X(e, n.i, kn([], n.s, n.l));
  for (let i = 0, a = n.a.length; i < a; i++) r.v[i] = Z(e, t, n.a[i]);
  return r;
}
function Z(e, t, n) {
  if (t > e.base.depthLimit) throw new xn(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return Fr(n, pt, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return H(String(n.s));
    case 3:
      if (String(n.s).length > Tr) throw new G(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return Ir(e, n);
    case 9:
      return Lr(e, t, n);
    case 10:
    case 11:
      return Gr(e, t, n);
    case 5:
      return Kr(e, n);
    case 6:
      return qr(e, n);
    case 7:
      return Jr(e, t, n);
    case 8:
      return Yr(e, t, n);
    case 19:
      return Xr(e, n);
    case 16:
    case 15:
      return Zr(e, t, n);
    case 20:
      return Qr(e, t, n);
    case 14:
      return ei(e, t, n);
    case 13:
      return ti(e, t, n);
    case 12:
      return ni(e, t, n);
    case 17:
      return Fr(n, ft, n.s);
    case 21:
      return ri(e, t, n);
    case 25:
      return ii(e, t, n);
    case 22:
      return ai(e, n);
    case 23:
      return oi(e, t, n);
    case 24:
      return si(e, t, n);
    case 28:
      return ci(e, t, n);
    case 30:
      return li(e, t, n);
    case 31:
      return ui(e, t, n);
    case 32:
      return di(e, t, n);
    case 33:
      return fi(e, t, n);
    case 34:
      return pi(e, t, n);
    case 27:
      return mi(e, t, n);
    case 29:
      return hi(e, t, n);
    case 35:
      return gi(e, t, n);
    default:
      throw new hn(n);
  }
}
function _i(e, t) {
  try {
    return Z(e, 0, t);
  } catch (e) {
    throw new pn(e);
  }
}
var vi = (() => T).toString();
/=>/.test(vi);
function yi(e, t) {
  return _i(
    Ar({
      plugins: Sr(t.plugins),
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function bi(e, t = {}) {
  let n = Qn(1, { plugins: Sr(t.plugins), disabledFeatures: t.disabledFeatures });
  return { t: await yr(n, e), f: n.base.features, m: Array.from(n.base.marked) };
}
function xi(e) {
  return e;
}
function Si(e) {
  return Y({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Ci = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  wi = globalThis.Buffer,
  Ti = !!wi && typeof wi.from == `function`;
function Ei(e) {
  if (e.length === 0) return ``;
  if (Ti) return wi.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function Di(e) {
  if (e.length === 0) return new Uint8Array();
  if (Ti) {
    let t = wi.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var Oi = Object.create(null),
  ki = Object.create(null),
  Ai = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(Di(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  ji = new TextEncoder(),
  Mi = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string` ? t.enqueue(ji.encode(e)) : t.enqueue(Di(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Ni = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  Pi = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Fi(e) {
  let t = K(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(Ei(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function Ii(e) {
  let t = K(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: Ei(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var Li = Y({
  tag: `tss/RawStream`,
  extends: [
    Y({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === Oi;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Ni;
      },
      deserialize(e, t, n) {
        return Oi;
      },
    }),
    Y({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === ki;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Pi;
      },
      deserialize(e, t, n) {
        return ki;
      },
    }),
  ],
  test(e) {
    return e instanceof Ci;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? ki : Oi;
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(K()) };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? ki : Oi,
        i = e.hint === `text` ? Ii(e.stream) : Fi(e.stream);
      return { hint: await t.parse(e.hint), factory: await t.parse(r), stream: await t.parse(i) };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? ki : Oi,
        i = e.hint === `text` ? Ii(e.stream) : Fi(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? Mi(r) : Ai(r);
  },
});
function Ri(e) {
  return Y({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(typeof n?.deserialize == `function` ? n.deserialize(t.streamId) : t.streamId);
    },
  });
}
var zi = Y({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Q = {},
  Bi = (e) =>
    new ReadableStream({
      start: (t) => {
        e.on({
          next: (e) => {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw: (e) => {
            t.error(e);
          },
          return: () => {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Vi = Y({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === Q;
    },
    parse: {
      sync() {
        return Q;
      },
      async async() {
        return await Promise.resolve(Q);
      },
      stream() {
        return Q;
      },
    },
    serialize() {
      return Bi.toString();
    },
    deserialize() {
      return Q;
    },
  });
function Hi(e) {
  let t = K(),
    n = e.getReader();
  async function r() {
    try {
      let e = await n.read();
      e.done ? t.return(e.value) : (t.next(e.value), await r());
    } catch (e) {
      t.throw(e);
    }
  }
  return (r().catch(() => {}), t);
}
var Ui = [
  zi,
  Li,
  Y({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [Vi],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(Q), stream: t.parse(K()) };
      },
      async async(e, t) {
        return { factory: await t.parse(Q), stream: await t.parse(Hi(e)) };
      },
      stream(e, t) {
        return { factory: t.parse(Q), stream: t.parse(Hi(e)) };
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      return Bi(t.deserialize(e.stream));
    },
  }),
];
function Wi() {
  return [...(m()?.serializationAdapters?.map(Si) ?? []), ...Ui];
}
var Gi = new TextDecoder(),
  Ki = new Uint8Array(),
  qi = 16 * 1024 * 1024,
  Ji = 32 * 1024 * 1024,
  Yi = 1024,
  Xi = 1e5;
function Zi(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= Yi) throw Error(`Too many raw streams in framed response (max ${Yi})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function d(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function f() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function p(e) {
        if (e === 0) return Ki;
        let t = new Uint8Array(e),
          n = 0,
          r = e;
        for (; r > 0 && c.length > 0; ) {
          let e = c[0];
          if (!e) break;
          let i = Math.min(e.length, r);
          (t.set(e.subarray(0, i), n),
            (n += i),
            (r -= i),
            i === e.length ? c.shift() : (c[0] = e.subarray(i)));
        }
        return ((l -= e), t);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > Ji) throw Error(`Framed response buffer exceeded ${Ji} bytes`);
            for (c.push(a), l += a.length; ; ) {
              let e = f();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== u.JSON && n !== u.CHUNK && n !== u.END && n !== u.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === u.JSON) {
                if (i !== 0) throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0) throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > qi) throw Error(`Frame payload too large: ${a} bytes (max ${qi})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > Xi) throw Error(`Too many frames in framed response (max ${Xi})`);
              p(9);
              let m = p(a);
              switch (n) {
                case u.JSON:
                  try {
                    s.enqueue(Gi.decode(m));
                  } catch {}
                  break;
                case u.CHUNK: {
                  let e = d(i);
                  e && e.enqueue(m);
                  break;
                }
                case u.END: {
                  let e = d(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case u.ERROR: {
                  let e = d(i);
                  if ((r.add(i), e)) {
                    let n = Gi.decode(m);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var Qi = null;
async function $i(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var ea = Object.prototype.hasOwnProperty;
function ta(e) {
  for (let t in e) if (ea.call(e, t)) return !0;
  return !1;
}
async function na(e, t, n) {
  Qi ||= Wi();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` && o.set(`accept`, `${l}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`) throw Error(`FormData is not supported with GET requests`);
    let t = await ra(r);
    if (t !== void 0) {
      let n = Je({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  if (r.method === `POST`) {
    let e = await aa(r);
    (e?.contentType && o.set(`content-type`, e.contentType), (s = e?.body));
  }
  return await oa(async () => i(e, { method: r.method, headers: o, signal: r.signal, body: s }));
}
async function ra(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && ta(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return ia(n);
}
async function ia(e) {
  return JSON.stringify(await Promise.resolve(bi(e, { plugins: Qi })));
}
async function aa(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && ta(e.context) && (t = await ia(e.context)),
      t !== void 0 && e.data.set(o, t),
      { body: e.data }
    );
  }
  let t = await ra(e);
  if (t) return { body: t, contentType: `application/json` };
}
async function oa(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || C(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      if ((p(n), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: r, jsonChunks: i } = Zi(t.body),
        a = [Ri(r), ...(Qi || [])],
        o = new Map();
      e = await sa({
        jsonStream: i,
        onMessage: (e) => yi(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = yi(n, { plugins: Qi });
      } finally {
      }
      await $i(r);
    }
    if ((e || C(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = $e(e);
    if (n) throw n;
    if (qe(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function sa({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await $i(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await $i(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function ca(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = m()?.serverFns?.fetch;
      return na(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [s]: !0 },
  );
}
function la(e) {
  if (Array.isArray(e)) return e.flatMap((e) => la(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length; ) {
    for (r = n, s = !1; c(); )
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l(); ) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function ua(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function da(...e) {
  return e.reduce((e, t) => {
    let n = ua(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie` ? la(r).forEach((t) => e.append(`set-cookie`, t)) : e.set(t, r);
    return e;
  }, new Headers());
}
var fa = () => {
  throw Error(`createServerOnlyFn() functions can only be called on the server!`);
};
function pa(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function ma(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) pa(t) && (n[t] = e[t]);
  if (t && typeof t == `object`) for (let e of Object.keys(t)) pa(e) && (n[e] = t[e]);
  return n;
}
function ha(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) pa(n) && (t[n] = e[n]);
  return t;
}
var ga = (e, t) => {
  let n = t || e || {};
  n.method === void 0 && (n.method = `GET`);
  let r = (e) => ga(void 0, { ...n, validator: e, inputValidator: e });
  return Object.assign((e) => ga(void 0, { ...n, ...e }), {
    options: n,
    middleware: (e) => {
      let t = [...(n.middleware || [])];
      e.map((e) => {
        c in e ? e.options.middleware && t.push(...e.options.middleware) : t.push(e);
      });
      let r = ga(void 0, { ...n, middleware: t });
      return ((r[c] = !0), r);
    },
    validator: r,
    inputValidator: r,
    handler: (...e) => {
      let [t, r] = e,
        i = { ...n, extractedFn: t, serverFn: r },
        a = [...(i.middleware || []), ba(i)];
      return (
        (t.method = n.method),
        Object.assign(
          async (e) => {
            let n = await _a(a, `client`, {
                ...t,
                ...i,
                data: e?.data,
                headers: e?.headers,
                signal: e?.signal,
                fetch: e?.fetch,
                context: ha(),
              }),
              r = $e(n.error);
            if (r) throw r;
            if (n.error) throw n.error;
            return n.result;
          },
          {
            ...t,
            method: n.method,
            __executeServer: async (e) => {
              let n = fa(),
                r = n.contextAfterGlobalMiddlewares;
              return await _a(a, `server`, {
                ...t,
                ...e,
                serverFnMeta: t.serverFnMeta,
                context: ma(e.context, r),
                request: n.request,
              }).then((e) => ({ result: e.result, error: e.error, context: e.sendContext }));
            },
          },
        )
      );
    },
  });
};
async function _a(e, t, n) {
  let r = va([...(m()?.functionMiddleware || []), ...e]);
  if (t === `server`) {
    let e = fa({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares && (r = r.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let i = async (e) => {
    let n = r.shift();
    if (!n) return e;
    try {
      let r = `validator` in n.options ? n.options.validator : void 0;
      (!r && `inputValidator` in n.options && (r = n.options.inputValidator),
        r && t === `server` && (e.data = await ya(r, e.data)));
      let a;
      if (
        (t === `client`
          ? `client` in n.options && (a = n.options.client)
          : `server` in n.options && (a = n.options.server),
        a)
      ) {
        let t = async (t = {}) => {
            let n = await i({
              ...e,
              ...t,
              context: ma(e.context, t.context),
              sendContext: ma(e.sendContext, t.sendContext),
              headers: da(e.headers, t.headers),
              _callSiteFetch: e._callSiteFetch,
              fetch: e._callSiteFetch ?? t.fetch ?? e.fetch,
              result: t.result === void 0 ? (t instanceof Response ? t : e.result) : t.result,
              error: t.error ?? e.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          n = await a({ ...e, next: t });
        if (Qe(n)) return { ...e, error: n };
        if (n instanceof Response) return { ...e, result: n };
        if (!n)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`,
          );
        return n;
      }
      return i(e);
    } catch (t) {
      return { ...e, error: t };
    }
  };
  return i({
    ...n,
    headers: n.headers || {},
    sendContext: n.sendContext || {},
    context: n.context || ha(),
    _callSiteFetch: n.fetch,
  });
}
function va(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`,
        );
      e.forEach((e) => {
        (e.options.middleware && i(e.options.middleware, a + 1), n.has(e) || (n.add(e), r.push(e)));
      });
    };
  return (i(e, 0), r);
}
async function ya(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function ba(e) {
  return {
    "~types": void 0,
    options: {
      inputValidator: e.validator ?? e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var xa = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Sa = new (class {
    #e = xa;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Ca(e) {
  setTimeout(e, 0);
}
var wa = typeof window > `u` || `Deno` in globalThis;
function Ta() {}
function Ea(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Da(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Oa(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function ka(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Aa(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ja(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Na(o, t.options)) return !1;
    } else if (!Fa(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Ma(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Pa(t.options.mutationKey) !== Pa(a)) return !1;
    } else if (!Fa(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Na(e, t) {
  return (t?.queryKeyHashFn || Pa)(e);
}
function Pa(e) {
  return JSON.stringify(e, (e, t) =>
    Ba(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Fa(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object`
      ? Object.keys(t).every((n) => Fa(e[n], t[n]))
      : !1;
}
var Ia = Object.prototype.hasOwnProperty;
function La(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = za(e) && za(t);
  if (!r && !(Ba(e) && Ba(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Ia.call(e, o)) && c++);
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    let f = La(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Ra(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function za(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ba(e) {
  if (!Va(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Va(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Va(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Ha(e) {
  return new Promise((t) => {
    Sa.setTimeout(t, e);
  });
}
function Ua(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : La(e, t);
}
function Wa(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Ga(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ka = Symbol();
function qa(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ka
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Ja(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function Ya(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r ? i : ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
      ),
    }),
    e
  );
}
var Xa = (() => {
    let e = () => wa;
    return {
      isServer() {
        return e();
      },
      setIsServer(t) {
        e = t;
      },
    };
  })(),
  Za = Ca;
function Qa() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Za,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var $a = Qa(),
  eo = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  to = new (class extends eo {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  no = new (class extends eo {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function ro() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
function io(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ao(e) {
  return (e ?? `online`) === `online` ? no.isOnline() : !0;
}
var oo = class extends Error {
  constructor(e) {
    (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function so(e) {
  let t = !1,
    n = 0,
    r,
    i = ro(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new oo(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => to.isFocused() && (e.networkMode === `always` || no.isOnline()) && e.canRun(),
    u = () => ao(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Xa.isServer() ? 0 : 3),
            o = e.retryDelay ?? io,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            Ha(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var co = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Da(this.gcTime) &&
        (this.#e = Sa.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (Xa.isServer() ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Sa.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function lo(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Ya(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = qa(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = await u(
                  (() => {
                    let e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? `backward` : `forward`,
                      meta: t.options.meta,
                    };
                    return (l(e), e);
                  })(),
                ),
                { maxPages: o } = t.options,
                s = i ? Ga : Wa;
              return { pages: s(e.pages, a, o), pageParams: s(e.pageParams, r, o) };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? fo : uo,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : uo(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n,
            ))
        : (t.fetchFn = l);
    },
  };
}
function uo(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function fo(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var po = class extends co {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = go(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = go(this.options);
      e.data !== void 0 && (this.setState(ho(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === `idle` && this.#r.remove(this);
  }
  setData(e, t) {
    let n = Ua(this.state.data, e, this.options);
    return (
      this.#l({ data: n, type: `success`, dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(Ta).catch(Ta) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Aa(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Ka || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => ka(e.options.staleTime, this) === `static`)
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Oa(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return this.state.fetchStatus === `paused` && this.state.status === `pending`;
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = qa(this.options, t),
          n = (() => {
            let e = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
            return (r(e), e);
          })();
        return ((this.#s = !1), this.options.persister ? this.options.persister(e, n, this) : e(n));
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite` ? lo(this.options.pages) : this.options.behavior)?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = so({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof oo && e.revert && this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof oo) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return { ...t, ...mo(t.data, this.options), fetchMeta: e.meta ?? null };
        case `success`:
          let n = {
            ...t,
            ...ho(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      $a.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function mo(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ao(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function ho(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function go(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var $ = e(r(), 1),
  _o = n(),
  vo = $.createContext(void 0),
  yo = (e) => {
    let t = $.useContext(vo);
    if (e) return e;
    if (!t) throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  bo = ({ client: e, children: t }) => (
    $.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, _o.jsx)(vo.Provider, { value: e, children: t })
  );
function xo(e) {
  return e;
}
var So = $.use,
  Co = typeof window < `u` ? $.useLayoutEffect : $.useEffect;
function wo(e) {
  let t = $.useRef({ value: e, prev: null }),
    n = t.current.value;
  return (e !== n && (t.current = { value: e, prev: n }), t.current.prev);
}
function To(e, t, n = {}, r = {}) {
  $.useEffect(() => {
    if (!e.current || r.disabled || typeof IntersectionObserver != `function`) return;
    let i = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      i.observe(e.current),
      () => {
        i.disconnect();
      }
    );
  }, [t, n, r.disabled, e]);
}
function Eo(e) {
  let t = $.useRef(null);
  return ($.useImperativeHandle(e, () => t.current, []), t);
}
var Do = $.createContext(null);
function Oo(e) {
  return $.useContext(Do);
}
function ko({ children: e, fallback: t = null }) {
  return Ao() ? (0, _o.jsx)($.Fragment, { children: e }) : (0, _o.jsx)($.Fragment, { children: t });
}
function Ao() {
  return $.useSyncExternalStore(
    jo,
    () => !0,
    () => !1,
  );
}
function jo() {
  return () => {};
}
var Mo = t((e) => {
    var t = r();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : n,
      a = t.useState,
      o = t.useEffect,
      s = t.useLayoutEffect,
      c = t.useDebugValue;
    function l(e, t) {
      var n = t(),
        r = a({ inst: { value: n, getSnapshot: t } }),
        i = r[0].inst,
        l = r[1];
      return (
        s(
          function () {
            ((i.value = n), (i.getSnapshot = t), u(i) && l({ inst: i }));
          },
          [e, n, t],
        ),
        o(
          function () {
            return (
              u(i) && l({ inst: i }),
              e(function () {
                u(i) && l({ inst: i });
              })
            );
          },
          [e],
        ),
        c(n),
        n
      );
    }
    function u(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !i(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` || window.document === void 0 || window.document.createElement === void 0
        ? d
        : l;
    e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  No = t((e, t) => {
    t.exports = Mo();
  }),
  Po = t((e) => {
    var t = r(),
      n = No();
    function i(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var a = typeof Object.is == `function` ? Object.is : i,
      o = n.useSyncExternalStore,
      s = t.useRef,
      c = t.useEffect,
      l = t.useMemo,
      u = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
      var d = s(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = l(
        function () {
          function e(e) {
            if (!o) {
              if (((o = !0), (s = e), (e = r(e)), i !== void 0 && f.hasValue)) {
                var t = f.value;
                if (i(t, e)) return (c = t);
              }
              return (c = e);
            }
            if (((t = c), a(s, e))) return t;
            var n = r(e);
            return i !== void 0 && i(t, n) ? ((s = e), t) : ((s = e), (c = n));
          }
          var o = !1,
            s,
            c,
            l = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            l === null
              ? void 0
              : function () {
                  return e(l());
                },
          ];
        },
        [t, n, r, i],
      );
      var p = o(e, d[0], d[1]);
      return (
        c(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        u(p),
        p
      );
    };
  }),
  Fo = t((e, t) => {
    t.exports = Po();
  })();
function Io(e, t) {
  return e === t;
}
function Lo(e, t, n = Io) {
  let r = (0, $.useCallback)(
      (t) => {
        if (!e) return () => {};
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    i = (0, $.useCallback)(() => e?.get(), [e]);
  return (0, Fo.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
var Ro = e(a(), 1);
function zo(e, t) {
  let n = Oo(),
    r = Eo(t),
    {
      activeProps: i,
      inactiveProps: a,
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      preloadIntentProximity: u,
      hashScrollIntoView: d,
      replace: f,
      startTransition: p,
      resetScroll: m,
      viewTransition: h,
      children: g,
      target: v,
      disabled: y,
      style: b,
      className: ee,
      onClick: te,
      onBlur: x,
      onFocus: ne,
      onMouseEnter: S,
      onMouseLeave: re,
      onTouchStart: ie,
      ignoreBlocker: oe,
      params: se,
      search: ce,
      hash: le,
      state: ue,
      mask: de,
      reloadDocument: pe,
      unsafeRelative: me,
      from: he,
      _fromLocation: ge,
      ..._e
    } = e,
    ve = Ao(),
    C = $.useMemo(
      () => e,
      [
        n,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    w = Lo(
      n.stores.location,
      (e) => e,
      (e, t) => e.href === t.href,
    ),
    E = $.useMemo(() => {
      let e = { _fromLocation: w, ...C };
      return n.buildLocation(e);
    }, [n, w, C]),
    ye = E.maskedLocation ? E.maskedLocation.publicHref : E.publicHref,
    be = E.maskedLocation ? E.maskedLocation.external : E.external,
    D = $.useMemo(() => Jo(ye, be, n.history, y), [y, be, ye, n.history]),
    O = $.useMemo(() => {
      if (D?.external) return fe(D.href, n.protocolAllowlist) ? void 0 : D.href;
      if (!Yo(s) && !(typeof s != `string` || s.indexOf(`:`) === -1))
        try {
          return (new URL(s), fe(s, n.protocolAllowlist) ? void 0 : s);
        } catch {}
    }, [s, D, n.protocolAllowlist]),
    k = $.useMemo(() => {
      if (O) return !1;
      if (o?.exact) {
        if (!Ve(w.pathname, E.pathname, n.basepath)) return !1;
      } else {
        let e = Be(w.pathname, n.basepath),
          t = Be(E.pathname, n.basepath);
        if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === `/`))) return !1;
      }
      return (o?.includeSearch ?? !0) &&
        !ae(w.search, E.search, { partial: !o?.exact, ignoreUndefined: !o?.explicitUndefined })
        ? !1
        : o?.includeHash
          ? ve && w.hash === E.hash
          : !0;
    }, [
      o?.exact,
      o?.explicitUndefined,
      o?.includeHash,
      o?.includeSearch,
      w,
      O,
      ve,
      E.hash,
      E.pathname,
      E.search,
      n.basepath,
    ]),
    A = k ? (_(i, {}) ?? Vo) : Bo,
    j = k ? Bo : (_(a, {}) ?? Bo),
    xe = [ee, A.className, j.className].filter(Boolean).join(` `),
    Se = (b || A.style || j.style) && { ...b, ...A.style, ...j.style },
    [Ce, we] = $.useState(!1),
    Te = $.useRef(!1),
    M = e.reloadDocument || O ? !1 : (c ?? n.options.defaultPreload),
    Ee = l ?? n.options.defaultPreloadDelay ?? 0,
    N = $.useCallback(() => {
      n.preloadRoute({ ...C, _builtLocation: E }).catch((e) => {
        (console.warn(e), console.warn(et));
      });
    }, [n, C, E]);
  (To(
    r,
    $.useCallback(
      (e) => {
        e?.isIntersecting && N();
      },
      [N],
    ),
    Ko,
    { disabled: !!y || M !== `viewport` },
  ),
    $.useEffect(() => {
      Te.current || (!y && M === `render` && (N(), (Te.current = !0)));
    }, [y, N, M]));
  let De = (e) => {
    let t = e.currentTarget.getAttribute(`target`),
      r = v === void 0 ? t : v;
    if (!y && !Zo(e) && !e.defaultPrevented && (!r || r === `_self`) && e.button === 0) {
      (e.preventDefault(),
        (0, Ro.flushSync)(() => {
          we(!0);
        }));
      let t = n.subscribe(`onResolved`, () => {
        (t(), we(!1));
      });
      n.navigate({
        ...C,
        replace: f,
        resetScroll: m,
        hashScrollIntoView: d,
        startTransition: p,
        viewTransition: h,
        ignoreBlocker: oe,
      });
    }
  };
  if (O)
    return {
      ..._e,
      ref: r,
      href: O,
      ...(g && { children: g }),
      ...(v && { target: v }),
      ...(y && { disabled: y }),
      ...(b && { style: b }),
      ...(ee && { className: ee }),
      ...(te && { onClick: te }),
      ...(x && { onBlur: x }),
      ...(ne && { onFocus: ne }),
      ...(S && { onMouseEnter: S }),
      ...(re && { onMouseLeave: re }),
      ...(ie && { onTouchStart: ie }),
    };
  let Oe = (e) => {
      if (y || M !== `intent`) return;
      if (!Ee) {
        N();
        return;
      }
      let t = e.currentTarget;
      if (Go.has(t)) return;
      let n = setTimeout(() => {
        (Go.delete(t), N());
      }, Ee);
      Go.set(t, n);
    },
    ke = (e) => {
      y || M !== `intent` || N();
    },
    Ae = (e) => {
      if (y || !M || !Ee) return;
      let t = e.currentTarget,
        n = Go.get(t);
      n && (clearTimeout(n), Go.delete(t));
    };
  return {
    ..._e,
    ...A,
    ...j,
    href: D?.href,
    ref: r,
    onClick: qo([te, De]),
    onBlur: qo([x, Ae]),
    onFocus: qo([ne, Oe]),
    onMouseEnter: qo([S, Oe]),
    onMouseLeave: qo([re, Ae]),
    onTouchStart: qo([ie, ke]),
    disabled: !!y,
    target: v,
    ...(Se && { style: Se }),
    ...(xe && { className: xe }),
    ...(y && Ho),
    ...(k && Uo),
    ...(ve && Ce && Wo),
  };
}
var Bo = {},
  Vo = { className: `active` },
  Ho = { role: `link`, "aria-disabled": !0 },
  Uo = { "data-status": `active`, "aria-current": `page` },
  Wo = { "data-transitioning": `transitioning` },
  Go = new WeakMap(),
  Ko = { rootMargin: `100px` },
  qo = (e) => (t) => {
    for (let n of e)
      if (n) {
        if (t.defaultPrevented) return;
        n(t);
      }
  };
function Jo(e, t, n, r) {
  if (!r) return t ? { href: e, external: !0 } : { href: n.createHref(e) || `/`, external: !1 };
}
function Yo(e) {
  if (typeof e != `string`) return !1;
  let t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var Xo = $.forwardRef((e, t) => {
  let { _asChild: n, ...r } = e,
    { type: i, ...a } = zo(r, t),
    o =
      typeof r.children == `function`
        ? r.children({ isActive: a[`data-status`] === `active` })
        : r.children;
  if (!n) {
    let { disabled: e, ...t } = a;
    return $.createElement(`a`, t, o);
  }
  return $.createElement(n, a, o);
});
function Zo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
export {
  Le as $,
  Fa as A,
  ca as B,
  Ea as C,
  x as Ct,
  Ma as D,
  Da as E,
  Ja as F,
  Je as G,
  Qe as H,
  Ka as I,
  Ue as J,
  qe as K,
  Oa as L,
  Aa as M,
  ka as N,
  ja as O,
  Ra as P,
  ze as Q,
  Sa as R,
  Xa as S,
  te as St,
  Na as T,
  a as Tt,
  Ze as U,
  xi as V,
  Xe as W,
  Fe as X,
  Ge as Y,
  He as Z,
  ro as _,
  b as _t,
  Oo as a,
  Se as at,
  eo as b,
  ce as bt,
  Co as c,
  C as ct,
  bo as d,
  oe as dt,
  Re as et,
  yo as f,
  ge as ft,
  so as g,
  _ as gt,
  co as h,
  he as ht,
  Ao as i,
  we as it,
  Ua as j,
  Ta as k,
  wo as l,
  de as lt,
  mo as m,
  _e as mt,
  Lo as n,
  Ce as nt,
  Do as o,
  Ee as ot,
  po as p,
  ae as pt,
  Ie as q,
  ko as r,
  Te as rt,
  So as s,
  w as st,
  Xo as t,
  Oe as tt,
  xo as u,
  ve as ut,
  no as v,
  fe as vt,
  Pa as w,
  s as wt,
  $a as x,
  h as xt,
  to as y,
  se as yt,
  ga as z,
};
