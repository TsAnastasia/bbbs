import cl from "classnames";
import React, { ChangeEventHandler, FC } from "react";

import style from "./AppInput.module.scss";

interface I {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  title?: string;
  type?: "text" | "password";
}

const AppInput: FC<I> = ({
  name,
  value,
  onChange,
  className,
  type = "text",
  title,
}) => {
  return (
    <input
      className={cl(style.appInput, className)}
      type={type}
      name={name}
      placeholder={title}
      value={value}
      onChange={onChange}
    />
  );
};

export default AppInput;
