import React, { FC } from "react";
import { ExternalLinkEnum } from "../../routes";
import Logo from "../UI/logo/Logo";
import style from "./Footer.module.scss";
import FooterNav from "./nav/FooterNav";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <Logo className={style.logo} />
        <a
          className={style.help}
          href={ExternalLinkEnum.HELP_MONEY}
          target="_blank"
          rel="noopener noreferrer"
        >
          Помочь деньгами
        </a>
        <FooterNav />
        <div className={style.about}>
          <p className={style.info}>
            Концепия и дизайн &mdash; &nbsp;
            <a
              className={style.link}
              href={ExternalLinkEnum.DESIGN}
              target="_blank"
              rel="noopener noreferrer"
            >
              krkr.design
            </a>
          </p>
          <p className={style.info}>
            Разработка &mdash; студенты &nbsp;
            <a
              className={style.link}
              href={ExternalLinkEnum.YANDEX_PRAKTIKUM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </p>
          <p className={style.copyright}>
            &#169; Старшие Братья Старшие Сестры
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
