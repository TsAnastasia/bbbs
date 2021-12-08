import cl from "classnames";
import React, { ChangeEventHandler, FC } from "react";

import style from "./appInput.module.scss";

interface I {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  title?: string;
  type?: "text" | "password";
  error?: string;
}

const AppInput: FC<I> = ({
  name,
  value,
  onChange,
  type = "text",
  title,
  error,
}) => {
  return (
    <div className={style.container}>
      <input
        className={cl(style.input, !!error && style.input_error)}
        type={type}
        name={name}
        placeholder={title}
        value={value}
        onChange={onChange}
      />
      <p className={style.error}>{error}</p>
    </div>
  );
};

export default AppInput;
