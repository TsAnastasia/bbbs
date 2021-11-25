import { useFormik } from "formik";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/redux";
import { login } from "../../../redux/auth/auth-actions";
import AppInput from "../../AppInput/AppInput";
import { validationSchemaLogin as validationSchema } from "../validate";

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
    <form onSubmit={formik.handleSubmit}>
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
      <p>{authError}</p>
      <button type="button" onClick={handleIsPasswordVisibleToggle}>
        {`${isPasswordVisible ? "Скрыть" : "Показать"} пароль`}
      </button>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
