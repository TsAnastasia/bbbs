import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../../routes";

import style from "./Header.module.scss";

const HeaderMenu: FC = () => {
  const { isAuth, userData } = useAppSelector((state) => state.auth);

  return (
    <div className={style.headerMenu}>
      <div className={style.menu}>
        <nav className={style.menuNav}>
          <ul className={style.menuColumn}>
            {FOOTER_LINKS.map((link) => (
              <li key={link.route} className={style.menuItem}>
                <Link to={link.route} className={style.menuLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={style.menuColumn}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.url} className={style.menuItem}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={link.url}
                  className={style.menuLink}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {isAuth && (
          <div className={style.user}>
            <button type="button">{`${userData.city.name}. Изменить город`}</button>
            <button type="button">Выйти</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMenu;
