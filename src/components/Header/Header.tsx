import React, { FC } from "react";
import { Link } from "react-router-dom";

import { AppRoutesEnum } from "../../routes";
import HeaderNav from "./nav/HeaderNav";
import style from "./Header.module.scss";
import cl from "classnames";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/auth/auth-actions";

const Header: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const handleProfileToggle = () => {
    console.log("isauth", isAuth);
    isAuth ? dispatch(logout()) : dispatch(login());
  };

  return (
    <header className={style.header}>
      <button
        type="button"
        className={cl(style.header__button, style.header__button_menu)}
      />
      <Link to={AppRoutesEnum.MAIN} className={style.header__logo}>
        наставники.про
      </Link>
      <HeaderNav />
      <div className={style.header__actions}>
        <button
          type="button"
          className={cl(style.header__button, style.header__button_search)}
        />
        <div className={style.header__actionsLine}></div>
        <button
          type="button"
          className={cl(
            style.header__button,
            style.header__profile,
            isAuth
              ? style.header__button_profileLogout
              : style.header__button_profileLogin
          )}
          onClick={handleProfileToggle}
        />
      </div>
    </header>
  );
};

export default Header;
