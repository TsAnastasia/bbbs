import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../../routes";
import style from "./FooterNav.module.scss";

const FooterNav: FC = () => {
  return (
    <nav className={style.footerNav}>
      <ul className={style.column}>
        {FOOTER_LINKS.map((item) => (
          <li className={style.item}>
            <Link key={item.route} to={item.route} className={style.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={style.column}>
        {SOCIAL_LINKS.map((item) => (
          <li className={style.item}>
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={style.link}
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
