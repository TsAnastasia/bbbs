import { ThunkAction } from "redux-thunk";
import { IUser } from "../../API/auth/auth-interface";
import { IDataCites } from "../../API/data/data-interface";
import { StateType } from "../store";
import { initialState } from "./auth-reducer";

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_AUTH_ERROR = "SET_AUTH_ERROR",
  SET_AUTH_LOADING = "SET_AUTH_LOADING",
  SET_LOGIN_OPEN = "SET_LOGIN_OPEN",
  SET_USER_DATA = "SET_USER_DATA",
  CHANGE_CITY_CITIES = "CHANGE_CITY_CITIES",
  CHANGE_CITY_OPEN = "CHANGE_CITY_OPEN",
}

export type InitialStateType = typeof initialState;

export type AllTypes =
  | SetAuth
  | SetAuthError
  | SetAuthLoading
  | SetLoginOpen
  | SetUserData
  | SetChangeCityCities
  | SetChangeCityOpen;

export type ThunkTypeAsync = ThunkAction<
  Promise<void>,
  StateType,
  unknown,
  AllTypes
>;
export type ThunkType = ThunkAction<void, StateType, unknown, AllTypes>;

export type SetAuth = {
  type: AuthActionsEnum.SET_AUTH;
  data: boolean;
};

export type SetAuthError = {
  type: AuthActionsEnum.SET_AUTH_ERROR;
  data: string | null;
};

export type SetAuthLoading = {
  type: AuthActionsEnum.SET_AUTH_LOADING;
  data: boolean;
};

export type SetLoginOpen = {
  type: AuthActionsEnum.SET_LOGIN_OPEN;
  data: boolean;
};

export type SetUserData = {
  type: AuthActionsEnum.SET_USER_DATA;
  data: IUser | null;
};

export type SetChangeCityCities = {
  type: AuthActionsEnum.CHANGE_CITY_CITIES;
  data: IDataCites;
};

export type SetChangeCityOpen = {
  type: AuthActionsEnum.CHANGE_CITY_OPEN;
  data: boolean;
};
