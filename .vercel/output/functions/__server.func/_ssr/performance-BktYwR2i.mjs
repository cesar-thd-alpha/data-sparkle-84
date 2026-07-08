import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-BdlOfTAs.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/performance-BktYwR2i.js
var getMetrics = createServerFn({ method: "GET" }).handler(
  createSsrRpc("02d7967fdc562436aefab72a9767f728bef5cb3d7fa431b6e750ba194ecdfde0"),
);
var metricsQuery = queryOptions({
  queryKey: ["metrics"],
  queryFn: () => getMetrics(),
});
//#endregion
export { metricsQuery as t };
