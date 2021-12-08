import cl from "classnames";
import React, { FC } from "react";

import fontStyle from "../../assets/styles/fonts.module.scss";
import { ExternalLinkEnum } from "../../routes";
import Logo from "../UI/logo/Logo";
import style from "./footer.module.scss";
import FooterNav from "./nav/FooterNav";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <Logo className={style.logo} />
        <a
          className={cl(fontStyle.button, style.help)}
          href={ExternalLinkEnum.HELP_MONEY}
          target="_blank"
          rel="noopener noreferrer"
        >
          Помочь деньгами
        </a>
        <FooterNav />
        <div className={style.about}>
          <p className={cl(fontStyle.body, style.info, style.aboutItem)}>
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
          <p className={cl(fontStyle.body, style.info, style.aboutItem)}>
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
          <p className={cl(fontStyle.body, style.copyright, style.aboutItem)}>
            &#169; Старшие Братья Старшие Сестры
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
