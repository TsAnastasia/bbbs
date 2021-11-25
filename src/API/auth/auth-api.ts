import { IAuth } from "./auth-interface";
import users from "../_dataForAPI/users.json";

const ERROR_AUTH = "Неправильные логин или пароль";

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
};

export default authAPI;
