import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { Button } from "@/shared/ui/Button";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;

  function handleReload (): void {
    window.location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1 className={cls.message}>
        Произошла ошибка, обновите страницу!
      </h1>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Button onClick={handleReload} className={cls.button} type={"button"}>Перезагрузка страницы</Button>
    </div>
  );
};

