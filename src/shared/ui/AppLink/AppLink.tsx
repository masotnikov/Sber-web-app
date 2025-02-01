import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps  {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, children, ...otherProps } = props;

  return (
    <Link {...otherProps} to={to} className={classNames(cls.AppLink, {}, [className])}>{children}</Link>
  );
};
