import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BdlOfTAs.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profits-f0_NEtK8.js
var getCarteira = createServerFn({ method: "GET" }).handler(
  createSsrRpc("19c87904752b916f06bac4ef3cf451bdd3b09ee4c59bed0defcf2427744f7a14"),
);
var carteiraQuery = queryOptions({
  queryKey: ["carteira"],
  queryFn: () => getCarteira(),
});
//#endregion
export { carteiraQuery as t };
