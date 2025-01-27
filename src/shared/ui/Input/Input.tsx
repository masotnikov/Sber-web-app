import { FC, InputHTMLAttributes } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    className?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <input {...otherProps} type="text"  className={classNames(cls.Input, {}, [className])}>
    </input>
  );
};

