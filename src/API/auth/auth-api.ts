import { IAuth, IUser } from "./auth-interface";

import users from "../dataForAPI/users.json";

const authAPI = {
  login: (data: IAuth): IUser => {
    // TODO: filter user
    return users[0];
  },
};

export default authAPI;
