import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "p-8 text-destructive",
    children: ["Erro ao carregar dados: ", error.message],
  });
//#endregion
export { SplitErrorComponent as errorComponent };
