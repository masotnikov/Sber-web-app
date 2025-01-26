import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./CatalogLink.module.scss";
import {Link, LinkProps} from "react-router-dom";

interface CatalogLinkProps extends LinkProps {
  className?: string;
  to: string;
}

export const CatalogLink: FC<CatalogLinkProps> = (props) => {
  const {className, to} = props;

  return (
    <Link to={to} className={classNames(cls.CatalogLink, {}, [className])}>
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path id="Shape" d="M8 2C9.65674 2 11 3.34314 11 5L11 8C11 9.65686 9.65674 11 8 11L5 11C3.34326 11 2 9.65686 2 8L2 5C2 3.34314 3.34326 2 5 2L8 2ZM19 2C20.6567 2 22 3.34314 22 5L22 8C22 9.65686 20.6567 11 19 11L16 11C14.3433 11 13 9.65686 13 8L13 5C13 3.34314 14.3433 2 16 2L19 2ZM8 4C8.55225 4 9 4.44771 9 5L9 8C9 8.55229 8.55225 9 8 9L5 9C4.44775 9 4 8.55229 4 8L4 5C4 4.44771 4.44775 4 5 4L8 4ZM19 4C19.5522 4 20 4.44771 20 5L20 8C20 8.55229 19.5522 9 19 9L16 9C15.4478 9 15 8.55229 15 8L15 5C15 4.44771 15.4478 4 16 4L19 4ZM11 16C11 14.3431 9.65674 13 8 13L5 13C3.34326 13 2 14.3431 2 16L2 19C2 20.6569 3.34326 22 5 22L8 22C9.65674 22 11 20.6569 11 19L11 16ZM22 16C22 14.3431 20.6567 13 19 13L16 13C14.3433 13 13 14.3431 13 16L13 19C13 20.6569 14.3433 22 16 22L19 22C20.6567 22 22 20.6569 22 19L22 16ZM9 16C9 15.4477 8.55225 15 8 15L5 15C4.44775 15 4 15.4477 4 16L4 19C4 19.5523 4.44775 20 5 20L8 20C8.55225 20 9 19.5523 9 19L9 16ZM20 16C20 15.4477 19.5522 15 19 15L16 15C15.4478 15 15 15.4477 15 16L15 19C15 19.5523 15.4478 20 16 20L19 20C19.5522 20 20 19.5523 20 19L20 16Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
    </Link>
  );
};

