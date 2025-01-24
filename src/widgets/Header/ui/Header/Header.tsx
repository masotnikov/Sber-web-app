import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import {LinkLogo} from "@/shared/ui/LinkLogo/LinkLogo";
import {CatalogLink} from "@/shared/ui/CatalogLink/CatalogLink";
import {HeaderMainPanel} from "@/widgets/Header/ui/HeaderMainPanel";
import {getRouteMain} from "@/shared/const/router";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const {className} = props;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <LinkLogo to={getRouteMain()}/>
      <HeaderMainPanel/>
      <aside className='aside'></aside>
    </header>
  );
};

