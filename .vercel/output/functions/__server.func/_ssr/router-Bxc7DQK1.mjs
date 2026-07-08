import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import {
  c as HeadContent,
  d as Outlet,
  f as lazyRouteComponent,
  g as useRouter,
  h as Link,
  m as createRootRouteWithContext,
  p as createFileRoute,
  s as Scripts,
  u as createRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as clientesQuery } from "./carteira-profits-BD4J696P.mjs";
import { t as metricsQuery } from "./performance-BktYwR2i.mjs";
import { t as carteiraQuery } from "./profits-f0_NEtK8.mjs";
import { t as clientesQuery$1 } from "./routes-G_Jhdta_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bxc7DQK1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CANbfeOv.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Lovable App" },
      {
        name: "description",
        content: "Lovable Generated Project",
      },
      {
        name: "author",
        content: "Lovable",
      },
      {
        property: "og:title",
        content: "Lovable App",
      },
      {
        property: "og:description",
        content: "Lovable Generated Project",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:site",
        content: "@Lovable",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
  });
}
var $$splitComponentImporter$3 = () => import("./profits-CL00FsHx.mjs");
var $$splitNotFoundComponentImporter$3 = () => import("./profits-DV9sJ3kn.mjs");
var $$splitErrorComponentImporter$3 = () => import("./profits-C3qivYne.mjs");
var Route$3 = createFileRoute("/profits")({
  head: () => ({
    meta: [
      { title: "Carteira de Clientes por Profit" },
      {
        name: "description",
        content: "Distribuição de clientes por Profit e Franquia.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(carteiraQuery),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$3, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./performance-C6luZ-fJ.mjs");
var $$splitNotFoundComponentImporter$2 = () => import("./performance-BhY5NUga.mjs");
var $$splitErrorComponentImporter$2 = () => import("./performance-DxVv3uxu.mjs");
var Route$2 = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Dashboard de Performance" },
      {
        name: "description",
        content: "Acompanhe metas, status e desempenho por responsável e categoria.",
      },
      {
        property: "og:title",
        content: "Dashboard de Performance",
      },
      {
        property: "og:description",
        content: "Acompanhe metas, status e desempenho por responsável e categoria.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(metricsQuery),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
var $$splitComponentImporter$1 = () => import("./carteira-profits-CjADK9U0.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("./carteira-profits-DYIGWlt8.mjs");
var $$splitErrorComponentImporter$1 = () => import("./carteira-profits-BU2sMDH5.mjs");
var Route$1 = createFileRoute("/carteira-profits")({
  head: () => ({
    meta: [
      { title: "Carteira por Profits" },
      {
        name: "description",
        content:
          "Análise operacional da carteira de clientes por Profit: receita, ranking e participação.",
      },
      {
        property: "og:title",
        content: "Carteira por Profits",
      },
      {
        property: "og:description",
        content: "Análise operacional dos Profits: receita, ranking e participação.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(clientesQuery),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitComponentImporter = () => import("./routes-nIi_a2Zm.mjs");
var $$splitNotFoundComponentImporter = () => import("./routes-BLPwFuDT.mjs");
var $$splitErrorComponentImporter = () => import("./routes-CQlV66-R.mjs");
var Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carteira Geral — Dashboard Executivo" },
      {
        name: "description",
        content: "Visão executiva da carteira de clientes: MRR, distribuição, contratos e riscos.",
      },
      {
        property: "og:title",
        content: "Carteira Geral — Dashboard Executivo",
      },
      {
        property: "og:description",
        content: "Visão executiva da carteira de clientes.",
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(clientesQuery$1),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var ProfitsRoute = Route$3.update({
  id: "/profits",
  path: "/profits",
  getParentRoute: () => Route$4,
});
var PerformanceRoute = Route$2.update({
  id: "/performance",
  path: "/performance",
  getParentRoute: () => Route$4,
});
var CarteiraProfitsRoute = Route$1.update({
  id: "/carteira-profits",
  path: "/carteira-profits",
  getParentRoute: () => Route$4,
});
var rootRouteChildren = {
  IndexRoute: Route.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$4,
  }),
  CarteiraProfitsRoute,
  PerformanceRoute,
  ProfitsRoute,
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  return createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
