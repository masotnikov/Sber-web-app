import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./MainPanel.module.scss";
import {CatalogLink} from "@/shared/ui/CatalogLink/CatalogLink";
import {Input} from "@/shared/ui/Input";
import {getRouteCatalog} from "@/shared/const/router";

interface HeaderMainPanelProps {
  className?: string;
}

export const MainPanel: FC<HeaderMainPanelProps> = (props) => {
  const {className} = props;

  return (
    <div className={classNames(cls.MainPanel, {}, [className])}>
      <div className={cls.searchWrapper}>
        <Input className={cls.searchInput} placeholder={"Поиск"}/>
      </div>
      <CatalogLink to={getRouteCatalog()}/>
    </div>
  );
};

