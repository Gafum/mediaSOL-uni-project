type RouteKeys =
   | "home"
   | "contact"
   | "about"
   | "catalog"
   | "item"
   | "cart"
   | "favorites"
   | "consultationService"
   | "maintenanceService"
   | "networkSetupService"
   | "technicalSupportService";

export interface IRoutingList {
   path: string;
   component: JSX.Element;
   name: string;
}

export type IScreenList = Record<RouteKeys, IRoutingList>;
