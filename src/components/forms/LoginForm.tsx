import React, { ChangeEvent, FC } from "react";
import AppInput from "../AppInput/AppInput";

const LoginForm: FC = () => {
  return (
    <form>
      <p>Вход</p>
      <p>
        Вход в личный кабинет доступен наставникам программы «Старшие Братья
        Старшие Сёстры».
      </p>
      <p>
        Пожалуйста, введите логин и пароль из письма. Если вам не приходило
        письмо, свяжитесь с вашим куратором.
      </p>
      <AppInput
        type="text"
        name="name"
        title="Логин"
        value={""}
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <AppInput
        type="password"
        name="password"
        title="Пароль"
        value={""}
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <button type="button">Показать / скрыть пароль</button>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
