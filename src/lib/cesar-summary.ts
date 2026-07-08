import type { ClienteRow } from "./clientes.functions";

export type CesarSummary = {
  active_customers: number;
  revenue_churn: number;
  logo_churn: number;
};

/**
 * Um cliente está "sob contrato" num instante `atMs` se o contrato já
 * começou e (não tem fim, ou o fim é depois desse instante).
 *
 * `ativo`/`churn`/`pausado` em clientes_franqueados_profits são flags de
 * status ATUAL (não há histórico por data) — por isso, para qualquer
 * `atMs` no passado, esse overlap de datas de contrato é a única forma de
 * aproximar "sob contrato naquele momento". Mesma aproximação já usada em
 * src/routes/index.tsx (inCarteira/churnRate) para o filtro de mês de
 * referência — aqui só generalizamos de "mês" para um período arbitrário.
 */
function sobContratoEm(d: ClienteRow, atMs: number): boolean {
  if (!d.inicioContrato) return false;
  const ini = new Date(d.inicioContrato).getTime();
  if (isNaN(ini) || ini > atMs) return false;
  if (!d.fimContrato) return true;
  const fim = new Date(d.fimContrato).getTime();
  return isNaN(fim) || fim >= atMs;
}

/**
 * Usa `dataChurn` (data exata do evento), não `fimContrato` — mesma escolha
 * feita em src/routes/index.tsx no merge de 2026-07-08. `fimContrato` é a
 * data de encerramento do contrato, nem sempre igual à data em que o
 * cliente efetivamente saiu; `dataChurn` é o campo dedicado para isso.
 */
function churnNoPeriodo(d: ClienteRow, startMs: number, endMs: number): boolean {
  if (!d.churn || !d.dataChurn) return false;
  const t = new Date(d.dataChurn).getTime();
  return !isNaN(t) && t >= startMs && t <= endMs;
}

/**
 * Calcula o resumo Cesar (active_customers, revenue_churn, logo_churn) para
 * um período [startDate, endDate], a partir das linhas de
 * clientes_franqueados_profits (getClientes()).
 *
 * - active_customers: clientes com `ativo=true` e contrato vigente no fim
 *   do período.
 * - logo_churn: clientes que deram churn dentro do período ÷ clientes sob
 *   contrato no início do período (0–1, não é percentual).
 * - revenue_churn: mesma fórmula do logo_churn, mas ponderada por
 *   `valorMensal` e restrita a contratos MENSAL — mesmo recorte usado pelo
 *   KPI "MRR" já existente em index.tsx (contratos não-mensais não têm
 *   receita recorrente, então não entram em MRR nem no churn de receita).
 */
export function computeCesarSummary(
  clientes: ClienteRow[],
  startDate: Date,
  endDate: Date,
): CesarSummary {
  const startMs = startDate.getTime();
  const endMs = endDate.getTime();

  const activeCustomers = clientes.filter((d) => d.ativo && sobContratoEm(d, endMs)).length;

  const baseAtStart = clientes.filter((d) => sobContratoEm(d, startMs));
  const churnedInPeriod = clientes.filter((d) => churnNoPeriodo(d, startMs, endMs));

  const logoChurn = baseAtStart.length > 0 ? churnedInPeriod.length / baseAtStart.length : 0;

  const isMensal = (d: ClienteRow) => d.tipoContrato.toUpperCase() === "MENSAL";
  const mrrAtStart = baseAtStart.filter(isMensal).reduce((sum, d) => sum + (d.valorMensal ?? 0), 0);
  const mrrLost = churnedInPeriod
    .filter(isMensal)
    .reduce((sum, d) => sum + (d.valorMensal ?? 0), 0);

  const revenueChurn = mrrAtStart > 0 ? mrrLost / mrrAtStart : 0;

  return {
    active_customers: activeCustomers,
    revenue_churn: revenueChurn,
    logo_churn: logoChurn,
  };
}
