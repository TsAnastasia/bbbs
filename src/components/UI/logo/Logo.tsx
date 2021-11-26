import React, { FC } from "react";
import { ExternalLinkEnum } from "../../../routes";
import LogoImage from "../../../assets/images/logo.svg";
import style from "./Logo.module.scss";
import cl from "classnames";

interface I {
  className?: string;
}

const Logo: FC<I> = ({ className }) => {
  return (
    <a
      className={cl(style.logo, className)}
      href={ExternalLinkEnum.ORGANIZATION}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={style.image}
        src={LogoImage}
        alt="Старшие Братья Старшие Сестры"
      />
    </a>
  );
};

export default Logo;
