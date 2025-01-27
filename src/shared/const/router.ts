export enum AppRoutes {
  MAIN = "main",
  SAVINGS = "savings",
  PAYMENTS = "payments",
  HISTORY = "history",
  NOT_FOUND = "not_found",
  CATALOG = "catalog",
}

export const getRouteMain = (): string => "/main";
export const getRouteSavings = (): string => "/savings";
export const getRoutePayments = (): string => "/payments";
export const getRouteHistory = (): string => "/history";
export const getRouteCatalog = (): string => "/catalog";