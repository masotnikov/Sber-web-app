import {FC} from "react";
import SberLogo from '@/shared/assets/icons/logo/sber-logo.svg'
import {Link, LinkProps} from "react-router-dom";
import {getRouteMain} from "@/shared/const/router";
import cls from "./LinkLogo.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";

interface LinkLogoProps extends LinkProps {
  className?: string;
}

export const LinkLogo: FC<LinkLogoProps> = (props) => {
  const {className} = props;

  return (
    <Link className={classNames(cls.LinkLogo, {}, [className])} to={getRouteMain()}>
      <SberLogo color={'green'} width={154} height={24}/>
    </Link>
  );
};

