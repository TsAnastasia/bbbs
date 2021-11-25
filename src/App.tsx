import React from "react";
import { useDispatch } from "react-redux";

import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/forms/login/LoginForm";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import { useAppSelector } from "./hooks/redux";
import { setLoginOpen } from "./redux/auth/auth-actions";

function App() {
  const dispatch = useDispatch();
  const { isLoginOpen } = useAppSelector((state) => state.auth);

  const handleLoginClose = () => {
    dispatch(setLoginOpen(false));
  };

  return (
    <div className={style.app}>
      <Popup isOpen={isLoginOpen} onClose={handleLoginClose} hasButtonClose>
        <LoginForm />
      </Popup>
      <Header />
      <main className={style.app__main}></main>
      <Footer />
    </div>
  );
}

export default App;
