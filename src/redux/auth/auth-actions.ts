import authAPI from "../../API/auth/auth-api";
import { IAuth, ICity, IUser } from "../../API/auth/auth-interface";
import dataAPI from "../../API/data/data-api";
import { IDataCites } from "../../API/data/data-interface";
import {
  AuthActionsEnum,
  SetAuth,
  SetAuthError,
  SetAuthLoading,
  SetChangeCityCities,
  SetChangeCityOpen,
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
  setChangeCityCities: (data: IDataCites): SetChangeCityCities => ({
    type: AuthActionsEnum.CHANGE_CITY_CITIES,
    data,
  }),
  setChangeCityOpen: (data: boolean): SetChangeCityOpen => ({
    type: AuthActionsEnum.CHANGE_CITY_OPEN,
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

export const getAllCities = (): ThunkTypeAsync => async (dispatch) => {
  try {
    const data = dataAPI.getCites();
    dispatch(authActions.setChangeCityCities(data));
  } catch (error) {
    console.log(error);
  }
};

export const setChangeCityOpen =
  (isOpen: boolean): ThunkType =>
  (dispatch) => {
    dispatch(authActions.setChangeCityOpen(isOpen));
  };

export const changeUserCity =
  (newCity: ICity): ThunkTypeAsync =>
  async (dispatch, getState) => {
    const user = getState().auth.userData!;
    try {
      const data = await authAPI.changeCity(user.id, newCity);
      dispatch(authActions.setUserData(data));
      dispatch(authActions.setChangeCityOpen(false));
    } catch (error) {
      console.log(error);
    }
  };
