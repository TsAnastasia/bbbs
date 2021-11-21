import { IUser } from "../../API/auth/auth-interface";
import { AllTypes, AuthActionsEnum, InitialStateType } from "./auth-types";
// TODO: change on fun API
import users from "../../API/dataForAPI/users.json";

export const initialState = {
  // TODO not auth on load
  isAuth: true,
  userData: users[0] as IUser,
};

const authReducer = (
  state = initialState,
  action: AllTypes
): InitialStateType => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.data };

    default:
      return state;
  }
};

export default authReducer;
