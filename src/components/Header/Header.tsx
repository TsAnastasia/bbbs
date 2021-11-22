import cl from "classnames";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { login, logout } from "../../redux/auth/auth-actions";
import { setMenuOpen } from "../../redux/header/header-actions";
import { AppRoutesEnum } from "../../routes";
import style from "./Header.module.scss";
import HeaderMenu from "./menu/HeaderMenu";
import HeaderNav from "./nav/HeaderNav";

const Header: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const {
    menu: { isOpen: isMenuOpen },
  } = useAppSelector((state) => state.header);

  const handleProfileToggle = () => {
    // TODO login popup
    isAuth ? dispatch(logout()) : dispatch(login());

    handleMenuClose();
  };

  const handleMenuToggle = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  };

  const handleMenuClose = () => {
    dispatch(setMenuOpen(false));
  };

  const handleSearchToggle = () => {
    // TODO search
    handleMenuClose();
  };

  return (
    <header className={cl(style.header, isMenuOpen && style.header_menuOpen)}>
      <button
        type="button"
        className={cl(
          style.header__button,
          style.header__menuButton,
          isMenuOpen
            ? style.header__button_menuClose
            : style.header__button_menu
        )}
        onClick={handleMenuToggle}
      />
      <Link
        to={AppRoutesEnum.MAIN}
        className={style.header__logo}
        onClick={handleMenuClose}
      >
        наставники.про
      </Link>
      <HeaderNav />
      <div className={style.header__actions}>
        <button
          type="button"
          className={cl(style.header__button, style.header__button_search)}
          onClick={handleSearchToggle}
        />
        <div className={style.header__actionsLine}></div>
        <button
          type="button"
          className={cl(
            style.header__button,
            style.header__profile,
            isMenuOpen && style.header__profile_open,
            isAuth
              ? style.header__button_profileLogout
              : style.header__button_profileLogin
          )}
          onClick={handleProfileToggle}
        />
      </div>
      {isMenuOpen && <HeaderMenu />}
    </header>
  );
};

export default Header;
