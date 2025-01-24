import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./HeaderMainPanel.module.scss";
import {CatalogLink} from "@/shared/ui/CatalogLink/CatalogLink";
import {Input} from "@/shared/ui/Input";

interface HeaderMainPanelProps {
  className?: string;
}

export const HeaderMainPanel: FC<HeaderMainPanelProps> = (props) => {
  const {className} = props;

  return (
    <div className={classNames(cls.HeaderMainPanel, {}, [className])}>
      <Input className={cls.searchWrapper} placeholder={"Поиск"}/>
      <CatalogLink to={'/catalog'}/>
    </div>
  );
};

