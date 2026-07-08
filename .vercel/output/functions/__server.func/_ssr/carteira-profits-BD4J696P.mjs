import { t as getClientes } from "./clientes.functions-BOJ_iK9n.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/carteira-profits-BD4J696P.js
var clientesQuery = queryOptions({
  queryKey: ["clientes"],
  queryFn: () => getClientes(),
});
//#endregion
export { clientesQuery as t };
