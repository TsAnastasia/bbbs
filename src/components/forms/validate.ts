import * as Yup from "yup";

const ERROR_MESAGES = {
  required: "Обязательное поле",
  min: (v: number) => `Минимум ${v} ${v === 1 ? "символ" : "символов"}`,
  max: (v: number) => `Максимум ${v} ${v === 1 ? "символ" : "символов"}`,
};

export const validationSchemaLogin = Yup.object().shape({
  login: Yup.string()
    .required(ERROR_MESAGES.required)
    .min(2, ERROR_MESAGES.min(2))
    .max(15, ERROR_MESAGES.max(15)),
  password: Yup.string().required(ERROR_MESAGES.required),
});
