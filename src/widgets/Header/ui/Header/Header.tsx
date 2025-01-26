import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./Header.module.scss";
import {LinkLogo} from "@/shared/ui/LinkLogo/LinkLogo";
import {getRouteMain} from "@/shared/const/router";
import {MainPanel} from "@/widgets/Header/ui/MainPanel";
import {AsideProfile} from "@/widgets/Header/ui/AsideProfile";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const {className} = props;

  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <LinkLogo to={getRouteMain()}/>
      <MainPanel/>
      <AsideProfile/>
    </header>
  );
};

