import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux";
import { logout, setChangeCityOpen } from "../../../redux/auth/auth-actions";
import { setMenuOpen } from "../../../redux/header/header-actions";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../../routes";
import styleHeader from "../Header.module.scss";
import style from "./HeaderMenu.module.scss";

const HeaderMenu: FC = () => {
  const dispatch = useDispatch();
  const { isAuth, userData } = useAppSelector((state) => state.auth);

  const handleClose = () => {
    dispatch(setMenuOpen(false));
  };

  const handleCityChange = () => {
    dispatch(setChangeCityOpen(true));
    handleClose();
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  useEffect(() => {
    const handleCloseClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(`.${styleHeader.header}`)) {
        handleClose();
      }
    };

    const handleEscClose = (event: any) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keyup", handleEscClose);
    document.addEventListener("click", handleCloseClick);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
      document.removeEventListener("click", handleCloseClick);
    };
  });

  return (
    <div className={style.menu}>
      <nav className={style.menuNav}>
        <ul className={style.menuColumn}>
          {FOOTER_LINKS.map((link) => (
            <li key={link.route} className={style.menuItem}>
              <Link
                to={link.route}
                className={style.menuLink}
                onClick={handleClose}
              >
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
                onClick={handleClose}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isAuth && (
        <div className={style.user}>
          <button
            type="button"
            className={style.user__button}
            onClick={handleCityChange}
          >{`${userData?.city.name}. Изменить город`}</button>
          <button
            type="button"
            className={style.user__button}
            onClick={handleLogout}
          >
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
