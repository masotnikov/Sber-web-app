import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./CatalogLink.module.scss";
import CatalogIcon from "@/widgets/Header/assets/main-link.svg";
import {Link, LinkProps} from "react-router-dom";

interface CatalogLinkProps extends LinkProps {
  className?: string;
  to: string;
}

export const CatalogLink: FC<CatalogLinkProps> = (props) => {
  const {className, to} = props;

  return (
    <Link to={to} className={classNames(cls.CatalogLink, {}, [className])}>
      <CatalogIcon/>
    </Link>
  );
};

