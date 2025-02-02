import { FC, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getRouteHistory, getRouteMain, getRoutePayments, getRouteSavings } from "@/shared/const/router";
import HomeIcon from "@/shared/assets/icons/navbar/home.svg";
import PaymentsIcon from "@/shared/assets/icons/navbar/payments.svg";
import OperationsIcon from "@/shared/assets/icons/navbar/operations.svg";
import SavingIcon from "@/shared/assets/icons/navbar/savings.svg";

interface NavbarProps {
  className?: string;
}

interface ILinkList {
  route: string;
  title: string;
  icon?: ReactNode;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const linkList: ILinkList[] = [
    { route: getRouteMain(), title: "Главный", icon: <HomeIcon/> },
    { route: getRouteSavings(), title: "Накопления", icon: <SavingIcon/> },
    { route: getRoutePayments(), title: "Платежи", icon: <PaymentsIcon/> },
    { route: getRouteHistory(), title: "История", icon: <OperationsIcon/> },

  ];

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {
        linkList.map(({ icon, route, title }) => (
          <AppLink
            className={cls.link} key={route}
            to={route}>
            <span>{title}</span>
            <span>{icon}</span>
          </AppLink>
        ))
      }
    </nav>
  );
};

