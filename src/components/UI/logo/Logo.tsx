import React, { FC } from "react";
import cl from "classnames";

import style from "./Logo.module.scss";

import LogoImageBlue from "../../../assets/images/logo-blue.svg";
import LogoImage from "../../../assets/images/logo.svg";

import { ExternalLinkEnum } from "../../../routes";

interface I {
  className?: string;
  color?: "blue" | "grey";
}

const Logo: FC<I> = ({ className, color = "grey" }) => {
  return (
    <a
      className={cl(style.logo, className)}
      href={ExternalLinkEnum.ORGANIZATION}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={style.image}
        src={color === "grey" ? LogoImage : LogoImageBlue}
        alt="Старшие Братья Старшие Сестры"
      />
    </a>
  );
};

export default Logo;
