import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps  {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <h2>Извините, страница не найдена</h2>
    </div> 
  );
};

