import { IAuth, ICity } from "./auth-interface";
import users from "../_dataForAPI/users.json";

const ERROR_AUTH = "Неправильные логин или пароль";
const ERROR_USER_NOT_FOUND = "Пользователь не найден";

const authAPI = {
  login: (data: IAuth) => {
    const user = users.find(
      (u) => u.login === data.login && u.password === data.password
    );
    if (!!user) {
      return Promise.resolve(user);
    }
    return Promise.reject({ message: ERROR_AUTH });
  },
  changeCity: (userId: number, newCity: ICity) => {
    const user = users.find((u) => u.id === userId);
    if (!!user) {
      return Promise.resolve({ ...user, city: newCity });
    }
    return Promise.reject({ message: ERROR_USER_NOT_FOUND });
  },
};

export default authAPI;
