import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <button {...otherProps} className={classNames(cls.Button, {}, [className])}>
      {children}
    </button>
  );
};

