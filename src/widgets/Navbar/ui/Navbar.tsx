import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getRouteHistory, getRouteMain, getRoutePayments, getRouteSavings } from "@/shared/const/router";

interface NavbarProps  {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const linkList: Record<string, string>[] = [
    { route: getRouteMain(), title: "Главный" },
    { route: getRouteSavings(), title: "Накопления" },
    { route: getRoutePayments(), title: "Платежи" },
    { route: getRouteHistory(), title: "История" },

  ];

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {
        linkList.map(link => (
          <AppLink className={cls.link} key={link.route} to={link.route}>{link.title}</AppLink>
        ))
      }
    </nav>
  );
};

