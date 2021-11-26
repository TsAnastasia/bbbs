import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/redux";
import { login } from "../../../redux/auth/auth-actions";
import AppButton from "../../UI/button/AppButton";
import AppInput from "../../UI/input/AppInput";
import { validationSchemaLogin as validationSchema } from "../validate";
import style from "./LoginForm.module.scss";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { authError } = useAppSelector((state) => state.auth);
  const [isPasswordVisible, SetIsPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const handleIsPasswordVisibleToggle = () => {
    SetIsPasswordVisible((state) => !state);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={style.login}>
      <p className={style.title}>Вход</p>
      <div>
        <p className={style.message}>
          Вход в личный кабинет доступен наставникам программы «Старшие Братья
          Старшие Сёстры».
        </p>
        <p className={style.message}>
          Пожалуйста, введите логин и пароль из письма. Если вам не приходило
          письмо, свяжитесь с вашим куратором.
        </p>
      </div>
      <AppInput
        type="text"
        name="login"
        title="Логин"
        value={formik.values.login}
        onChange={formik.handleChange}
        error={formik.touched.login ? formik.errors.login : undefined}
      />
      <AppInput
        type={isPasswordVisible ? "text" : "password"}
        name="password"
        title="Пароль"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password ? formik.errors.password : undefined}
      />
      <button
        type="button"
        onClick={handleIsPasswordVisibleToggle}
        className={style.passwordVisible}
      >
        {`${isPasswordVisible ? "Скрыть" : "Показать"} пароль`}
      </button>
      <div className={style.submit}>
        <p className={style.error}>{authError}</p>
        <AppButton type="submit" text="Войти" />
      </div>
    </form>
  );
};

export default LoginForm;
