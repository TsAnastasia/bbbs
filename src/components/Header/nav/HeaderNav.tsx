import React, { FC } from "react";
import { Link } from "react-router-dom";

import { HEADER_LINKS } from "../../../routes";
import style from "../Header.module.scss";

const HeaderNav: FC = () => {
  return (
    <nav className={style.headerNavigation}>
      <ul className={style.headerNav}>
        {HEADER_LINKS.map((link) => (
          <li key={link.route} className={style.headerNav__item}>
            <Link to={link.route} className={style.headerNav__link}>
              {link.name}
            </Link>
            {link.children && (
              <ul className={style.headerNav__subgroup}>
                {link.children.map((item) => (
                  <li key={item.route} className={style.headerNav__subitem}>
                    <Link to={item.route} className={style.headerNav__sublink}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
