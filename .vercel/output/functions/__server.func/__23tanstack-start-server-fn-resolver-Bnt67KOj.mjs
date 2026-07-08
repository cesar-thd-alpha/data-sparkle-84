//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Bnt67KOj.js
var manifest = {
  "02d7967fdc562436aefab72a9767f728bef5cb3d7fa431b6e750ba194ecdfde0": {
    functionName: "getMetrics_createServerFn_handler",
    importer: () => import("./_ssr/metrics.functions-_Ue6ifEm.mjs"),
  },
  "19c87904752b916f06bac4ef3cf451bdd3b09ee4c59bed0defcf2427744f7a14": {
    functionName: "getCarteira_createServerFn_handler",
    importer: () => import("./_ssr/carteira.functions-ZZVtyZV8.mjs"),
  },
  ca0531d37a161e2bfe8e311115cb72ce82e12a3c7a6a4187c2072b66e1c55e67: {
    functionName: "getClientes_createServerFn_handler",
    importer: () => import("./_ssr/clientes.functions-C0oDDAI9.mjs"),
  },
};
async function getServerFnById(id, access) {
  const serverFnInfo = manifest[id];
  if (!serverFnInfo) throw new Error("Server function info not found for " + id);
  const fnModule = serverFnInfo.module ?? (await serverFnInfo.importer());
  if (!fnModule) throw new Error("Server function module not resolved for " + id);
  const action = fnModule[serverFnInfo.functionName];
  if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
  return action;
}
//#endregion
export { getServerFnById as t };
