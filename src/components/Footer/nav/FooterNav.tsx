import cl from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import fontStyle from "../../../assets/styles/fonts.module.scss";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../../routes";
import style from "./footerNav.module.scss";

const FooterNav: FC = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.column}>
        {FOOTER_LINKS.map((item) => (
          <li className={style.item} key={item.route}>
            <Link
              key={item.route}
              to={item.route}
              className={cl(fontStyle.nav, style.link)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={style.column}>
        {SOCIAL_LINKS.map((item) => (
          <li className={style.item} key={item.url}>
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={cl(fontStyle.nav, style.link)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
