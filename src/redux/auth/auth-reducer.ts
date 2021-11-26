import { IUser } from "../../API/auth/auth-interface";
import { IDataCites } from "../../API/data/data-interface";
import { AllTypes, AuthActionsEnum, InitialStateType } from "./auth-types";

export const initialState = {
  authError: null as string | null,
  authLoading: false,
  isAuth: false,
  isLoginOpen: false,
  userData: null as IUser | null,
  isChangeCityOpen: false,
  cities: { main: [], another: [] } as IDataCites,
};

const authReducer = (
  state = initialState,
  action: AllTypes
): InitialStateType => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      // TODO save in session storage
      return { ...state, isAuth: action.data };

    case AuthActionsEnum.SET_AUTH_ERROR:
      return { ...state, authError: action.data };

    case AuthActionsEnum.SET_AUTH_LOADING:
      return { ...state, authLoading: action.data };

    case AuthActionsEnum.SET_LOGIN_OPEN:
      return { ...state, isLoginOpen: action.data };

    case AuthActionsEnum.SET_USER_DATA:
      // TODO save in session storage
      return { ...state, userData: action.data };

    case AuthActionsEnum.CHANGE_CITY_CITIES:
      return { ...state, cities: action.data };

    case AuthActionsEnum.CHANGE_CITY_OPEN:
      return { ...state, isChangeCityOpen: action.data };

    default:
      return state;
  }
};

export default authReducer;
