import { getRouteHistory, getRouteMain, getRoutePayments, getRouteSavings } from "@/shared/const/router";
import { HomeIcon, OperationsIcon, PaymentsIcon, SavingIcon } from "@/shared/assets/icons/navbar";
import { ReactNode } from "react";

interface IProps {
  route: string;
  title: string;
  icon: ReactNode;
}

export const links: IProps[] = [
  { route: getRouteMain(), title: "Главный", icon: <HomeIcon/> },
  { route: getRouteSavings(), title: "Накопления", icon: <SavingIcon/> },
  { route: getRoutePayments(), title: "Платежи", icon: <PaymentsIcon/> },
  { route: getRouteHistory(), title: "История", icon: <OperationsIcon/> },
];