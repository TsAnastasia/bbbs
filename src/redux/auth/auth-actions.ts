import authAPI from "../../API/auth/auth-api";
import { IAuth, IUser } from "../../API/auth/auth-interface";
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

export const login =
  (data: IAuth): ThunkTypeAsync =>
  async (dispatch) => {
    dispatch(authActions.setAuthError(null));
    dispatch(authActions.setAuthLoading(true));
    try {
      const user = await authAPI.login(data);
      dispatch(authActions.setUserData(user));
      dispatch(authActions.setAuth(true));
      dispatch(authActions.setLoginOpen(false));
    } catch (error) {
      dispatch(authActions.setAuthError((error as Error).message));
    } finally {
      dispatch(authActions.setAuthLoading(false));
    }
  };

export const logout = (): ThunkType => (dispatch) => {
  dispatch(authActions.setUserData(null));
  dispatch(authActions.setAuth(false));
};

export const setLoginOpen =
  (isOpen: boolean): ThunkType =>
  (dispatch) => {
    dispatch(authActions.setLoginOpen(isOpen));
  };
