import { IUser } from "../../API/auth/auth-interface";
// TODO: change on fun API
import users from "../../API/dataForAPI/users.json";
import {
  AuthActionsEnum,
  SetAuth,
  SetAuthError,
  SetAuthLoading,
  SetLoginOpen,
  SetUserData,
  ThunkType,
  ThunkTypeAsync,
} from "./auth-types";

const authActions = {
  setAuth: (data: boolean): SetAuth => ({
    type: AuthActionsEnum.SET_AUTH,
    data,
  }),
  setAuthError: (data: string | null): SetAuthError => ({
    type: AuthActionsEnum.SET_AUTH_ERROR,
    data,
  }),
  setAuthLoading: (data: boolean): SetAuthLoading => ({
    type: AuthActionsEnum.SET_AUTH_LOADING,
    data,
  }),
  setLoginOpen: (data: boolean): SetLoginOpen => ({
    type: AuthActionsEnum.SET_LOGIN_OPEN,
    data,
  }),
  setUserData: (data: IUser | null): SetUserData => ({
    type: AuthActionsEnum.SET_USER_DATA,
    data,
  }),
};

export const login = (): ThunkType => (dispatch) => {
  dispatch(authActions.setAuth(true));
  dispatch(authActions.setUserData(users[0]));
};

export const logout = (): ThunkTypeAsync => async (dispatch) => {
  dispatch(authActions.setAuthError(null));
  dispatch(authActions.setAuthLoading(true));
  try {
    dispatch(authActions.setAuth(false));
    dispatch(authActions.setUserData(null));
  } catch (error) {
    dispatch(authActions.setAuthError((error as Error).message));
  } finally {
    dispatch(authActions.setAuthLoading(false));
  }
};

export const setLoginOpen =
  (isOpen: boolean): ThunkType =>
  (dispatch) => {
    dispatch(authActions.setLoginOpen(isOpen));
  };
