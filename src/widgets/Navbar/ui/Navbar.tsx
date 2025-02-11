import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink";
import { links } from "@/widgets/Navbar/model/links";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const location = useLocation(); 

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {
        links.map(({ icon, route, title }) => (
          <AppLink
            className={classNames(cls.link, { [cls.activeLink]: location.pathname === route })} key={route}
            to={route}>
            <span>{icon}</span>
            <span>{title}</span>
          </AppLink>
        ))
      }
    </nav>
  );
};