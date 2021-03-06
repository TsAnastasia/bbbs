import React from "react";
import { useDispatch } from "react-redux";

import style from "./app.module.scss";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import ChangeCityForm from "./components/forms/changeCity/ChangeCityForm";
import LoginForm from "./components/forms/login/LoginForm";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import { useAppSelector } from "./hooks/redux";
import { setChangeCityOpen, setLoginOpen } from "./redux/auth/auth-actions";

function App() {
  const dispatch = useDispatch();
  const { isLoginOpen, isChangeCityOpen } = useAppSelector(
    (state) => state.auth
  );

  const handleLoginClose = () => {
    dispatch(setLoginOpen(false));
  };

  const handleChangeCityClose = () => {
    dispatch(setChangeCityOpen(false));
  };

  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <AppRouter />
      </main>
      <Footer />
      <Popup isOpen={isLoginOpen} onClose={handleLoginClose} hasButtonClose>
        <LoginForm />
      </Popup>
      <Popup isOpen={isChangeCityOpen} onClose={handleChangeCityClose}>
        <ChangeCityForm />
      </Popup>
    </div>
  );
}

export default App;
