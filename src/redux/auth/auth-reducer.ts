import { IUser } from "../../API/auth/auth-interface";
import { AllTypes, AuthActionsEnum, InitialStateType } from "./auth-types";

export const initialState = {
  // TODO not auth on load
  authError: null as string | null,
  authLoading: false,
  isAuth: false,
  isLoginOpen: false,
  userData: null as IUser | null,
};

const authReducer = (
  state = initialState,
  action: AllTypes
): InitialStateType => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.data };

    case AuthActionsEnum.SET_AUTH_ERROR:
      return { ...state, authError: action.data };

    case AuthActionsEnum.SET_AUTH_LOADING:
      return { ...state, authLoading: action.data };

    case AuthActionsEnum.SET_LOGIN_OPEN:
      return { ...state, isLoginOpen: action.data };

    case AuthActionsEnum.SET_USER_DATA:
      return { ...state, userData: action.data };

    default:
      return state;
  }
};

export default authReducer;
