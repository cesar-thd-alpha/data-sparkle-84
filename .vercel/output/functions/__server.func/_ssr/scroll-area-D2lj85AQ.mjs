import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { f as cn } from "./table-DDKeZQX2.mjs";
import {
  a as Viewport,
  i as ScrollAreaThumb,
  n as Root,
  r as ScrollAreaScrollbar,
  t as Corner,
} from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scroll-area-D2lj85AQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn(badgeVariants({ variant }), className),
    ...props,
  });
}
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
        className: "h-full w-full rounded-[inherit]",
        children,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {}),
    ],
  }),
);
ScrollArea.displayName = Root.displayName;
var ScrollBar = import_react.forwardRef(({ className, orientation = "vertical", ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, {
      className: "relative flex-1 rounded-full bg-border",
    }),
  }),
);
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
//#endregion
export { ScrollArea as n, Badge as t };
