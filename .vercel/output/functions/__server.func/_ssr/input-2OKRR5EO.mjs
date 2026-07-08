import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { f as cn } from "./table-DDKeZQX2.mjs";
import { l as Check } from "../_libs/lucide-react.mjs";
import {
  n as CheckboxIndicator,
  t as Checkbox$1,
} from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import {
  i as Trigger,
  n as Portal,
  r as Root2,
  t as Content2,
} from "../_libs/@radix-ui/react-popover+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-2OKRR5EO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
        ref,
        align,
        sideOffset,
        className: cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
          className,
        ),
        ...props,
      }),
    }),
);
PopoverContent.displayName = Content2.displayName;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
      className: cn("grid place-content-center text-current"),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
    }),
  }),
);
Checkbox.displayName = Checkbox$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
    type,
    className: cn(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      className,
    ),
    ref,
    ...props,
  });
});
Input.displayName = "Input";
//#endregion
export { PopoverTrigger as a, PopoverContent as i, Input as n, Popover as r, Checkbox as t };
