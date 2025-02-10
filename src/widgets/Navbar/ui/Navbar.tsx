import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui/AppLink";
import { links } from "@/widgets/Navbar/model/links";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {
        links.map(({ icon, route, title }) => (
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