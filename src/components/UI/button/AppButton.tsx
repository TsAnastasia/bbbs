import cl from "classnames";
import React, { FC } from "react";

import style from "./appButton.module.scss";

interface I {
  type: "submit" | "button";
  text: string;
  buttonStyle?: "grey" | "blue";
  onClick?: () => void;
}

const AppButton: FC<I> = ({ type, text, buttonStyle = "grey", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cl(
        style.button,
        buttonStyle === "blue" ? style.buttonBlue : style.buttonGrey
      )}
    >
      {text}
    </button>
  );
};

export default AppButton;
