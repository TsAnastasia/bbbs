import { IAuth, IUser } from "./auth-interface";

import users from "../_dataForAPI/users.json";

const authAPI = {
  login: (data: IAuth): IUser => {
    // TODO: filter user
    return users[0];
  },
};

export default authAPI;
